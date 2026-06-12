---
id: export-file-as-pdf
title: "ファイルを PDF にエクスポート"
sidebar_label: "ファイルを PDF にエクスポート"
sidebar_position: 5
description: "ファイルを PDF にエクスポートするアクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ファイルを PDF にエクスポート

RCA.Activities.Office365.ExportFileAsPdf

## **説明**

ファイルを変換して PDF としてエクスポートします。サポートされる形式には doc、docx、odp、ods、odt、pps、ppsx、ppt、pptx、rtf、xls、および xlsx が含まれます。

![export-file-as-pdf](/static/img/export-file-as-pdf.png)

(*必須項目の場合あり)

## **アクティビティの本文内**

* **エクスポートするファイル** - PDF に変換して保存するファイル。
* **ダウンロード先** - 変換されたファイルが保存されるローカルパス。

## **プロパティ**

**入力**

* **File to export: InArgument<DriveItem>** - PDF にエクスポートするファイル。

* **Download as file: InArgument<String>** - 変換されたファイルが保存されるローカルパス。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Open Window

