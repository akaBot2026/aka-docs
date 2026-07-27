---
id: securestring-for-sensitive-arguments
title: ST-SEC-007 - 機密引数の SecureString
sidebar_label: "機密引数の SecureString"
sidebar_position: 7
description: ST-SEC-007 - 機密引数の SecureString
displayed_sidebar: studioSidebar
---
# ST-SEC-007 - 機密引数の SecureString

**ルール ID：** ST-SEC-007

**スコープ：** ワークフロー

## 説明

機密性の高いキーワード（「password」など）を含む引数が `System.Security.SecureString` 型であることを確認します。この文字列型は、潜在的に機密性の高い文字列を格納するために使用する必要があります。

SecureString の詳細は[こちら](https://learn.microsoft.com/ja-jp/dotnet/api/system.security.securestring)を参照してください。

![st-sec-007](/static/img/st-sec-007.png)

## 推奨事項

認証情報や機密データには引数の型を `SecureString` に変更してください。

`SecureString` 型は意図された目的以外に使用してはなりません。つまり、引数はワークフロー間で認証情報を渡すために使用してはなりません。認証情報を含む変数は、できる限り狭いスコープで定義する必要があります。

`SecureString` が取得されたら、通常のアプリケーションでは**セキュア テキストを入力**アクティビティを使用してアプリケーションにログインするために使用してください。

## パラメータ

*   **Keywords：** 機密引数を識別するためのキーワードのリスト。デフォルト値：`password,secret,token,cre`...

![st-sec-007-rtd](/static/img/st-sec-007-rtd.png)
