---
id: get-xml-nodes
title: "XMLノードの取得"
sidebar_label: "XMLノードの取得"
sidebar_position: 5
description: "XML ノード アクティビティのドキュメントを取得します。"
displayed_sidebar: activitiesSidebar
---
# XMLノードの取得

RCA.Activities.Core.GetXMLNodes

## **説明**

Get Nodes アクティビティを使用すると、XML ドキュメントから XML ノードを取得できます。

![get xml nodes.jpg](/static/img/8d91ed_get-xml-nodes.jpg)

（\*必須）

## **アクティビティ本体内**

* **VB 式 (XDocument) を入力してください**\*- XML を含む XDocument 変数。

## **プロパティ**

**入力**

* **既存の XML (XDocument)**\* - XML を含む XDocument 変数。
* **XMLString (String)** - XML を含む文字列または文字列変数。

**注意**: [既存の XML] プロパティを入力すると、XMLString プロパティが使用できなくなります。

**その他**

* **パブリック (チェックボックス)** - チェックすると、このアクティビティのデータがログに表示されます。使用する前にデータのセキュリティを考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: XML ノードの取得

**出力**

* **XML ノード (IEnumerable)** - 取得された XML ノードを含む変数。
