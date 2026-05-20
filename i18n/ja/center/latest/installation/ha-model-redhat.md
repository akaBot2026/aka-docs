---
id: ha-model-redhat
title: "Redhat v9.x の高可用性モデルのインストール ガイド"
sidebar_label: "Redhat v9.x の高可用性モデル"
sidebar_position: 10
description: "Redhat v9.x の高可用性モデルのインストール ガイドに関するドキュメント。"
displayed_sidebar: centerSidebar
---
# Redhat v9.x の高可用性モデルのインストール ガイド


# 1. 始める前に
このドキュメントは、以下のように高可用性モデル (「フェイルオーバー」モデル) に新しい akaBot Center をインストールする方法を案内することを目的としています。

![Architecture](/static/img/high-availability.png)

### モデルコンポーネント:

| # | コンポーネント | 説明 |
|---|-----------|-------------|
| 1 | Nginxロードバランサー | Nginx ロード バランサーは、akaBot Center サーバーの前にある「交通警官」として機能し、速度と容量の使用率を最大化する方法でクライアント リクエストを処理できるすべての akaBot Center サーバー間でクライアント リクエストをルーティングし、パフォーマンスを低下させる可能性のある過負荷状態のサーバーが存在しないようにします。 |
| 2 | 別名ボット センター | akaBot Center を使用すると、環境内での akaBot Agent の作成、監視、展開を管理できます。 |
| 3 | ActiveMQ サービス | akaBot Center のキュー関連機能をサポートするメッセージング アプリケーション。 |
| 4 | エルクスタック | akaBot センターによって生成されたログの詳細な検索、分析、表示を支援する包括的なログ分析ソリューション。 |
| 5 | Redisキャッシュ | データベース、キャッシュ、メッセージ ブローカー、ストリーミング エンジンとして使用されるインメモリ データ構造ストアにより、データベース アクセスが少なくなり、必要なトラフィックとインスタンスの量が削減されます。 |

他のモデルまたは akaBot Center のアップグレードについては、プロジェクト コーディネーター (いる場合) に連絡するか、support@akaBot.com に電子メールを送信してガイダンスを取得してください。

akaBot チームは常にお客様のインストールの成功をサポートします。

> [!重要]
> インストールを正常に完了するために、以下のセクションをよく読み、必要なリソース/情報を準備してください。

## 1.1.ハードウェア要件
高可用性モデルで akaBot Center をインストールして使用するには、以下のハードウェア要件を準備する必要があります。

| # | サーバー | 数量 | コア | RAM | SSD | 注記 |
|---|--------|----------|------|-----|-----|------|
| 1 | akaBot センター サーバー | 2 | 08以上 | 32GB以上 | 500GB以上 | akaBot Center をインストールするサーバー |
| 2 | ActiveMQサーバー | 2 | 08以上 | 16GB以上 | 250GB以上 | ActiveMQ サービスをインストールするサーバー。 |
| 3 | ELKサーバー | 1 | 16以上 | 16以上 | 100GB以上 | インデックスサービスをインストールするサーバー。 |
| 4 | Redisキャッシュサーバー | 1 | 04以上 | 4GB以上 | 100GB以上 | キャッシュ サービスをインストールするサーバー。 |
| 5 | Nginxサーバー | 1 | 04以上 | 4GB以上 | 100GB以上 | ロードバランサーサービスをインストールするサーバー。 |

## 1.2.データベース要件
このインストール モデルには 2 つのデータベースが必要です。
- akaBot Center の 01 データベース
- ActiveMQ サービス用の 01 データベース

これらのデータベースが使用できる状態であることを確認し、接続するために各データベースの以下の情報を準備してください。

| # | 情報 | 説明 |
|---|-------------|-------------|
| 1 | DBサーバー | データベースの IP アドレス。例: 3.112.124.176 |
| 2 | DBユーザー | データベースのユーザー名。例: AKA_CENTER_01 |
| 3 | DBパスワード | ユーザー名のパスワード。例: akaBot123 |
| 4 | DBポート | データベースポート。例: 1521 |
| 5 | DB-SID/サービス名 | データベース SID/サービス名。例: オルクル |

## 1.3.ファイルストレージの要件
Nuget パッケージを保存するための専用フォルダーがファイル ストレージ サーバー上にあり、akaBot Center サーバーがこのフォルダーに対する読み取り/書き込みアクセス許可を持っていることを確認してください。

**例:**`NFS-NUGET`

## 1.4.許可要件
各マシンでインストールを実行するには、ユーザー アカウントに **Sudo** としての実行権限が必要です。

## 1.5.インストールパッケージの準備
akaBot Center マシンに以下の正確なバージョンのインストール パッケージがあることを確認してください。

