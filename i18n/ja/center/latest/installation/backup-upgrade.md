---
id: backup-upgrade
title: "バックアップとアップグレード"
sidebar_label: "バックアップとアップグレード"
sidebar_position: 18
description: "バックアップとアップグレードに関するドキュメント。"
displayed_sidebar: centerSidebar
---
# バックアップとアップグレード

原則として、最新の機能をすべて利用するには、同じエージェント、スタジオ、センターを使用することをお勧めします。 Studio と Agent は同じバージョンである必要があります。このドキュメントは、akaBot Studio、Agent、Center を更新およびバックアップする方法を段階的に説明することを目的としています。

## **1. akaBot スタジオ & エージェント**

* **ステップ 1:**

**カスタム HTML / CSS** (JavaScript は削除され、CSS はスコープ化されます)

以前のバージョン[**Uninstall akaBot**](/i18n/ja/agent/latest/installation/uninstallation.md)を削除します。

* **ステップ 2:** ライセンス電子メールに記載されているリンクから akaBot プラットフォームの最新バージョンをダウンロードします。インストーラーを実行し、プロセスが完了するまで待ちます。

![uelcome akabot.png](/static/img/257532_uelcome-akabot.png)

## **2.別名ボット センター**

* **ステップ 1:** ライセンス電子メールに記載されているリンクから、akaBot Center の最新バージョンをダウンロードします。
* **ステップ 2:**
[**akaBot Center**](/i18n/ja/center/latest/installation/upgrade-3x-to-4x.md)を更新するには、すべての手順に従ってください。

再編集する必要がないように、古いバージョンの 2 つのファイル (**application-dev.yml** と **application-prod.yml**) を含むバックアップを必ず作成してください。

* **ステップ 3:** ライセンス ファイルのバックアップ: 以下のディレクトリで License.lic ファイルを見つけます。

C:\Program Files\Apache Software Foundation\Tomcat 8.5\webapps\ROOT\WEB-INF\classes\license

![image-20220825142739-1.png](/static/img/51f066_image-20220825142739-1.png)

* **ステップ 4:** データベースのバックアップ: MySQL を開き、古いデータベースをエクスポートします。

[![https://files.readme.io/b5f111f-Screenshot_90.png](/static/img/e1cd87_b5f111f-screenshot_90.png)](https://dash.readme.com/project/akabotlibraby/v2.0.55/docs/upgrade-akabot)

オブジェクトの選択で、**aka\_orchestrator** を選択します。次に、[**エクスポートの進行状況**] を選択してエクスポートを開始します。

![https://files.readme.io/bf9ae04-Capture.PNG](/static/img/36557a_bf9ae04-capture.png)

[![https://files.readme.io/41697f5-cap2.PNG](/static/img/4904ca_41697f5-cap2.png)](https://dash.readme.com/project/akabotlibraby/v2.0.55/docs/upgrade-akabot)

* **ステップ 5:** **Tomcat** サービスを停止し、古いバージョンの「ROOT」フォルダーを削除します。

[![https://files.readme.io/a6b28ce-Screenshot_2021-07-05_095021.jpg](/static/img/4b7ca2_a6b28ce-screenshot_2021-07-05_095021.jpg)](https://dash.readme.com/project/akabotlibraby/v2.0.55/docs/upgrade-akabot)

**ステップ 6:** ファイル war (Center の最新バージョン) をコピーし、**Tomcat** を起動して Center のアップグレードに進みます。

**ステップ 7:** 2 つのファイル: **application-dev.yml** と **application-prod.yml** をコピーし、Tomcat の起動後に以下のディレクトリに貼り付けます (これらのファイルを構成している場合)。

C:\Program Files\Apache Software Foundation\Tomcat 8.5\webapps\ROOT\WEB-INF\classes\config

**ステップ 8:** バックアップ ライセンスをコピーし、古いフォルダーに貼り付けます。 (アップグレード後にライセンスが失われるため。この手順に従えば、センターを再度アクティブ化する必要はありません)。
