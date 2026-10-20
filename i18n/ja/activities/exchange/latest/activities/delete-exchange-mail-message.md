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

Exchange からメール メッセージを削除します。

![delete-mail-message](/static/img/delete-mail-message.png)

（\*必須）

## **プロパティ**

**接続**

[Exchange スコープ](exchange-scope.md) 内で使用する場合は、これらのプロパティを空にします。スコープの外で使用する場合は、**サーバー** または **電子メールの自動検出** のどちらか一方を入力します。

* **電子メールの自動検出 (文字列)** - Exchange サーバー上のメール アドレス。akaBot がサーバーを自動的に検出します (サーバーで自動検出が有効になっている必要があります)。  
  例: "user@company.com"
* **Exchange バージョン (ドロップダウンリスト)** – サポートする Exchange の最低バージョン。Exchange 2013 以降の場合は Exchange2013_SP1 を選択します。
* **サーバー (文字列)** - Exchange サーバーの EWS アドレス。  
  例: "https://mail.company.com/EWS/Exchange.asmx"

**メール**

* **メール メッセージ (MailMessage)**\* - 削除する MailMessage オブジェクト (Get Exchange Mail Messages アクティビティで取得したもの)。

**ログオン**

Exchange スコープ内で使用する場合は、これらのプロパティを空にします。

* **ドメイン (文字列)** - アカウントの Windows ドメイン。  
  例: MYDOMAIN
* **パスワード (文字列)** - Exchange アカウントのパスワード。Exchange スコープの外では必須です。
* **ユーザー (文字列)** - Exchange アカウントのユーザー名。Exchange スコープの外では必須です。

**その他**

* **公開 (チェックボックス)** - 選択すると、アクティビティのデータがログに記録されます。使用する前に、データ セキュリティ要件を考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。ワークフローを整理しやすくするために編集できます。  
  例: Delete Exchange Mail Message

**オプション**

* **削除モード (ドロップダウンリスト)** - メッセージの削除方法を指定します。選択肢: HardDelete、SoftDelete、MoveToDeletedItems。
  * **HardDelete** - メッセージを完全に削除します。
  * **SoftDelete** - メッセージをすべてのフォルダーから削除します。ただし、一定期間は IT 管理者が復元できます。
  * **MoveToDeletedItems** (既定) - メッセージを「削除済みアイテム」フォルダーに移動します。
