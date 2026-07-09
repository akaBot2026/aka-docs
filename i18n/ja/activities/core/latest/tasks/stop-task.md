---
id: stop-task
title: "Stop Task"
sidebar_label: "Stop Task"
sidebar_position: 2
description: "stop-task activity documentation."
displayed_sidebar: activitiesSidebar
---
# タスクを停止

RCA.Activities.Core.StopTask

## **説明**

このアクティビティでは、Center 上のタスクを停止または状態を更新できます。この操作を行うには、Center のタスクリソースを編集できるロボットの権限が必要です。Center 上のタスクを終了するには 'stop' を使用します。タスクがエラーや予期しない問題に遭遇した場合は 'Update State' を使用して、その状態を適切に更新できます。

このアクティビティは、戦略に応じて標準の **Stop** レイアウトと **Update State** レイアウトという2つの異なる構成レイアウトを備えています。

![stop-task](/static/img/stop-task.png)

![stop-task-update-state](/static/img/stop-task-update-state.png)

（* は必須）

## **アクティビティの本文**

* **Task** – 停止するタスクを入力します。タスク変数と VB 式をサポートします。
* **Strategy** – タスクを停止する際の戦略を選択します。
* **State** - 更新するタスクの状態を指定します。
* **Reason** - 状態を更新する理由を指定します。

## **プロパティ**

* **Continue On Error (Boolean)**：現在のアクティビティが失敗しても、残りのアクティビティの実行を続行するかを指定します。サポートされるのはブール値（True、False）のみです

* **Timeout MS (Int32)**：アクティビティの実行を待つ時間（ミリ秒）。デフォルト値は 30000 ミリ秒です。

**入力** 
* **Reason** - このタスクの状態を更新する理由を指定します。 
* **Task** - 停止されるタスクを指定します

**その他**

* **Public (Checkbox)** - チェックすると、このアクティビティのデータがログに表示されます。使用前にデータセキュリティを考慮してください。
* **Display Name (String)** - このアクティビティの名前。コードを整理・構造化するために名前を編集できます。  