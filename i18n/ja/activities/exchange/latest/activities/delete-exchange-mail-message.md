---
id: delete-exchange-mail-message
title: "Exchange のメール メッセージを削除する"
sidebar_label: "Exchange のメール メッセージを削除する"
sidebar_position: 5
description: "Exchange のメール メッセージを削除するアクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Exchange のメール メッセージを削除する

RCA.Activities.Mail.DeleteExchangeMailMessage

## **説明**

このアクティビティを使用すると、Exchange の電子メール メッセージを削除できます。

（\*必須）

## **プロパティ**

**接続**

* **電子メールの自動検出 (文字列)**\* - Exchange サーバーの電子メール アドレスを使用して、Exchange サーバーを自動的に検索します。これは、Exchange サーバーで自動検出が有効になっている場合にのみ機能します。
例: 「http(s)://autodiscover.domain/EWS/Exchange.asmx」
* **Exchange バージョン (ドロップダウンリスト)** – 使用する Exchange サーバーの最低バージョンを指定します。このフィールドに表示されるオプションの範囲は、2007 から 2013 バージョンまでです。バージョン番号は、サポートするサービスの最低レベルを示すことに注意してください。これは、2016 Exchange サーバーを使用している場合は、Exchange2013 オプションを選択できることを意味します。
* **Server (String)**\* - 使用される電子メール サーバーのホストと形式は次の例のようになります。
例: 「https://outlook.office365.com/EWS/Exchange.asmx」

**メール**

* **メール メッセージ (MailMessage)**\* - 削除する対象の、Get Exchange Email Messages アクティビティから取得した MailMessage オブジェクト。

**ログオン**

* **ドメイン (文字列)**\* - 接続先の Active Directory ドメイン。
例: Mydomain.com
* **パスワード (文字列)**\* - 使用する Exchange アカウントのパスワード。
* **ユーザー (文字列)**\* - 使用される Exchange アカウントのユーザー。

**その他**

* **公開 (チェックボックス)** - 公開する場合にチェックを入れます。使用する前に、データ セキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例: Exchange のメール メッセージを削除する

**オプション**

* **削除モード (ドロップダウンリスト)** - メッセージの削除方法を指定します。次の値を含みます: HardDelete、SoftDelete、MoveToDeletedItems。
  * **HardDelete** - メッセージを完全に削除します。
  * **SoftDelete** - 「ごみ箱」に移動してから空にするのと同様の動作です。
  * **MoveToDeletedItems** - 「ごみ箱」に移動するのと同様の動作です。
