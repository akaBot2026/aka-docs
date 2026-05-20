---
id: get-exchange-email-messages
title: "Exchange の電子メール メッセージを取得する"
sidebar_label: "Exchange の電子メール メッセージを取得する"
sidebar_position: 2
description: "Exchange 電子メール メッセージのアクティビティに関するドキュメントを入手します。"
displayed_sidebar: activitiesSidebar
---
# Exchange の電子メール メッセージを取得する

RCA.Activities.Mail.GetExchangeEmailMessage

## **説明**

Exchange から電子メール メッセージを取得します。

![image-20220505160859-1.png](/static/img/34f167_image-20220505160859-1.png)

（\*必須）

## **プロパティ**

**接続**

* **電子メールの自動検出 (文字列)**\* - Exchange サーバーの電子メール アドレスを使用して、Exchange サーバーを自動的に検索します。これは、Exchange サーバーで自動検出が有効になっている場合にのみ機能します。
例: 「http(s)://autodiscover.domain/EWS/Exchange.asmx」
* **Exchange バージョン (ドロップダウンリスト)** – 使用する Exchange サーバーの最低バージョンを指定します。このフィールドに表示されるオプションの範囲は、2007 から 2013 バージョンまでです。バージョン番号は、サポートするサービスの最低レベルを示すことに注意してください。これは、2016 Exchange サーバーを使用している場合は、Exchange2013 オプションを選択できることを意味します。
* **Server (String)**\* - 使用される電子メール サーバーのホストと形式は次の例のようになります。
例: 「[https://outlook.office365.com/EWS/Exchange.asmx”](https://outlook.office365.com/EWS/Exchange.asmx%E2%80%9D)」

EWS

EWS の詳細については、これらのリンクを参照してください。

1. https://docs.microsoft.com/en-us/exchange/client-developer/exchange-web-services/how-to-set-the-ews-service-url-by-using-the-ews-managed-api
2. https://docs.microsoft.com/en-us/previous-versions/office/developer/exchange-server-2010/dd877045(v=exchg.140)

**ホスト**

* **メール フォルダー (文字列)** - メッセージの取得元のメール フォルダー。
例: 「受信箱」

**ログオン**

* **ドメイン (文字列)**\* - 接続先の Active Directory ドメイン。
例: Mydomain.com
* **パスワード (文字列)**\* - 使用する Exchange アカウントのパスワード。
* **ユーザー (文字列)**\* - 使用される Exchange アカウントのユーザー。

**その他**

* **公開 (チェックボックス)** - 公開する場合にチェックを入れます。使用する前に、データ セキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: メール交換の取得

**オプション**

* **添付ファイルの取得 (チェックボックス)** - 電子メール メッセージ内の添付ファイルを取得するかどうかを指定します。デフォルトでは、このチェックボックスはオフになっています。
* **Is Body Html(Checkbox)** - メッセージの本文を HTML 形式で記述するかどうかを指定します。
* **既読としてマーク(チェックボックス)** - 取得したメッセージを既読としてマークするかどうかを指定します。デフォルトでは、このチェックボックスはオフになっています。
* **未読メッセージのみ (チェックボックス)** - 未読メッセージのみを取得するかどうかを指定します。デフォルトでは、このチェックボックスはオンになっています。
* **日付順に並べ替え (OrderByDate)** - メール メッセージを日付順に並べ替えます
* **Top (Int)** - リストの先頭から取得されるメッセージの数。

**出力**

* **メッセージ (`List<MailMessage>`)** - MailMessage オブジェクトのコレクションとして取得されたメッセージ。
