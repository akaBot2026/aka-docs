---
id: read-pdf-with-ocr
title: "OCR で PDF を読み取る"
sidebar_label: "OCR で PDF を読み取る"
sidebar_position: 9
description: "Read PDF With OCR アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# OCR で PDF を読み取る

RCA.Activities.PDF.ReadPDFWithOCR

## **説明**

OCR 技術を用いて指定した PDF ファイルからすべての文字を読み取り、文字列変数に格納します。

![read-pdf-with-ocr](/static/img/read-pdf-with-ocr.png)

(※ 必須項目)

## **アクティビティ本文内**

* **ファイル名** - 読み取る PDF ファイルのフルパス。

## **プロパティ**

**ファイル**

* **ファイル名** (`InArgument<String>`)* - 読み取る PDF ファイルのフルパス。

* **パスワード** (`InArgument<String>`) - 必要に応じて PDF ファイルのパスワード。String 型の変数または文字列のみサポートされます。

**入力**

* **範囲** (`InArgument<String>`) - 読み取りたいページ範囲。範囲が指定されていない場合はファイル全体を読み取ります。単一ページ (例: "7")、ページ範囲 (例: "7-12")、または複雑な範囲 (例: "2-5, 7, 15-End" や "All") を指定できます。デフォルト: "All"。

* **並列度 (Degree Of Parallelism)** (`InArgument<Int32>`) - 同時に解析するページ数を指定します。-1 はマシン上の論理プロセッサ数の最大を使用します。デフォルト: -1。

* **ターゲット画像 DPI** (`ImageDpi`) - OCR プロセスに使用する DPI。デフォルト: Medium (150)。値: Low (96), Medium (150), High (300).

**出力**

* **テキスト** (`OutArgument<String>`) - 抽出された文字列。このフィールドは String 型の変数のみサポートします。

**その他**

* **公開 (チェックボックス)** - アクティビティを公開する場合にチェックしてください。データセキュリティ要件を考慮してください。

* **表示名 (String)** - アクティビティの名前。コードの整理のために変更できます。
  例: [3424325] Open Window

