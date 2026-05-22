---
id: get-record
title: "レコードの取得"
sidebar_label: "レコードの取得"
sidebar_position: 12
description: "記録アクティビティのドキュメントを入手します。"
displayed_sidebar: activitiesSidebar
---
# レコードの取得

**レコードの取得**

RCA.Activities.Salesforce.GetRecord

このアクティビティを使用して、Salesforce からレコードを取得できます。このアクティビティは、Salesforce アプリケーション スコープ アクティビティ内でのみ機能します。

**アクティビティ本体内**

* **設定** – Salesforce オブジェクト設定ウィザードを使用して、Salesforce から取得するレコードの値を設定します。

**プロパティ**

**上級**

* **追加フィールド** – Salesforce オブジェクトで更新される追加のフィールドのセット。DataRow 変数に保存されます。 Salesforce オブジェクト設定ウィザードでフィールドが設定されている場合、その値はこのフィールドで指定された値をオーバーライドします。

**注意**: 列名は、挿入する Salesforce オブジェクト内で有効である必要があります。

**その他**

* **DisplayName** - アクティビティの表示名。
* **パブリック** - 選択すると、変数と引数の値が詳細レベルで記録されます。

**出力**

* **Salesforce ステータス** – アクションが完了すると Salesforce から返されるステータス。SalesforceStatus 変数に保存されます。