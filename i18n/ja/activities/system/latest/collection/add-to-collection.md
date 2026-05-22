---
id: add-to-collection
title: "コレクションに追加"
sidebar_label: "コレクションに追加"
sidebar_position: 1
description: "コレクションに追加アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# コレクションに追加

`System.Activities.Statements.AddToCollection<System.Int32>`

## **説明**

このアクティビティを使用すると、既存のコレクションに項目を追加できます。

![image-20220505155447-1.png](/static/img/5a4939_image-20220505155447-1.png)

（\*必須）

## **プロパティ**

**その他**

* **コレクション (ICollection&lt;T&gt;)** - 新しいアイテムを受け取るコレクション。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: 「コレクションに追加」
* **Item (TypeArgument)**\* - コレクションに追加する項目の数。
* **公開 (チェックボックス)** - 公開する場合にチェックを入れます。使用する前に、データ セキュリティ要件を必ず考慮してください。
* **TypeArgument (ドロップダウン リスト)** - コレクションの型引数と追加する項目。使用するコレクションのデータ型に基づいて、さまざまなオプションを選択できます。
**注意:** TypeArgument が設定されると、Item および Collection プロパティの変数タイプはそれに応じて自動的に更新され、その変数タイプのみを入力として受け入れます。
