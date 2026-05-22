---
id: lightning-rest-api-request
title: "Lightning REST API リクエスト"
sidebar_label: "Lightning REST API リクエスト"
sidebar_position: 14
description: "Lightning REST API リクエストアクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Lightning REST API リクエスト

RCA.Activities.Salesforce.LightningRESTAPIRequest

このアクティビティを使用して、Salesforce アクティビティ パッケージのアクティビティとして実装されていない Salesforce Lightning REST API を呼び出すことができます。

**プロパティ**

**入力**

* **AcceptFormat** - 受け入れられる応答の形式を指定します。デフォルト値は「ANY」です。 3 つのオプションが利用可能:
  + どれでも
  + JSON
  + XML
* **メソッド** - API を呼び出すときに使用されるリクエスト メソッド。使用可能な HTTP メソッドは、GET、POST、PUT、DELETE、HEAD、OPTIONS、PATCH、および MERGE です。デフォルトのメソッドは GET です。
* **リソース** - 使用する REST リソースへのフルパス。文字列と文字列変数のみがサポートされます。

**その他**

* **パブリック** - 選択すると、変数と引数の値が詳細レベルで記録されます。
* **DisplayName** - アクティビティの表示名。

**オプション**

* **本文** - リクエストの本文。文字列と文字列変数のみがサポートされます。
* **BodyFormat** - リクエストの本文の形式。ほとんどの Lightning API リクエストは、** application/json** や ** application/xml** などの本文形式を受け入れます。文字列と文字列変数のみがサポートされます。
* **ヘッダー** - HTTP リクエストにカスタム ヘッダーを含めることができます。コレクション変数のみがサポートされています。
* **ResultPath** – リクエストの結果応答を保存する場所へのパスを指定します。文字列と文字列変数のみがサポートされます。

**出力**

* **結果** - API エンドポイントから受信した応答。このプロパティは、** ResultPath** プロパティ フィールドが空のままの場合にのみ設定されます。文字列変数のみがサポートされています。
* **SalesforceStatus** - アクションが完了すると Salesforce から返されるステータス。SalesforceStatus 変数に保存されます。
* **StatusCode** - リクエストによって返された HTTP ステータス コード。Int32 変数に保存されます。 Int32 変数のみがサポートされています。