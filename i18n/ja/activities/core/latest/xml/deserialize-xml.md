---
id: deserialize-xml
title: "XMLの逆シリアル化"
sidebar_label: "XMLの逆シリアル化"
sidebar_position: 1
description: "XML アクティビティ ドキュメントを逆シリアル化します。"
displayed_sidebar: activitiesSidebar
---
# XMLの逆シリアル化

RCA.Activities.Core.DeserializeXML

## **説明**

Deserialize XML アクティビティを使用すると、XML を XDocument オブジェクトに逆シリアル化できます。

[![deserialize.jpg](/static/img/db9ffc_deserialize.jpg)](/bin/download/Activities/XML/Activities/Deserialize%20XML/WebHome/deserialize.jpg?rev=1.1)

(\* for Mandatory)

## **アクティビティ本体内**

* **VB 式 (文字列) を入力してください**\* - 逆シリアル化する XML を含む文字列または文字列変数を入力します。文字列変数と文字列のみがサポートされます。

## **プロパティ**

**入力**

* **XMLString (String)**\* - 逆シリアル化する XML を含む入力文字列または文字列変数。文字列変数と文字列のみがサポートされます。

**その他**

* **パブリック (チェックボックス)** - チェックすると、このアクティビティのデータがログに表示されます。使用する前にデータのセキュリティを考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: XML の逆シリアル化

**出力**

* **XML ドキュメント (XDocument)** - 変数に格納された逆シリアル化された XML ドキュメント。
