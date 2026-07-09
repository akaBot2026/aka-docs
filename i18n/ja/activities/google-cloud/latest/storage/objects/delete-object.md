---
id: delete-object
title: "オブジェクトの削除"
sidebar_label: "オブジェクトの削除"
sidebar_position: 2
description: "Delete Object アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---

# オブジェクトの削除

RCA.Activities.GoogleCloud.GCPDeleteObject

## **説明**

Google Cloud Storage のオブジェクトを削除します。

![delete-object](/static/img/delete-object.png)

(※ 必須項目)

## **アクティビティ本文内**

* **Object** - 削除対象のオブジェクト。

## **プロパティ**

**入力**

* **Object: `InArgument<GCPObject>`*** - 削除対象オブジェクト。

* **Generation: `InArgument<Int64>`** - 削除対象の generation（世代）を指定できます。

**その他**

* **Public (チェックボックス)** - アクティビティを公開する場合にチェックしてください。公開前にデータセキュリティ要件を確認してください。

* **Display Name (String)** - このアクティビティの表示名。管理しやすい名前に変更できます。
  例: [3424325] Open Window

