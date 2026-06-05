---
id: upload-file
title: "ファイルのアップロード"
sidebar_label: "ファイルのアップロード"
sidebar_position: 8
description: "Upload File アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ファイルのアップロード

RCA.Activities.Box.Files.UploadFile

## **説明**

ローカルのファイルを Box のフォルダにアップロードします。

![upload-file](/static/img/upload-file.png)

(※ 必須の場合)

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール値は True または False のいずれかです。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を続行します。
  - False: 実行の継続を停止します。

**入力**

* **File Path: `InArgument<String>`*** - アップロードするローカルファイルのパス。

* **Folder Id: `InArgument<String>`*** - 送信先の Box フォルダの ID。

**オプション**

* **File Name: `InArgument<String>`** - Box 内で使用するファイル名。指定しない場合はローカルのファイル名が使用されます。

* **Upload Mode: UploadMode** - 使用するアップロードモード。利用可能な値: Auto、Single、Chunked。

**その他**

* **Public (Checkbox)** - アクティビティを公開したい場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のために名前を編集できます。
  例: [3424325] Open Window

**出力**

* **File Id: `OutArgument<String>`** - アップロードされた Box ファイルの ID。

* **Result: `OutArgument<BoxFile>`** - アップロードされた Box ファイルオブジェクト。


