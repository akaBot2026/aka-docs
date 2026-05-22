---
id: delay
title: "遅延"
sidebar_label: "遅延"
sidebar_position: 2
description: "遅延アクティビティの文書化。"
displayed_sidebar: activitiesSidebar
---
# 遅延

System.Activities.Statements.Delay

## **説明**

ワークフローを続行する前に、特定の時間待機できるようにします。

![image-20220506113006-1.png](/static/img/c869ac_image-20220506113006-1.png)

（\*必須）

## **プロパティ**

**その他**

* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: 遅延
* **Duration (TimeSpan)\*** - 実行を続行するまで待機する時間。形式は hh:mm:ss です。
例: 00:00:10
* **パブリック (チェックボックス)** - チェックすると、このアクティビティのデータがログに表示されます。使用する前にデータのセキュリティを考慮してください。
