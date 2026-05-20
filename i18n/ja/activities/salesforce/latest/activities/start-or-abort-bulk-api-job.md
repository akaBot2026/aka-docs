---
id: start-or-abort-bulk-api-job
title: "一括 API ジョブの開始または中止"
sidebar_label: "一括 API ジョブの開始または中止"
sidebar_position: 17
description: "Bulk API ジョブの開始または中止アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# 一括 API ジョブの開始または中止

RCA.Activities.Salesforce.UpdateBulkAPIJob

このアクティビティを使用して、Salesforce で一括 API ジョブを開始または中止できます。

**プロパティ**

**入力**

* **アクション** - 一括 API ジョブに対して実行するアクションを指定します。
  + 開始: ジョブを開始します
  + 中止: ジョブを中止します。
* **ID** - アクションを実行する一括 API ジョブの ID。文字列と文字列変数のみがサポートされます。

**その他**

* **DisplayName** - アクティビティの表示名。
* **パブリック** - 選択すると、変数と引数の値が詳細レベルで記録されます。

**出力**

* **Salesforce ステータス** – アクションが完了すると Salesforce から返されるステータス。SalesforceStatus 変数に保存されます。