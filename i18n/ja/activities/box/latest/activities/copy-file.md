---
id: copy-file
title: "ファイルのコピー"
sidebar_label: "ファイルのコピー"
sidebar_position: 2
description: "Copy File アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ファイルのコピー

RCA.Activities.Box.Files.CopyFile

## **説明**

Box のファイルを別のフォルダへコピーします。

![copy-file](/static/img/copy-file.png)

(※ 必須の場合)

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール値は True または False のいずれかです。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を続行します。
  - False: 実行の継続を停止します。

**入力**

* **File Id: InArgument<String>*** - コピーする Box ファイルの ID。

* **Folder Id: InArgument<String>*** - 送信先の Box フォルダの ID。

**オプション**

* **File Name: InArgument<String>** - コピー後の新しいファイル名。指定しない場合、Box は元の名前を維持します。

**その他**

* **Public (Checkbox)** - アクティビティを公開したい場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のために名前を編集できます。
  例: [3424325] Copy File

**出力**

* **Result: OutArgument<BoxFile>** - コピーされた Box ファイルオブジェクト。

