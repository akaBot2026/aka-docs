---
id: send-exchange-mail
title: "Exchangeメールを送信する"
sidebar_label: "Exchangeメールを送信する"
sidebar_position: 4
description: "Exchange Mail アクティビティのドキュメントを送信します。"
displayed_sidebar: activitiesSidebar
---
# Exchangeメールを送信する

RCA.Activities.Mail.SendExchangeMail

## **説明**

このアクティビティを使用すると、Exchange から電子メール メッセージを送信できます。

![image-20220505161016-1.png](/static/img/30f03f_image-20220505161016-1.png)

（\*必須）

## **プロパティ**

**添付ファイル**

* **Attachments Collection (`IEnumerable<String>`)** - 添付ファイルとして送信するファイルのリストを指定する IEnumerable オブジェクト。
* **添付ファイル** - 電子メールと一緒に送信する添付ファイルを表す文字列引数のリスト。

**接続**

* **電子メールの自動検出 (文字列)**\* - Exchange サーバーの電子メール アドレスを使用して、Exchange サーバーを自動的に検索します。これは、Exchange サーバーで自動検出が有効になっている場合にのみ機能します。
例: 「http(s)://autodiscover.domain/EWS/Exchange.asmx」
* **Exchange バージョン (ドロップダウンリスト)** – 使用する Exchange サーバーの最低バージョンを指定します。このフィールドに表示されるオプションの範囲は、2007 から 2013 バージョンまでです。バージョン番号は、サポートするサービスの最低レベルを示すことに注意してください。これは、2016 Exchange サーバーを使用している場合は、Exchange2013 オプションを選択できることを意味します。
* **Server (String)**\* - 使用される電子メール サーバーのホストと形式は次の例のようになります。
例: 「[https://outlook.office365.com/EWS/Exchange.asmx”](https://outlook.office365.com/EWS/Exchange.asmx%E2%80%9D)」

EWSEWS の詳細については、これらのリンクを参照してください。

  1. https://docs.microsoft.com/en-us/exchange/client-developer/exchange-web-services/how-to-set-the-ews-service-url-by-using-the-ews-managed-api
  2. https://docs.microsoft.com/en-us/previous-versions/office/developer/exchange-server-2010/dd877045(v=exchg.140)

**進む**

* **メール メッセージ (MailMessage)** - 転送されるメッセージ。このフィールドは MailMessage オブジェクトのみをサポートします。

**ログオン**

* **ドメイン (文字列)\*** - 接続先の Active Directory ドメイン。
例: Mydomain.com
* **パスワード (文字列)**\* - 使用する Exchange アカウントのパスワード。
* **ユーザー (文字列)**\* - 使用される Exchange アカウントのユーザー。

**メール**

* **本文 (文字列)** - 電子メール メッセージの本文。
* **件名(文字列)** - 電子メール メッセージの件名。

**その他**

* **公開 (チェックボックス)** - 公開する場合にチェックを入れます。使用する前に、データ セキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: Exchange メールの送信

**オプション**

* **Is Body Html (チェックボックス)** - メッセージの本文を HTML 形式で記述するかどうかを指定します。
* **下書き (チェックボックス)** - メッセージを下書きとして保存するかどうかを指定します。
* **コピーを保存 (チェックボックス)** - 電子メールのコピーを送信済みフォルダーに保存するかどうかを指定します。デフォルトでは、このチェックボックスはオフになっています。

**受信機**

* **Bcc (文字列)** - 電子メール メッセージの非表示の受信者。
* **Cc (文字列)** - 電子メール メッセージの 2 番目の受信者。
* **宛先 (文字列)**\* - 電子メール メッセージの主な受信者。
