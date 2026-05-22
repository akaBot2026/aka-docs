---
id: execute-xpath
title: "XPathの実行"
sidebar_label: "XPathの実行"
sidebar_position: 2
description: "XPath アクティビティのドキュメントを実行します。"
displayed_sidebar: activitiesSidebar
---
# XPathの実行

RCA.Activities.Core.ExecuteXPath

## **説明**

XPath の実行アクティビティを使用すると、指定された XML ドキュメントに対して指定された XPath 式を実行できます。

[![execute path.jpg](/static/img/8f4688_execute-path.jpg)](/bin/download/Activities/XML/Activities/Execute%20XPath/WebHome/execute%20path.jpg?rev=1.1)

(\* は必須)

**アクティビティ本体内**

* **既存の XML (XDocument)** - 処理される XML を含む XDocument 変数。このフィールドは XDocument 変数のみをサポートします。
* **XPath 式 (文字列)**\* - XPath 式を含む文字列または文字列変数。このフィールドは文字列と文字列変数のみをサポートします。

## **プロパティ**

**入力**

* **既存の XML (XDocument)** - 処理される XML を含む XDocument 変数。このフィールドは XDocument 変数のみをサポートします。
* **XMLString (String)**\* - 処理対象の XML を含む入力文字列または文字列変数。文字列変数のみがサポートされます。

**注意**: 既存の XML プロパティを完了すると、XMLString フィールドは使用できなくなります。

* **XPath 式 (文字列)**\* - XPath 式を含む文字列または文字列変数。このフィールドは文字列と文字列変数のみをサポートします。

**その他**

* **パブリック (チェックボックス)** - チェックすると、このアクティビティのデータがログに表示されます。使用する前にデータのセキュリティを考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: XPath を実行する

**出力**

* **結果 (オブジェクト)** - オブジェクト変数に格納された、読み取られたまたは抽出された XML ドキュメント。
