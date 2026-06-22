---
id: delete-bucket
title: "バケットの削除"
sidebar_label: "バケットの削除"
sidebar_position: 2
description: "Delete Bucket アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---

# バケットの削除

RCA.Activities.GoogleCloud.GCPDeleteBucket

## **説明**

Google Cloud Storage のバケットを削除します。

![delete-bucket](/static/img/delete-bucket.png)

(※ 必須項目)

## **アクティビティ本文内**

* **Bucket** - 削除対象のバケット。

## **プロパティ**

**入力**

* **Bucket: `InArgument<GCPBucket>`*** - 削除対象のバケットオブジェクト。

**その他**

* **Public (チェックボックス)** - アクティビティを公開する場合にチェックしてください。公開前にデータセキュリティ要件を確認してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理のために編集できます。
  例: [3424325] Open Window

**オプション**

* **Empty Content: Boolean** - バケット削除前に内容を空にするかどうかを指定します。

