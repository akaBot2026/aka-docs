---
id: ha-model-windows-server
title: "Windows Server での高可用性モデルのインストール ガイド"
sidebar_label: "Windows Server 上の高可用性モデル"
sidebar_position: 11
description: "Windows Server での高可用性モデルのインストール ガイドに関するドキュメント。"
displayed_sidebar: centerSidebar
---

# Windows Server での高可用性モデルのインストール ガイド

# 1. 始める前に

本ドキュメントは、以下のとおりに高可用性モデル（通称「フェイルオーバー」モデル）にakaBot Centerを新規インストールする方法を案内することを目的としています。

![image-20230804101914-1.png](/static/img/47848a_image-20230804101914-1.png)

**モデルのコンポーネント：**

| **#** | **コンポーネント** | **説明** |
|---|---|---|
| 1 | Nginxロードバランサー | Nginxのロードバランサーは、スピードとキャパシティの使用率を最大化し、パフォーマンス低下につながるサーバーの過負荷にならないように、すべてのakaBot Centerサーバーにわたってクライアントリクエストをルーティングする、akaBot Centerサーバーの前線に巡回する「トラフィック警官」として機能を果たしています。 |
| 2 | akaBot Center | akaBot Centerにより、ユーザが使用中の環境でakaBot エージェントの作成、監視、および展開を管理することができます。 |
| 3 | ActiveMQ Service | akaBot Centerのキュー関連機能をサポートするメッセージングアプリケーションです。 |
| 4 | ELK Stack | akaBot Centerによって生成されたログのディープサーチ、分析と表示を支援する包括的なログ分析ソリューションです。 |
| 5 | Redis Cache | データベース、キャッシュ、メッセージブローカー、そしてストリーミングエンジンとして使用されるインメモリデータ構造ストレージです。Redis Cacheによりデータベースのアクセス回数を軽減することで、必要なトラフィックとインスタンスの削減を実現します。 |

他のモデルまたはakaBot Centerのアップグレードについては、プロジェクトコーディネーター担当（いる場合）にご連絡になるか、[support@akaBot.com](mailto:support@akaBot.com)までメールにてお問い合わせ下さい。

**akaBotチームは、いつでもお客様のインストール作業をサポートいたします。**

インストールを正常に完了するためには、以下の内容を**よく読み**、必要なリソースおよび情報をご用意ください。

## 1.1. ハードウェアの要件

高可用性モデルでakaBot Centerをインストールしてご利用いただくには、以下のハードウェア要件を満たす必要があります。

| **#** | **サーバー** | **数量** | **コア数** | **RAM** | **SSD** | **備考** |
|---|---|---|---|---|---|---|
| 1 | akaBot Centerサーバー | 2 | 08以上 | 32GB以上 | 500GB以上 | akaBot Centerインストール用サーバー |
| 2 | ActiveMQサーバー | 2 | 08以上 | 16GB以上 | 250GB以上 | ActiveMQサービスインストール用サーバー |
| 3 | ELKサーバー | 1 | 16以上 | 16以上 | 100GB以上 | インデックスサービスインストール用サーバー |
| 4 | Redis Cacheサーバー | 1 | 04以上 | 4GB以上 | 100GB以上 | キャッシングサービスインストール用サーバー |
| 5 | Nginxサーバー | 1 | 04以上 | 4GB以上 | 100GB以上 | ロードバランサーサービスインストール用サーバー |

## 1.2. データベースの要件

本インストールモデルの利用には、以下2つのデータベースが必要です。

- akaBot Center用のデータベース（1件）
- ActiveMQサービス用のデータベース（1件）

**上記データベースが使用できる** 状態であることを確認し、以下の接続用準備を各データベースに用意してください。

