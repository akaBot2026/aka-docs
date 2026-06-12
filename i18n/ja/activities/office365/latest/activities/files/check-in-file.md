---
id: check-in-file
title: "ファイルのチェックイン"
sidebar_label: "ファイルのチェックイン"
sidebar_position: 12
description: "ファイルのチェックイン アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ファイルのチェックイン

RCA.Activities.Office365.CheckInFile

## **説明**

チェックアウトされているドキュメントをチェックインし、ファイルのバージョンを他のユーザーが利用できるようにします。

![check-in-file.png](/static/img/check-in-file.png)

(*必須項目の場合あり)

## **アクティビティの本文内**

* **File To Check In** - チェックインするファイル。
* **ListItem To Check In** - チェックインするリスト項目。

## **プロパティ**

**入力**

* **File To Check In: InArgument<DriveItem>** - チェックインするファイル。Get File/Folder または Find Files And Folders アクティビティを使用してファイルを取得できます。

* **Check In Comment: InArgument<String>** - 変更または追加した内容を説明するコメント。

* **ListItem To Check In: InArgument<Office365SharepointListItem>** - チェックインするリスト項目。For Each List Item アクティビティを使用して ListItem を取得できます。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Open Window

