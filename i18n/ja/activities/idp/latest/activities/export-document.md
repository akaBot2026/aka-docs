---
id: export-document
title: "ドキュメントのエクスポート"
sidebar_label: "ドキュメントのエクスポート"
sidebar_position: 3
description: "Export Document アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ドキュメントのエクスポート

RCA.Activities.IDP.ExportDocument

## **説明**

このアクティビティは、akaBot Vision 上で処理済み（Confirmed/Exported）ドキュメントから抽出された構造化データを `DataTable`、`JsonString`、`XMLString` などの標準形式でエクスポートするために使用します。

![export-document](/static/img/export-document.png)

(*必須項目の場合あり)

**コンテナ要件:** このアクティビティは [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) コンテナ内で実行する必要があります。

## **プロパティ**

**共通**

* **Continue On Error (`Boolean`)** - True / False のブール値。
* **Timeout MS (`Int32`)** - データ取得の待機時間（ミリ秒）。デフォルトは `30000` ミリ秒。

**入力**

* **Document Key (`String`)**\* - エクスポート対象のドキュメントキー。例: `"DOC_2026_06_22_001"`
* **Extract Type (ドロップダウン)** - 出力データ形式を選択:
  * `DataTable` (デフォルト)
  * `JsonString`
  * `XMLString`

**その他**

* **Display Name (`String`)** - 例: `[838217454] Export Document`。
* **Public (Checkbox)** - 公開する場合はチェック。

**出力**

* **Extracted Data (`Object`)** - 選択した **Extract Type** に合わせた変数を受け取ります（`DataTable` または `String`）。

## **使用手順**

1. **IDP Scope の内部に配置**。
2. **Import Document で docKey を作成**。
3. **Export Document を追加して Document Key と Extract Type を設定**。
4. **Extracted Data を `dtExtractedData` のような変数に受け取る**。

## **トラブルシューティング**

* **ドキュメントが未処理**: Get Document Status でステータスが `Confirmed` または `Completed` になっているか確認してください。
* **Document Key 無効**: 正しいドキュメントキーを指定してください。
* **出力変数の型不一致**: `Extract Type` に合わせた変数型を使用してください。

