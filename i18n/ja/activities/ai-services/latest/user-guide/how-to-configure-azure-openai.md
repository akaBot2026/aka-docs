---
id: how-to-configure-azure-openai
title: "AI Scope - Azure OpenAI のセットアップ"
sidebar_label: "Azure OpenAI のセットアップ"
sidebar_position: 1
description: "Microsoft Foundry を使用した akaBot Studio の AI Scope 向け Azure OpenAI セットアップガイド。"
displayed_sidebar: activitiesSidebar
---

# セットアップガイド: AI Scope 向け Azure OpenAI

このガイドでは、**Microsoft Foundry** (`ai.azure.com`) を使用して akaBot の `AIScope` アクティビティ向けに Azure OpenAI の認証およびモデルデプロイを構成する手順を説明します。

このアクティビティは、`Do` コンテナ内で以下のアクティビティをサポートします:

| akaBot アクティビティ | 対応機能 |
| --- | --- |
| `Generate Chat Response Azure OpenAI` | マルチターンチャット会話、システム指示、ユーザープロンプト、画像/ファイル添付 |
| `Generate Text Response Azure OpenAI` | 単一プロンプトによるテキスト補完・生成 |

---

## 1. ポータル: Microsoft Foundry へのサインイン

Azure OpenAI モデル、デプロイ、および API 認証情報は、すべて **Microsoft Foundry**（旧称: Azure AI Foundry / Azure OpenAI Studio）内で一元管理されます。

