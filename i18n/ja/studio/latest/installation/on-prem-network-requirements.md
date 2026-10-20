---
id: on-prem-network-requirements
title: "インターネット プロキシを経由するオンプレミス ネットワークでの akaBot Center/Studio/Agent の構成"
sidebar_label: "オンプレミスネットワーク要件"
sidebar_position: 9
description: "インターネット プロキシを経由するオンプレミス ネットワークでの akaBot Center/Studio/Agent の構成方法について説明します。"
displayed_sidebar: studioSidebar
---
# インターネット プロキシを経由するオンプレミス ネットワークでの akaBot の構成

このガイドでは、akaBot Center が社内ネットワーク内に配置され、インターネット アクセスがフォワード プロキシ経由でのみ可能な環境で、akaBot Studio、Agent、Executor を構成する方法を説明します。

| 接続 | 経路 |
|---|---|
| Studio/Agent から akaBot Center への接続 | オンプレミス ネットワーク内での直接接続 |
| Studio/Executor から GitLab および NuGet.org への接続 | エンタープライズ プロキシ経由 |
| Center から Studio/Agent への接続 | 受信接続は不要 |

> Center およびインターネット サービスには HTTPS を使用してください。例として示したホスト名は、IT 管理者から提供された値に置き換えてください。

## 1. ネットワーク要件

アプリケーションを構成する前に、DNS、ファイアウォール、プロキシの各ルールを設定してください。

### 必要なサービス

| サービス名 | URL | ドメイン | IP アドレス | ポート | 用途 |
|---|---|---|---|---|---|
| akaBot Center | `https://center.company.local/` | 顧客定義の Center ホスト | 顧客定義の Center IP またはロード バランサー VIP | TCP 443（推奨）、または Center URL で指定されたポート | 認証、ハートビート、ジョブ、ログ、ワークフローの公開、アセット、ワークフロー パッケージのダウンロード |
| エンタープライズ プロキシ | `http://proxy.company.local:8080`（例） | 顧客定義のプロキシ ホスト | 顧客定義のプロキシ IP または VIP | 顧客定義の TCP ポート | 以下のインターネット サービスへの制御付きアクセスを提供 |
| akaBot GitLab パッケージ フィード | `https://gitlab.com/api/v4/projects/75840319/packages/nuget/index.json` | `gitlab.com` | 動的。固定 IP の許可リストは使用しない | TCP 443 | akaBot アクティビティ パッケージとそのメタデータのダウンロード |
| NuGet.org パッケージ サービス | `https://api.nuget.org/v3/index.json` | `api.nuget.org` | 動的。固定 IP の許可リストは使用しない | TCP 443 | 依存関係の解決と公開 NuGet パッケージのダウンロード |
| NuGet.org 検索 | `https://azuresearch-usnc.nuget.org/` および `https://azuresearch-ussc.nuget.org/` | `azuresearch-usnc.nuget.org`、`azuresearch-ussc.nuget.org` | 動的。固定 IP の許可リストは使用しない | TCP 443 | Studio Package Manager でのパッケージ検索と自動補完 |
| NuGet.org Web サイト | `https://www.nuget.org/` | `www.nuget.org` | 動的。固定 IP の許可リストは使用しない | TCP 443 | パッケージ情報や関連リンクの表示。ワークフロー実行には必須ではない |

公開パッケージ サービスはロード バランシングや CDN アドレスを使用します。現在の IP を解決して固定するのではなく、FQDN/SNI で許可してください。

### Center のポート

| 方向 | ソース | 宛先 | ポート | 要件 |
|---|---|---|---|---|
| アウトバウンド | Studio ワークステーション | akaBot Center | TCP 443、または構成済み Center URL のポート | 必須 |
| アウトバウンド | Agent ホスト | akaBot Center | TCP 443、または構成済み Center URL のポート | 必須 |
| インバウンド | akaBot Center | Studio または Agent | なし | 不要 |

Studio と Agent が Center 通信のすべてを開始します。Agent、Executor、およびその他の akaBot プロセス間のローカル通信には Windows 名前付きパイプが使用され、ネットワーク ファイアウォールのポートは不要です。

## 2. ルーティングとプロキシの構成

ネットワーク管理者に次のルールを適用してもらってください。

1. Center のホスト名がすべての Studio と Agent コンピューターから解決できるようにします。
2. Studio と Agent のコンピューターが Center URL に直接接続できるようにします。
3. Center ホストをエンタープライズ プロキシから除外します。PAC ファイルでは、一般的なプロキシ ルールの前に Center の FQDN に対して `DIRECT` を返すようにします。
4. プロキシが上記の GitLab および NuGet.org ドメインへの HTTPS 接続を作成できるようにします。
5. TLS 検査が有効な場合は、対話型ユーザーと未接続の Agent アカウントの両方に対して、組織の信頼済みルート証明書をインストールします。

