---
id: migrate-server-upgrade-5x
title: "akaBot Center の新サーバーへの移行と 5.x へのアップグレード"
sidebar_label: "サーバー移行と 5.x へのアップグレード"
sidebar_position: 22
description: "akaBot Center を新しい Windows サーバーに移行し、設定を引き継いでバージョン 5.x にアップグレードします。"
displayed_sidebar: centerSidebar
---

# akaBot Center の新サーバーへの移行と 5.x へのアップグレード

> akaBot Center を新しい Windows サーバーに移し、**Center 5.x.x.x** にアップグレードする手順です。Tomcat と ActiveMQ が同じサーバーで動く**スタンドアロン構成**を対象とします。データベースのバックアップと移行は、お客様の IT 担当者が別途行います。

## **1. 前提条件**

### **1.1. ソフトウェアパッケージ**

新サーバーの管理者権限を持つアカウントで実施してください。

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **#** | **名前** | **必要なバージョン / 固定パッケージ** | **ダウンロードリンク** | **その他のバージョン** |
| 1 | akaBot Center | 5.x.x.x（WAR） | akaBot からメールで提供 | |
| 2 | Java Developer Kit（OpenLogic） | **17～25**（LTS: 17、21、25）。パッケージ: **17.0.20+8** | **[ダウンロード](https://builds.openlogic.com/downloadJDK/openlogic-openjdk/17.0.20+8/openlogic-openjdk-17.0.20+8-windows-x64.msi)** | [OpenLogic downloads](https://www.openlogic.com/openjdk-downloads?field_java_parent_version_target_id=All&field_operating_system_target_id=202&field_architecture_target_id=185&field_java_package_target_id=188) |
| 3 | Apache Tomcat | Center パッケージに合わせて **10.1.x または 11.0.x**。パッケージ: **10.1.61** | **[ダウンロード](https://archive.apache.org/dist/tomcat/tomcat-10/v10.1.61/bin/apache-tomcat-10.1.61.exe)** | [Tomcat 10.1](https://tomcat.apache.org/download-10.cgi) / [Tomcat 11](https://tomcat.apache.org/download-11.cgi) |
| 4 | ActiveMQ Classic | **5.15.x～6.3.x**。パッケージ: **6.3.3** | **[ダウンロード](https://archive.apache.org/dist/activemq/6.3.3/apache-activemq-6.3.3-bin.zip)** | [ActiveMQ downloads](https://activemq.apache.org/components/classic/download/) |

**注意:**
- 本ガイドは **JDK 17**、**Tomcat 10.1.61**、**ActiveMQ 6.3.3** を使用します。提供された Center パッケージが Tomcat 11 を必要とする場合は、そのリンクを使用してください。JDK は選択した Center と ActiveMQ の要件に合わせます。
- Center 5.x は ActiveMQ **5.15.x～6.3.x** に対応します。Apache は LTS の名称ではなく、**6.3.x** を **Active**、**5.15.x** を **Inactive** としています。Active の系列を優先してください。ActiveMQ 6.3.x は Java 17、21、25 に対応します。
- 旧サーバーと同じポートを許可します: Center 用 `8080`（または `443`）、ActiveMQ 用 `61616` と `8161`、および設定済みのデータベースポート。

## **2. 新サーバーへのソフトウェアのインストール**

### **2.1. Java JDK 17 のインストール**

ダウンロードしたインストーラ -**openlogic-openjdk-17.0.20** を実行します。その後、**「次へ」** をクリックして続行します。

![1773026436457-662.png](/static/img/8350c5_1773026436457-662.png)

![1773026455322-826.png](/static/img/6cc868_1773026455322-826.png)

![1773026480063-797.png](/static/img/54da96_1773026480063-797.png)

![1773026504396-498.png](/static/img/f18e37_1773026504396-498.png)

* インストールが完了すると、以下の完了通知が表示されます。 [**完了**] をクリックするだけです。 JDK が正常にインストールされました。

![1773026554098-998.png](/static/img/a9f0ae_1773026554098-998.png)

**JAVA_HOME 環境変数について:**
1. コマンドプロンプトで以下を実行し、`JAVA_HOME` を確認します。
   ```cmd
   echo %JAVA_HOME%
   ```
   出力は JDK 17 のインストール先（例: `C:\Program Files\OpenLogic\jdk-17.0.20.8-hotspot`）になるはずです。
2. **`JAVA_HOME` が未設定の場合**は手動で設定します。
   - **Windows の検索**で `env` と入力し、**システム環境変数の編集**を選択します。
   - **環境変数...** をクリックします。
   - **システム環境変数**で **新規...** をクリックし、変数名 `JAVA_HOME`、値に JDK のインストール先を設定します。
   - `Path` を選択して **編集...** → **新規** をクリックし、`%JAVA_HOME%\bin` を追加します。
   - **OK** で保存し、新しいコマンドプロンプトで `echo %JAVA_HOME%` と `java -version` を確認します。

### **2.2. Apache Tomcat のインストール**

#### **2.2.1. Apache Tomcat をインストールします**

Apache Tomcat のインストール:
-「Apache Tomcatを実行する」のチェックを外します。
-「Readmeを表示」のチェックを外します
-「完了」ボタンをクリックしてインストールを完了します。

![1773039471617-579.png](/static/img/28a716_1773039471617-579.png)

![1773039448180-898.png](/static/img/bd8a9b_1773039448180-898.png)

![1773039436317-278.png](/static/img/9a9700_1773039436317-278.png)

Apache Tomcat のインストール パス: **%TOMCAT\_PATH%** = **C:\Program Files\Apache Software Foundation\Tomcat 10.1**

#### **2.2.2. ログ設定を構成します**

**ステップ 1:** ファイル **%TOMCAT\_PATH%\conf\logging.properties** を開きます。

**ステップ 2:** catalina、localhost、manager、host-manager ログの **maxDays** を設定します。例: 90 日間保持する場合:

```properties
1catalina.org.apache.juli.AsyncFileHandler.maxDays = 90
2localhost.org.apache.juli.AsyncFileHandler.maxDays = 90
3manager.org.apache.juli.AsyncFileHandler.maxDays = 90
4host-manager.org.apache.juli.AsyncFileHandler.maxDays = 90
```

ファイル内の該当する設定を探し、値を `90` に変更します。設定名は、ファイルにあるものをそのまま使用してください。

![1773039597849-397.png](/static/img/b6cfba_1773039597849-397.png)

**ステップ 3:** ファイル **%TOMCAT\_PATH%\conf\server.xml** を開き、アクセスログ設定のコメントを解除して、以下のように属性 **maxDays** を追加します。

![1773039659797-700.png](/static/img/0de343_1773039659797-700.png)

#### **2.2.3. その他の設定**

**ステップ 1:** **%TOMCAT\_PATH%\bin** の **Tomcat10w.exe**（Tomcat 11 は **Tomcat11w.exe**）を開きます。**Java** タブの **Java Virtual Machine** に、新しくインストールした JDK の `bin\server\jvm.dll` を指定します。

![1773039700842-636.png](/static/img/25160e_1773039700842-636.png)

**ステップ 2**: **全般** タブでスタートアップの種類 **自動** を選択し、[**適用**] をクリックします。

![1773039738250-351.png](/static/img/d37ef5_1773039738250-351.png)

**ステップ 3:** [**ログ**] タブ

(1) ログの接頭辞: **「commons-daemon」を削除**

(2) 標準出力をリダイレクト: **「auto」を削除**

(3) 標準エラーをリダイレクト: **「auto」を削除**

(4) [**適用**] を選択して、構成の変更を適用します。

![1773039839582-669.png](/static/img/af673e_1773039839582-669.png)

**ステップ 4**: [**Java**] タブで Tomcat が使用する RAM の量を設定し、[**適用**] をクリックします。

* **初期メモリ プール:** サーバー RAM の約 **1/4**（最低 2048 MB）。
* **最大メモリ プール:** サーバー RAM の約 **1/2**（例: RAM 32 GB の場合 **16384** MB）。

![1773039888230-493.png](/static/img/65d78f_1773039888230-493.png)

#### **2.2.4. 旧 Tomcat の設定の引き継ぎ**

新 Tomcat には旧サーバーの独自設定を引き継ぐ必要があります。**旧サーバー**で以下のスクリーンショットまたはコピーを取り、新サーバーに反映します。

| 旧サーバー | 確認する内容 |
| --- | --- |
| `bin\Tomcat*w.exe` の **General**、**Logging**、**Java** タブ | サービス名、起動種別、メモリプール、**Java Options**（`-Dspring.profiles.active`、`-Dfile.encoding` などの独自 `-D...` 行）。JVM とサーバー固有のパスは新しいインストール先に合わせます。 |
| `conf\server.xml` | `Connector` のポート、HTTPS コネクタとキーストア（`certificateKeystoreFile`、パスワード）、`maxPostSize`、`maxHttpHeaderSize`、`AccessLogValve` |
| `conf\logging.properties` | `maxDays` とログレベル |
| `bin\setenv.bat`（存在する場合） | サービス以外で設定した JVM オプション |
| キーストア / 証明書ファイル | 新サーバーの同じパスにコピー |

![1776754130100-744.png](/static/img/7198ba_1776754130100-744.png)

![1776754151093-356.png](/static/img/744530_1776754151093-356.png)

**注意:** 旧 `conf` ファイルで新ファイルを上書き**しないでください**。ファイル比較ツール（WinMerge、MobaDiff など）を使い、特に `Connector` 部分の独自の値のみをコピーします。

![1776757773722-234.png](/static/img/65e305_1776757773722-234.png)

![1776757794030-167.png](/static/img/dad40a_1776757794030-167.png)

#### **2.2.5. Apache Tomcat のインストールを確認してください**

Apache Tomcat サービスを開始し、[http://localhost:8080](http://localhost:8080/)（または設定したポート）にアクセスして確認します。確認後は **Tomcat を停止**し、セクション 10 まで停止したままにします。

![1773040793096-753.png](/static/img/0a10a3_1773040793096-753.png)

### **2.3. ActiveMQ のインストール**

#### **2.3.1. ActiveMQ をインストールします**

**ステップ 1:** ファイル「apache-activemq-6.3.3-bin.zip」を目的のインストール パスに抽出します。

例: **ACTIVEMQ\_PATH = C:\akaBot\apache-activemq-6.3.3**

既存のインストール先は通常 `C:\akaBot\apache-activemq-<version>` です。旧サーバーで **サービス → ActiveMQ → プロパティ** の**実行ファイルのパス**からインストール先（`ACTIVEMQ_PATH_OLD`）を確認します。本ガイドの `ACTIVEMQ_PATH` は上記の新しいインストール先を表します。

注: インストール パスにはスペースを含めないでください。

![1773042407269-516.png](/static/img/8ef4e2_1773042407269-516.png)

**ステップ 2:** 管理者権限でコマンド プロンプトを開き、**%ACTIVEMQ\_PATH%\bin\win64\InstallService.bat** を実行して ActiveMQ サービスをインストールします。

![1773042444158-931.png](/static/img/28f86f_1773042444158-931.png)

#### **2.3.2. ActiveMQ の構成**

**ステップ 1:** サービス ActiveMQ を停止します（実行中の場合）。

**ステップ 2**: ファイル **%ACTIVEMQ\_PATH%\bin\win64\wrapper.conf** を開き、パラメーターを構成します。

```properties
wrapper.java.command=%JAVA_HOME%/bin/java.exe
wrapper.java.initmemory=1024
wrapper.java.maxmemory=4096
```

![1773040188173-944.png](/static/img/dd0c2e_1773040188173-944.png)

**ステップ 3:** **%ACTIVEMQ\_PATH%\conf\jetty-realm.properties** を開き、`admin: admin, admin` の既定パスワードを変更します。旧サーバーの `conf\activemq.xml` に独自のブローカー設定（ユーザー、ポート）がある場合は、比較してその値のみを新ファイルにコピーします。

ActiveMQ が `conf\login.config`、`conf\users.properties`、`conf\groups.properties` でユーザーを管理している場合は、必要な設定と参照先のパスワードファイルも新サーバーに引き継ぎます。Center の接続用ユーザー名とパスワードは、ActiveMQ に登録されたものと一致させてください。Web コンソールのパスワードは別に設定します。

**ステップ 4:** ActiveMQ サービスを開始し、[http://localhost:8161](http://localhost:8161/) にアクセスして確認します。

![1773040248186-927.png](/static/img/1ea791_1773040248186-927.png)

確認後は新 ActiveMQ サービスを停止します。新サーバーに切り替える前に、セクション 7 でバックアップしたデータをコピーします。

## **3. ライセンスと設定のバックアップ**

以下では、旧 Tomcat のインストール先を `OLD_TOMCAT`、新 Tomcat のインストール先を `NEW_TOMCAT` と表記します。Tomcat の外部に `D:\backup-center-data` などのバックアップフォルダーを作成します。

**ライセンスを無効化する前に**、旧サーバーから以下をコピーします。

| `OLD_TOMCAT` 配下の場所 | バックアップ対象 |
| --- | --- |
| `webapps\ROOT\WEB-INF\classes\license` | `license` フォルダー全体 |
| `webapps\ROOT\WEB-INF\classes\quartz.properties` | `quartz.properties` |
| `webapps\ROOT\WEB-INF\classes\config` | `application.yml`、`application-dev.yml`、`application-prod.yml` |

![license フォルダーと Quartz 設定のバックアップ](/static/img/center-migrate-backup-license-and-quartz.png)

![3 つの application YAML ファイルのバックアップ](/static/img/center-migrate-backup-application-config.png)

## **4. ライセンスキーの保存と無効化**

旧 Center が稼働している間に実施します。

**ステップ 1:** **Administration → License** でライセンスメニューを開き、**Get LMS license** を選択します。

![無効化前に LMS ライセンスキーを取得](/static/img/center-migrate-get-lms-license-and-deactivate.png)

**ステップ 2:** キーをバックアップフォルダー内の `lms-license-key.txt` などに保存します。

![LMS ライセンスキーをコピーして保存](/static/img/center-migrate-get-lms-license-key.png)

**ステップ 3:** **Deactive License** を選択し、**Deactivate Request** をコピーします。

![無効化の確認画面でリクエストをコピー](/static/img/center-migrate-confirm-and-copy-deactivate-request.png)

**ステップ 4:** [LMS Deactivation](https://aegis.akabot.com/#/deactivation) にリクエストを貼り付け、**Deactivate License** をクリックします。

![LMS の無効化ページでリクエストを送信](/static/img/center-migrate-deactive-on-lms.png)

## **5. 旧 Center の停止とデータのコピー**

実行中のジョブが終了するのを待ってから、旧 Center を停止します。

**ステップ 1:** 旧サーバーで `services.msc` を開き、Center を実行する **Apache Tomcat サービスを停止**します。

![旧 Center の Tomcat サービスを停止](/static/img/center-migrate-stop-tomcat-center.png)

**ステップ 2:** **`OLD_TOMCAT\indexes`** と **`OLD_TOMCAT\filestorage`** をバックアップフォルダーにコピーします。

![Center 停止後に filestorage と indexes をコピー](/static/img/center-migrate-backup-filestorage-indexes.png)

**ステップ 3: ActiveMQ データのバックアップ。** 旧 Center の停止中に旧 **ActiveMQ** サービスを停止し、完全に停止したことを確認します。すべてのファイルを含む **`kahadb` フォルダー全体**を `D:\backup-center-data` にコピーします。

| 旧サーバー（例） | バックアップ先 |
| --- | --- |
| `C:\akaBot\apache-activemq-5.15.1\data\kahadb` | `D:\backup-center-data\kahadb` |

セクション 2.3 で確認した旧インストール先を使用してください。ActiveMQ は通常、メッセージを `kahadb` 内のファイルに保存します。保存先を変更している場合は、`conf\activemq.xml` に設定された場所を使用します。バックアップ後も旧 Center と旧 ActiveMQ は停止したままにします。

![旧 ActiveMQ サービスを停止](/static/img/center-migrate-stop-activemq.png)

![ActiveMQ の kahadb フォルダーをコピー](/static/img/center-migrate-copy-activemq-kahadb.png)

バックアップフォルダーに `license`、`quartz.properties`、3 つの application YAML、保存した LMS ライセンスキー、`indexes`、`filestorage`、`kahadb` がそろっていることを確認します。

![kahadb と保存したライセンスキーを含む Center・ActiveMQ のバックアップ完了例](/static/img/center-migrate-all-backup.png)

## **6. データベースの準備**

データベースを担当する IT 担当者に、以下の作業を依頼してください。旧 Center は停止したままにします。

1. 旧 Center の停止後、セクション 5 のファイルと一緒に既存データベースをバックアップします。そのバックアップから復元できることも確認します。
2. データベースも別サーバーに移す場合は、移行先を準備してバックアップを復元し、データを確認します。Center パッケージが対応するデータベース製品とバージョンを使用してください。現在のデータベースサーバーを使い続ける場合は、新 Center サーバーからの接続を許可します。
3. Center が使用するアカウントでログインでき、Center の実行とアップグレードに必要な権限があることを確認します。
4. データベースのサーバーアドレス、ポート、名前、ユーザー名、パスワードを控えます。セクション 9 で使用します。

Center のデータを引き継ぐため、**現在のデータベース、またはバックアップから復元したデータベース**を使用します。SQL Server の場合は、IT 担当者が [Microsoft: バックアップと復元による DB のコピー](https://learn.microsoft.com/en-us/sql/relational-databases/databases/copy-databases-with-backup-and-restore)と [Microsoft: ログインの移行](https://learn.microsoft.com/en-us/troubleshoot/sql/security/transfer-logins-passwords-between-instances)を参照できます。

## **7. Center の配置とデータの復元**

**新サーバー**で Tomcat を停止した状態で実施します。

**ステップ 1:** **Center 5.x.x.x の WAR** を `NEW_TOMCAT\webapps\ROOT.war` としてコピーし、`NEW_TOMCAT\webapps\ROOT` に展開します。

**ステップ 2:** バックアップした `indexes` と `filestorage` を `NEW_TOMCAT` にコピーします。

**ステップ 3:** バックアップした `quartz.properties` を `NEW_TOMCAT\webapps\ROOT\WEB-INF\classes\` にコピーします。ファイル内で使用するデータベース用の設定（SQL Server の例: `org.quartz.impl.jdbcjobstore.MSSQLDelegate`）を有効にし、他のデータベース用の設定はコメントアウトします。

**ステップ 4: 新サーバーで ActiveMQ データを復元。** 新 Center を停止したまま、新 **ActiveMQ** サービスも停止していることを確認します。

1. バックアップフォルダーを新サーバーに転送します。インストール確認時に `ACTIVEMQ_PATH\data\kahadb` が作成されている場合は、`kahadb-before-restore` として退避します。
2. バックアップした `kahadb` フォルダーを新 ActiveMQ の **`data`** ディレクトリにコピーします。

| 新サーバー上のバックアップ | 復元先（例） |
| --- | --- |
| `D:\backup-center-data\kahadb` | `C:\akaBot\apache-activemq-6.3.3\data\kahadb` |

3. `data\kahadb` を開き、バックアップしたファイルが入っていることを確認します。`kahadb\kahadb` と二重のフォルダーを作らないでください。ActiveMQ の保存先を変更している場合は、そこにコピーします。ActiveMQ サービスを実行する Windows アカウントに、ファイルの読み書き権限を付与します。
4. 新 **ActiveMQ** サービスを開始します。ブローカーログと `http://localhost:8161` で復元したキューとメッセージを確認します。残りの設定が完了し、セクション 10 に進むまで Center は停止したままにします。検証が完了するまで元のバックアップを維持します。

![新 ActiveMQ サービスを開始](/static/img/center-migrate-start-activemq.png)

**ステップ 5:** `NEW_TOMCAT\webapps\ROOT\WEB-INF\classes\logback-spring.xml` を開き、`maxFileSize` = **200MB**、`maxHistory` = **20**、`totalSizeCap` = **20GB** を設定します。

![Center ログのローテーション上限を設定](/static/img/9fcee7_1773043114230-690.png)

## **8. アプリケーション設定の移行**

[Application Configuration Migration Tool](https://ws3.akabot.com/s/GVlG0mQ2AqMyxEz) をダウンロードし、例として `D:\migration-application-config-tool` に展開します。

| ツール内のフォルダー | 配置するファイル |
| --- | --- |
| `old` | **旧 Center** からバックアップした 3 つの `application*.yml` |
| `new` | `NEW_TOMCAT\webapps\ROOT\WEB-INF\classes\config` にある 3 つの `application*.yml` |
| `result` | ツールが生成 |

管理者としてコマンドプロンプトを開き、以下を実行します。

```cmd
cd /d D:\migration-application-config-tool
migrate-config.bat
```

![Windows 版の設定移行ツールを実行](/static/img/center-migrate-run-migration-config-on-windows.png)

**Migration completed successfully** を確認したら、`result` 内の 3 ファイルを `NEW_TOMCAT\webapps\ROOT\WEB-INF\classes\config` にコピーして置き換えます。

![result の生成済み YAML をコピー](/static/img/center-migrate-copy-result-config.png)

## **9. Center を起動する前の設定確認**

ツールは旧サーバーの接続情報をコピーするため、起動前に見直してください。`application.yml` または Tomcat の **Java Options** で `spring.profiles.active` を確認します。値が `prod` なら `application-prod.yml`、`dev` なら `application-dev.yml` を確認します。

- `datasource` に、セクション 6 で控えたデータベースのアドレス、ポート、名前、ユーザー名、パスワードを設定します。現在のデータベースを使い続ける場合は接続情報を維持し、新 Center サーバーから接続できることを確認します。
- 新しい設定ファイルで、使用するデータベース用の JDBC ドライバーと JPA 設定を有効にします。これらは Center がデータベースに接続して使用するための設定です。接続に証明書を使う場合は、新 Center サーバーがその証明書を信頼していることも確認します。

![実際の DB に合わせて datasource の URL と認証情報を確認。画像の値は例](/static/img/center-migrate-check-db-config-and-edit.png)

ActiveMQ のブローカー URL と認証情報、ファイル保存先、Center の公開 URL も確認します。

## **10. 起動、ライセンス有効化、動作確認**

**ステップ 1:** DB と ActiveMQ が稼働していることを確認し、**新 Center の Tomcat サービスを開始**します。旧 Center は停止したままにします。

![新 Center の Tomcat サービスを開始](/static/img/center-migrate-start-center-tomcat.png)

**ステップ 2:** Tomcat / Center のログでエラーを確認し、新 Center URL にアクセスしてログインします。

**ステップ 3:** **セクション 4 で保存したライセンスキー**を使い、[License Activation](/docs/center/latest/installation/license-activation.md) の手順で有効化します。

**ステップ 4:** バージョンが 5.x でライセンスが有効であることを確認し、ユーザー、Agent、プロセス、スケジュール、キュー、ファイルのダウンロードを確認します。Agent や DNS を新サーバーに切り替える前にテストジョブを実行します。

**注意:** 検証が完了するまでバックアップを保管してください。Center 5.x が更新した DB に旧 Center を接続しないでください。
