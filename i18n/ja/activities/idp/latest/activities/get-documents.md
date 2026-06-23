---
id: get-documents
title: "Get Documents"
sidebar_label: "Get Documents"
sidebar_position: 4
description: "Get Documents activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Documents

RCA.Activities.IDP.GetDocuments

## **説明**

このアクティビティを使用すると、処理ステータスおよびソート基準に基づいて、akaBot IDP サーバー上の指定されたパイプラインからドキュメントのリストを取得できます。

![get-document](/static/img/get-document.png)

(\* は必須項目)

**コンテナ要件:** このアクティビティは [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) コンテナ内で実行する必要があります。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - 真または偽のブール値。  
  * **True** - アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続することを許可します。  
  * **False (デフォルト)** - プロセスの実行をブロック（中断）します。
* **Timeout MS (Int32)** - エラーがスローされる前に、アクティビティがドキュメントを取得するのを待機する時間（ミリ秒単位）を指定します。デフォルト値は `30000` ミリ秒（30秒）です。

**入力**

* **Pipeline Key (String)**\* - ドキュメントを取得したい特定のパイプラインのパイプラインキー。このキーは akaBot IDP のパイプライン設定から取得できます。例: `"invoice_pipeline"`
* **Status (Dropdown)** - 取得したいドキュメントのステータスを指定します。デフォルトでは、`CONFIRMED` が選択されています。オプションは以下の通りです：
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
  例: `[127293359] Get Document`。
* **Public (Checkbox)** - アクティビティを公開したい場合にチェックします。このプロパティを使用する前に、データセキュリティの要件を考慮してください。

**オプション**

* **Order By Date (Dropdown)** - 受信日順に取得されたドキュメントを並べ替えます。オプションは以下の通りです：
  * `NEWEST` (デフォルト)
  * `OLDEST`
* **Top (Int32)** - リストの上位から取得するドキュメントの最大数。空のままにするか、`0` 未満に設定すると、一致するすべてのドキュメントが取得されます。デフォルトは `10` です。

**出力**

* **Result (Document[])** - 入力条件に基づいて取得されたドキュメントのリストを格納する akaBot 変数。

## **ステップ・バイ・ステップの使用方法**

1. **IDP Scope コンテナ内に配置**:
   * **Toolbox** から [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) アクティビティをワークフローデザイナーパネルにドラッグ＆ドロップします。接続の詳細（`Api Key` と `Server Endpoint`）を設定します。

2. **Get Documents を追加**:
   * **Get Documents** アクティビティを **IDP Scope** コンテナの **Do** ブロック内にドラッグ＆ドロップします。

3. **プロパティを設定**:
   * **Pipeline Key**: ターゲットとなるパイプラインキーをダブルクォーテーションで囲んで入力します (例: `"invoice_pipeline"`)。
   * **Status**: ドロップダウンリストからステータスを選択します（例: 抽出と検証が完了したドキュメントを取得するには `CONFIRMED` を選択）。
   * **Order By Date**（**オプション**の下）: `NEWEST` または `OLDEST` を選択します。
   * **Top**（**オプション**の下）: 取得したいドキュメントの数を設定します（例: 直近の5つのドキュメントを取得する場合は `5` に設定）。

4. **出力 Result をマップ**:
   * **Properties** パネルの **出力** で、**Result** フィールドをクリックし、**Ctrl + K** を押し、ドキュメント의 リストを保存するための変数を作成します（型は `RCA.Activities.IDP.Models.Document[]` で、変数名は `docList`）。

5. **ワークフローを実行**:
   * プロセスを実行します。akaBot はサーバーから指定された基準に一致するドキュメントのリストを取得し、`docList` 変数に保存します。その後、**For Each** アクティビティを使用してこのリストをループ処理できます。

## **トラブルシューティング**

* **Pipeline Key Invalid or Empty (パイプラインキーが無効または空)**:
  * **Pipeline Key** の値が正しく、プラットフォームの設定と完全に一致していることを確認してください。
* **No Documents Found (ドキュメントが見つかりません)**:
  * 返されたリストが空の場合は、サーバー上のそのパイプラインに、選択した **Status**（ステータス）に一致するドキュメントが実際に存在することを確認してください。
* **Connection Timeout / Network Errors (接続タイムアウト / ネットワークエラー)**:
  * サーバーの応答が遅い場合や、多数のドキュメントを要求する場合は、**Timeout MS** プロパティを増やしてください。
* **Invalid API Key or Server Endpoint (無効な API キーまたはサーバーエンドポイント)**:
  * 親の **IDP Scope** アクティビティが正しく構成され、接続が正常に確立されていることを確認してください。
