---
id: generate-chat-response-azure-openai
title: "Generate Chat Response Azure OpenAI"
sidebar_label: "Generate Chat Response Azure OpenAI"
sidebar_position: 9
description: "Generate Chat Response Azure OpenAI activity documentation."
displayed_sidebar: activitiesSidebar
---
# Azure OpenAI を使用したチャット応答の生成

RCA.Activities.AIServices.GenerateChatResponseAzureOpenAI

## **説明**

Generate Chat Response Azure OpenAI アクティビティは、ユーザープロンプト、オプションのファイルまたは画像入力、会話履歴に基づいて Azure OpenAI モデルを使用してチャット応答を生成します。このアクティビティは **Provider Type** を AzureOpenAI に設定した AI Scope 内で使用する必要があります。

![chat-res-azure](/static/img/chat-res-azure.png)

（\* は必須）

## **アクティビティ本文内**

* **Prompt** - Azure OpenAI チャット応答を生成するための入力プロンプト。
* **File Path** - 生成に使用するオプションのファイルパス。
* **Image** - Azure OpenAI チャット応答の生成に用いる画像オブジェクト。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール変数は True または False のいずれかです  
  **- True** : アクティビティ内でエラーが発生してもプロセスの残りの実行を続行します。  
  **- False** : 実行の継続をブロックします。
* **Timeout MS (Int32)** - アクティビティが完了するまで待つ最大時間（ミリ秒）。デフォルトは 30000（ミリ秒）。  
  例: 30000

**入力**

* **File Path (String)** - 応答生成に使用するファイルのパス。一般的な画像ファイル（JPEG、PNG、WEBP）やドキュメントファイル（PDF、TXT）を含みます。
* **Image (Image)** - 応答生成に使用する入力画像オブジェクト。
* **Prompt (String)\*** - チャット応答のための入力プロンプト。

**オプション**

* **Instruction (String)** - 会話全体で AI モデルが従うシステムレベルの指示。AI Scope 会話履歴の先頭に一度追加されます。
* **Max Output Tokens (Int32)** - 生成される最大トークン数。デフォルトは 1920。
* **Reasoning Effort (String)** - gpt-5 および o-series モデル専用。推論の努力量を制約します。サポート値: none、minimal、low、medium、high。
* **Reasoning Summary (String)** - gpt-5 および o-series モデル専用。モデルが行った推論の要約モード。サポート値: auto、concise、detailed。
* **Summarization Message Threshold (Int32)** - 会話要約をトリガーするメッセージ数の閾値。デフォルトは 15。
* **Summarization Token Threshold (Int32)** - 会話要約をトリガーするトークン閾値。デフォルトは 3000。
* **Temperature (Double?)** - 応答のランダム性（0.0〜2.0）。高い値はより創造的、低い値はより決定的な応答を生成します。デフォルトは 1.0。
* **Top P (Double?)** - Nucleus サンプリングの値。**Temperature** と **Top P** の両方を変更する場合は注意して設定してください。デフォルトは 1。

**出力**

* **Full Response (JObject)** - サービスからの完全なレスポンス。
* **Result (String)** - モデルの結果。

**その他**

* **Public (Checkbox)** - アクティビティを公開したい場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。
* **Display Name (String)** - このアクティビティの名前。コードを整理・構造化するために名前を編集できます。  
  例: Generate Chat Response Azure OpenAI