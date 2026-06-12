---
id: move-item
title: "ファイル/フォルダーの移動"
sidebar_label: "ファイル/フォルダーの移動"
sidebar_position: 8
description: "ファイル/フォルダー移動アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ファイル/フォルダーの移動

RCA.Activities.Office365.MoveItem

## **説明**

ファイルまたはフォルダーをある親ディレクトリから別の親ディレクトリへ移動します。

![move-file-folder.png](/static/img/move-file-folder.png)

(*必須項目の場合あり)

## **アクティビティの本文内**

* **移動するファイルまたはフォルダー** - 移動するファイルまたはフォルダー。
* **移動先フォルダー** - 指定したファイルまたはフォルダーを移動する移動先のフォルダー。

## **プロパティ**

**入力**

* **File or folder to move: InArgument<DriveItem>** - 移動するファイルまたはフォルダー。

* **Destination folder: InArgument<DriveItem>** - 指定したファイルまたはフォルダーを移動する移動先フォルダー。空欄の場合は OneDrive のルート フォルダーがデフォルトになります。

* **New name (optional): InArgument<String>** - 移動後のファイルまたはフォルダーの任意の新しい名前。

**オプション**

* **Account: InArgument<String>** - OneDrive を所有するユーザーの ID またはユーザー プリンシパル名。ApplicationIdAndSecret および ApplicationIdAndCertificate 認証タイプではこのパラメーターを設定する必要があります。

**出力**

* **Reference as: OutArgument<DriveItem>** - 他のアクティビティで移動されたファイルまたはフォルダーを参照する際に使用する名前。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Open Window