| **#** | **情報** | **説明** |
|---|---|---|
| 1 | DB-SERVER | データベースのIPアドレス。例：3.112.124.176 |
| 2 | DB-USER | データベースのユーザー名。例：AKA\_CENTER\_01 |
| 3 | DB-PASSWORD | ユーザーのパスワード。例：akaBot123 |
| 4 | DB-PORT | データベースのポート。例：1521 |
| 5 | DB-SID/SERVICE NAME | データベースのSID/サービス名。例：Orcl |

## 1.3. ファイルストレージの要件

Nugetパッケージを保存するための専用フォルダーがファイルストレージサーバー上にあり、akaBot Centerサーバーがそのフォルダーに対する読み取り・書き込みのアクセス許可を持っている必要があります。

例：NFS-NUGET

## 1.4. 権限要件

各マシンでインストールを実行するには、ユーザーアカウントは**Sudoとしての実行権限**を持つが必要があります。

## 1.5. インストールパッケージの準備

akaBot Centerマシンは**以下の正確なバージョン**でインストールパッケージを持つ必要があります。

| **#** | **プラットフォーム名** | **パッケージ名** | **バージョン** | **説明** | **ダウンロードリンク** |
|---|---|---|---|---|---|
| 1 | JDK/JRE | jdk-11.0.20\_windows-x64\_bin.exe | 11.0.20 | OpenJDK | [ダウンロード](https://www.techspot.com/downloads/downloadnow/5553/?evp=cc1002b8f24231deaf82043061a06561&file=6310) |
| 2 | Apache tomcat | apache-tomcat-8.5.89.exe | 8.5.89 | Apache TomcatのWebサーバー | [ダウンロード](https://archive.apache.org/dist/tomcat/tomcat-8/v8.5.89/bin/apache-tomcat-8.5.89.exe) |
| 3 | ActiveMQ | apache-activemq-5.15.1-bin.zip | 5.15.1 | ActiveMQはakaBot Centerのキュー関連機能に使用されます | [ダウンロード](https://archive.apache.org/dist/activemq/5.15.1/apache-activemq-5.15.1-bin.zip) |
| 4 | akaBot Center | akaBot-center-x.x.x.x.war | 3.0.1.2以降 | akaBot Centerのインストールパッケージ | akaBotによって提供されます。プロジェクトコーディネーター、またはsupport@akaBot.comまでご連絡ください。 |
| 5 | Oracle JDBC driver | ojdbc8.jar | ojdbc8 | Oracle JDBCのドライバー | [ダウンロード](https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html) |
| 6 | Nginx Load Balancer | nginx-1.22.1-1.el8.ngx.x86\_64.rpm | 1.22.1 | Nginxロードバランサーのパッケージ | [ダウンロード](https://nginx.org/packages/rhel/8/x86_64/RPMS/) |
| 7 | Redis Cache | redis-5.0.3-5.module+el8.4.0+12927+b9845322.x86\_64.rpm | 5.0.3 | Redis Cacheのパッケージ | [ダウンロード](https://fbi2.cdn.euro-linux.com/dist/eurolinux/server/8/x86_64/certify-AppStream/all/Packages/r/) |
| 8 | Kibana | kibana-7.17.12-x86\_64.rpm | 7.17.12 | Kibanaのパッケージ（オプション） | [ダウンロード](https://artifacts.elastic.co/downloads/kibana/kibana-7.17.12-x86_64.rpm) |
| 9 | Elastic Search | elasticsearch-7.17.12-x86\_64.rpm | 7.17.12 | ElasticSearchのパッケージ | [ダウンロード](https://www.elastic.co/fr/downloads/past-releases/elasticsearch-7-17-12) |
| 10 | Logstash | logstash-7.17.12-x86\_64.rpm | 7.17.12 | ログ分析プラットフォームのパッケージ | [ダウンロード](https://artifacts.elastic.co/downloads/logstash/logstash-7.17.12-x86_64.rpm) |
| 11 | Filebeat | filebeat-7.17.12-x86\_64.rpm | 7.17.12 | Filebeatのパッケージ | [ダウンロード](https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-7.17.12-x86_64.rpm) |

**【注意】**

- サーバーごとのインストールパッケージの保存先として、別のフォルダーを使用する必要があります。本ガイドでは、**/apps** というフォルダーを使用します。

## 1.6. その他の注意事項

**今後起こり得るインストール中のエラーを防ぐよう、以下の注意事項を配慮してください。**

1. フォルダー名に空白文字を入れないでください。
2. 構文エラーを防ぐには、以下を注意してください。
   - 便宜上、コマンドラインを本ガイドからakaBot Centerにコピーして実行してください。
   - 文字エンコードモードが異なるため、コマンドを**メモ帳ファイル**にコピーしてから、akaBot Centerマシンに再度コピーしてください。
   - 設定ファイルを更新する場合はファイルの構文を厳守してください。

# 2. インストール手順

## 2.1. Redisのインストール

RedisはWindowsでは公式サポートされていません。ただし、以下の手順でWindowsにRedisをインストールすることができます。

WindowsにRedisをインストールするには、まず[WSL2](https://docs.microsoft.com/en-us/windows/wsl/install)（Windows Subsystem for Linux）を有効にする必要があります。WSL2を使用すると、WindowsでLinuxバイナリをネイティブに実行できます。この方法を使用するには、Windows 10バージョン2004以降またはWindows 11が必要です。

**ステップ1**：WSL2のインストールまたは有効化

Microsoftが[WSLのインストールに関する詳細な手順](https://docs.microsoft.com/en-us/windows/wsl/install)を提供しています。これらの手順に従って、インストールされるデフォルトのLinuxディストリビューションを確認してください。本ガイドではUbuntuを前提とします。

**ステップ2：** Redisのインストール

WindowsでUbuntuを実行したら、[Ubuntu/Debianへのインストール](https://redis.io/docs/install/install-redis/install-redis-on-linux#install-on-ubuntu-debian)の手順に従って、公式packages.redis.io APTリポジトリから最新の安定版Redisをインストールできます。リポジトリをaptインデックスに追加し、更新してインストールします。

```bash
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
sudo apt-get update
sudo apt-get install redis
```

**ステップ3**：Redisサーバーを起動します。

```
sudo service redis-server start
```

**ステップ4**：Redisへの接続

Redis CLIを使用して接続し、Redisサーバーが実行中であることを確認できます。

```
redis-cli
127.0.0.1:6379> ping
PONG
```

## 2.2. ActiveMQのインストール

高可用性モデルでは、フェイルオーバーの場合の相互バックアップに備える2つのActiveMQサーバーが必要です。

以下の手順を**各サーバーに別々で実行し**、ActiveMQサービスをインストール・設定してください。

### 2.2.1. ActiveMQのインストール

ステップ1：ファイル「apache-activemq-5.15.1-bin.zip」を希望のインストールパスに解凍します。

例：ACTIVEMQ\_PATH = C:\akaBot\apache-activemq-5.15.1

注意：インストールパスにスペースを含めないでください。

![1699244069336-269.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1699244069336-269.png?rev=1.1)

ステップ2：管理者権限でコマンドプロンプトを開きます。

![1699244074920-832.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1699244074920-832.png?rev=1.1)

ステップ3：%ACTIVEMQ\_PATH%\bin\win64\InstallService.batファイルを実行してActiveMQサービスをインストールします。

![1699244080655-576.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1699244080655-576.png?rev=1.1)

ステップ4：ActiveMQサービスを起動します。

![1698830727957-440.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698830727957-440.png?rev=1.1)

### 2.2.2. Javaヒープの設定

**ステップ1：** ActiveMQサービスを停止します。

![1698830792792-356.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698830792792-356.png?rev=1.1)

ステップ2：ファイル **%ACTIVEMQ\_PATH%\bin\win64\wrapper.conf** を開き、以下のパラメータを設定します。

- wrapper.java.initmemory：JavaヒープメモリのInitial値を入力します。

  例：サーバーのRAMが32GBの場合、1024と入力できます。

- wrapper.java.maxmemory：JavaヒープメモリのMaximum値を入力します。

  例：サーバーのRAMが32GBの場合、4096と入力できます。

ステップ3：ActiveMQサービスを起動します。

![1698830915678-493.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698830915678-493.png?rev=1.1)

### 2.2.3. ActiveMQインストールの確認

ステップ1：ActiveMQサービスの実行状態を確認します。実行されていない場合は、サービスを起動します。

![1698830978699-754.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698830978699-754.png?rev=1.1)

ステップ2：URL [http://localhost:8161](http://localhost:8161/) にアクセスして、ActiveMQのインストールが成功したことを確認します。

![1698831013334-870.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698831013334-870.png?rev=1.1)

## 2.3. ELK Stackのインストール

ELK Stackとは、akaBot Centerによって生成されたログのディープサーチ、分析と表示を支援する包括的なログ分析ソリューションです。

ELK Stackのコンポーネントには、以下が含まれています。

1. **Elasticsearch**は、Apacheライセンスに基づいてリリースされている、Apache Lucene上にビルドされたRESTfulの分散検索エンジンです。JavaベースであるElasticsearchは、データの取り込みに加えて、多種フォーマットのドキュメントファイルの検索やインデックス付けができます。
2. **Logstash** は、複数のソースからのデータを統合し、データベースの正規化とデータの分散を実現するデータ収集エンジンです。
3. **Kibana** は、大量のストリーミングデータとリアルタイムデータに特化した、データ可視化・データ探索のオープンソースツールです。Kibanaにより、グラフィックによる可視化を通じて、複雑なデータストリームの簡単かつ迅速な理解ができます。Kibanaコンポーネントのインストールはオプションです。
4. **FileBeat**は、多種の運用データをElasticsearchに直接送信、またはデータの拡張またはアーカイブ化が行われるLogstashの経由で送信するために使用されるエージェントとして、サーバーにインストールされるデータシッパーです。

*【参照】 https://www.techtarget.com/searchitoperations/definition/Elastic-Stack*

ELK Stackをインストールするには、以下の手順を行ってください。

### 2.3.1. ElasticSearchのインストール

:::note
Collaboration Centerを使用する場合は、ElasticSearchをインストールする必要があります。使用しない場合は必須ではありません。
:::

#### a. ElasticSearchのインストール

**ステップ1**：ファイル「elasticsearch-7.17.10-windows-x86\_64.zip」を希望のインストールパスに解凍します。

例：ES\_PATH: C:\akaBot\elasticsearch-7.17.10

![1698831079505-432.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698831079505-432.png?rev=1.1)

**ステップ2：** Elasticsearchサービスをインストールします。「管理者として実行」でコマンドプロンプトを開き、以下のコマンドを実行します。

```
%ES_PATH%\bin\elasticsearch-service.bat install
```

![1698831173260-619.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698831173260-619.png?rev=1.1)

**ステップ3**：以下のコマンドでElasticsearchサービスを起動します。

```
%ES_PATH%\bin\elasticsearch-service.bat start
```

![1698831334372-779.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698831334372-779.png?rev=1.1)

#### b. ElasticSearchの設定

**b.1. セキュリティの設定**

ステップ1：Elasticsearchサービスを停止します。

ステップ2：ファイル%ES\_PATH%\config\elasticsearch.ymlを開き、ファイルの先頭に以下の設定を追加します。

```
xpack.security.enabled: true
```

ステップ3：Elasticsearchサービスを再起動します。

ステップ4：コマンドプロンプトを開き、**%ES\_PATH%\bin\elasticsearch-setup-passwords interactive** を実行します。

Elasticsearchの組み込みユーザーすべてのパスワードを入力します。

![1698831288454-144.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698831288454-144.png?rev=1.1)

**b.2. その他の設定**

ステップ1：「管理者として実行」でコマンドプロンプトを開き、**%ES\_PATH%\bin\elasticsearch-service.bat manager** を実行してElasticsearchサービスの設定管理インターフェースを開きます。

![1698831522366-251.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698831522366-251.png?rev=1.1)

ステップ2：**General**タブで「Startup Type」を選択し、「Automatic」に設定します。

![1698831577184-391.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698831577184-391.png?rev=1.1)

ステップ3：**Logging**タブを設定します。

![1698831635096-754.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698831635096-754.png?rev=1.1)

ステップ4：**Java**タブを設定します。

![1698831653137-277.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698831653137-277.png?rev=1.1)

#### c. ElasticSearchインストールの確認

Elasticsearchサービスの実行状態を確認します。

![1698831705683-754.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698831705683-754.png?rev=1.1)

URL [http://localhost:9200/](http://localhost:9200/) にアクセスして、Elasticsearchのインストールが成功したことを確認します。

![1698831739225-456.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698831739225-456.png?rev=1.1)

![1698831748226-661.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698831748226-661.png?rev=1.1)

### 2.3.2. Logstashのインストール

以下のガイドに従ってLogstashをインストールしてください：[https://www.elastic.co/guide/en/logstash/current/installing-logstash.html](https://www.elastic.co/guide/en/logstash/current/installing-logstash.html)

### 2.3.3. Filebeatのインストール

以下のガイドに従ってFilebeatをインストールしてください：[https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-installation-configuration.html](https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-installation-configuration.html)

### 2.3.4. Kibanaのインストール（オプション）

以下のガイドに従ってWindows ServerにKibanaをインストールしてください：[https://www.elastic.co/guide/en/kibana/current/windows.html](https://www.elastic.co/guide/en/kibana/current/windows.html)

## 2.4. akaBot Centerのインストール

高可用性モデルでは、フェイルオーバーの場合の相互バックアップに備える2つのakaBot Centerサーバーが必要です。

以下の手順を**各サーバーに別々で実行し**、akaBot Centerサービスをインストール・設定してください。

### 2.4.1. JDKのインストール

**ステップ1**：ファイル「jdk-11.0.18\_windows-x64\_bin.exe」をダブルクリックしてJDK/JREをインストールします。インストーラーの指示に従ってください。

![1698826168817-287.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698826168817-287.png?rev=1.1)

**ステップ2：** インストール結果の確認

コマンドプロンプトを開き、「java -version」コマンドを入力してJDK/JREのインストールが成功したことを確認します。

![1698826198507-492.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698826198507-492.png?rev=1.1)

### 2.4.2. Apache Tomcat Webサーバーのインストール

#### a. Apache Tomcatのインストール

ファイル「apache-tomcat-8.5.89.exe」をダブルクリックしてApache Tomcatをインストールします。インストーラーの指示に従ってください。

**注意：** Apache Tomcatインストールの最終ステップで：

- 「Run Apache Tomcat」のチェックを外してください
- 「Show Readme」のチェックを外してください
- 「Finish」ボタンをクリックしてインストールを完了してください。

![1698826414378-509.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698826414378-509.png?rev=1.1)

Apache Tomcatのインストールパス：**%TOMCAT\_PATH%** = "C:\Program Files\Apache Software Foundation\Tomcat 8.5"

#### b. Apache Tomcatの設定

ステップ1：**%TOMCAT\_PATH%\bin** パスに移動し、**Tomcat8w.exe** ファイルをダブルクリックしてApache Tomcatサービスの設定を開きます。

![1698826573279-276.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698826573279-276.png?rev=1.1)

ステップ2：**General**タブを設定します。

- Startup type：Automaticを選択
- **Apply**をクリックして設定を適用します。

![1698826602935-553.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698826602935-553.png?rev=1.1)

ステップ3：**Logging**タブを設定します。

1. Log prefix：「commons-daemon」を削除
2. Redirect Stdout：「auto」を削除
3. Redirect Stderror：「auto」を削除
4. Applyをクリックして設定を適用します。

![1698826668751-847.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698826668751-847.png?rev=1.1)

ステップ4：**Java**タブを設定します。

a. Javaヒープの設定を調整します。

- Initial memory pool：サーバーRAMの½以下の値を入力します。

  例：サーバーRAM = 32 GB → Initial memory pool は ½ \* 16 \* 1024 = 16384 MB 以下

- Maximum memory pool：サーバーRAMの½以下の値を入力します。

  例：サーバーRAM = 32 GB → Maximum memory pool は ½ \* 16 \* 1024 = 16384 MB 以下

**注意**：値が大きすぎるとApache TomcatサービスがStartできなくなりエラーの原因となります。

![1698826792581-457.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698826792581-457.png?rev=1.1)

b. **Apply**をクリックして設定を適用します。

![1698826829349-538.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698826829349-538.png?rev=1.1)

ステップ5：Tomcatサービスを起動します。

**General**タブで**Start**を選択してApache Tomcatサービスを起動します。

![1698826877948-604.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698826877948-604.png?rev=1.1)

#### c. Apache Tomcatインストールの確認

ステップ1：インストールと設定後、Services画面に移動してApache Tomcatサービスのステータスを確認します。

- StatusがRunningでない場合は、Apache Tomcatサービスを起動します。
- StatusがRunningの場合は、ステップ2に進みます。

![1699244034878-897.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1699244034878-897.png?rev=1.1)

ステップ2：ChromeでURL [http://localhost:8080](http://localhost:8080/) にアクセスして、Apache Tomcatのインストールが成功したことを確認します。

![1699244051857-950.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1699244051857-950.png?rev=1.1)

### 2.4.3. akaBot Centerパッケージのインストール

#### a. warファイルのコピーと展開

ステップ1：Apache Tomcatサービスを停止します。

![1698831867557-259.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698831867557-259.png?rev=1.1)

ステップ2：%TOMCAT\_PATH%/webapps内のすべてのフォルダーを削除します。

ステップ3：ファイルakaBot-center-x.x.x.x.warを%TOMCAT\_PATH%/webapps/ディレクトリにコピーし、ROOT.warという名前に変更します。

![1698831956427-192.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698831956427-192.png?rev=1.1)

ステップ4：Apache TomcatサービスをRestartし、ROOT.warがROOTディレクトリに展開されるまで待ちます。

![1698831960528-312.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698831960528-312.png?rev=1.1)

ステップ5：Apache Tomcatサービスを停止します。

![1698831966006-837.png](https://docs.akabot.com/bin/download/akaBot%20Center/Center%20Installation/Installation/Center%20Installation%20guide%20for%20Windows%20Server/WebHome/1698831966006-837.png?rev=1.1)

#### b. akaBot Centerの設定

## 2.5. NGINXロードバランサーのインストール

### 2.5.1. Nginxパッケージのインストール

1. Nginxパッケージをインストールします。

```
cd apps/
sudo rpm -ivh <package name>
```

例：`sudo rpm -ivh nginx-1.22.1-1.el8.ngx.x86_64.rpm`

2. Nginxサーバーを起動して有効にします。

```
sudo systemctl enable nginx
sudo systemctl start nginx
```

3. Nginxのバージョンを確認します。

```
nginx -v
```

```
sudo systemctl status nginx
```

### 2.5.2. Nginxサービスの設定

#### 2.5.2.1. Nginxロードバランシングの設定

1. Nginxサービスを停止します（実行中の場合）。

```
sudo systemctl stop nginx
```

2. 設定ファイルを開きます。

```
sudo vi /etc/nginx/sites-available/default
```

3. 以下のコードをファイルにコピーします。

```nginx
upstream akaBotCenter {
  server <IP-SRV-CENTER-01>:8080;
  server <IP-SRV-CENTER-02>:8080;
}

# ポート80へのすべてのトラフィックを受け入れ、upstreamに転送します。
# upstreamの名前とproxy_passが一致する必要があります。
server {
  listen 80;
  server_name  <YOUR-DOMAIN>;
  client_max_body_size 200M;

  location / {
        proxy_pass http://akaBotCenter;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        # WebSocketサポート (nginx 1.4)
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
  }
}
```

4. ファイル内の変数を更新します。

- `<IP-SRV-CENTER-01>`：akaBot CenterサーバーのIPアドレス01
- `<IP-SRV-CENTER-02>`：akaBot CenterサーバーのIPアドレス02
- `<YOUR-DOMAIN>`：akaBot Centerのドメイン

5. ロードバランシングモードの設定

エンドユーザーからのリクエストを適切なakaBot Centerサーバーに分散するために、以下のいずれかのモードを設定します。

**+ ラウンドロビンモード：** リクエストが各サーバーに順番に分散されます。

ファイルの設定を変更せず、ステップ6に進んでください。

**+ 重み付きラウンドロビンモード：** 各サーバーのリクエスト処理能力と優先度に基づいて重みを割り当てます。リクエストはサーバーの優先度に従って分散されます。

以下のようにupstream設定にweight設定を追加します。

```nginx
upstream akaBotCenter {
  server <IP-SRV-CENTER-01>:8080;
  server <IP-SRV-CENTER-02>:8080 weight=2;
}
```

この例では、akaBot CenterサーバーのIPアドレス02へのリクエストトラフィックがサーバー01の2倍になります。

**+ Least Connections：** リクエストはアクティブな接続数が少ない順にサーバーへ優先的に分散されます。使用するには、以下の設定をupstreamに追加します。

```nginx
upstream akaBotCenter {
  least_conn;
  server <IP-SRV-CENTER-01>:8080;
  server <IP-SRV-CENTER-02>:8080;
}
```

**+ IP Hash：** IP Hashポリシーは、受信リクエストのソースIPアドレスをハッシュキーとして使用し、同じバックエンドサーバーにnon-stickyトラフィックをルーティングします。使用するには、以下の設定をupstreamに追加します。

```nginx
upstream akaBotCenter {
  ip_hash;
  server <IP-SRV-CENTER-01>:8080;
  server <IP-SRV-CENTER-02>:8080;
}
```

6. 変更を保存して終了します。

ESCキーを押して次を入力します：`:wq!`

#### 2.5.2.2. Nginx SSLの設定

プロバイダーのSSLサービスを使用する場合は、プロバイダーのガイドに従ってインストールと設定を行ってください。

それ以外の場合は、以下の手順で自己署名SSL（Self-Signed SSL）を設定してください。

1. SSL証明書の作成（Self-Signed SSL）

```
sudo mkdir /etc/ssl/private
sudo chmod 700 /etc/ssl/private
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt
```

2. Diffie-Hellmanの作成

```
sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048
```

3. 設定ファイルの作成

```
sudo vi /etc/nginx/conf.d/default.conf
```

4. 以下のコードを設定ファイルにコピーします。

```nginx
server {
    listen 443 http2 ssl;
    listen [::]:443 http2 ssl;
    server_name <YOUR-DOMAIN>;
    client_max_body_size 200M;

    ssl_certificate /etc/ssl/certs/nginx-selfsigned.crt;
    ssl_certificate_key /etc/ssl/private/nginx-selfsigned.key;
    ssl_dhparam /etc/ssl/certs/dhparam.pem;

    ########################################################################
    # from https://cipherlist.eu/                                          #
    ########################################################################
    ssl_protocols TLSv1.3; # nginx >= 1.13.0 が必要、それ以外はTLSv1.2を使用
    ssl_prefer_server_ciphers on;
    ssl_ciphers EECDH+AESGCM:EDH+AESGCM;
    ssl_ecdh_curve secp384r1; # nginx >= 1.1.0 が必要
    ssl_session_timeout  10m;
    ssl_session_cache shared:SSL:10m;
    ssl_session_tickets off; # nginx >= 1.5.9 が必要
    ssl_stapling on; # nginx >= 1.3.7 が必要
    ssl_stapling_verify on; # nginx => 1.3.7 が必要
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;
    # HSTSのpreloadを現時点では無効化
    #add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload";
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    ##################################
    # END https://cipherlist.eu/ BLOCK
    ##################################

  location / {
        proxy_pass http://akaBotCenter;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        # WebSocketサポート (nginx 1.4)
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
  }
}
```

5. ファイル内のserver\_name変数をakaBot Centerのドメインに更新します。

```
server_name <YOUR-DOMAIN>;
```

6. HTTPからHTTPSへのリダイレクトを設定します（オプション）。

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name <YOUR-DOMAIN>;
    return 301 https://$host$request_uri;
}
```

8. 変更を保存して終了します。

ESCキーを押して次を入力します：`:wq!`

9. Nginxサービスの設定変更を有効にしてNginxを再起動します。

```
sudo nginx -t
sudo systemctl restart nginx
```

## 2.6. Catalina.outの設定

デフォルトでは、Tomcatは*catalina.out*ファイルにログを出力しますが、これによりファイルサイズが急激に増加しパフォーマンスが低下する可能性があります。これを防ぐために、以下のようにCatalina.outの設定を変更します。

1. ファイルを開きます。

```
sudo vi /opt/tomcat/bin/catalina.sh
```

2. ESCキーを押してから「:229」と入力して229行目に移動します。

3. catalina.outへのログ出力を停止するために、この行をコメントアウトします。

```
#CATALINA_OUT="$CATALINA_BASE"/logs/catalina.out
```

4. コメントアウトした行の後に以下を追加します。

```
CATALINA_OUT=/dev/null
```

5. 変更を保存してファイルを閉じます。

ESCキーを押してから「:wq」と入力します。

**完了!!!** akaBot Centerの高可用性モデルのインストールと設定が正常に完了しました。

**自動化の旅でのakaBot Centerの素晴らしいご体験をお祈りします！！**

# 3. トラブルシューティング

インストール中に、akaBot Centerマシンの環境、アカウント権限、各組織の規制設定などにより、さまざまな問題が発生することがあります。このセクションでは、典型的な問題を自己解決するためのガイド（**継続的に更新**）とakaBotの連絡先情報を提供します。

## 3.1. 自己トラブルシューティング

インストール中に問題が発生した場合は、以下の手順で自己トラブルシューティングを行ってください。

### 3.1.1. ステップ1：問題の検出

ログを使用して問題を検出してください。

- Tomcatサービスの起動に関する問題は、Tomcatログファイルを使用してください：*/opt/tomcat/logs/catalina.out*
- akaBot Centerに関する問題は、Centerログファイルを使用してください：*/opt/tomcat/logs/center/akaCenter.yyyy-mm-dd.0.log*

1. ログフォルダーに移動し、以前の実行のログファイルをすべて削除します。
2. サービスを再起動してログを生成します。
3. ログファイルを開いて問題を検出します。

### 3.1.2. ステップ2：問題のトラブルシューティング

#### 3.1.2.1. 問題1：auto-commitでのコミットができない

**問題：** 以下のように「Could not commit with auto-commit」エラーが発生します。

**解決策：**

1. ステップ2.2.4 ステップ4：Tomcatサービスの設定で、サービス設定ファイルのJAVA-OPTS変数に以下のオプションを追加します。

```
-Doracle.jdbc.autoCommitSpecCompliant=false
```

2. ガイドの次の手順に従い続けます。

## 3.2. エキスパートサポートのためのakaBotチームへの連絡

自己トラブルシューティングで解決できない場合、**akaBotチームは常にお客様のインストール成功をサポートします**。以下の方法でakaBotチームのエキスパートサポートを受けてください。

- プロジェクトコーディネーター（いる場合）にご連絡ください
- または[support@akaBot.com](mailto:support@akaBot.com)にメールを送信してください
- または[akaBotウェブサイト](https://akabot.com/contact-us/)にメッセージを残してください。
