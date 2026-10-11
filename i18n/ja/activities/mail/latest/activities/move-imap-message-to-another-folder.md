---
id: move-imap-message-to-another-folder
title: "IMAP メッセージを別のフォルダーに移動する"
sidebar_label: "IMAP メッセージを別のフォルダーに移動する"
sidebar_position: 7
description: "IMAP メッセージを別のフォルダーに移動するアクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# IMAP メッセージを別のフォルダーに移動する

RCA.Activities.Mail.MoveIMAPMailMessageToFolder

## **説明**

IMAP メッセージを別のフォルダーに移動します。

![image-20220505162857-1.png](/static/img/24564c_image-20220505162857-1.png)

（\*必須）

## **プロパティ**

**入力**

* **移動元フォルダー (文字列)** - メッセージが入っているフォルダー。空の場合は、メッセージを取得したフォルダーが使用されます。
  例: "Inbox"
* **メール メッセージ (MailMessage)**\* - 移動するメール メッセージ。

**宛先**

* **メール フォルダー (文字列)**\* - メッセージの移動先フォルダー。フォルダーはあらかじめ存在している必要があります。
  例: "Customer Folder"

**ホスト**

* **ポート (Int32)** - IMAP サーバーのポート。
  例: 993
* **サーバー (文字列)**\* - 使用するメール サーバーのホスト名。
  例: "mail.mydomain.com"

![993-imap.png](/static/img/5cf416_993-imap.png)

* **EnableSSL (チェックボックス)** - 使用されません。暗号化は **安全な接続** で指定します。

**ログオン**

* **メール (文字列)**\* - メッセージが入っているメール アカウント。
  例: "bot.account@gmail.com"
* **パスワード (文字列)**\* - メール アカウントのパスワード (またはアプリ パスワード)。**パスワード** と **SecurePassword** のどちらか一方を使用します。
* **SecurePassword (SecureString)** - **パスワード** の代わりに、パスワードを SecureString として指定します。
* **Use OAuth (ブール値)** - メール サーバーが最新の認証方式 (OAuth 2.0) を必要とする場合に選択します。この場合、**パスワード** にはアカウントのパスワードではなく OAuth アクセス トークンを入力します。

**その他**

* **公開 (チェックボックス)** - 選択すると、アクティビティのデータがログに記録されます。使用する前に、データ セキュリティ要件を考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。ワークフローを整理しやすくするために編集できます。  
  例: Move IMAP Message

**オプション**

* **安全な接続 (ドロップダウンリスト)** - SSL/TLS 暗号化を使用するタイミングを指定します。選択肢: None、Auto、SslOnConnect、StartTls、StartTlsWhenAvailable

## **関連項目: Exchange アクティビティ**

Exchange アクティビティはメール パッケージに含まれています（akaBot Studio では **Mail** > **Exchange**）。メールボックスが社内の Exchange Server にある場合は、こちらを使用してください。

* [Move Message To Another Folder](../../../exchange/latest/activities/move-message-to-another-folder.md) - Exchange メールボックス内のメールを移動します。
* [Exchange アクティビティ](../../../exchange/latest/introduction.md) - すべての Exchange アクティビティの概要。
* [Exchange (EWS) の設定](../../../exchange/latest/user-guide/exchange-ews-configuration.md) - 接続情報の集め方と Exchange スコープの設定方法。
