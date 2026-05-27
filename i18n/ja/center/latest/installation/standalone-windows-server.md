---
id: standalone-windows-server
title: "Windows Server スタンドアロンモデルインストールガイド（ネットワーク編）"
sidebar_label: "Windows Server（ネットワーク版）上のスタンドアロンモデル"
sidebar_position: 9
description: "Windows Server (Network Edition) ドキュメントのスタンドアロン モデルのインストール ガイド。"
displayed_sidebar: centerSidebar
---
# Windows Server スタンドアロンモデルインストールガイド（ネットワーク編）

## **1.前提条件**

注: インストールする前にこのセクションをよくお読みください。

### **1.1. 設置モデル**

このガイドでは、以下で説明するインストール モデルに akaBot Center をインストールする手順を説明します。他のインストール モデルについては、他のページを参照するか、[[support@akaBot.com]](/cdn-cgi/l/email-protection#74070104041b060034151f15361b005a171b19) に電子メールを送信してサポートを求めてください。

![1698741761870-882.png](/static/img/06bd5f_1698741761870-882.png)

### **1.2.マシン構成要件**

Windows サーバーに akaBot Center をインストールして使用するには、次の要件を満たすコンピューターを準備してください。

|  |  |
| --- | --- |
| **構成** | **要件** |
| ハードウェア | 仮想マシン RAM: 32GB 以上 コア: 8 CPU 以上 SSD: 500GB |
| ソフトウェア | オペレーティング システム: Windows Server 2012 R2/2016/2019 ブラウザ: 最新バージョンの Chrome |

### **1.3. インストール権限の要件**

インストールを実行するアカウントには、インストール マシンに対する管理者 (ルート) 権限が必要です。

### **1.4.MSSQL データベース接続要件**

* インストール マシンは、事前に確立された MSSQL データベースにネットワーク接続できる必要があります。
* Center がデータベースに接続するために必要な構成情報には、次のものが含まれます。

|  |  |  |
| --- | --- | --- |
| **#** | **情報** | **説明** |
| 1 | DBサーバー | MSSQLデータベースのIPアドレス |
| 2 | DBユーザー | 接続アカウント |
| 3 | DBパスワード | 接続パスワード |
| 4 | DBポート | MSSQLデータベース接続ポート |
| 5 | DB名 | MSSQL データベースの名前 |

* コラボレーション センターをインストールする場合は、センターのデータベース セットアップと同様に、コラボレーション センター用に別のデータベースを準備し、接続情報を準備してください。 (*コラボレーション センターの詳細については、[Human-Bot Collaboration](/i18n/ja/collaboration/latest/overview.md)* を参照してください)。

### **1.5.インストールパッケージの準備**

次のリストに従ってインストール パッケージを準備する必要があります。

**注:**
- Center をインストールするコンピューターにインターネット接続がない場合は、インストール パッケージを外部からダウンロードしてコンピューターにコピーしてください。
- コマンド ライン実行でのインストール中のエラーを回避するには、akaBot Center インストール用の専用フォルダーを使用し、インストール パッケージ ディレクトリにスペースを含まない名前を付けてください。例: C:\akaBot


|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **#** | **名前** | ファイル名 | **バージョン** | **モータ** | **リンク** |
| 1 | 別名ボット センター | akaBot-center- 3.x.x.x.war | 最新バージョン | - akaBot Center インストール パッケージ | akaBot は、顧客が購入した後、電子メールを通じて提供します。 |
| 2 | akaBot コラボレーション センター | akaBot-cc-x.x.x.zip | 最新バージョン | - コラボレーション センター インストール パッケージ **- 不要** |
| 3 | JDK/JRE | jdk- 11.0.18\_windows- x64\_bin.exe | 11.0.18 | JDK 11.0.18 | [Download](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html) |
| 4 | Apacheトムキャット | apache-tomcat-8.5.89.exe | 8.5.59 | Web server apache Tomcat | [Download](https://archive.apache.org/dist/tomcat/tomcat-8/v8.5.89/bin/apache-tomcat-8.5.89.exe) |
| 5 | アクティブMQ | apache-activemq-5.15.1-bin.zip | 5.15.1 | akaBot Center のキュー機能用 ActiveMQ | [Download](https://archive.apache.org/dist/activemq/5.15.1/apache-activemq-5.15.1-bin.zip) |
| 6 | Elasticsearch 7 | elasticsearch- 7.17.10-windows- x86\_64.zip | 7.17.10 | エラスティック検索 7 **- 不要** (コラボレーション センターのインストール時にのみ使用されます)。 | [Download](https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.17.10-windows-x86_64.zip) |
| 7 | NSSM | nssm-2.24.zip | 2.24 | Service Manager **- 不要** (コラボレーション センターのインストール時にのみ使用されます)。 | [Download](https://nssm.cc/release/nssm-2.24.zip) |

### **1.6.一部のキー操作ガイド**

このドキュメントでは、いくつかの基本的な操作が繰り返されており、このセクションでは筆者がガイダンスを提供します。それらの操作については、以下の説明をお読みください。

**1.6.1. コマンド プロンプト (cmd) を開き、インストール コマンドを入力します**

* Windows の検索バーに「cmd」と入力します。
* コマンドプロンプト機能を右クリックし、「管理者として実行」を選択します。

![1698825373980-794.png](/static/img/aa1f1c_1698825373980-794.png)

* コマンド プロンプト ウィンドウが開き、任意のサービス インストール コマンドを入力できます。

![1698825115865-941.png](/static/img/d84b2f_1698825115865-941.png)

**1.6.2.サービスの開始/停止/再起動**

* Windows キー + R を押します。
* 「services.msc」と入力して、コンピューター上のすべてのサービスを含むサービス機能にアクセスします。
* Enterを押します。

![1698826007648-821.png](/static/img/7b493e_1698826007648-821.png)

* 「サービス」ウィンドウで:
  + サービスを開始するには、「開始」を選択します。
  + サービスを停止するには、「停止」を選択します。
  + サービスを再起動するには、「再起動」を選択します。

![1698826078465-711.png](/static/img/dc88d1_1698826078465-711.png)

![1698826084497-414.png](/static/img/165745_1698826084497-414.png)

## **2. Java JDK 11 のインストール**

**ステップ 1** - **[JAVA JDK 11](https://builds.openlogic.com/downloadJDK/openlogic-openjdk/11.0.20+8/openlogic-openjdk-11.0.20+8-windows-x64.msi)** から Java JDK 11 をダウンロードしてください。

**ステップ 2** - ダウンロードしたインストーラーを実行します。その後、**「次へ」** をクリックして次に進みます。

![1693904663056-588.png](/static/img/ec5495_1693904663056-588.png)

![1693904774851-856.png](/static/img/9c4d87_1693904774851-856.png)

* インストールが完了すると、以下の完了通知が表示されます。 「完了」をクリックするだけです。 JDK が正常にインストールされました。

![1693904326967-726.png](/static/img/a31a17_1693904326967-726.png)

**注**: コマンド**echo %JAVA\_HOME%**を入力して、**JAVA\_HOME**が環境変数に存在することを確認してください。出力はjdk 11を指すパスになるはずです。例:**C:\Program Files\Java\jdk-11.0.12**

## **3. MySQL のインストール**

### **3.1. MySQL をインストールします**

**ステップ 1** -[**MySQL 8.0**](https://dev.mysql.com/downloads/installer/)をダウンロードしてください

![image-20220506134617-7.png](/static/img/86f152_image-20220506134617-7.png)

**ステップ 2** - インストーラーを実行し、**カスタム** オプションを選択します。

![image-20220506134622-8.png](/static/img/b461d3_image-20220506134622-8.png)

* akaBot Center を実行するには、MySQL Server と MySQL Workbench が必要です。
* 以下:
  + **[MySQL サーバー] > [MySQL サーバー]**、**MySQL サーバー** の最新のものを選択します。
  + **[アプリケーション] > [MySQL Workbench]**、**MySQL Workbench** の最新バージョンを選択します。

![image-20220506134630-9.png](/static/img/59947d_image-20220506134630-9.png)

![image-20220506134638-10.png](/static/img/6c15a3_image-20220506134638-10.png)

* その後、**実行**をクリックして**次へ**をクリックしてください...

![image-20220506134644-11.png](/static/img/ccf7f2_image-20220506134644-11.png)

* [**アカウントとロール**] ページでは、後で構成ファイルを更新する必要がないように、デフォルトのパスワードを **”sis@12345”** に設定することをお勧めします。 **「次へ」** をクリックします。

![image-20220506134651-12.png](/static/img/cc7aa3_image-20220506134651-12.png)

* **[実行]** をクリックし、すべてが完了するまで待ちます。 「完了」をクリックします。

![image-20220506134706-14.png](/static/img/718b4e_image-20220506134706-14.png)

* このプロンプトが表示されれば、インストールは正常に完了しています。 「完了」をクリックします。

![image-20220506134713-15.png](/static/img/8ea23c_image-20220506134713-15.png)

### **3.2. MYSQL アカウントをセットアップしてリモート接続を有効にします**

MYSQL とのリモート接続をセットアップする方法を知るには、次の手順に従ってください。これは、MYSQL と CENTER を別々のシステムにインストールするのに役立ちます。
***3.2.1. MYSQL アカウントを作成し、特定のデータベースへのアクセスを許可します (このドキュメントの中央)***

- MySQL Workbench を開き、以下のように root アカウントでローカル インスタンスに移動します。

![1706866874754-225.png](/static/img/76f263_1706866874754-225.png)

- 左側のパネルの「**ユーザー** **および** **特権**」機能にアクセスします(1)

- 次に、「**追加** **アカウント**」をクリックします (2)

![1706866892185-101.png](/static/img/9784b7_1706866892185-101.png)

* [ログイン] タブに次のデータを入力します: ログイン名、パスワードを以下のように入力し、認証タイプと **一致するホストに制限** はデフォルト値のままにします。 **「**ホストに制限** **一致**」の「%」** は、ホストに「**localhost**」が含まれていないことを意味し、他のリモート コンピューターやリモート IP からアクセスできます。

![1706866939179-690.png](/static/img/7df028_1706866939179-690.png)

- 「**アカウント** **制限**」はデフォルトのままにしておきます。

![1706866951938-126.png](/static/img/962e43_1706866951938-126.png)

- 左側のパネルの「設計されたロール」項目にチェックを入れることで、このアカウントに任意のロールを付与できます。このシナリオでは、このアカウントに通常のユーザー権限 (まったく管理者ではない) を持つ特定のデータベースのみを付与したいため、デフォルト値のままにします (何もチェックしません)。

![1706866963595-397.png](/static/img/ba5649_1706866963595-397.png)

- 「**スキーマ** **権限**」タブは、CENTER データベースなどの 1 つ以上のスキーマに特定の権限を付与するのに役立ちます。

- 「**追加** **エントリ**」をクリックしてセットアップを開始します

![1706866976416-822.png](/static/img/c47d99_1706866976416-822.png)

- 次に、このユーザー用に設計されたデータベースを選択します (この場合、CENTER アプリケーションのデータベースを選択します)。
- データベースがまだ作成されていない場合は、**3.3 に従って最初にデータベースを作成できます。 CENTER** 用の MySQL データベースの作成

![1706866987817-428.png](/static/img/92aba5_1706866987817-428.png)

- このスキーマに適切なアクセス権を適用します。このシナリオでは、特定のデータベースに対するすべてのアクセス権を選択します。

- **オブジェクト** **権利**は任意のレコードを操作する権利、**DDL** **権利**はデータベース定義タイプを操作する権利…

![1706866999267-422.png](/static/img/623ce3_1706866999267-422.png)

- 「**適用**」をクリックすると、ユーザーアカウントリストに「**lmsUser**」という名前の新しいユーザーが表示されます。 「**更新**」ボタンをクリックすると、MYSQLWORKBENCH にリストを強制的に更新させることができます。注: 「**From** **Host**」列の **「%」** は、このアカウントがリモートからアクセスできることを意味します。

![1706867026079-558.png](/static/img/96d819_1706867026079-558.png)

***3.2.2.  MySQL Workbench を使用してリモート クライアントから MySQL をテストします***

- 他のコンピュータで MySQL Workbench を開き、接続の追加ボタンをクリックして (下の図を参照)、「**セットアップ** **新しい** **接続**」ウィンドウを開きます。

![1706867096054-795.png](/static/img/a39f10_1706867096054-795.png)

- テストしたい MySQL の IP アドレスを入力し、「**HostName**」にエクスプローラーを入力し、前の手順で作成した MySQL UserName を入力して、「**Test** **Connection**」ボタンをクリックします。

- 「**Connect** **to** **MySQL** **Server**」というダイアログが表示されたら、このアカウントのパスワードを入力し、[OK] をクリックしてこの接続をテストします。

![1706867108837-611.png](/static/img/c279ee_1706867108837-611.png)

- 何も問題がなければ、このダイアログが表示されます。

![1706867122081-842.png](/static/img/611350_1706867122081-842.png)

- 接続が成功すると、MySQL Workbench を使用してリモート データベースを詳細に参照できます。

### **3.3.CENTER 用の MySQL データベースの作成**

- 新規/初回インストールの場合は、CENTER 用の新しいデータベースを作成する必要があります。

- MYSQL Database for CENTER をインストールするように設計されたマシンに「**aka\_orchestrator**」という名前のデータベースを作成するには、次の手順に従います。

**ステップ 1**: MySQL データベースを作成するマシンで MySQL Workbench を開きます。

![aaaa.png](/static/img/48b772_aaaa.png)

- MySQL Workbench を開き、ローカル インスタンスにアクセスします

![b.png](/static/img/1f701a_b.png)

**ステップ 2** : (1) をクリックして「**作成** **新しい** **データベース** **ダイアログ**」を開きます

(2) 入力スキーマ名=”**aka\_orchestrator**”

(3) CENTERのデータベース名を入力

(4) Charset =”**utf8 ,utf8\_general\_ci**”を入力します。

(5) (1) (2) (3) (4) をすべて完了したら、「**適用**」を押します。

![c.png](/static/img/274468_c.png)

**ステップ 3**: 「**適用**」をクリックして LMS データベースを作成します

![d.png](/static/img/280a32_d.png)

「**完了**」を押します

![e.png](/static/img/87d08b_e.png)

## **4. Apache Tomcat のインストール**

### **4.1. Apache Tomcat をインストールします**

ファイル「apache-tomcat-8.5.89.exe」をダブルクリックして、Apache Tomcat をインストールします。インストーラーの指示に従ってください。

**注:** Apache Tomcat インストールの最後のステップでは、次のようになります。
- 「Apache Tomcatを実行する」のチェックを外します。
- 「Readmeを表示」のチェックを外します
- 「完了」ボタンをクリックしてインストールを完了します。

![1698826414378-509.png](/static/img/ba7a8b_1698826414378-509.png)

Apache Tomcat のインストール パス: **%TOMCAT\_PATH%** = “C:\Program Files\Apache Software Foundation\Tomcat 8.5”

### **4.2. Apache Tomcat 構成**

**4.2.1.ログ設定を構成します**

ステップ 1: ファイル **%TOMCAT\_PATH%\conf\logging.properties** を開きます。

ステップ 2: 属性 maxDays を追加して、catalina、localhost、host-manager、manager ログについて、ローテーションされたアクセス ログが削除されるまで保持される最大日数を指定します。指定しない場合は、デフォルト値の -1 が使用されます。これは、古いファイルを決して削除しないことを意味します。例: 10 日分の履歴を保存します。

![1714719008984-381.png](/static/img/05c1d5_1714719008984-381.png)

ステップ 3: 変更を保存してファイルを閉じます。

ステップ 4: ファイル **%TOMCAT\_PATH%\conf\server.xml** を開きます

ステップ 5: ログ設定の行のコメントを解除してログをオンにし、以下のように属性 maxdays を追加します。

![1714719488405-585.png](/static/img/352bde_1714719488405-585.png)

ステップ 6: 変更を保存してファイルを閉じる

**4.2.2.その他の設定**

ステップ 1: パス **%TOMCAT\_PATH%\bin** に移動し、ファイル **Tomcat8w.exe** をダブルクリックして、Apache Tomcat サービス構成を開きます。

![1698826573279-276.png](/static/img/d3158a_1698826573279-276.png)

ステップ 2: [**全般**] タブ

* スタートアップの種類を選択します: 自動
* [**適用**] を選択して、構成の変更を適用します。

![1698826602935-553.png](/static/img/c55a9d_1698826602935-553.png)

ステップ 3: [**ログ**] タブ

(1) ログの接頭辞: 「commons-daemon」を削除します。

(2) 標準出力をリダイレクト: 「auto」を削除します。

(3) Stderror をリダイレクト: 「auto」を削除

(4) [適用] を選択して、構成の変更を適用します。

![1698826668751-847.png](/static/img/2a75de_1698826668751-847.png)

ステップ 4: [**Java**] タブで

ａ． Java ヒープ構成を調整します。

* 初期メモリ プール: サーバーの RAM の \<= 1/4 の値を入力します。

例: サーバー RAM = 32 GB -> 初期メモリ プールは \<= 1/4 \* 16 \* 1024 MB である必要があります

* 最大メモリ プール: サーバーの RAM の \<= 1/2 の値を入力します。

例: サーバー RAM = 32 GB -> 最大メモリ プールは \<= ½ \* 16 \* 1024 MB である必要があります

**注意**: 大きすぎる値を入力すると、Apache Tomcat サービスが起動できなくなり、エラーが発生する可能性があります。

![1698826792581-457.png](/static/img/758a5c_1698826792581-457.png)

b. [**適用**] を選択して、構成の変更を適用します。

![1698826829349-538.png](/static/img/79812c_1698826829349-538.png)

ステップ 5: Tomcat サービスを開始する

[**全般**] タブで [**開始**] を選択し、Apache Tomcat サービスを開始します。

![1698826877948-604.png](/static/img/33da6a_1698826877948-604.png)

### **4.3. Apache Tomcat のインストールを確認してください**

ステップ 1: インストールと構成が完了したら、[サービス] 画面に移動して、Apache Tomcat サービスのステータスを確認します。

* ステータスが「実行中」でない場合は、Apache Tomcat サービスを開始します。
* ステータスが「実行中」の場合は、手順 2 に進みます。

![1699244034878-897.png](/static/img/d6c3f9_1699244034878-897.png)

ステップ 2: Chrome で URL[http://localhost:8080](http://localhost:8080/)にアクセスし、Apache Tomcat が正常にインストールされたことを確認します。

![1699244051857-950.png](/static/img/e997ca_1699244051857-950.png)

## **5. ACTIVEMQ のインストール**

### **5.1. ActiveMQ をインストールします**

ステップ 1: ファイル「apache-activemq-5.15.1-bin.zip」を目的のインストール パスに抽出します。

例: ACTIVEMQ\_PATH = C:\akaBot\apache-activemq-5.15.1

注: インストール パスにはスペースを含めないでください。

![1699244069336-269.png](/static/img/e72378_1699244069336-269.png)

ステップ 2: 管理者権限でコマンド プロンプトを開きます。

![1699244074920-832.png](/static/img/254b02_1699244074920-832.png)

ステップ 3: ファイル %ACTIVEMQ\_PATH%\bin\win64\InstallService.bat を実行して、ActiveMQ サービスをインストールします。

![1699244080655-576.png](/static/img/7e9bee_1699244080655-576.png)

ステップ 4: ActiveMQ サービスを開始します。

![1698830727957-440.png](/static/img/299bae_1698830727957-440.png)

### **5.2. Java ヒープ構成**

**ステップ 1:** サービス ActiveMQ を停止します

![1698830792792-356.png](/static/img/4bb532_1698830792792-356.png)

ステップ 2: ファイル **%ACTIVEMQ\_PATH%\bin\win64\wrapper.conf** を開き、パラメーターを構成します。

* ［wrapper.java.initmemory］：Java ヒープ メモリの初期値を入力します。

たとえば、サーバーに 32 GB の RAM が搭載されている場合は、1024 と入力できます。

* ［wrapper.java.maxmemory］：Java ヒープ メモリの最大値を入力します。

たとえば、32 GB の RAM を搭載したサーバーの場合は、4096 と入力できます。

ステップ 3: ActiveMQ サービスを開始する

![1698830915678-493.png](/static/img/d32c74_1698830915678-493.png)

### **5.3. ActiveMQ のインストールを確認してください**

ステップ 1: ActiveMQ サービスの実行ステータスを確認します。サービスが実行されていない場合は、サービスを開始します。

![1698830978699-754.png](/static/img/641c75_1698830978699-754.png)

ステップ 2: URL[http://localhost:8161](http://localhost:8161/)にアクセスして、ActiveMQ が正常にインストールされたことを確認します。

![1698831013334-870.png](/static/img/e674f8_1698831013334-870.png)

## **6. ELASTICSEARCH のインストール**

**注意:** コラボレーション センターを使用する場合は、ElasticSearch をインストールする必要があります。そうでない場合、これは必要ありません。

### **6.1. ElasticSearch をインストールします**

ステップ 1: ファイル「elasticsearch-7.17.10-windows-x86\_64.zip」を目的のインストール パスに抽出します。

たとえば、ES\_PATH: C:\akaBot\elasticsearch-7.17.10 です。

![1698831079505-432.png](/static/img/30b605_1698831079505-432.png)

ステップ 2: Elasticsearch サービスをインストールする
「管理者として実行」でコマンド プロンプトを開き、次のコマンドを実行します。

%ES\_PATH%\bin\elasticsearch-service.bat インストール

![1698831173260-619.png](/static/img/5261a2_1698831173260-619.png)

ステップ 3: 次のコマンドを使用して Elasticsearch サービスを開始します。

```
%ES_PATH%\bin\elasticsearch-service.bat start
```

![1698831334372-779.png](/static/img/b43feb_1698831334372-779.png)

### **6.2. ElasticSearch 構成**

**6.2.1.セキュリティ構成**

ステップ 1: Elasticsearch サービスを停止します。

ステップ 2: ファイル %ES\_PATH%\config\elasticsearch.yml を開き、ファイルの先頭に次の設定を追加します。

```
xpack.security.enabled: true
```

ステップ 3: Elasticsearch サービスを再度開始します。

ステップ 4: コマンド プロンプトを開き、**%ES\_PATH%\bin\elasticsearch-setup-passwords interaction** を実行します。

Elasticsearch のすべての組み込みユーザーのパスワードを入力します。

![1698831288454-144.png](/static/img/e97567_1698831288454-144.png)

**6.2.2.その他の構成**

ステップ 1: 「管理者として実行」でコマンド プロンプトを開き、ファイル **%ES\_PATH%\bin\elasticsearch-service.bat manager** を実行して、Elasticsearch サービスの構成管理インターフェイスを開きます。

![1698831522366-251.png](/static/img/b401c2_1698831522366-251.png)

ステップ 2: [**全般**] タブで、[スタートアップの種類] を選択し、[自動] に設定します。

![1698831577184-391.png](/static/img/a51bf3_1698831577184-391.png)

ステップ 3: [**ログ**] タブ

![1698831635096-754.png](/static/img/205abc_1698831635096-754.png)

ステップ 4: [**Java**] タブで

![1698831653137-277.png](/static/img/760f22_1698831653137-277.png)

### **6.3. ElasticSearch のインストールを確認してください**

ActiveMQ サービスの実行ステータスを確認します。

![1698831705683-754.png](/static/img/f469d3_1698831705683-754.png)

URL[http://localhost:9200/](http://localhost:9200/)にアクセスして、Elasticsearch が正常にインストールされたことを確認します。

![1698831739225-456.png](/static/img/8f0d4a_1698831739225-456.png)

![1698831748226-661.png](/static/img/be1f4c_1698831748226-661.png)

## **7. akaBot センターのインストール**

### **7.1. war ファイルをコピーして抽出します**

ステップ 1: Apache Tomcat サービスを停止する

![1698831867557-259.png](/static/img/23fd34_1698831867557-259.png)

ステップ 2: %TOMCAT\_PATH%/webapps 内のすべてのフォルダーを削除します。

ステップ 3: ファイル akaBot-center-x.x.x.x.war を %TOMCAT\_PATH%/webapps/ ディレクトリにコピーし、名前を ROOT.war に変更します。

![1698831956427-192.png](/static/img/12779b_1698831956427-192.png)

ステップ 4: Apache Tomcat サービスを再起動し、ROOT.war が ROOT ディレクトリに抽出されるまで待ちます。

![1698831960528-312.png](/static/img/cd1412_1698831960528-312.png)

ステップ 5: Apache Tomcat サービスを停止します。

![1698831966006-837.png](/static/img/f5c068_1698831966006-837.png)

### **7.2. akaBot Center の構成**

**7.2.1.構成 quartz.properties**

ステップ 1: Apache Tomcat サービスを停止します (Apache Tomcat サービスが現在実行中の場合)。

ステップ 2: ファイル %TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/quartz.properties の構成を次のように変更します。

1. MySQL のジョブストア構成をコメントアウトします。

![1698832086809-294.png](/static/img/f42084_1698832086809-294.png)

1. MSSQL のジョブストア構成の行の先頭にある「#」文字を削除して、コメントを解除します。

![1698832094915-186.png](/static/img/2b4cd7_1698832094915-186.png)

**7.2.2. MSSQL データベース接続の構成**

**ステップ 1**: パス %TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/config/ に移動します。

**ステップ 2**: 両方のファイルの構成を変更します。

* アプリケーション開発.yml
* アプリケーション製品.yml

1. MySQL データソースと JPA 構成をコメントアウトします。

![1698832182139-477.png](/static/img/cbaf67_1698832182139-477.png)

2. 行頭の「#」文字を削除して、後続の行のコメントを解除します。

![1698832196463-541.png](/static/img/654fba_1698832196463-541.png)

3. 行を次のように変更します。

* URL: jdbc:sqlserver://DB-SERVER:DB-PORT;databaseName=DB-NAME;encrypt=true;trustServerCertificate=true;
* ユーザー名: DB-USER
* パスワード: DB-PASSWORD

**7.2.3.ログ設定**

1. ファイル %TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/logback-spring.xml を開きます。

2. ログレベルをERRORに変更します

![1714720162669-409.png](/static/img/68d289_1714720162669-409.png)

3. ローリング ログ ファイルの設定を次のように変更します。

* maxFileSize: 各ファイルのサイズを制限します。例: 200MB。
* maxHistory: オプションの maxHistory プロパティは、保持するアーカイブ ファイルの最大数を制御します。例: 20
* totalSizeCap: オプションの totalSizeCap プロパティは、すべてのアーカイブ ファイルの合計サイズを制御します。例：20GB

![1714720244392-526.png](/static/img/285acd_1714720244392-526.png)

4. 変更を保存してファイルを閉じる

5. Apache Tomcat サービスを開始し、[http://localhost:8080/](http://localhost:8080/)にアクセスして、akaBot Center のインストールを確認します。

![1698832285390-704.png](/static/img/1c2800_1698832285390-704.png)

**7.2.4.電子メールサーバーの構成**

**ステップ 1:** 送信者の電子メール アドレスを構成する

ファイル **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/config/application.yml** を開きます。

**mail** 構成セクションを見つけて、以下に示すように **from** フィールドを更新します。

* from: アプリケーションによって生成されるすべての送信電子メール (通知、アクティベーション電子メール、パスワード リセット電子メールなど) に表示されるデフォルトの送信者の電子メール アドレスを指定します。

注:

* 電子メール アドレスは、有効で承認されたドメインに属している必要があります。
* 返信不要のメール アドレスまたはサービス アカウントのメール アドレスを使用することをお勧めします。
* 送信者のアドレスは、で構成された SMTP アカウントと一致している必要があります。
**ステップ 2** により、電子メール配信やスパムの問題を回避できます。

![1765954433056-182.png](/static/img/95885a_1765954433056-182.png)

**ステップ 2:** SMTP 電子メール設定を構成する

パス **%TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/config/** に移動します。

両方のファイル **application-dev.yml、application-prod.yml** の構成を変更します。

* host: 送信メールの送信に使用される SMTP サーバーの完全修飾ドメイン名 (FQDN)。
* port: SMTP サーバーが安全なメール送信に使用するネットワーク ポート。 ポート 587 は標準の送信ポートであり、STARTTLS 暗号化をサポートします。
* ユーザー名: アプリケーションが SMTP サーバーで認証し、送信メールの送信者を識別するために使用するメール アカウント。
* パスワード: アプリケーションが SMTP サーバーで認証するために使用する認証情報。この値は安全に保存する必要があり、ハードコーディングしたり、ソース管理にコミットしたりしてはなりません。

![1765954450412-716.png](/static/img/834a56_1765954450412-716.png)

**7.2.5. SSL (https) の設定**

[here](/i18n/ja/center/latest/installation/install-ssl-tls.md)の指示に従って、akaBot Center の SSL を構成します。

## **8. akaBot コラボレーション センターのインストール (オプション)**

### **8.1. NSSM** をインストールします

ファイル nssm-2.24.zip を目的のインストール パスに抽出します。例: NSSM\_PATH: C:\akaBot\nssm-2.24

![1698832680035-235.png](/static/img/40a101_1698832680035-235.png)

### **8.2. akaBot コラボレーション センターをインストールします**

**ステップ 1**: akaBot-cc-3.14.0.zip ファイルを目的のインストール パスにコピーして抽出します。例: AKABOT\_CC\_PATH: C:\akaBot\akaBot-cc-3.14.0

![1698832709811-242.png](/static/img/8cbea9_1698832709811-242.png)

**ステップ 2**: config-sqlserver.properties ファイルを構成する config-sqlserver.properties ファイルを開き、次のように編集します。

1. MSSQL データベース接続を構成します。
   * spring.datasource.url=jdbc:sqlserver://DB-SERVER:DB-PORT;databaseName=DB-NAME
   * spring.datasource.username=DB-USER
   * spring.datasource.password=DB-パスワード
2. ElasticSearch 接続を構成します。
   * conductor.elasticsearch.password=パスワードを設定する

![1698832784356-349.png](/static/img/0f1dcf_1698832784356-349.png)

**ステップ 3**: akaBotCCSvc サービスを構成する

ファイル **%AKABOT\_CC\_PATH%\install-akaBot-cc-service.bat** を開いて編集します。

1. NSSM\_PATH: %NSSM\_PATH%\win64 を更新します。 *例*: C:\akaBot\nssm-2.24\win64
2. Java パスを更新します: %NSSM\_PATH%\nssm install akaBotCCSvc “%JAVA\_HOME%\bin\java.exe” 。 *例*: 「C:\Program Files\Java\jdk-11\bin\java.exe」
3. App Directory パスを更新します: %NSSM\_PATH%\nssm set akaBotCCSvc AppDirectory %AKABOT\_CC\_PATH%。 *例*: C:\akaBot\akaBot-cc-3.14.0

![1698832852600-116.png](/static/img/8577c1_1698832852600-116.png)

**ステップ 4**: akaBotCCSvc サービスをインストールする

「管理者として実行」でコマンド プロンプトを開き、ファイル %AKABOT\_CC\_PATH%\install-akaBot-cc-service.bat を実行して、akaBotCCSvc サービスをインストールします。

![1698832948891-178.png](/static/img/bfa292_1698832948891-178.png)

### **8.3. akaBot コラボレーション センターのインストールを確認してください**

**ステップ 1**: akaBotCCSvc サービスの実行ステータスを確認します。

![1698832983869-732.png](/static/img/5706c7_1698832983869-732.png)

**ステップ 2**: URL[http://localhost:3393](http://localhost:3393/)にアクセスして、akaBot Collaboration Center が正常にインストールされたことを確認します。

![1698833007812-806.png](/static/img/1876e3_1698833007812-806.png)

### **8.4. akaBot コラボレーション センターへの接続を構成する**

**ステップ 1**: Apache Tomcat サービスを停止します (Apache Tomcat サービスが現在実行中の場合)。

**ステップ 2**: ファイル %TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/config/application.yml を構成します。

* プロセスビルダー.有効: true
* process-builder.conductor.url:[http://localhost:3393/api](http://localhost:3393/api)

![1698833069564-201.png](/static/img/bc5e5d_1698833069564-201.png)

**ステップ 3**: ファイル %TOMCAT\_PATH%/webapps/ROOT/WEB-INF/classes/config/application-prod.yml を構成します。

* ログレベルの構成
  + com.netflix.conductor.client: エラー
  + sun.net.www: エラー

![1698833088172-677.png](/static/img/cd64be_1698833088172-677.png)

**ステップ 4**: Apache Tomcat サービスを再度開始し、[http://localhost:8080/](http://localhost:8080/)にアクセスして、akaBot Center のインストールを確認します。

![1698833120163-411.png](/static/img/c32b9f_1698833120163-411.png)

## **9.トラブルシューティング**

### **9.1.アクティブMQ**

**9.1.1. Java コマンドを実行できません**

![1698833178465-447.png](/static/img/b5ab86_1698833178465-447.png)

* ファイル %ACTIVEMQ\_PATH%\bin\win64\wrapper.conf を開き、パラメーターを構成します。

［wrapper.java.command=%JAVA\_HOME%/bin/java.exe］

**9.1.2.その他のエラー**

**ActiveMQ: %ACTIVEMQ\_PATH%\logs\data\wrapper.log** のログ ファイルでエラーの詳細を確認してください。

## **10.災害復旧のためのバックアップ**

災害復旧シナリオのためにバックアップする情報:

|  |  |  |  |
| --- | --- | --- | --- |
| **いいえ** | **名前** | **パス** | **説明** |
| 1 | 別名ボット センター | データベース | akaBot Center のデータベース (MSSQL) |
| %[TOMCAT\_PATH](#_bookmark21)%/ファイルストレージ | akaBot Center に公開された akaBot Studio の .nupkg ファイルを含むフォルダー |
| %[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\application.yml %[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\application-dev.yml %[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB- INF\classes\config\application-prod.yml %[TOMCAT\_PATH](#_bookmark21)%\webapps\webapps\ROOT\WEB-INF\classes\config\quartz.properties | akaBot Center の構成ファイル |
| 2 | アクティブMQ | %[ACTIVEMQ\_PATH](#_bookmark25)%\data | activeMQ データディレクトリ |
| 3 | akaBot コラボレーション センター | データベース | akaBot コラボレーション センターのデータベース (MSSQL) |