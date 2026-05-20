---
id: release-notes
title: "リリースノート"
sidebar_label: "リリースノート"
sidebar_position: 2
description: "リリース ノートのアクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# リリースノート

## **RCA.Activities.Mail バージョン 2.1.1.0**

### **バグ修正**

* [修正] [GetExchangeMailMessgaes] フィールド「パスワード」と「ユーザー」を入力しないとエラーが表示されない
* [修正] [GetExchangeMailMessages] 代理送信でメールを取得できない
* [修正] [GetExchangeMailMessages] 正の数値を入力するとタイムアウト MS が正しくない
* [修正] [SendExchangeMail] 「To」/「Cc」/「Bcc」リストにセミコロンで区切られた電子メール アドレスが含まれるメールを送信できない
* [修正] [GetExchangeMailMessages] 間違ったサーバーを入力すると例外が発生する
