---
id: invoke-python-method
title: "Python メソッドの呼び出し"
sidebar_label: "Python メソッドの呼び出し"
sidebar_position: 2
description: "Python メソッド呼び出しアクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Python メソッドの呼び出し

RCA.Activities.Python.InvokeMethod

## **説明**

このアクティビティを使用すると、ワークフロー内の Python スクリプトから指定されたメソッドを直接実行できます。このスクリプトには、最初に Python スクリプトの読み込みアクティビティを使用して環境に読み込む必要があるメソッドが含まれています。

[![invoke.jpg](/static/img/d9b21e_invoke.jpg)](/bin/download/Activities/Python/Activities/Invoke%20Python%20Method/WebHome/invoke.jpg?rev=1.1)

（\*必須）

## **プロパティ**

**入力**

* **Python インスタンス (PythonObject)** - 実行するメソッドを含む Python スクリプト。PythonObject 変数に保存されます。
* **メソッド名 (文字列)**\* - 使用するメソッドの名前。文字列のみがサポートされます。
例: 「Python メソッド」。

**その他**

* **公開 (チェックボックス)** - 公開したい場合にチェックを入れます。使用する前に、データのセキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: 「Python メソッドを呼び出します。

**出力**

* **結果 (PythonObject)** - 指定された Python スクリプトのハンドラーは、PythonObject 変数に保存されます。

**オプション**

* **パラメータ (IEnumerable< Object >)** - 呼び出される Python スクリプトの入力パラメータのリスト (存在する場合)。
