---
id: get-file-folder
title: "ファイル/フォルダーの取得"
sidebar_label: "ファイル/フォルダーの取得"
sidebar_position: 7
description: "ファイル/フォルダー取得アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ファイル/フォルダーの取得

RCA.Activities.Office365.GetFileFolder

## **説明**

指定したファイルまたはフォルダーのメタデータを取得し、他のアクティビティで後で使用できるように保存します。

![get-fle-folder.png](/static/img/get-fle-folder.png)

(*必須項目の場合あり)

## **アクティビティの本文内**

* **Item ID** - 関心のあるファイルまたはフォルダーの Drive Item ID。
* **Item Url** - 関心のあるファイルまたはフォルダーの Drive Item URL。

## **プロパティ**

**入力**

* **Item ID: `InArgument<String>`** - 関心のあるファイルまたはフォルダーの Drive Item ID。

* **Item Url: `InArgument<String>`** - 関心のあるファイルまたはフォルダーの Drive Item URL。

**Sharepoint**

* **Drive Name: `InArgument<String>`** - 指定されたファイルまたはフォルダーを検索する OneDrive または SharePoint 内のドライブ名。このドライブが SharePoint 内に存在する場合は Site Url を指定する必要があります。

* **Site Url: `InArgument<String>`** - 指定されたファイルまたはフォルダーを検索する SharePoint サイトの URL。

**オプション**

* **Account: `InArgument<String>`** - OneDrive を所有するユーザーの ID またはユーザー プリンシパル名。ApplicationIdAndSecret および ApplicationIdAndCertificate 認証タイプではこのパラメーターを設定する必要があります。

**出力**

* **Item: `OutArgument<DriveItem>`** - DriveItem としての該当するファイルまたはフォルダー。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Open Window


