---
id: copy-object
title: "オブジェクトのコピー"
sidebar_label: "オブジェクトのコピー"
sidebar_position: 2
description: "Copy Object アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# オブジェクトのコピー

RCA.Activities.GoogleCloud.GCPCopyObject

## **説明**

Google Cloud Storage のオブジェクトを別のバケットまたはオブジェクト名へコピーします。

![copy-object](/static/img/copy-object.png)

(※ 必須の場合)

## **アクティビティ本文内**

* **Source Object** - コピー元のオブジェクト。
* **Destination Bucket** - コピー先のバケット。
* **Destination Object Name** - コピー先のオブジェクト名。

## **プロパティ**

**入力**

* **Source Object: `InArgument<GCPObject>`*** - コピー元のオブジェクト。

* **Destination Bucket: `InArgument<GCPBucket>`*** - コピー先のバケット。

* **Destination Object Name: `InArgument<String>`*** - コピー先のオブジェクト名。

**オプション**

* **Source Object Generation: `InArgument<Int64>`** - コピー元のオブジェクトの世代（generation）。

* **Destination Predefined Acl: `InArgument<String>`** - コピー先オブジェクトに適用する事前定義されたACL。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理のために名前を編集できます。
  例: [3424325] Open Window

**出力**

* **Destination Object: `OutArgument<GCPObject>`** - コピーされた先のオブジェクト。

