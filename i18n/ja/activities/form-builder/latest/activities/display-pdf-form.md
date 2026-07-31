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

（\*必須項目）

## フォームのプレビュー

次の例は、検証や確認のために、PDFドキュメントと編集可能なJSONデータを並べて表示する方法を示しています。

![PDFフォームUI](/static/img/display-pdf-form-ui.png)

_左側にPDFドキュメント、右側に編集可能なJSONデータが表示されます。ネストされたオブジェクトと配列は、グループ化されたセクションとして表示されます。Ctrl + マウスホイールを使用して、PDFをズーム（拡大・縮小）します。_

## プロパティ

**共通**

- **Continue On Error (Boolean)** - アクティビティでエラーが発生した場合に、ワークフローを続行するかどうかを指定します。`True` の場合はワークフローを続行し、`False`（既定値）の場合はエラー発生時にワークフローを停止します。`True` の場合、キャンセルまたは閉じる (X) はワークフローを停止せず、`Output Data` は未設定 (`null`) のままになります。

**入力**

- **PDF Path (String)**\* - 表示および検証するPDFファイルの完全パスです。
- **Form Title (String)** - FormBuilder ウィンドウに表示されるタイトルです。空の場合、デフォルトで `PDF Form Validation` に設定されます。
- **JSON Path (String)** - 初期値を含むJSONファイルの完全パスです。JSONのルートはオブジェクトである必要があります。ネストされたオブジェクトと配列がサポートされています。`JSON Path` または `JSON Object` のいずれか一方を指定してください（どちらか一方が必須です）。
- **JSON Object (JObject)** - 初期値を含む `JObject` です。別のアクティビティまたはワークフロー変数からJSONが提供される場合に使用します。`JSON Path` または `JSON Object` のいずれか一方を指定してください（どちらか一方が必須です）。

**出力**

- **Output Data (JObject)** - ユーザーが `Save` をクリックした後の編集済みJSONオブジェクトを返します。ユーザーが `Cancel` をクリックするか、`X` ボタンでウィンドウを閉じた場合は設定されません（代わりにアクティビティがエラーをスローします。ユーザー操作を参照してください）。
- **Output JSON Path (String)** - `Save` が成功した後に結果JSONが書き込まれるオプションのパスです。このプロパティは `JSON Path` とは別のもので、入力JSONファイルが自動的に上書きされることはありません。キャンセルまたは閉じる (X) の場合は何も書き込まれません。

**その他**

- **Display Name (String)** - このアクティビティの名前です。ワークフローを整理・構造化するために名前を編集できます。

## **JSON形式**

JSONのルート値はオブジェクトである必要があります。

```json
{
  "VENDOR_NAME": "Engsuco Builders Sdn. Bhd.",
  "VENDOR_ADDRESS": "PLT C 139, PT2191, Jalan Sg. Bakau, Kg Sungai Bakau 48000 Rawang",
  "VENDOR_COUNTRY": "Malaysia",
  "TELEPHONE_NUMBER": "+603-1234567",
  "EMAIL_ADDRESS": "engsucobuilders@gmail.com",
  "TAX_IDENTIFICATION_NUMBER": "C60151271050",
  "BUSINESS_REGISTRATION_NUMBER": "202501026728",
  "SST_REGISTRATION_NUMBER": "B16-2510-32000021",
  "PAYMENT_TERMS": "30 - 45 Days",
  "PAYMENT_METHOD": "Bank Transfer",
  "COMPANY_CODE": "",
  "ACCOUNT_GROUP": "LOCAL",
  "RECONCILIATION_ACCOUNT": "",
  "highlightFields": ["VENDOR_NAME", "COMPANY_CODE"],
  "invoiceItems": [
    {
      "invoise1": {
        "invoiceNumber": "INV-2026-9999",
        "invoiceDate": "2026-07-28"
      },
      "highlightFields": ["invoise1"]
    },
    {
      "invoise2": {
        "invoiceNumber": "INV-2026-9999",
        "invoiceDate": "2026-07-28",
        "highlightFields": ["invoiceDate"]
      }
    }
  ]
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

配列は、`invoiceItems` のようにルートオブジェクト内にネストされている場合にサポートされます。

### オプションのフィールドハイライト

JSONにプロパティ名の `highlightFields` 配列が含まれている場合、一致するフィールドがフォーム上でハイライト表示されます（赤色の境界線 / 薄い赤色の背景）。ネストされた一致は子セクションにも伝播します。`highlightFields` キー自体は編集可能なフィールドとしては表示されません。

## サポートされているJSON型

- **String** - テキスト入力として表示されます。
- **Number** - 編集可能な数値として表示されます。
- **Boolean** - チェックボックスとして表示されます。
- **Null** - 空の入力として表示され、空のままの場合は `null` として保持されます。
- **Date** - `yyyy-MM-dd` 形式の値は、日付ピッカーで表示されます。
- **DateTime** - `2026-07-15T14:30:00Z` のようなISO日時の値は、日時ピッカーで表示されます。
- **Object** - グループ化されたセクションとして表示されます。
- **Array** - インデックス付きのグループ化されたセクションとして表示されます。空の配列は `(empty array)` と表示されます。

## ユーザー操作

- **Save** - 編集済みJSONを `Output Data` から返し、必要に応じて `Output JSON Path` に書き込みます。
- **Cancel** - 編集を破棄します。ユーザーが値を変更した場合、英語の確認ダイアログが表示されます：「You have unsaved changes. Do you want to cancel without saving?」（保存されていない変更があります。保存せずにキャンセルしますか？）。キャンセルが確定されると、アクティビティは `The user skipped the validation process.` のエラーをスローします。`Output Data` は返されず、`Output JSON Path` も書き込まれません。
- **Close (X)** - 保存せずにFormBuilderを閉じます。アクティビティは `The user skipped the validation process.` のエラーをスローします。`Output Data` は返されず、`Output JSON Path` は書き込まれず、入力JSONファイルも変更されません。

## 例

```text
Display PDF Form
    PDF Path         = "C:\\Input\\invoice.pdf"
    Form Title       = "Invoice validation"
    JSON Path        = "C:\\Input\\invoice.json"
    Output Data      = editedInvoice
    Output JSON Path = "C:\\Output\\invoice-result.json"
```

入力ファイルは読み取り専用です。結果ファイルを作成するには、`Output JSON Path` を明示的に設定してください。`Save`（保存）に成功した場合のみ、そのファイルが書き込まれます。

## 検証とエラー

- **Either JsonPath or JsonObject must be provided.** - JSON入力ソースを1つ設定してください。
- **File PDF input was not found.** - `PDF Path` を確認してください。
- **File JSON input was not found.** - `JSON Path` を確認してください。
- **The root JSON value must be an object. JSON arrays are not supported.** - 配列をルートオブジェクト内に配置してください。
- **The user skipped the validation process.** - ユーザーがキャンセルをクリックしたか、XボタンでFormBuilderを閉じました。スキップ後にワークフローを続行させたい場合は、`Continue On Error = True` を使用してください。