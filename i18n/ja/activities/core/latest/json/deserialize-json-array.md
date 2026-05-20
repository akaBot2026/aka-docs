---
id: deserialize-json-array
title: "JSON配列の逆シリアル化"
sidebar_label: "JSON配列の逆シリアル化"
sidebar_position: 1
description: "JSON 配列アクティビティのドキュメントを逆シリアル化します。"
displayed_sidebar: activitiesSidebar
---
# JSON配列の逆シリアル化

RCA.Activitites.Core.DeserializeJsonArray

## **説明**

このアクティビティを使用すると、JSON 配列文字列を JSON 配列オブジェクトに逆シリアル化できます。

TODO: ここに画像を追加します

（\*必須）

**アクティビティ本体内**

* **JSON String (String)\***- これには、逆シリアル化する JSON 文字列が含まれます。 JSON は ID を使用せず、二重引用符で囲んで記述する必要があります。配列内の各文字列は一重引用符で囲んで記述する必要があります。
例:`[{'Name': 'Maria 1'}, {'Name': 'Maria 2'}]`

## **プロパティ**

**入力**

* **JSON String (String)\***- これには、逆シリアル化する JSON 文字列が含まれます。 JSON は ID を使用せず、二重引用符で囲んで記述する必要があります。配列内の各文字列は一重引用符で囲んで記述する必要があります。
例:`[{'Name': 'Maria 1'}, {'Name': 'Maria 2'}]`

**その他**

* **パブリック (チェックボックス)** - チェックすると、このアクティビティのデータがログに表示されます。使用する前にデータのセキュリティを考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: JSON 配列の逆シリアル化

**出力**

* **JSON 配列 (Newtonsoft.Json.Linq.JArray)** - 再シリアル化された JSON 配列は変数に保存されます。
