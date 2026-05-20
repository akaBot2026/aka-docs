---
id: get-list-view-records
title: "リストビューレコードの取得"
sidebar_label: "リストビューレコードの取得"
sidebar_position: 11
description: "リスト ビュー レコード アクティビティのドキュメントを取得します。"
displayed_sidebar: activitiesSidebar
---
# リストビューレコードの取得

RCA.Activities.Salesforce.GetListViewRecords

このアクティビティを使用して、Salesforce から Salesforce オブジェクトのレコードのリストを取得し、DataTable 変数に保存できます。

**アクティビティ本体内**

* **設定** – Salesforce オブジェクト設定ウィザードを使用して、レコードを取得するように Salesforce オブジェクトとリスト ビューを設定します。

![1715142092864-482.png](/static/img/d561c7_1715142092864-482.png)

**プロパティ**

**その他**

* **DisplayName** - アクティビティの表示名。
* **パブリック** - 選択すると、変数と引数の値が詳細レベルで記録されます。

**出力**

* **結果** - 各レコードに対して操作を実行した結果。DataTable 変数に保存されます。 DataTable 変数には、コマンド、ID、ステータス、エラー メッセージのフィールドが含まれます。 DataTable 変数のみがサポートされます。
* **Salesforce ステータス** – アクションが完了すると Salesforce から返されるステータス。SalesforceStatus 変数に保存されます。