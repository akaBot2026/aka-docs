---
id: install-ssl-tls
title: "Center の SSL/TLS 証明書のインストール/作成"
sidebar_label: "Center の SSL/TLS 証明書のインストール/作成"
sidebar_position: 13
description: "Center のドキュメントの SSL/TLS 証明書のインストール/作成。"
displayed_sidebar: centerSidebar
---

# Center の SSL/TLS 証明書のインストール/作成

必要なもの

* サーバー証明書 (.crt)
* あなたの秘密鍵 (.key)

=> プロバイダーによって受信されるはずです。

### **1.証明書ファイルを PEM (.cer または .crt) から PKCS#12 (.p12) 形式に変換します。**

以下の OpenSSL コマンドを実行することで、独自のシステムでこれを簡単に行うことができます。

注: 証明書ファイルを OpenSSL と同じフォルダーにコピーしてください。

![image-20220506135312-1.png](/static/img/e4c6a5_image-20220506135312-1.png)

JSON

$ openssl pkcs12 -export -in your\_crtfile.crt -inkey your\_key.key -out your\_domain.p12 -name "your\_domain" -passout pass:your\_pass

### **2. SSL コネクタの構成**

* Tomcat サービスを停止し、次の場所に移動します:**(C:\Program Files\Apache Software Foundation\Tomcat 8.5\conf)**
* ファイルサーバーを開き、以下のコードを追加します

![image-20220506135319-2.png](/static/img/db4c27_image-20220506135319-2.png)

C++

< コネクタ
ポート=あなたの\_ポート
プロトコル= org.apache.coyote.http11.Http11NioProtocol
maxThreads = 200 スキーム = https セキュア = true
SSLEnabled= true
clientAuth= false
sslプロトコル= TLS
keystoreType= pkcs12
keystoreFile= あなたの\_パス\あなたの\_domain.p12
keystorePass= あなたのパス
keyAlias= あなたの\_エイリアス
/>

* 最後に、ファイルを保存し、Tomcat サービスを再度開始します。 Web ブラウザを開いてテストする

## **ローカル用の SSL/TLS 証明書を作成します**

* **ステップ 1** : 管理者権限で CMD を開き、以下のコマンドを入力します。

![image-20220506135327-3.png](/static/img/04658c_image-20220506135327-3.png)

少ない

keytool - genkey -alias youralias -keyalg RSA -keystore "your\_file\_path\yourfilnames.jks"

その後、パスワード (キーストア)、組織、名前などを作成する必要があります。

![image-20220506135333-4.png](/static/img/260e4a_image-20220506135333-4.png)

完了すると、フォルダー上にファイル タイプ **"jks"** が生成されます。

* **ステップ 2** : Tomcat を停止し、次の場所からサーバー ファイルを開きます: ***C:\Program Files\Apache Software Foundation\Tomcat 8.5\conf***

![image-20220506135339-5.png](/static/img/a2fa97_image-20220506135339-5.png)

* **ステップ 3** : 以下のコードを追加します。

![image-20220506135351-6.png](/static/img/3b9313_image-20220506135351-6.png)

JSON

< コネクタ
ポート=あなたの\_ポート
プロトコル= org.apache.coyote.http11.Http11NioProtocol
最大スレッド数= 200
スキーム= https
セキュア= true
SSLEnabled= true
clientAuth= false
sslプロトコル= TLS
keystoreFile= あなたの\_パス\あなたの\_domain.p12
/>

**注意**:**Keystorefile** と **Keystorepass** (CMD で作成したもの) を忘れずに置き換えてください。

* **ステップ 4**: Tomcat サービスを開始し、HTTPs を使用して Web サイトにアクセスします。
