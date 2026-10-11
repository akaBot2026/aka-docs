---
id: get-imap-mail-messages
title: "IMAPメールメッセージを取得する"
sidebar_label: "IMAPメールメッセージを取得する"
sidebar_position: 6
description: "IMAP メール メッセージのアクティビティに関するドキュメントを入手します。"
displayed_sidebar: activitiesSidebar
---
# IMAPメールメッセージを取得する

RCA.Activities.Mail.GetIMAPMailMessages

## **説明**

指定したサーバーから IMAP でメール メッセージを取得します。

![image-20220505162545-1.png](/static/img/b9eea9_image-20220505162545-1.png)

（\*必須）

## **プロパティ**

**ホスト**

* **メール フォルダー (文字列)** - 読み取るメール フォルダー。既定値: "Inbox"。
* **ポート (Int32)** - IMAP サーバーのポート。
  例: 993
* **サーバー (文字列)**\* - 使用するメール サーバーのホスト名。
  例: "imap.gmail.com"

![e8b4de9-imap.png](/static/img/f640f5_3195a31-imap.png)

**ログオン**

* **メール (文字列)**\* - メッセージの取得に使用するメール アカウント。
* **パスワード (文字列)**\* - メール アカウントのパスワード (またはアプリ パスワード)。**パスワード** と **SecurePassword** のどちらか一方を使用します。
* **SecurePassword (SecureString)** - **パスワード** の代わりに、パスワードを SecureString として指定します。
* **Use OAuth (ブール値)** - メール サーバーが最新の認証方式 (OAuth 2.0) を必要とする場合に選択します。この場合、**パスワード** にはアカウントのパスワードではなく OAuth アクセス トークンを入力します。

**その他**

* **公開 (チェックボックス)** - 選択すると、アクティビティのデータがログに記録されます。使用する前に、データ セキュリティ要件を考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。ワークフローを整理しやすくするために編集できます。  
  例: Get IMAP Mail Messages

**オプション**

* **メッセージを削除 (チェックボックス)** - 選択すると、取得したメッセージはアクティビティの終了時にサーバーから**完全に削除**されます。
* **日付順に並べ替え (OrderByDate)** - 新しいメッセージ (NewestFirst、既定) と古いメッセージ (OldestFirst) のどちらから読むかを指定します。
* **安全な接続 (ドロップダウンリスト)** - SSL/TLS 暗号化を使用するタイミングを指定します。選択肢: None、Auto、SslOnConnect、StartTls、StartTlsWhenAvailable
* **既読としてマーク (チェックボックス)** - 選択すると、取得したメッセージを既読にします。
* **未読メッセージのみ (チェックボックス)** - 選択すると、未読メッセージのみを取得します。既定で選択されています。
* **Top (Int32)** - 取得するメッセージの数。既定値: 30。

**出力**

* **メッセージ (`List<MailMessage>`)** - 取得したメッセージ。

## **関連項目: Exchange アクティビティ**

Exchange アクティビティはメール パッケージに含まれています（akaBot Studio では **Mail** > **Exchange**）。メールボックスが社内の Exchange Server にある場合は、こちらを使用してください。

* [Get Exchange Mail Messages](../../../exchange/latest/activities/get-exchange-email-messages.md) - Exchange メールボックスからメールを取得します。
* [Exchange アクティビティ](../../../exchange/latest/introduction.md) - すべての Exchange アクティビティの概要。
* [Exchange (EWS) の設定](../../../exchange/latest/user-guide/exchange-ews-configuration.md) - 接続情報の集め方と Exchange スコープの設定方法。
