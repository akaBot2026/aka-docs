---
id: database-disconnect
title: "データベースの切断"
sidebar_label: "データベースの切断"
sidebar_position: 2
description: "データベース切断アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# データベースの切断

RCA.Activities.Core.DatabaseDisconnect

## **説明**

このアクティビティを使用すると、データベースへの接続を閉じることができます。

![image-20220506105152-1.png](/static/img/3518fd_image-20220506105152-1.png)

（\*必須）

## **プロパティ**

**接続**

* **データベース接続 (DatabaseConnection)**\* - 閉じるデータベース接続
例: 「Server=myServerAddress;Database=myDataBase;UserId=myUsername;Password=myPassword;」

**その他**

* **公開 (チェックボックス)** - 公開したい場合にチェックを入れます。使用する前に、データのセキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: データテーブルの切断
