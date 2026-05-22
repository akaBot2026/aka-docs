---
id: installation
title: "インストール"
sidebar_label: "インストール"
sidebar_position: 4
description: "インストールに関するドキュメント。"
displayed_sidebar: dataServiceSidebar
---
# インストール

### **1.はじめに**

このドキュメントでは、Linux (Ubuntu) サーバーに Data Service をインストールする方法について説明します。

### **2.システム要件**

* Ubuntu v18.04以降
* Java 開発キット 11.x.x
* MySQL v8.0.32
* 4GB RAM 以上
* 50GB SSD (推奨)/HDD
* 2CPU以上

### **3.データベースのセットアップ**

システム管理者は、このデータベース資格情報をシステムに追加する必要があります。

ユーザー名 = root / パスワード = sis@12345

システム上で実行するには、akabot\_dataservice、akabot\_userdata という 2 つのデータベース スキーマが必要です。これらのスキーマが存在しない場合、Data Service Web サービスは自動的に作成します。自動化プロセスが失敗した場合は、ガイドラインに従って手動で作成できます。

スキーマ`akabot\_dataservice`のデフォルト文字セット utf8 を作成 utf8\_bin を照合します。
スキーマ`akabot\_userdata`のデフォルト文字セット utf8 を作成 utf8\_bin を照合します。

### **4.インストールプロセス**

* 最新リリース バージョン[here](https://fptsoftware362-my.sharepoint.com/personal/tuantk1_fpt_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ftuantk1%5Ffpt%5Fcom%2FDocuments%2FakaBot%2Fdata%2Dservice&ga=1)のすべてのファイルをダウンロードします

![image-20230630133051-1.png](/static/img/2557e5_image-20230630133051-1.png)

* MobaXterm を使用してリモート サーバーに SSH 接続する
* 上記のファイルをホーム ディレクトリにアップロードします。たとえば、~/dataservice
* ディレクトリを変更します: cd ~/dataservice
* 実行権限の設定: chmod +x setup.sh
* 実行権限の設定: chmod +x setup.sh

上記のコマンドを実行した後、スクリプトはファイルをディレクトリ「/opt/dataservice/」にコピーし、「akabotdata.service」というサービスを登録します。

インストールが成功したかどうかを確認するには、ブラウザで URL http://localhost:8084/#/login にアクセスします。資格情報を入力します: admin/admin。このようなページが表示されるはずです。

![image-20230630133109-2.png](/static/img/f4ff52_image-20230630133109-2.png)

### **5.ユーザーアカウント**

setup.sh スクリプトは、システム内にパスワード「akaBot@12345」を持つユーザー「dataservice」を自動的に作成します。

### **6.トラブルシューティング**

* Web サービスは、ログ ファイルを次のディレクトリに保存します: /opt/dataservice/logs/\*
* ウェブサービスが実行中か停止しているかを確認するには、次のコマンドを実行します: *sudo systemctl status akabotdata.service*

![image-20230630133128-3.png](/static/img/e26578_image-20230630133128-3.png)

* サービスを開始するには: sudo systemctl start akabotdata.service
* サービスを停止するには: sudo systemctl stop akabotdata.service
* インストール プロセスで問題が発生した場合は、エラー メッセージのスクリーンショットを撮り、次の電子メールに送信してください: [[support@akabot.com]](/cdn-cgi/l/email-protection)
