---
id: requirements
title: "システム要件"
sidebar_label: "システム要件"
sidebar_position: 1
description: "akaBot AI Hub のハードウェア、ソフトウェア、データベース、およびネットワーク要件。"
displayed_sidebar: aiHubSidebar
---

# システム要件

akaBot AI Hub をインストールする前に、以下の要件を確認してください。インストール手順については、[Linux](./installation.md) または [Windows](./installation-on-windows.md) を選択してください。

## ハードウェア要件

標準的なインストールでは、以下の容量を推奨します。

| リソース | 推奨容量 |
| --- | --- |
| CPU | 4 コア以上 |
| メモリ | 12 GB RAM 以上 |
| ストレージ | 30 GB 以上の空き容量 |

大規模な文書コレクション、多数のリクエスト、または追加の AI ワークロードを扱う場合は、容量を増やしてください。

## 対応オペレーティングシステム

| プラットフォーム | 対応バージョン |
| --- | --- |
| Linux | Ubuntu 20.04 以降、RHEL 8 以降、または Debian 11 以降 |
| Windows | 最新のセキュリティ更新を適用した 64 ビット版 Windows 10/11 |
| macOS | 非本番環境または評価環境で利用可能 |

Windows では、Docker を Linux コンテナモードで実行する必要があります。リリースには Linux コンテナイメージが含まれているため、Windows コンテナモードはサポートされません。

## コンテナランタイム

| コンポーネント | 要件 |
| --- | --- |
| Docker Engine | バージョン 24.0 以降 |
| Docker Compose | `docker compose` で利用できる Compose v2.20 以降 |
| PowerShell（Windows のみ） | Windows PowerShell 5.1 以降または PowerShell 7 以降 |

インストールを実行するアカウントで Docker コマンドを実行できることを確認してください。

## データサービス

AI Hub には以下のサービスが必要です。**Application パッケージ**では顧客管理のサービスを使用し、**Full パッケージ**では記載された同梱サービスを使用できます。

| サービス | 対応バージョン | 備考 |
| --- | --- | --- |
| PostgreSQL | 16 以降 | 推奨。Full パッケージに同梱 |
| MySQL | 8.0 以降 | 外部サービスのみ |
| MariaDB | 10.6 以降 | 外部サービスのみ |
| Microsoft SQL Server | 2019 以降 | 外部サービスのみ。Application パッケージを使用 |
| Redis | 7.0 以降 | 外部または同梱サービス |
| Qdrant | 1.12 以降 | 外部または同梱サービス |

Full パッケージが同梱するリレーショナルデータベースは PostgreSQL のみです。Microsoft SQL Server には使用しないでください。

## ネットワークおよび連携要件

インストール前に、以下を確認してください。

* Docker コンテナから、設定したリレーショナルデータベース、Redis、および Qdrant のエンドポイントに接続できること。
* AI Hub から `CENTER_BASE_URL` で指定した akaBot Center に接続できること。
* akaBot Center から `AI_SERVICE_PUBLIC_BASE_URL` で指定した AI Hub の公開ルートに接続できること。
* デプロイ設定で別のポートにマッピングしていない場合、Docker ホストのポート `3000` と `3001` が利用できること。
* 本番用エンドポイントに必要な DNS、TLS 証明書、ファイアウォールルール、およびプロキシ設定が準備されていること。

## インストールパッケージ

デプロイに適したパッケージを選択してください。

* PostgreSQL/MySQL/MariaDB/Microsoft SQL Server、Redis、および Qdrant がすでに利用可能な場合は、**Application パッケージ**を使用します。
* ホスト上に PostgreSQL、Redis、および Qdrant を構築する新規の自己完結型インストールに限り、**Full パッケージ**を使用します。
* **Backend** または **Frontend** パッケージは、コンポーネントの更新にのみ使用し、新規インストールには使用しません。

インストールまたは更新の前に、パッケージ固有の `release-notes.md` を確認してください。
