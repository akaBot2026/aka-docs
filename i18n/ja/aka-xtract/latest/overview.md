---
id: overview
title: "AkaXtract"
sidebar_label: "概要"
sidebar_position: 1
description: "AI で文書から構造化データを抽出し、結果をレビューして、お使いのシステムに引き渡します。"
displayed_sidebar: akaXtractSidebar
---

# AkaXtract

AkaXtract は、文書の内容を構造化データに変換します。文書をアップロードすると、AI が文書を分類してデータを抽出します。結果をレビューしたうえで、エクスポートするか、他のシステムに送信します。

## 仕組み

1. 抽出する内容を定義する [Pipeline](./user-guide/pipelines/create-a-pipeline.md) を**設定**します。
2. Pipeline を**テストして公開**します。
3. 文書を手動で**アップロード**するか、[ScaleConnect](./user-guide/integrations/scaleconnect.md) または [API](./user-guide/integrations/api-integration.md) 経由で受信します。
4. 担当者の確認が必要な結果を**レビュー**します。
5. データを**エクスポート**するか、[Webhook](./user-guide/integrations/webhooks.md) で自動的に送信します。

## 主な用語

| 用語 | 意味 |
| --- | --- |
| Pipeline | 処理ルールの集まりです。AI モデル、分類の指示、文書タイプごとの抽出の指示、承認ルールで構成されます |
| Document | 元のファイルと、その結果のレビュー状況です |
| Job | 1 回の処理の実行です。固有の ID、Pipeline のバージョン、ステータス、エラーを持ちます |
| Human Review | レビュー担当者が、抽出されたデータを元の文書と照合して確定する作業です |
| Webhook | 受信側のシステムに自動的に送られる通知です |

## 目的別の案内

| あなたの状況 | 最初に読むページ |
| --- | --- |
| AkaXtract を初めて使う | [Quick Start](./user-guide/getting-started/quick-start.md) |
| 文書処理を設定する | [Pipeline の作成](./user-guide/pipelines/create-a-pipeline.md)、続いて [テストと公開](./user-guide/pipelines/test-and-publish.md) |
| AkaXtract の設定方法と精度を高める方法を知りたい | [学習方法](./user-guide/pipelines/learning-method.md) |
| 文書をアップロードする、またはレビューする | [アップロードと追跡](./user-guide/documents/upload-and-track.md)、続いて [レビューとエクスポート](./user-guide/documents/review-and-export.md) |
| 他のシステムと連携する | [Webhook](./user-guide/integrations/webhooks.md) と [API 連携](./user-guide/integrations/api-integration.md) |
| ユーザーとクォータを管理する | [ユーザーとロール](./user-guide/administration/users-and-roles.md)、[クォータと保持](./user-guide/administration/quota-and-retention.md) |
| エラーが発生した | [トラブルシューティング](./user-guide/troubleshooting.md) |

:::note
メニュー名とボタン名は英語のインターフェースに合わせています。インターフェースはベトナム語、日本語、繁体字中国語でも利用できます。表示されるメニューは、お持ちの権限によって異なります。
:::
