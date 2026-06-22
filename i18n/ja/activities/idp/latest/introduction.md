---
id: introduction
title: "はじめに"
sidebar_label: "はじめに"
sidebar_position: 1
description: "IDP アクティビティ パッケージの紹介"
displayed_sidebar: activitiesSidebar
---
# はじめに

**IDP (Intelligent Document Processing) アクティビティ** パッケージは、**akaBot Vision** プラットフォームとのシームレスな統合を提供し、ドキュメントのデジタル化、データ抽出、分類プロセスの自動化を可能にします。

これらのアクティビティにより、ロボットは API 資格情報を使って直接 akaBot Vision サーバーに接続し、複雑なドキュメント処理ワークフローを実行できます。

これらのアクティビティでできること:

* **akaBot Vision への接続**: **IDP Scope** コンテナを使って API キーとサーバーエンドポイントにより安全な接続コンテキストを確立します。
* **ドキュメントのインポートとアップロード**: 請求書、領収書、発注書、PDF、画像などのさまざまなファイル形式を IDP サーバーに送信し、自動的にデータ抽出・デジタル化します。
* **ドキュメントステータスの監視**: アップロードされたドキュメントの処理状況（例: Processing、Completed、Pending review）をリアルタイムで照会できます。
* **メタデータの取得と更新**: ドキュメント一覧の取得、再処理のためのドキュメント再読み込み、処理ステータスの更新が可能です。
* **構造化データのエクスポート**: 処理済みドキュメントから高精度に抽出されたデータを取得して下流の自動化タスクで利用できる形式で出力します。

---

## **前提条件**

IDP アクティビティをワークフローで利用するには:

1. **IDP Scope コンテナ**: 他のすべての IDP アクティビティ（例: *Import Document*, *Export Document* など）は、接続資格情報を継承するために [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) コンテナの内部に配置する必要があります。
2. **akaBot Vision アカウント**: サーバーへの接続を許可する有効な **Server Endpoint** URL と **API Key** が必要です。