PAC の例:

```text
center.company.local  -> DIRECT
gitlab.com            -> PROXY proxy.company.local:8080
*.nuget.org           -> PROXY proxy.company.local:8080
```

Center の HTTPS 証明書が DNS 名に対して発行されている場合は、Center を生の IP で構成しないでください。

## 3. akaBot Agent の構成

1. Agent が現在 Center に接続されている場合は切断します。
2. **Agent Settings** を開き、**Network** を選択します。
3. **Manual Proxy** を選択します。これはプロキシを必要とするネットワークで推奨されます。
4. ネットワーク管理者から提供されたプロキシの種類、サーバー アドレス、ポートを入力します。
5. プロキシで認証が必要な場合は、認証オプションを選択して割り当てられたアカウントを入力します。
6. 例外アドレスフィールドに Center ホストを追加します。複数のエントリをセミコロンで区切って指定します。例:

   ```text
   center.company.local;*.company.local
   ```

7. 組織のネットワーク ポリシーと一致する場合は、**Do not use the proxy server for local intranet addresses** を選択します。
8. 設定を保存し、Agent を再起動して Center に再接続します。

未接続の実行では、Agent/Executor を実行する Windows アカウントに対してプロキシ アクセスを構成してください。対話型ユーザーのプロキシ認証情報がそのアカウントで利用できない場合があります。

## 4. akaBot Studio の構成

Studio は akaBot Agent の Center 接続設定を継承します。

1. 前のセクションで説明した手順に従って Agent を構成します。
2. Agent が Center に正常に接続できることを確認します。
3. Agent と同じ Windows ユーザー セッションで Studio を起動します。
4. Studio が Center の環境やアセットなどのリソースを取得できることを確認します。

Center のアドレス、プロキシ、またはプロキシ例外リストが変更された場合は、Agent の設定を更新し、Agent を Center に再接続してから Studio を再起動してください。

この継承された接続は Center 通信に適用されます。ただし、Studio と Executor で使用するインターネット パッケージ アクセスは、次のセクションで説明する方法で別途構成する必要があります。

## 5. パッケージ ソースとパッケージ プロキシ アクセスの構成

Studio は現在の Windows ユーザーのパッケージ構成を使用します。Executor は、ワークフローが実行される Windows アカウントのパッケージ構成を使用します。

Studio Package Manager で次のパッケージ ソースが有効になっていることを確認してください。

| パッケージ ソース | アドレス |
|---|---|
| akaBot パッケージ | `https://gitlab.com/api/v4/projects/75840319/packages/nuget/index.json` |
| 公開パッケージ | `https://api.nuget.org/v3/index.json` |

Studio または Agent の Network ページのプロキシ設定は、すべての NuGet パッケージ要求を構成するわけではありません。ワークフローの設計または実行を行う各アカウントに対して、Windows/.NET または NuGet のプロキシを構成してください。ユーザー パッケージ構成は次の場所に保存されます。

```text
%LocalAppData%\akaBot\PackageManager.User.config
```

### `PackageManager.User.config` にパッケージ プロキシを追加する

Studio または Executor を実行する Windows ユーザーとしてサインインしている状態で、次の手順を実行してください。

1. Studio を閉じ、そのユーザーのワークフロー実行を停止します。
2. `%LocalAppData%\akaBot\PackageManager.User.config` をバックアップします。
3. 既存の `<packageSources>` セクションはそのままにし、ルート要素の `<configuration>` 内に `<config>` セクションを追加します。

   ```xml
   <?xml version="1.0" encoding="utf-8"?>
   <configuration>
     <packageSources>
       <add key="CurrentUser" value="%localappdata%\akaBot\Packages" />
       <add key="akaBotGitlab" value="https://gitlab.com/api/v4/projects/75840319/packages/nuget/index.json" />
       <add key="nuget.org" value="https://api.nuget.org/v3/index.json" />
     </packageSources>
     <config>
       <add key="http_proxy" value="http://proxy.company.local:8080" />
       <add key="http_proxy.user" value="COMPANY\package-user" />
       <add key="http_proxy.password" value="ENCRYPTED_PASSWORD_GENERATED_BY_NUGET" />
     </config>
   </configuration>
   ```

