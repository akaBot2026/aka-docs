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

(※ 必須の場合)

## **アクティビティ本文内**

* **Name** - バケット名。
* **Project Id** - Google Cloud のプロジェクト ID。
* **Region** - バケットのリージョン。
* **Multi Region** - バケットのマルチリージョン。
* **Dual Region** - バケットのデュアルリージョン。

## **プロパティ**

* **Encryption Type (Dropdown List)** - バケットの暗号化タイプ。以下から選択してください：
  * **GoogleManaged** - Google が管理する暗号化キーを使用します。
  * **CustomerManagedKey** - 顧客管理の暗号化キーを使用します。

* **Customer Managed Key: `InArgument<String>`** - 顧客管理暗号化キー。`Encryption Type` が `CustomerManagedKey` の場合に必須です。

**入力**

* **Name: `InArgument<String>`*** - バケット名。

* **Project Id: `InArgument<String>`*** - Google Cloud のプロジェクト ID。

**オプション**

* **Access Control Type (Dropdown List)** - バケットのアクセス制御タイプ。以下から選択してください：
  * **Uniform** - バケットレベルの一貫したアクセス制御を適用します。
  * **FineGrained** - 個別オブジェクトごとに ACL を用いて権限を管理できます。

* **Labels: `InArgument<DataTable>`** - バケットに割り当てるラベル。

* **Storage Class: `InArgument<Storage>`** - バケットのストレージクラス。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理のために名前を編集できます。
  例: [3424325] Open Window

**出力**

* **Bucket: `OutArgument<GCPBucket>`** - 作成されたバケット。

**リージョン**

* **Region: `InArgument<String>`** - バケットのリージョン。`Region`、`Multi Region`、`Dual Region` のいずれかを正確に1つ指定してください。

* **Multi Region: `InArgument<String>`** - マルチリージョンの場所。

* **Dual Region: `InArgument<String>`** - デュアルリージョンの場所。

