---
id: get-bucket
title: "バケットの取得"
sidebar_label: "バケットの取得"
sidebar_position: 3
description: "Get Bucket アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# バケットの取得

RCA.Activities.GoogleCloud.GCPGetBucket

## **説明**

名前で Google Cloud Storage のバケットを取得します。

![get-bucket](/static/img/get-bucket.png)

(※ 必須の場合)

## **アクティビティ本文内**

* **Bucket Name** - 取得するバケットの名前。

## **プロパティ**

**入力**

* **Bucket Name: `InArgument<String>`*** - バケット名。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理のために名前を編集できます。
  例: [3424325] Open Window

**出力**

* **Bucket: `OutArgument<GCPBucket>`** - 取得したバケット。

