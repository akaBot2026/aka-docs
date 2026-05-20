---
id: inject-javascript
title: "JavaScript を挿入する"
sidebar_label: "JavaScript を挿入する"
sidebar_position: 23
description: "Javascript アクティビティのドキュメントを挿入します。"
displayed_sidebar: activitiesSidebar
---
# JavaScript を挿入する

RCA.Activities.Browser.InjectJs

## **説明**

Inject JavaScript を使用すると、Web ページに JavaScript を挿入できます。

![image-20220505134721-2.png](/static/img/59161b_image-20220505134721-2.png)

（\*必須）

## **アクティビティの本文**

* **Script File (String)\*** – 挿入する JavaScript ファイルまたは JavaScript テキストのパス。

## **プロパティ**

**共通**

* **エラー時に続行 (ブール値)** - ブール変数には、True または False の 2 つの値があります。
True - アクティビティ内でエラーが発生した場合でも、プロセスの残りの部分が実行を継続できるようにします。
False (デフォルト) - プロセスの実行の継続をブロックします。

**入力**

* **引数:**
  + データを渡す必要がない場合 => フィールドを空のままにして、**OK** をクリックします
  + 入力データを渡す必要がある場合 => 「引数の作成」をクリックします
    - 引数の名前を入力してください
    - ドロップダウン リストから方向を選択します。`{In, out, in / out}`
    - ドロップダウン リストからタイプを選択します。
    - 値を入力してください
* **スクリプト ファイル (文字列)**\* – 挿入する JavaScript ファイルのパス。ここに JavaScript コードを直接挿入することもできます。
例:`"D:\Users\Downloads\invokeCode\invokeCode\alert.js"`または`"function clickButton(){document.querySelector('#loginButton').click();}"`

**その他**

* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: [345357] Javascript を挿入する
* **公開 (チェックボックス)** - 公開する場合にチェックを入れます。使用する前に、データ セキュリティ要件を必ず考慮してください。デフォルトではチェックが入っていません。

**出力**

* **スクリプト出力 (文字列)\***- タイプ = 「文字列」の出力されたスクリプト ファイル。出力名には空白を使用できません。
