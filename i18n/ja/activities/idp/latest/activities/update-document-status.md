---
id: update-document-status
title: "ドキュメントステータスの更新"
sidebar_label: "ドキュメントステータスの更新"
sidebar_position: 5
description: "Update Document Status アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ドキュメントステータスの更新

RCA.Activities.IDP.UpdateDocumentStatus

## **説明**

このアクティビティは、akaBot Vision 上の 1 件または複数のドキュメントのステータスを更新します。

![update-document](/static/img/update-document.png)

(*必須項目の場合あり)

**コンテナ要件:** このアクティビティは [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) コンテナ内で実行する必要があります。

## **プロパティ**

**共通**

* **Continue On Error (`Boolean`)** - True / False。
* **Timeout MS (`Int32`)** - ステータス更新の待機時間（ミリ秒）。デフォルト `30000` ミリ秒。

**入力**

* **Document Keys (`String[]`)**\* - 更新対象のドキュメントキー配列。配列リテラル形式で指定します。例:
  * 単一: `{"DOC_2026_001"}`
  * 複数: `{"DOC_2026_001", "DOC_2026_002"}`
* **Update To Status (ドロップダウン)** - 更新先のステータス（デフォルト `CONFIRMED`）。

**その他**

* **Display Name (`String`)** - 例: `[333519241] Update Document Status`。
* **Public (Checkbox)** - 公開する場合はチェック。

## **使用手順**

1. **IDP Scope 内に配置**。
2. **Document Keys を配列形式で入力**（例: `{"DOC_KEY_1", "DOC_KEY_2"}`）。
3. **Update To Status を選択**。
4. **ワークフローを実行**。

## **トラブルシューティング**

* **検証エラー / 赤い警告アイコン**: Document Keys は `String[]` として配列で渡す必要があります。単一文字列（例: `"DOC_001"`）では検証エラーになります。
* **Document Key が見つからない**: 指定したキーがサーバーに存在するか確認してください。
* **無効な API Key / Server Endpoint**: IDP Scope の設定を確認してください。

