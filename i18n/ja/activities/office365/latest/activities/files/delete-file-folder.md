---
id: delete-file-folder
title: "ファイル/フォルダーの削除"
sidebar_label: "ファイル/フォルダーの削除"
sidebar_position: 3
description: "ファイル/フォルダー削除アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ファイル/フォルダーの削除

RCA.Activities.Office365.DeleteItem

## **説明**

OneDrive または SharePoint の指定した場所にあるファイルまたはフォルダーを削除します。

![delete-file-foler.png](/static/img/delete-file-foler.png)

(*必須項目の場合あり)

## **アクティビティの本文内**

* **削除するファイルまたはフォルダー** - 削除するファイルまたはフォルダー。

## **プロパティ**

**入力**

* **File or folder to delete: `InArgument<DriveItem>`** - 削除するファイルまたはフォルダー。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Open Window


