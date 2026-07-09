---
id: update-bucket-properties
title: "バケットプロパティの更新"
sidebar_label: "バケットプロパティの更新"
sidebar_position: 4
description: "Update Bucket Properties アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---

# バケットプロパティの更新

RCA.Activities.GoogleCloud.GCPUpdateBucketProperties

## **説明**

Google Cloud Storage バケットのプロパティ（ラベル、ストレージクラス、暗号化設定など）を更新します。

![update-bucket-properties](/static/img/update-bucket-properties.png)

(※ 必須項目)

## **アクティビティ本文内**

* **Bucket** - 更新対象のバケットオブジェクト。
* **Labels** - 更新するラベル。
* **Storage Class** - 設定するストレージクラス。
* **Encryption Type** - 設定する暗号化方式。

## **プロパティ**

**暗号化**

* **Customer Managed Key: `InArgument<String>`** - `Encryption Type` が `CustomerManagedKey` の場合に使用する顧客管理キー。

**入力**

* **Bucket: `InArgument<GCPBucket>`*** - 更新対象のバケット。

* **Enable Versioning: `InArgument<Boolean>`** - バージョニングを有効にするかどうかを指定します。

* **Labels: `InArgument<DataTable>`** - 設定するラベル。

* **Storage Class: `InArgument<String>`** - 設定するストレージクラス。

* **Encryption Type: `InArgument<String>`** - 設定する暗号化方式。

**その他**

* **Public (チェックボックス)** - アクティビティを公開する場合にチェックしてください。公開前にデータセキュリティ要件を確認してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理のために編集できます。
  例: [3424325] Open Window

