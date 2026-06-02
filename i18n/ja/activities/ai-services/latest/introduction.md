---
id: introduction
title: "Introduction"
sidebar_label: "Introduction"
sidebar_position: 2
description: "Introduction to AI Service activities package"
displayed_sidebar: activitiesSidebar
---
# AI サービス アクティビティ

**AI Service Activities** パッケージは、Akabot ロボットが主要な生成系AIおよび大規模言語モデル（LLM）プロバイダーとシームレスに統合できるようにします。最先端の認知機能を自動化ワークフローに直接組み込むことで、複雑な意思決定の自動化、非構造化データの統合、メールの分類、ドキュメントからの重要情報抽出、自然な会話ループの実現が可能になります。

---

## 対応プロバイダー

このパッケージはプロバイダー非依存であり、最小限の構成で複数の一流AIサービスに接続および切り替えが可能です:

| Provider | Supported Models (Examples) | Typical Use Cases |
| :--- | :--- | :--- |
| **OpenAI** | `gpt-4o`, `gpt-4`, `gpt-3.5-turbo` | 一般的な推論、構造化データ抽出、エージェンシー的タスク |
| **Google Gemini** | `gemini-1.5-pro`, `gemini-1.5-flash` | 大きなコンテキストウィンドウを必要とするタスク、高速なテキスト生成、マルチモーダル処理 |
| **Anthropic Claude** | `claude-3-5-sonnet`, `claude-3-opus`, `claude-3-haiku` | 詳細なドラフト作成、高度な推論、複雑なコーディング／ロジック支援 |
| **Azure OpenAI** | Enterprise-grade deployments of OpenAI models | 厳格なデータプライバシーを備えたエンタープライズ管理環境 |

---

## パッケージの主要機能

* **プロバイダー非依存コンテナ（`AI Scope`）**: 認証情報、接続、デフォルトのタイムアウト、セッション状態を単一の親スコープで管理します。内部の子アクティビティは確立された接続を自動で継承します。
* **効率的なセッション再利用**: ワークフロー内で複数のスコープ間でアクティブな接続セッションを共有し、認証オーバーヘッドとレイテンシを最小化します。
* **テキスト補完**: クイックな応答生成、プロンプトベースのタスク完了、長文の要約、非構造化情報の整形が可能です。
* **チャット補完**: マルチターンの対話フローを実現し、システムレベルのガイドラインを適用し、大量の対話を処理します。**Temperature**、**Max Tokens**、**Stop Sequences** などのパラメーターを設定できます。

---

## アクティビティカタログ

このパッケージには、機能別に次のアクティビティが含まれます:

### 1. 接続とスコープ
* **[AI Scope](./latest/ai-scope.md)**: 選択したプロバイダー（OpenAI、Gemini、Anthropic、または Azure OpenAI）に API キーとモデル構成で認証し、他の AI アクティビティの実行スコープとして機能します。

### 2. チャット補完
これらのアクティビティは標準のチャットエンドポイントを使用して対話型ワークフローを構築できます:
* **[Generate Chat Completion](./latest/generate-chat-completion.md)**: **OpenAI** モデルを使用してチャット対話を生成します。
* **[Generate Chat Completion Using Gemini](./latest/generate-chat-completion-using-gemini.md)**: **Google Gemini** モデルを使用してチャット対話を生成します。
* **[Generate Chat Completion Using Anthropic](./latest/generate-chat-completion-using-anthropic.md)**: **Anthropic Claude** モデルを使用してチャット対話を生成します。
* **[Generate Chat Response Azure OpenAI](./latest/generate-chat-response-azure-openai.md)**: **Azure OpenAI** ホストモデルを使用してチャット対話を生成します。

### 3. テキスト補完
これらのアクティビティは単一の補完生成やプロンプトと応答のタスクを扱います:
* **[Generate Text Completion](./latest/generate-text-completion.md)**: **OpenAI** モデルを使用してテキスト補完を行います。
* **[Generate Text Completion Using Gemini](./latest/generate-text-completion-using-gemini.md)**: **Google Gemini** モデルを使用してテキスト補完を行います。
* **[Generate Text Completion Using Anthropic](./latest/generate-text-completion-using-anthropic.md)**: **Anthropic Claude** モデルを使用してテキスト補完を行います。
* **[Generate Text Response Azure OpenAI](./latest/generate-text-response-azure-openai.md)**: **Azure OpenAI** ホストモデルを使用してテキスト応答を生成します。

---

## はじめ方

AI Service Activities を用いたワークフロー作成は、以下の一貫したパターンに従います:

1. **コンテナを追加**: ワークフローデザイナーに **AI Scope** アクティビティをドラッグ＆ドロップします。
2. **認証を設定**: **AI Scope** のプロパティで **Provider Type** を選択し、**API Key** を貼り付け、使用したい **Model**（例: `gpt-4o` や `gemini-1.5-flash`）を指定します。
3. **AI アクティビティを挿入**: 必要なテキストまたはチャットアクティビティ（例: **Generate Chat Completion**）を **AI Scope** の **Do** ブロック内に配置します。
4. **プロンプトと出力をマッピング**: アクティビティ本文に入力プロンプトを書きます。出力プロパティの **Result** フィールドに変数を作成し、AI が生成した応答を後続処理で使用します。
