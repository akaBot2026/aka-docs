---
id: https-enabling-configuration
title: "HTTPS 有効化構成"
sidebar_label: "HTTPS 有効化構成"
sidebar_position: 2
description: "HTTPS 有効化構成ドキュメント。"
displayed_sidebar: dataServiceSidebar
---
# HTTPS 有効化構成

# **1.導入**

このドキュメントでは、Center と Data Service の HTTPS モードを有効にする方法について説明します。

## **2.前提条件**

## **2.1.システム要件**

* akaBot Center とデータ サービスは、以下のコンポーネントを使用してインストールされ、HTTP モードで通常どおり実行されています。
  * Webサーバー Apache Tomcat 8.5
  + データベース MySQL または MSSQL または Oracle
  + JDK11
  + アクティブMQ
* Center & Data Service マシンでは、JAVA\_HOME 環境変数を定義する必要があります。

## **2.2.ファイル要件**

組織内の他のマシンで受け入れられるように、IT 部門が発行したグローバル証明書を使用することを強くお勧めします。

この場合、IT 部門に連絡して以下の 2 つのファイルを入手してください。

* 組織のセキュリティ証明書ファイル。例: fpt.local.cer
* 個人情報交換ファイル。例: fpt.pfx

そうでない場合は、このファイル要件を無視してください。

## **2.3.情報要件**

以下の情報が必要です。

* Data Service のインストール ディレクトリ パス。例: C:\akaBot\DataService\\*
* Tomcat インストール ディレクトリ パス (TOMCAT\_PATH と呼ばれます)。例: %TOMCAT\_PATH% = “C:\Program Files\Apache Software Foundation\Tomcat 8.5”

# **3. akaBot セキュリティ証明書を準備して信頼する**

まず akaBot セキュリティ証明書を準備し、それをマシン内で信頼する必要があります。

## **3.1. akaBot セキュリティ証明書を準備します。**

**ステップ 1:** Java セキュリティ フォルダーを開きます。

フォルダーパス：「C:\Program Files\Java\jdk-11\security」

**ステップ 2:** エラーが発生した場合にロールバックできるように、Java システムの *cacerts* および *cacerts - オリジナル* ファイルを別のフォルダーにバックアップします。

![1701237970933-820.png](/static/img/caeabe_1701237970933-820.png)

**ステップ 3**: コマンドを準備する

**ケース 1**: IT 部門からの既存の組織証明書を使用する場合は、以下のコマンドで更新します。

* あなたのパスワード
* IT 部門からの組織のセキュリティ証明書ファイル。例: fpt.local.cer
* IT 部門からの個人情報交換ファイル。例: fpt.pfx

|  |
| --- |
|ALIAS=akabot を設定します  
set PASSWORD=あなたのパスワード
REM を Java キーにインポート
keytool -importcert -alias %ALIAS% - キーストア "%JAVA\_HOME%\lib\security\cacerts" -storepass changeit -file fpt.local.cer
REM は JAVA 用の JKS ファイルを生成します
keytool -importkeystore -destkeystore akabot.p12 -deststoretype pkcs12 -alias
%ALIAS% -srckeystore fpt.pfx -deststorepass %PASSWORD%
keytool -importkeystore -srckeystore akabot.p12 -srcstoretype pkcs12 -srcalias akabot -destkeystore akabot.jks -deststoretype jks -deststorepass %PASSWORD% -destalias %ALIAS%
keytool -importkeystore -srckeystore akabot.jks -destkeystore akabot.jks -deststoretype pkcs12 | keytool -importkeystore -srckeystore akabot.jks -destkeystore akabot.jks -deststoretype pkcs12

**ケース 2:** 自己署名証明書を生成する場合は、以下のコマンドで更新します。

  * あなたのドメイン
  * あなたのパスワード
  * あなたの組織名
```batch
set DOMAIN=YOURDOMAIN.COM
set ALIAS=akabot
set PASSWORD=YOURPASSWORD
set ORGANIZATION_NAME=YOUR ORGANIZATION NAME

REM Generate keypair: jks file
"%JAVA_HOME%\bin\keytool.exe" -genkeypair -alias %ALIAS% -keyalg RSA -keysize 2048 -keystore akabot.jks -storepass %PASSWORD% -keypass %PASSWORD% -dname "CN=%DOMAIN%, OU=Unknown, O=%ORGANIZATION_NAME%, L=Ho Chi Minh, ST=Ho Chi Minh, C=VN"

REM Convert to *.p12 file
"%JAVA_HOME%\bin\keytool.exe" -importkeystore -srckeystore akabot.jks -srcstoretype JKS -srcstorepass %PASSWORD% -destkeystore akabot.p12 -deststoretype PKCS12 -storepass %PASSWORD%

REM Export to *.cer file
"%JAVA_HOME%\bin\keytool.exe" -export -alias %ALIAS% -keystore akabot.p12 -storetype PKCS12 -storepass %PASSWORD% -rfc -file akabot.cer

REM Import and trust globally
REM The default password for the 'cacerts' truststore is usually 'changeit'
"%JAVA_HOME%\bin\keytool.exe" -importcert -alias %ALIAS% -keystore "%JAVA_HOME%\lib\security\cacerts" -storepass changeit -file akabot.cer
```

