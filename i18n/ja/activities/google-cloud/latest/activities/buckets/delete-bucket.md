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

(※ 必須の場合)

## **アクティビティ本文内**

* **Bucket** - 削除対象のバケット。

## **プロパティ**

**入力**

* **Bucket: `InArgument<GCPBucket>`*** - 削除対象のバケット。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理のために名前を編集できます。
  例: [3424325] Open Window

**オプション**

* **Empty Content: Boolean** - バケットを削除する前に内容を空にするかどうかを指定します。

