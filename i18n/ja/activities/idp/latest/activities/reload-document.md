---
id: reload-document
title: "ドキュメントの再読み込み"
sidebar_label: "ドキュメントの再読み込み"
sidebar_position: 7
description: "Reload Document アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ドキュメントの再読み込み

RCA.Activities.IDP.ReloadDocument

## **説明**

このアクティビティは、akaBot Vision 上で無効または処理失敗したドキュメントを再処理（リトライ）するために使用し、新しいドキュメントキーを生成します。

![reload-document](/static/img/reload-document.png)

(*必須項目の場合あり)

**コンテナ要件:** このアクティビティは [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) コンテナ内で実行する必要があります。

## **プロパティ**

**共通**

* **Continue On Error (`Boolean`)** - True / False。
* **Timeout MS (`Int32`)** - 再読み込み要求の待機時間（ミリ秒）。デフォルト `30000` ミリ秒。

**入力**

* **Document Key (`String`)**\* - 再処理したい失敗/無効なドキュメントのキー。

**その他**

* **Display Name (`String`)** - 例: `[787606491] Reload Document`。
* **Public (Checkbox)** - 公開する場合はチェック。

**出力**

* **New Document Key (`String`)** - 再処理で生成された新しいドキュメントキーが格納される変数。

## **使用手順**

1. **IDP Scope 内に配置**。
2. **Document Key を指定**（例: `docKey`）。
3. **出力の New Document Key を受け取る変数（例: `newDocKey`）を作成**。
4. **ワークフローを実行**。

## **トラブルシューティング**

* **Document Key が見つからない**: 指定したキーがサーバーに存在するか確認してください。
* **再処理不可（ステータスの衝突）**: `Completed` や `Exported` のように既に完了しているドキュメントは再読み込みできません。
* **無効な API Key / Server Endpoint**: IDP Scope の接続設定を確認してください。

