---
id: upgrade-activemq
title: "akaBot Center で ActiveMQ バージョンをアップグレードする"
sidebar_label: "akaBot Center で ActiveMQ バージョンをアップグレードする"
sidebar_position: 20
description: "akaBot Center のドキュメントで ActiveMQ バージョンをアップグレードします。"
displayed_sidebar: centerSidebar
---

# akaBot Center で ActiveMQ バージョンをアップグレードする

# **1. ActiveMQ をダウンロード**

- リンクに移動:[https://activemq.apache.org/download-archives](https://activemq.apache.org/components/classic/documentation/download-archives)

- ダウンロードしたいバージョンをクリックします (ActiveMQ 5.16.5 リリース)

![1776064389132-176.png](/static/img/001aef_1776064389132-176.png)

- jar ファイルをダウンロード (apache-activemq-5.16.5-bin.zip)

![1776064420865-217.png](/static/img/eb5caa_1776064420865-217.png)

# **2. ActiveMQ のアップグレード**

- サービスのウィンドウに移動して、ActiveMQ がインストールされているパスを取得します

* 「ファイル名を指定して実行」に移動し、「services.msc」と入力します。
* サービス名 ActiveMQ を検索し、ActiveMQ がインストールされているパスを取得します (例: ACTIVEMQ\_PATH\_OLD: D:\Setups\Libs\apache-activemq-5.15.1")

![1776064525229-372.png](/static/img/7a6ff7_1776064525229-372.png)

- 古いサービス ActiveMQ をアンインストールする

* ACTIVEMQ\_PATH\_OLD/bin/win64 に移動します。
* UninstallService.bat ファイルを右クリックして実行し、管理者として実行します

![1776064571299-447.png](/static/img/a463dd_1776064571299-447.png)

- zip の新しいバージョン ActiveMQ (例: apache-activemq-5.16.5-bin.zip) をインストールしたいパス (例: ACTIVEMQ\_PATH\_OLD: D:\Setups\Libs\) に解凍します。

![1776064673129-770.png](/static/img/105b60_1776064673129-770.png)

![1776064698732-705.png](/static/img/f8b7a3_1776064698732-705.png)

- フォルダー kahadb を古いバージョンの ActiveMQ から新しいバージョンにコピーして置換 (オーバーライド)

ACTIVEMQ\_PATH\_OLD/data/kahadb から ACTIVEMQ\_PATH\_NEW/data/kahadb

![1776064775939-834.png](/static/img/e11bbe_1776064775939-834.png)

- 新しいサービス ActiveMQ をインストールする

* ACTIVEMQ\_PATH\_NEW/bin/win64 に移動します。
* InstallService.bat ファイルを右クリックして *管理者として実行* して実行します。

![1776064857397-462.png](/static/img/2d3ccd_1776064857397-462.png)

- 「サービス」ウィンドウに移動して、ActiveMQ のバージョンを確認し、サービス ActiveMQ を開始します。

![1776064892294-791.png](/static/img/0a6986_1776064892294-791.png)

- ActiveMQ のサービスが *実行中* であることを確認します

![1776065051427-766.png](/static/img/449ebe_1776065051427-766.png)

- http://localhost:8161/ (アカウント/パス: admin/admin) に移動して ActiveMQ を確認します。