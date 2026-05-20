---
id: get-bulk-api-job-results
title: "一括 API ジョブ結果の取得"
sidebar_label: "一括 API ジョブ結果の取得"
sidebar_position: 9
description: "Bulk API ジョブ結果アクティビティのドキュメントを取得します。"
displayed_sidebar: activitiesSidebar
---
# 一括 API ジョブ結果の取得

RCA.Activities.Salesforce.GetBulkAPIJobResults

このアクティビティを使用して、Salesforce の一括 API ジョブの結果を取得できます。

**プロパティ**

**入力**

* **ID** - 結果を取得する一括 API ジョブの ID。文字列と文字列変数のみがサポートされます。
* **タイプ** - 指定した一括 API ジョブに対して取得する結果のタイプ。デフォルトでは、このフィールドは ** 成功** に設定されています。以下の 3 つのオプションが利用可能です。
  + 成功しました
  + 失敗しました
  + 未加工

**その他**

* **DisplayName** - アクティビティの表示名。
* **パブリック** - 選択すると、変数と引数の値が詳細レベルで記録されます。

**出力**

* **結果** - 一括 API ジョブで見つかった指定されたタイプの結果。DataTable 変数に保存されます。 DataTable 変数のみ。
* **Salesforce ステータス** – アクションが完了すると Salesforce から返されるステータス。SalesforceStatus 変数に保存されます。