---
id: get-task
title: "Get Task"
sidebar_label: "Get Task"
sidebar_position: 1
description: "get-task activity documentation."
displayed_sidebar: activitiesSidebar
---
# タスクを取得

RCA.Activities.Core.GetTask

## **説明**

このアクティビティでは、システムからタスクを取得できます。Center API を使用して、カスタムフィルターに従って Center のタスク一覧を取得します。

このアクティビティは、検索フィルターを設定するための2つのインターフェースモードを提供します: ビジュアルな **Filter Builder** と **Where Condition** エディタ。

![get-task-filter-builder](/static/img/get-task-filter-builder.png)

![get-task-where-condition](/static/img/get-task-where-condition.png)

（* は必須）

## **アクティビティの本文**

* **Where** – タスクを取得するためのフィルター条件を指定するにはここをクリックします。Filter Builder または Where Condition を使用してフィルタロジックを構成できます。

## **プロパティ**

* **Continue On Error (Boolean)**：現在のアクティビティが失敗しても、残りのアクティビティの実行を続行するかを指定します。サポートされるのはブール値（True、False）のみです。
* **Timeout MS (Int32)**：エラーをスローする前にアクティビティが完了するのを待つ最大時間（ミリ秒）。タイムアウトに達するとアクティビティは実行を停止します。デフォルト値は 30000（ミリ秒）です。  

**入力**

* **Page Number (Int32)** - 取得するタスクのページ番号。
* **Size (Int32)** - 1ページあたりに取得するタスク数。
* **Where Condition (String)** - タスクを取得する際に使用するフィルター条件を指定します。

**その他**

* **Public (Checkbox)** - チェックすると、このアクティビティのデータがログに表示されます。使用前にデータセキュリティを考慮してください。
* **Display Name (String)** - このアクティビティの名前。コードを整理・構造化するために名前を編集できます。  
### **オプション**

* **Newest first** - true に設定すると作成日の降順でソートし、false にすると昇順でソートします。

### **出力**

* **Result Tasks: `OutArgument<IEnumerable<TaskModel>>`** - 取得したタスク