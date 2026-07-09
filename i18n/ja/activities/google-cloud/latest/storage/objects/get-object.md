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

Google Cloud Storage からオブジェクトを取得します。

![get-object.png](/static/img/get-object.png)

(※ 必須項目)

## **アクティビティ本文内**

* **Bucket** - オブジェクトを含むバケット。
* **Object Name** - 取得するオブジェクト名。

## **プロパティ**

**入力**

* **Bucket: `InArgument<GCPBucket>`*** - オブジェクトを含むバケット。

* **Object Name: `InArgument<String>`*** - オブジェクト名。

* **Generation: `InArgument<Int64>`** - 取得対象の generation（世代）を指定できます。

**その他**

* **Public (チェックボックス)** - アクティビティを公開する場合にチェックしてください。公開前にデータセキュリティ要件を確認してください。

* **Display Name (String)** - このアクティビティの表示名。管理しやすい名前に変更できます。
  例: [3424325] Open Window

**出力**

* **Object: `OutArgument<GCPObject>`** - 取得したオブジェクト。

