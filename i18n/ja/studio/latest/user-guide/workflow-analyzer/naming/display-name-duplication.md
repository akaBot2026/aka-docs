---
id: display-name-duplication
title: ST-NMG-004 - 表示名の重複
sidebar_label: "表示名の重複"
sidebar_position: 5
description: ST-NMG-004 - 表示名の重複
displayed_sidebar: studioSidebar
---
# ST-NMG-004 - 表示名の重複

**ルール ID：** ST-NMG-004

**スコープ：** ワークフロー

## 説明

同一ワークフロー内で同一の DisplayName 値を持つアクティビティを検出します。これはデバッグを困難にします。

![st-nmg-04](/static/img/st-nmg-04.png)

## 推奨事項

各アクティビティに一意で説明的な DisplayName が設定されていることを確認してください。
