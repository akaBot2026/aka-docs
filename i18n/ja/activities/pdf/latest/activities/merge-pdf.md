---
id: merge-pdf
title: "PDF ファイルの結合"
sidebar_label: "PDF ファイルの結合"
sidebar_position: 1
description: "Merge PDF Files アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# PDF ファイルの結合

RCA.Activities.PDF.MergePDF

## **説明**

複数の PDF ファイルを結合します。

![merge-pdf-files](/static/img/merge-pdf-files.png)

(※ 必須項目)

## **アクティビティ本文内**

* **出力ファイル名** - 結果の PDF を保存するパス。存在する場合は上書きされます。

## **プロパティ**

**共通**

* **エラー時に継続 (Boolean)** - 真または偽の Boolean 値。
  - True: アクティビティ内でエラーが発生しても処理を継続します。
  - False: 処理を継続しません。

**ファイル**

* **ファイル一覧** (`InArgument<String[]>`)* - PDF ファイルのフルパスの配列。

* **出力ファイル名** (`InArgument<String>`)* - 結果の PDF を保存するパス。存在する場合は上書きされます。

**その他**

* **公開 (チェックボックス)** - アクティビティを公開する場合にチェックしてください。データセキュリティ要件を考慮してください。

* **表示名 (String)** - アクティビティの名前。コードの整理のために変更できます。
  例: [3424325] Open Window

