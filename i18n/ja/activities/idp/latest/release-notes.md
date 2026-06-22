---
id: release-notes
title: "リリースノート"
sidebar_label: "リリースノート"
sidebar_position: 2
description: "IDP アクティビティ パッケージのリリースノート。"
displayed_sidebar: activitiesSidebar
---
# リリースノート

## v3.0.0

**追加 / 改善点**

* パッケージ構成を更新し、最新の akaBot Vision プラットフォーム API エンドポイントをサポートしました。
* **IDP Scope** コンテナを再設計し、安全なトークン管理とコネクションプーリングをサポートしました。
* **Export Document** アクティビティで複数のエクスポート形式（`DataTable`、`JsonString`、`XMLString`）をサポートしました。
* **Import Document** アクティビティでの大きな PDF アップロード時のエラー処理とタイムアウト挙動を最適化しました。

**修正されたバグ**

* **Update Document Status** アクティビティのターゲットステータスの検証ルールを修正しました。

## v1.0.0.1

**修正されたバグ**

* **IDP Scope** アクティビティのサーバーエンドポイント解決時の接続検証処理を修正しました。
* **Update Document Status** の配列パースにおける末尾スペースや無効な形式の問題に対処しました。
* デバッグロガーメッセージのフォーマットを改善しました。

## v1.0.0

**追加**

* akaBot IDP アクティビティパッケージの最初のリリース。
* サーバー認証接続を確立するコアコンテナ **IDP Scope**。
* コアドキュメント処理アクティビティ:
  * **Import Document**
  * **Export Document**
  * **Get Documents**
  * **Get Document Status**
  * **Update Document Status**
  * **Reload Document**
