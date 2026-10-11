---
id: get-outlook-mail-message
title: "Outlook メール メッセージを取得する"
sidebar_label: "Outlook メール メッセージを取得する"
sidebar_position: 3
description: "Outlook メール メッセージのアクティビティに関するドキュメントを入手します。"
displayed_sidebar: activitiesSidebar
---
# Outlook メール メッセージを取得する

RCA.Activities.Mail.GetOutlookMailMessages

## **説明**

Outlook からメール メッセージを取得します。

![image-20220505162407-1.png](/static/img/32e0c2_image-20220505162407-1.png)

（\*必須）

## **プロパティ**

**入力**

* **アカウント (文字列)** - 読み取る Outlook アカウント。空の場合は既定のアカウントが使用されます。
  例: "bot.user@company.com"
* **メール フォルダー (文字列)** - 読み取るフォルダー (Outlook に表示されている名前)。サブフォルダーは `\` で区切ります。既定値: "Inbox"。日本語版 Outlook では "受信トレイ" のように、表示されているフォルダー名を入力します。
  例: "Inbox\Invoices"

**その他**

* **公開 (チェックボックス)** - 選択すると、アクティビティのデータがログに記録されます。使用する前に、データ セキュリティ要件を考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。ワークフローを整理しやすくするために編集できます。  
  例: Get Outlook Mail

**オプション**

* **フィルター (文字列)** - 取得するメッセージを絞り込む文字列。JET クエリまたは DASL クエリを指定できます。
  例: "[HomeAddressCountry] = 'Canada'"
* **既読としてマーク (チェックボックス)** - 取得したメッセージを既読にするかどうか。既定では選択されていません。
* **未読メッセージのみ (チェックボックス)** - 未読メッセージのみを取得するかどうか。既定で選択されています。
* **日付順に並べ替え (OrderByDate)** - 新しいメッセージ (NewestFirst、既定) と古いメッセージ (OldestFirst) のどちらから読むかを指定します。
* **Top (Int32)** - 取得するメッセージの数 (**日付順に並べ替え** に従って新しい順または古い順)。既定値: 30。

**出力**

* **メッセージ (`List<MailMessage>`)** - 取得したメッセージ。

## **関連項目: Exchange アクティビティ**

Exchange アクティビティはメール パッケージに含まれています（akaBot Studio では **Mail** > **Exchange**）。メールボックスが社内の Exchange Server にある場合は、こちらを使用してください。

* [Get Exchange Mail Messages](../../../exchange/latest/activities/get-exchange-email-messages.md) - Exchange メールボックスからメールを取得します。
* [Exchange アクティビティ](../../../exchange/latest/introduction.md) - すべての Exchange アクティビティの概要。
* [Exchange (EWS) の設定](../../../exchange/latest/user-guide/exchange-ews-configuration.md) - 接続情報の集め方と Exchange スコープの設定方法。
