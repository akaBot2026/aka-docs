---
id: get-nodes
title: "ノードの取得"
sidebar_label: "ノードの取得"
sidebar_position: 3
description: "ノードアクティビティのドキュメントを取得します。"
displayed_sidebar: activitiesSidebar
---
# ノードの取得

RCA.Activities.Core.GetNodes

## **説明**

Get XML Nodes アクティビティを使用すると、XML ドキュメントから第 1 レベルの XML ノードのリストを取得できます。

[![get nodes.jpg](/static/img/eb2f92_get-nodes.jpg)](/bin/download/Activities/XML/Activities/Get%20Nodes/WebHome/get%20nodes.jpg?rev=1.1)

（\*必須）

## **アクティビティ本体内**

* **VB 式 (XDocument) を入力してください** - 処理される XML ノードを含む XDocument 変数。

## **プロパティ**

**入力**

* **既存の XML (XDocument)** - 取得する XML ノードを含む XDocument 変数。
* **XMLString (String)**\* - 取得する XML ノードを含む文字列または文字列変数。

**注意**: [既存の XML] プロパティを入力すると、XMLString プロパティが使用できなくなります。

**その他**

* **パブリック (チェックボックス)** - チェックすると、このアクティビティのデータがログに表示されます。使用する前にデータのセキュリティを考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: ノードの取得

**出力**

* **XML ノード (XNode)** - 取得された XML ノードを含む変数。
