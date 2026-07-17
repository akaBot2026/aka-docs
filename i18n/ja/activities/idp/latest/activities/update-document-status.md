---
id: update-document-status
title: "Update Document Status"
sidebar_label: "Update Document Status"
sidebar_position: 5
description: "Update Document Status activity documentation."
displayed_sidebar: activitiesSidebar
---
# Update Document Status

RCA.Activities.IDP.UpdateDocumentStatus

## **説明**

このアクティビティを使用すると、akaBot IDP プラットフォーム上の1つ以上のドキュメントのステータスを更新できます。

![update-document](/static/img/update-document.png)

(\* は必須項目)

**コンテナ要件:** このアクティビティは [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) コンテナ内で実行する必要があります。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - 真または偽のブール値。  
  * **True** - アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続することを許可します。  
  * **False (デフォルト)** - プロセスの実行をブロック（中断）します。
* **Timeout MS (Int32)** - エラーがスローされる前に、アクティビティがステータスを更新するのを待機する時間（ミリ秒単位）を指定します。デフォルト値は `30000` ミリ秒（30秒）です。

**入力**

* **Document Keys (String[])**\* - 更新したいドキュメントキーのリスト/配列。これは文字列の配列であるため、入力は波括弧 `{}` で囲まれた配列初期化構文に従う必要があります。例：
  * 単一のドキュメント: `{"DOC_2026_001"}`
  * 複数のドキュメント: `{"DOC_2026_001", "DOC_2026_002", "DOC_2026_003"}`
* **Update To Status (Dropdown)** - ドキュメントに割り当てたいターゲットステータスを指定します。デフォルトでは、`CONFIRMED` が選択されています。オプションは以下の通りです：
  * `TOREVIEW`
  * `IMPORTING`
  * `FAILED_IMPORT`
  * `POSTPONED`
  * `CONFIRMED`
  * `EXPORTED`
  * `REJECTED`
  * `DELETED`
  * `SPLITTED`
  * `INVALID_LICENSE`

**その他**

* **Display Name (String)** - このアクティビティの表示名。コードをより良く整理および構造化するために、アクティビティの名前を編集できます。  
  例: `[333519241] Update Document Status`。
* **Public (Checkbox)** - アクティビティを公開したい場合にチェックします。このプロパティを使用する前に、データセキュリティの要件を考慮してください。

---

## **ステップ・バイ・ステップの使用方法**

1. **IDP Scope コンテナ内に配置**:
   * **Toolbox** から [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) アクティビティをワークフローデザイナーパネルにドラッグ＆ドロップします。接続の詳細を設定します。

2. **Update Document Status を追加**:
   * **Update Document Status** アクティビティを **IDP Scope** コンテナの **Do** ブロック内にドラッグ＆ドロップします。

3. **プロパティを設定**:
   * **Document Keys**: 更新したいドキュメントキーの配列を `{"DOC_KEY_1", "DOC_KEY_2"}` の形式で入力します。単一のドキュメントのみを更新する場合でも、`{"DOC_2026_001"}` のように波括弧で囲む必要があります。
   * **Update To Status**: ドロップダウンリストからターゲットステータスを選択します（例: ドキュメントの処理が正常に完了し、ERP システムへのデータ入力を行った後に `CONFIRMED` を選択）。

4. **ワークフローを実行**:
   * プロセスを実行します。akaBot は akaBot IDP サーバー上の指定されたドキュメントを選択されたステータスに更新します。

## **トラブルシューティング**

* **Document Keys の赤い警告アイコン / 検証エラー**:
  * **Document Keys** フィールドには文字列配列（`String[]`）が必要です。未加工の文字列（例: `"DOC_001"`）を入力すると、Studio は検証エラーを表示します。文字列を波括弧で囲む必要があります（例: `{"DOC_001"}`）。
  * テスト中に検証警告を素早く消すには、`{"test"}` と入力します。
* **Document Key Not Found (ドキュメントキーが見つかりません)**:
  * 配列に入力されたドキュメントキーが akaBot IDP サーバー上に存在し、接続されているパイプライン/アカウントに属していることを確認してください。
* **Invalid API Key or Server Endpoint (無効な API キーまたはサーバーエンドポイント)**:
  * 親の **IDP Scope** アクティビティが正しく構成され、接続が正常に確立されていることを確認してください。
