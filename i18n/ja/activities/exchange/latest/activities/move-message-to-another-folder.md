---
id: move-message-to-another-folder
title: "メッセージを別のフォルダーに移動する"
sidebar_label: "メッセージを別のフォルダーに移動する"
sidebar_position: 3
description: "メッセージを別のフォルダーに移動するアクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# メッセージを別のフォルダーに移動する

RCA.Activities.Mail.MoveMessageToFolder

## **説明**

このアクティビティを使用すると、電子メール メッセージを Exchange から別のフォルダーに移動できます。

![image-20220505160936-1.png](/static/img/98f075_image-20220505160936-1.png)

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

**入力**

* **メール フォルダー (文字列)**\* - メッセージの取得元のメール フォルダー。
例: 「MailFOlderName」
* **メール メッセージ (MailMessage)**\* - 移動する MailMessage オブジェクト。

**ログオン**

* **ドメイン (文字列)**\* - 接続先の Active Directory ドメイン。
例: Mydomain.com
* **パスワード (文字列)**\* - 使用する Exchange アカウントのパスワード。
* **ユーザー (文字列)**\* - 使用される Exchange アカウントのユーザー。

**その他**

* **公開 (チェックボックス)** - 公開する場合にチェックを入れます。使用する前に、データ セキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: メッセージの移動
