---
id: get-element
title: "要素の取得"
sidebar_label: "要素の取得"
sidebar_position: 5
description: "Element アクティビティのドキュメントを取得します。"
displayed_sidebar: activitiesSidebar
---
# 要素の取得

RCA.Activities.Java.GetElement

## **説明**

このアクティビティを使用すると、Java ファイルから要素を取得できます。

[![get element.png](/static/img/b3bf86_get-element.png)](/bin/download/Activities/Java/Activities/Get%20Element/WebHome/get%20element.png?rev=1.1)

（\*必須）

## **プロパティ**

**共通**

* **エラー時に続行 (ブール値)** - ブール変数には、True または False の 2 つの値があります。 True - アクティビティ内でエラーが発生した場合でも、プロセスの残りの部分が実行を継続できるようにします。 False (デフォルト) - プロセスの実行の継続をブロックします。
* **タイムアウト MS (Int32)** - エラーがスローされるまでにアクティビティの実行を待機する最大時間 (ミリ秒単位)。タイムアウトが経過すると、アクティビティは終了します。デフォルト値: 30000 (ミリ秒)。

**入力**

* **入力要素 (JavaElement)\***- 取得する要素。
* **From (JavaElement)\***- 要素を取得するファイル
* **セレクター (文字列) \***- ここにセレクターを追加できます。文字列のみがサポートされます。

例:

テキスト
`<wnd app="..." ></wnd><java role="..." ></java>`

**その他**

* **公開 (チェックボックス)** - 公開したい場合にチェックを入れます。使用する前に、データのセキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: 要素の取得

**出力**

* **出力要素 (JavaElement)** - Java ファイルから取得する要素。 JavaElement 変数のみに出力します。
