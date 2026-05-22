---
id: parallel-for-each
title: "それぞれに並列"
sidebar_label: "それぞれに並列"
sidebar_position: 4
description: "並列 ForEach アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# それぞれに並列

System.Activities.Statements.ParallelForEach

## **説明**

コレクションのすべての要素を反復処理し、各要素の一連のアクティビティを並行して実行できるようにします。

![Core_ParallelForEach](/static/img/parallel.png)

\* は必須フィールドを示します。

## **プロパティ**

**その他**

* **パブリック (チェックボックス)**: 選択すると、アクティビティ データが記録されます。このプロパティを使用する前に、データ セキュリティ要件を考慮してください。
* **表示名 (文字列)**: このアクティビティの名前。これを編集して、ワークフローをより適切に整理および構造化できます。
例:`Parallel ForEach`
* **完了条件 (ブール値)**\*: アクティビティがいつ完了するかを決定する条件を指定します。
* **型引数 (ドロップダウン リスト)**: コレクション内の要素のデータ型を指定します。
* **値 (IEnumerable)**\*: アクティビティが反復処理するデータのコレクション。