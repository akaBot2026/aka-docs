---
id: troubleshoot-ask-ai
title: "Ask AI のトラブルシューティング"
sidebar_label: "Ask AI のトラブルシューティング"
sidebar_position: 1
description: "akaBot Studio での Ask AI サービスの問題解決方法について説明します。"
displayed_sidebar: studioSidebar
---

# Ask AI のトラブルシューティング

本書は、企業環境（エンタープライズ環境）において **akaBot Studio** 上で **Ask AI** サービス（コード生成、式の説明、ダイレクトチャットをサポートするインテリジェントアシスタント機能）を使用する際に、ネットワーク接続問題の検査および解決を行う方法について、ユーザーおよび IT 管理者に説明するものです。

---

## 1. ステップバイステップの検査とトラブルシューティング

**注意**: エンタープライズ環境では、インターネットアクセスがファイアウォール、プロキシサーバー、または内部セキュリティポリシー（グループポリシー）によって厳格に監視されていることがよくあります。問題を特定して解決するには、以下の手順に従ってください。

**ステップ 1: Ask AI 設定 URL の確認**

まず、Studio クライアントがどの AI サーバーアドレス（URL）を指しているかを確認します。

1. 設定ファイル `RCAStudio.exe.config` を見つけて開きます。デフォルトのファイルパス: `"C:\Program Files\FPT Software\akaBot Platform\RCAStudio.exe.config"`

![rcastudio-config](/static/img/rcastudio-config.png)

2. 設定キー **`AskAIWorkerApiUrl`** を検索し、その値（例: `https://akabot-chatbot-worker.dev`）を取得します。

![ask-ai-worker-api-url](/static/img/ask-ai-worker-api-url.png)

3. ユーザーのコンピューターで **PowerShell** を開き、次のコマンドを実行して、ワークステーションが AI サーバーのアドレスに到達できるかどうかを確認します。

```powershell
# AI サーバーの URL 例: https://akabot-chatbot-worker.dev

# ドメイン名の解決とポート 443 (HTTPS) への接続を確認する
Test-NetConnection -ComputerName akabot-chatbot-worker.dev -Port 443
```

- **`TcpTestSucceeded : True` の場合**: トランスポート層（TCP）の接続は正常に機能しています。
- **`TcpTestSucceeded : False` またはタイムアウトエラーの場合**: ネットワーク接続がブロックされています。

![powershell](/static/img/powershell.png)

---

**ステップ 2: エンタープライズプロキシ設定の構成**

組織でインターネットトラフィックをプロキシサーバー経由にする必要がある場合は、akaBot Studio のプロキシ設定を行う必要があります。

### UI での設定手順:

akaBot Agent を開く -> **[ネットワーク]** タブに移動 -> **[プロキシ]** を設定する

1. **AutoDetect (エンタープライズネットワークに推奨)**: Windows オペレーティングシステムの設定 (インターネットオプション) からプロキシ設定を自動的に継承します。

![auto-detect](/static/img/auto-detect.png)

2. **ManualProxy**: プロキシサーバーのホスト名、ポート、および認証情報を手動で入力します。

![manual-proxy](/static/img/manual-proxy.png)

---

**ステップ 3: ファイアウォール / Web フィルターのホワイトリスト登録依頼**

セキュリティポリシーによってネットワークアクセスがブロックされている場合は、組織の IT またはネットワーク管理者に連絡し、以下のアドレスとポートを許可リスト（ホワイトリスト）に追加するよう依頼してください。

| 送信先タイプ | アドレス / ドメイン名 | ポート | プロトコル | 目的 |
| :--- | :--- | :--- | :--- | :--- |
| **AI サーバー** | `AskAIWorkerApiUrl` に設定されているアドレス (例: `akabot-chatbot-worker.dev`) | `443` | HTTPS | AI に解析要求を送信し、応答を受信します。 |

### 許可する必要がある Ask AI サービスの具体的な API エンドポイント:

- `POST /device/enroll` - 初回デバイス識別の登録と有効化。
- `POST /chat` - AI とのメッセージの送受信。
- `POST /device/quota` - アカウント/デバイスの使用制限（クォータ）の確認。
- `POST /expression/generate` - アクティビティ用の条件式を自動生成。
- `POST /session/upload` - 自己学習および回答品質評価のためのフィードバックデータのアップロード。
