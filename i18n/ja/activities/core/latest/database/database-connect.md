---
id: database-connect
title: "データベース接続"
sidebar_label: "データベース接続"
sidebar_position: 1
description: "データベース接続アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# データベース接続

RCA.Activities.Core.DatabaseConnect

## **説明**

このアクティビティを使用すると、標準の接続文字列を使用してデータベースに接続できます。

![https://files.readme.io/609ba23-DB.PNG](/static/img/56d212_609ba23-db.png)

（\*必須）

## **アクティビティ本体内**

**接続の構成** - 接続文字列、データ ソース、データ プロバイダーを設定します。

![image-20230419153435-1.png](/static/img/3e2525_image-20230419153435-1.png)

## **プロパティ**

**接続構成**

* **接続文字列 (文字列)**\* - データベース接続を確立するために使用される接続文字列。
例: 「Server=myServerAddress;Database=myDataBase;UserId=myUsername;Password=myPassword;」
* **プロバイダー名 (文字列)**\* - データベースへのアクセスに使用されるデータベース プロバイダーの名前。
例: 「System.Data.SqlClient」

**その他**

* **公開 (チェックボックス)** - 公開したい場合にチェックを入れます。使用する前に、データのセキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: データベース接続

**出力**

* **データベース接続** - アクティビティによって返されるデータベース接続変数。これは、後で他のデータベース操作に使用できます。
