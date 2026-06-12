---
id: find-files-and-folders
title: "ファイルとフォルダーを検索"
sidebar_label: "ファイルとフォルダーを検索"
sidebar_position: 6
description: "ファイルとフォルダー検索アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ファイルとフォルダーを検索

RCA.Activities.Office365.FindFilesAndFolders

## **説明**

ファイル名、メタデータ、またはファイル内容が指定した検索クエリを含む OneDrive または SharePoint のファイルやフォルダーを検索します。マッチした結果は DriveItem の配列として返されます。

![find-files-and-folders.png](/static/img/find-files-and-folders.png)

(*必須項目の場合あり)

## **アクティビティの本文内**

* **Query** - 取得するファイルまたはフォルダーの自由テキスト検索フレーズを定義します。

## **プロパティ**

**入力**

* **Query: InArgument<String>** - 取得するファイルまたはフォルダーの自由テキスト検索フレーズ。空欄の場合はルートフォルダーの内容が返されます。

* **Subfolder: InArgument<String>** - 検索するサブフォルダーのオプションのパス（例: SomeFolder または SomeFolder/Another）。空欄の場合はルートフォルダーが検索されます。

**Sharepoint**

* **Drive Name: InArgument<String>** - 指定されたファイルまたはフォルダーを検索する OneDrive または SharePoint 内のドライブ名。このドライブが SharePoint 内に存在する場合は Site Url を指定する必要があります。

* **Site Url: InArgument<String>** - 指定されたファイルまたはフォルダーを検索する SharePoint サイトの URL。

**オプション**

* **Account: InArgument<String>** - OneDrive を所有するユーザーの ID またはユーザー プリンシパル名。ApplicationIdAndSecret および ApplicationIdAndCertificate 認証タイプではこのパラメーターを設定する必要があります。

**出力**

* **First: OutArgument<DriveItem>** - 指定したクエリに一致する最初のファイルまたはフォルダー。

* **Results: OutArgument<DriveItem[]>** - クエリに一致するすべてのファイルおよびフォルダーを DriveItem の配列として返します。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Open Window

