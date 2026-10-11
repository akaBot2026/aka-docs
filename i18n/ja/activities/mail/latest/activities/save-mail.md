---
id: save-mail
title: "メールを保存する"
sidebar_label: "メールを保存する"
sidebar_position: 11
description: "メールを保存するアクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# メールを保存する

RCA.Activities.Mail.SaveMail

## **説明**

メールを `.eml` ファイルとして保存します。どの取得アクティビティ (Outlook、IMAP、POP3、Exchange) で取得したメールにも使用できます。**ファイル パス** のフォルダーはあらかじめ存在している必要があります。同じ名前のファイルは上書きされます。

![mail-save](/static/img/mail-save.png)

（\*必須）

## **プロパティ**

**入力**

* **メール メッセージ (MailMessage)**\* - 保存する MailMessage オブジェクト。
* **ファイル パス (文字列)**\* - ファイル名と `.eml` 拡張子を含むフル パス。相対パスはプロジェクト フォルダーからのパスです。
  例: "Data\Output\MyEmail.eml"

**その他**

* **公開 (チェックボックス)** - 選択すると、アクティビティのデータがログに記録されます。使用する前に、データ セキュリティ要件を考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。ワークフローを整理しやすくするために編集できます。  
  例: Save Mail

## **関連項目: Exchange アクティビティ**

Exchange アクティビティはメール パッケージに含まれています（akaBot Studio では **Mail** > **Exchange**）。このアクティビティは Exchange Server から取得したメールにも使用できます。

* [Get Exchange Mail Messages](../../../exchange/latest/activities/get-exchange-email-messages.md) - Exchange メールボックスからメールを取得します。
* [Exchange アクティビティ](../../../exchange/latest/introduction.md) - すべての Exchange アクティビティの概要。
* [Exchange (EWS) の設定](../../../exchange/latest/user-guide/exchange-ews-configuration.md) - 接続情報の集め方と Exchange スコープの設定方法。
