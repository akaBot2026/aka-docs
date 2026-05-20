---
id: deserialize-json-t
title: "JSON `<T>` を逆シリアル化する"
sidebar_label: "JSON `<T>` を逆シリアル化する"
sidebar_position: 2
description: "JSON T アクティビティのドキュメントを逆シリアル化します。"
displayed_sidebar: activitiesSidebar
---
# JSON`<T>`を逆シリアル化する

RCA.Activities.Core.DeserializeJson

## **説明**

このアクティビティを使用すると、JSON 文字列を JObject に逆シリアル化できます。

![image-20220505145828-1.png](/static/img/916ee2_image-20220505145828-1.png)

（\*必須）

**アクティビティ本体内**

* **JSON 文字列 (文字列)**\* - これには逆シリアル化する JSON 文字列が含まれます。 JSON は、ID を使用せず、二重引用符で囲んで記述する必要があります。配列内の各文字列は一重引用符で囲んで記述する必要があります。
例:`{'Name': 'Maria'}`

## **プロパティ**

**入力**

* **JSON String (String)\***- これには、逆シリアル化する JSON 文字列が含まれます。 JSON は、ID を使用せず、二重引用符で囲んで記述する必要があります。配列内の各文字列は一重引用符で囲んで記述する必要があります。
例:`{'Name': 'Maria'}`

**その他**

* **パブリック (チェックボックス)** - チェックすると、このアクティビティのデータがログに表示されます。使用する前にデータのセキュリティを考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: Json`<T>`を逆シリアル化する
* **TypeArgument (ドロップダウン ボックス)** - JSON String プロパティで逆シリアル化されるさまざまな種類のデータを選択できます。

**出力**

* **JSON オブジェクト (Newtonsoft.Json.Linq.JObject)** - 変数として逆シリアル化された JSON。
