---
id: send-smtp-mail-message
title: "SMTPメールメッセージを送信する"
sidebar_label: "SMTPメールメッセージを送信する"
sidebar_position: 10
description: "SMTP メール メッセージの送信アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# SMTPメールメッセージを送信する

RCA.Activities.Mail.SendMail

## **説明**

SMTP プロトコルを使用してメール メッセージを送信します。

![image-20220505163134-1.png](/static/img/23be67_image-20220505163134-1.png)

（\*必須）

## **プロパティ**

**添付ファイル**

* **添付ファイル コレクション (IEnumerable< String >)** - 添付として送信するファイルの一覧。
* **添付ファイル** - メールと一緒に送信するファイルのパスの一覧。

**転送**

* **メール メッセージ (MailMessage)** - 転送するメッセージ。MailMessage オブジェクトのみ対応しています。

**ホスト**

* **ポート (Int32)** - SMTP サーバーのポート。
  例: 587
* **サーバー (文字列)**\* - 使用するメール サーバーのホスト名。
  例: "smtp.gmail.com"

![587-smtp.png](/static/img/ee78d3_587-smtp.png)

**ログオン**

* **メール (文字列)** - ログインとメール送信に使用するメール アカウント。ログインが不要なメール リレーを使う場合は空にします。
* **パスワード (文字列)** - メール アカウントのパスワード (またはアプリ パスワード)。
* **SecurePassword (SecureString)** - **パスワード** の代わりに、パスワードを SecureString として指定します。
* **Use OAuth (ブール値)** - メール サーバーが最新の認証方式 (OAuth 2.0) を必要とする場合に選択します。この場合、**パスワード** にはアカウントのパスワードではなく OAuth アクセス トークンを入力します。

**メール**

* **本文 (文字列)** - メールの本文。
* **件名 (文字列)** - メールの件名。

**その他**

* **公開 (チェックボックス)** - 選択すると、アクティビティのデータがログに記録されます。使用する前に、データ セキュリティ要件を考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。ワークフローを整理しやすくするために編集できます。  
  例: SMTP Send Mail

**オプション**

* **本文が HTML (チェックボックス)** - 本文が HTML 形式の場合に選択します。
* **安全な接続 (ドロップダウンリスト)** - SSL/TLS 暗号化を使用するタイミングを指定します。選択肢: None、Auto、SslOnConnect、StartTls、StartTlsWhenAvailable

**受信者**

* **Bcc (文字列)** - BCC の受信者。
* **Cc (文字列)** - CC の受信者。
* **宛先 (文字列)**\* - 受信者。複数のアドレスは `;` で区切ります。

**送信者**

* **差出人 (文字列)** - 送信者のアドレス。空の場合は **メール** が使用されます。
* **名前 (文字列)** - 送信者の表示名。

## **関連項目: Exchange アクティビティ**

Exchange アクティビティはメール パッケージに含まれています（akaBot Studio では **Mail** > **Exchange**）。メールボックスが社内の Exchange Server にある場合は、こちらを使用してください。

* [Send Exchange Mail](../../../exchange/latest/activities/send-exchange-mail.md) - Exchange Server 経由でメールを送信します。
* [Exchange アクティビティ](../../../exchange/latest/introduction.md) - すべての Exchange アクティビティの概要。
* [Exchange (EWS) の設定](../../../exchange/latest/user-guide/exchange-ews-configuration.md) - 接続情報の集め方と Exchange スコープの設定方法。
