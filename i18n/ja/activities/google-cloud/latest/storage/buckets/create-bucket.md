---
id: create-bucket
title: "バケットの作成"
sidebar_label: "バケットの作成"
sidebar_position: 1
description: "Create Bucket アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---

# バケットの作成

RCA.Activities.GoogleCloud.GCPCreateBucket

## **説明**

Google Cloud Storage のバケットを作成します。

![create-bucket](/static/img/create-bucket.png)

(※ 必須項目)

## **アクティビティ本文内**

* **Name** - バケット名。
* **Project Id** - Google Cloud のプロジェクト ID。
* **Region** - バケットのリージョン。
* **Multi Region** - バケットのマルチリージョン指定。
* **Dual Region** - バケットのデュアルリージョン指定。

## **プロパティ**

* **Encryption Type (ドロップダウン)** - バケットの暗号化方式。以下から選択してください：
  * **GoogleManaged** - Google 管理の暗号化キーを使用します。
  * **CustomerManagedKey** - 顧客管理の暗号化キーを使用します。

* **Customer Managed Key: `InArgument<String>`** - 顧客管理暗号化キー。`Encryption Type` が `CustomerManagedKey` の場合に必須。

**入力**

* **Name: `InArgument<String>`*** - バケット名。

* **Project Id: `InArgument<String>`*** - Google Cloud のプロジェクト ID。

**オプション**

* **Access Control Type (ドロップダウン)** - バケットのアクセス制御方式を選択します：
  * **Uniform** - バケットレベルの一元管理を適用します。
  * **FineGrained** - 個別オブジェクト単位で ACL による細かい権限管理が可能です。

* **Labels: `InArgument<DataTable>`** - バケットに割り当てるラベル。

* **Storage Class: `InArgument<Storage>`** - バケットのストレージクラス。

**その他**

* **Public (チェックボックス)** - アクティビティを公開する場合にチェックしてください。公開前にデータセキュリティ要件を確認してください。

* **Display Name (String)** - アクティビティの表示名。コードの整理や管理のために編集可能です。
  例: [3424325] Open Window

**出力**

* **Bucket: `OutArgument<GCPBucket>`** - 作成されたバケットオブジェクト。

**リージョン関連**

* **Region: `InArgument<String>`** - バケットのリージョン。`Region`、`Multi Region`、`Dual Region` のいずれか1つを指定してください。

* **Multi Region: `InArgument<String>`** - マルチリージョンの指定。

* **Dual Region: `InArgument<String>`** - デュアルリージョンの指定。

