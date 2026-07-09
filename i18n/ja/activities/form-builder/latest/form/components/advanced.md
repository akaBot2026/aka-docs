---
id: advanced
title: "高度なコンポーネント"
sidebar_label: "高度"
sidebar_position: 2
description: "akaBot Form Builder の高度な入力・インタラクティブコンポーネント。"
displayed_sidebar: activitiesSidebar
---

# 高度なコンポーネント

日付ピッカー、署名キャンバス、メール入力など、より専門的な入力コンポーネントについて説明します。

![advanced-components.png](/static/img/advanced-components.png)

---

## Email

**データ型:** `String`

メール形式の入力を受け付け、標準的なメールアドレス形式であるかを自動検証します。

---

## URL

**データ型:** `String`

URL 入力用コンポーネントです。標準的な URL 形式の検証を備えています。

---

## 電話番号

**データ型:** `String`

電話番号入力用コンポーネント。入力マスクでフォーマットを制御できます。

---

## タグ

**データ型:** `JArray` (文字列の配列)

複数のラベルタグを入力・管理するためのコンポーネントです。

---

## 住所

**データ型:** `JObject`

住所の検索・自動補完を行うコンポーネント。外部マッププロバイダーと連携できます。

---

## 日付 / 時刻

**データ型:** `String` または `DateTime`

日付/時刻の選択を行うコンポーネントです。表示形式や有効/無効の設定が可能です。

---

## 署名

**データ型:** `String`（Base64 エンコードされた PNG データ URI）

手書き署名をキャプチャするキャンバスを提供します。

