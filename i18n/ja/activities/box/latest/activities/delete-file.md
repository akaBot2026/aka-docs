---
id: delete-file
title: "ファイルの削除"
sidebar_label: "ファイルの削除"
sidebar_position: 3
description: "Delete File アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ファイルの削除

RCA.Activities.Box.Files.DeleteFile

## **説明**

Box からファイルを削除します。

![delete-file](/static/img/delete-file.png)

(※ 必須の場合)

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール値は True または False のいずれかです。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を続行します。
  - False: 実行の継続を停止します。

**入力**

* **File Id: `InArgument<String>`*** - 削除する Box ファイルの ID。

**その他**

* **Public (Checkbox)** - アクティビティを公開したい場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のために名前を編集できます。
  例: [3424325] Open Window

**出力**

* **Is Successful: `OutArgument<Boolean>`** - ファイルが正常に削除された場合は True、それ以外は False。


