---
id: introduction
title: "はじめに"
sidebar_label: "はじめに"
sidebar_position: 1
description: "導入ドキュメント。"
displayed_sidebar: centerSidebar
---
# はじめに

## **1.  概要**

これは、明確に定義されたアクセス、ナビゲーション、および変更ルールを使用してエンティティとその関係を公開する REST API です。 akaBot Center API ガイドは、Center Web インターフェイスで利用可能なすべてのリソースに簡単にアクセスして管理できるようにすることを目的としています。

ノード: すべての例は、http://botcenter.akabot.io センターのアドレスを使用して構築されています。リクエストを作成するときは、独自のセンターのアドレスを使用してください。

## **2.認証**

### 2.1.ロボット

akaBot Center API の認証システムはベアラー トークンを使用します。 robotKey と machineName を使用する必要があります。

akaBot Center API に対して認証するには、次の手順を実行します。

ａ． http://botcenter.akabot.io/api/Account URL に POST リクエストを送信します。

![image-20230306180029-1.png](/static/img/9ab32c_image-20230306180029-1.png)

リクエスト

![image-20230306180029-2.png](/static/img/994d3b_image-20230306180029-2.png)

![image-20230306180029-3.png](/static/img/98c264_image-20230306180029-3.png)

応答

![image-20230306180029-4.png](/static/img/41d5eb_image-20230306180029-4.png)

b. HTTP 応答のトークンを「id\_token」からクリップボードにコピーします。

c. トークンは、今後のすべてのリクエストで次の形式で使用する必要があります。

![image-20230306180029-5.png](/static/img/7359f6_image-20230306180029-5.png)

### 2.2.アカウント

akaBot Center API の認証システムはベアラー トークンを使用します。ユーザー名とパスワードを使用する必要があります。

akaBot Center API に対して認証するには、次の手順を実行します。

ａ． http://botcenter.akabot.io/api/authenticate URL に POST リクエストを送信します。

![image-20230306180029-6.png](/static/img/7c1661_image-20230306180029-6.png)

リクエスト

![image-20230306180029-7.png](/static/img/27d353_image-20230306180029-7.png)

![image-20230306180029-8.png](/static/img/2e6ef6_image-20230306180029-8.png)

応答

![image-20230306180029-9.png](/static/img/df5f37_image-20230306180029-9.png)

ａ． HTTP 応答のトークンを「id\_token」からクリップボードにコピーします。

b. トークンは、今後のすべてのリクエストで次の形式で使用する必要があります。

![image-20230306180029-10.png](/static/img/f9492d_image-20230306180029-10.png)