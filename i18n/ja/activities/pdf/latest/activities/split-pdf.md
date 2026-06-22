---
id: split-pdf
title: "PDF ファイルの分割"
sidebar_label: "PDF ファイルの分割"
sidebar_position: 2
description: "Split PDF Files アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# PDF ファイルの分割

RCA.Activities.PDF.SplitPDF

## **説明**

PDF ファイルを複数のファイルに分割します。

![split-pdf-files](/static/img/split-pdf-files.png)

(※ 必須項目)

## **アクティビティ本文内**

* **PDF パス** - PDF ファイルのパス。
* **保存パス** - 結果の PDF をこのパスに保存します。

## **プロパティ**

**共通**

* **エラー時に継続 (Boolean)** - 真または偽の Boolean 値。
  - True: アクティビティ内でエラーが発生しても処理を継続します。
  - False: 処理を継続しません。

**ファイル**

* **PDF パス** (`InArgument<String>`)* - PDF ファイルのパス。

* **パスワード** (`InArgument<String>`) - 必要に応じて PDF ファイルのユーザーパスワード。

* **保存パス** (`InArgument<String>`)* - 結果の PDF をこのパスに保存します。存在する場合は上書きされます。

**入力**

* **選択ページ** (`InArgument<String[]>`) - 元ファイルから指定したページのリスト。

* **ページ数** (`InArgument<Int32>`) - 各新しいファイルが含むページ数を指定します。例: 8 を指定すると各出力ファイルは 8 ページになります。

**オプション**

* **分割オプション** (`SplitOption`) - PDF をどのように分割するかを指定します: NumberOfPagesPerExtractedPDF または SingleFileWithSelectedPages。

**その他**

* **公開 (チェックボックス)** - アクティビティを公開する場合にチェックしてください。データセキュリティ要件を考慮してください。

* **表示名 (String)** - アクティビティの名前。コードの整理のために変更できます。
  例: [3424325] Open Window

