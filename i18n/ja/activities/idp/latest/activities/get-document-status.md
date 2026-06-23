---
id: get-document-status
title: "Get Document Status"
sidebar_label: "Get Document Status"
sidebar_position: 6
description: "Get Document Status activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Document Status

RCA.Activities.IDP.GetDocumentStatus

## **説明**

このアクティビティを使用すると、akaBot IDP プラットフォームからドキュメントの現在の処理ステータスを取得できます。

![get-document-status](/static/img/get-document-status.png)

(\* は必須項目)

**コンテナ要件:** このアクティビティは [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) コンテナ内で実行する必要があります。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - 真または偽のブール値。  
  * **True** - アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続することを許可します。  
  * **False (デフォルト)** - プロセスの実行をブロック（中断）します。
* **Timeout MS (Int32)** - エラーがスローされる前に、アクティビティがステータスを取得するのを待機する時間（ミリ秒単位）を指定します。デフォルト値は `30000` ミリ秒（30秒）です。

**入力**

* **Document Key (String)**\* - ステータスを取得したいドキュメントの一意のドキュメントキー。例: `"DOC_2026_06_22_001"`

**その他**

* **Display Name (String)** - このアクティビティの表示名。コードをより良く整理および構造化するために、アクティビティの名前を編集できます。  
  例: `[608381559] Get Document Status`。
* **Public (Checkbox)** - アクティビティを公開したい場合にチェックします。このプロパティを使用する前に、データセキュリティの要件を考慮してください。

**出力**

* **Splitted Document Keys (String[])** - 入力されたドキュメントのステータスが Splitted（分割済み、すなわちドキュメントに複数のファイルが含まれ、分割された場合）である場合、分割されたドキュメントのドキュメントキーのリストを返します。それ以外の場合は null を返します。
* **Status (DocumentStatus)** - 入力されたドキュメントの現在の処理ステータス。

## **ステップ・バイ・ステップの使用方法**

1. **IDP Scope コンテナ内に配置**:
   * **Toolbox** から [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) アクティビティをワークフローデザイナーパネルにドラッグ＆ドロップします。接続の詳細を設定します。

2. **Get Document Status を追加**:
   * **Get Document Status** アクティビティを **IDP Scope** コンテナの **Do** ブロック内にドラッグ＆ドロップします。

3. **プロパティを設定**:
   * **Document Key**: 変数 `docKey`（以前の `Import Document` アクティビティによって生成されたドキュメントキーを表す）または特定のドキュメントキーをダブルクォーテーションで囲んで入力します。

4. **出力プロパティをマップ**:
   * **Properties** パネルの **出力** で以下を設定します：
     * **Status**: **Ctrl + K** を押し、ドキュメントのステータスを受け取る変数を作成します。
     * **Splitted Document Keys**: **Ctrl + K** を押し、アップロードされたファイルが分割された場合に分割後のドキュメントキーを格納するための `String[]` 型変数を作成します。

5. **ワークフローを実行**:
   * プロセスを実行します。akaBot は akaBot IDP サーバーからドキュメントの現在の処理ステータスを取得し、その詳細を変数に出力します。

## **トラブルシューティング**

* **Document Key Not Found (ドキュメントキーが見つかりません)**:
  * 指定されたドキュメントキーが akaBot IDP サーバーに存在し、接続されているアカウントに属していることを確認してください。
* **Invalid API Key or Server Endpoint (無効な API キーまたはサーバーエンドポイント)**:
  * 親の **IDP Scope** コンテナが、有効な API キーとエンドポイントで正しく構成されていることを確認してください。
* **Connection Timeout / Network Errors (接続タイムアウト / ネットワークエラー)**:
  * サーバー接続を確認し、インターネットが安定していることを確認してください。サーバーの応答が遅い場合は、**Timeout MS** プロパティを増やしてください。
