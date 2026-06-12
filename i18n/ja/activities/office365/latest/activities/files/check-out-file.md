---
id: check-out-file
title: "ファイルのチェックアウト"
sidebar_label: "ファイルのチェックアウト"
sidebar_position: 11
description: "ファイルのチェックアウト アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ファイルのチェックアウト

RCA.Activities.Office365.CheckOutFile

## **説明**

ドキュメントをチェックアウトして他のユーザーによる編集を防ぎ、チェックインされるまであなたの変更が表示されないようにします。

![check-out-file.png](/static/img/check-out-file.png)

(*必須項目の場合あり)

## **アクティビティの本文内**

* **File To Check Out** - チェックアウトするファイル。
* **ListItem To Check Out** - チェックアウトするリスト項目。

## **プロパティ**

**入力**

* **File To Check Out: InArgument<DriveItem>** - チェックアウトするファイル。Get File/Folder または Find Files And Folders アクティビティを使用してファイルを取得できます。

* **ListItem To Check Out: InArgument<Office365SharepointListItem>** - チェックアウトするリスト項目。For Each List Item アクティビティを使用して ListItem を取得できます。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Open Window

