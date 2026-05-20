---
id: insert-record
title: "レコードの挿入"
sidebar_label: "レコードの挿入"
sidebar_position: 13
description: "記録アクティビティのドキュメントを挿入します。"
displayed_sidebar: activitiesSidebar
---
# レコードの挿入

RCA.Activities.Salesforce.InsertRecord

このアクティビティを使用して、新しいレコードを Salesforce に挿入できます。このアクティビティは、**Salesforce アプリケーション スコープ** アクティビティ内でのみ機能します。

**アクティビティ本体内**

* **設定** – Salesforce オブジェクト設定ウィザードを使用して、Salesforce に挿入するレコードの値を設定します。

**プロパティ**

**上級**

* **参照** – このアクティビティが内部で使用される場合、オプションの参照文字列を使用できます。その値は、複合リクエストの Result プロパティの ** Reference** 列に返されます。文字列と文字列変数のみがサポートされます。

**高度なプロパティ グループ**

* **追加フィールド** – Salesforce オブジェクトに挿入される追加のフィールドのセット。DataRow 変数に保存されます。このフィールドが Salesforce オブジェクト設定ウィザードで設定されている場合、その値はこのフィールドで指定された値をオーバーライドします。

**注意**: 列名は、挿入する Salesforce オブジェクト内で有効である必要があります。

**その他**

* **DisplayName** - アクティビティの表示名。
* **パブリック** - 選択すると、変数と引数の値が詳細レベルで記録されます。

**出力**

* **Salesforce ステータス** – アクションが完了すると Salesforce から返されるステータス。SalesforceStatus 変数に保存されます。