---
id: get-object
title: "オブジェクトの取得"
sidebar_label: "オブジェクトの取得"
sidebar_position: 3
description: "Get Object アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# オブジェクトの取得

RCA.Activities.GoogleCloud.GCPGetObject

## **説明**

Google Cloud Storage のオブジェクトを取得します。

![get-object.png](/static/img/get-object.png)

(※ 必須の場合)

## **アクティビティ本文内**

* **Bucket** - オブジェクトを含むバケット。
* **Object Name** - 取得するオブジェクトの名前。

## **プロパティ**

**入力**

* **Bucket: `InArgument<GCPBucket>`*** - オブジェクトを含むバケット。

* **Object Name: `InArgument<String>`*** - オブジェクト名。

* **Generation: `InArgument<Int64>`** - 取得するオブジェクトの世代（generation）。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理のために名前を編集できます。
  例: [3424325] Open Window

**出力**

* **Object: `OutArgument<GCPObject>`** - 取得したオブジェクト。

