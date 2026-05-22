---
id: execute-soql
title: "SOQLの実行"
sidebar_label: "SOQLの実行"
sidebar_position: 7
description: "SOQL アクティビティのドキュメントを実行します。"
displayed_sidebar: activitiesSidebar
---
# SOQLの実行

RCA.Activities.Salesforce.ExecuteSOQL

このアクティビティを使用して、Salesforce で Salesforce オブジェクト クエリ言語 (SOQL) コマンドを実行し、クエリ結果を DataTable に保存できます。このアクティビティは、**Salesforce アプリケーション スコープ** アクティビティ内でのみ機能します。

**プロパティ**

**入力**

* **SOQL コマンド** – 実行する有効な SOQL コマンド。文字列と文字列変数のみがサポートされます。

**注意**: コマンドでエスケープ文字を使用すると、SOQL コマンドに特殊文字を含めることができます。エスケープ シーケンス[here](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_quotedstringescapes.htm)の公式ガイドを参照してください。

**その他**

* **DisplayName** - アクティビティの表示名。
* **パブリック** - 選択すると、変数と引数の値が詳細レベルで記録されます。

**出力**

* **結果** - Salesforce で SOQL コマンドを実行した結果。DataTable 変数に保存されます。データ テーブル変数のみがサポートされます。
* **Salesforce ステータス** – アクションが完了すると Salesforce から返されるステータス。SalesforceStatus 変数に保存されます。