---
id: get-bulk-api-job
title: "一括APIジョブの取得"
sidebar_label: "一括APIジョブの取得"
sidebar_position: 10
description: "Bulk API ジョブ アクティビティのドキュメントを取得します。"
displayed_sidebar: activitiesSidebar
---
# 一括APIジョブの取得

RCA.Activities.Salesforce.GetBulkAPIJob

このアクティビティを使用して、Salesforce から一括 API ジョブの詳細を取得できます。

**プロパティ**

**入力**

* **ID** – 詳細を取得する一括 API ジョブの ID。文字列と文字列変数のみがサポートされます。

**その他**

* **パブリック** - 選択すると、変数と引数の値が詳細レベルで記録されます。
* **DisplayName** - アクティビティの表示名。

**出力**

* **NumberRecordsFailed** - 指定されたジョブでの処理に失敗したレコードの数。Int32 変数に保存されます。 Int32 変数のみがサポートされています。
* **NumberRecordsProcessed** - 指定されたジョブで正常に処理されたレコードの数。Int32 変数に保存されます。 Int32 変数のみがサポートされています。
* **オブジェクト** - ジョブで操作を実行する Salesforce オブジェクト。文字列と文字列変数のみがサポートされています。
* **オペレーション** - ジョブによって実行された一括 API オペレーション。BulkApiOperation 変数に保存されます。 BulkApiOperation 変数のみがサポートされています
* **再試行** - Salesforce が操作の結果を保存しようとした回数。Int32 変数に保存されます。繰り返し試行すると問題が発生する可能性があるため、数値を考慮してください。 Int32 変数のみがサポートされています。
* **SalesforceStatus** - アクションの完了後に Salesforce から返されるステータス。SalesforceStatus 変数に保存されます。 SalesforceStatus 変数のみがサポートされています
* **状態** - 指定されたジョブの現在の処理状態。文字列と文字列変数のみ。このフィールドでサポートされている値は次のとおりです。
  + 開く
  + アップロード完了
  + 中止されました
  + 失敗しました
  + ジョブ完了
  + 閉店