---
id: introduction
title: "導入"
sidebar_label: "導入"
sidebar_position: 1
description: "導入ドキュメント。"
displayed_sidebar: centerSidebar
---
# 導入

## **1. 概要**

これは、エンティティとその関係を明確に定義されたアクセス、ナビゲーション、変更ルールを使用して公開するREST APIです。akaBot Center APIガイドは、CenterのWebインターフェースで利用可能なすべてのリソースに簡単にアクセスし管理できるよう支援することを目的としています。

注: すべての例は http://botcenter.akabot.io のCenterアドレスを使用して構築されています。リクエストを作成する際はご自身のCenterアドレスを使用してください。

## **2. 認証**

### 2.1. ロボット

akaBot Center APIの認証システムはベアラートークンを使用します。認証にはrobotKeyとmachineNameが必要です。

akaBot Center APIに認証するには、次の手順を実行してください:

a. http://botcenter.akabot.io/api/Account に対してPOSTリクエストを行う

![image-20230306180029-1.png](/static/img/9ab32c_image-20230306180029-1.png)

リクエスト

![image-20230306180029-2.png](/static/img/994d3b_image-20230306180029-2.png)

![image-20230306180029-3.png](/static/img/98c264_image-20230306180029-3.png)

レスポンス

![image-20230306180029-4.png](/static/img/41d5eb_image-20230306180029-4.png)

b. HTTPレスポンスの "id_token" からトークンをクリップボードにコピーする

c. トークンは以後のすべてのリクエストで以下の形式で使用する必要があります:

![image-20230306180029-5.png](/static/img/7359f6_image-20230306180029-5.png)

### 2.2. アカウント

akaBot Center APIの認証システムはベアラートークンを使用します。認証にはユーザー名とパスワードが必要です。

akaBot Center APIに認証するには、次の手順を実行してください:

a. http://botcenter.akabot.io/api/authenticate に対してPOSTリクエストを行う

![image-20230306180029-6.png](/static/img/7c1661_image-20230306180029-6.png)

リクエスト

![image-20230306180029-7.png](/static/img/27d353_image-20230306180029-7.png)

![image-20230306180029-8.png](/static/img/2e6ef6_image-20230306180029-8.png)

レスポンス

![image-20230306180029-9.png](/static/img/df5f37_image-20230306180029-9.png)

a. HTTPレスポンスの "id_token" からトークンをクリップボードにコピーする

b. トークンは以後のすべてのリクエストで以下の形式で使用する必要があります:

![image-20230306180029-10.png](/static/img/f9492d_image-20230306180029-10.png)