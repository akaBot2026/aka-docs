---
id: unlock-user
title: "ユーザーのロック解除"
sidebar_label: "ユーザーのロック解除"
sidebar_position: 3
description: "Unlock User アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---

# ユーザーのロック解除

RCA.Activities.Core.UnlockUser

## **説明**

マシン上のロックされた Windows ユーザー セッションのロックを解除します。セッションがすでにロック解除されている場合、アンロック要求を送信せずに `True` を返します。

（\*必須）

## **アクティビティ本体内**

* **Username** – ロックを解除する Windows ログオン名（例: `"DOMAIN\\user"`）。**Authentication Type** が `LocalUser` の場合に使用されます。空の場合、現在のログオン ユーザーが使用されます。
* **Password** – ユーザーに関連付けられたパスワード。**Authentication Type** が `LocalUser` の場合に使用されます。

![unlocked-user](/static/img/unlocked-user.png)

\* は必須フィールドを示します。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - 現在のアクティビティが失敗した場合でも、残りのアクティビティの実行を続行するかどうかを指定します。ブール値（True、False）のみがサポートされます。
* **Timeout MS (Int32)** - エラーがスローされるまでにアクティビティの完了を待機する最大時間（ミリ秒単位）。セッションがロック解除されるまでのポーリングにも使用されます。デフォルト値は 30000（ミリ秒）です。`0` より大きい値である必要があります。

**入力**

* **Username (String)** - ユーザーの Windows ログオン名。**Authentication Type** が `LocalUser` の場合に必要なパスです。空の場合、現在のログオン ユーザーが使用されます。
* **Password (String)** - 資格情報に関連付けられたパスワード。**Authentication Type** が `LocalUser` の場合に使用されます。**Password** または **Secure Password** のいずれかを指定してください。
* **Secure Password (SecureString)** - `SecureString` としてのパスワード。**Authentication Type** が `LocalUser` の場合に使用されます。**Password** または **Secure Password** のいずれかを指定してください。

**オプション**

* **Authentication Type** - 資格情報の取得元を選択します:
  * `LocalUser`（デフォルト）– アクティビティの **Username** および **Password** / **Secure Password** を使用します。
  * `Center` – Center に登録された Agent データからユーザー名、パスワード、およびウィンドウ セッションを読み取ります。ローカルのパスワード フィールドは使用されません。
* **Window Session** - アンロック要求に使用するウィンドウ セッションの種類: `Console` または `RDP`。`LocalUser` で使用されます。**Authentication Type** が `Center` の場合、Agent データに値があればこのプロパティより優先されます。

**その他**

* **公開 (チェックボックス)** - チェックすると、このアクティビティのデータがログに表示されます。使用する前にデータ セキュリティを考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。

**出力**

* **Result (Boolean)** - アンロックに成功した場合、またはユーザーがすでにロック解除されていた場合は `True`。タイムアウト後もセッションがロックされている場合は `False`。

## **注意**

* ローカル アンロック サービス経由でロック解除を実行できる実行中の Agent が必要です。
* **Authentication Type** が `Center` の場合、Agent は資格情報データを返す必要があります。プラットフォーム / Agent バージョンがこれをサポートしていない場合、アクティビティは次のエラーをスローします: *This platform version does not support Unlock activity*。
* 一般的なフロー: まず **Is User Locked** を実行し、`Result` が `True` の場合に **Unlock User** を実行します。

## **例**

**LocalUser**

```text
Unlock User
    Authentication Type = LocalUser
    Username            = "CONTOSO\\rpa.user"
    Secure Password     = securePwd
    Window Session      = Console
    Result              = unlocked
```

**Center**

```text
Unlock User
    Authentication Type = Center
    Result              = unlocked
```
