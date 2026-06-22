---
id: decrypt-pdf
title: "PDF の復号"
sidebar_label: "PDF の復号"
sidebar_position: 5
description: "Decrypt PDF アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# PDF の復号

RCA.Activities.PDF.DecryptPDF

## **説明**

暗号化された PDF ファイルを復号します。

![decrypt-pdf.png](/static/img/decrypt-pdf.png)

(※ 必須項目)

## **アクティビティ本文内**

* **ファイル名** - 読み取る PDF ファイルのフルパス。
* **出力ファイル名** - 結果の PDF をこのパスに保存します。

## **プロパティ**

**共通**

* **エラー時に継続 (Boolean)** - 真または偽の Boolean 値。
  - True: アクティビティ内でエラーが発生しても処理を継続します。
  - False: 処理を継続しません。

**ファイル**

* **ファイル名** (`InArgument<String>`)* - 読み取る PDF ファイルのフルパス。

* **出力ファイル名** (`InArgument<String>`)* - 結果の PDF をこのパスに保存します。存在する場合は上書きされます。

**オプション**

* **ユーザーパスワード** (`InArgument<String>`) - PDF ファイルのユーザーパスワード。

* **オーナーパスワード** (`InArgument<String>`) - PDF ファイルのオーナーパスワード。

**その他**

* **公開 (チェックボックス)** - アクティビティを公開する場合にチェックしてください。データセキュリティ要件を考慮してください。

* **表示名 (String)** - アクティビティの名前。コードの整理のために変更できます。
  例: [3424325] Open Window

