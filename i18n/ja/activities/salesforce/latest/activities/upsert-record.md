---
id: upsert-record
title: "レコードの更新/挿入"
sidebar_label: "レコードの更新/挿入"
sidebar_position: 20
description: "Upsert Record アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# レコードの更新/挿入

RCA.Activities.Salesforce.UpsertRecord

このアクティビティを使用して、Salesforce の既存のレコードを更新/挿入できます。このアクティビティは、Salesforce アプリケーション スコープ アクティビティ内でのみ機能します。

**アクティビティ本体内**

* **設定** – Salesforce オブジェクト設定ウィザードを使用して、Salesforce で更新/挿入するレコードの値を設定します。

**プロパティ**

**上級**

* **追加フィールド** – Salesforce オブジェクトに設定される追加のフィールドのセット。DataRow 変数に保存されます。 Salesforce オブジェクト設定ウィザードでフィールドが設定されている場合、その値はこのフィールドで指定された値をオーバーライドします。 ** 注 **: 列名は、挿入する Salesforce オブジェクト内で有効である必要があります。

**その他**

* **DisplayName** - アクティビティの表示名。
* **パブリック** - 選択すると、変数と引数の値が詳細レベルで記録されます。

**出力**

* **複数の選択肢** – 外部 ID フィールドと一致するレコードが複数見つかった場合にレコードを保存する`IEnumerable<String>`変数。
* **結果** – 実行されたアクションの結果を示します。以下の 4 つの値が可能です。
  + INSERTED: 挿入アクションが成功した場合に返されます。
  + UPDATED: 更新アクションが成功した場合に返されます。
  + MULTIPLE: 外部 ID フィールドと一致するレコードが複数見つかった場合に返されます。
  + 空: エラーがスローされた場合に返されます。
* **Salesforce ステータス** – アクションが完了すると Salesforce から返されるステータス。SalesforceStatus 変数に保存されます。