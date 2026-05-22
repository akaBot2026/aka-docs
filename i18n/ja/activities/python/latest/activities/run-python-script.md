---
id: run-python-script
title: "Python スクリプトを実行する"
sidebar_label: "Python スクリプトを実行する"
sidebar_position: 5
description: "Python スクリプトの実行アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Python スクリプトを実行する

RCA.Activities.Python.RunScript

## **説明**

このアクティビティにより、Python スクリプトを実行できるようになります。コードをアクティビティに直接入力することも、コードのファイル パスを指定することもできます。 Python Scope アクティビティ内でのみ使用できます。

![run script.jpg](/static/img/2e3868_run_script.jpg)
（\*必須）

## **アクティビティ本体内**

* **スクリプト ファイル** - Python スクリプトのファイル パス。
例: 「C:/PythonCode/hello.py」

## **プロパティ**

**入力**

* **コード (文字列)** - 実行するコード。文字列のみがサポートされています
例: 「print('Hello, world!')」
* **スクリプト ファイル** - Python スクリプトのファイル パス。
例: 「C:/PythonCode/hello.py」

**その他**

* **公開 (チェックボックス)** - 公開したい場合にチェックを入れます。使用する前に、データのセキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: Python スクリプトの実行
