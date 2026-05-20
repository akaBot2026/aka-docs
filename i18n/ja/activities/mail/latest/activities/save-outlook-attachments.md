---
id: save-outlook-attachments
title: "Outlook の添付ファイルを保存する"
sidebar_label: "Outlook の添付ファイルを保存する"
sidebar_position: 4
description: "Outlook 添付ファイル アクティビティのドキュメントを保存します。"
displayed_sidebar: activitiesSidebar
---
# Outlook の添付ファイルを保存する

RCA.Activities.Mail.SaveOutlookAttachments

## **説明**

このアクティビティを使用すると、電子メールの添付ファイルを Outlook に保存できます。

![image-20220505162439-1.png](/static/img/f6680f_image-20220505162439-1.png)

（\*必須）

## **プロパティ**

**入力**

* **アカウント (文字列)** - やり取りを行う Outlook アカウント。
**例**: 「AccountWantToSaveAttachments」
* **フォルダー パス (文字列)** - 添付ファイルを保存するフォルダー パス。
**例**: "Data\Output\Content Writer Application" +item.From.DisplayName.ToString"

**メール**

* **メール メッセージ (MailMessage)** - 保存するメール メッセージ。このアクティビティは Outlook メール メッセージのみをサポートします

**その他**

* **公開 (チェックボックス)** - 公開する場合にチェックを入れます。使用する前に、データ セキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
**例**: Outlook の添付ファイルを保存する
