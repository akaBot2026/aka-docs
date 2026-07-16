---
id: display-pdf-form
title: "PDFフォームを表示"
sidebar_label: "PDFフォームを表示"
sidebar_position: 1
description: "PDFとJSONデータを並べて表示し、検証および編集を行います。"
displayed_sidebar: activitiesSidebar
---

# PDFフォームを表示

RCA.Activities.FormBuilder.DisplayPdfForm

## **説明**

PDFドキュメントとJSONデータを並べて表示し、検証や確認を行います。ユーザーはJSONの値とPDFの内容を比較し、フィールドを編集して、その結果をワークフローに返すことができます。

![PDFフォームを表示](/static/img/displaypdfform.png)

（*必須項目）

## フォームのプレビュー

次の例は、検証や確認のために、PDFドキュメントと編集可能なJSONデータを並べて表示する方法を示しています。

![PDFフォームUI](/static/img/display-pdf-form-ui.png)

*左側にPDFドキュメント、右側に編集可能なJSONデータが表示されます。ネストされたオブジェクトと配列は、グループ化されたセクションとして表示されます。*

## プロパティ

**共通**

- **Continue On Error (Boolean)** - アクティビティでエラーが発生した場合に、ワークフローを続行するかどうかを指定します。`True` の場合はワークフローを続行し、`False`（既定値）の場合はエラー発生時にワークフローを停止します。

**入力**

- **PDF Path (String)**\* - 表示および検証するPDFファイルの完全パスです。
- **JSON Path (String)** - 初期値を含むJSONファイルの完全パスです。JSONのルートはオブジェクトである必要があります。ネストされたオブジェクトと配列がサポートされています。
- **JSON Object (JObject)** - 初期値を含む `JObject` です。別のアクティビティまたはワークフロー変数からJSONが提供される場合に使用します。

**出力**

- **Output Data (JObject)** - ユーザーが `Save` をクリックした後の編集済みJSONオブジェクトを返します。ユーザーが `Cancel` を確定した場合は、元のJSONオブジェクトを返します。
- **Output JSON Path (String)** - `Save` または `Cancel` の確定後に、結果JSONを書き込む任意のパスです。このプロパティは `JSON Path` とは別のもので、入力JSONファイルが自動的に上書きされることはありません。

**その他**

- **Display Name (String)** - このアクティビティの名前です。ワークフローを整理・構造化するために名前を編集できます。

## **JSON形式**

JSONのルート値はオブジェクトである必要があります。

```json
{
  "invoice": {
    "invoiceNumber": "INV-2026-001",
    "invoiceDate": "2026-07-15",
    "customerName": "Acme Trading Co., Ltd.",
    "customerEmail": "ap@acme.example",
    "currency": "USD"
  },
  "lineItems": [
    {
      "description": "Document processing",
      "quantity": 2,
      "unitPrice": 150.0,
      "amount": 300.0
    },
    {
      "description": "Validation service",
      "quantity": 1,
      "unitPrice": 75.5,
      "amount": 75.5
    }
  ],
  "summary": {
    "subtotal": 375.5,
    "tax": 37.55,
    "total": 413.05
  },
  "notes": "Please verify the invoice number, customer information, quantities, and total against the PDF."
}
```

次のルート形式はサポートされていません。

```json
[
  {
    "invoiceNumber": "INV-2026-001"
  }
]
```

`lineItems` のように、ルートオブジェクト内にネストされた配列はサポートされています。

## サポートされているJSON型

- **String** - テキスト入力として表示されます。
- **Number** - 編集可能な数値として表示されます。
- **Boolean** - チェックボックスとして表示されます。
- **Null** - 空の入力として表示され、空のままの場合は `null` として保持されます。
- **Date** - `yyyy-MM-dd` 形式の値は、日付ピッカーで表示されます。
- **DateTime** - `2026-07-15T14:30:00Z` のようなISO日時の値は、日時ピッカーで表示されます。
- **Object** - グループ化されたセクションとして表示されます。
- **Array** - インデックス付きのグループ化されたセクションとして表示されます。

## ユーザー操作

- **Save** - 編集済みJSONを `Output Data` から返し、必要に応じて `Output JSON Path` に書き込みます。
- **Cancel** - 元のJSONを返します。ユーザーが値を変更した場合、キャンセルする前に英語の確認メッセージが表示されます。
- **Close (X)** - 保存せずにFormBuilderを閉じます。`Output Data` は `null` になり、`Output JSON Path` には書き込まれず、入力JSONファイルは変更されません。

## 例

```text
Display PDF Form
    PDF Path        = "C:\\Input\\invoice.pdf"
    JSON Path       = "C:\\Input\\invoice.json"
    Output Data     = editedInvoice
    Output JSON Path = "C:\\Output\\invoice-result.json"
```

入力ファイルは読み取り専用です。結果ファイルを作成するには、`Output JSON Path` を明示的に設定してください。

## 検証とエラー

- **Either JsonPath or JsonObject must be provided.** - JSON入力ソースを1つ設定してください。
- **File PDF input was not found.** - `PDF Path` を確認してください。
- **File JSON input was not found.** - `JSON Path` を確認してください。
- **The root JSON value must be an object. JSON arrays are not supported.** - 配列をルートオブジェクト内に配置してください。
- **Output Data is null.** - `Save` または `Cancel` を使用せず、`X` ボタンでFormBuilderを閉じました。
