---
id: configure-browser-driver
title: "ブラウザドライバの設定"
sidebar_label: "ブラウザドライバの設定"
sidebar_position: 6
description: "Akabot Studio を使用して、自動化ワークフローを視覚的に設計、構築、テストします。"
displayed_sidebar: studioSidebar
---

# ブラウザドライバの設定

**ブラウザ** アクティビティ パッケージを使用して Web オートメーションを実行し、ブラウザが新しいバージョンに自動的に更新された場合。これにより、ボットの実行中に予期しないエラーが発生する可能性があります。この問題を解決するには、以下の 03 の簡単な手順に従って、ブラウザ ドライバを適切なブラウザのバージョンに更新する必要があります。

**ステップ 1** - ブラウザのバージョンを確認する

1 - ブラウザを開きます

2 - ブラウザのバージョンを確認します。

Chrome では、リンクに移動します: chrome://settings/help

例: バージョンは 124.x.x.x です

![1714632658644-439.png](/static/img/1714632658644-439.png)

Edge で、リンクに移動します:edge://settings/help

例: バージョンは 124.x.x.x です

![1714632680270-541.png](/static/img/1714632680270-541.png)

**2.ステップ 2 - ブラウザドライバーの構成**
1 - バージョンの最初の 3 つの数字がブラウザのバージョンの最初の 3 つの数字と等しいブラウザ ドライバーをダウンロードします。例: 124。

Chrome では、バージョンが新しい場合は https://googlechromelabs.github.io/chrome-for-testing/#stable に移動し、それ以外の場合は https://chromedriver.chromium.org/downloads に移動してダウンロードします。

![1714632723095-575.png](/static/img/1714632723095-575.png)

![1714632735937-430.png](/static/img/1714632735937-430.png)

Edge では、バージョンが新しい場合は https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/?form=MA13LH#downloads に移動し、それ以外の場合は https://msedgewebdriverstorage.z22.web.core.windows.net/?form=MA13LH に移動してダウンロードします。

![1714632764179-338.png](/static/img/1714632764179-338.png)

![1714632773992-712.png](/static/img/1714632773992-712.png)

2 – akaBot ブラウザ ドライバ フォルダに新しいフォルダを作成し、ブラウザ バージョンの最初の 3 番目の番号の名前を付けます。

例: ブラウザのバージョンは 124.x.x.x で、新しいフォルダーの名前は 124 とします。

**Chrome の場合**、パス [AKABOT_INSTALLED_PATH]\WebDriver\ChromeDriver に移動して新しいフォルダーを作成します

![1714632793482-153.png](/static/img/1714632793482-153.png)

**Edge** の場合、パス [AKABOT_INSTALLED_PATH]\WebDriver\EdgeDriver に移動して新しいフォルダーを作成します。

![1714632818145-996.png](/static/img/1714632818145-996.png)

3 - ドライバー ファイルを解凍し、ドライバー実行ファイルを作成したフォルダーにコピーします。

**例:**

**クロームの場合:**

![1714632845802-986.png](/static/img/1714632845802-986.png)

**エッジの場合:**

![1714632866295-303.png](/static/img/1714632866295-303.png)

**3.ステップ 3 - akaBot Studio/Agent で自動検出を構成する**

1 - akaBot Studio の場合:

[オプション] --> [実行] --> [ブラウザのバージョン] --> [自動検出] ボックスをオンにします。

![1714632905043-456.png](/static/img/1714632905043-456.png)

2 - akaBot エージェント上:
[ブラウザ] --> [ブラウザ設定] --> [自動検出] ボックスにチェックを入れます。

![1714632954996-447.png](/static/img/1714632954996-447.png)
