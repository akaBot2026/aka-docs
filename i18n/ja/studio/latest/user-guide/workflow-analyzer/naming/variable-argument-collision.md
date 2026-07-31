---
id: variable-argument-collision
title: ST-NMG-006 - 変数と引数の衝突
sidebar_label: "変数と引数の衝突"
sidebar_position: 7
description: ST-NMG-006 - 変数と引数の衝突
displayed_sidebar: studioSidebar
---
# ST-NMG-006 - 変数と引数の衝突

**ルール ID：** ST-NMG-006

**スコープ：** ワークフロー

## 説明

変数がワークフロー引数と同じ名前を持つ場合を検出します。これはロジック エラーや混乱を引き起こす可能性があります。

![st-nmg-06](/static/img/st-nmg-06.png)

## 推奨事項

すべてのワークフロー引数から一意になるように変数の名前を変更してください。
