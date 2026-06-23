---
id: release-notes
title: "リリースノート"
sidebar_label: "リリースノート"
sidebar_position: 2
description: "IDP アクティビティ パッケージのリリースノート"
displayed_sidebar: activitiesSidebar
---
# リリースノート

## v3.0.0

**追加 / 改善**

* パッケージ構造をアップグレードし、新しい akaBot IDP プラットフォーム API エンドポイントのサポートを追加しました。
* セキュアなトークン管理と接続プールをサポートするため、**IDP Scope** コンテナのアーキテクチャを再構築しました。
* **Export Document** アクティビティで複数の出力形式 (`DataTable`、`JsonString`、`XMLString`) のサポートを追加しました。
* **Import Document** アクティビティでの大容量 PDF ドキュメントのアップロード時のエラー処理とタイムアウト動作を最適化しました。

**バグ修正**

* **Update Document Status** アクティビティにおける、ターゲット ステータス ドロップダウンの検証ルールを修正しました。

## v1.0.0.1

**バグ修正**

* サーバー エンドポイント解決時の **IDP Scope** アクティビティにおける軽微な接続検証チェックを修正しました。
* 入力配列に末尾のスペースや無効なフォーマットが含まれている場合の、**Update Document Status** アクティビティでの配列パース問題を解決しました。
* 実行追跡を改善するため、デバッグ ロガーのメッセージ フォーマットを強化しました。

## v1.0.0

**追加**

* akaBot IDP アクティビティ パッケージの初期リリース。
* akaBot IDP サーバーとの認証された接続を確立するためのコア コンテナ アクティビティ **IDP Scope**。
* コア ドキュメント処理アクティビティ：
  * **Import Document**
  * **Export Document**
  * **Get Documents**
  * **Get Document Status**
  * **Update Document Status**
  * **Reload Document**
