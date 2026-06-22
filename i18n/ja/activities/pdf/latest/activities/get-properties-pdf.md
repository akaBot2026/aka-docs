---
id: get-properties-pdf
title: "PDF プロパティの取得"
sidebar_label: "PDF プロパティの取得"
sidebar_position: 7
description: "Get PDF properties アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# PDF プロパティの取得

RCA.Activities.PDF.GetPropertiesPDF

## **説明**

入力した名前に基づいて PDF ドキュメントのプロパティを取得します。

![get-pdf-properties](/static/img/get-pdf-properties.png)

(※ 必須項目)

## **アクティビティ本文内**

* **ファイルパス** - ドキュメントのファイルパス。
* **プロパティ名** - 取得するプロパティ名。

## **プロパティ**

**共通**

* **エラー時に継続 (Boolean)** - 真または偽の Boolean 値。
  - True: アクティビティ内でエラーが発生しても処理を継続します。
  - False: 処理を継続しません。

**入力**

* **プロパティ名** (`InArgument<String>`)* - 取得するプロパティ名。サポートされている組み込み名には Title, Subject, Author, Creator, Producer, Keywords, ModificationDate, CreationDate が含まれます。

**ファイル**

* **ファイルパス** (`InArgument<String>`)* - ドキュメントのファイルパス。

* **パスワード** (`InArgument<String>`) - 必要に応じて PDF ファイルのパスワード。

**出力**

* **結果** (`OutArgument<String>`) - プロパティの値。

**その他**

* **公開 (チェックボックス)** - アクティビティを公開する場合にチェックしてください。データセキュリティ要件を考慮してください。

* **表示名 (String)** - アクティビティの名前。コードの整理のために変更できます。
  例: [3424325] Open Window

