---
id: introduction
title: "はじめに"
sidebar_label: "はじめに"
sidebar_position: 1
description: "Common アクティビティ パッケージの概要"
displayed_sidebar: activitiesSidebar
---
# はじめに

Common Activities パッケージには、オートメーション プロジェクトを作成するために使用されるすべてのアクティビティが含まれています。これらのアクティビティにより、エージェントは次のことが可能になります。

* ブラウザー操作とウィンドウ操作を実行します。
* マウスとキーボード コマンドの実行またはテキストの入力と抽出など、人間の操作をシミュレートします。
* ブラウザー上の要素を待機して、ユーザーが別の Web ページにリダイレクトされながら問題をトラブルシューティングするのに役立ちます。

Supported target applications.
* ブラウザー (Chrome、MS Edge、Firefox)。
* ウィンドウ アプリケーション (Win32、Qt、Windows Forms、WPF)。
* SAP GUI for Windows。
* Java (64 ビット) アプリケーション。

> **注:** Web ブラウザーを自動化するには、ブラウザー拡張機能のインストールが必要です。

Supported selectors listed below. The activity will loop to find each enabled selector, one by one, until found element or exceeded `TimeoutMS` value.
* **Strict**: タグ、ID、名前などの属性の完全一致を検索して UI 要素を識別する正確なターゲティング方法。画面上の要素の正確なアドレスとして機能します。
* **Fuzzy**: 完全一致を必要とする代わりに、概数文字列マッチングを使用してユーザー インターフェイス (UI) 要素を検索するターゲティング方法。
* **Image**: 基本的なコード属性ではなく、キャプチャした画像に基づいて画面上の要素を検出するために使用されるビジュアル ターゲティング方法。
* **Computer Vision**: 従来のコード ベースの XML セレクターに依存するのではなく、ニューラル ネットワークを使用して画面上の要素を視覚的に識別します。
* **Semantic**: ユーザー インターフェイス (UI) 要素をその意味、役割、コンテキストに基づいて識別する AI 駆動のターゲティング方法。剛性の位置や構造属性ではなく。

## SAP オートメーション

Studio が SAP GUI for Windows と相互作用できるようにするには、サーバー側とクライアント側で次の構成手順を実行する必要があります。

* [サーバー側でスクリプト作成を有効にする。](https://help.sap.com/docs/build-process-automation/sap-build-process-automation/enabling-scripting-on-server-side-bff7ad3f1ee44c909a5daa8173dc9eae)
* [クライアント側でスクリプト作成を有効にする。](https://help.sap.com/docs/build-process-automation/sap-build-process-automation/enabling-scripting-on-client-side-bca5f0a557d94823a5e361212c98452b)
