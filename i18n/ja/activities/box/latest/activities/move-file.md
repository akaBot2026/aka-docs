---
id: move-file
title: "ファイルの移動"
sidebar_label: "ファイルの移動"
sidebar_position: 7
description: "Move File アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ファイルの移動

RCA.Activities.Box.Files.MoveFile

## **説明**

Box のファイルを別のフォルダへ移動します。

![move-file](/static/img/move-file.png)

(※ 必須の場合)

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール値は True または False のいずれかです。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を続行します。
  - False: 実行の継続を停止します。

**入力**

* **File Id: InArgument<String>*** - 移動する Box ファイルの ID。

* **Folder Id: InArgument<String>*** - 送信先の Box フォルダの ID。

**オプション**

* **File Name: InArgument<String>** - ファイル移動後の新しいファイル名。指定しない場合、Box は元の名前を維持します。

**その他**

* **Public (Checkbox)** - アクティビティを公開したい場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のために名前を編集できます。
  例: [3424325] Open Window

**出力**

* **Result: OutArgument<BoxFile>** - 移動された Box ファイルオブジェクト。

