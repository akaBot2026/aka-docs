---
id: securestring-for-sensitive-variables
title: ST-SEC-008 - 機密変数の SecureString
sidebar_label: "機密変数の SecureString"
sidebar_position: 8
description: ST-SEC-008 - 機密変数の SecureString
displayed_sidebar: studioSidebar
---
# ST-SEC-008 - 機密変数の SecureString

**ルール ID：** ST-SEC-008

**スコープ：** アクティビティ

## 説明

機密性の高いキーワード（「password」など）を含む変数が `System.Security.SecureString` 型であることを確認します。この文字列型は、潜在的に機密性の高い文字列を格納するために使用する必要があります。

SecureString の詳細は[こちら](https://learn.microsoft.com/ja-jp/dotnet/api/system.security.securestring)を参照してください。

![st-sec-008](/static/img/st-sec-008.png)

## 推奨事項

認証情報や機密データには変数の型を `SecureString` に変更してください。

`SecureString` 型は意図された目的以外に使用してはなりません。このような変数のスコープは非常に限定的であるべきで、理想的には作成されたのと同じスコープ内にする必要があります。認証情報を含む変数は、できる限り狭いスコープで定義する必要があります。

`SecureString` が取得されたら、通常のアプリケーションでは**セキュア テキストを入力**アクティビティを使用してアプリケーションにログインするために使用してください。

## パラメータ

*   **Keywords：** 機密変数を識別するためのキーワードのリスト。デフォルト値：`password,secret,token,cre`...

![st-sec-008-rtd](/static/img/st-sec-008-rtd.png)
