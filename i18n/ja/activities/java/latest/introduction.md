---
id: introduction
title: "導入"
sidebar_label: "導入"
sidebar_position: 1
description: "Java アクティビティ パッケージの概要"
displayed_sidebar: activitiesSidebar
---
# 導入

**Java アクティビティ パック** には、Java コードの力を活用するのに役立ついくつかのアクティビティが含まれています。 ** Java Scope** アクティビティを使用すると、Java ライブラリを初期化し、後続のすべてのアクティビティにスコープを提供できます。このパック内のすべてのアクティビティは、前述のスコープ内で実行する必要があります。

# Java Access Bridgeをインストールして有効にする

## **1. Java アクセス ブリッジをダウンロード**

次の URL にある Java Access Bridge ホームページから Java Access Bridge 2.0.2 をダウンロードします。
https://www.oracle.com/java/technologies/javase/javase-tech-access-bridge.html

## **2. Windows 64 ビット用 Java Access Bridge のインストール**

次のファイルを指定された宛先ディレクトリにコピーします。

* %WINDOWSOME% は、Microsoft Windows がインストールされているディレクトリ (C:\WINDOWS など) です。
* %JAVAHOME32% は、32 ビット システム用の JDK または JRE がインストールされているディレクトリです。以下は、32 ビット システム用の Java SE 6 Update 24 のディレクトリ名の例です。
  + § JDK: C:\Program Files (x86)\Java\jdk1.6.0\_24\jre
  + § JRE: C:\Program Files (x86)\Java\jre6

|  |  |
| --- | --- |
| **Java アクセス ブリッジ ファイル** | ** 宛先ディレクトリ** |
| WindowsAccessBridge-32.dll | %WINDOWSOME%\SYSWOW64 |
| JavaAccessBridge-32.dll | %JAVAHOME32%\bin |
| accessibility.properties | %JAVAHOME32%\lib |
| アクセスブリッジ-32.jar | %JAVAHOME32%\lib\ext |
| jaccess.jar | %JAVAHOME32%\lib\ext |

## **3. Java Access Bridge を有効にする方法**

* ### **「コントロール パネル」に移動し、「ビジュアル表示の最適化」を選択します**

![1776220943601-655.png](/static/img/79537f_1776220943601-655.png)

* ### **「Java Access Bridge を有効にする」にチェックを入れます**

![1776220993577-455.png](/static/img/81c1a7_1776220993577-455.png)

#### ***うまくいかない場合は:***

**ステップ 1:** Java アプリを開き、タスク マネージャーを開きます

![1776221297870-213.png](/static/img/bbfeaa_1776221297870-213.png)

**ステップ 2:** Java アプリを右クリックし、[プロパティ] を選択します。

![1776221348602-229.png](/static/img/684624_1776221348602-229.png)

**ステップ 3:** 場所をコピーします

![1776221446698-706.png](/static/img/0ea230_1776221446698-706.png)

**ステップ 4:** [コントロール パネル] から [システム環境変数の編集] を選択します。

**ステップ 5:** [環境変数…] をクリックします。

**ステップ 6:** 上記の場所をパスに追加します

![1776221690665-464.png](/static/img/8f880b_1776221690665-464.png)

**ステップ 7:** コマンド ラインに移動し、

**ステップ 8:** ディレクトリを上記の場所に変更します: cd`<Location path from step 3>`

**ステップ 9:** コマンド「jabswitch –enable」を実行します。

![1776221749325-594.png](/static/img/9a8d8a_1776221749325-594.png)