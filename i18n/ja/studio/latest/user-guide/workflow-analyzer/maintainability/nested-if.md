---
id: nested-if
title: ST-MRD-007 - ネストされた If
sidebar_label: "ネストされた If"
sidebar_position: 7
description: ST-MRD-007 - ネストされた If
displayed_sidebar: studioSidebar
---
# ST-MRD-007 - ネストされた If

**ルール ID：** ST-MRD-007

**スコープ：** ワークフロー

## 説明

深くネストされた「If」アクティビティを検出します。コードの複雑さが増し、保守性が低下します（スパゲッティ コード）。

![st-mrd-007](/static/img/st-mrd-007.png)

## 推奨事項

「Switch」、「Else If」のラダー、または複雑な判断ブランチを別のワークフローに抽出することでロジックをリファクタリングしてください。

## ルールの変更

リボンで **解析** ボタンのドロップダウンをクリックし、**解析の設定**を選択してアナライザー ウィンドウを開きます。ルールを見つけて選択します。好みに応じて **MaxDepth** パラメータを変更できます。

## デフォルト値にリセット

ST-MRD-007 MaxDepth のデフォルト値は `3` です。

デフォルト値にリセットするには、アナライザー ウィンドウでルールを右クリックし、**デフォルトにリセット**をクリックします。

![st-mrd-007-rtd.png](/static/img/st-mrd-007-rtd.png)