| # | プラットフォーム名 | パッケージ名 | バージョン | 説明 | ダウンロード |
|---|---------------|--------------|---------|-------------|----------|
| 1 | JDK/JRE | openlogic-openjdk-11.0.16+8-linux-x64-el.rpm | 11.0.16 | OpenJDK | [Download](#) |
| 2 | Apacheトムキャット | apache-tomcat-8.5.57.tar.gz | 8.5.57 | Webサーバー Apache Tomcat | [Download](#) |
| 3 | アクティブMQ | apache-activemq-5.15.1-bin.tar.gz | 5.15.1 | ActiveMQ はキュー関連の機能に使用されます | [Download](#) |
| 4 | 別名ボット センター | akaBot-center-x.x.x.x.war | 3.0.1.2以降 | akaBot Center インストール パッケージ | akaBotが提供 |
| 5 | Oracle JDBCドライバー | ojdbc8.jar | ojdbc8 | Oracle JDBCドライバー | [Download](#) |
| 6 | Nginxロードバランサー | nginx-1.22.1-1.el8.ngx.x86_64.rpm | 1.22.1 | NGINX ロード バランサー パッケージ | [Download](#) |
| 7 | Redisキャッシュ | redis-5.0.3-5.module+el8.4.0+12927+b9845322.x86_64.rpm | 5.0.3 | Redis キャッシュ パッケージ | [Download](#) |
| 8 | キバナ | kibana-7.17.12-x86_64.rpm | 12.7.17 | Kibana パッケージ (オプション) | [Download](#) |
| 9 | 弾性検索 | elasticsearch-7.17.12-x86_64.rpm | 12.7.17 | ElasticSearch パッケージ | [Download](#) |
| 10 | ログスタッシュ | logstash-7.17.12-x86_64.rpm | 12.7.17 | ログ分析基盤パッケージ | [Download](#) |
| 11 | ファイルビート | filebeat-7.17.12-x86_64.rpm | 12.7.17 | ファイルビートパッケージ | [Download](#) |

**注:**
- 各サーバーにインストール パッケージを配置するには、別のフォルダーを使用する必要があります。このガイドでは、`/apps`という名前のフォルダーを使用します。

## 1.6.その他の注意事項
インストール中の今後のエラーを防ぐために、以下の注意事項に注意してください。
- フォルダー名にスペースが含まれていないことを確認してください。
- 構文エラーを防ぐには:
    - 便宜上、このガイドのコマンド ラインを akaBot Center マシンにコピーして実行する必要があります。
    - 文字エンコード モードが異なるため、akaBot Center マシンに再度コピーする前に、コマンドを **メモ帳ファイル** にコピーしてください。
    - 構成ファイルを更新するときは、ファイルの構文に厳密に従ってください。

---

# 2. インストール

## 2.1. Redis をインストールする
Redis サーバーでは、次の 3 つの簡単な手順に従って Redis サービスをインストールして構成してください。

### 2.1.1.ステップ 1 – Redis パッケージをインストールします。
1. システムリポジトリを更新する
```bash
sudo dnf update -y
```

2. Redis パッケージをインストールする
```bash
sudo rpm -ivh <package name>
# Ex: sudo rpm -ivh redis-5.0.3-5.module+el8.4.0+12927+b9845322.x86_64.rpm
```

3. インストールされている Redis のバージョンを確認します。
```bash
rpm -q redis
rpm -qi redis
```
![image-20230804101914-2](/static/img/high-ava.png)

4. Redis サービスを開始して有効にします。
```bash
sudo systemctl start redis
sudo systemctl enable redis
```

5. Redis サービスのステータスを確認する
```bash
sudo systemctl status redis
```
![image-20230804101914-3](/static/img/status.png)

### 2.1.2.ステップ 2 – Redis リモート アクセスを構成する
1. Redis サービスをオフにする (実行中の場合)
```bash
sudo systemctl stop redis
```

2. `redis.conf`ファイルを開く
```bash
sudo vi /etc/redis.conf
```

3. `bind`パラメータ値を検索し、`127.0.0.1`から`0.0.0.0`に更新します。
![image-20230804101914-4](/static/img/bind.png)

4. 変更を保存して終了します。`ESC`を押して、`:wq`と入力します。

5. Redisサービスを再起動します
```bash
sudo systemctl start redis
```

### 2.1.3.ステップ 3 – セキュリティ設定を構成する (オプション)
1. Redis サービスをオフにする (実行中の場合)
```bash
sudo systemctl stop redis
```

2. `redis.conf`ファイルを開く
```bash
sudo vi /etc/redis.conf
```

3. `requirepass`パラメータを検索してコメントを解除します。
![image-20230804101914-5](/static/img/vie.png)

4. 変更を保存して終了します。`ESC`を押して、`:wq`と入力します。

5. Redisサービスを再起動します
```bash
sudo systemctl start redis
```

## 2.2. ActiveMQ をインストールする
高可用性モデルでは、フェイルオーバー状況で相互にバックアップするために 2 つの ActiveMQ サーバーが必要です。以下の手順を繰り返して、2 つの別々のサーバーに ActiveMQ サービスをインストールして構成してください。

### 2.2.1.ステップ 1 - インストール ファイルを抽出する
1. インストールフォルダーに移動します。
```bash
cd apps/
```

2. フォルダーを作成します:`/opt/activemq`
```bash
sudo mkdir /opt/activemq
```

3. Apache ActiveMQ インストール パッケージを抽出し、`/opt/activemq`フォルダーに移動します。
```bash
sudo tar -xvzf apache-activemq-*-bin.tar.gz
sudo mv apache-activemq-5.15.1 /opt/activemq
```

### 2.2.2.ステップ 2 - グループと ActiveMQ ユーザーを作成する
別のアカウントを作成し、Root アカウントを使用する代わりにこのアカウントで ActiveMQ インストールを実行します。

1. ActiveMQグループの作成
```bash
sudo groupadd activemq
```

2. グループ ActiveMQ およびホーム リンクの下にアカウント ActiveMQ を作成します:`/opt/activemq`
```bash
sudo useradd -s /bin/false -g activemq -d /opt/activemq activemq
```

3. ファンクインチョートゥオンActiveMQ
```bash
sudo chown -R activemq:activemq /opt/activemq
```

### 2.2.3.ステップ 3 - ActiveMQ サービスを構成する
1. 構成ファイルの作成:`activemq.service`
```bash
sudo vi /etc/systemd/system/activemq.service
```

2. 以下の内容をこのファイルにコピーします。
```ini
[Unit]
Description=Apache ActiveMQ
After=network.target

[Service]
Type=forking
User=activemq
Group=activemq
ExecStart=/bin/bash /opt/activemq/bin/activemq start
ExecStop=/bin/bash /opt/activemq/bin/activemq stop

[Install]
WantedBy=multi-user.target
```

3. 変更を保存して終了します。`ESC`を押して、`:wq`と入力します。

4. リロードデーモン
```bash
sudo systemctl daemon-reload
```

5. ActiveMQサービスを開始する
```bash
sudo systemctl start activemq
```

6. ActiveMQ サービスを有効にする
```bash
sudo systemctl enable activemq
```

7. ActiveMQ ステータスを確認する
```bash
sudo systemctl status activemq
```
![image-20230804101914-6](/static/img/studio.png)

### 2.2.4.ステップ 4 - ActiveMQ サービスの Java ヒープ メモリを構成する
1. ActiveMQ サービスを停止する
```bash
sudo systemctl stop activemq
```

2. Java ヒープ メモリの値を更新します。環境ファイルを開きます:
```bash
sudo vi /opt/activemq/bin/env
```

以下の行を更新します。
```bash
ACTIVEMQ_OPTS_MEMORY="-Xms1G -Xmx2G"
```

**注:**
- パラメータ`-Xms`: 最小 Java ヒープ サイズ。 \<= 1/4 の RAM 容量を設定してください。 (例: RAM = 4G、-Xms1G を設定)。
- パラメータ`-Xmx`: 最大 Java ヒープ サイズ。 \<= RAM 容量の 1/2 の数値を設定してください。 (例: RAM = 4G、-Xmx2G を設定)。

![image-20230804101914-7](/static/img/xmx.png)

3. 変更を保存して終了します。`ESC`を押して、`:wq`と入力します。

4. ActiveMQ サービスを再起動します
```bash
sudo systemctl start activemq
```

5. ActiveMQ サービスのステータスを確認する
```bash
sudo systemctl status activemq
```
![image-20230804101914-8](/static/img/active.png)

### 2.2.5.ステップ 5 – ActiveMQ サービスを構成します。
1. activemq サービスを停止します
```bash
sudo systemctl stop activemq
```

2. ファイル`ojdbc8.jar`(Oracle JDBC ドライバー) をオプションのライブラリ フォルダーにアップロードしてコピーします。
```bash
cd ~/apps/
cp ojdbc8.jar /opt/activemq/lib/optional/
```

3. ファイル`activemq.xml`を構成します
```bash
sudo vi /opt/activemq/conf/activemq.xml
```

- ブローカー名の変更 (オプション)
![image-20230804101914-9](/static/img/change.png)

- ファイルの最後に以下のコード セクションを追加して、Oracle DataSource を構成します。
```xml
<bean id="oracle-ds" class="org.apache.commons.dbcp2.BasicDataSource" destroy-method="close">
      <property name="driverClassName" value="oracle.jdbc.driver.OracleDriver"/>
      <property name="url" value="<DB-URL>"/>
      <property name="username" value="<DB-USER>"/>
      <property name="password" value="<DB-PASSWORD>"/>
      <property name="poolPreparedStatements" value="true"/>
</bean>
```
![image-20230804101914-10](/static/img/bean.png)

**注:**
- データベースが SID を使用している場合:`DB_URL = jdbc:oracle:thin:@<DB-SERVER>:<DB-PORT>:<DB-SID>`
- データベースがサービス名を使用している場合:`DB_URL = jdbc:oracle:thin:@//<HOST>:<PORT>/<SERVICE NAME>`

4. `persistenceAdapter`構成を変更します。
```xml
<jdbcPersistenceAdapter dataSource="#oracle-ds" createTablesOnStartup="true" />
```
![image-20230804101914-11](/static/img/adapter.png)

5. 変更を保存して終了します。`ESC`キーを押して、`:wq!`と入力します。

6. activemq サービスのステータスを開始して確認する
```bash
sudo systemctl start activemq
sudo systemctl status activemq
```

## 2.3. ELK スタックのインストール
ELK Stack は、akaBot Centers によって生成されたログの詳細な検索、分析、表示を支援する包括的なログ分析ソリューションです。

**コンポーネント:**
- **Elasticsearch**: RESTful 分散検索エンジン。
- **Logstash**: データ収集エンジン。
- **Kibana**: データ視覚化ツール (オプション)。
- **FileBeat**: データ シッパーはエージェントとしてサーバーにインストールされます。

ソース:[Elastic Stack Definition](https://www.techtarget.com/searchitoperations/definition/Elastic-Stack)

### 2.3.1.ステップ 1 - ElasticSearch をインストールする
1. ElasticSearch パッケージをインストールする
```bash
cd apps/
sudo rpm --install elasticsearch-7.17.12-x86_64.rpm
```

2. ElasticSearch サービスを開始する
```bash
sudo systemctl start elasticsearch
```

3. ElasticSearch サービスを有効にする
```bash
sudo systemctl enable elasticsearch
```

4. サービスステータスを確認する
```bash
sudo systemctl status elasticsearch
```

5. ElasticSearch サービスを停止する
```bash
sudo systemctl stop elasticsearch
```

6. 構成用の設定ファイルを開きます。
```bash
sudo vi /etc/elasticsearch/elasticsearch.yml
```

7. 以下の値を更新します。
```yaml
network.host: 0.0.0.0
cluster.initial_master_nodes: ["node-1"]
```

8. 変更を保存して終了します。`ESC`を押して、`:wq`と入力します。

### 2.3.2.ステップ 2 - Logstash をインストールする
1. Logstash パッケージをインストールする
```bash
cd apps/
sudo rpm --install logstash-7.17.12-x86_64.rpm
```

2. LogStash サービスを有効にする
```bash
sudo systemctl enable logstash
```

3. LogStash サービスを開始する
```bash
sudo systemctl start logstash
```

4. LogStash サービスのステータスを確認する
```bash
sudo systemctl status logstash
```

5. LogStash サービスを停止する
```bash
sudo systemctl stop logstash
```

6. LogStash 構成ファイルを開きます。
```bash
sudo vi /etc/logstash/conf.d/logstash.conf
```

7. ファイル内の以下のコードを更新します。
```text
input {
  beats {
    port => 5044
    type => "log"
  }
}

filter {
  json {
    source => "message"
    target => "doc"
  }
}

output {
  elasticsearch {
    hosts => "localhost:9200"
    manage_template => false
    index => "%{[@metadata][beat]}-%{+yyyy.ww}"
    document_type => "%{[@metadata][type]}"
  }
}
```

8. 変更を保存して終了します。`ESC`を押して、`:wq`と入力します。

9. LogStash サービスを開始する
```bash
sudo systemctl start logstash
```

### 2.3.3.ステップ 3 - Filebeat をインストールする
1. FileBeat パッケージをインストールする
```bash
cd apps/
sudo rpm --install filebeat-7.17.12-x86_64.rpm
```

2. FileBeat サービスを有効にする
```bash
sudo systemctl enable filebeat
```

3. FileBeatサービスを開始する
```bash
sudo systemctl start filebeat
```

4. FileBeat サービスのステータスを確認する
```bash
sudo systemctl status filebeat
```

5. FileBeat サービスを停止する
```bash
sudo systemctl stop filebeat
```

6. FileBeat 設定ファイルを開きます。
```bash
sudo vi /etc/filebeat/filebeat.yml
```

7. ファイル内のコードを次のように更新します。
```yaml
filebeat.inputs:
- type: log
  paths:
    - /opt/tomcat/logs/agents/*/*.log
```

8. コードの下のコメントを解除します。
```yaml
output.logstash:
  hosts: ["localhost:5044"]
```

9. 変更を保存して終了します。`ESC`を押して、`:wq`と入力します。

10. FileBeatサービスを開始する
```bash
sudo systemctl start filebeat
```

### 2.3.5.ステップ 4 - Kibana をインストールする (オプション)
1. Kibana パッケージをインストールする
```bash
cd apps/
sudo rpm --install kibana-7.17.12-x86_64.rpm
```

2. Kibana サービスを有効にする
```bash
sudo systemctl enable kibana
```

3. Kibanaサービスを開始する
```bash
sudo systemctl start kibana
```

4. Kibana サービスのステータスを確認する
```bash
sudo systemctl status kibana
```

5. Kibana サービスを停止する
```bash
sudo systemctl stop kibana
```

6. Kibana 構成ファイルを開きます。
```bash
sudo vi /etc/kibana/kibana.yml
```

7. ファイル内の以下のコードを更新します。
```yaml
server.port: 5601
server.host: "0.0.0.0"
```

8. 変更を保存して終了します。`ESC`を押して、`:wq`と入力します。

9. Kibanaサービスを開始する
```bash
sudo systemctl start kibana
```

## 2.4. akaBot センターをインストールする
高可用性モデルでは、フェイルオーバー状況で相互にバックアップするために 2 つの akaBot Center サーバーが必要です。以下の手順を繰り返して、2 つの別々のサーバーに akaBot Center サービスをインストールして構成してください。

### 2.4.1.ステップ 1 - JDK をインストールする
**注:**
- akaBot マシンに JDK 11 未満がインストールされている場合は、JDK 11 にアップグレードしてください。
- それ以外の場合は、この手順を無視してください。

1. インストールフォルダーに移動します。
```bash
cd apps/
```

2. インストールコマンドを実行します。
```bash
sudo yum install openlogic-openjdk-11.0.16+8-linux-x64-el.rpm
```

3. インストールを確認します。
```bash
java -version
```
![image-20230804101914-12](/static/img/java.png)

### 2.4.2.ステップ 2 - Apache Tomcat Web サーバーをインストールする

#### 2.4.2.1.ステップ 1: インストール ファイルを抽出する
1. インストールフォルダーに移動します。
```bash
cd apps/
```

2. フォルダーを作成します:`/opt/tomcat`
```bash
sudo mkdir /opt/tomcat
```

3. Apache Tomcat を抽出します。
```bash
sudo tar xzvf apache-tomcat-8*tar.gz -C /opt/tomcat --strip-components=1
```

#### 2.4.2.2.ステップ 2: グループとユーザー Tomcat を作成する
1. Tomcat グループを作成します。
```bash
sudo groupadd tomcat
```

2. Tomcat アカウントを作成します。
```bash
sudo useradd -s /bin/false -g tomcat -d /opt/tomcat tomcat
```

3. マシン コード用にアカウント Tomcat を構成します (ライセンスのアクティベーション)。
```bash
sudo visudo /etc/sudoers
```
最後に以下の行を追加します。
```text
tomcat ALL= NOPASSWD: ALL
```
![image-20230804101914-13](/static/img/all.png)

変更を保存:`ESC`キーを押して、`:wq`と入力します。

4. 現在のユーザーをグループ Tomcat に追加します。
```bash
sudo usermod -g tomcat [current_user_logged]
```

#### 2.4.2.3.ステップ 3: フォルダーのアクセス権を構成する
1. 所有権を変更します。
```bash
cd /opt
sudo chown tomcat:tomcat tomcat
ls -l
```
![image-20230804101914-14](/static/img/is.png)

2. 権限を構成します。
```bash
cd /opt/tomcat
sudo chgrp -R tomcat /opt/tomcat
sudo chmod -R g+r conf
sudo chmod g+x conf
sudo chown -R tomcat webapps/ work/ temp/ logs/
ls -l
```
![image-20230804101914-15](/static/img/sudo.png)

#### 2.4.2.4 ステップ 4: Tomcat サービスの実行を構成する
1. Java インストール フォルダーを取得します。
```bash
sudo update-alternatives --list | grep java
```
![image-20230804101914-16](/static/img/grep.png)
`%JAVA_HOME% = /usr/lib/jvm/openlogic-openjdk-11-hotspot`

2. `tomcat.service`ファイルを作成します。
```bash
sudo vi /etc/systemd/system/tomcat.service
```

3. 以下のコードをファイルにコピーします。
```ini
[Unit]
Description=Apache Tomcat Web Application Container
After=network.target

[Service]
Type=forking
Environment=JAVA_HOME=/usr/lib/jvm/openlogic-openjdk-11-hotspot
Environment=CATALINA_PID=/opt/tomcat/temp/tomcat.pid
Environment=CATALINA_HOME=/opt/tomcat
Environment=CATALINA_BASE=/opt/tomcat
Environment='CATALINA_OPTS=-Xms1G -Xmx2G -server -XX:+UseParallelGC'
Environment='JAVA_OPTS=-Djava.awt.headless=true -Djava.security.egd=file:/dev/./urandom'
WorkingDirectory=/opt/tomcat
ExecStart=/opt/tomcat/bin/startup.sh
ExecStop=/opt/tomcat/bin/shutdown.sh
User=tomcat
Group=tomcat
RestartSec=10
Restart=always

[Install]
WantedBy=multi-user.target
```

4. `JAVA_HOME`変数を更新します。

環境=JAVA_HOME=%JAVA_HOME%

環境=JAVA_HOME=/usr/lib/jvm/openlogic-openjdk-11-hotspot

5. Java ヒープ メモリ サイズを変更します。

環境='CATALINA_OPTS=-Xms1G -Xmx2G -server -XX:+UseParallelGC'

* パラメータ -Xms: 最小 Java ヒープ サイズ。 \<= 1/4 の RAM 容量を設定してください。
      
例: akaBot Center マシンの RAM = 4G の場合、-Xms1G を設定します。

* パラメータ -Xmx: 最大 Java ヒープ サイズ。 \<= RAM 容量の 1/2 の数値を設定してください。
           
例: akaBot Center マシンの RAM = 4G の場合、-Xms2G を設定します。

6. 変更を保存して終了します

ESC を押して、「:wq」と入力します。

#### 2.4.2.5 ステップ 5: Tomcat ログの構成
1. `/opt/tomcat/conf/logging.properties`ファイルを開きます
2. `maxDays`属性を追加して、catalina、localhost、host-manager、manager ログについて、ローテーションされたアクセス ログが削除されるまで保持される最大日数を指定します。指定しない場合は、デフォルト値の -1 が使用されます。これは、古いファイルを削除しないことを意味します。例: 10 日分の履歴を保持します。
```text
1catalina.org.apache.juli.AsyncFileHandler.maxDays = 10
2localhost.org.apache.juli.AsyncFileHandler.maxDays = 10
3manager.org.apache.juli.AsyncFileHandler.maxDays = 10
4host-manager.apache.juli.AsyncFileHandler.maxDays = 10
```
![1714726922102-116](/static/img/manager.png)

3. 変更を保存して終了します。

4. `/opt/tomcat/conf/server.xml`ファイルを開きます
5. ログをオンにするには、ログ設定の行のコメントを解除します。
6. 属性 maxDays を追加して、catalina、localhost、host-manager、manager ログについて、ローテーションされたアクセス ログが削除されるまで保持される最大日数を指定します。指定しない場合は、デフォルト値の -1 が使用されます。これは、古いファイルを削除しないことを意味します。例: 10 日分の履歴を保存します。

例: maxDays="10"

![1714726968776-214](/static/img/maxdays.png)
7. 変更を保存して終了します

8. リロードデーモン:
```bash
sudo systemctl daemon-reload
```

9. Tomcat サービスを開始します (`webapps`に`ROOT`フォルダーのみが存在することを確認します)。
```bash
sudo systemctl start tomcat
```

10. Tomcat サービスを有効にします。
```bash
sudo systemctl enable tomcat
```

11. Tomcat のステータスを確認します。
```bash
sudo systemctl status tomcat
```
![image-20230804101914-17](/static/img/hi.png)

```bash
curl localhost:8080
```
![image-20230804101914-18](/static/img/owner.png)

11. ログの所有者/グループを変更します。
```bash
sudo chown -R tomcat /opt/tomcat/logs
sudo chgrp -R tomcat /opt/tomcat/logs
```

## 2.4.3.ステップ 3 - akaBot Center パッケージをインストールする

### 2.4.3.1.インストールフォルダーを解凍します
1. Tomcat サービスを停止します (実行中の場合)。
```bash
sudo systemctl stop tomcat
```

2. `/opt/tomcat/webapps`内のすべてのフォルダーを削除します。
```bash
sudo rm -rf /opt/tomcat/webapps/*
```

3. `akaBot-center-x.x.x.x.war`を`/opt/tomcat/webapps/`にコピーし、その名前を`ROOT.war`に変更します。
```bash
cd ~/apps
sudo cp akaBot-center-3.0.1.2.war /opt/tomcat/webapps/ROOT.war
```

4. Tomcat を起動し、抽出を待ちます。
```bash
sudo systemctl start tomcat
cd /opt/tomcat/webapps
ls –l
```

5. Tomcat を停止し、`ROOT.war`を削除します。
```bash
sudo systemctl stop tomcat
sudo rm /opt/tomcat/webapps/ROOT.war
```

### 2.4.3.2. akaBot センターを構成する
akaBot Center がデータベース、キャッシュ、およびキュー サービスと対話できるようにするには、次のように構成します。

#### A. ファイル`quartz.properties`を設定します。
1. ファイルを開く:
```bash
sudo vi /opt/tomcat/webapps/ROOT/WEB-INF/classes/quartz.properties
```

2. 使用するデータベースの種類 (MSSQL 上の Oracle または MySQL) に応じて、次のように実行します。

* データベース タイプの`driverDelegateClass`変数の行のコメントを解除して、データベース タイプの設定を有効にします。

例: Oracle データベースを使用し、Oracle の行のコメントを解除します。

![image-20230804101914-19](/static/img/data.png)
* `driverDelegateClass`変数他のデータベース タイプの行をコメント アウトして、他のデータベース タイプの設定を無効にします。

![image-20230804101914-20](/static/img/qua.png)

3. 変更を保存して終了します。`ESC`を押して、`:wq`と入力します。

#### B. ログバック設定を構成する
1. ログバック設定ファイルを開きます。
```bash
sudo vi /opt/tomcat/webapps/ROOT/WEB-INF/classes/logback-spring.xml
```

2. 次の行を更新します。
```text
/opt/tomcat/logs/center/akaCenter.%d{yyyy-MM-dd}.%i.log
To:
/opt/tomcat/logs/agents/${agentName}/BotAgent.%d{yyyy-MM-dd}.%i.log
```

3. ラインを更新する
```bash
${application.home:-.}/logs/agents/${agentName}/BotAgent.%d{yyyy-MM-dd}.%i.log
```
4. 必要に応じてログレベルを変更します。例: エラー
5. 他の設定を変更します。
* maxFileSize: 各ファイルのサイズを制限します。例: 100MB。
* maxHistory: オプションの maxHistory プロパティは、保持するアーカイブ ファイルの最大数を制御します。例: 20
* totalSizeCap: オプションの totalSizeCap プロパティは、すべてのアーカイブ ファイルの合計サイズを制御します。例：20GB
6. 変更を保存して終了します。

`ESC`を押して、`:wq`と入力します。
![1714722756676-901](/static/img/log.png)
![1714722756676-901](/static/img/log.png)

#### C. データベース接続の構成
1. ファイルapplication-prod.ymlを開きます
```text
cd /opt/tomcat/webapps/ROOT/WEB-INF/classes/config/

sudo vi application-prod.yml
```
2. 使用するデータベースの種類 (Oracle、MSSQL、または MySQL) に応じて、次のようにファイルを更新します。

例: データベースの種類は Oracle です

ａ．データベースの URL を更新する
* データベースの URL 行のコメントを解除し、対応する URL を更新します。
* 他のデータベースの URL 行をコメントアウトします。

**Oracle URL 形式:**
* サービスの SID を使用する場合、URL 形式は次のようになります。

`url: jdbc:oracle:thin:@<DB-SERVER>:<DB-PORT>:<DB-SID>`
![image-20230804101914-23](/static/img/orcl.png)

* サービス名を使用する場合、JDBC URL 形式は次のようになります。
 
`url: jdbc:oracle:thin:@//<DB-SERVER>:<PORT>/<SERVICE NAME>`
![image-20230804101914-24](/static/img/oracle.png)

MSSQL URL 形式:

`url: jdbc:sqlserver://<DB-SERVER>:<DB-PORT>;databaseName=<DB- NAME>;encrypt=true;trustServerCertificate=true;`

MySQL URL 形式:

` url: jdbc:mysql://< DB-SERVER >:<DB-PORT>/<DB-NAME>`

b.データベースのユーザー名とパスワードを更新します

c. driverClassName 変数を更新します。

+ データベース タイプの driverClassName 変数の行のコメントを解除します。

+ 他のデータベース タイプの driverClassName 変数の行をコメント アウトします。

![image-20230804101914-26.png](/static/img/image-20230804101914-26.png)

d.データベースプラットフォームとデータベース変数を更新する

+ データベース プラットフォームとデータベース タイプのデータベース変数の行のコメントを解除します。

+ 他のデータベース タイプのデータベース プラットフォームおよびデータベース変数の行をコメント化します。

![image-20230804101914-27.png](/static/img/image-20230804101914-27.png)

e.変更を保存して終了します

ESC を押して、「:wq」と入力します。

3. `application-dev.yml`ファイル用に設定します。

ａ．ファイルapplication-dev.ymlを開きます

sudo vi application-dev.yml
   
b.同じステップ 2 からステップ 3 を繰り返して、ファイル application-dev.yml を構成します。

#### D. ActiveMQ 接続の構成
1. `application.yml`を開く

cd /opt/tomcat/webapps/ROOT/WEB-INF/classes/config/

sudo vi application.yml

2. `brokerURL`の値を更新します。
```yaml
brokerURL: failover:(tcp://<IP-ACTIVEMQ-01>:61616,tcp://<IP-ACTIVEMQ-02>:61616)?randomize=false&jms.messagePrioritySupported=true&nested.wireFormat.maxInactivityDurationInitalDelay=30000
```

その中で:

+ \<IP-ACTIVEMQ-01\>: ActiveMQ サーバー 01 の IP アドレス

+ \<IP-ACTIVEMQ-02\>: ActiveMQ サーバー 02 の IP アドレス
![image-20230804101914-28](/static/img/mq.png)

3. 変更を保存して終了します。
ESC を押して、「wq」と入力します。

#### E. Redis キャッシュ接続の構成
1. `application-prod.yml`ファイルを開きます

cd /opt/tomcat/webapps/ROOT/WEB-INF/classes/config/

sudo vi application-prod.yml

2. 以下のようにファイルを更新します

* `mode`を`1`および`server`URL に更新します。

![image-20230804101914-30](/static/img/redis.png)

* サーバー変数の値を更新します。
```yaml
If your Redis service requires a password, then server variable’s value is:
server: redis://:<REDIS-PASSWD>@<REDIS-IP>:6379

otherwise, server variable’s value is:
server: redis://<REDIS-IP>:6379
```
3. 変更を保存して終了します

ESC を押して、「:wq」と入力します。

4. `application-dev.yml`ファイル用に設定します。

ａ．ファイルapplication-dev.ymlを開きます

sudo vi application-dev.yml

b.同じステップ 2 からステップ 3 を繰り返して、ファイル application-dev.yml を構成します。

#### F. ElasticSearch 接続の構成
1. `application.yml`ファイルを開きます

cd /opt/tomcat/webapps/ROOT/WEB-INF/classes/config/

sudo vi application.yml

2. 以下のように、ファイルの末尾に以下のコードを追加します。
```yaml
elasticsearch:
  enabled: true
  clustername: elasticsearch
  index: filebeat-*
  host: <IP_ES>
  port: 9200
  user:
  password:
  index-max-result-window: 20000000
```
ここで: \<IP_ES\>は ElasticSearch サーバーの IP アドレスです。

3. 変更を保存して終了します

ESC を押して、「:wq」と入力します。

## G. Elasticsearch 設定の構成

### ステップ 1:`application-prod.yml`ファイルを開く

```bash
cd /opt/tomcat/webapps/ROOT/WEB-INF/classes/config/

sudo vi application-prod.yml
```

---

### ステップ 2: 以下のコードをコメントアウトして Tomcat のデフォルト設定をオフにします

次の行を見つけます。

```yaml
hibernate.search.backend.directory.root: indexes/
hibernate.search.backend.type: lucene
```

それらをコメントアウトします。

```yaml
#hibernate.search.backend.directory.root: indexes/
#hibernate.search.backend.type: lucene
```

---

### ステップ 3: 以下のコードのコメントを外して、エラスティック検索設定をオンにします

次の構成を追加するか、コメントを解除します。

```yaml
hibernate.search.backend.type: elasticsearch
hibernate.search.backend.host: <IP_ES>:9200
hibernate.search.backend.protocol: http
hibernate.search.backend.username:
hibernate.search.backend.password:
```

例:

```yaml
hibernate.search.backend.type: elasticsearch
hibernate.search.backend.host: 3.112.124.176:9200
hibernate.search.backend.protocol: http
hibernate.search.backend.username:
hibernate.search.backend.password:
```

場所:

- `<IP_ES>`は Elasticsearch サーバーの IP アドレスです

---

### ステップ 4: 変更を保存して終了する

`ESC`を押して、次のように入力します。
:wq
```

---

## Step 5: Configure `application-dev.yml`

Open the file:

```bash
sudo vi application-dev.yml
```

Repeat the same configuration from **Step 2 → Step 4**.

### 2.4.3.3. Step 3 – Start Tomcat Service and Test
1. Start Tomcat:
```bash
sudo systemctl tomcatを起動
```

2. Test connection:
```bash
カールローカルホスト:8080
```
![image-20230804101914-33](/static/img/image-20230804101914-33.png)

---

## 2.5 Install NGINX Load Balancer

### 2.5.1. Step 1 - Install Nginx package
1. Install package:
```bash
CD アプリ/
sudo rpm -ivh<package name>
```

2. Start and enable Nginx:
```bash
sudo systemctl で nginx を有効にする
sudo systemctl nginxを起動
```

3. Verify:
```bash
nginx -v
sudo systemctlステータスnginx
```
![image-20230804101914-34](/static/img/image-20230804101914-34.png)

![image-20230804101914-35](/static/img/image-20230804101914-35.png)

### 2.5.2. Step 2 - Configure Nginx service

#### 2.5.2.1. Configure Nginx Load Balancing
1. Stop Nginx: `sudo systemctl stop nginx`
2. Open `/etc/nginx/sites-available/default`
3. Configure `upstream` and `server` blocks:
```nginx
アップストリーム akaBotCenter {
サーバー<IP-SRV-CENTER-01>:8080;
サーバー<IP-SRV-CENTER-02>:8080;
}

サーバー {
80を聞いてください。
サーバー名<YOUR-DOMAIN>;
client_max_body_size 200M;
場所 / {
proxy_pass http://akaBotCenter;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header ホスト $host;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_http_バージョン 1.1;
proxy_set_header アップグレード $http_upgrade;
proxy_set_header 接続「アップグレード」;
}
}
```

#### 2.5.2.2. Configure Nginx SSL
Follow provider guides or use Self-Signed SSL:
1. Create SSL Cert:
```bash
sudo mkdir /etc/ssl/private
sudo chmod 700 /etc/ssl/private
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt
```

2. Create Diffie-Hellman:
```bash
sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048
```

3. Configure `/etc/nginx/conf.d/default.conf` with SSL settings.

---

## 2.6. Configure Catalina.out
By default, Tomcat will write out the logs into catalina.out file which may cause dramatic increasing of the file size and decrease the performance. To stop this, change the configuration in Catalina.out as below:

1. Open the file `/opt/tomcat/bin/catalina.sh`

2. Press ESC then type: “:229” to the line 229
3. Comment out this line to stop writing log to catalina.out.: `#CATALINA_OUT="$CATALINA_BASE"/logs/catalina.out`
4. Add below line affer the commented line.: `CATALINA_OUT=/dev/null`
5. Save changes and close the file.

    Press ESC then type: “:wq”

![image-20230804101914-36](/static/img/image-20230804101914-36.png)

**DONE!!!** You have successfully completed the akaBot Center installation and configuration in High Availability model.

---

# 3. Troubleshoot issues

## 3.1. Self-Troubleshoot
If any raised issue during your installation, please follow below actions to self-troubleshoot.
### 3.1.1 Step 1 - Detect issue
Please use the logs to detect the issue.

Issues related to Tomcat service start, please use Tomcat log file: `/opt/tomcat/logs/catalina.out`
Issues related to akaBot Center, please use Center log file: /opt/tomcat/logs/center/akaCenter.yyyy—mm-dd.0.log
1. Remove the log of previous run by navigating to log folder then remove all the log files.

2. Start service again to generate log.

3. Open the log file to detect the issue.


### 3.1.2 Step 2 – Troubleshoot  issues
#### Issue 1: Could not commit with auto-commit

Issue: Could not commit with auto-commit as below image:

![image-20230804101914-37](/static/img/image-20230804101914-37.png)

**Solution:** 
1. At step 2.2.4 Step 4: Configure Tomcat service, please add below option into the JAVA-OPTS variable into service configuration file.
`-Doracle.jdbc.autoCommitSpecCompliant=false` 

![image-20230804101914-38](/static/img/image-20230804101914-38.png)

2. Continue to follow the next steps in the guide