---
id: download-file
title: "ファイルのダウンロード"
sidebar_label: "ファイルのダウンロード"
sidebar_position: 4
description: "Download File アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ファイルのダウンロード

RCA.Activities.Box.Files.DownloadFile

## **説明**

Box からローカルのファイルパスまたはフォルダへファイルをダウンロードします。

![download-file](/static/img/download-file.png)

(※ 必須の場合)

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール値は True または False のいずれかです。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を続行します。
  - False: 実行の継続を停止します。

**入力**

* **File Id: `InArgument<String>`*** - ダウンロードする Box ファイルの ID。

* **File Path: `InArgument<String>`*** - ファイルを保存するローカルのファイルパスまたはフォルダ。

**オプション**

* **Overwrite: Boolean** - 既にファイルが存在する場合に上書きするかどうかを指定します。

* **Version: `InArgument<String>`** - ダウンロードする Box ファイルのバージョン ID。指定しない場合は現在のバージョンがダウンロードされます。

**その他**

* **Public (Checkbox)** - アクティビティを公開したい場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のために名前を編集できます。
  例: [3424325] Open Window


