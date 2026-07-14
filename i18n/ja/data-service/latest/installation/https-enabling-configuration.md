---
id: https-enabling-configuration
title: "HTTPS有効化の設定"
sidebar_label: "HTTPS有効化の設定"
sidebar_position: 2
description: "HTTPS有効化の設定ドキュメント。"
displayed_sidebar: dataServiceSidebar
---
# CenterおよびData ServiceのHTTPS有効化
## 1. 前提条件

* Apache Tomcat 8.5、MySQL/MSSQL、JDK 11、およびActiveMQがインストールされていること。
* `JAVA_HOME` 環境変数が定義されていること。
* akaBot CenterのWARファイルが適切なディレクトリに配置されていること。
* akaBot Data Serviceのファイルが以下のディレクトリに配置されていること：
`C:\akaBot\DataService\*`

## 2. 証明書の生成と信頼設定

## 2.1. 証明書の生成

このガイドラインでは、自己署名証明書（Self-signed certificate）ファイルを生成します。グローバルに信頼され、他のマシンでも受け入れられる証明書を生成するには、IT部門に依頼して証明書を作成する必要があります。

次の操作を行う前に、安全のためにJavaシステムの「cacerts」ファイルをバックアップする必要があります。

![generate-certificate](/static/img/data-service/generate-certificate.png)

次に、管理者権限でコマンドプロンプトを開き、以下のコマンドを実行します。

必要に応じて、ドメイン、パスワード、会社情報を変更してください。

![domain-dataservice](/static/img/data-service/domain-dataservice.png)

上記のコマンドの実行が完了すると、`C:\Program Files\Java\jdk-11\lib\security\cacerts` ファイルが新しいエイリアス名 "akabot" で更新されます。また、カレントディレクトリに以下の3つのファイルが作成されます：

![jdk-11](/static/img/data-service/jdk-11.png)

## 2.2. 既存の証明書のインポート

IT部門がすでに有効な証明書を生成している場合、この証明書を別の形式に変換し、akaBotソフトウェアにインポートすることができます。

![alias-dataservice](/static/img/data-service/alias-dataservice.png)

## 2.3. 証明書の信頼設定

**手動設定 (マシンスコープ)**

CenterおよびData Serviceマシンで、"akabot.cer" ファイルをダブルクリックし、この証明書を [ローカル コンピューター] > [信頼されたルート証明機関] にインストールします。証明書をインストールした後、Windowsの「コンピューター証明書の管理」 > 「信頼されたルート証明機関」 で結果を確認できます。

![manual-dataservice](/static/img/data-service/manual-dataservice.png)

![machine-scope-dataservice](/static/img/data-service/machine-scope-dataservice.png)

**注:** "akabot.cer" ファイルをすべてのAgentマシンにコピーし、同様に信頼設定を行うことを忘れないでください。

**自動設定 (組織スコープ)**

組織内では、すべてのマシンがActive Directoryサーバーに接続されています。各マシンはこのサーバーからすべての証明書とポリシーを取得し、ローカルマシンに適用します。この仕組みを利用して、上記の証明書をすべてのAgentマシンに自動的に信頼させることができます。

これを行うには、上記の証明書をIT部門に送信する必要があります。IT部門は、Active Directoryサーバーの「信頼されたルート証明機関」にその証明書を追加します。

## 3. Data Serviceの設定

"akabot.p12" ファイルを `C:\akaBot\DataService` ディレクトリにコピーします。

![configure-dataservice](/static/img/data-service/configure-dataservice.png)

`C:\akaBot\DataService` ディレクトリにある `application.yml` ファイルを開き、以下のように設定します。

![logging-dataservice](/static/img/data-service/logging-dataservice.png)

![server-dataservice](/static/img/data-service/server-dataservice.png)

`win-install.bat` ファイルの内容が以下のようになっていることを確認します。

![echo-dataservice](/static/img/data-service/echo-dataservice.png)
 
## 4. akaBot Centerの設定

"akabot.jks" ファイルを `C:\Program Files\Apache Software Foundation\Tomcat 8.5\conf` ディレクトリにコピーします。

![tomcat-dataservice](/static/img/data-service/tomcat-dataservice.png)

このディレクトリにある `server.xml` ファイルの内容が以下のようになっていることを確認します。

![server-xml-dataservice](/static/img/data-service/server-xml-dataservice.png)
 
"akabot.p12" ファイルを `C:\Program Files\Apache Software Foundation\Tomcat 8.5\webapps\ROOT\WEB-INF\classes\config` ディレクトリにコピーします。

![akabot-p12-dataservice](/static/img/data-service/akabot-p12-dataservice.png)
 
このディレクトリにある `application-prod.xml` ファイルの内容が以下のようになっていることを確認します。

![application-prod-dataservice](/static/img/data-service/application-prod-dataservice.png)

![data-service-enabled](/static/img/data-service/data-service-enabled.png)

Tomcatの設定アプリケーションを実行し、以下の行を追加して、akaBot Centerがプロファイル "prod,tls" を使用するようにします：

`-Dspring.profiles.active=prod,tls`

![tomcat-8.5-dataservice](/static/img/data-service/tomcat-8.5-dataservice.png)

## 5. アプリケーションの実行

akaBot Data Serviceをインストールして開始するには、管理者権限で "win-install.bat" ファイルを実行します。

Windows サービスを使用してakaBot Centerを開始します。

![run-applications](/static/img/data-service/run-applications.png)