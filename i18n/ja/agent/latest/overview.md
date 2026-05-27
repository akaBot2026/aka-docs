---
id: overview
title: "アカボットエージェント"
sidebar_label: "概要"
sidebar_position: 1
description: "インテリジェントな自動化エージェントをデスクトップとサーバーに展開して実行します。"
displayed_sidebar: agentSidebar
---

# アカボットエージェント

Akabot Agent は、マシン (デスクトップまたはサーバー) 上に存在し、Akabot Center によってディスパッチされるか、ローカルでトリガーされる自動化ワークフローを実行するランタイム コンポーネントです。エージェントは、有人 (人間のユーザーと一緒に) または無人 (完全自動、24 時間 365 日) で実行できます。

![Akabot Agent architecture: Center dispatches workflows over an encrypted, token-authenticated channel to attended, unattended, and testing agents.](/static/img/agent-architecture.svg)

## エージェントの種類

| タイプ | 説明 |
|------|-------------|
| **出席しました** | ユーザーのデスクトップ上で実行され、現在ログインしているセッションと対話できます。手動またはホットキーによってトリガーされます。 |
| **無人** | 人間が存在しなくてもサーバーまたは VM 上で実行されます。 Akabot Center によってリモートでトリガーされます。 |
| **テスト中** | ローカル開発とデバッグに使用されます。ライセンスにはカウントされません。 |

## 主な特徴

- **軽量ランタイム** — フットプリントを最小限に抑えます。 Windows サービスまたはユーザーモード プロセスとして実行されます。
- **安全なチャネル** — Akabot Center とのすべての通信は暗号化され、トークン認証されます。
- **自動更新** - エージェントは、実行前にワークフロー パッケージの更新を Center から取得します。
- **ローカル トリガー** - エージェントは、ファイル システム イベント、キーボード ショートカット、または REST 呼び出しによってトリガーできます。
- **認知機能** — Akabot Vision および AI モデルと統合して、インテリジェントな文書処理と意思決定を実現します。

## はじめる

| ステップ | 説明 |
|------|-------------|
| 1 | [Install Akabot Agent](/i18n/ja/agent/latest/installation/installation.md) |
| 2 | エージェントを Akabot Center に接続する |
| 3 | ワークフロー パッケージをエージェントに割り当てる |
| 4 | センターまたはローカルから実行をトリガーする |

## 次のステップ

- [Building your first Agent](/i18n/ja/agent/latest/user-guide/how-to-use.md)
- [Connect Agent to Akabot Center](/i18n/ja/center/latest/installation/license-activation.md)
- [Schedule time to run Agent](/i18n/ja/center/latest/user-guide/how-to-use-by-function/operation-functions/automation/schedule.md)
