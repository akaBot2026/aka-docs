---
id: search
title: "検索"
sidebar_label: "検索"
sidebar_position: 16
description: "アクティビティのドキュメントを検索します。"
displayed_sidebar: activitiesSidebar
---
# 検索

RCA.Activities.Salesforce.Search

このアクティビティを使用して、Salesforce 内でパラメータ化された検索操作を実行できます。

**プロパティ**

**高度な検索**

* **検索:** 完全で有効なパラメータ化された検索文字列を指定します。

**基本検索:**

* **フィールド:** 取得する Salesforce オブジェクト フィールドをリストします。指定しない場合は、ID のみが取得されます。これらのフィールドは、リストされているすべての Salesforce オブジェクトに存在する必要があります。
* **SalesforceObjects:** 検索する Salesforce オブジェクトを列挙します。
* **SearchTerm:** 有効な検索語を提供します。

**その他**

* **DisplayName** - アクティビティの表示名。
* **パブリック** - 選択すると、変数と引数の値が詳細レベルで記録されます。

**出力**

* **結果:** Salesforce オブジェクトがキーであり、そのレコードを含む DataTable が値であるディクショナリとしての結果。検索で指定したオブジェクトのレコードが存在しない場合、そのオブジェクトは辞書に含まれません。
* **SalesforceStatus:** 検索が完了すると Salesforce から返されるステータス。SalesforceStatus 変数に保存されます。