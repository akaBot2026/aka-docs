---
id: upload-file
title: "ファイルのアップロード"
sidebar_label: "ファイルのアップロード"
sidebar_position: 10
description: "ファイルアップロード アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ファイルのアップロード

RCA.Activities.Office365.UploadFile

## **説明**

ローカルファイルを OneDrive または SharePoint にアップロードします。

![upload-file-office.png](/static/img/upload-file-office.png )

(*必須項目の場合あり)

## **アクティビティの本文内**

* **アップロードするファイル** - アップロードするローカルファイルのパス。
* **移動先フォルダー** - ファイルをアップロードする移動先のフォルダー。

## **プロパティ**

**入力**

* **File to upload: `InArgument<String>`** - アップロードするローカルファイルのパス。

* **Destination folder: `InArgument<DriveItem>`** - ファイルをアップロードする移動先フォルダー。空欄の場合は OneDrive のルート フォルダーがデフォルトになります。

* **New name (optional): `InArgument<String>`** - アップロード後の任意の新しいファイル名。

* **Conflict behavior: `ConflictBehavior`** - 同名のファイルが既に存在する場合の競合解決の挙動を示します。

* **Metadata: `InArgument<DataTable>`** - 結果の DriveItem に関連付けるメタデータ。SharePoint ドキュメント ライブラリに格納された DriveItem にのみ機能します。2 列を含める必要があります: フィールド表示名 (String) と値 (Object)。

**オプション**

* **Account: `InArgument<String>`** - OneDrive を所有するユーザーの ID またはユーザー プリンシパル名。ApplicationIdAndSecret および ApplicationIdAndCertificate 認証タイプではこのパラメーターを設定する必要があります。

**出力**

* **Reference as: `OutArgument<DriveItem>`** - 他のアクティビティでアップロードされたファイルを参照する際に使用する名前。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Open Window

* **Reference as (Output)**: **Ctrl + K** を押して `DriveItem` 変数 `myUploadedFile` を作成します。
4. **Log Message** アクティビティを追加してアップロードされたファイルの Web URL を出力します:
   - Message を次の VB.NET 式に設定します:
     `"File uploaded successfully. Web URL: " & myUploadedFile.WebUrl`
5. ワークフローを実行します。ファイルがアップロードされ、競合がある場合は古いファイルを置き換え、Web URL がログに記録されます。


