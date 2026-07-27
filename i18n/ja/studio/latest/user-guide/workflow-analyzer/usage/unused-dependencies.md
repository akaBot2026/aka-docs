---
id: unused-dependencies
title: ST-USG-010 - 未使用の依存関係
sidebar_label: "未使用の依存関係"
sidebar_position: 10
description: ST-USG-010 - 未使用の依存関係
displayed_sidebar: studioSidebar
---
# ST-USG-010 - 未使用の依存関係

**ルール ID：** ST-USG-010

**スコープ：** プロジェクト

## 説明

プロジェクト設定ファイル（`project.json` または `project.v1.json`）で宣言されているが、プロジェクトの `.xaml` ファイルのいずれでも使用されていないパッケージを検出します。

![st-usg-010](/static/img/st-usg-010.png)

## 推奨事項

プロジェクトのサイズと読み込み時間を削減するために、未使用のパッケージをプロジェクトの依存関係から削除してください。
