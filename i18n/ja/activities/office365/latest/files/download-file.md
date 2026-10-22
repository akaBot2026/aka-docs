---
id: download-file
title: "ファイルのダウンロード"
sidebar_label: "ファイルのダウンロード"
sidebar_position: 4
description: "ファイルダウンロード アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ファイルのダウンロード

RCA.Activities.Office365.DownloadFile

## **説明**

OneDrive または SharePoint からファイルをダウンロードします。

![down-file.png](/static/img/down-file.png)

(*必須項目の場合あり)

## **アクティビティの本文内**

* **ダウンロードするファイル** - ダウンロードするファイル。
* **ダウンロード先** - ファイルがダウンロードされるローカルパス。

## **プロパティ**

**入力**

* **Download as file: `InArgument<String>`** - ファイルがダウンロードされるローカルパス。

* **File to download: `InArgument<DriveItem>`** - ダウンロードするファイル。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Open Window


