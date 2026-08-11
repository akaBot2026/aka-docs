---
id: redundant-sequences
title: ST-MRD-005 - 冗長なシーケンス
sidebar_label: "冗長なシーケンス"
sidebar_position: 5
description: ST-MRD-005 - 冗長なシーケンス
displayed_sidebar: studioSidebar
---
# ST-MRD-005 - 冗長なシーケンス

**ルール ID：** ST-MRD-005

**スコープ：** アクティビティ

## 説明

このルールは、1 つのアクティビティのみを含む `Sequence` アクティビティを検出します。1 つのアイテムだけを保持するためにシーケンスを使用すると、ワークフローに不要なレイヤー（ネスト）が作成され、視覚的なレイアウトが乱雑になって読みにくくなります。

![st-mrd-005](/static/img/st-mrd-005.png)

## 推奨事項

単一の子アクティビティをシーケンスの外にドラッグし、空になったシーケンスを削除してください。これにより、ワークフローがフラットになり、構造が整理されます。
