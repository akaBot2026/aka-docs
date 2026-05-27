---
id: center-4x-postgresql-windows
title: "Microsoft Windows に Akabot Center 4x と PostgreSQL をインストールする"
sidebar_label: "Microsoft Windows 上の Center 4x と PostgreSQL"
sidebar_position: 7
description: "Microsoft Windows のドキュメントにある Akabot Center 4x と PostgreSQL のインストール。"
displayed_sidebar: centerSidebar
---
# Microsoft Windows に Akabot Center 4X と PostgreSQL をインストールする

> このガイドでは、データベース エンジンとして **MSSQL** を使用して **akaBot Center バージョン 4.x** の単一インスタンスをインストールする手順を説明します。このガイドラインの対象オペレーティング システム (OS) は **Microsoft Windows** です。

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
| 5 | PostgreSQL | postgresql-18.3-2-windows-x64 | 18.3 | akaBot Center のデータベース エンジン | 詳細については、**セクション 3.1** をお読みください。 |

## **2. Java JDK 17 のインストール**

ダウンロードしたインストーラ -**openlogic-openjdk-17.0.16** を実行します。その後、**「次へ」** をクリックして続行します。

![1773026436457-662.png](/static/img/3ca271_1773026436457-662.png)

![1773026455322-826.png](/static/img/9663dd_1773026455322-826.png)

![1773026480063-797.png](/static/img/b3970d_1773026480063-797.png)

![1773026504396-498.png](/static/img/2a61e6_1773026504396-498.png)

* インストールが完了すると、以下の完了通知が表示されます。 [**完了**] をクリックするだけです。 JDK が正常にインストールされました。

![1773026554098-998.png](/static/img/40c7a4_1773026554098-998.png)

**注意**: コマンド **echo %JAVA\_HOME%** を入力して、**JAVA\_HOME** が環境変数に存在することを確認してください。出力は jdk 17 を指すパスになるはずです。例: **C:\Program Files\OpenLogic\jdk-17.0.16.8-hotspot**

## **3. PostgreSQL のインストール**

### **3.1. PostgreSQL をインストールします**

