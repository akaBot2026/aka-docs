---
id: create-folder
title: "フォルダーの作成"
sidebar_label: "フォルダーの作成"
sidebar_position: 2
description: "フォルダー作成アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# フォルダーの作成

RCA.Activities.Office365.CreateFolder

## **説明**

OneDrive または SharePoint の指定した場所にフォルダーを作成します。

![create-folder.png](/static/img/create-folder.png)

(*必須項目の場合あり)

## **アクティビティの本文内**

* **Folder name** - 新しいフォルダーの名前。
* **Destination folder** - 新しいフォルダーを作成する移動先のフォルダー。

## **プロパティ**

**入力**

* **Folder name: InArgument<String>** - 新しいフォルダーの名前。

* **Destination folder: InArgument<DriveItem>** - 新しいフォルダーを作成する移動先フォルダー。空欄の場合は OneDrive のルート フォルダーがデフォルトになります。

**オプション**

* **Account: InArgument<String>** - OneDrive を所有するユーザーの ID またはユーザー プリンシパル名。ApplicationIdAndSecret および ApplicationIdAndCertificate 認証タイプではこのパラメーターを設定する必要があります。

**出力**

* **Reference as: OutArgument<DriveItem>** - 他のアクティビティでこのフォルダーを参照する際に使用する名前。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Open Window

