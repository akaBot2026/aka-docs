---
id: exchange-scope
title: "交換範囲"
sidebar_label: "交換範囲"
sidebar_position: 1
description: "Exchange Scope アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# 交換範囲

RCA.Activities.Mail.ExchangeScope

## **説明**

Exchange に接続し、他の Exchange アクティビティのスコープを提供します。

![image-20220505160823-1.png](/static/img/5d0b4d_image-20220505160823-1.png)

（\*必須）

## **プロパティ**

**既存の接続**

* **既存の Exchange サービス (ExchangeService)** - 別の Exchange スコープからの既存の ExchangeService オブジェクトを介した接続を許可します。このフィールドは ExchangeService オブジェクトのみをサポートします。

**ログオン**

* **ドメイン (文字列)** - 接続先の Active Directory ドメイン。
* **パスワード (文字列)** - 使用する Exchange アカウントのパスワード。
* **ユーザー (文字列)** - 使用する Exchange アカウントのユーザー。

**その他**

* **公開 (チェックボックス)** - 公開する場合にチェックを入れます。使用する前に、データ セキュリティ要件を必ず考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。アクティビティの名前を編集して、コードをより適切に整理および構造化できます。
例：交流活動の範囲

**新しい接続**

* **電子メール自動検出 (文字列)** - Exchange サーバーの電子メール アドレスを使用して、Exchange サーバーを自動的に検索します。これは、Exchange サーバーで自動検出が有効になっている場合にのみ機能します。
例: 「http(s)://autodiscover.domain/EWS/Exchange.asmx」
* **Exchange バージョン (ドロップダウンリスト)\*** – 使用する Exchange サーバーの最低バージョンを指定します。このフィールドに表示されるオプションの範囲は、2007 から 2013 バージョンまでです。バージョン番号は、サポートするサービスの最低レベルを示すことに注意してください。これは、2016 Exchange サーバーを使用している場合は、Exchange2013 オプションを選択できることを意味します。
* **サーバー (文字列)** - 使用される電子メール サーバーのホストとその形式は次の例のようになります。
例: 「[https://outlook.office365.com/EWS/Exchange.asmx”](https://outlook.office365.com/EWS/Exchange.asmx%E2%80%9D)」

EWS

EWS の詳細については、これらのリンクを参照してください。

1. https://docs.microsoft.com/en-us/exchange/client-developer/exchange-web-services/how-to-set-the-ews-service-url-by-using-the-ews-managed-api
2. https://docs.microsoft.com/en-us/previous-versions/office/developer/exchange-server-2010/dd877045(v=exchg.140)

**出力**

* **Exchange サービス (ExchangeService)** – サーバーへの接続を含む ExchangeServer オブジェクト。
