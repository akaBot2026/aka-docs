---
id: inject-javascript
title: "JavaScript を挿入する"
sidebar_label: "JavaScript を挿入する"
sidebar_position: 13
description: "Javascript アクティビティのドキュメントを挿入します。"
displayed_sidebar: activitiesSidebar
---
# JavaScript を挿入する

RCA.Activities.IE.InjectJs

## **説明**

Inject Javascript を使用すると、Web ページに Javascript を挿入できます。

![image-20220506110747-1.png](/static/img/be951a_image-20220506110747-1.png)

（\*必須）

**アクティビティの本文**

* **ターゲット要素を選択** - 項目を選択するフィールドを選択します。このアクティビティは、そのフィールドの場所を指定する文字列変数 (セレクター) を生成します。

## **プロパティ**

**共通**

* **エラー時に続行 (ブール値)** - ブール変数には、True または False の 2 つの値があります。 True: アクティビティ内でエラーが発生した場合でも、プロセスの残りの部分が実行を継続できるようにします。 False (デフォルト): プロセスの実行の継続をブロックします。

**入力**

* **JS コード (文字列)**\* - 挿入する Javascript ファイルの名前。 JavaScript スクリプトは引用符で囲みます。
例: code.vbs
* **JS パラメータ (Dictionary< String, Argument >)** - JavaScript コードの入力データ (文字列または文字列変数)。

**その他**

* **公開 (チェックボックス)** - 公開したい場合にチェックを入れます。使用する前に、データのセキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: Javascript を挿入する

**出力**

* **JS 出力 (文字列)** - タイプ = 「文字列」の出力されたスクリプト ファイル。出力名には空白を使用できません。
