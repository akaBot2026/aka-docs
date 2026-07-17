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

バケット名を指定して Google Cloud Storage のバケット情報を取得します。

![get-bucket](/static/img/get-bucket.png)

(※ 必須項目)

## **アクティビティ本文内**

* **Bucket Name** - 取得したいバケットの名前。

## **プロパティ**

**入力**

* **Bucket Name: `InArgument<String>`*** - バケット名。

**その他**

* **Public (チェックボックス)** - アクティビティを公開する場合にチェックしてください。公開前にデータセキュリティ要件を確認してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理のために編集できます。
  例: [3424325] Open Window

**出力**

* **Bucket: `OutArgument<GCPBucket>`** - 取得したバケットオブジェクト。

