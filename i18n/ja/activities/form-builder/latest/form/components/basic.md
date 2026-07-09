---
id: basic
title: "基本コンポーネント"
sidebar_label: "基本"
sidebar_position: 1
description: "akaBot Form Builder にある基本的な入力/選択コンポーネント。"
displayed_sidebar: activitiesSidebar
---

# 基本コンポーネント

テキストフィールドやチェックボックス、ボタンなど Form Designer の基本入力コンポーネントについて説明します。

![basic-components.png](/static/img/basic-components.png)

---

## テキストフィールド

**データ型:** `String`

短いテキスト入力に使用します。値の取得/設定は `Get Element Value` / `Set Element Value` アクティビティを使用してください。マッピングキーは Field Key の Property Name と一致させます。

---

## テキストエリア

**データ型:** `String`

長いテキスト入力（複数行）に使用します。`Rows` で表示行数を指定できます。

---

## 数値

**データ型:** `Double` または `Int32`

任意の数値を入力するためのコンポーネントです。桁区切りや小数桁数を設定できます。

---

## パスワード

**データ型:** `String`

機密データ入力用で、入力文字はアスタリスクで表示されます。

---

## チェックボックス

**データ型:** `Boolean`

真/偽を入力するために使用します。`Execute DO on change` を有効にすると値変更時に Do ブロックが自動実行されます。

---

## Select Boxes

**データ型:** `JObject`

複数選択可能なチェックボックス群を表現します。出力はオプションごとの真偽を持つ JSON オブジェクトです。

---

## Select

**データ型:** `String`（複数値許可時は `JArray`）

ドロップダウンリストを表示します。データソースは静的な値、JSON、URL などから設定できます。

---

## Radio

**データ型:** `String`

単一選択のラジオボタンリストを表示します。

---

## Button

**データ型:** なし（アクションまたはフォーム送信）

ボタンは送信、リセット、カスタムイベントなどをトリガーできます。

