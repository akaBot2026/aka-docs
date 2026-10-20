---
id: box-scope
title: "Box スコープ"
sidebar_label: "Box スコープ"
sidebar_position: 1
description: "Box スコープアクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Box スコープ

RCA.Activities.Box.BoxScope

## **説明**

Box 接続スコープを作成し、子の Box アクティビティに Box クライアントを提供します。

![box-scope](/static/img/box-scope.png)

(※ 必須の場合)

## **アクティビティ本文内**

* **Do** - Box 接続スコープ内で実行する Box アクティビティ。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール値は True または False のいずれかです。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を続行します。
  - False: 実行の継続を停止します。

**入力**

* **Authentication Type: BoxAuthenticationType** - 使用する認証方法。利用可能な値: JWT、OAuth、BoxConnection。

* **Box Client: `InArgument<BoxClient>`** - Authentication Type が BoxConnection の場合に使用する既存の Box クライアント。

**JWT 認証**

* **Config File Content: `InArgument<String>`** - Box JWT 設定ファイルの内容。Config File Path の代わりにこちらを使用できます。

* **Config File Path: `InArgument<String>`** - Box JWT 設定ファイルのパス。Config File Content の代わりにこちらを使用できます。

* **User ID: `InArgument<String>`** - JWT 認証を使用する際に偽装（代行）する Box ユーザー ID（任意）。省略した場合、エンタープライズのサービスアカウントで接続します。

**OAuth 認証**

* **Client ID: `InArgument<String>`** - Box OAuth のクライアント ID。

* **Client Secret: `InArgument<SecureString>`** - Box OAuth のクライアントシークレット。

**注意:** このアクティビティを使用する前に、選択した **Authentication Type** に応じて [Box Developer Console](https://app.box.com/developers/console) でアプリを作成する必要があります:
* **JWT** - **カスタムアプリ** を作成し、**サーバー認証** を選択した上で、認証方法として **JSON Web Token (JWT)** を選択します。Box により公開鍵/秘密鍵のペアおよび **Client ID**、**Client Secret**、鍵情報を含む `config.json` ファイルが生成されます。このファイルをダウンロードし、その内容またはパスを **Config File Content** / **Config File Path** に設定してください。**User ID** の設定は任意です（指定した場合はそのユーザーを偽装し、空のままにした場合はサービスアカウント/Enterprise Admin で接続します）。
* **OAuth** - 現在ランタイムでは未実装です (`NotImplementedException`)。**JWT** を使用するか、既存の `Box Client` を渡してください。

**その他**

* **Public (Checkbox)** - アクティビティを公開したい場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のために名前を編集できます。
  例: [3424325] Box Scope

**出力**

* **Result: `OutArgument<BoxClient>`** - スコープで作成または使用された Box クライアント。


