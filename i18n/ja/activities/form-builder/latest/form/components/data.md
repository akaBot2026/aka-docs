---
id: data
title: "データコンポーネント"
sidebar_label: "データ"
sidebar_position: 4
description: "akaBot Form Builder のデータおよびグリッドコンポーネント。"
displayed_sidebar: activitiesSidebar
---

# データコンポーネント

Hidden（非表示）フィールド、Data Grid、Edit Grid などのデータ系コンポーネントについて解説します。

![data-components.png](/static/img/data-components.png)

---

## Hidden

**データ型:** `String`（格納するデータにより変わります）

送信時に含めるがユーザーには表示しないデータを格納するのに使用します。

---

## Data Grid

**データ型:** `JArray`（JSON オブジェクトの配列）

複数行のコンポーネントをグルーピングして表形式で表示します。DataTable 変数とバインドして表データを扱う用途に適しています。

---

## Edit Grid

**データ型:** `JArray`（JSON オブジェクトの配列）

行単位で編集可能なグリッドコンポーネントです。テンプレートタブでは Header/Row/Footer の HTML（Lodash テンプレート）で表示をカスタマイズできます。