**ステップ 4:** コマンド プロンプト プログラムを開き、ステップ 3 で準備したコマンドを実行します。

**注意:** 既存の証明書を使用する場合は、コマンドを実行する前に、これらのファイルが含まれるフォルダーを必ず見つけてください。

![1701238244717-424.png](/static/img/a07933_1701238244717-424.png)

コマンドが実行されると、cacerts ファイル名は *akabot.cer* に変更され、2 つの新しいファイル akabot.jks、akabot.p12 が生成されます。これらのファイルは、信頼証明書のステップで信頼するために使用されます。

![1701238267369-375.png](/static/img/4b5534_1701238267369-375.png)

## **3.2.信頼証明書**

以下のガイダンスに従って、証明書を手動または自動で信頼できます。

### 3.2.1.マニュアル（マシンスコープ）

手動で信頼する場合、証明書は信頼できる Center & Data Service マシンでのみ有効になります。

**ステップ 1:** Center および Data Service マシンで、「akabot.cer」ファイルをダブルクリックして、この証明書を [ローカル マシン] > [信頼されたルート] にインストールします。

![1701238338624-639.png](/static/img/b64286_1701238338624-639.png)

**ステップ 2:** 証明書がインストールされたら、「コンピューター証明書の管理 > 信頼されたルート証明機関」で結果を確認できます。

![1701238362643-371.png](/static/img/50afbc_1701238362643-371.png)

![1701238382010-194.png](/static/img/1bab28_1701238382010-194.png)

**ファイル「akabot.cer」をすべてのエージェント マシンにコピー**し、上記の手順 1 と 2 を繰り返して各マシンでそれを信頼してください。

### 3.2.2.自動（組織範囲）

組織では、すべてのマシンが Active Directory サーバーに接続されています。これらは、このサーバーからすべての証明書とポリシーを取得して、ローカル マシンに適用します。この方法を使用すると、akabot.cer ファイルを IT 部門に送信することで、Center & Data Service マシンおよびすべての Agent マシンに対して上記の証明書を自動的に信頼できます。これを Active Directory サーバーの信頼されたルートに追加します。

# **4.データサービスの構成**

**ステップ 1:** ファイル「akabot.p12」を Data Service のインストール ディレクトリ パスにコピーします。例: 「C:\akaBot\DataService」

![1701238471478-262.png](/static/img/9b58b7_1701238471478-262.png)

**ステップ 2**: Data Service のインストール ディレクトリにあるファイル application.yml を開き、以下のように構成します。

![1701238490756-686.png](/static/img/2e4209_1701238490756-686.png)

![1701238530556-554.png](/static/img/13ceb0_1701238530556-554.png)

**ステップ 3:** ファイル *win-install.bat* に以下の内容が含まれていることを確認します。

![1701238560016-319.png](/static/img/db3616_1701238560016-319.png)

# **5. akaBot センターの構成**

**ステップ 1**: ファイル「akabot.jks」を %TOMCAT\_PATH%*\conf* にコピーします。

![1701238636650-530.png](/static/img/6cf5a3_1701238636650-530.png)

**ステップ 2**: このディレクトリ内のファイル *server.xml* の内容が次のようになっていることを確認します。

```xml
<Connector port="443" protocol="org.apache.coyote.http11.Http11NioProtocol"
           maxThreads="200" SSLEnabled="true" scheme="https"
           secure="true"
           maxParameterCount="1000"
           clientAuth="false"
           sslProtocol="TLS"
           keystoreFile="conf/akabot.jks"
           keystorePass="YOURPASSWORD"
           keyAlias="akabot">
</Connector>
```

**ステップ 3:** ファイル「akabot.p12」を %TOMCAT\_PATH%*\webapps\ROOT\WEB-INF\classes\config* にコピーします。

![1701239344541-750.png](/static/img/2a99fd_1701239344541-750.png)

**ステップ 4:** このディレクトリ内のファイル *application-prod.xml* に以下の内容が含まれていることを確認します。

![1701239403087-942.png](/static/img/64996f_1701239403087-942.png)

![1701239453317-218.png](/static/img/20af79_1701239453317-218.png)

**ステップ 5:** Tomcat 構成アプリケーションを実行し、以下のコードを Java オプションに追加して、akaBot Center がプロファイル「prod,tls」を使用することを確認します。

-Dspring.profiles.active=prod,tls

![1701239514515-586.png](/static/img/70e3a4_1701239514515-586.png)

# **6.アプリケーションの実行**

**ステップ 1:** akaBot Data Service をインストールして開始するには、管理者権限を使用してファイル「*win-install.bat*」を実行します。

**ステップ 2:** Windows サービスを使用して、akaBot データ サービスと Tomcat サービスの実行を開始します。

![1701239737784-561.png](/static/img/34db45_1701239737784-561.png)