1. [Microsoft Foundry ポータル](https://ai.azure.com/) にアクセスします。
2. Azure 組織認証情報でサインインします。
3. 対象の **Hub** を選択し、**プロジェクト** を開きます（または新規プロジェクトを作成します）。

![Microsoft Foundry のプロジェクトホーム画面](/static/img/azure-openai-02-foundry-project.png)

---

## 2. モデル: `Responses` 対応モデルの選択

Azure OpenAI では、API リクエストを受信する前にモデルインスタンスをデプロイする必要があります。

### 2.1 モデル要件: `Responses` タグの必須

:::important 重要なモデル要件: Responses タグ
akaBot の Azure OpenAI アクティビティは、`/openai/v1/responses` エンドポイントを介して通信します。そのため、カタログ内のモデルカードの下に **`Responses`** と表示されているモデル（例: `gpt-4o`、`gpt-4o-mini`、`gpt-5.4`、`gpt-chat-latest` など）を**必ず選択してください**。`Messages` のみ対応のモデル（Anthropic Claude など）や `Audio generation` のみのモデルは、akaBot の Azure OpenAI アクティビティでは利用できません。
:::

### 2.2 カタログの閲覧とモデル詳細の表示

1. Microsoft Foundry の上部ナビゲーションで以下を開きます:

   ```text
   Discover -> Models
   ```

2. **`Responses`** タグが付いた OpenAI モデル（例: `gpt-4o` または `gpt-4o-mini`）を検索・選択します。
3. モデルカードを直接クリックして詳細ページを開きます。

![Microsoft Foundry のモデル詳細ページ](/static/img/azure-openai-03-deploy-base-model.png)

---

## 3. デプロイ: モデルのデプロイ

1. モデル詳細ページの右上隅にある **Deploy**（または **Deploy to this project**）ボタンをクリックします。
2. 表示されたデプロイダイアログで、以下を入力します:

   ```text
   デプロイ名 (Deployment name): (例: gpt-4o または my-gpt4o-deployment)
   デプロイの種類: Standard / Global Standard
   TPM (1分あたりのトークン数) 制限: ワークロードのクォータに応じて設定
   ```

3. **デプロイ (Deploy)** をクリックします。

![デプロイ構成ダイアログ](/static/img/azure-openai-04-deployment-dialog.png)

:::important 最重要: デプロイ名 (Deployment Name) とモデル名の違い
akaBot Studio では、`AI Scope` の **Model** プロパティに、ベースモデル名ではなく上記ステップ 2 の **デプロイ名 (Deployment name)** を設定する必要があります。たとえば、デプロイ名を `my-gpt4o-deployment` と命名した場合、**Model** フィールドには `"my-gpt4o-deployment"` と入力します。
:::

---

## 4. 認証情報: エンドポイント URL と API キーの取得

1. Microsoft Foundry で以下に移動します:

   ```text
   プロジェクト設定 (左下 Project Settings) -> エンドポイントとキー (Endpoints & Keys)
   ```

2. **エンドポイントとキー** の表から以下を確認してコピーします:

   ```text
   エンドポイント: https://<your-resource-name>.openai.azure.com/
   キー: Key 1 (または Key 2)
   ```

![Microsoft Foundry のエンドポイントとキー画面](/static/img/azure-openai-06-foundry-keys.png)

---

## 5. akaBot AIScope のセットアップ

### 5.1 AI Scope の構成

1. akaBot Studio でワークフローを開きます。
2. **AI Services > AI Scope** をキャンバスにドラッグします。
3. 右側の **プロパティ** パネルで以下を設定します:

```text
Provider Type = AzureOpenAI
Api Key = "<セクション 4 でコピーした API キー>"
Endpoint = "https://<your-resource-name>.openai.azure.com/"
Model = "<セクション 3 で作成したデプロイ名>"
```

| プロパティ | 型 | 必須 | 説明 |
| --- | --- | --- | --- |
| `Provider Type` | `AIProviderType` | はい | ドロップダウンリストから `AzureOpenAI` を選択 |
| `Api Key` | `String` | はい | セクション 4 のシークレットキー（引用符付き文字列または変数） |
| `Endpoint` | `String` | はい | セクション 4 のエンドポイント URL |
| `Model` | `String` | はい | セクション 3 で作成した正確な **デプロイ名 (Deployment Name)** |
| `Use Existing Session` | `AISession` | いいえ | 前のスコープを再利用する場合のセッション変数 |
| `Disposed On Completion`| `Boolean` | いいえ | デフォルト `True`。後続スコープで再利用する場合は `False` |

### 5.2 Do コンテナ内への子アクティビティの追加

1. **AI Scope** の **Do** ブロック内に、**Generate Chat Response Azure OpenAI**（または **Generate Text Response Azure OpenAI**）をドラッグします。
2. 設定項目:

```text
Prompt = "送信するプロンプトテキスト"
Result = <Ctrl+K で作成した出力 String 変数>
Timeout MS = 30000 (長いプロンプトやファイルを処理する場合は増やす)
```


:::note
リクエストのタイムアウト時間は、親の `AI Scope` ではなく、子アクティビティ側の **Timeout MS**（デフォルト `30000` ms / 30秒）で設定します。
:::

---

## 6. よくあるエラーと対処法

| エラー | 原因 | 解決策 |
| --- | --- | --- |
| `401 Unauthorized` | **Api Key** の不足、入力ミス、または期限切れ | セクション 4 の Key 1 を再コピーし、エンドポイントリソースに属していることを確認します。 |
| `404 DeploymentNotFound` | **Model** プロパティが Foundry 上の **デプロイ名** と一致していない | Microsoft Foundry のセクション 3 を確認し、正確な **デプロイ名**（大文字・小文字を区別）を `Model` フィールドに入力します。 |
| `404 Resource Not Found` | **Endpoint** URL が誤っているか、存在しないエンドポイントを指している | セクション 4 からエンドポイント URL を再コピーします。 |
| `429 Too Many Requests` | 1分あたりのトークン数 (TPM) クォータを超過した | Microsoft Foundry でデプロイを編集して TPM クォータを増やすか、リクエスト間に **Delay** を追加します。 |
| `TimeoutException` | 処理時間がデフォルトのタイムアウト時間を超過した | 子アクティビティの **Timeout MS**（例: `60000`）の値を増やします。 |
