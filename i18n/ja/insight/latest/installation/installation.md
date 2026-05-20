---
id: insight-installation
title: "インストール"
sidebar_label: "インストール"
sidebar_position: 1
description: "akaBot Insight の前提条件とステップバイステップのインストール ガイド。"
displayed_sidebar: insightSidebar
---
# インストール
## 前提条件

1. MySQL 8.0
2. JDK11
3. Automation Insight conductor (ビルド済みバージョン)
4. akaBot センター (最新バージョン)
5. Apache Tomcat 8.5
6. ポート 8080 は空いている必要があります。そうでない場合は、別のポートでコンダクタを実行する必要があります。

## インストール

### 1.MySQL 8.0

1.1.以下のSQLでconductor用のデータベースを新規作成します。

データベース自動化インサイトを作成します。

1.2. mysql 接続を構成します: ファイル application-prod.yml を開きます

![image-20230421141503-1.png](/static/img/image-20230421141503-1.png)

### 2.JDK11

[https://www.oracle.com/in/java/technologies/javase/jdk11-archive-downloads.html](https://www.oracle.com/in/java/technologies/javase/jdk11-archive-downloads.html)

### 3.Apache Tomcat 8.5

[https://archive.apache.org/dist/tomcat/tomcat-8/v8.5.57/bin/apache-tomcat-8.5.57.exe](https://archive.apache.org/dist/tomcat/tomcat-8/v8.5.57/bin/apache-tomcat-8.5.57.exe)

![image-20230421141503-2.png](/static/img/image-20230421141503-2.png)

HTTP/1.1 コネクタ ポートのセットアップ: デフォルトは 8080、コンダクタと同じゲート ポート。

## akaBot Center を介してユーザーを認証する構成

1. ファイル application-prod.yml を開く
2. ファイルの一番下までスクロールすると、中央セクションが表示されます。必要に応じて設定を更新します。

![image-20230421141503-3.png](/static/img/image-20230421141503-3.png)

例：

ドメイン:[http://center.akabot.io](http://center.akabot.io)

ポート: 80

dbName: 別名\_orchestrator

## 走行車掌

1. Tomcat フォルダーを開きます。
C:/プログラム ファイル/Apache Software Foundation/Tomcat8/webapps
2. ステップ 3 ですでにダウンロードしており、上記の URL のように Tomcat フォルダーにファイルを保存します。

![image-20230421141503-4.png](/static/img/image-20230421141503-4.png)

Windows でサービスを開き、Apache Tomcat 8.5 を起動します。

![image-20230421141503-5.png](/static/img/image-20230421141503-5.png)

コンダクターが正常に起動したら、[http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)を開いてコンダクターの API を確認できます。

config application-prod.yml を編集した場合は、Apache Tomcat を再起動する必要があります。
