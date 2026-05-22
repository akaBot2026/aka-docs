---
id: install-elk-stack
title: "akaBot Center 用の ELK スタックをインストールする"
sidebar_label: "akaBot Center 用の ELK スタックをインストールする"
sidebar_position: 12
description: "akaBot Center ドキュメント用の ELK スタックをインストールします。"
displayed_sidebar: centerSidebar
---
# akaBot Center 用の ELK スタックをインストールする

# **1.インストール**

## **1.1 Java**

このプロセスの最初のステップは、Java をインストールし、Elasticsearch が Java を見つけられるように環境変数を設定することにより、サーバーを Elastic サービス用に準備することです。

Java ([https://www.java.com/en/](https://www.java.com/en/)) をダウンロードしてインストールします

インストール中にインストール パスをメモしてください。次の手順で知っておく必要があります。 C:\Program Files\Java\jre1.8\_xxx のようなものになるはずです。

![1776051365761-131.png](/static/img/1124ca_1776051365761-131.png)

![1776051391450-311.png](/static/img/e0cb95_1776051391450-311.png)

JAVA\_HOME という名前のシステム変数を作成します。

[システム プロパティ] -> [環境変数] を開き、Java インストールからのパスの値を使用して JAVA\_HOME という名前の新しいシステム変数を作成します。

![1776051433497-983.png](/static/img/67b98f_1776051433497-983.png)

## **1.2 エラスティックサーチ**

Elasticsearch は ELK スタックの中核であり、すべてのデータが保存される場所です。

- ダウンロード パッケージ ([https://www.elastic.co/downloads/elasticsearch](https://www.elastic.co/downloads/elasticsearch)) - バージョン 7.9.3

![1776051583607-548.png](/static/img/8fe54a_1776051583607-548.png)

- ダウンロードしたパッケージをファイル システム内の指定されたフォルダー (例: c:\elk) に抽出します。

- Elasticsearch をインストールするには、Windows PowerShell プロンプト (管理者として実行) を開き、次のコマンドを入力します。

`Invoke-Expression -command  c:\ELK\elasticsearch\bin\elasticsearch-service install `

- Elasticsearch をインストールしたら、以下のコマンドで Elasticsearch サービスのプロパティを開き、スタートアップの種類を自動に変更してサービスを開始します。

` Invoke-Expression -command  c:\ELK\elasticsearch\bin\elasticsearch-service manager `

![1776052277687-801.png](/static/img/5a5435_1776052277687-801.png)

- [http://localhost:9200](http://localhost:9200)への参照を実行します

![1776052395005-832.png](/static/img/5c8496_1776052395005-832.png)

- ポート 9200 を開きます (デフォルトのポート elasticsearch)

## **1.3 ログスタッシュ**

Logstash は、リモート クライアントからデータを受信し、そのデータを Elasticsearch にフィードする責任があります。

- Logstash パッケージを .zip 形式でダウンロードします。

[(https://www.elastic.co/downloads/logstash)](https://www.elastic.co/downloads/logstash)- バージョン 7.9.3

![1776052537954-605.png](/static/img/48c296_1776052537954-605.png)

- 解凍された Logstash フォルダー (例: c:\elk)。

- 次に、構成ファイル (logstash.conf) を作成します。このファイルは Logstash\config ディレクトリに保存する必要があります。

```
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
config ディレクトリには、logstash-sample.conf という名前のサンプル構成ファイルもあり、参照できます。

- NSSM は、Logstash のサービスを作成するために使用されます。ここから NSSM (Non-Sucking Service Manager) をダウンロードできます。

(https://nssm.cc/release/nssm-2.24.zip)

- Logstash をインストールするには、Windows PowerShell プロンプト (管理者として実行) を開き、次のコマンドを入力します。 NSSM (Non-Sucking Service Manager) を使用して Windows サービスとしてインストールします。

**a**。次のコマンドを実行します

Invoke-Expression -command c:\ELK\nssm\win64\nssm install Logstash

**b.** [アプリケーション] タブで、次の設定を行います。

* パス: C:\ELK\logstash\bin\logstash.bat
* 起動ディレクトリ: C:\ELK\logstash\bin
* 引数: -f C:\ELK\logstash\config\logstash.conf

![1776052883129-476.png](/static/img/46a82b_1776052883129-476.png)

**c.** [詳細] タブで、以下を設定します。

* 表示名: Logstash
* 説明: Logstash サービス
* スタートアップの種類: 自動

![1776053004190-976.png](/static/img/19497e_1776053004190-976.png)

**d.** [依存関係] タブで、次のように設定します。

* このサービスは次のように依存します: elasticsearch-service-x64
* 「サービスのインストール」をクリックします

![1776053063612-117.png](/static/img/2ee080_1776053063612-117.png)

**え**。ポート5044を開く

## **1.4 キバナ**

Kibana は、Elasticsearch に保存されているデータを検索するために使用される Web ベースのフロントエンドです。 Kibana のインストールは Logstash のインストールと非常に似ており、サービスの作成には NSSM が再度使用されます。

- Windows 用の Kibana パッケージを .zip 形式でダウンロードします。

([https://www.elastic.co/downloads/kibana](https://www.elastic.co/downloads/kibana)) バージョン 7.9.3

![1776053215456-145.png](/static/img/d766ab_1776053215456-145.png)

- 解凍された Kibana フォルダー (例: c:\elk)。

- Kibana をインストールするには、Windows PowerShell プロンプト (管理者として実行) を開き、次のコマンドを入力します。再度 NSSM (Non-Sucking Service Manager) を使用して、Windows サービスとしてインストールします。

**a.** 次のコマンドを実行します

Invoke-Expression -command c:\ELK\nssm\win64\nssm install Kibana

**b.** [アプリケーション] タブで、次の設定を行います。

* パス: C:\ELK\kibana\bin\kibana.bat
* 起動ディレクトリ: C:\ELK\kibana\bin

![1776053341012-491.png](/static/img/0505c1_1776053341012-491.png)

**c.** [詳細] タブで、以下を設定します。

* 表示名: キバナ
* 説明: KibanaService
* スタートアップの種類: 自動

![1776053406326-710.png](/static/img/83f7b7_1776053406326-710.png)

**d.** [依存関係] タブで、次のように設定します。

* このサービスは次のように依存しています: elasticsearch-service-x64、Logstash
* 「サービスのインストール」をクリックします

![1776053464604-547.png](/static/img/819051_1776053464604-547.png)

- config ディレクトリにある Kibana 構成ファイルに移動します。この場合は C:\ELK\kibana\config\kibana.yml です。

メモ帳でファイルを開き、次の行のコメントを解除または編集します。

![1776053524831-555.png](/static/img/652264_1776053524831-555.png)

server.port を変更し (ポート 5601 を推奨)、ポート (5601) を開きます。

services.msc を開いて、Elasticsearch、Logstash、Kibana のサービスが開始されていることを確認します。

- Kibana がアクセス可能であることを確認します:[http://localhost:5601](http://localhost:5601)

![1776053596498-662.png](/static/img/9afc4d_1776053596498-662.png)

## **1.5 ファイルビート**

Filebeat は、ログ ファイルを収集して logstash に送信するために使用されます。

- Windows 用の Filebeat パッケージを .zip 形式でダウンロードします。

([https://www.elastic.co/fr/downloads/beats/filebeat](https://www.elastic.co/fr/downloads/beats/filebeat)) バージョン 7.9.3

![1776053705946-185.png](/static/img/8f84fa_1776053705946-185.png)

- 解凍された Filebeat フォルダー (例: c:\elk\filebeat)。

- filebeat.yml 設定ファイルを編集して、Elasticsearch の出力をコメントアウトし、ホストを ELK サーバーの IP に設定する Logstash セクションのコメントを解除します: (例: localhost:5044)

![1776063183004-113.png](/static/img/5ebb4a_1776063183004-113.png)

ログ ファイルを含むディレクトリを設定します: C:\Program Files\Apache Software Foundation\Tomcat 8.5\logs\agents\\*\\*.log

![1776063218105-229.png](/static/img/cf1f74_1776063218105-229.png)

- Beats をインストールするには、Windows PowerShell プロンプト (管理者として実行) を開き、次のコマンドを入力します。

PowerShell.exe -ExecutionPolicy UnRestricted -File C:\ELK\filebeat\.\install-service-filebeat.ps1

- services.msc を開いてサービスが開始していることを確認します: Filebeat

![1776063272337-445.png](/static/img/929e81_1776063272337-445.png)

## **1.6 kibana でのインデックス パターンの作成**

インデックス パターンは、どの Elasticsearch インデックスを検索するかを Kibana に指示します。そのため、Elasticsearch にファイル ログ データがあるので、Kibana 側でインデックス パターンを設定する必要があります。

- http://localhost:5601 で Kibana にアクセスし、「Explore on my own」をクリックします。

![1776063338436-767.png](/static/img/237352_1776063338436-767.png)

- 左側のメニューの「管理」（歯車アイコン）をクリックします。

![1776063365041-358.png](/static/img/e2b9da_1776063365041-358.png)

- [Kibana] > [インデックス パターン] をクリックし、パターンとして filebeat-\* を使用してインデックス パターンを作成します。

![1776063403706-761.png](/static/img/8836bf_1776063403706-761.png)

- [タイム フィルター] フィールド名に @timestamp を使用し、[インデックス パターンの作成] をクリックします。

![1776063506491-523.png](/static/img/4baa59_1776063506491-523.png)

![1776063532613-669.png](/static/img/569e85_1776063532613-669.png)

- ファイル ログは、ELK サーバー自体から ELK スタックに流れ込みます。

そして Discover の下にあります。

![1776063579362-885.png](/static/img/c498f1_1776063579362-885.png)

## **2.センターで設定**

- ファイル application.yml を編集 => ディレクトリ: C:\Program Files\Apache Software Foundation\Tomcat 8.5\webapps\ROOT\WEB-INF\classes\config\application.yml

- elasticsearch プロパティを更新します:enabled=true,..

![1776063661414-996.png](/static/img/a78199_1776063661414-996.png)

- Tomcatサービスを再起動します