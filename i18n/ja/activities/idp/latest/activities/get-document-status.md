---
id: get-document-status
title: "ドキュメントステータスの取得"
sidebar_label: "ドキュメントステータスの取得"
sidebar_position: 6
description: "Get Document Status アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ドキュメントステータスの取得

RCA.Activities.IDP.GetDocumentStatus

## **説明**

このアクティビティは、akaBot Vision プラットフォーム上のドキュメントの現在の処理ステータスを取得します。

![get-document-status](/static/img/get-document-status.png)

(*必須項目の場合あり)

**コンテナ要件:** このアクティビティは [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) コンテナ内で実行する必要があります。

## **プロパティ**

**共通**

* **Continue On Error (`Boolean`)** - True / False。
* **Timeout MS (`Int32`)** - ステータス取得の待機時間（ミリ秒）。デフォルト `30000` ミリ秒。

**入力**

* **Document Key (`String`)**\* - ステータスを取得するドキュメントの一意キー。

**その他**

* **Display Name (`String`)** - 例: `[608381559] Get Document Status`。
* **Public (Checkbox)** - 公開する場合はチェック。

**出力**

* **Splitted Document Keys (`String[]`)** - ドキュメントが分割されている場合に分割後のドキュメントキー一覧を返します。
* **Status (`DocumentStatus`)** - ドキュメントの現在の処理ステータス。

## **使用手順**

1. **IDP Scope 内に配置**。
2. **Document Key を指定**（`docKey` など）。
3. **出力の Status / Splitted Document Keys を受け取る変数を作成**。
4. **ワークフローを実行**。

## **トラブルシューティング**

* **Document Key が見つからない**: キーがサーバーに存在するか確認してください。
* **無効な API Key / Server Endpoint**: IDP Scope の接続設定を確認してください。
* **接続タイムアウト**: `Timeout MS` を増やしてください。

