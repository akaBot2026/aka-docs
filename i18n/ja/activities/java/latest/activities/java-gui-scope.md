---
id: java-gui-scope
title: "Java Gui スコープ"
sidebar_label: "Java Gui スコープ"
sidebar_position: 7
description: "Java Gui スコープのアクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Java Gui スコープ

RCA.Activities.Java.JavaGuiScope

## **説明**

このアクティビティを使用すると、Java ライブラリを初期化し、後続のすべてのアクティビティにスコープを提供できます。

[![java gui scope.png](/static/img/e5212f_java-gui-scope.png)](/bin/download/Activities/Java/Activities/Java%20Gui%20Scope/WebHome/java%20gui%20scope.png?rev=1.1)
（\*必須）

## **プロパティ**

**入力**

* **プロセス パス (文字列)**\* - 実行するファイル パス。文字列のみがサポートされます。
例: 「C:/Apps/Agent.java」
* **セレクター (文字列)**\* - ここにセレクターを追加できます。文字列のみがサポートされます。
例:

テキスト

`<wnd app="..." ></wnd><java role="..." ></java>`

**その他**

* **公開 (チェックボックス)** - 公開する場合にチェックを入れます。使用する前に、データ セキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: Java Gui スコープ

**オプション**

* **完了時または失敗時に破棄 (チェックボックス)** - 実行の終了時または失敗時に Java アプリケーション ウィンドウを閉じるかどうかを指定します。このオプションはデフォルトでチェックされています。

**出力**

* **Java Access Bridge (JavaElement)** : Java アプリケーションの GUI 要素に関する情報を表示および操作できるオブジェクトです。 JavaElement 変数のみで出力します。