4. プロキシ URL とユーザー名を、ネットワーク管理者から提供された値に置き換えます。
5. NuGet CLI を使用して暗号化済みのパスワード値を生成します。同じ Windows ユーザーとして、同じコンピューター上で次のコマンドを実行してください。

   ```powershell
   nuget.exe config -Set "http_proxy=http://proxy.company.local:8080" -Set "http_proxy.user=COMPANY\package-user" -Set "http_proxy.password=<proxy-password>" -ConfigFile "$env:LOCALAPPDATA\akaBot\PackageManager.User.config"
   ```

6. 構成ファイルを再度開き、3 つのプロキシ エントリが存在することを確認します。NuGet はパスワードを暗号化した形式で書き込みます。その値を平文に置き換えないでください。
7. Studio または Agent を再度起動し、パッケージ検索と依存関係の復元を検証します。

暗号化済みのパスワードは、そのパスワードを作成した Windows ユーザーとコンピューターに対して保護されます。この構成は、対話型または未接続の実行アカウントごと、適用対象の各コンピューターに対して繰り返してください。統合プロキシ認証が利用可能な場合は `http_proxy.user` と `http_proxy.password` を省略し、Windows がサインイン中のアカウントの資格情報を提供できるようにします。

組織でプロキシ設定を一元管理している場合は、次の各対象に適用してください。

- Studio を実行する各ユーザー
- 対話型ワークフロー実行に使用するアカウント
- Agent/Executor で使用するすべてのサービスまたは未接続アカウント

パッケージ構成に平文のプロキシ パスワードを入れないでください。統合プロキシ認証、OS で一元管理された設定、または内部パッケージ リポジトリを優先してください。

### 制限の厳しい環境向けの推奨構成

インターネット制御が厳格な環境では、GitLab と NuGet.org から承認済みパッケージを内部の NuGet v3 リポジトリにミラーリングしてください。Studio と Executor をその内部リポジトリに向け、公開ソースは無効化してください。これにより信頼性が向上し、組織はデプロイ前にパッケージ バージョンを承認できます。

## 6. 構成の検証

Studio コンピューター、および Agent/Executor で使用する Windows アカウントから、次の確認を実行してください。

| テスト | 期待される結果 |
|---|---|
| 構成済みの Center URL を開く | プロキシ認証や証明書警告なしで Center サイトが応答する |
| Studio を Center に接続する | 認証が成功し、環境やアセットを取得できる |
| Agent を Center に接続する | Agent が Center で利用可能になり、ハートビート更新を継続して送信する |
| 承認済みプロキシ経由で `https://api.nuget.org/v3/index.json` を開く | JSON サービス インデックスが返される |
| 承認済みプロキシ経由で構成済みの GitLab パッケージ フィード URL を開く | フィードが応答する。フィードが認証を要求する場合は認証応答でもよい |
| Studio Package Manager で検索する | タイムアウトせずに結果が表示される |
| まだキャッシュされていないテスト依存関係をインストールまたは復元する | パッケージとその依存関係が正常にダウンロードされる |
| Agent を通じてワークフローを実行する | Center がワークフロー パッケージをダウンロードし、Executor が不足しているアクティビティ依存関係を復元する |

## 7. トラブルシューティング

| 症状 | 確認事項 |
|---|---|
| Studio または Agent が Center に接続できない | Center の DNS、TCP ポート、HTTPS 証明書の信頼、Center ホストがプロキシから除外されているかをご確認ください |
| Studio は Center に接続できるがパッケージ検索が空になる | NuGet 検索ドメインの両方をプロキシ経由で許可し、Studio のプロキシ設定を確認してください |
| パッケージ検索は動作するがワークフロー依存関係の復元に失敗する | Executor を実行している Windows アカウントにプロキシ アクセスを構成してください。対話型の Studio プロキシ設定がそのアカウントに適用されると想定しないでください |
| Agent は対話型では動作するが未接続ジョブで失敗する | 未接続アカウントのプロキシ、証明書の信頼、パッケージ構成、パッケージ キャッシュへのアクセスを確認してください |
| プロキシが繰り返し認証を要求する | 承認済みのサービス アカウントまたは統合認証を使用し、そのアカウントがプロキシ ポリシーで許可されていることを確認してください |
| TLS 検査が有効な場合のみ HTTPS リクエストが失敗する | 影響を受けるユーザーまたはサービス アカウントの信頼ストアに、企業の検査用 CA をインストールしてください |
| 公開 IP を許可リストに追加した後、アクセスが断続的に失敗する | GitLab と NuGet.org に対する IP ルールを FQDN/SNI ルールに置き換えてください |

顧客のワークフローやオプションのアクティビティ パッケージに必要な宛先は、この一覧の外にあります。たとえば、電子メール、FTP、ブラウザー、またはサードパーティ API を使用するワークフローでは、そのサービスへのアクセスも必要です。
