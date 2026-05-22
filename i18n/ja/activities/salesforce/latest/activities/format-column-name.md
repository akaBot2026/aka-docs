---
id: format-column-name
title: "列名の書式設定"
sidebar_label: "列名の書式設定"
sidebar_position: 8
description: "列名のフォーマットに関するアクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# 列名の書式設定

RCA.Activities.Salesforce.FormatColumnNames

このアクティビティは、指定された DataTable 変数内の列名を置き換えます。

**プロパティ**

**入力**

* **Data:** 列名を置換する必要がある DataTable 変数を指定します。このフィールドでは DataTable 変数のみがサポートされます。
* **マッピング:** このフィールドには、2 つの列を含む DataTable 変数が必要です。
  + **ColumnName:** [データ] フィールドで指定された DataTable 変数に存在する予期される列名を表します。
  + **FieldName:** 既存の列を置き換える列名を指定します。

**その他**

* **DisplayName** - アクティビティの表示名。
* **パブリック** - 選択すると、変数と引数の値が詳細レベルで記録されます。

**オプション**

* **InvalidColumns:** Mapping プロパティで指定された列名と一致しない列名のリスト。これは`IEnumerable<String>`変数に格納されます。