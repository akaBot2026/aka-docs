---
id: move-outlook-message
title: "Outlook メッセージを移動する"
sidebar_label: "Outlook メッセージを移動する"
sidebar_position: 5
description: "Outlook メッセージ アクティビティのドキュメントを移動します。"
displayed_sidebar: activitiesSidebar
---
# Outlook メッセージを移動する

RCA.Activities.Mail.MoveOutlookMessage

## **説明**

このアクティビティを使用すると、Outlook メッセージを指定したフォルダーに移動できます。

![image-20220505162512-1.png](/static/img/2c85f9_image-20220505162512-1.png)

（\*必須）

## **プロパティ**

**入力**

* **アカウント (文字列)** - 移動するメッセージへのアクセスに使用されるアカウント。
**例**: 「ソースフォルダー名」
* **メール メッセージ (MailMessage)**\* – 移動する必要があるメッセージ。
* **メール フォルダー (文字列)**\* - メッセージの移動先のメール フォルダー。

**その他**

* **公開 (チェックボックス)** - 公開する場合にチェックを入れます。使用する前に、データ セキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
**例**: Outlook メッセージを移動する
