---
id: overview
title: "アカボット センター"
sidebar_label: "概要"
sidebar_position: 1
description: "すべての自動化ロボットを 1 か所から調整、スケジュール設定、監視します。"
displayed_sidebar: centerSidebar
---

# アカボット センター

Akabot Center はエンタープライズ オーケストレーション サーバーであり、組織内のすべてのロボットとワークフローを展開、スケジュール設定、監視するための単一のコントロール プレーンです。運用チームは Center を使用してロボット フリートを管理し、キューに入れられた作業項目を処理し、実行結果をリアルタイムで追跡します。

## 主な特徴

- **ロボット管理** — 有人ロボットと無人ロボットを登録し、役割を割り当て、ハートビート ステータスを監視します。
- **プロセス オーケストレーション** - 公開されたワークフローを、オンデマンドまたはスケジュールに従って任意のロボットまたはロボット グループに展開します。
- **ワークキュー** — 構造化データ項目をキューにフィードし、ロボットにそれらを並列処理させます。
- **スケジュール** — コードを書かずに cron ベースまたはイベントトリガーのスケジュールを定義します。
- **監視とアラート** — リアルタイムの実行ログ、成功/失敗ダッシュボード、構成可能な電子メール アラート。
- **ロールベースのアクセス制御** — 環境 (開発、UAT、本番) 全体でユーザー、チーム、権限を管理します。

## アーキテクチャの概要

```
Akabot Studio  ──publish──▶  Akabot Center  ──dispatch──▶  Akabot Agent(s)
                                    │
                             Work Queues / Schedules
```

## はじめに

| ステップ | 説明 |
|------|-------------|
| 1 | [Install Akabot Center server](/i18n/ja/center/latest/installation/license-activation.md) |
| 2 | 環境を作成してロボットマシンを追加する |
| 3 | Akabot Studio からワークフローを公開する |
| 4 | スケジュールを作成するか、手動実行をトリガーします |
| 5 | ダッシュボードで結果を監視する |

## 次のステップ

- [Connect Agent to Akabot Center](/i18n/ja/agent/latest/user-guide/how-to-use.md)
- [Schedule time to run Agent](/i18n/ja/center/latest/user-guide/how-to-use-by-function/operation-functions/automation/schedule.md)
- [Admin & Ops guide](/i18n/ja/center/latest/user-guide/how-to-use-by-function/operation-functions/administration/user-management.md)
