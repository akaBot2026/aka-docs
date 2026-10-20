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

Outlook のメッセージを指定したフォルダーに移動します。

![image-20220505162512-1.png](/static/img/2c85f9_image-20220505162512-1.png)

（\*必須）

## **プロパティ**

**入力**

* **アカウント (文字列)** - フォルダーがある Outlook アカウント。空の場合は既定のアカウントが使用されます。
  例: "bot.user@company.com"
* **メール メッセージ (MailMessage)**\* - 移動するメッセージ。
* **メール フォルダー (文字列)**\* - 移動先フォルダー (Outlook に表示されている名前)。フォルダーはあらかじめ存在している必要があります。
  例: "Inbox\Completed"

**その他**

* **公開 (チェックボックス)** - 選択すると、アクティビティのデータがログに記録されます。使用する前に、データ セキュリティ要件を考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。ワークフローを整理しやすくするために編集できます。  
  例: Move Outlook Message

## **関連項目: Exchange アクティビティ**

Exchange アクティビティはメール パッケージに含まれています（akaBot Studio では **Mail** > **Exchange**）。メールボックスが社内の Exchange Server にある場合は、こちらを使用してください。

* [Move Message To Another Folder](../../../exchange/latest/activities/move-message-to-another-folder.md) - Exchange メールボックス内のメールを移動します。
* [Exchange アクティビティ](../../../exchange/latest/introduction.md) - すべての Exchange アクティビティの概要。
* [Exchange (EWS) の設定](../../../exchange/latest/user-guide/exchange-ews-configuration.md) - 接続情報の集め方と Exchange スコープの設定方法。
