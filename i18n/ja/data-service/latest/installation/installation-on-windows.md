---
id: installation-on-windows
title: "Windows へのインストール"
sidebar_label: "Windows へのインストール"
sidebar_position: 3
description: "Windows でのインストールに関するドキュメント。"
displayed_sidebar: dataServiceSidebar
---
# Windows へのデータ サービスのインストール

## **1.はじめに**

このドキュメントでは、Windows サーバーに Data Service をインストールする方法について説明します。

## **2.システム要件**

* Windows Server 2012以降
* Java 開発キット 11.x.x
* MSSQL v15.x.x.x 以降
* 8GB RAM 以上
* 100GB SSD (推奨)/HDD。
* 4CPU以上

## **3.ファイルシステム**

DataService の最新リリース バージョンを[Release Notes](/i18n/ja/data-service/latest/release-notes.md)からダウンロードします。

![1775807383276-429.png](/static/img/00d47e_1775807383276-429.png)

NSSM - 非吸引サービス マネージャーをこのリンク[https://nssm.cc/download](https://nssm.cc/download)からダウンロードします。 DataService を Windows サービスとして実行するために必要です。システムが再起動されるたびに、NSSM により、DataService を開始するために手動でログインしなくても、DataService が再度実行されるようになります。

ファイルを C:\akaBot\DataService\nssm\win64\nssm.exe に抽出します。

%JAVA\_HOME% が正しい JDK のパスに設定されていることを確認してください。

DataService ファイルをダウンロードしてフォルダーに配置する構造は次のとおりです。

![1775807402060-288.png](/static/img/72521b_1775807402060-288.png)

## **4.データベースのセットアップ**

### **4.1. MySQL**

該当なし

### **4.2. MS SQL サーバー**

Microsoft SQL Server 上で DataService を実行するには、システム管理者がデータベース上に次のスキーマを手動で作成する必要があります: *akabot\_dataservice、akabot\_userdata.*

次に、ファイル *C:\akaBot\DataService\application.yml* を次のサンプルのように編集する必要があります。

* データベース システムに一致するようにプロパティを変更します: *localhost、port、username、password。*
* *base-url* は DataService のパブリック アドレスです。 IP アドレスまたはドメイン名を指定できます。
* *center.domain* は、akaBot Center のパブリック アドレスです。

![1775807526677-252.png](/static/img/92f8f4_1775807526677-252.png)

![1775807561050-696.png](/static/img/a823f9_1775807561050-696.png)

## **5.インストールプロセス**

管理者権限でインストール スクリプトを実行します: *win-install.bat*

上記のコマンドを実行すると、スクリプトは「akaBotDataSvc」というサービスを Windows システムに登録します。

インストールが成功したかどうかを確認するには、ブラウザで URL http://localhost:8084/#/login にアクセスします。

資格情報を入力します: admin/admin。このようなページが表示されるはずです。

![1775807845355-721.png](/static/img/1f83d1_1775807845355-721.png)

## **6.トラブルシューティング**

* Web サービスは、次のディレクトリにログ ファイルを保存します: C:\akaBot\Dataservice\logs\\*
* タスク マネージャーを使用して、Web サービスが実行中か停止しているかを確認します。

![1775807991336-321.png](/static/img/a07b05_1775807991336-321.png)
