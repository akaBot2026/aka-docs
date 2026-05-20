---
id: delete-record
title: "レコードの削除"
sidebar_label: "レコードの削除"
sidebar_position: 4
description: "記録アクティビティのドキュメントを削除します。"
displayed_sidebar: activitiesSidebar
---
# レコードの削除

RCA.Activities.Salesforce.DeleteRecord

このアクティビティを使用して、Salesforce からレコードを削除できます。このアクティビティは、**Salesforce アプリケーション スコープ** アクティビティ内でのみ機能します。

**アクティビティ本体内**

* **設定** – Salesforce から削除するレコードの Salesforce オブジェクトを選択します。

**プロパティ**

**上級**

* **Salesforce オブジェクト** – 削除するレコードが属するオブジェクト。文字列と文字列変数のみがサポートされます。

**高度なプロパティ グループ**

* **ID -** Salesforce から削除するレコードの ID。文字列と文字列変数のみがサポートされます。

**その他**

* **DisplayName** - アクティビティの表示名。
* **パブリック** - 選択すると、変数と引数の値が詳細レベルで記録されます。

**出力**

* **Salesforce ステータス** – アクションが完了すると Salesforce から返されるステータス。SalesforceStatus 変数に保存されます。