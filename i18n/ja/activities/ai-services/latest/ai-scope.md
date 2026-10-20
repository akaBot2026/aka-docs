---
id: ai-scope
title: "AI Scope"
sidebar_label: "AI Scope"
sidebar_position: 3
description: "AI Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# AI スコープ

RCA.Activities.AIServices.AIScope

## **説明**

AI Scope アクティビティは AI プロバイダーへの接続と認証を行います。AI Service アクティビティをこのスコープ内に配置することで、設定されたプロバイダーに対してプロンプト送信、テキスト応答生成、チャットの継続などを行えます。

![scope](/static/img/scope.png)

（* は必須）

## 設定ガイド

1. **AI Scope** をワークフローにドラッグ＆ドロップします。
2. **Provider Type**（例: `OpenAI`）を設定し、**Api Key** を貼り付け（下記の「**API キーの取得方法**」を参照）、**Model**（例: `gpt-4o`）を設定します。**Provider Type** が `AzureOpenAI` の場合は、**Endpoint** も入力します。
3. そのプロバイダーに対応する AI Service アクティビティを **Do** ブロック内に配置します（対応一覧は [Activity Catalog](/i18n/ja/activities/ai-services/latest/introduction.md#activity-catalog) を参照。例: OpenAI の場合は **Generate Chat Completion**、Google Gemini の場合は **Generate Chat Completion Using Gemini**）。
4. そのアクティビティ内にプロンプトを記述し、**Result** 出力を変数に格納してワークフロー内で使用します。

## **アクティビティ本文内**

* **Do** - 設定された AI プロバイダーセッション内で実行したい AI Service アクティビティ。ここで使用するアクティビティは、上記で設定した **Provider Type** と一致している必要があります。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール変数は True または False のいずれかです  
  **- True** : アクティビティ内でエラーが発生してもプロセスの残りの実行を続行します。  
  **- False** : 実行の継続をブロックします。

**入力**

* **Api Key (String)\*** - 選択した AI プロバイダーへ認証するために使用する API キー。
* **Endpoint (String)** - サービスプロバイダーのエンドポイント URL。**Provider Type** が AzureOpenAI の場合に必須です。これはプレースホルダーの形式であり、実際のアドレスではありません — `project-name` の部分を **Microsoft Foundry**（または Azure Portal）から取得した実際のエンドポイントに置き換えてください。  
  例: `https://project-name.openai.azure.com/`
* **Model (String)\*** - 応答を生成するために使用するモデルの ID。プロバイダーアカウントがアクセス権を持つモデルである必要があります。  
  例: `gpt-4o` (OpenAI)、`gemini-1.5-pro` (Google Gemini)、`claude-3-5-sonnet` (Anthropic)
* **Provider Type (AIProviderType)** - 使用する AI プロバイダーの種類。サポートされる値には OpenAI、GoogleGemini、Anthropic、AzureOpenAI が含まれます。
* **Use Existing Session (AISession)** - 以前の AI Scope からの既存セッション。提供されると新しいセッションを作成する代わりに当該セッションを再利用します。

**API キーの取得方法**

* **OpenAI** - [platform.openai.com](https://platform.openai.com/api-keys) にサインインし、**API keys** を開いて新しいシークレットキーを作成します。
* **Anthropic** - [console.anthropic.com](https://console.anthropic.com/settings/keys) にサインインし、**API Keys** を開いて新しいキーを作成します。
* **Google Gemini** - [aistudio.google.com](https://aistudio.google.com/apikey) にサインインし、**Get API Key** を選択します。
* **Azure OpenAI** - **Microsoft Foundry**（または Azure Portal）にサインインし、プロジェクトを開いてプロジェクト設定から API キーとエンドポイント URL をコピーします。**Provider Type** を `AzureOpenAI` に設定する場合は、**Endpoint** フィールドにもこの値を入力します。詳しい手順については、[Azure OpenAI 構成ガイド](/i18n/ja/activities/ai-services/latest/user-guide/how-to-configure-azure-openai.md) を参照してください。

**トラブルシューティング**

* **認証エラーですぐに失敗する** - **Api Key** が不足しているか、誤っているか、またはプロバイダーのサイトで取り消されています。新しいキーを生成し（上記の「**API キーの取得方法**」を参照）、**Api Key** を更新してください。
* **モデルが見つからない、または無効なモデルエラーで失敗する** - **Model** の値のスペルミス、またはプロバイダーアカウント/API キーがそのモデルへのアクセス権を持っていない可能性があります。プロバイダーのダッシュボードで正確なモデル ID を確認し、アクセス権があることを確認してください。
* **AzureOpenAI プロバイダーへの接続に失敗する** - **Endpoint** が空または誤っています。`AzureOpenAI` の場合のみ、**Microsoft Foundry**（または Azure Portal）から取得したエンドポイント URL を入力する必要があります。
* **長いプロンプトや長いドキュメントでタイムアウトする** - AI Scope 自体ではなく、スコープ内の特定の子 AI アクティビティ（例: **Generate Chat Completion**）の **Timeout MS**（デフォルト `30000`）を増やしてください。

**オプション**

* **Disposed On Completion (Boolean)** - アクティビティ完了時にリソースを自動的に破棄するかを制御します。後続の AI Scope アクティビティでセッションを再利用したい場合は False に設定し、チェーンの最後の AI Scope でリソースをクリーンアップしたい場合は True に設定します。

**出力**

* **Output Session (AISession)** - 後続の AI Scope アクティビティに渡せる出力セッション。

**その他**

* **Public (Checkbox)** - アクティビティを公開したい場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。
* **Display Name (String)** - このアクティビティの名前。コードを整理・構造化するために名前を編集できます。  
  例: AI Scope
