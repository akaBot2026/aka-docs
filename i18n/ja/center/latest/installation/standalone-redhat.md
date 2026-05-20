---
id: standalone-redhat
title: "Redhat v9.x でのスタンドアロン モデルのインストール ガイド"
sidebar_label: "Redhat v9.x のスタンドアロン モデル"
sidebar_position: 8
description: "Redhat v9.x のスタンドアロン モデルのインストール ガイドに関するドキュメント。"
displayed_sidebar: centerSidebar
---
# Redhat v9.x でのスタンドアロン モデルのインストール ガイド

# 1. 始める前に

このドキュメントは、**スタンドアロン モデル** (オールインワン モデル) に akaBot Center をインストールする方法を案内することを目的としています。これは、以下の図のように、必要なすべてのパッケージが 1 台のマシンのみにインストールされることを意味します。

![image-20230728180918-1.png](/static/img/429ab0_image-20230728180918-1.png)

他のモデルについては、プロジェクト コーディネーター (いる場合) に連絡するか、[[support@akaBot.com]](/cdn-cgi/l/email-protection#f88b8d8888978a8cb8999399ba978cd69b9795) に電子メールを送信してガイダンスを取得してください。 **akaBot チームは常にお客様のインストールの成功をサポートします**。

インストールを正常に完了する前に、以下のセクションを**注意深く**お読みになり、必要なリソース/情報を準備してください。

## 1.1.ハードウェア要件

akaBot Center をインストールして使用するには、akaBot Center をインストールするマシン (ここでは、***akaBot Center マシン*** と呼びます) が以下の要件を満たす必要があります。

* 物理サーバーまたは仮想マシン
* RAM：32GB以上
* コア：8CPU以上
* SSD：500GB

## 1.2.データベース接続

akaBot Center マシンはデータベース サーバーに接続する必要があります。

さらに、akaBot Center がデータベースに接続できるように、以下の情報を準備してください。

|  |  |  |
| --- | --- | --- |
| **#** | **情報** | **説明** |
| 1 | DBサーバー | データベースの IP アドレス。例: 3.112.124.176 |
| 2 | DBユーザー | データベースのユーザー名。例: AKA\_CENTER\_01 |
| 3 | DBパスワード | ユーザー名のパスワード 例: akaBot123 |
| 4 | DBポート | データベースポート。例: 1521 |
| 5 | DB-SID/サービス名 | データベース SID/サービス名 例: Orcl |

1.3.許可要件

インストールを実行するには、akaBot Center マシン上のユーザー アカウントに **Sudo として実行権限**が必要です。

## 1.4.インストールパッケージの準備

akaBot Center マシンに、**正確なバージョン**の以下のインストール パッケージがあることを確認してください。

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **#** | **プラットフォーム名** | **パッケージ名** | **バージョン** | **説明** | **ダウンロード** |
| 1 | JDK/JRE | openlogic-openjdk-11.0.16+8-linux-x64-el.rpm | 11.0.16 | OpenJDK | [Download](https://builds.openlogic.com/downloadJDK/openlogic-openjdk/11.0.16+8/openlogic-openjdk-11.0.16+8-linux-x64-el.rpm) |
| 2 | Apacheトムキャット | apache-tomcat-8.5.57.tar.gz | 8.5.57 | Webサーバー Apache Tomcat | [Download](https://archive.apache.org/dist/tomcat/tomcat-8/v8.5.57/bin/apache-tomcat-8.5.57.tar.gz) |
| 3 | アクティブMQ | apache-activemq-5.15.1-bin.tar.gz | 5.15.1 | ActiveMQ は akaBot Center のキュー関連機能に使用されます | [Download](https://archive.apache.org/dist/activemq/5.15.1/apache-activemq-5.15.1-bin.tar.gz) |
| 4 | 別名ボット センター | akaBot-center-x.x.x.x.war | 3.0.1.2以降 | akaBot Center インストール パッケージ | akaBot が提供します。プロジェクト コーディネーターまたは [[email protected]](/cdn-cgi/l/email-protection) にご連絡ください。 |

**注意事項**:

* 今後のエラーを防ぐために、すべてのインストール パッケージを 1 つのフォルダー (**インストール フォルダー** と呼びます) に配置する必要があります。 **例: /apps**

## 1.5.その他の注意事項

**インストール中の今後のエラーを防ぐために、以下の注意事項に注意してください:**

1. フォルダー名にスペースが含まれていないことを確認してください。
2. 利便性を高め、構文エラーを防ぐために、このガイドのコマンド ラインを akaBot Center マシンにコピーして実行する必要があります。
3. 文字エンコード モードが異なるため、構文エラーを防ぐために、akaBot Center マシンに再度コピーする前に、コマンドを **メモ帳ファイル** にコピーしてください。
4. 構成ファイルを更新するときは、構文エラーを防ぐためにファイルの構文に厳密に従ってください。

# 2. インストール

パッケージのインストール順序は、JDK → Apache Tomcat Web サーバー → Apache ActiveMQ サービス → akaBot Center パッケージに従ってください。

## 2.1. JDKのインストール

**1.ステップ 1:** 以下のコマンドを使用して、インストールフォルダーに移動します。

CD アプリ/

**2.ステップ 2:** インストール コマンドを実行します。

sudo yum install openlogic-openjdk-11.0.16+8-linux-x64-el.rpm

**3.ステップ 3:** 以下のコマンドを実行して、インストールが成功したかどうかを確認します。

java -バージョン

![image-20230728180918-2.png](/static/img/064dc2_image-20230728180918-2.png)

***注意: 以前の Java バージョンがインストールされている場合は、Java バージョンを Java 11 にアップグレードしてください。***

## 2.1. Apache Tomcat Web サーバーのインストール

### 2.1.1.ステップ 1: インストール ファイルを抽出する

1.  インストールフォルダーに移動します。

CD アプリ/

2. フォルダーを作成します: /opt/tomcat

sudo mkdir /opt/tomcat

3. Apache Tomcat インストール パッケージを抽出する

sudo tar xzvf apache-tomcat-8\*tar.gz -C /opt/tomcat --strip-components=1

### 2.1.2.ステップ 2: グループとユーザー Tomcat を作成する

実行中の権限関連のエラーを防ぐために、別のアカウントを作成し、Root アカウントを使用する代わりにこのアカウントで Tomcat インストールを実行する必要があります。

1. Tomcatグループの作成

sudo groupadd Tomcat

2. Tomcat グループおよびホーム リンク: /opt/tomcat の下にアカウント Tomcat を作成します。

sudo useradd -s /bin/false -g tomcat -d /opt/tomcat tomcat

3. アカウント Tomcat を構成して、後で akaBot Center のライセンス アクティベーションに使用するマシン コードを取得します。

* viエディタを開く

sudo visudo /etc/sudoers

* 以下のコマンドをファイルの最後に追加します。

tomcat ALL= NOPASSWD: ALL

![image-20230728180918-3.png](/static/img/43b286_image-20230728180918-3.png)

* 変更を保存し、vi エディターを終了します。

ESC キーを押して「:wq」と入力します。

4.  現在のユーザー (akaBot Center マシンへの SSH 接続に使用) をグループ Tomcat に追加します。

sudo usermod -g tomcat [現在の\_user\_logged]

### **2.1.3 ステップ 3: フォルダーのアクセス権を構成する**

1. Tomcat フォルダーの所有権を変更します。

cd /opt

sudo chown Tomcat:Tomcat Tomcat

ls -l

![image-20230728180918-4.png](/static/img/15dbc7_image-20230728180918-4.png)

2. Tomcat フォルダーのアクセス許可を構成します。

cd /opt/tomcat

sudo chgrp -R tomcat /opt/tomcat

sudo chmod -R g+r conf

sudo chmod g+x conf

sudo chown -R tomcat webapps/ work/ temp/ logs/

ls -l

![image-20230728180918-5.png](/static/img/ba1b66_image-20230728180918-5.png)

### **2.1.4 ステップ 4: Tomcat サービスの実行を構成する**

1. Java インストール フォルダーを取得する

sudo update-alternatives --list | grep Java

![image-20230728180918-6.png](/static/img/0ac965_image-20230728180918-6.png)

--> %JAVA\_HOME% = /usr/lib/jvm/openlogic-openjdk-11-hotspot **(/bin/java なし)**

2. tomcat.service ファイルを作成する

sudo vi /etc/systemd/system/tomcat.service

3. 以下のコードをファイルにコピーします

*[ユニット]*

*説明=Apache Tomcat Web アプリケーション コンテナ*

*後=ネットワーク.ターゲット*

*[サービス]*

*タイプ=フォーク*

*環境=JAVA\_HOME=/usr/lib/jvm/openlogic-openjdk-11-hotspot*

*環境=CATALINA\_PID=/opt/tomcat/temp/tomcat.pid*

*環境=CATALINA\_HOME=/opt/tomcat*

*環境=CATALINA\_BASE=/opt/tomcat*

*環境='CATALINA\_OPTS=-Xms1G -Xmx2G -server -XX:+UseParallelGC'*

*環境='JAVA\_OPTS=-Djava.awt.headless=true -Djava.security.egd=file:/dev/./urandom'*

*作業ディレクトリ=/opt/tomcat*

*ExecStart=/opt/tomcat/bin/startup.sh*

*ExecStop=/opt/tomcat/bin/shutdown.sh*

*ユーザー=トムキャット*

*グループ=トムキャット*

*再起動秒=10*

*再起動=常に*

*[インストール]*

*WantedBy=マルチユーザー.ターゲット*

4. Java ホーム変数を更新します。

環境=JAVA\_HOME=%JAVA\_HOME%

*環境=JAVA\_HOME=/usr/lib/jvm/openlogic-openjdk-11-hotspot*

5. Java ヒープ メモリ サイズを変更します。

*環境='CATALINA\_OPTS=-Xms1G -Xmx2G -server -XX:+UseParallelGC'*

* **パラメータ -Xms:** 最小 Java ヒープ サイズ。 \<= 1/4 の RAM 容量を設定してください。

例: akaBot Center マシンの RAM = 4G の場合、-Xms1G を設定します。

* **パラメータ -Xmx:** 最大 Java ヒープ サイズ。 \<= RAM 容量の 1/2 の数値を設定してください。

例: akaBot Center マシンの RAM = 4G の場合、-Xms2G を設定します。

6. 変更を保存して終了します

ESC を押して、「:wq」と入力します。

**2.1.5 ステップ 5: Tomcat ログの構成**

1. ファイル ***/opt/tomcat/conf/logging.properties*** を開きます。

2. 属性 *maxDays* を追加して、catalina、localhost、host-manager、manager ログについて、ローテーションされたアクセス ログが削除されるまで保持される最大日数を指定します。指定しない場合は、デフォルト値の -1 が使用されます。これは、古いファイルを決して削除しないことを意味します。例: 10 日分の履歴を保存します。

例：

*1catalina.org.apache.juli.AsyncFileHandler.maxDays = 10*

*2localhost.org.apache.juli.AsyncFileHandler.maxDays = 10*

*3manager.org.apache.juli.AsyncFileHandler.maxDays = 10*

*4host-manager.apache.juli.AsyncFileHandler.maxDays = 10*

![1714726922102-116.png](/static/img/9bd3fd_1714726922102-116.png)

3. 変更を保存して終了します。

4. ファイル */opt/tomcat/conf/server.xml* を開きます

5. ログをオンにするには、ログ設定の行のコメントを解除します。

6. 属性 *maxDays* を追加して、catalina、localhost、host-manager、manager ログについて、ローテーションされたアクセス ログが削除されるまで保持される最大日数を指定します。指定しない場合は、デフォルト値の -1 が使用されます。これは、古いファイルを決して削除しないことを意味します。例: 10 日分の履歴を保存します。

例: *maxDays="10"*

![1714726968776-214.png](/static/img/3ac628_1714726968776-214.png)

7. 変更を保存して終了します。

8. リロードデーモン

sudo systemctl デーモン-リロード

9. Tomcatサービスを開始する

*注意: Tomcat サービスを開始する前に、/opt/tomcat/webapps** フォルダーに **ROOT フォルダーのみがあることを確認してください。*

sudo systemctl tomcatを起動

10. Tomcat サービスを有効にする

sudo systemctl tomcatを有効にする

11. Tomcatのステータスを確認する

sudo systemctlステータスtomcat

![image-20230728180918-7.png](/static/img/938ee2_image-20230728180918-7.png)

カールローカルホスト:8080

![image-20230728180918-8.png](/static/img/fe5d0d_image-20230728180918-8.png)

12. 所有者とグループの所有権をログ フォルダーに変更します。

sudo chown -R tomcat /opt/tomcat/logs

sudo chgrp -R tomcat /opt/tomcat/logs

## **2.2. ActiveMQ をインストールします**

## **2.2.1.ステップ 1: インストール ファイルを抽出します**

1.   インストールフォルダーに移動します。

CD アプリ/

2.   フォルダーを作成します: /opt/activemq

sudo mkdir /opt/activemq

3.   Apache ActiveMQ インストール パッケージを抽出し、/opt/activemq フォルダーに移動します。

sudo tar -xvzf apache-activemq-\*-bin.tar.gz

sudo mv apache-activemq-5.15.1 /opt/activemq

### **2.2.2 ステップ 2: グループと ActiveMQ ユーザーの作成**

別のアカウントを作成し、Root アカウントを使用する代わりにこのアカウントで ActiveMQ インストールを実行します。

1. ActiveMQグループの作成

sudo groupadd activemq

2. グループ ActiveMQ およびホーム リンク: /opt/activemq の下にアカウント ActiveMQ を作成します。

sudo useradd -s /bin/false -g activemq -d /opt/activemq activemq

3. ファンクインチョートゥオンActiveMQ

sudo chown -R activemq:activemq /opt/activemq

### **2.2.3 ステップ 3: ActiveMQ サービスの構成**

1. 構成ファイルを作成します: activemq.service

sudo vi /etc/systemd/system/activemq.service

2. 以下の内容をこのファイルにコピーします

*[ユニット]*

*説明=Apache ActiveMQ*

*後=ネットワーク.ターゲット*

*[サービス]*

*タイプ=フォーク*

*ユーザー=アクティブmq*

*グループ=アクティブmq*

*ExecStart=/bin/bash /opt/activemq/bin/activemq start*

*ExecStop=/bin/bash /opt/activemq/bin/activemq stop*

*[インストール]*

*WantedBy=マルチユーザー.ターゲット*

3. 変更を保存して終了します

ESC を押して、「:wq」と入力します。

4. リロードデーモン

sudo systemctl デーモン-リロード

5. ActiveMQサービスを開始する

sudo systemctl start activemq

6. ActiveMQ サービスを有効にする

sudo systemctlはactivemqを有効にします

7. ActiveMQ ステータスを確認する

sudo systemctl status activemq

![image-20230728180918-9.png](/static/img/9b33d8_image-20230728180918-9.png)

### **2.2.4.ステップ 4 - ActiveMQ サービスの Java ヒープ メモリを構成する**

1. ActiveMQ サービスを停止する

sudo systemctl stop activemq

2. Javaヒープメモリの値を更新する

* 環境ファイルを開く

sudo vi /opt/activemq/bin/env

* 以下の行を更新

ACTIVEMQ\_OPTS\_MEMORY="-Xms1G -Xmx2G"

注記：

* **パラメータ -Xms:** 最小 Java ヒープ サイズ。 \<= 1/4 の RAM 容量を設定してください。

例: akaBot Center マシンの RAM = 4G の場合、-Xms1G を設定します。

* **パラメータ -Xmx:** 最大 Java ヒープ サイズ。 \<= RAM 容量の 1/2 の数値を設定してください。

例: akaBot Center マシンの RAM = 4G の場合、-Xms2G を設定します。

![image-20230728180918-10.png](/static/img/5e80fc_image-20230728180918-10.png)

* 変更を保存して終了します

ESC を押して、「:wq」と入力します。

3. ActiveMQ サービスを再起動します

`sudo systemctl start activemq`

4. ActiveMQ サービスのステータスを確認する

`sudo systemctl status activemq`

![image-20230728180918-11.png](/static/img/cdbedd_image-20230728180918-11.png)

## **2.4. akaBot Center をインストールします**

### **2.4.1.ステップ 1 - インストールフォルダーを解凍します**

1. Tomcat サービスを停止します (実行中の場合)

`sudo systemctl stop tomcat`

2. /opt/tomcat/webapps 内のすべてのフォルダーを削除します

`sudo rm -rf /opt/tomcat/webapps/`

3. akaBot-center-x.x.x.x.war を /opt/tomcat/webapps/ にコピーし、その名前を ROOT.war に変更します。

注: x.x.x.x は、Bot Center のバージョンです。

`cd ~/apps`
  
`sudo cp akaBot-center-3.0.1.2.war /opt/tomcat/webapps/ROOT.war`

4. Tomcat サービスを開始し、Tomcat が実行されてファイル ROOT.war が ROOT フォルダーに抽出されるまで待ちます。

`sudo systemctl start tomcat`

`cd /opt/tomcat/webapps`

`ls –l`

5. Tomcat サービスを停止し、ROOT.war ファイルを削除します。

`sudo systemctl stop tomcat`

`sudo rm /opt/tomcat/webapps/ROOT.war`

### **2.4.2 ステップ 2 - akaBot Center の構成**

**2.4.2.1.ファイルquartz.properties**を設定します。

* ファイルquartz.propertiesを開く

`sudo vi /opt/tomcat/webapps/ROOT/WEB-INF/classes/quartz.properties`

* デフォルトの MySQL Delegate 設定の行をコメントアウトします。

![image-20230728180918-12.png](/static/img/981df3_image-20230728180918-12.png)

* コメントアウトを解除して、Oracle Delegate の設定をオンにします。

![image-20230728180918-13.png](/static/img/3f0b0d_image-20230728180918-13.png)

* 変更を保存して終了します

ESC を押して、「:wq」と入力します。

#### **2.4.2.2.ログバック設定の構成**

1. ログバック設定ファイルを開く

`sudo vi /opt/tomcat/webapps/ROOT/WEB-INF/classes/logback-spring.xml`

2. 次の行を更新します。

`${application.home:-.}/logs/center/akaCenter.%d{yyyy-MM-dd}.%i.log`

に：

`/opt/tomcat/logs/center/akaCenter.%d{yyyy-MM-dd}.%i.log`

3. ラインを更新する

`${application.home:-.}/logs/agents/${agentName}/BotAgent.%d{yyyy-MM-dd}.%i.log`

に：

`/opt/tomcat/logs/agents/${agentName}/BotAgent.%d{yyyy-MM-dd}.%i.log`

4. 必要に応じてログレベルを変更します。例: エラー

5. 他の設定を変更します。

* maxFileSize: 各ファイルのサイズを制限します。例: 100MB。
* maxHistory: オプションの maxHistory プロパティは、保持するアーカイブ ファイルの最大数を制御します。例: 20
* totalSizeCap: オプションの totalSizeCap プロパティは、すべてのアーカイブ ファイルの合計サイズを制御します。例：20GB

 6. 変更を保存して終了します

ESC を押して、次のように入力します: :wq

![1714722756676-901.png](/static/img/ce135d_1714722756676-901.png)

#### 2.4.2.3. Oracle データベース接続の構成

1. ファイルapplication-prod.ymlを開きます

`cd /opt/tomcat/webapps/ROOT/WEB-INF/classes/config/`

`sudo vi application-prod.yml`

2. 以下の画像のようにファイルを更新します。

* MySQL データベースの URL 設定をコメントアウトします。

![image-20230728180918-15.png](/static/img/212be9_image-20230728180918-15.png)

* Oracle データベースの URL のコメントを解除し、以下のようにデータベース接続情報を更新します。
  1. JDBC URL

                   + サービスの SID を使用する場合、JDBC URL 形式は次のようになります。

`url: jdbc:oracle:thin:@<DB-SERVER>:<DB-PORT>:<DB-SID>`

![image-20230728180918-16.png](/static/img/31840d_image-20230728180918-16.png)

                  + サービス名を使用する場合、JDBC URL 形式は次のようになります。

`url: jdbc:oracle:thin:@//<HOST>:<PORT>/<SERVICE NAME>`

![image-20230728180918-17.png](/static/img/bb5292_image-20230728180918-17.png)

                  2. データベースのユーザー名とパスワード

![image-20230728180918-18.png](/static/img/2ade7f_image-20230728180918-18.png)

* MariaDB のドライバーをコメントアウトします。
* Oracle データベースのドライバーのコメントを解除します。
* MySQL の方言とデータベース名の設定をコメントアウトします。
* Oracle の方言とデータベース名の設定のコメントを解除します

![image-20230728180918-19.png](/static/img/5e15fb_image-20230728180918-19.png)

![image-20230728180918-20.png](/static/img/ce977e_image-20230728180918-20.png)

3. 変更を保存して終了します

ESC を押して、「:wq」と入力します。

4. ファイル ***application-dev.yml*** を設定します。

ａ．ファイルapplication-dev.ymlを開きます

`sudo vi application-dev.yml`

b. **同じ手順 2 から手順 3 を繰り返して、ファイル ***application-dev.yml*** を構成します。

### **2.4.3 ステップ 3 – Tomcat サービスを開始し、akaBot Center をテストする**

1. Tomcatサービスを開始する

`sudo systemctl start tomcat`

2. akaBot Center が正常に実行されているかどうかをテストして確認します。

`curl localhost:8080`

**成功例:**

![image-20230728180918-21.png](/static/img/c2be5b_image-20230728180918-21.png)

成功しない場合は、[section 3. Troubleshoot issue](#_3._Troubleshooting_installation)に従って問題をセルフトラブルシューティングしてください。

## 2.4.4.ステップ 4 - Catalina.out を構成する

デフォルトでは、Tomcat はログを *catalina.out* ファイルに書き出すため、ファイル サイズが大幅に増加し、パフォーマンスが低下する可能性があります。これを停止するには、Catalina.out の構成を次のように変更します。

1. ファイルを開く

`sudo vi /opt/tomcat/bin/catalina.sh`

2. ESC を押して、行に「:229」と入力します。

3. catalina.out へのログの書き込みを停止するには、コメントアウトします。

*#CATALINA\_OUT="$CATALINA\_BASE"/logs/catalina.out*

4. コメント行の後に以下の行を追加します。

*CATALINA\_OUT=/dev/null*

5. 変更を保存してファイルを閉じます

ESC を押して、「:wq」と入力します。

![image-20230728180918-22.png](/static/img/ceb131_image-20230728180918-22.png)

**完了!!!** スタンドアロン モデルでの akaBot Center のインストールと構成が正常に完了しました。

**自動化への取り組みにおいて、akaBot Center で素晴らしい経験ができることを願っています!!**

# **3.問題のトラブルシューティング**

さまざまな akaBot Center マシン環境、アカウントの許可、各組織コンテキストの規制設定により、インストール時にさまざまな問題が発生する可能性があります。このセクションは、いくつかの典型的な問題を自分でトラブルシューティングする方法をガイドし、***(継続的に更新)***、専門家によるサポートのための akaBot の連絡先情報を提供することを目的としています。

## **3.1.セルフトラブルシューティング**

インストール中に問題が発生した場合は、以下のアクションに従ってセルフトラブルシューティングを行ってください。

### 3.1.1 ステップ 1 - 問題の検出

ログを使用して問題を検出してください。

* Tomcat サービスの開始に関連する問題については、Tomcat ログ ファイルを使用してください: */opt/tomcat/logs/catalina.out*
* akaBot センターに関連する問題については、センターのログ ファイルを使用してください: */opt/tomcat/logs/center/akaCenter.yyyy—mm-dd.0.log*

1. ログ フォルダーに移動して、以前の実行のログを削除し、すべてのログ ファイルを削除します。

2. サービスを再度開始してログを生成します。

3. ログ ファイルを開いて問題を検出します。

### **3.1.2 ステップ 2 – 問題のトラブルシューティング**

#### 3.1.2.1.問題 1: 自動コミットでコミットできませんでした

**問題:** 以下の画像のように自動コミットでコミットできませんでした:

![image-20230728180918-23.png](/static/img/3dbee7_image-20230728180918-23.png)

**解決：**

1. ステップ[2.2.4 Step 4: Configure Tomcat service](#_Step_4:_Configure)で、サービス構成ファイルの JAVA-OPTS 変数に以下のオプションを追加してください。

*-Doracle.jdbc.autoCommitSpecCompliant=false*

![image-20230728180918-24.png](/static/img/d23ee6_image-20230728180918-24.png)

2. ガイドの次の手順に進みます。
