---
id: get-xml-node-attributes
title: "XMLノード属性の取得"
sidebar_label: "XMLノード属性の取得"
sidebar_position: 4
description: "XML ノード属性アクティビティのドキュメントを取得します。"
displayed_sidebar: activitiesSidebar
---
# XMLノード属性の取得

RCA.Activities.Core.GetXMLNodeAttributes

## **説明**

Get XMLNode Attributes アクティビティを使用すると、XML ノードの属性を取得できます。

[![get xml node attributes.jpg](/static/img/73e5f8_get-xml-node-attributes.jpg)](/bin/download/Activities/XML/Activities/Get%20XML%20Node%20Attributes/WebHome/get%20xml%20node%20attributes.jpg?rev=1.1)

（\*必須）

## **アクティビティ本体内**

* **VB 式 (XNode) を入力してください**\* - 属性を取得する XML ノード。 XNode 変数のみがサポートされます。

## **プロパティ**

**入力**

* **既存の XML ノード (XNode)**\* - 属性を取得する XML ノード。 XNode 変数のみがサポートされます。

**その他**

* **パブリック (チェックボックス)** - チェックすると、このアクティビティのデータがログに表示されます。使用する前にデータのセキュリティを考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: XML ノード属性の取得

**出力**

* **属性 (IEnumerable< XAttribute >)** - 取得された XML ノード属性を含む IEnumerable の出力変数。
