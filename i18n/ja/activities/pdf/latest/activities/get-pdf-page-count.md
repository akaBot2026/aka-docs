---
id: get-pdf-page-count
title: "PDF ページ数の取得"
sidebar_label: "PDF ページ数の取得"
sidebar_position: 3
description: "Get PDF Page Count アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# PDF ページ数の取得

RCA.Activities.PDF.GetPDFPageCount

## **説明**

PDF ファイルのページ数を取得します。

![get-pdf-page-count](/static/img/get-pdf-page-count.png)
(※ 必須項目)

## **アクティビティ本文内**

* **ファイル名** - 読み取る PDF ファイルのフルパス。
* **パスワード** - 必要に応じて PDF ファイルのユーザーパスワード。

## **プロパティ**

**共通**

* **エラー時に継続 (Boolean)** - 真または偽の Boolean 値。
  - True: アクティビティ内でエラーが発生しても処理を継続します。
  - False: 処理を継続しません。

**ファイル**

* **ファイル名** (`InArgument<String>`)* - 読み取る PDF ファイルのフルパス。

* **パスワード** (`InArgument<String>`) - 必要に応じて PDF ファイルのユーザーパスワード。

**出力**

* **ページ数** (`OutArgument<Int32>`) - PDF ファイルのページ数。

**その他**

* **公開 (チェックボックス)** - アクティビティを公開する場合にチェックしてください。データセキュリティ要件を考慮してください。

* **表示名 (String)** - アクティビティの名前。コードの整理のために変更できます。
  例: [3424325] Open Window

