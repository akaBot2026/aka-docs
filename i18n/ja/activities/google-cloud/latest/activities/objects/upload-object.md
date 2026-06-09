---
id: upload-object
title: "オブジェクトのアップロード"
sidebar_label: "オブジェクトのアップロード"
sidebar_position: 1
description: "Upload Object アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# オブジェクトのアップロード

RCA.Activities.GoogleCloud.GCPUploadObject

## **説明**

ローカルファイルを Google Cloud Storage のオブジェクトとしてアップロードします。

![upload-object](/static/img/upload-object.png)

(※ 必須の場合)

## **アクティビティ本文内**

* **Bucket** - 送信先のバケット。
* **Object Name** - 作成するオブジェクト名。
* **File To Upload** - アップロードするローカルファイルのパス。

## **プロパティ**

**入力**

* **Bucket: `InArgument<GCPBucket>`*** - 送信先のバケット。

* **Object Name: `InArgument<String>`*** - 作成するオブジェクト名。

* **File To Upload: `InArgument<String>`*** - アップロードするローカルファイルのパス。

* **Content Type: `InArgument<String>`** - オブジェクトのコンテンツタイプ。

* **Timeout: `InArgument<Nullable<Int32>>`** - アップロードのタイムアウト（秒）。

**オプション**

* **Storage Class: `InArgument<Storage>`** - オブジェクトのストレージクラス。

* **Metadata: `InArgument<DataTable>`** - オブジェクトのメタデータ。

* **Predefined Acl: `InArgument<String>`** - オブジェクトに適用する事前定義 ACL。

* **Customer Managed Key: `InArgument<String>`** - 顧客管理の暗号化キー。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理のために名前を編集できます。
  例: [3424325] Open Window

**出力**

* **Object: `OutArgument<GCPObject>`** - アップロードされたオブジェクト。

