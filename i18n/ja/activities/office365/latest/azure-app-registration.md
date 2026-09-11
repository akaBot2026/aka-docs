---
id: azure-app-registration
title: "Office 365 への接続"
sidebar_label: "Office 365 への接続"
sidebar_position: 2
description: "Office 365 アプリケーション スコープ アクティビティを使用して、akaBot を Microsoft Office 365 に接続するための認証設定方法です。"
displayed_sidebar: activitiesSidebar
---

# Office 365 への接続

**Office 365 アプリケーション スコープ** アクティビティは、Microsoft Graph API を通じて akaBot を Microsoft Office 365 サービス（Files、Mail、Calendar、Groups、SharePoint）に接続します。

Office 365 のアクティビティを実行する前に、有効な **Authentication Type（認証タイプ）** と必要な **Services（サービス）** でスコープを設定する必要があります。このガイドでは、各オプションと必要なセットアップについて説明します。

---

## ステップ 1 — Azure へのアプリケーションの登録

すべての認証タイプには、Microsoft Entra ID（旧 Azure Active Directory）に登録されたアプリケーションの **Application ID（クライアント ID）** が必要です。これは一度だけ行う設定です。

1. **クラウド アプリケーション管理者** 以上のアカウントで [Microsoft Entra 管理センター](https://entra.microsoft.com) にサインインします。
2. 左側のナビゲーションメニューの **Entra ID** で **アプリの登録** を選択（または上部の検索バーで **アプリの登録** を検索）し、**新規登録**（`+ 新規登録`）をクリックします。
3. フォームに入力します：
   - **名前:** わかりやすい名前（例：`akaBot-Office365`）。
   - **サポートされているアカウントの種類:** 組織に応じて、**この組織ディレクトリのみのアカウント**（シングルテナント）またはマルチテナントを選択します。
   - **リダイレクト URI:**
     - `InteractiveToken` の場合は、**パブリック クライアント/ネイティブ（モバイルとデスクトップ）** を選択し、`http://localhost` または `https://login.microsoftonline.com/common/oauth2/nativeclient` を入力します。
     - 無人モード（`ApplicationIdAndSecret`、`ApplicationIdAndCertificate`）の場合は、空白のままにします。
4. **登録** をクリックします。
5. **概要** ページで、akaBot Studio で必要な 2 つの値をコピーします：
   - **アプリケーション（クライアント）ID** → **Application Id** プロパティ。
   - **ディレクトリ（テナント）ID** → **Tenant** プロパティ。

![office365-register.png](/static/img/office365-register.png)

---

## ステップ 2 — 認証タイプの選択

**Office 365 アプリケーション スコープ** アクティビティで、**Authentication Type** プロパティを以下のいずれかに設定します：

| Authentication Type | 動作 | 必要な Azure セットアップ |
| :--- | :--- | :--- |
| **InteractiveToken** *（デフォルト）* | ブラウザーのポップアップを開き、ユーザーが Microsoft アカウントにサインインできるようにします。 | Azure アプリを登録し、認証設定で **パブリック クライアント フローを許可する** を有効にします。 |
| **IntegratedWindowsAuthentication** | 現在の Windows ユーザーの認証情報（Windows SSO）を使用してサインインします。ブラウザーポップアップは不要です。 | Azure アプリを登録し、**パブリック クライアント フローを許可する** を有効にします。マシンがドメインに参加していること、および **Tenant** が必要です。 |
| **UsernameAndPassword** | 保存された Office 365 のユーザー名とパスワードを使用してサインインします。 | Azure アプリを登録し、**パブリック クライアント フローを許可する** を有効にします。アカウントの MFA を無効にする必要があります。**Tenant** が必要です。 |
| **ApplicationIdAndSecret** | クライアントシークレットを使用して、アプリケーション自体としてサインインします。完全な無人自動化に対応します。 | Azure アプリを登録し、**クライアントシークレット** を作成します（下記ステップ 3A 参照）。**Tenant** が必要です。 |
| **ApplicationIdAndCertificate** | 証明書を使用して、アプリケーション自体としてサインインします。無人自動化で最もセキュアな方式です。 | Azure アプリを登録し、**証明書** をアップロードします（下記ステップ 3B 参照）。**Tenant** が必要です。 |

> **どの認証タイプを使用すればよいですか？**
>
> - **有人自動化または初期テスト**の場合：**InteractiveToken** を使用します。
> - スケジュールに従って自動的に実行される**無人ロボット**の場合：**ApplicationIdAndSecret** または **ApplicationIdAndCertificate** を使用します。
> - **社内ドメイン参加済みマシン**の場合：**IntegratedWindowsAuthentication** がシームレスなシングルサインオンを提供します。

---

## ステップ 3 — 認証情報の設定（無人タイプのみ）

このステップは **ApplicationIdAndSecret** と **ApplicationIdAndCertificate** にのみ必要です。InteractiveToken、IntegratedWindowsAuthentication、UsernameAndPassword を使用する場合は、ステップ 4 にスキップしてください。

### オプション A — クライアントシークレットの作成（ApplicationIdAndSecret 用）

1. 登録済みアプリで、**管理 > 証明書とシークレット** に移動します。
2. **クライアント シークレット** の下で、**新しいクライアント シークレット** をクリックします。
3. 説明を入力し、有効期限を選択します。**追加** をクリックします。
4. **シークレットの値を直ちにコピーしてください。** 作成時に一度だけ表示されます。

![office365-new-client-secret.png](/static/img/office365-new-client-secret.png)

> **重要:** シークレットが期限切れになると、このアプリを使用する自動化が失敗します。期限切れ前にシークレットを再生成して akaBot を更新するよう、カレンダーにリマインダーを設定してください。

### オプション B — 証明書の生成とアップロード（ApplicationIdAndCertificate 用）

X.509 証明書を使用することは、無人ロボットにとって最もセキュアな認証方式です。証明書は誤ってプレーンテキストで露出することがなく、厳格な暗号化有効期限ポリシーをサポートしているためです。

#### 1. PowerShell での証明書ファイルの生成

PowerShell を開き、証明書ファイルを保存するディレクトリ（例：書き込み権限のあるプロジェクトフォルダーまたは認証情報フォルダー）に移動（`cd`）して、以下の各コマンドを実行します：

**ステップ 1.1 — 作業ディレクトリに移動する：**
```powershell
cd "<path-to-your-folder>"
```

**ステップ 1.2 — 2048 ビットの自己署名証明書を作成する（有効期間：6 か月）：**
```powershell
$cert = New-SelfSignedCertificate -Subject "CN=akaBot-Office365" -CertStoreLocation "Cert:\CurrentUser\My" -KeyExportPolicy Exportable -KeySpec Signature -KeyLength 2048 -KeyAlgorithm RSA -HashAlgorithm SHA256 -NotAfter (Get-Date).AddMonths(6)
```

**ステップ 1.3 — Microsoft Entra ID にアップロードする公開鍵（`.cer`）をエクスポートする：**
```powershell
Export-Certificate -Cert $cert -FilePath ".\akabot-cert.cer"
```

**ステップ 1.4 — パスワードを設定して秘密鍵アーカイブ（`.pfx`）をエクスポートする：**
*（`YourStrongPassword123!` をご自身のパスワードに置き換えてください）*
```powershell
$pwd = ConvertTo-SecureString -String "YourStrongPassword123!" -Force -AsPlainText
Export-PfxCertificate -Cert $cert -FilePath ".\akabot-cert.pfx" -Password $pwd
```

**ステップ 1.5 — `.pfx` ファイルを akaBot Studio 用の Base64 テキストファイルに変換する：**
```powershell
[Convert]::ToBase64String([System.IO.File]::ReadAllBytes(".\akabot-cert.pfx")) | Set-Content ".\cert-base64.txt"
```

これらのコマンドを実行すると、現在のディレクトリに 3 つのファイルが作成されます：
* `akabot-cert.cer` — Microsoft Entra ID にアップロードする公開鍵ファイルです。
* `akabot-cert.pfx` — パスワードで保護された秘密鍵ファイルです。
* `cert-base64.txt` — akaBot Studio で使用できる状態の、`.pfx` 証明書の Base64 文字列表現です。

#### 2. 公開鍵（`.cer`）を Microsoft Entra ID にアップロードする

1. Microsoft Entra 管理センターの登録済みアプリで、**管理 > 証明書とシークレット** に移動します。
2. **証明書** タブを選択し、**証明書のアップロード** をクリックします。
3. フォルダーアイコンをクリックし、`akabot-cert.cer` ファイルを選択して、説明（例：`akaBot Robot Cert`）を入力し、**追加** をクリックします。
4. 証明書が **サムプリント**、**開始日**、**有効期限** とともに一覧に表示されます。

![office365-certificates.png](/static/img/office365-certificates.png)

#### 3. akaBot Studio での設定

akaBot Studio で **Office 365 アプリケーション スコープ** アクティビティを設定します：
* **Authentication Type**: `ApplicationIdAndCertificate` を選択します。
* **Certificate As Base64**: `cert-base64.txt` の Base64 文字列を指定します。akaBot Center のテキストアセットに保存するか、実行時に次の方法で読み込むことができます：
  `System.IO.File.ReadAllText("path\to\cert-base64.txt")`
* **Certificate Password**: パスワードを `SecureString` 変数として渡すか、次の方法で初期化します：
  `new System.Net.NetworkCredential("", "YourStrongPassword123!").SecurePassword`

---

## ステップ 4 — API 権限の付与

登録済みアプリで、ワークフローが使用する **Services（サービス）** に対応する Microsoft Graph の権限を付与します：

| Services（akaBot での設定） | 委任アクセス許可（Interactive、IWA、Password 用） | アプリケーション アクセス許可（ApplicationIdAndSecret、ApplicationIdAndCertificate 用） |
| :--- | :--- | :--- |
| *（すべてのタイプ）* | `User.Read` | `User.Read.All` |
| **Files** | `Files.ReadWrite.All`、`Sites.ReadWrite.All` | `Files.ReadWrite.All`、`Sites.ReadWrite.All` |
| **Mail** | `Mail.ReadWrite`、`Mail.Send` | `Mail.ReadWrite`、`Mail.Send` |
| **Calendar** | `Calendars.ReadWrite` | `Calendars.ReadWrite` |
| **Groups** | `Group.ReadWrite.All` | `Group.ReadWrite.All` |
| **Shared**（SharePoint / 共有メールボックス） | `Sites.ReadWrite.All`、`Mail.ReadWrite.Shared` | `Sites.ReadWrite.All` |

### 権限の検索と追加の手順：

1. 登録済みアプリの左メニューで **管理 > API のアクセス許可** に移動し、**アクセス許可の追加**（`+ アクセス許可の追加`）をクリックします。
2. 表示される **API アクセス許可の要求** パネルで、上部の大きな **Microsoft Graph** カードをクリックします。
3. 認証モードに必要なアクセス許可の種類を選択します：
   - 有人モード（`InteractiveToken`、`IntegratedWindowsAuthentication`、`UsernameAndPassword`）を使用する場合は **委任されたアクセス許可** を選択します。
   - 無人ロボットモード（`ApplicationIdAndSecret` または `ApplicationIdAndCertificate`）を使用する場合は **アプリケーションのアクセス許可** を選択します。
4. **アクセス許可の選択** 検索ボックスに、上記のテーブルの各権限名を入力し（例：`Files.ReadWrite.All`、`Mail.ReadWrite`、`Mail.Send` を検索）、権限グループを展開して対応するチェックボックスにチェックを入れます。
5. パネル下部の **アクセス許可の追加** をクリックします。
6. **管理者の同意を付与する：** **API のアクセス許可** テーブルに戻り、**[組織/テナント] に管理者の同意を与えます**（*アクセス許可の追加* の横）をクリックし、**はい** で確認します。追加したすべての権限の **状態** 列に緑のチェックマーク（*... に許可されました*）が表示されていることを確認します。

![office365-api-permissions.png](/static/img/office365-api-permissions.png)

---

## ステップ 5 — akaBot Studio でのスコープの設定

akaBot Studio を開き、**Office 365 アプリケーション スコープ** アクティビティを追加して、以下のプロパティを設定します：

| プロパティ | 値 |
| :--- | :--- |
| **Application Id** | ステップ 1 で取得したアプリケーション（クライアント）ID です。 |
| **Tenant** | ステップ 1 で取得したディレクトリ（テナント）ID です。無人モードでは必須です。`InteractiveToken` の場合は `common` がデフォルトです。 |
| **Authentication Type** | 選択したモード（`InteractiveToken`、`IntegratedWindowsAuthentication`、`UsernameAndPassword`、`ApplicationIdAndSecret`、`ApplicationIdAndCertificate`）です。 |
| **Services** | 子アクティビティに必要なサービスを選択します（Files、Mail、Calendar、Groups、Shared）。 |
| **Environment** | 標準の商用 Microsoft 365 の場合は `Global` です。 |
| **OAuth2 Username** | *（InteractiveToken のみ）* サインインプロンプトに事前入力するユーザーのメールアドレスです。 |
| **Application Secret** / **Secure Application Secret** | *（ApplicationIdAndSecret のみ）* ステップ 3A で取得したクライアントシークレットです。 |
| **Certificate As Base64** / **Certificate Password** | *（ApplicationIdAndCertificate のみ）* ステップ 3B で取得した Base64 証明書文字列とそのパスワードです。 |
| **Username** / **Password**（または **Secure Password**） | *（UsernameAndPassword のみ）* Office 365 ユーザーの認証情報です。 |
| **Timeout** | API 操作の最大待機時間（**ミリ秒**単位）です（デフォルト：`30000` ms / 30 秒）。 |

![office-application-scope.png](/static/img/office-application-scope.png)

すべての Office 365 アクティビティ（Upload File、Send Mail、Get List Items など）を **Do** ブロック内に配置します。スコープがネストされたすべてのアクティビティに対して認証を自動的に処理します。

---

## 関連情報

* [Office 365 アプリケーション スコープ](office365-application-scope.md) - 完全なプロパティとカテゴリのリファレンスです。
