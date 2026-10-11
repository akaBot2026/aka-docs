---
id: send-outlook-mail
title: "Outlook メールを送信する"
sidebar_label: "Outlook メールを送信する"
sidebar_position: 1
description: "Outlook メール アクティビティのドキュメントを送信します。"
displayed_sidebar: activitiesSidebar
---
# Outlook メールを送信する

RCA.Activities.Mail.SendOutlookMail

## **説明**

Outlook からメール メッセージを送信します。

![image-20220505162242-1.png](/static/img/6f58bd_image-20220505162242-1.png)

（\*必須）

## **プロパティ**

**添付ファイル**

* **添付ファイル コレクション (IEnumerable< String >)** - 添付として送信するファイルの一覧。
* **添付ファイル** - メールと一緒に送信するファイルのパスの一覧。

**転送**

* **メール メッセージ (MailMessage)** - 転送するメッセージ。MailMessage オブジェクトのみ対応しています。

**入力**

* **アカウント (文字列)** - メールの送信に使用するアカウント。空の場合は既定のアカウントが使用されます。

**メール**

* **本文 (文字列)** - メールの本文。
* **件名 (文字列)** - メールの件名。

**その他**

* **公開 (チェックボックス)** - 選択すると、アクティビティのデータがログに記録されます。使用する前に、データ セキュリティ要件を考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。ワークフローを整理しやすくするために編集できます。  
  例: Send Outlook Mail

**オプション**

* **本文が HTML (チェックボックス)** - 本文が HTML 形式の場合に選択します。
* **下書き (チェックボックス)** - 選択すると、メールを送信せずに下書きとして保存します。

**受信者**

* **Bcc (文字列)** - BCC の受信者。
* **Cc (文字列)** - CC の受信者。
* **宛先 (文字列)**\* - 主な受信者。複数のアドレスは `;` で区切ります。

## **関連項目: Exchange アクティビティ**

Exchange アクティビティはメール パッケージに含まれています（akaBot Studio では **Mail** > **Exchange**）。メールボックスが社内の Exchange Server にある場合は、こちらを使用してください。

* [Send Exchange Mail](../../../exchange/latest/activities/send-exchange-mail.md) - Exchange Server 経由でメールを送信します。
* [Exchange アクティビティ](../../../exchange/latest/introduction.md) - すべての Exchange アクティビティの概要。
* [Exchange (EWS) の設定](../../../exchange/latest/user-guide/exchange-ews-configuration.md) - 接続情報の集め方と Exchange スコープの設定方法。
