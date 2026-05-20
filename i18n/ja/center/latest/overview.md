---
id: overview
title: Akabot Center
sidebar_label: 概要
sidebar_position: 1
description: すべての自動化ロボットを1か所からオーケストレーション、スケジュール、および監視できます。
displayed_sidebar: centerSidebar
---

# Akabot Center

Akabot Centerはエンタープライズ向けのオーケストレーションサーバーであり、組織内のすべてのロボットとワークフローをデプロイ、スケジュール、監視するための単一のコントロールプレーンです。運用チームはCenterを使用してロボットのフリートを管理し、キューに入った作業項目を処理し、実行結果をリアルタイムで追跡できます。

## 主な機能

- **ロボット管理** — 対話型（attended）および非対話型（unattended）ロボットを登録し、役割を割り当て、ハートビート状態を監視します。
- **プロセスオーケストレーション** — 公開されたワークフローを要求に応じて、またはスケジュールに基づいて任意のロボットやロボットグループにデプロイします。
- **ワークキュー** — 構造化されたデータ項目をキューに投入し、ロボットが並列に処理できるようにします。
- **スケジューリング** — コードを書かずにcronベースまたはイベントトリガーによるスケジュールを定義できます。
- **監視とアラート** — リアルタイムの実行ログ、成功/失敗のダッシュボード、および設定可能なメールアラートを提供します。
- **ロールベースアクセス制御** — 環境（Dev、UAT、Prod）全体でユーザー、チーム、アクセス権を管理します。

## アーキテクチャ概要

```
Akabot Studio  ──publish──▶  Akabot Center  ──dispatch──▶  Akabot Agent(s)
                                    │
                             ワークキュー / スケジュール
```

## はじめに

| Step | 説明 |
|------|-------------|
| 1 | [Akabot Centerサーバーをインストールする](/docs/latest/installation/server-installation) |
| 2 | 環境を作成し、ロボットマシンを追加する |
| 3 | Akabot Studioからワークフローを公開する |
| 4 | スケジュールを作成するか手動実行をトリガーする |
| 5 | ダッシュボードで結果を監視する |

## 次のステップ

- [Akabot AgentをAkabot Centerに接続する](/docs/latest/connect-center)
- [Agentの実行スケジュールを設定する](/docs/latest/schedule)
- [管理者および運用ガイド](/docs/latest/admin/overview)
