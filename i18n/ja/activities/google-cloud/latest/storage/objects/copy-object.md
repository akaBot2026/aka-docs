---
id: copy-object
title: "オブジェクトのコピー"
sidebar_label: "オブジェクトのコピー"
sidebar_position: 1
description: "Copy Object アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---

# オブジェクトのコピー

RCA.Activities.GoogleCloud.GCPCopyObject

## **説明**

Google Cloud Storage のオブジェクトを別のバケットや別名のオブジェクトとしてコピーします。

![copy-object](/static/img/copy-object.png)

(※ 必須項目)

## **アクティビティ本文内**

* **Source Object** - コピー元のオブジェクト。
* **Destination Bucket** - コピー先のバケット。
* **Destination Object Name** - コピー先のオブジェクト名。

## **プロパティ**

**入力**

* **Source Object: `InArgument<GCPObject>`*** - コピー元オブジェクト。

* **Destination Bucket: `InArgument<GCPBucket>`*** - コピー先バケット。

* **Destination Object Name: `InArgument<String>`*** - コピー先のオブジェクト名。

**オプション**

* **Source Object Generation: `InArgument<Int64>`** - コピー元オブジェクトの generation（世代）を指定できます。

* **Destination Predefined Acl: `InArgument<String>`** - コピー先に適用する事前定義の ACL。

**その他**

* **Public (チェックボックス)** - アクティビティを公開する場合にチェックしてください。公開前にデータセキュリティ要件を確認してください。

* **Display Name (String)** - このアクティビティの表示名。管理しやすい名前に変更できます。
  例: [3424325] Open Window

**出力**

* **Destination Object: `OutArgument<GCPObject>`** - コピー先のオブジェクト。

