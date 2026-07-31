---
id: delay-activity-usage
title: ST-DBP-026 - 遅延アクティビティの使用
sidebar_label: "遅延アクティビティの使用"
sidebar_position: 6
description: ST-DBP-026 - 遅延アクティビティの使用
displayed_sidebar: studioSidebar
---
# ST-DBP-026 - 遅延アクティビティの使用

**ルール ID：** ST-DBP-026

**スコープ：** ワークフロー

## 説明

このルールは、ワークフロー ファイルで遅延アクティビティが使用されているかどうかをチェックします。遅延アクティビティの使用は、壊れやすいオートメーションにつながる可能性があります。

## 推奨事項

静的な遅延の代わりに、動的な待機（例：「要素が存在するまで待機」）の使用を検討してください。

![st-dbp-026](/static/img/st-dbp-026.png)
