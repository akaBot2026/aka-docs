---
id: office365-application-scope
title: "Office 365 アプリケーション スコープ"
sidebar_label: "Office365 アプリケーション スコープ"
sidebar_position: 3
description: "Office 365 アプリケーション スコープ アクティビティのドキュメントです。"
displayed_sidebar: activitiesSidebar
---

# Office365 アプリケーション スコープ

`RCA.Activities.Office365.Office365ApplicationScope`

## 説明

Microsoft Graph API を通じて Microsoft Office 365 サービスへの認証済み接続を確立し、コンテナー内に配置されたすべての子アクティビティに接続コンテキストを提供します。

Office 365 に関するすべてのアクティビティ（Upload File、Send Mail、Get List Items など）は、このスコープの **Do** ブロック内に配置する必要があります。スコープが認証トークンを管理し、ネストされたすべてのアクティビティに自動的に渡します。

![office-application-scope.png](/static/img/office-application-scope.png)

(\*必須項目)

> 認証情報の設定と Office 365 への接続に関するステップバイステップガイドについては、[Office 365 への接続](azure-app-registration.md) を参照してください。

---

## アクティビティ本体の設定

* **Do** - 同じ接続コンテキストを共有する Office 365 アクティビティを配置するコンテナーブロックです。

---

## プロパティ

### 認証 (Authentication)

* **Application Id: `InArgument<String>`\*** - 登録済み Microsoft Entra アプリケーションの Azure アプリケーション（クライアント）ID です。すべての認証タイプで必須です。

* **Authentication Type: AuthenticationType** - Microsoft Office 365 との認証に使用する方式です。デフォルト: `InteractiveToken`。以下のいずれかの値を選択してください：

  | 値 | 説明 |
  | :--- | :--- |
  | `InteractiveToken` *（デフォルト）* | ブラウザーのポップアップを開き、ユーザーが Microsoft アカウントで対話的にサインインできるようにします。 |
  | `IntegratedWindowsAuthentication` | 現在の Windows ユーザーの認証情報（Windows SSO）を使用して認証します。マシンがドメインに参加していること、および **Tenant** ID が必要です。 |
  | `UsernameAndPassword` | 保存された Office 365 のユーザー名とパスワードを使用して認証します。**Tenant**、**Username**、および **Password**（または **Secure Password**）が必要です。アカウントの MFA を無効にする必要があります。 |
  | `ApplicationIdAndSecret` | クライアントシークレットを使用して、登録済みアプリケーションとして認証します。無人自動化向けです。**Tenant** と **Application Secret**（または **Secure Application Secret**）が必要です。 |
  | `ApplicationIdAndCertificate` | 証明書を使用して、登録済みアプリケーションとして認証します。無人自動化で最もセキュアな方式です。**Tenant**、**Certificate As Base64**、および **Certificate Password**（保護されている場合）が必要です。 |

* **Services: MicrosoftService\*** - このスコープがアクセスを許可する Microsoft 365 サービスです。以下の値から 1 つ以上選択してください（`Unselected` は不可）：

  | 値 | アクセスするサービス |
  | :--- | :--- |
  | `Files` | OneDrive および SharePoint のファイル操作（アップロード、ダウンロード、コピー、移動、削除など） |
  | `Mail` | Outlook メールボックスの操作（メール送信、取得、移動など） |
  | `Calendar` | Outlook カレンダーの操作 |
  | `Groups` | Microsoft 365 グループの操作 |
  | `Shared` | サービス間の共有リソースへのアクセス（共有メールボックス、共有カレンダー、SharePoint サイトなど） |

* **Tenant: `InArgument<String>`\*** - Azure ディレクトリ（テナント）ID またはテナントドメイン名（例: `yourcompany.onmicrosoft.com` または GUID）です。
  - `InteractiveToken` の場合、空白のままにすると、スコープはデフォルトで `common` エンドポイントを使用します。
  - `IntegratedWindowsAuthentication`、`UsernameAndPassword`、`ApplicationIdAndSecret`、`ApplicationIdAndCertificate` の場合、**Tenant は必須**です。

* **Environment: HostingEnvironment** - 接続する Microsoft クラウド環境です。デフォルト: `Global`。`Default`、`Global`、`China`、`Germany`、`USGovernment`、`USGovernmentDOD` から選択できます。組織がソブリンクラウドまたはナショナルクラウドを使用している場合にのみ変更してください。

* **OAuth2 Username: `InArgument<String>`** - ユーザーの Office 365 メールアドレスです。`InteractiveToken` が認証プロンプトでユーザー名を事前入力するために使用します。

---

### アプリケーション証明書とシークレット (Application Certificate And Secret)

これらのプロパティは、**Authentication Type** が `ApplicationIdAndCertificate` に設定されている場合に適用されます。

* **Certificate As Base64: `InArgument<String>`\*** - Base64 文字列としてエンコードされた `.pfx` 証明書ファイルの内容です。`ApplicationIdAndCertificate` で必須です。

* **Certificate Password: `InArgument<SecureString>`** - 証明書ファイルを保護するパスワードで、`SecureString` として保存されます。

---

### アプリケーション ID とシークレット (Application ID And Secret)

これらのプロパティは、**Authentication Type** が `ApplicationIdAndSecret` に設定されている場合に適用されます。

* **Application Secret: `InArgument<String>`\*** - Azure アプリ登録で生成されたクライアントシークレット文字列です。**Secure Application Secret** が指定されていない場合に必須です。

---

### セキュアなアプリケーションシークレット (Secure Application Secret)

これらのプロパティは、**Authentication Type** が `ApplicationIdAndSecret` に設定されている場合に適用されます。

* **Secure Application Secret: `InArgument<SecureString>`\*** - セキュリティ強化のために `SecureString` 変数として保存されたクライアントシークレットです。**Application Secret** が指定されていない場合に必須です。

---

### ユーザー名とパスワード (Username And Password)

これらのプロパティは、**Authentication Type** が `UsernameAndPassword` に設定されている場合に適用されます。

* **Username: `InArgument<String>`\*** - アカウントの Office 365 メールアドレスです（例: `robot@yourcompany.com`）。`UsernameAndPassword` で必須です。

* **Password: `InArgument<String>`\*** - プレーンテキストのアカウントパスワードです。**Secure Password** が指定されていない場合に必須です。

* **Secure Password: `InArgument<SecureString>`\*** - `SecureString` 変数として保存されたアカウントパスワードです。**Password** が指定されていない場合に必須です。

---

### 共通 (Common)

* **Continue On Error: `InArgument<Boolean>`** - このアクティビティがエラーをスローした場合に実行を継続するかどうかを指定します。
  - `True`：スコープ内でエラーが発生しても、ワークフローは次のアクティビティの実行を継続します。
  - `False` *（デフォルト）*：ワークフローは停止してエラーを報告します。

* **Timeout: `InArgument<Int32>`** - 認証および Microsoft Graph API リクエストのタイムアウトエラーをスローするまでの最大待機時間（**ミリ秒**単位）です。未設定または `<= 0` の場合、デフォルトは `30000` ms（30 秒）です。

---

### その他 (Misc)

* **Display Name (`String`)** - ワークフロー デザイナーでのアクティビティの表示名です。ワークフローを読みやすくするために変更できます。デフォルト: `Office365 Application Scope`。

---

## 関連情報

* [Office 365 への接続](azure-app-registration.md) - Azure アプリケーションの登録と認証設定に関するステップバイステップガイドです。
