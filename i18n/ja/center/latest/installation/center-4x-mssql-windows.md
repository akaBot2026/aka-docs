---
id: center-4x-mssql-windows
title: "Microsoft Windows に Akabot Center 4x と MSSQL をインストールする"
sidebar_label: "Microsoft Windows 上の Center 4x と MSSQL"
sidebar_position: 5
description: "Microsoft Windows のドキュメントにある Akabot Center 4x と MSSQL のインストール。"
displayed_sidebar: centerSidebar
---
# Akabot Center 4X と MSSQL を Microsoft Windows にインストールする

> このガイドでは、データベース エンジンとして **MSSQL** を使用して **akaBot Center バージョン: 4.x** の単一インスタンスをインストールする手順を説明します。このガイドラインの対象オペレーティング システム (OS) は **Microsoft Windows** です。

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
| 3 | Apacheトムキャット | apache-tomcat-\*.exe | 10.1.54 | Webサーバー Apache Tomcat | **[Download](https://tomcat.apache.org/download-10.cgi)** |
| 4 | アクティブMQ | apache-activemq-5.15.1-bin.zip | 5.15.1 | akaBot Center のキュー機能用 ActiveMQ | **[Download](https://archive.apache.org/dist/activemq/5.15.1/apache-activemq-5.15.1-bin.zip)** |
| 5 | MS SQLサーバー | SQL2025-SSEI-評価 | 2025年 | akaBot Center のデータベース エンジン | 詳細については、**セクション 3.1** をお読みください。 |

## **2. Java JDK 17 のインストール**

ダウンロードしたインストーラ -**openlogic-openjdk-17.0.16** を実行します。その後、**「次へ」** をクリックして続行します。

![1773026436457-662.png](/static/img/8350c5_1773026436457-662.png)

![1773026455322-826.png](/static/img/6cc868_1773026455322-826.png)

![1773026480063-797.png](/static/img/54da96_1773026480063-797.png)

![1773026504396-498.png](/static/img/f18e37_1773026504396-498.png)

* インストールが完了すると、以下の完了通知が表示されます。 [**完了**] をクリックするだけです。 JDK が正常にインストールされました。

![1773026554098-998.png](/static/img/a9f0ae_1773026554098-998.png)

**注意**: コマンド **echo %JAVA\_HOME%** を入力して、**JAVA\_HOME** が環境変数に存在することを確認してください。出力は jdk 17 を指すパスになるはずです。例:**C:\Program Files\OpenLogic\jdk-17.0.16.8-hotspot**

## **3. MSSQL のインストール**

### **3.1. MSSQL をインストールします**

ダウンロードリンク:**[MSSQL 2025](https://www.microsoft.com/en-us/evalcenter/sql-server-2025-download)**

### **3.2.MSSQL のセットアップ**

**ステップ 1:** インストール

* コンピュータからセットアップ ファイルを開きます
* **「メディアをダウンロード」** オプションを選択します

![1773030397244-318.png](/static/img/a90e6a_1773030397244-318.png)

* 「ダウンロード」をクリックします

**ステップ 2**: ファイルを開く

* ダウンロードしたファイルを右クリックして、Windows エクスプローラーで開きます。

![1773027965562-591.png](/static/img/67e2b0_1773027965562-591.png)

* その後、SQLServer2025 (D:) という名前の新しい DVD ドライブが表示されます。クリックして開きます。

![1773028279732-733.png](/static/img/a59de4_1773028279732-733.png)

**ステップ 3:** セットアップ

* コンピューターからセットアップ ファイルを開きます

![1773028586816-796.png](/static/img/4024c0_1773028586816-796.png)

* **インストール** -1 をクリックし、**新しい SQL Server スタンドアロン インストールまたは既存のインストールへの機能の追加** -2 をクリックします。

![1773028679031-652.png](/static/img/8f5346_1773028679031-652.png)

* 以下の手順に従ってください。

![1773028809345-281.png](/static/img/b63a54_1773028809345-281.png)

![1773028844443-518.png](/static/img/0da25b_1773028844443-518.png)

![1773028912542-880.png](/static/img/86af31_1773028912542-880.png)

![1773028965488-866.png](/static/img/f4e9d0_1773028965488-866.png)

* [**次へ**] をクリックする前に、[**Azure Extension for SQL Serve**r] のチェックを外します。

![1773029024745-193.png](/static/img/39e006_1773029024745-193.png)

* **「データベース エンジン サービス」** ボックスにチェックを入れ、**「次へ」ボタンをクリックします**

![1773029187897-154.png](/static/img/620a6b_1773029187897-154.png)

* 操作が完了するまで待ってから、**「戻る」** ボタンをクリックしてください

![1773029430504-871.png](/static/img/636658_1773029430504-871.png)

* 引き続き **「次へ」** をクリックします。

![1773029474473-473.png](/static/img/ededcc_1773029474473-473.png)

* **混合モード** - 1、パスワードを入力 (例: sis@12345) - 2、**現在のユーザーの追加** - 3 にチェックを入れ、**次へ** をクリックします - 4

![1773029919733-269.png](/static/img/573366_1773029919733-269.png)

![1773029970175-451.png](/static/img/1598cc_1773029970175-451.png)

* こちらが成功した画面です。 **「閉じる」** をクリックします

![1773030041663-622.png](/static/img/83805a_1773030041663-622.png)

### **3.3.リモート接続を有効にする**

**ステップ 1**: **SQL Server Management Studio** を開き、サーバーに接続します。

![1773030202982-413.png](/static/img/86174f_1773030202982-413.png)

(1) 「ホーム」を開いてこのフィールドをコピーし、サーバー名として貼り付けます

![1773030281640-990.png](/static/img/2bfb8a_1773030281640-990.png)

(2) **3.2 > ステップ 3** で作成したパスワードを入力します

(3) **「サーバー証明書を信頼する」**にチェックを入れます

(4) **「接続」**をクリックします

**ステップ 2**: SQLServer の **プロパティ** を開きます。

![1773030536288-582.png](/static/img/4df08e_1773030536288-582.png)

* **セキュリティ**を選択し、**SQL Server および Windows 認証モード** にチェックを入れます。

![1773044861324-448.png](/static/img/f0e482_1773044861324-448.png)

**ステップ 3:** **SQL Server 構成マネージャー** を開きます。

* **MSSQLSERVER のプロトコル** を選択 -> 有効にした **名前付きパイプと TCP/IP**

![1773030823282-463.png](/static/img/b3cc79_1773030823282-463.png)

**ステップ 4**: **「再起動」** MSSQL サーバー サービスをクリックします。

![1773030965635-479.png](/static/img/abd354_1773030965635-479.png)

**3.4.空の新しいデータベースを作成**

**ステップ 1**:**SQL Server Management Studio** を開きます

**ステップ 2:** **データベースを右クリック** -1 し、**新しいデータベース** をクリックします-2

![1773031162079-136.png](/static/img/dea9cd_1773031162079-136.png)

**ステップ 3:** データベース名 -1 を入力し、**OK** をクリックします -2

* 例: データベース名別名\_orchestrator

![1773031208182-635.png](/static/img/b1c224_1773031208182-635.png)

![1773031234396-166.png](/static/img/94c0d6_1773031234396-166.png)

## **4. Apache Tomcat のインストール**

### **4.1. Apache Tomcat をインストールします**

Apache Tomcat のインストール:
-「Apache Tomcatを実行する」のチェックを外します。
-「Readmeを表示」のチェックを外します
-「完了」ボタンをクリックしてインストールを完了します。ここに情報メッセージを入力してください。

![1773039471617-579.png](/static/img/28a716_1773039471617-579.png)

![1773039448180-898.png](/static/img/bd8a9b_1773039448180-898.png)

![1773039436317-278.png](/static/img/9a9700_1773039436317-278.png)

Apache Tomcat のインストール パス: **%TOMCAT\_PATH%** = **C:\Program Files\Apache Software Foundation\Tomcat 10.1**

### **4.2. Apache Tomcat 構成**

**4.2.1.ログ設定を構成します**

**ステップ 1:**ファイルを開きます**%TOMCAT\_PATH%\conf\logging.properties**

**ステップ 2:** 属性 **maxDay**s を追加して、catalina、localhost、host-manager、manager ログについて、ローテーションされたアクセス ログが削除されるまで保持される最大日数を指定します。指定しない場合は、デフォルト値の -1 が使用されます。これは、古いファイルを削除しないことを意味します。

* 例: 90 日分の履歴を保存します。次の行の末尾の数字を変更します。
  + 1catalina.org.apache.juli.AsyncFileHandler.maxDays = **90**
  + 2localhost.org.apache.juli.AsyncFileHandler.maxDays =**90**
  + 3manager.org.apache.juli.AsyncFileHandler.maxDays =**90**
  + 4host-manager.org.apache.juli.AsyncFileHandler.maxDays =**90**

**ステップ 3:** 変更を保存してファイルを閉じます。

![1773039597849-397.png](/static/img/b6cfba_1773039597849-397.png)

**ステップ 4:** ファイル *%TOMCAT\_PATH%\conf\server.xml** を開きます

**ステップ 5:** ログ設定の行のコメントを解除してログをオンにし、以下のように属性 **maxDays** を追加します。

![1773039659797-700.png](/static/img/0de343_1773039659797-700.png)

**ステップ 6:** 変更を保存してファイルを閉じます

**4.2.2.その他の設定**

**ステップ 1:** パス **%TOMCAT\_PATH%\bin** に移動し、ファイル **Tomcat10w.exe** をダブルクリックして、Apache Tomcat サービス構成を開きます。

![1773039700842-636.png](/static/img/25160e_1773039700842-636.png)

**ステップ 2**: **全般** タブ

* スタートアップの種類を選択します: **自動**
* [**適用**] を選択して、構成の変更を適用します。

![1773039738250-351.png](/static/img/d37ef5_1773039738250-351.png)

**ステップ 3:** [**ログ**] タブ

(1) ログの接頭辞: **「commons-daemon」を削除**

(2) 標準出力をリダイレクト: **「auto」を削除**

(3) 標準エラーをリダイレクト: **「auto」を削除**

(4) [**適用**] を選択して、構成の変更を適用します。

![1773039839582-669.png](/static/img/af673e_1773039839582-669.png)

**ステップ 4**: [**Java**] タブで

ａ． Java ヒープ構成を調整します。

* 初期メモリ プール: **サーバーの RAM の 1/4 以下の値を入力します。**

例: サーバー RAM = 32 GB -> 初期メモリ プールは \<= 1/4 \* 16 \* 1024 MB である必要があります

* 最大メモリ プール: **サーバーの RAM の値 \<= を入力します。**

例: サーバー RAM = 32 GB -> 最大メモリ プールは \<= \* 16 \* 1024 MB である必要があります

**注意**: 大きすぎる値を入力すると、Apache Tomcat サービスが起動できなくなり、エラーが発生する可能性があります。

b. [**適用**] を選択して、構成の変更を適用します。

![1773039888230-493.png](/static/img/65d78f_1773039888230-493.png)

**ステップ 5:** Tomcat サービスを開始する

[**全般**] タブで [**開始**] を選択し、Apache Tomcat サービスを開始します。

![1773044980268-508.png](/static/img/e6aa88_1773044980268-508.png)

### **4.3. Apache Tomcat のインストールを確認してください**

**ステップ 1:** インストールと構成が完了したら、[サービス] 画面に移動して、Apache Tomcat サービスのステータスを確認します。

* ステータスが「実行中」でない場合は、Apache Tomcat サービスを開始します。
* ステータスが「実行中」の場合は、手順 2 に進みます。

![1773045039977-189.png](/static/img/e819f0_1773045039977-189.png)

**ステップ 2:** Chrome で URL[http://localhost:8080](http://localhost:8080/)にアクセスし、Apache Tomcat が正常にインストールされたことを確認します。

![1773040793096-753.png](/static/img/0a10a3_1773040793096-753.png)

## **5. ActiveMQ のインストール**

### **5.1. ActiveMQ をインストールします**

**ステップ 1:** ファイル「apache-activemq-5.15.1-bin.zip」を目的のインストール パスに抽出します。

例: **ACTIVEMQ\_PATH = C:\akaBot\apache-activemq-5.15.1**

注: インストール パスにはスペースを含めないでください。

![1773042407269-516.png](/static/img/8ef4e2_1773042407269-516.png)

**ステップ 2:** 管理者権限でコマンド プロンプトを開きます。

![1773042420627-885.png](/static/img/f4b4f7_1773042420627-885.png)

**ステップ 3:** ファイル %ACTIVEMQ\_PATH%\bin\win64\InstallService.bat を実行して、ActiveMQ サービスをインストールします。

コマンドを実行します:**C:\Windows\System32>C:\akaBot\apache-activemq-5.15.1\bin\win64\InstallService.bat**

![1773042444158-931.png](/static/img/28f86f_1773042444158-931.png)

**ステップ 4**: ActiveMQ サービスを開始します。

![1773042459471-219.png](/static/img/52623a_1773042459471-219.png)

### **5.2. Java ヒープ構成**

**ステップ 1:** サービス ActiveMQ を停止します

**ステップ 2**: ファイル **%ACTIVEMQ\_PATH%\bin\win64\wrapper.conf** を開き、パラメーターを構成します。

* ***wrapper.java.initmemory:*** Java ヒープ メモリの初期値を入力します。

たとえば、サーバーに 32 GB の RAM が搭載されている場合は、1024 と入力できます。

* ***wrapper.java.maxmemory:*** Java ヒープ メモリの最大値を入力します。

たとえば、32 GB の RAM を搭載したサーバーの場合は、4096 と入力できます。

![1773040188173-944.png](/static/img/dd0c2e_1773040188173-944.png)

**ステップ 3:** ActiveMQ サービスを開始する

![1773045637327-680.png](/static/img/1adf28_1773045637327-680.png)

### **5.3.ActiveMQ のインストールを確認する**

**ステップ 1**: ActiveMQ サービスの実行ステータスを確認します。サービスが実行されていない場合は、サービスを開始します。

![1773040234841-235.png](/static/img/b4e08e_1773040234841-235.png)

**ステップ 2**: URL[http://localhost:8161](http://localhost:8161/)にアクセスして、ActiveMQ が正常にインストールされたことを確認します。

![1773040248186-927.png](/static/img/1ea791_1773040248186-927.png)

## **6. akaBot センターのインストール**

**akaBot-center- 4.x.x.x.war をダウンロードします。**

### **6.1. war ファイルをコピーして抽出します**

**ステップ 1: 停止** Apache Tomcat サービス

![1773045591703-739.png](/static/img/86c996_1773045591703-739.png)

**ステップ 2: **%TOMCAT\_PATH%/webapps.** 内のすべてのフォルダーを削除**します。

![1773041052691-659.png](/static/img/14b8f4_1773041052691-659.png)

**ステップ 3: ファイル akaBot-center-x.x.x.x.war を **%TOMCAT\_PATH%/webapps/** ディレクトリにコピー**

![1773041088743-833.png](/static/img/7a8d43_1773041088743-833.png)

* **名前を**ROOT.war.**に変更します。

![1773041108270-318.png](/static/img/a4c57d_1773041108270-318.png)

**ステップ 4: Apache Tomcat サービスを再起動**し、**ROOT.war** が ROOT ディレクトリに抽出されるまで待ちます。

![1773041152285-315.png](/static/img/dfef46_1773041152285-315.png)

**ステップ 5**: Apache Tomcat サービスを停止します。

### **6.2. akaBot Center の構成**

**6.2.1.構成quartz.properties**

**ステップ 1:** Apache Tomcat サービスを停止します (Apache Tomcat サービスが現在実行中の場合)。

**ステップ 2:** ファイル **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/quartz.properties** 内の構成を次のように変更します。

***1. MySQL のジョブストア構成をコメントアウトします。***

![1773041678381-902.png](/static/img/81ec7b_1773041678381-902.png)

***2. MSSQL のジョブストア構成の行の先頭にある「#」文字を削除して、コメントを解除します。***

![1773041651589-503.png](/static/img/ac0096_1773041651589-503.png)

**6.2.2. MSSQL データベース接続の構成**

**ステップ 1**: パス **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/config/** に移動します。

**ステップ 2**: **両方のファイルの構成を変更します:** ***application-dev.yml*** および ***application-prod.yml***

**行頭の # 文字を削除**して、構成のコメントを解除し、**MSSQL** の使用を有効にします。行の先頭に「#」文字を追加して構成をコメントアウトし、MySQL を無効にします。

**3.2>ステップ 3.** で作成したユーザー名とパスワードを**入力**します。

* ***アプリケーション開発.yml***

![1773044463423-987.png](/static/img/2bd720_1773044463423-987.png)

![1773044494207-261.png](/static/img/063708_1773044494207-261.png)

![1773044521408-329.png](/static/img/eb1547_1773044521408-329.png)

* ***アプリケーション-prod.yml***

![1773044581478-175.png](/static/img/d34ff4_1773044581478-175.png)

![1773044623077-350.png](/static/img/d2f4e6_1773044623077-350.png)

構成後、**ファイルを保存します。

**6.2.3.ログ設定**

1. ファイル **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/logback-spring.xml** を開きます

2. **ログ レベル**を ERROR に変更します

3. ローリング ログ ファイルの設定を次のように変更します。

* **maxFileSize:** 各ファイルのサイズを制限します。例: 200MB。
* **maxHistory**: オプションの maxHistory プロパティは、保持するアーカイブ ファイルの最大数を制御します。例: 20
* **totalSizeCap:** オプションの totalSizeCap プロパティは、すべてのアーカイブ ファイルの合計サイズを制御します。例：20GB

![1773043114230-690.png](/static/img/9fcee7_1773043114230-690.png)

4. 変更を保存してファイルを閉じる

5. **Apache Tomcat** サービスを開始し、**[http://localhost:8080/](http://localhost:8080/)** にアクセスして、akaBot Center のインストールを確認します。

![1773045819506-903.png](/static/img/7378f7_1773045819506-903.png)

![1773044661288-968.png](/static/img/eac1dc_1773044661288-968.png)

6. 次の認証情報を使用してログインします。

* ユーザー名:**管理者**
* パスワード: **管理者**
* 以下に示すように、ダッシュボードにリダイレクトされます。

![1773044690105-331.png](/static/img/739053_1773044690105-331.png)

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