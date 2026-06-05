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

* **Box Client: InArgument<BoxClient>** - Authentication Type が BoxConnection の場合に使用する既存の Box クライアント。

**JWT 認証**

* **Config File Content: InArgument<String>** - Box JWT 設定ファイルの内容。Config File Path の代わりにこちらを使用できます。

* **Config File Path: InArgument<String>** - Box JWT 設定ファイルのパス。Config File Content の代わりにこちらを使用できます。

* **User ID: InArgument<String>** - JWT 認証を使用する際に代行する Box のユーザー ID。

**OAuth 認証**

* **Client ID: InArgument<String>** - Box OAuth のクライアント ID。

* **Client Secret: InArgument<SecureString>** - Box OAuth のクライアントシークレット。

**その他**

* **Public (Checkbox)** - アクティビティを公開したい場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のために名前を編集できます。
  例: [3424325] Box Scope

**出力**

* **Result: OutArgument<BoxClient>** - スコープで作成または使用された Box クライアント。

