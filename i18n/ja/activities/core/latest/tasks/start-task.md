---
id: start-task
title: "Start Task"
sidebar_label: "Start Task"
sidebar_position: 3
description: "start-task activity documentation."
displayed_sidebar: activitiesSidebar
---
# タスクを開始

RCA.Activities.Core.StartTask

## **説明**

このアクティビティでは、Center 経由で新しいタスクを開始し、利用可能なロボットが取得できるようにします。タスクの終了を待たずに直ちに実行を継続します。出力引数は返しません。

![start-task](/static/img/start-task.png)

（* は必須）

## **アクティビティの本文**

## **アクティビティの本文**

* **Workflow** – タスクとして実行するワークフローを選択します。
* **Robot** – タスクを実行するロボットを選択します。
* **Parameters** – 選択したワークフローに渡す入力パラメータを構成するにはここをクリックします。

## **プロパティ**

* **Continue On Error (Boolean)**: 現在のアクティビティが失敗しても、残りのアクティビティの実行を続行するかを指定します。サポートされるのはブール値（True,False）のみです。   
 
* **Timeout MS (Int32)**: エラーをスローする前にアクティビティが完了するのを待つ最大時間（ミリ秒）。タイムアウトに達するとアクティビティは実行を停止します。デフォルト値は 30000（ミリ秒）です。  

**その他**

* **Public (Checkbox)** - チェックすると、このアクティビティのデータがログに表示されます。使用前にデータセキュリティを考慮してください。
* **Display Name (String)** - このアクティビティの名前。コードを整理・構造化するために名前を編集できます。  

### **出力**

* **Task Id `OutArgument<Int32>`:** 開始されたタスクの ID を出力します。

* **Workflow Id: `OutArgument<Int32>`:** 開始されたワークフローの一意の識別子。