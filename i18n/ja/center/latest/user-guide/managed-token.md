---
id: managed-token
title: "Centerの管理トークンの使い方"
sidebar_label: 管理トークン
sidebar_position: 3
description: "Centerの管理トークンの使い方ドキュメント。"
displayed_sidebar: centerSidebar
---
# Centerの管理トークンの使い方

## 1. 前提条件

- akaBot Centerがインストールされていること
- PostmanなどのHTTPクライアントアプリケーション

## 2. 管理トークンの作成

管理トークンは、akaBot CenterへのAPI HTTPリクエストの認証に使用できる事前定義された認証トークンです。管理者はトークンにロールを割り当て、有効期限を設定し、いつでも有効/無効を切り替えることができます。

akaBot Centerで管理トークンを作成するには、**Administration > Token > Create New** に移動します。

![1770877756557-535.png](/static/img/ef09e4_1770877756557-535.png)

トークン名、割り当てるロール、有効期限、およびアクティブステータスを入力してトークン情報フォームを完成させます。

![1770877781800-192.png](/static/img/c29bcb_1770877781800-192.png)

作成後、管理パネルにトークンの一覧が表示され、ステータス、割り当てられたロール、最終アクセス時間などの情報が確認できます。

管理者は必要に応じてトークンを編集または削除できます。トークンが削除または期限切れになると、そのトークンを使用しているクライアントはakaBot Center APIを呼び出す権限を失います。

![1770877801041-618.png](/static/img/74eeaa_1770877801041-618.png)

ユーザーはトークンをクリックして詳細を表示し、サードパーティシステムで使用するためにトークン値をコピーできます。

![1770877817340-258.png](/static/img/4c5d5c_1770877817340-258.png)

## 3. 管理トークンの使用

このセクションでは、管理トークンをサードパーティシステムで使用する方法を示します。サードパーティシステムはBearer認証によるHTTPリクエストをサポートしている必要があります。デモとして、Postmanを使用してakaBot Centerからエージェントの一覧を取得するHTTPリクエストを呼び出します。

管理トークンを使用する手順:

- サーバーAPIのURLを入力する
- 認証タイプをBearer Tokenに選択する
- 前のセクションで作成した管理トークンの値を入力する
- Sendボタンをクリックしてリクエストを送信する

レスポンスはエージェントの配列を含むはずです（下図参照）。

![1770877836675-429.png](/static/img/d03392_1770877836675-429.png)

または、カスタムアプリケーションを作成してプログラムでリクエストを送信することもできます。以下はC#の実装例です：

|  |
| --- |
| var options = new RestClientOptions("http://your.center-domain.com") {  MaxTimeout = -1, };  var client = new RestClient(options);  var request = new RestRequest("/api/robots", Method.Get);  request.AddHeader("Accept", "*/*");  request.AddHeader("Authorization", "Bearer <insert-managed-token-here>");  RestResponse response = await client.ExecuteAsync(request);  Console.WriteLine(response.Content); |
