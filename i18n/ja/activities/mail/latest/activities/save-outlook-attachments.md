---
id: save-outlook-attachments
title: "Outlook の添付ファイルを保存する"
sidebar_label: "Outlook の添付ファイルを保存する"
sidebar_position: 4
description: "Outlook 添付ファイル アクティビティのドキュメントを保存します。"
displayed_sidebar: activitiesSidebar
---
# Outlook の添付ファイルを保存する

RCA.Activities.Mail.SaveOutlookAttachements

## **説明**

Outlook のメールの添付ファイルを保存します。

![image-20220505162439-1.png](/static/img/f6680f_image-20220505162439-1.png)

（\*必須）

## **プロパティ**

**入力**

* **アカウント (文字列)** - 使用する Outlook アカウント。
* **フォルダー パス (文字列)** - 添付ファイルの保存先フォルダー。フォルダーはあらかじめ存在している必要があります。空の場合はプロジェクト フォルダーが使用されます。
  例: "Data\Output\Attachments"

**メール**

* **メール メッセージ (MailMessage)** - 添付ファイルを保存するメール メッセージ。Outlook のメール メッセージのみ対応しています。

**その他**

* **公開 (チェックボックス)** - 選択すると、アクティビティのデータがログに記録されます。使用する前に、データ セキュリティ要件を考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。ワークフローを整理しやすくするために編集できます。  
  例: Save Outlook Attachments

## **関連項目: Exchange アクティビティ**

Exchange アクティビティはメール パッケージに含まれています（akaBot Studio では **Mail** > **Exchange**）。メールボックスが社内の Exchange Server にある場合は、こちらを使用してください。

* [Exchange アクティビティ](../../../exchange/latest/introduction.md) - すべての Exchange アクティビティの概要。
* [Exchange (EWS) の設定](../../../exchange/latest/user-guide/exchange-ews-configuration.md) - 接続情報の集め方と Exchange スコープの設定方法。
