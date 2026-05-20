---
id: python-scope
title: "Python のスコープ"
sidebar_label: "Python のスコープ"
sidebar_position: 4
description: "Python スコープのアクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Python のスコープ

RCA.Activities.Python.PythonScope

## **説明**

Python アクティビティのスコープを提供し、指定された Python 環境を初期化するコンテナー。このアクティビティが終了すると、それまでにロードされたすべてのオブジェクトが削除されます。

[![python scope.jpg](/static/img/510fa7_python_scope.jpg)](/bin/download/Activities/Python/Activities/Python%20Scope/WebHome/python%20scope.jpg?rev=1.1)

（\*必須）

## **アクティビティ本体内**

* **Do** - アクティビティ内で実行するアクティビティ。

## **プロパティ**

**入力**

* **Python パス (文字列)**\* - 追加する Python ファイルのパス。
例: 「C:/Python36/」
* **作業フォルダー (文字列)** - 現在のスコープで実行されるスクリプトの作業フォルダーを指定するために使用されます。このフィールドは文字列変数のみをサポートします。

**その他**

* **公開 (チェックボックス)** - 公開したい場合にチェックを入れます。使用する前に、データのセキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: 「Python 関数」

**オプション**

* **Python バージョン (ドロップダウンリスト)** - 使用している Python バージョンのリスト。デフォルトでは、これは自動に設定されています。
* **ターゲット プラットフォーム (ドロップダウンリスト)** - Windows アプリケーションごとに異なるプラットフォームを選択できます。 x86 または x64。
