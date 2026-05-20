---
id: load-python-script
title: "Pythonスクリプトのロード"
sidebar_label: "Pythonスクリプトのロード"
sidebar_position: 3
description: "Python スクリプト アクティビティのドキュメントを読み込みます。"
displayed_sidebar: activitiesSidebar
---
# Pythonスクリプトのロード

RCA.Activities.Python.LoadScript

## **説明**

このアクティビティを使用すると、Python スクリプトのハンドラーを PythonObject 変数に保存できます。結果の変数を使用して、コード内のメソッドを呼び出すことができます。このアクティビティは、Python スコープ アクティビティでのみ使用できます。

[![load script.jpg](/static/img/ed452c_load-script.jpg)](/bin/download/Activities/Python/Activities/Load%20Python%20Script/WebHome/load%20script.jpg?rev=1.1)

（\*必須）

## **アクティビティ本体内**

* **スクリプト ファイル** - Python スクリプトのファイル パス。
例: 「C:/PythonCode/hello.py」

## **プロパティ**

**入力**

* **コード (文字列)**\* - 実行するコード。文字列のみがサポートされます。
例: 「print('Hello, world!')」
* **スクリプト ファイル (文字列)**\* - Python スクリプトのファイル パス。
例: 「C:/PythonCode/hello.py」

**その他**

* **公開 (チェックボックス)** - 公開したい場合にチェックを入れます。使用する前に、データのセキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: Python スクリプトをロードします。

**出力**

* **結果 (PythonObject)** - 指定された Python スクリプトのハンドラーは、PythonObject 変数に保存されます。
