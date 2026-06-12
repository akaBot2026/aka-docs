---
id: copy-file-folder
title: "ファイル/フォルダーのコピー"
sidebar_label: "ファイル/フォルダーのコピー"
sidebar_position: 1
description: "ファイル/フォルダーのコピー アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ファイル/フォルダーのコピー

RCA.Activities.Office365.CopyItem

## **説明**

ファイルまたはフォルダーをある親フォルダーから別の親フォルダーへコピーします。

![copy-file-folder.png](/static/img/copy-file-folder.png)

(*必須項目の場合あり)

## **アクティビティの本文内**

* **コピーするファイルまたはフォルダー** - コピーするファイルまたはフォルダー。
* **移動先フォルダー** - 指定したファイルまたはフォルダーをコピーする移動先のフォルダー。

## **プロパティ**

**入力**

* **File or folder to copy: InArgument<DriveItem>** - コピーするファイルまたはフォルダー。

* **Destination folder: InArgument<DriveItem>** - 指定したファイルまたはフォルダーをコピーする移動先フォルダー。空欄の場合は OneDrive のルート フォルダーがデフォルトになります。

* **New name (optional): InArgument<String>** - コピー後のアイテム名（任意）。

**オプション**

* **Account: InArgument<String>** - OneDrive を所有するユーザーの ID またはユーザー プリンシパル名。ApplicationIdAndSecret および ApplicationIdAndCertificate 認証タイプではこのパラメーターを設定する必要があります。

**出力**

* **Reference as: OutArgument<DriveItem>** - 他のアクティビティでコピーされたファイルまたはフォルダーを参照する際に使用する名前。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Open Window