ダウンロードリンク:[https://www.enterprisedb.com/downloads/postgres-postgresql-downloads](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

**ステップ 1:** ファイルを開く

* コンピュータからセットアップ ファイルを開く
* 以下の手順に従ってください。

![1773111578739-129.png](/static/img/df9569_1773111578739-129.png)

![1773114333220-825.png](/static/img/364270_1773114333220-825.png)

![1773114368791-509.png](/static/img/1a0991_1773114368791-509.png)

![1773114465751-567.png](/static/img/359d26_1773114465751-567.png)

**ステップ 2:** パスワードを設定する

* 注: このパスワードは次の手順で使用するので、覚えておいてください。

![1773114546424-196.png](/static/img/d99807_1773114546424-196.png)

**ステップ 3:** インストール

* デフォルトのポートコードを使用する

![1773114627305-610.png](/static/img/c0b53b_1773114627305-610.png)

![1773114687711-726.png](/static/img/8772a1_1773114687711-726.png)

* **「次へ」** ボタンをクリックしてインストールします

![1773114744583-571.png](/static/img/44c563_1773114744583-571.png)

* こちらが成功した画面です。 **「完了」** をクリックしてウィンドウを閉じます。

![1773114856970-621.png](/static/img/5db87e_1773114856970-621.png)

**3.2.スタックビルダーのセットアップ**

* **「次へ」** をクリックします

![1773131442848-150.png](/static/img/39dc2b_1773131442848-150.png)

![1773131458317-548.png](/static/img/1984cb_1773131458317-548.png)

![1773115130094-189.png](/static/img/a431c2_1773115130094-189.png)

* これは、すべてのインストール ファイルが正常にダウンロードされたことを通知する画面です。 **「次へ」** をクリックし、**「完了」** をクリックします。

![1773130004131-273.png](/static/img/d1a8f1_1773130004131-273.png)

* PostgreSQL がサービスを通じて実行されているかどうかを再確認できます。

![1773130089004-725.png](/static/img/924bea_1773130089004-725.png)

**3.3.データベースの作成**

**ステップ 1:** **pgAdmin4** を開きます

**ステップ 2:** **「データベース」** を右クリックし、[作成] > [データベース...]

![1773128994191-351.png](/static/img/cba5e5_1773128994191-351.png)

* **「全般**」タブに新しいデータベース:**aka\_orchestrator** を入力し、**「保存」** をクリックします。

![1773129095687-215.png](/static/img/ebca57_1773129095687-215.png)

![1773129157904-918.png](/static/img/c58482_1773129157904-918.png)

## **4. Apache Tomcat のインストール**

### **4.1. Apache Tomcat をインストールします**

Apache Tomcat のインストール:
-「Apache Tomcatを実行する」のチェックを外します。
-「Readmeを表示」のチェックを外します
-「完了」ボタンをクリックしてインストールを完了します。ここに情報メッセージを入力してください。

![1773039471617-579.png](/static/img/a53804_1773039471617-579.png)

![1773039448180-898.png](/static/img/b428d6_1773039448180-898.png)

![1773039436317-278.png](/static/img/fae530_1773039436317-278.png)

Apache Tomcat のインストール パス: **%TOMCAT\_PATH%** = **C:\Program Files\Apache Software Foundation\Tomcat 10.1**

### **4.2. Apache Tomcat 構成**

**4.2.1.ログ設定を構成する**

**ステップ 1: **ファイル **%TOMCAT\_PATH%\conf\logging.properties** を開きます

**ステップ 2:** 属性 **maxDays** を追加して、catalina、localhost、host-manager、manager ログについて、ローテーションされたアクセス ログが削除されるまで保持される最大日数を指定します。指定しない場合は、デフォルト値の -1 が使用されます。これは、古いファイルを削除しないことを意味します。

* 例: 90 日分の履歴を保存します。次の行の末尾の数字を変更します。
  + 1catalina.org.apache.juli.AsyncFileHandler.maxDays = **90**
  + 2localhost.org.apache.juli.AsyncFileHandler.maxDays =**90**
  + 3manager.org.apache.juli.AsyncFileHandler.maxDays =**90**
  + 4host-manager.org.apache.juli.AsyncFileHandler.maxDays =**90**

**ステップ 3:** 変更を保存してファイルを閉じます。

![1773039597849-397.png](/static/img/b3e77f_1773039597849-397.png)

**ステップ 4:** ファイル **%TOMCAT\_PATH%\conf\server.xml** を開きます

**ステップ 5:** ログ設定の行のコメントを解除してログをオンにし、以下のように属性 **maxDays** を追加します。

![1773039659797-700.png](/static/img/140d78_1773039659797-700.png)

**ステップ 6:** 変更を保存してファイルを閉じます

**4.2.2.その他の設定**

**ステップ 1:** パス **%TOMCAT\_PATH%\bin** に移動し、ファイル **Tomcat10w.exe** をダブルクリックして、Apache Tomcat サービス構成を開きます。

![1773039700842-636.png](/static/img/504895_1773039700842-636.png)

**ステップ 2**: **全般** タブ

* スタートアップの種類を選択します: **自動**
* [**適用**] を選択して、構成の変更を適用します。

![1773039738250-351.png](/static/img/ae3bbb_1773039738250-351.png)

**ステップ 3:** [**ログ**] タブ

(1) ログの接頭辞: **「commons-daemon」を削除**

(2) 標準出力をリダイレクト: **「auto」を削除**

(3) 標準エラーをリダイレクト: **「auto」を削除**

(4) [**適用**] を選択して、構成の変更を適用します。

![1773039839582-669.png](/static/img/d5f78c_1773039839582-669.png)

**ステップ 4:** [**Java**] タブ

ａ． Java ヒープ構成を調整します。

* 初期メモリ プール: **サーバーの RAM の 1/4 以下の値を入力します。**

例: サーバー RAM = 32 GB -> 初期メモリ プールは \<= 1/4 \* 16 \* 1024 MB である必要があります

* 最大メモリ プール: **サーバーの RAM の値 \<= を入力します。**

例: サーバー RAM = 32 GB -> 最大メモリ プールは \<= \* 16 \* 1024 MB である必要があります

**注意**: 大きすぎる値を入力すると、Apache Tomcat サービスが起動できなくなり、エラーが発生する可能性があります。

b. [**適用**] を選択して、構成の変更を適用します。

![1773039888230-493.png](/static/img/9e0c8a_1773039888230-493.png)

**ステップ 5:** Tomcat サービスを開始する

[**全般**] タブで [**開始**] を選択し、Apache Tomcat サービスを開始します。

![1773044980268-508.png](/static/img/ff6bab_1773044980268-508.png)

### **4.3. Apache Tomcat のインストールを確認してください**

**ステップ 1:** インストールと構成が完了したら、[サービス] 画面に移動して、Apache Tomcat サービスのステータスを確認します。

* ステータスが「実行中」でない場合は、Apache Tomcat サービスを開始します。
* ステータスが「実行中」の場合は、手順 2 に進みます。

![1773045039977-189.png](/static/img/72426f_1773045039977-189.png)

**ステップ 2:** Chrome で URL[http://localhost:8080](http://localhost:8080/)にアクセスし、Apache Tomcat が正常にインストールされたことを確認します。

![1773040793096-753.png](/static/img/0b321f_1773040793096-753.png)

## **5. ActiveMQ のインストール**

### **5.1. ActiveMQ をインストールします**

**ステップ 1:** ファイル「apache-activemq-5.15.1-bin.zip」を目的のインストール パスに抽出します。

例: **ACTIVEMQ\_PATH = C:\akaBot\apache-activemq-5.15.1**

注: インストール パスにはスペースを含めないでください。

![1773042407269-516.png](/static/img/398a8d_1773042407269-516.png)

**ステップ 2:** 管理者権限でコマンド プロンプトを開きます。

![1773042420627-885.png](/static/img/9e3df4_1773042420627-885.png)

**ステップ 3:** ファイル %ACTIVEMQ\_PATH%\bin\win64\InstallService.bat を実行して、ActiveMQ サービスをインストールします。

コマンドを実行します:**C:\Windows\System32>C:\akaBot\apache-activemq-5.15.1\bin\win64\InstallService.bat**

![1773042444158-931.png](/static/img/9c9449_1773042444158-931.png)

**ステップ 4**: ActiveMQ サービスを開始します。

![1773042459471-219.png](/static/img/5f7cff_1773042459471-219.png)

### **5.2. Java ヒープ構成**

**ステップ 1:** サービス ActiveMQ を停止します

**ステップ 2**: ファイル **%ACTIVEMQ\_PATH%\bin\win64\wrapper.conf** を開き、パラメーターを構成します。

* ***wrapper.java.initmemory:*** Java ヒープ メモリの初期値を入力します。

たとえば、サーバーに 32 GB の RAM が搭載されている場合は、1024 と入力できます。

* ***wrapper.java.maxmemory:*** Java ヒープ メモリの最大値を入力します。

たとえば、32 GB の RAM を搭載したサーバーの場合は、4096 と入力できます。

![1773040188173-944.png](/static/img/d71f72_1773040188173-944.png)

**ステップ 3:** ActiveMQ サービスを開始する

![1773045637327-680.png](/static/img/4220b9_1773045637327-680.png)

### **5.3.ActiveMQ のインストールを確認する**

**ステップ 1**: ActiveMQ サービスの実行ステータスを確認します。サービスが実行されていない場合は、サービスを開始します。

![1773040234841-235.png](/static/img/cf8369_1773040234841-235.png)

**ステップ 2**: URL[http://localhost:8161](http://localhost:8161/)にアクセスして、ActiveMQ が正常にインストールされたことを確認します。

![1773040248186-927.png](/static/img/dbc1ce_1773040248186-927.png)

## **6. akaBot センターのインストール**

**akaBot-center- 4.x.x.x.war をダウンロードします。**

### **6.1. war ファイルをコピーして抽出します**

**ステップ 1: 停止** Apache Tomcat サービス

![1773045591703-739.png](/static/img/636619_1773045591703-739.png)

**ステップ 2: **%TOMCAT\_PATH%/webapps.** 内のすべてのフォルダーを削除**します。

![1773041052691-659.png](/static/img/26db12_1773041052691-659.png)

**ステップ 3: ファイル akaBot-center-x.x.x.x.war を **%TOMCAT\_PATH%/webapps/** ディレクトリにコピー**

![1773041088743-833.png](/static/img/77d7ad_1773041088743-833.png)

* **名前を**ROOT.war.**に変更します。

![1773041108270-318.png](/static/img/e682b5_1773041108270-318.png)

**ステップ 4: Apache Tomcat サービスを再起動**し、**ROOT.war** が ROOT ディレクトリに抽出されるまで待ちます。

![1773041152285-315.png](/static/img/24ad6e_1773041152285-315.png)

**ステップ 5**: Apache Tomcat サービスを停止します。

### **6.2. akaBot Center の構成**

**6.2.1. Configquartz.properties**

**ステップ 1:** Apache Tomcat サービスを停止します (Apache Tomcat サービスが現在実行中の場合)。

**ステップ 2:** ファイル **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/quartz.properties** 内の構成を次のように変更します。

***1. MySQL、MSSQL、Oracle のジョブストア構成をコメントアウトします。***

***2. PostgreSQL のジョブストア構成の行の先頭にある「#」文字を削除して、コメントを解除します。***

![1773125144942-717.png](/static/img/ab5dc3_1773125144942-717.png)

**6.2.2.PostgreSQL データベース接続の構成**

**ステップ 1**: パス **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/config/** に移動します。

**ステップ 2**: **両方のファイルの構成を変更します:** ***application-dev.yml*** および ***application-prod.yml***

**行頭の # 文字を削除**して、構成のコメントを解除し、**PostgreSQL** の使用を有効にします。行の先頭に「#」文字を追加して構成をコメントアウトし、MySQL、MSSQL などを無効にします。

**3.2>ステップ 3.** で作成したユーザー名とパスワードを**入力**します。

* ***アプリケーション開発.yml***

![1773125613939-709.png](/static/img/b5165a_1773125613939-709.png)

![1773128009161-558.png](/static/img/d45143_1773128009161-558.png)

![1773125955638-262.png](/static/img/057954_1773125955638-262.png)

* ***アプリケーション-prod.yml***

![1773126830845-429.png](/static/img/51b325_1773126830845-429.png)

![1773126055777-449.png](/static/img/14e767_1773126055777-449.png)

* 構成後、**ファイルを保存します。

**6.2.3.ログ設定**

1. ファイル **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/logback-spring.xml** を開きます

2. **ログ レベル**を ERROR に変更します

3. ローリング ログ ファイルの設定を次のように変更します。

* **maxFileSize:** 各ファイルのサイズを制限します。例: 200MB。
* **maxHistory**: オプションの maxHistory プロパティは、保持するアーカイブ ファイルの最大数を制御します。例: 20
* **totalSizeCap:** オプションの totalSizeCap プロパティは、すべてのアーカイブ ファイルの合計サイズを制御します。例：20GB

![1773126136316-429.png](/static/img/c4aa14_1773126136316-429.png)

4. 変更を保存してファイルを閉じる

5. **Apache Tomcat** サービスを開始し、**[http://localhost:8080/](http://localhost:8080/)** にアクセスして、akaBot Center のインストールを確認します。

![1773045819506-903.png](/static/img/8b4b2a_1773045819506-903.png)

![1773044661288-968.png](/static/img/a0dabd_1773044661288-968.png)

6. 次の認証情報を使用してログインします。

* ユーザー名: **管理者**
* パスワード: **管理者**
* 以下に示すように、ダッシュボードにリダイレクトされます。

![1773044690105-331.png](/static/img/3b4910_1773044690105-331.png)

## **7.トラブルシューティング**

### **7.1.アクティブMQ**

**7.1.1. Java コマンドを実行できません**

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