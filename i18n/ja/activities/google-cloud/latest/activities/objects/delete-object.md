---
id: delete-object
title: "オブジェクトの削除"
sidebar_label: "オブジェクトの削除"
sidebar_position: 4
description: "Delete Object アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# オブジェクトの削除

RCA.Activities.GoogleCloud.GCPDeleteObject

## **説明**

Google Cloud Storage のオブジェクトを削除します。

![delete-object](/static/img/delete-object.png)

(※ 必須の場合)

## **アクティビティ本文内**

* **Object** - 削除対象のオブジェクト。

## **プロパティ**

**入力**

* **Object: `InArgument<GCPObject>`*** - 削除対象のオブジェクト。

* **Generation: `InArgument<Int64>`** - 削除するオブジェクトの世代（generation）。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理のために名前を編集できます。
  例: [3424325] Open Window

