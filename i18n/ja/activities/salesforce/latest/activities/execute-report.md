---
id: execute-report
title: "レポートの実行"
sidebar_label: "レポートの実行"
sidebar_position: 6
description: "レポートアクティビティのドキュメントを実行します。"
displayed_sidebar: activitiesSidebar
---
# レポートの実行

RCA.Activities.Salesforce.ExecuteReport

このアクティビティを使用して、Salesforce でレポートを実行し、レポート結果を DataTable に保存できます。このアクティビティは、**Salesforce アプリケーション スコープ** アクティビティ内でのみ機能します。

**プロパティ**

**入力**

* **レポート ID** – 実行する Salesforce のレポートの ID。文字列と文字列変数のみがサポートされます。

**その他**

* **DisplayName** - アクティビティの表示名。
* **パブリック** - 選択すると、変数と引数の値が詳細レベルで記録されます。

**出力**

* **結果** - レポートの実行結果。DataTable 変数に保存されます。 DataTable 変数のみがサポートされています。
* **Salesforce ステータス** – アクションが完了すると Salesforce から返されるステータス。SalesforceStatus 変数に保存されます。