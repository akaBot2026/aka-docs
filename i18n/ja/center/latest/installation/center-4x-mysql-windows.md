---
id: center-4x-mysql-windows
title: "Microsoft Windows に Akabot Center 4x と MySQL をインストールする"
sidebar_label: "Microsoft Windows 上の Center 4x と MySQL"
sidebar_position: 6
description: "Akabot Center 4x と MySQL を Microsoft Windows にインストールするドキュメント。"
displayed_sidebar: centerSidebar
---
# Microsoft Windows に Akabot Center 4x と MySQL をインストールする

> このガイドでは、データベース エンジンとして **MySQL** を使用して **akaBot Center バージョン: 4.x** の単一インスタンスをインストールする手順を説明します。このガイドラインの対象オペレーティング システム (OS) は **Microsoft Windows** です。

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
| 1 | 別名ボット センター | akaBot-center- 4.x.x.x.war | 最新バージョン | akaBot Center インストール パッケージ | akaBot は、顧客が購入した後、電子メールを通じて提供します。 |
| 2 | Java開発者キット | openlogic-openjdk-17.0.16 | 17.0.16 | オープンロジック JDK 17.0.16 | **[Download](https://builds.openlogic.com/downloadJDK/openlogic-openjdk/17.0.16+8/openlogic-openjdk-17.0.16+8-windows-x64.msi)** |
| 3 | Apacheトムキャット | apache-tomcat-10.1.52.exe | 10.1.52 | Webサーバー Apache Tomcat | **[Download](https://dlcdn.apache.org/tomcat/tomcat-10/v10.1.52/bin/apache-tomcat-10.1.52.exe)** |
| 4 | アクティブMQ | apache-activemq-5.15.1-bin.zip | 5.15.1 | akaBot Center のキュー機能用 ActiveMQ | **[Download](https://archive.apache.org/dist/activemq/5.15.1/apache-activemq-5.15.1-bin.zip)** |
| 5 | MySQL | Windows (x86、32 ビット)、MSI インストーラー | 8.0.45 | akaBot Center のデータベース エンジン | 詳細については、**セクション 3.1** をお読みください。 |

## **2. Java JDK 17 のインストール**

ダウンロードしたインストーラ -**openlogic-openjdk-17.0.16** を実行します。その後、**「次へ」** をクリックして続行します。

![1772678336700-443.png](/static/img/76eafc_1772678336700-443.png)

![1772678575028-725.png](/static/img/a0d494_1772678575028-725.png)

![1772678599882-146.png](/static/img/79f0cd_1772678599882-146.png)

![1772678637728-770.png](/static/img/df20a7_1772678637728-770.png)

* インストールが完了すると、以下の完了通知が表示されます。 [**完了**] をクリックするだけです。 JDK が正常にインストールされました。

![1772678676435-470.png](/static/img/898bcd_1772678676435-470.png)

**注意**: コマンド **echo %JAVA\_HOME%** を入力して、**JAVA\_HOME** が環境変数に存在することを確認してください。出力は jdk 17 を指すパスになるはずです。例: **C:\Program Files\OpenLogic\jdk-17.0.16.8-hotspot**

## **3. MySQL のインストール**

### **3.1. MySQL をインストールします**

**ステップ 1** -[**MySQL 8.0**](https://dev.mysql.com/downloads/installer/)をダウンロードしてください

![1772679894229-198.png](/static/img/6fedc5_1772679894229-198.png)

**ステップ 2** - インストーラーを実行します

* **「カスタム」** オプションを選択し、**「次へ」** をクリックします。

![1772680026894-329.png](/static/img/2e325d_1772680026894-329.png)

* akaBot Center を実行するには、MySQL Server と MySQL Workbench が必要です。
* 下：
+**MySQL サーバー > MySQL サーバー**、**MySQL サーバー** として **最新** を選択します。
+**アプリケーション > MySQL Workbench**、**MySQL Workbench** の **最新** バージョンを選択します

![1772680062957-574.png](/static/img/62134b_1772680062957-574.png)

* **「次へ」** ボタンをクリックします

![1772680106676-150.png](/static/img/e8e1be_1772680106676-150.png)

* その後、**「実行」** をクリックし、**「次へ」** をクリックしてください。

![1772680183433-519.png](/static/img/309ba6_1772680183433-519.png)

* 製品が正常にインストールされたら、**「次へ**」をクリックしてプロセスを続行してください

![1772680302561-505.png](/static/img/30c53e_1772680302561-505.png)

* [**アカウントとロール**] ページでは、後で構成ファイルを更新する必要がないように、デフォルトのパスワード **"sis@12345"** に設定することをお勧めします。 **「次へ」**をクリックします

![1772680441382-833.png](/static/img/636706_1772680441382-833.png)

* **「実行」** をクリックし、すべてが完了するまで待ちます。 [**完了**] をクリックします。

![1772680676937-347.png](/static/img/197a7f_1772680676937-347.png)

* この画面が表示されれば、インストールは正常に完了しています。 [**完了**] をクリックします。

![1772680642000-840.png](/static/img/6ed741_1772680642000-840.png)

### **3.2.リモート接続を有効にするための MYSQL アカウントのセットアップ**

MySQL とのリモート接続をセットアップする方法を知るには、次の手順に従ってください。これは、MySQL と akaBot Center を別々のシステムにインストールするのに役立ちます。

**MySQL Workbench を使用してリモート クライアントから MySQL をテストします**

* 他のコンピュータで MySQL Workbench を開き、**接続の追加ボタン** をクリックして (下の図を参照)、**セットアップ** **新規** **接続** ウィンドウを開きます。

![1772680900409-828.png](/static/img/a21512_1772680900409-828.png)

* **「HostName」** にエクスプローラー、テストしたい MySQL の IP アドレスを入力します
* SQLユーザー名を入力してください: **root**
* [**接続をテスト**] ボタンをクリックしてください

![1772680983582-429.png](/static/img/73674e_1772680983582-429.png)

* ダイアログ **「Connect to MySQL Server」** が表示されたら、このアカウントの **パスワード (3.1 >ステップ 2 で作成したもの)** を入力し、**「OK」** を押してこの接続をテストします。

![1772681048495-679.png](/static/img/985936_1772681048495-679.png)

* すべてが正常に構成されている場合は、このダイアログが表示されます。

![1772681188703-627.png](/static/img/b42ef1_1772681188703-627.png)

* 接続に成功すると、MySQL Workbench を使用してリモート データベースを詳細に参照できます。

### **3.3. Center 用の MySQL データベースの作成**

* 新規または初回インストールの場合は、センター用の新しいデータベースを作成する必要があります。
* 以下の手順に従って、MySQL Database for Center をインストールするように設計されたマシンに **aka\_orchestrator** という名前のデータベースを作成します。

**ステップ 1**: MySQL データベースを作成するマシンで MySQL Workbench を開きます。

![1772681250244-938.png](/static/img/f89b8a_1772681250244-938.png)

* MySQL Workbench を開き、ローカル インスタンスにアクセスします

![1772681325916-698.png](/static/img/d6ebe6_1772681325916-698.png)

**ステップ 2**: (1) をクリックして **新しいデータベースの作成ダイアログ** を開きます

![1772681367826-951.png](/static/img/14d5de_1772681367826-951.png)

(2) 入力スキーマ名=**aka\_orchestrator**

(3) センターのデータベース名を入力

(4) Charset =**utf8 ,utf8\_general\_ci** を入力します。

(5) (1) (2) (3) (4) をすべて完了したら、**適用** をクリックします。

![1772681424156-676.png](/static/img/1f9747_1772681424156-676.png)

**ステップ 3**: **適用** をクリックして LMS データベースを作成します

![1772681470131-634.png](/static/img/bdbad7_1772681470131-634.png)

**完了**をクリックしてください

![1772681498688-250.png](/static/img/9438bc_1772681498688-250.png)

## **4. Apache Tomcat のインストール**

### **4.1. Apache Tomcat をインストールします**

Apache Tomcat のインストール:
-「Apache Tomcatを実行する」のチェックを外します。
-「Readmeを表示」のチェックを外します
・「完了」ボタンをクリックしてインストールを完了します。

![1772681812071-644.png](/static/img/fb53d4_1772681812071-644.png)

![1772681838609-495.png](/static/img/9305ba_1772681838609-495.png)

![1772681883903-770.png](/static/img/6fda55_1772681883903-770.png)

![1772682064280-243.png](/static/img/153871_1772682064280-243.png)

![1772682108587-419.png](/static/img/8df4ac_1772682108587-419.png)

Apache Tomcat のインストール パス:**%TOMCAT\_PATH%** = **C:\Program Files\Apache Software Foundation\Tomcat 10.1**

### **4.2. Apache Tomcat 構成**

**4.2.1.ログ設定を構成します**

**ステップ 1:** ファイル **%TOMCAT\_PATH%\conf\logging.properties** を開きます

**ステップ 2:** 属性 **maxDays** を追加して、catalina、localhost、host-manager、manager ログについて、ローテーションされたアクセス ログが削除されるまで保持される最大日数を指定します。指定しない場合は、デフォルト値の -1 が使用されます。これは、古いファイルを削除しないことを意味します。

* 例: 90 日分の履歴を保存します。次の行の末尾の数字を変更します。
  + 1catalina.org.apache.juli.AsyncFileHandler.maxDays = **90**
  + 2localhost.org.apache.juli.AsyncFileHandler.maxDays =**90**
  + 3manager.org.apache.juli.AsyncFileHandler.maxDays =**90**
  + 4host-manager.org.apache.juli.AsyncFileHandler.maxDays =**90**

![1772682773352-897.png](/static/img/f18ce4_1772682773352-897.png)

**ステップ 3:** 変更を保存してファイルを閉じます。

**ステップ 4:** ファイル **%TOMCAT\_PATH%\conf\server.xml** を開きます

**ステップ 5:** ログ設定の行のコメントを解除してログをオンにし、以下のように属性 **maxDays** を追加します。

![1772682631349-450.png](/static/img/2081bb_1772682631349-450.png)

***注: .xml ファイルはメモ帳で開いた場合のみ編集できます***

*次の手順は、メモ帳で開く方法を示しています:*

* ***管理者として実行*** をクリックします。

* ***ファイル\開く***に移動します

* *リスト内でファイルを見つけます。**「すべてのファイル」** オプションを選択することを忘れないでください*

![1772682691513-901.png](/static/img/8f7803_1772682691513-901.png)

![1772682799754-604.png](/static/img/37e190_1772682799754-604.png)

![1772682840226-911.png](/static/img/b23ad0_1772682840226-911.png)

**ステップ 6:** 変更を保存してファイルを閉じます

**4.2.2.その他の設定**

**ステップ 1:** パス **%TOMCAT\_PATH%\bin** に移動し、ファイル **Tomcat10w.exe** をダブルクリックして、Apache Tomcat サービス構成を開きます。

![1772682897309-350.png](/static/img/bc9234_1772682897309-350.png)

**ステップ 2**: **全般** タブ

* スタートアップの種類を選択します: **自動**
* [**適用**] を選択して、構成の変更を適用します。

![1772683028183-225.png](/static/img/d95fe8_1772683028183-225.png)

**ステップ 3:** [**ログ**] タブ

(1) ログの接頭辞: **「commons-daemon」を削除**

(2) 標準出力をリダイレクト: **「auto」を削除**

(3) 標準エラーをリダイレクト: **「auto」を削除**

(4) [**適用**] を選択して、構成の変更を適用します。

![1772683067655-799.png](/static/img/996e64_1772683067655-799.png)

**ステップ 4**: [**Java**] タブで

ａ． Java ヒープ構成を調整します。

* 初期メモリ プール: **サーバーの RAM の 1/4 以下の値を入力します。**

例: サーバー RAM = 32 GB -> 初期メモリ プールは \<= 1/4 \* 16 \* 1024 MB である必要があります

* 最大メモリ プール: **サーバーの RAM の値 \<= を入力します。**

例: サーバー RAM = 32 GB -> 最大メモリ プールは \<= \* 16 \* 1024 MB である必要があります

**注意**: 大きすぎる値を入力すると、Apache Tomcat サービスが起動できなくなり、エラーが発生する可能性があります。

b. [**適用**] を選択して、構成の変更を適用します。

![1772683124013-819.png](/static/img/18c571_1772683124013-819.png)

**ステップ 5:** Tomcat サービスを開始する

[**全般**] タブで [**開始**] を選択し、Apache Tomcat サービスを開始します。

![1772683144986-469.png](/static/img/b26855_1772683144986-469.png)

### **4.3. Apache Tomcat のインストールを確認してください**

**ステップ 1:** インストールと構成が完了したら、[サービス] 画面に移動して、Apache Tomcat サービスのステータスを確認します。

* ステータスが「実行中」でない場合は、Apache Tomcat サービスを開始します。
* ステータスが「実行中」の場合は、手順 2 に進みます。

![1772683257050-138.png](/static/img/ca3bc4_1772683257050-138.png)

**ステップ 2:** Chrome で URL[http://localhost:8080](http://localhost:8080/)にアクセスし、Apache Tomcat が正常にインストールされたことを確認します。

![1772683276276-714.png](/static/img/77415f_1772683276276-714.png)

## **5. ActiveMQ のインストール**

### **5.1. ActiveMQ をインストールします**

**ステップ 1:** ファイル「apache-activemq-5.15.1-bin.zip」を目的のインストール パスに抽出します。

例: **ACTIVEMQ\_PATH = C:\akaBot\apache-activemq-5.15.1**

注: インストール パスにはスペースを含めないでください。

![1772683661436-911.png](/static/img/7c5154_1772683661436-911.png)

**ステップ 2:** 管理者権限でコマンド プロンプトを開きます。

![1772683666280-827.png](/static/img/40b6b7_1772683666280-827.png)

**ステップ 3:** ファイル %ACTIVEMQ\_PATH%\bin\win64\InstallService.bat を実行して、ActiveMQ サービスをインストールします。

コマンドを実行します:**C:\Windows\System32>C:\akaBot\apache-activemq-5.15.1\bin\win64\InstallService.bat**

![1772683675431-199.png](/static/img/03b2c7_1772683675431-199.png)

**ステップ 4**: ActiveMQ サービスを開始します。

![1772683706286-756.png](/static/img/60819c_1772683706286-756.png)

### **5.2. Java ヒープ構成**

**ステップ 1:** サービス ActiveMQ を停止します

![1772683757268-489.png](/static/img/5539ff_1772683757268-489.png)

**ステップ 2**: ファイル **%ACTIVEMQ\_PATH%\bin\win64\wrapper.conf** を開き、パラメーターを構成します。

* ***wrapper.java.initmemory:*** Java ヒープ メモリの初期値を入力します。

たとえば、サーバーに 32 GB の RAM が搭載されている場合は、1024 と入力できます。

* ***wrapper.java.maxmemory:*** Java ヒープ メモリの最大値を入力します。

たとえば、32 GB の RAM を搭載したサーバーの場合は、4096 と入力できます。

![1772683859984-889.png](/static/img/f02ab0_1772683859984-889.png)

**ステップ 3:** ActiveMQ サービスを開始する

![1772683706286-756.png](/static/img/60819c_1772683706286-756.png)

### **5.3.ActiveMQ のインストールを確認する**

**ステップ 1**: ActiveMQ サービスの実行ステータスを確認します。サービスが実行されていない場合は、サービスを開始します。

![1772683916963-131.png](/static/img/0e6735_1772683916963-131.png)

**ステップ 2**: URL[http://localhost:8161](http://localhost:8161/)にアクセスして、ActiveMQ が正常にインストールされたことを確認します。

![1772683932770-904.png](/static/img/215213_1772683932770-904.png)

## **6. akaBot センターのインストール**

**akaBot-center- 4.x.x.x.war をダウンロードします。**

### **6.1. war ファイルをコピーして抽出します**

**ステップ 1: 停止** Apache Tomcat サービス

![1772684035957-533.png](/static/img/a29a1a_1772684035957-533.png)

**ステップ 2: **%TOMCAT\_PATH%/webapps.** 内のすべてのフォルダーを削除**します。

![1772684090590-522.png](/static/img/7ca112_1772684090590-522.png)

**ステップ 3: ファイル akaBot-center-x.x.x.x.war を **%TOMCAT\_PATH%/webapps/** ディレクトリにコピー**し、**名前を **ROOT.war.** に変更**します。

![1772684241741-811.png](/static/img/7d371d_1772684241741-811.png)

**ステップ 4: Apache Tomcat サービスを再起動**し、**ROOT.war** が ROOT ディレクトリに抽出されるまで待ちます。

![1772684338178-158.png](/static/img/875d26_1772684338178-158.png)

**ステップ 5**: Apache Tomcat サービスを停止します。

### **6.2. akaBot Center の構成**

**6.2.1.構成quartz.properties**

**ステップ 1:** Apache Tomcat サービスを停止します (Apache Tomcat サービスが現在実行中の場合)。

**ステップ 2:** ファイル **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/quartz.properties** 内の構成を次のように変更します。

***1. MySSQL のジョブストア構成をコメントアウトします。***

![1772684502932-217.png](/static/img/1d2135_1772684502932-217.png)

***2. MySQL のジョブストア構成の行の先頭にある「#」文字を削除して、コメントを解除します。***

![1772684455566-665.png](/static/img/0060f1_1772684455566-665.png)

**6.2.2.MySQL データベース接続の構成**

**ステップ 1**: パス **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/config/** に移動します。

**ステップ 2**: **両方のファイルの構成を変更します:** ***application-dev.yml*** および ***application-prod.yml***

**行頭の # 文字を削除**して、構成のコメントを解除し、**MySQL** の使用を有効にします。行の先頭に「#」文字を追加して構成をコメントアウトし、MSSQL を無効にします。

* ***アプリケーション開発.yml***

![1772684685833-327.png](/static/img/4a4c27_1772684685833-327.png)

![1772684723990-896.png](/static/img/2ffac1_1772684723990-896.png)

* ***アプリケーション-prod.yml***

![1772684898397-553.png](/static/img/bba11a_1772684898397-553.png)

![1772684921533-479.png](/static/img/85e189_1772684921533-479.png)

構成後、**ファイルを保存します。

**6.2.3.ログ設定**

1. ファイル **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/logback-spring.xml** を開きます

2. **ログ レベル**を ERROR に変更します

3. ローリング ログ ファイルの設定を次のように変更します。

* **maxFileSize:** 各ファイルのサイズを制限します。例: 200MB。
* **maxHistory**: オプションの maxHistory プロパティは、保持するアーカイブ ファイルの最大数を制御します。例: 20
* **totalSizeCap:** オプションの totalSizeCap プロパティは、すべてのアーカイブ ファイルの合計サイズを制御します。例：20GB

![1772685022797-670.png](/static/img/55d724_1772685022797-670.png)

4. 変更を保存してファイルを閉じる

5. **Apache Tomcat** サービスを開始し、**[http://localhost:8080/](http://localhost:8080/)** にアクセスして、akaBot Center のインストールを確認します。

![1772685097464-483.png](/static/img/0ea552_1772685097464-483.png)

6. 次の認証情報を使用してログインします。

* ユーザー名: **管理者**
* パスワード: **管理者**
* 以下に示すように、ダッシュボードにリダイレクトされます。

![1772692638876-773.png](/static/img/ad042c_1772692638876-773.png)

## **7.トラブルシューティング**

### **7.1.アクティブMQ**

**7.1.1. Java コマンドを実行できません**

* ファイル %ACTIVEMQ\_PATH%\bin\win64\wrapper.conf を開き、パラメーターを構成します。

［wrapper.java.command=%JAVA\_HOME%/bin/java.exe］

![1772693674300-402.png](/static/img/75eecc_1772693674300-402.png)

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