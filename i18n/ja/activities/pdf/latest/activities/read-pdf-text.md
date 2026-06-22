---
id: read-pdf-text
title: "PDF テキストを読み取る"
sidebar_label: "PDF テキストを読み取る"
sidebar_position: 8
description: "Read PDF Text アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# PDF テキストを読み取る

RCA.Activities.PDF.ReadPDFText

## **説明**

指定した PDF ファイルからすべての文字を読み取り、文字列変数に格納します。

![read-pdf-text](/static/img/read-pdf-text.png)

(※ 必須項目)

## **アクティビティ本文内**

* **ファイル名** - 読み取る PDF ファイルのフルパス。

## **プロパティ**

**ファイル**

* **ファイル名** (`InArgument<String>`)* - 読み取る PDF ファイルのフルパス。

* **パスワード** (`InArgument<String>`) - 必要に応じて PDF ファイルのパスワード。String 型の変数または文字列のみサポートされます。

**入力**

* **範囲** (`InArgument<String>`) - 読み取りたいページ範囲。単一ページ (例: "7")、ページ範囲 (例: "7-12")、または複雑な範囲 (例: "2-5, 7, 15-End" や "All") を指定できます。デフォルト: "All"。

**出力**

* **テキスト** (`OutArgument<String>`) - 抽出された文字列。このフィールドは String 型の変数のみサポートします。

**その他**

* **公開 (チェックボックス)** - アクティビティを公開する場合にチェックしてください。データセキュリティ要件を考慮してください。

* **表示名 (String)** - アクティビティの名前。コードの整理のために変更できます。
  例: [3424325] Open Window

