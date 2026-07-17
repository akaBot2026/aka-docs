---
id: encrypt-pdf
title: "PDF の暗号化"
sidebar_label: "PDF の暗号化"
sidebar_position: 6
description: "Encrypt PDF アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# PDF の暗号化

RCA.Activities.PDF.EncryptPDF

## **説明**

Encrypt document アクションを使用して PDF ファイルを暗号化します。

![encrypt-pdf](/static/img/encrypt-pdf.png)

(※ 必須項目)

## **アクティビティ本文内**

* **PDF パス** - PDF ファイルのパス。
* **保存パス** - 結果の PDF をこのパスに保存します。
* **ユーザー権限** - 暗号化された PDF に適用する権限を選択します。

## **プロパティ**

**共通**

* **エラー時に継続 (Boolean)** - 真または偽の Boolean 値。
  - True: アクティビティ内でエラーが発生しても処理を継続します。
  - False: 処理を継続しません。

**ファイル**

* **PDF パス** (`InArgument<String>`)* - PDF ファイルのパス。

* **保存パス** (`InArgument<String>`)* - 結果の PDF をこのパスに保存します。存在する場合は上書きされます。

**オプション**

* **ユーザーパスワード** (`InArgument<String>`) - ファイルを開くためのパスワードを設定します。

* **オーナーパスワード** (`InArgument<String>`) - 暗号化された PDF に対して特定の操作を許可するためのパスワード。

* **暗号化レベル** (`EncryptionLevel`) - Encrypted128Bit または Encrypted40Bit を選択して暗号化レベルを指定します。

**PDF ユーザー権限**

* **ユーザー権限** (`UserPermition`) - 印刷、修正、コンテンツ抽出、注釈、フォーム入力、アクセシビリティ抽出、ドキュメント組み立て、全品質印刷などの操作を選択します。

**その他**

* **公開 (チェックボックス)** - アクティビティを公開する場合にチェックしてください。データセキュリティ要件を考慮してください。

* **表示名 (String)** - アクティビティの名前。コードの整理のために変更できます。
  例: [3424325] Open Window

