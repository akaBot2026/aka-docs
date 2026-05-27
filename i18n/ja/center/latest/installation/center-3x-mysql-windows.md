---
id: center-3x-mysql-windows
title: "Microsoft Windows に Akabot Center 3x と MySQL をインストールする"
sidebar_label: "Microsoft Windows 上の Center 3x と MySQL"
sidebar_position: 4
description: "Akabot Center 3x と MySQL を Microsoft Windows にインストールするドキュメント。"
displayed_sidebar: centerSidebar
---
# Microsoft Windows に Akabot Center 3x と MySQL をインストールする

> このガイドでは、データベース エンジンとして **MySQL** を使用して **akaBot Center バージョン: 3.x、2.x、1.x** の単一インスタンスをインストールする手順を説明します。このガイドラインの対象オペレーティング システム (OS) は **Microsoft Windows** です。

## **ガイドビデオ**

**[Install Akabot Center 3x and MySQL on Microsoft Windows (2026) - YouTube](https://www.youtube.com/watch?v=IBwA0TiYIwE)**

## **1.前提条件**

**1.1.ハードウェアと OS の要件**

|  |  |
| --- | --- |
| **構成** | **要件** |
| ハードウェア | RAM：32GB以上 コア：8CPU以上 SSD：512G​​B |
| オペレーティング·システム | Windows 10、11、サーバー 2012 R2/2016/2019 |

**1.2.ソフトウェア パッケージ**

インストールは、ターゲット マシン上で管理者 (root) 権限を持つアカウントを使用して実行する必要があります。
次のリストに従ってインストール パッケージを準備する必要があります。

**注記：**
- Center をインストールするコンピューターにインターネット接続がない場合は、インストール パッケージを外部からダウンロードしてコンピューターにコピーしてください。
- コマンド ライン実行でのインストール中のエラーを回避するには、akaBot Center インストール用の専用フォルダーを使用し、インストール パッケージ ディレクトリにスペースを含まない名前を付けてください。例: C:\akaBot

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **#** | **名前** | **ファイル名** | **バージョン** | **説明** | **ダウンロードリンク** |
| 1 | 別名ボット センター | akaBot-center-3.x.x.x.war | 最新バージョン | akaBot Center インストール パッケージ | akaBot は、顧客が購入した後、電子メールを通じて提供します。 |
| 2 | Java開発者キット | openlogic-openjdk-11.0.20 | 11.0.20 | オープンロジック JDK 11.0.20 | **[Download](https://builds.openlogic.com/downloadJDK/openlogic-openjdk/11.0.20+8/openlogic-openjdk-11.0.20+8-windows-x64.msi)** |
| 3 | Apacheトムキャット | apache-tomcat-8.5.89.exe | 8.5.59 | Webサーバー Apache Tomcat | **[Download](https://archive.apache.org/dist/tomcat/tomcat-8/v8.5.89/bin/apache-tomcat-8.5.89.exe)** |
| 4 | アクティブMQ | apache-activemq-5.15.1-bin.zip | 5.15.1 | akaBot Center のキュー機能用 ActiveMQ | **[Download](https://archive.apache.org/dist/activemq/5.15.1/apache-activemq-5.15.1-bin.zip)** |
| 5 | MySQL | Windows (x86、32 ビット)、MSI インストーラー | 8.0.45 | akaBot Center のデータベース エンジン | 詳細については、**セクション 3.1** をお読みください。 |

## **2. Java JDK 11 のインストール**

ダウンロードしたインストーラ -**openlogic-openjdk-11.0.20** を実行します。その後、**「次へ」** をクリックして続行します。

![1693904663056-588.png](/static/img/ec5495_1693904663056-588.png)

![1772523074597-686.png](/static/img/e6cae6_1772523074597-686.png)

* インストールが完了すると、以下の完了通知が表示されます。 [**完了**] をクリックするだけです。 JDK が正常にインストールされました。

![1693904326967-726.png](/static/img/a31a17_1693904326967-726.png)

**注意**: コマンド **echo %JAVA\_HOME%** を入力して、**JAVA\_HOME** が環境変数に存在することを確認してください。出力は jdk 11 を指すパスになるはずです。例:**C:\Program Files\OpenLogic\jdk-11.0.20.8**

## **3. MySQL のインストール**

### **3.1. MySQL をインストールします**

**ステップ 1** -[**MySQL 8.0**](https://dev.mysql.com/downloads/installer/)をダウンロードしてください

![1772437408190-866.png](/static/img/dd5252_1772437408190-866.png)

**ステップ 2** - インストーラーを実行します

* **「カスタム」** オプションを選択し、**「次へ」** をクリックします。

![1772437719601-511.png](/static/img/310c0d_1772437719601-511.png)

* akaBot Center を実行するには、MySQL Server と MySQL Workbench が必要です。
* 下：
  + **MySQL サーバー > MySQL サーバー**、**MySQL サーバー** として **最新** を選択します。
  + **アプリケーション > MySQL Workbench**、**MySQL Workbench** の **最新** バージョンを選択します

![Screenshot_1.png](/static/img/caa6b7_screenshot_1.png)

![MY SQL 2.png](/static/img/e9117a_screenshot_2.png)

* ボタンをクリックします**「次へ」**

![MY SQL3.png](/static/img/f54636_screenshot_3.png)

* その後、「**実行」**をクリックして**「次へ」**を押してください。

![MY SQL 4.png](/static/img/f01cdb_screenshot_4.png)

* 製品が正常にインストールされたら、**「次へ**」をクリックしてプロセスを続行してください

![1772441172714-108.png](/static/img/43ee17_1772441172714-108.png)

* [**アカウントとロール**] ページでは、後で構成ファイルを更新する必要がないように、デフォルトのパスワード **sis@12345** に設定することをお勧めします。 **「次へ」** をクリックします

![1772439437071-858.png](/static/img/35d17a_1772439437071-858.png)

* **「実行」** をクリックし、すべてが完了するまで待ちます。 [**完了**] をクリックします。

![1772439474719-293.png](/static/img/8f7e23_1772439474719-293.png)

* この画面が表示されれば、インストールは正常に完了しています。 [**完了**] をクリックします。

![1772441401441-726.png](/static/img/c81312_1772441401441-726.png)

### **3.2.リモート接続を有効にするための MYSQL アカウントのセットアップ**

MySQL とのリモート接続をセットアップする方法を知るには、次の手順に従ってください。これは、MySQL と akaBot Center を別々のシステムにインストールするのに役立ちます。

**MySQL Workbench を使用してリモート クライアントから MySQL をテストします**

* 他のコンピュータで MySQL Workbench を開き、**接続の追加ボタン** をクリックして (下の図を参照)、**新しい接続のセットアップ** ウィンドウを開きます。

![1706867096054-795.png](/static/img/793985_1706867096054-795.png)

* **「HostName」** にエクスプローラー、テストしたい MySQL の IP アドレスを入力します
* SQLユーザー名を入力してください: **root**
* [**テスト** **接続**] ボタンをクリックしてください
* ダイアログ **MySQL サーバーに接続** が表示されたら、このアカウントの **パスワード** ***(3.1 >ステップ 2 で作成したもの)*** を入力し、[OK] を押してこの接続をテストします。

![1772524392234-168.png](/static/img/5a867f_1772524392234-168.png)

* すべてが正常に構成されている場合は、このダイアログが表示されます。

![1772532912080-735.png](/static/img/278da0_1772532912080-735.png)

* 接続が成功すると、MySQL Workbench を使用してリモート データベースを詳細に参照できます。

### **3.3. Center 用の MySQL データベースの作成**

* 新規または初回インストールの場合は、センター用の新しいデータベースを作成する必要があります。
* 以下の手順に従って、MySQL Database for Center をインストールするように設計されたマシンに **aka\_orchestrator** という名前のデータベースを作成します。

**ステップ 1**: MySQL データベースを作成するマシンで MySQL Workbench を開きます。

![aaaa.png](/static/img/ec0b66_aaaa.png)

* MySQL Workbench を開き、ローカル インスタンスにアクセスします

![b.png](/static/img/ee85fc_b.png)

**ステップ 2**: (1) をクリックして **作成** **新しい** **データベース** **ダイアログ**を開きます

(2) 入力スキーマ名=**aka\_orchestrator**

(3) センターのデータベース名を入力

(4) Charset =**utf8 ,utf8\_general\_ci** を入力します。

(5) (1) (2) (3) (4) をすべて完了したら、**適用** をクリックします。

![c.png](/static/img/2dcf81_c.png)

**ステップ 3**: **適用** をクリックして LMS データベースを作成します

![d.png](/static/img/a3a97e_d.png)

**完了**をクリックしてください

![e.png](/static/img/d2e666_e.png)

## **4. Apache Tomcat のインストール**

### **4.1. Apache Tomcat をインストールします**

Apache Tomcat のインストール:
-「Apache Tomcatを実行する」のチェックを外します。
-「Readmeを表示」のチェックを外します
・「完了」ボタンをクリックしてインストールを完了します。

![1772442127295-195.png](/static/img/590434_1772442127295-195.png)

![1698826414378-509.png](/static/img/cc2589_1698826414378-509.png)

Apache Tomcat のインストール パス:**%TOMCAT\_PATH%** = C:\Program Files\Apache Software Foundation\Tomcat 8.5

### **4.2. Apache Tomcat 構成**

**4.2.1.ログ設定を構成します**

**ステップ 1:**ファイルを開きます**%TOMCAT\_PATH%\conf\logging.properties**

**ステップ 2:**attributemaxDays を追加して、catalina、localhost、host-manager、manager ログについて、ローテーションされたアクセス ログが削除されるまで保持される最大日数を指定します。指定しない場合は、デフォルト値の -1 が使用されます。これは、古いファイルを削除しないことを意味します。

* 例: 10 日分の履歴を保存します。入力：
  + 1catalina.org.apache.juli.AsyncFileHandler.maxDays = 10
  + 2localhost.org.apache.juli.AsyncFileHandler.maxDays = 10
  + 3manager.org.apache.juli.AsyncFileHandler.maxDays = 10
  + 4host-manager.org.apache.juli.AsyncFileHandler.maxDays = 10

![1772682379196-293.png](/static/img/2f3e17_1772682379196-293.png)

**ステップ 3:** 変更を保存してファイルを閉じます。

**ステップ 4:** ファイル **%TOMCAT\_PATH%\conf\server.xml** を開きます

**ステップ 5:** ログ設定の行のコメントを解除してログをオンにし、以下のように属性 **maxDays** を追加します。

![1772529944202-188.png](/static/img/74fe8a_1772529944202-188.png)

***注: .xml ファイルはメモ帳で開いた場合のみ編集できます***

*次の手順は、メモ帳で開く方法を示しています:*

* ***管理者として実行*** をクリックします。

![1772443837379-641.png](/static/img/858cf5_1772443837379-641.png)

* ***ファイル\開く***に移動します

![1772443919471-532.png](/static/img/c6cd4d_1772443919471-532.png)

* *リスト内でファイルを見つけます。**「すべてのファイル」** オプションを選択することを忘れないでください*

![1772444056154-686.png](/static/img/641de5_1772444056154-686.png)

**ステップ 6:** 変更を保存してファイルを閉じます

**4.2.2.その他の設定**

**ステップ 1:** パス **%TOMCAT\_PATH%\bin** に移動し、ファイル **Tomcat8w.exe** をダブルクリックして、Apache Tomcat サービス構成を開きます。

![1698826573279-276.png](/static/img/aef040_1698826573279-276.png)

**ステップ 2**: **全般** タブ

* スタートアップの種類を選択します: **自動**
* [**適用**] を選択して、構成の変更を適用します。

![1698826602935-553.png](/static/img/d3597d_1698826602935-553.png)

**ステップ 3:** [**ログ**] タブ

(1) ログの接頭辞: **「commons-daemon」を削除**

(2) 標準出力をリダイレクト: **「auto」を削除**

(3) 標準エラーをリダイレクト: **「auto」を削除**

(4) [**適用**] を選択して、構成の変更を適用します。

![1698826668751-847.png](/static/img/7d4777_1698826668751-847.png)

**ステップ 4**: [**Java**] タブで

ａ． Java ヒープ構成を調整します。

* 初期メモリ プール: **サーバーの RAM の 1/4 以下の値を入力します。**

例: サーバー RAM = 32 GB -> 初期メモリ プールは \<= 1/4 \* 16 \* 1024 MB である必要があります

* 最大メモリ プール: **サーバーの RAM の値 \<= を入力します。**

例: サーバー RAM = 32 GB -> 最大メモリ プールは \<= \* 16 \* 1024 MB である必要があります

**注意**: 大きすぎる値を入力すると、Apache Tomcat サービスが起動できなくなり、エラーが発生する可能性があります。

![1698826792581-457.png](/static/img/1ce0a7_1698826792581-457.png)

b. [**適用**] を選択して、構成の変更を適用します。

![1772532754855-337.png](/static/img/7280c5_1772532754855-337.png)

**ステップ 5:**Tomcat サービスを開始する

[**全般**] タブで [**開始**] を選択し、Apache Tomcat サービスを開始します。

![1698826877948-604.png](/static/img/10ded1_1698826877948-604.png)

### **4.3. Apache Tomcat のインストールを確認してください**

**ステップ 1:** インストールと構成が完了したら、[サービス] 画面に移動して、Apache Tomcat サービスのステータスを確認します。

* ステータスが「実行中」でない場合は、Apache Tomcat サービスを開始します。
* ステータスが「実行中」の場合は、手順 2 に進みます。

![1699244034878-897.png](/static/img/43701e_1699244034878-897.png)

**ステップ 2:** Chrome で URL[http://localhost:8080](http://localhost:8080/)にアクセスし、Apache Tomcat が正常にインストールされたことを確認します。

![1699244051857-950.png](/static/img/8fcb85_1699244051857-950.png)

## **5. ActiveMQ のインストール**

### **5.1. ActiveMQ をインストールします**

**ステップ 1:** ファイル「apache-activemq-5.15.1-bin.zip」を目的のインストール パスに抽出します。

例: **ACTIVEMQ\_PATH = C:\akaBot\apache-activemq-5.15.1**

注: インストール パスにはスペースを含めないでください。

![1699244069336-269.png](/static/img/f0dd32_1699244069336-269.png)

**ステップ 2:** 管理者権限でコマンド プロンプトを開きます。

![1699244074920-832.png](/static/img/00c7a3_1699244074920-832.png)

**ステップ 3:** ファイル %ACTIVEMQ\_PATH%\bin\win64\InstallService.bat を実行して、ActiveMQ サービスをインストールします。

コマンドを実行します:**C:\Windows\System32>C:\akaBot\apache-activemq-5.15.1\bin\win64\InstallService.bat**

![1699244080655-576.png](/static/img/845cac_1699244080655-576.png)

**ステップ 4**: ActiveMQ サービスを開始します。

![1698830727957-440.png](/static/img/0d2d88_1698830727957-440.png)

### **5.2. Java ヒープ構成**

**ステップ 1:** サービス ActiveMQ を停止します

![1698830792792-356.png](/static/img/8d3a99_1698830792792-356.png)

**ステップ 2**: ファイル **%ACTIVEMQ\_PATH%\bin\win64\wrapper.conf** を開き、パラメーターを構成します。

* ***wrapper.java.initmemory:*** Java ヒープ メモリの初期値を入力します。

たとえば、サーバーに 32 GB の RAM が搭載されている場合は、1024 と入力できます。

* ***wrapper.java.maxmemory:*** Java ヒープ メモリの最大値を入力します。

たとえば、32 GB の RAM を搭載したサーバーの場合は、4096 と入力できます。

**ステップ 3:** ActiveMQ サービスを開始する

![1698830915678-493.png](/static/img/36ce80_1698830915678-493.png)

### **5.3.ActiveMQ のインストールを確認する**

**ステップ 1**: ActiveMQ サービスの実行ステータスを確認します。サービスが実行されていない場合は、サービスを開始します。

![1698830978699-754.png](/static/img/d07929_1698830978699-754.png)

**ステップ 2**: URL[http://localhost:8161](http://localhost:8161/)にアクセスして、ActiveMQ が正常にインストールされたことを確認します。

![1698831013334-870.png](/static/img/c76f1f_1698831013334-870.png)

## **6. akaBot センターのインストール**

**akaBot-center- 3.x.x.x.war をダウンロードします。**

### **6.1. war ファイルをコピーして抽出します**

**ステップ 1: 停止** Apache Tomcat サービス

![1698831867557-259.png](/static/img/3ff711_1698831867557-259.png)

**ステップ 2: **%TOMCAT\_PATH%/webapps.** 内のすべてのフォルダーを削除**します。

**ステップ 3: ファイル akaBot-center-x.x.x.x.war を **%TOMCAT\_PATH%/webapps/** ディレクトリにコピー**し、**名前を **ROOT.war.** に変更**します。

![1698831956427-192.png](/static/img/ad0815_1698831956427-192.png)

**ステップ 4: Apache Tomcat サービスを再起動**し、ROOT.war が ROOT ディレクトリに抽出されるまで待ちます。

![1698831960528-312.png](/static/img/8eaf21_1698831960528-312.png)

**ステップ 5**: Apache Tomcat サービスを停止します。

![1698831966006-837.png](/static/img/36c3e2_1698831966006-837.png)

### **6.2. akaBot Center の構成**

**6.2.1. Configquartz.properties**

**ステップ 1:** Apache Tomcat サービスを停止します (Apache Tomcat サービスが現在実行中の場合)。

**ステップ 2:** ファイル **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/quartz.properties** 内の構成を次のように変更します。

***1. MySSQL のジョブストア構成をコメントアウトします。***

![1772446604326-131.png](/static/img/dd8781_1772446604326-131.png)

***2. MySQL のジョブストア構成の行の先頭にある「#」文字を削除して、コメントを解除します。***

![1772446627348-744.png](/static/img/758a7a_1772446627348-744.png)

**6.2.2.MySQL データベース接続の構成**

**ステップ 1**: パス **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/config/** に移動します。

**ステップ 2**: **両方のファイルの構成を変更します:** ***application-dev.yml*** および ***application-prod.yml***

**行頭の # 文字を削除**して、構成のコメントを解除し、**MySQL** の使用を有効にします。行の先頭に「#」文字を追加して構成をコメントアウトし、MSSQL を無効にします。

* ***アプリケーション開発.yml***

![1772507158837-545.png](/static/img/e59b6f_1772507158837-545.png)

![1772507280528-183.png](/static/img/85db57_1772507280528-183.png)

* ***アプリケーション-prod.yml***

![1772507513075-296.png](/static/img/09516e_1772507513075-296.png)

![1772507539912-791.png](/static/img/adf0d1_1772507539912-791.png)

**6.2.3.ログ設定**

1. ファイル **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/logback-spring.xml** を開きます

2. **ログ レベル**を ERROR に変更します

3. ローリング ログ ファイルの設定を次のように変更します。

* **maxFileSize:** 各ファイルのサイズを制限します。例: 200MB。
* **maxHistory**: オプションの maxHistory プロパティは、保持するアーカイブ ファイルの最大数を制御します。例: 20
* **totalSizeCap:** オプションの totalSizeCap プロパティは、すべてのアーカイブ ファイルの合計サイズを制御します。例：20GB

![1772507762567-722.png](/static/img/dffe00_1772507762567-722.png)

4. 変更を保存してファイルを閉じる

5. **Apache Tomcat** サービスを開始し、**[http://localhost:8080/](http://localhost:8080/)** にアクセスして、akaBot Center のインストールを確認します。

![1772507853732-828.png](/static/img/0522c9_1772507853732-828.png)

6. 次の認証情報を使用してログインします。

* ユーザー名: 管理者
* パスワード: 管理者
* 以下に示すように、ダッシュボードにリダイレクトされます。

![1772526428540-942.png](/static/img/cb998d_1772526428540-942.png)

## **7.トラブルシューティング**

### **7.1.アクティブMQ**

**7.1.1. Java コマンドを実行できません**

![1698833178465-447.png](/static/img/9dbe5e_1698833178465-447.png)

* ファイル %ACTIVEMQ\_PATH%\bin\win64\wrapper.conf を開き、パラメーターを構成します。

［wrapper.java.command=%JAVA\_HOME%/bin/java.exe］

**7.1.2.その他のエラー**

**ActiveMQ: %ACTIVEMQ\_PATH%\logs\data\wrapper.log** のログ ファイルでエラーの詳細を確認してください。

## **8.災害復旧のためのバックアップ**

災害復旧シナリオのためにバックアップする情報:

|  |  |  |  |
| --- | --- | --- | --- |
| **いいえ** | **名前** | **パス** | **説明** |
| 1 | 別名ボット センター | データベース | akaBot Center のデータベース (MSSQL) |
| %[TOMCAT\_PATH](#_bookmark21)%/ファイルストレージ | akaBot Center に公開された akaBot Studio の .nupkg ファイルを含むフォルダー |
| %[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\application.yml %[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\application-dev.yml %[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\application-prod.yml %[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB-INF\classes\config\quartz.properties | akaBot Center の構成ファイル |
| 2 | アクティブMQ | %[ACTIVEMQ\_PATH](#_bookmark25)%\data | activeMQ データディレクトリ |

**9.ライセンスのアクティベーション**

**[Activation](/i18n/ja/center/latest/installation/license-activation.md)** 経由の指示に従ってください。