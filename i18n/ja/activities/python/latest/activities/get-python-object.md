---
id: get-python-object
title: "Python オブジェクトの取得"
sidebar_label: "Python オブジェクトの取得"
sidebar_position: 1
description: "Python オブジェクト アクティビティのドキュメントを取得します。"
displayed_sidebar: activitiesSidebar
---
# Python オブジェクトの取得

RCA.Activities.Python.GetObject

## **説明**

この Invoke Python Method アクティビティは Python を変換します。選択した .NET データ型への Python スクリプトのロードなど、他の Python アクティビティによって返されるオブジェクト変数。

[![get object.jpg](/static/img/a80b08_get-object.jpg)](/bin/download/Activities/Python/Activities/Get%20Python%20Object/WebHome/get%20object.jpg?rev=1.1)

（\*必須）

## **プロパティ**

**入力**

* **Python オブジェクト (PythonObject)\*** - PythonObject 変数に格納されている、変換する Python オブジェクト。

**その他**

* **公開 (チェックボックス)** - 公開したい場合にチェックを入れます。使用する前に、データのセキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
**例**: Python オブジェクトを取得します。
* **型引数 (ドロップダウン リスト)** - PythonObject 変数から取得する .NET データ型。

**出力**

* **結果 (オブジェクト)** - TypeArgument プロパティで選択された .NET 型変数に変換された PythonObject 変数。
