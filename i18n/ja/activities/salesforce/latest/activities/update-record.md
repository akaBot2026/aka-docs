---
id: update-record
title: "更新記録"
sidebar_label: "更新記録"
sidebar_position: 18
description: "記録アクティビティのドキュメントを更新します。"
displayed_sidebar: activitiesSidebar
---
# 更新記録

RCA.Activities.Salesforce.UpdateRecord

このアクティビティを使用して、Salesforce の既存のレコードの詳細を更新できます。このアクティビティは、Salesforce アプリケーション スコープ アクティビティ内でのみ機能します。

**アクティビティ本体内**

* **設定** – Salesforce オブジェクト設定ウィザードを使用して、Salesforce で更新するレコードの値を設定します。

**プロパティ**

**上級**

* **追加フィールド** – Salesforce オブジェクトで更新される追加のフィールドのセット。DataRow 変数に保存されます。 Salesforce オブジェクト設定ウィザードでフィールドが設定されている場合、その値はこのフィールドで指定された値をオーバーライドします。

**注意**: 列名は、挿入する Salesforce オブジェクト内で有効である必要があります。

**その他**

* **DisplayName** - アクティビティの表示名。
* **パブリック** - 選択すると、変数と引数の値が詳細レベルで記録されます。

**出力**

* **Salesforce ステータス** – アクションが完了すると Salesforce から返されるステータス。SalesforceStatus 変数に保存されます。