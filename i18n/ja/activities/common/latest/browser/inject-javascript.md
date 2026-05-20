---
id: inject-javascript
title: "JavaScript を挿入する"
sidebar_label: "JavaScript を挿入する"
sidebar_position: 7
description: "Javascript アクティビティのドキュメントを挿入します。"
displayed_sidebar: activitiesSidebar
---
# JavaScript を挿入する

RCA.Activities.Common.InjectJavascript

## **説明**

Inject JavaScript を使用すると、Web ページに JavaScript を挿入できます。

![image-20220505134722-1.png](/static/img/5af07a_image-20220505134722-1.png)

（\*必須）

## **アクティビティ本体内**

* **スクリプト ファイル (文字列)**\* – 挿入する JavaScript ファイルのパス。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - このプロパティは、エラーが発生した場合にオートメーションを継続するタイミングを指定します。可能な値は True または False の 2 つだけです。 True - アクティビティ内でエラーが発生した場合でも、プロセスの残りの部分が実行を継続できるようにします。 False (デフォルト) - プロセスの実行の継続をブロックします。
* **Delay After (Int32)** - アクティビティ実行後の遅延時間 (ミリ秒単位)。デフォルトの時間は 300 ミリ秒です。
例: 300
* **Delay Before (Int32)** - アクティビティが操作の実行を開始するまでの遅延時間 (ミリ秒単位)。デフォルトの時間は 200 ミリ秒です。
例: 200

**入力**

* **スクリプト ファイル (文字列)**\* – 挿入する JavaScript ファイルのパス。
例: "D:\Users\Downloads\invokeCode\invokeCode\alert.js

**その他**

* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
* **公開 (チェックボックス)** - 公開する場合にチェックを入れます。使用する前に、データ セキュリティ要件を必ず考慮してください。デフォルトはチェックなしです。

**出力**

* **スクリプト出力 (文字列)** - タイプ = 「文字列」の出力されたスクリプト ファイル。
