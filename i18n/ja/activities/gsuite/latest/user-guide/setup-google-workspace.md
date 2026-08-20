---
id: setup-google-workspace
title: "Application Scope - Google Workspace セットアップ"
sidebar_label: "Google Workspace セットアップ"
sidebar_position: 17
description: "GSuite Application Scope の Google Workspace セットアップガイド。"
displayed_sidebar: activitiesSidebar
---

# GSuite Application Scope 用 Google Workspace セットアップガイド

このガイドでは、akaBot の `GSuiteApplicationScope` に Google Workspace 認証を設定する方法について説明します。

このアクティビティは以下の Google サービスをサポートしています：

| akaBot サービス | カバーされるアクティビティ |
| --- | --- |
| Gmail | `SendEmail`、`GetMailMessages`、`ChangeLabels` |
| Drive | アップロード、ダウンロード、コピー、移動、削除、検索、ファイル情報、フォルダ、権限アクティビティ |
| Sheets | セル、範囲、行、列、シート、スプレッドシート操作の読み取り/書き込み |

## 1. アプリ: Google Cloud プロジェクトの作成または選択

1. [Google Cloud Console](https://console.cloud.google.com/) にアクセスします。
2. プロジェクトを所有する Google アカウントまたは Workspace 管理者アカウントでサインインします。
3. 新しいプロジェクトを作成するか、既存のプロジェクトを選択します。
4. このプロジェクトが akaBot `GSuiteApplicationScope` に使用されることを確認します。

![Google Cloud プロジェクトセレクタ](/static/img/01-project-selector.png)

## 2. APIs & Services: アクティビティ用の API を有効化

1. Google Cloud Console で以下を開きます：

   ```text
   APIs & Services -> Enable APIs and Services
   ```

2. akaBot アクティビティに必要な API サービスを検索して有効化します。

| akaBot アクティビティグループ | 有効化する API |
| --- | --- |
| Gmail アクティビティ | Gmail API |
| Drive アクティビティ | Google Drive API |
| Sheets アクティビティ | Google Sheets API |

![APIs and Services を有効化](/static/img/02-enable-apis-and-services.png)

![Gmail API](/static/img/03-gmail-api.png)

## 3. OAuth 同意画面

1. Google Cloud Console で以下を開きます：

   ```text
   APIs & Services -> OAuth consent screen
   ```

2. ユーザータイプを選択します。

| ユーザータイプ | 用途 |
| --- | --- |
| Internal（内部） | Google Workspace ドメイン内のユーザーのみがアプリを使用する場合 |
| External（外部） | Google Workspace ドメイン外のユーザーがアプリを使用する場合 |

3. 必要なアプリ情報を入力します：

   ```text
   アプリ名
   ユーザーサポートメール
   開発者連絡先メール
   認可されたドメイン（必要に応じて）
   プライバシーポリシー URL（必要に応じて）
   ```

4. 現在の `GSuiteApplicationScope` で使用するスコープを追加します。

   ```text
   https://mail.google.com/
   https://www.googleapis.com/auth/drive
   https://www.googleapis.com/auth/spreadsheets
   https://www.googleapis.com/auth/drive.file
   ```

| スコープ | 対象範囲 |
| --- | --- |
| `https://mail.google.com/` | Gmail の送信、読み取り、ラベル付けアクティビティ |
| `https://www.googleapis.com/auth/drive` | Drive ファイル、フォルダ、検索、権限アクティビティ |
| `https://www.googleapis.com/auth/spreadsheets` | Sheets の読み取り、書き込み、更新アクティビティ |
| `https://www.googleapis.com/auth/drive.file` | アプリで使用される特定の Drive ファイル |

:::note
`https://mail.google.com/` と `https://www.googleapis.com/auth/drive` は広いスコープまたは制限されたスコープです。内部 Workspace アプリの場合、Google の確認は通常不要です。外部またはパブリックアプリの場合、Google は OAuth 確認とセキュリティ評価を要求する場合があります。
:::

## 4. 認証タイプ別セットアップ

### 4.1 OAuth クライアント ID

ユーザーが対話的にサインインして同意を付与する場合、このオプションを使用します。

#### Google Cloud セットアップ

1. 以下にアクセスします：

   ```text
   APIs & Services -> Credentials
   ```

2. 以下をクリックします：

   ```text
   Create Credentials -> OAuth client ID
   ```

3. アプリケーションタイプを選択します。akaBot デスクトップワークフローの場合、以下を使用します：

   ```text
   Desktop app
   ```

4. 認証情報を作成します。
5. 生成された値をコピーします：

   ```text
   Client ID
   Client Secret
   ```

![OAuth クライアント ID を作成](/static/img/08-create-oauth-client-id.png)

![OAuth クライアント認証情報](/static/img/09-oauth-client-credentials.png)

#### akaBot GSuiteApplicationScope セットアップ

以下を設定します：

```text
AuthenticationType = OAuthClientID
CredentialID = <Client ID>
CredentialSecret = <Client Secret>
Services = Gmail / Drive / Sheets
User = optional token cache user name
```

ワークフロー実行時に Google サインインが開き、トークンは以下に保存されます：

```text
Datastore.GSuite
```

### 4.2 サービスアカウントキー

サービスアカウントと直接共有されている Drive または Sheets ファイルを使用した自動実行の場合、このオプションを使用します。

#### Google Cloud セットアップ

1. 以下にアクセスします：

   ```text
   APIs & Services -> Credentials
   ```

2. 以下をクリックします：

   ```text
   Create Credentials -> Service account
   ```

3. サービスアカウントを作成します。
4. サービスアカウントを開きます。
5. `Keys` に移動します。
6. 以下をクリックします：

   ```text
   Add Key -> Create new key -> JSON
   ```

7. JSON キーファイルをダウンロードします。

![サービスアカウントを作成](/static/img/10-create-service-account.png)

![JSON サービスアカウントキーを作成](/static/img/11-service-account-json-key.png)

#### akaBot GSuiteApplicationScope セットアップ

以下を設定します：

```text
AuthenticationType = ServiceAccountKey
KeyType = JSON
KeyPath = <path to JSON key>
HasDomainWideAccesss = false
Services = Drive / Sheets
```

:::note
ドメイン全体委譲が有効でない限り、Gmail はサービスアカウント認証では動作しません。
:::

### 4.3 ドメイン全体委譲を伴うサービスアカウントキー

Workspace 全体の自動化、特に Gmail をサービスアカウント認証で使用する場合、このオプションを使用します。

#### Google Cloud セットアップ

1. サービスアカウントを開きます。
2. `Advanced settings` を展開します。
3. 数値の `Client ID` をコピーします。

#### Google Admin セットアップ

1. [Google Admin Console](https://admin.google.com/) にアクセスします。
2. スーパー管理者としてサインインします。
3. 以下を開きます：

   ```text
   Security -> Access and data control -> API controls
   ```

4. 以下をクリックします：

   ```text
   Manage Domain Wide Delegation
   ```

5. `Add new` をクリックします。
6. サービスアカウントの数値 Client ID を貼り付けます。
7. スコープをコンマ区切りリストとして追加します：

   ```text
   https://mail.google.com/,https://www.googleapis.com/auth/drive,https://www.googleapis.com/auth/spreadsheets,https://www.googleapis.com/auth/drive.file
   ```

8. `Authorize` をクリックします。

変更は最大 24 時間かかる場合がありますが、通常はより早く完了します。

#### akaBot GSuiteApplicationScope セットアップ

以下を設定します：

```text
AuthenticationType = ServiceAccountKey
KeyType = JSON
KeyPath = <path to JSON key>
HasDomainWideAccesss = true
UserEmail = <workspace-user@company.com>
Services = Gmail / Drive / Sheets
```

`UserEmail` は Google Workspace ドメイン内の実際のユーザーである必要があります。サービスアカウントは Google API を呼び出すときにこのユーザーを偽装します。

### 4.4 API キー

このオプションは限定的またはパブリック API シナリオにのみ使用します。

:::important
現在の akaBot コードでは、Gmail と Drive の API キー認証はブロックされています。API キーは限定的な Sheets またはパブリックデータシナリオにのみ使用してください。
:::

#### Google Cloud セットアップ

1. 以下にアクセスします：

   ```text
   APIs & Services -> Credentials
   ```

2. 以下をクリックします：

   ```text
   Create Credentials -> API key
   ```

3. 生成された API キーをコピーします。

![API キーを作成](/static/img/17-create-api-key.png)

#### akaBot GSuiteApplicationScope セットアップ

以下を設定します：

```text
AuthenticationType = ApiKey
ApiKey = <API key>
Services = Sheets
```

## 推奨セットアップ

| シナリオ | 推奨される認証タイプ |
| --- | --- |
| ユーザーがサインインして同意を付与する | OAuth クライアント ID |
| 内部の無人 Drive または Sheets 自動化 | サービスアカウントキー |
| Gmail を含む内部 Workspace 全体の自動化 | ドメイン全体委譲を伴うサービスアカウントキー |
| パブリックまたは限定的なデータのみ | API キー |

## 公式リファレンス

- [Google Workspace 認証情報ガイド](https://developers.google.com/workspace/guides/create-credentials)
- [OAuth 同意とスコープガイド](https://developers.google.com/workspace/guides/configure-oauth-consent)
- [ドメイン全体委譲ガイド](https://knowledge.workspace.google.com/admin/apps/control-api-access-with-domain-wide-delegation)
- [Google API の OAuth スコープ](https://developers.google.com/identity/protocols/oauth2/scopes)
