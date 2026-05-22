---
id: move-imap-message-to-another-folder
title: "IMAP メッセージを別のフォルダーに移動する"
sidebar_label: "IMAP メッセージを別のフォルダーに移動する"
sidebar_position: 7
description: "IMAP メッセージを別のフォルダーに移動するアクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# IMAP メッセージを別のフォルダーに移動する

RCA.Activities.Mail.MoveIMAPMessageToFolder

## **説明**

このアクティビティを使用すると、IMAP メッセージを別のフォルダーに移動できます。

![image-20220505162857-1.png](/static/img/24564c_image-20220505162857-1.png)

（\*必須）

## **プロパティ**

**入力**

* **From Folder (String)** - メッセージが含まれるフォルダー。
例: 「受信箱」
* **メール メッセージ (MailMessage)**\* - 移動するメール メッセージ

**目的地**

* **メール フォルダー (文字列)**\* - 移動するメッセージのメール フォルダー。
例: 「顧客フォルダー」

**ホスト**

* **ポート (Int32)** - 電子メールの送信に使用されるポート。
例: 993
* **Server (String)**\* - 使用される電子メール サーバーのホスト。
例: 「mail.mydomain.com」

![993-imap.png](/static/img/5cf416_993-imap.png)

* **SSL を有効にする (チェックボックス)** - これを選択すると、SSL 暗号化が使用されます。

**ログオン**

* **電子メール (文字列)**\* - メッセージの送信に使用される電子メール アカウント。
例: [[email protected]](/cdn-cgi/l/email-protection)
* **パスワード (文字列)**\* - メッセージの送信に使用されるメール アカウントのパスワード

**その他**

* **公開 (チェックボックス)** - 公開する場合にチェックを入れます。使用する前に、データ セキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: IMAP メッセージの移動

**オプション**

* **安全な接続 (ドロップダウン リスト)** - SSL/TLS 暗号化をいつ使用するかを指定します。含まれる内容: None、Auto、SslOnConnect、StartTls、StartTlsWhenAvailable
