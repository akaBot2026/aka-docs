---
id: empty-catch-block
title: ST-DBP-003 - 空の Catch ブロック
sidebar_label: "空の Catch ブロック"
sidebar_position: 3
description: ST-DBP-003 - 空の Catch ブロック
displayed_sidebar: studioSidebar
---
# ST-DBP-003 - 空の Catch ブロック

**ルール ID：** ST-DBP-003

**スコープ：** アクティビティ

## 説明

このルールは、`Try Catch` アクティビティに空の `Catch` ブロックがあるかどうかをチェックします。エラーをキャッチして何も行わない（ログに記録したり処理したりしない）と、エラーが単に隠蔽されます。これにより、オートメーションはトレースを残さずにサイレントに失敗するため、トラブルシューティングが非常に困難になります。

![st-dbp-003](/static/img/st-dbp-003.png)

## 推奨事項

エラーの詳細を記録するために、常に `Catch` ブロック内に少なくとも **ログ メッセージ** アクティビティを追加してください。これにより、ワークフローで例外が発生した場合に問題を容易に追跡して修正できます。
