---
id: export-pdf-as-image
title: "PDF ページを画像として書き出す"
sidebar_label: "PDF ページを画像として書き出す"
sidebar_position: 4
description: "Export PDF Page As Image アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# PDF ページを画像として書き出す

RCA.Activities.PDF.ExportPDFAsImage

## **説明**

単一の PDF ページを画像として書き出します。

![export-pdf-page](/static/img/export-pdf-page.png)

(※ 必須項目)

## **アクティビティ本文内**

* **ファイル名** - 読み取る PDF ファイルのフルパス。
* **出力ファイル名** - 出力画像ファイルのパス。
* **オプション** - 書き出すページ範囲のオプションを選択します。

## **プロパティ**

**共通**

* **エラー時に継続 (Boolean)** - 真または偽の Boolean 値。
  - True: アクティビティ内でエラーが発生しても処理を継続します。
  - False: 処理を継続しません。

**ファイル**

* **ファイル名** (`InArgument<String>`)* - 読み取る PDF ファイルのフルパス。

* **パスワード** (`InArgument<String>`) - 必要に応じて PDF ファイルのユーザーパスワード。

* **出力ファイル名** (`InArgument<String>`)* - 出力画像ファイルのパス。ファイル名は有効な画像拡張子で終わる必要があります。

**入力**

* **ターゲット画像 DPI** (`ImageDpi`) - OCR に使用する画像の DPI。値: Low (96), Medium (150), High (300).

* **範囲ページ** (`InArgument<String>`) - 抽出する PDF ページの範囲。

**オプション**

* **オプション** (`ExportOption`) - 抽出範囲を指定するオプション: All または ByRange を選択します。

* **最小幅** (`InArgument<Int32>`) - ページを画像としてレンダリングする際の最小幅。

**その他**

* **公開 (チェックボックス)** - アクティビティを公開する場合にチェックしてください。データセキュリティ要件を考慮してください。

* **表示名 (String)** - アクティビティの名前。コードの整理のために変更できます。
  例: [3424325] Open Window

