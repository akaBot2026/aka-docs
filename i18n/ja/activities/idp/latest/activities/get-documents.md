---
id: get-documents
title: "ドキュメントの取得"
sidebar_label: "ドキュメントの取得"
sidebar_position: 4
description: "Get Documents アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ドキュメントの取得

RCA.Activities.IDP.GetDocuments

## **説明**

指定したパイプラインから処理ステータスやソート条件に基づいてドキュメント一覧を取得します。

![get-document](/static/img/get-document.png)

(*必須項目の場合あり)

**コンテナ要件:** このアクティビティは [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) コンテナ内で実行する必要があります。

## **プロパティ**

**共通**

* **Continue On Error (`Boolean`)** - True / False。
* **Timeout MS (`Int32`)** - ドキュメント取得の待機時間（ミリ秒）。デフォルト `30000` ミリ秒。

**入力**

* **Pipeline Key (`String`)**\* - 取得対象のパイプラインキー。例: `"invoice_pipeline"`
* **Status (ドロップダウン)** - 取得するドキュメントのステータス（デフォルト `CONFIRMED`）。

**オプション**

* **Order By Date (ドロップダウン)** - `NEWEST`（デフォルト）または `OLDEST`。
* **Top (`Int32`)** - 取得上限件数。空欄または 0 未満の場合はすべて取得。デフォルトは `10`。

**出力**

* **Result (`Document[]`)** - 取得したドキュメント一覧が格納される変数（型 `RCA.Activities.IDP.Models.Document[]`）。

## **使用手順**

1. **IDP Scope 内に配置**。
2. **Pipeline Key と Status を設定**。
3. **Result を受け取る変数 (例: `docList`) を作成**。
4. **ワークフローを実行して結果をループ処理**。

## **トラブルシューティング**

* **Pipeline Key 無効**: キーが正しいか確認してください。
* **ドキュメントが見つからない**: 選択したステータスに該当するドキュメントが存在するか確認してください。
* **接続タイムアウト**: `Timeout MS` を増やしてください。

