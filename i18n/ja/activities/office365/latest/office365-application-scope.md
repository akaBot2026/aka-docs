---
id: office365-application-scope
title: "Office 365 アプリケーション スコープ"
sidebar_label: "Office365 アプリケーション スコープ"
sidebar_position: 3
description: "Office 365 Application Scope アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Office365 アプリケーション スコープ

RCA.Activities.Office365.Office365ApplicationScope

## **概要**
Microsoft Graph API を介して Microsoft Office 365 サービスへの認証済み接続を確立し、その接続コンテキストをコンテナ内に配置されたすべての子アクティビティに提供します。

![office-application-scope.png](/static/img/office-application-scope.png)

(*必須項目の場合あり)

## **アクティビティの本文内**

* **Do** - Office 365 アクティビティを配置して接続コンテキストを共有するシーケンス コンテナ ブロック。

## **プロパティ**

**アプリケーション証明書とシークレット**

* **Certificate As Base64: InArgument<String>** - 証明書ベースの認証のために Base64 エンコードされた証明書の内容。

* **Certificate Password: InArgument<SecureString>** - 証明書ベースの認証で使用する証明書のパスワード。

**アプリケーション ID とシークレット**

* **Application Secret: InArgument<String>** - ApplicationIdAndSecret 認証で使用するアプリケーション シークレット。

* **Secure Application Secret: InArgument<SecureString>** - ApplicationIdAndSecret 認証で使用するセキュアなアプリケーション シークレット。

**共通**

* **Continue On Error (Boolean)** - 真または偽の 2 値を取るブール値。
  - True: アクティビティ内でエラーが発生してもプロセスの残りの実行を継続します。
  - False: 実行の継続をブロックします。

* **Timeout (InArgument<Int32>)** - スコープ内で行われる Microsoft Graph リクエストのタイムアウト（秒単位）。

**認証**

* **Application Id: InArgument<String>** - 認証に使用する Azure アプリケーション/クライアント ID。

* **Tenant: InArgument<String>** - Azure テナント ID またはテナント名。該当する場合のデフォルトテナントは common。

* **Authentication Type** - Microsoft Office 365 に接続するために使用される認証方法。

* **Services: MicrosoftService** - このスコープで有効にする Microsoft サービス。

* **Environment: HostingEnvironment** - Microsoft のクラウド環境。デフォルト値: Global。

* **OAuth2 Username: InArgument<String>** - OAuth2 認証フローで使用されるユーザー名。

**ユーザー名とパスワード**

* **Username: InArgument<String>** - ユーザー名とパスワード認証で使用するユーザー名。

* **Password: InArgument<String>** - ユーザー名とパスワード認証で使用するパスワード。

* **Secure Password: InArgument<SecureString>** - ユーザー名とパスワード認証で使用するセキュアなパスワード。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Open Window

