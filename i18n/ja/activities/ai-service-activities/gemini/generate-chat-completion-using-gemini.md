---
id: generate-chat-completion-using-gemini
title: "Generate Chat Completion Using Gemini"
sidebar_label: "Generate Chat Completion Using Gemini"
sidebar_position: 5
description: "Generate Chat Completion Using Gemini activity documentation."
displayed_sidebar: activitiesSidebar
---
# Gemini を使用したチャット補完の生成

RCA.Activities.AIServices.GenerateChatCompletionUsingGemini

## **説明**

Generate Chat Completion Using Gemini アクティビティは、ユーザープロンプトと会話履歴に基づいて Google Gemini モデルを使用してチャット補完応答を生成します。このアクティビティは **Provider Type** を GoogleGemini に設定した AI Scope 内で使用する必要があります。

![chat-ge](/static/img/chat-ge.png)

（\* は必須）

## **アクティビティ本文内**

* **Prompt** - Gemini チャット補完を生成するための入力プロンプト。
* **File Path** - 生成に使用するオプションのファイルパス。
* **Image** - Gemini チャット補完の生成に用いる画像オブジェクト。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール変数は True または False のいずれかです  
  **- True** : アクティビティ内でエラーが発生してもプロセスの残りの実行を続行します。  
  **- False** : 実行の継続をブロックします。
* **Timeout MS (Int32)** - アクティビティが完了するまで待つ最大時間（ミリ秒）。デフォルトは 30000（ミリ秒）。  
  例: 30000

**入力**

* **File Path (String)** - 補完生成に使用するファイルのパス。一般的な画像ファイル（JPEG、PNG、WEBP）やドキュメントファイル（PDF、TXT）を含みます。
* **Image (Image)** - チャット補完に使用する入力画像オブジェクト。
* **Prompt (String)\*** - Gemini チャット補完のための入力プロンプト。

**オプション**

* **Candidate Count (Int32?)** - 返される生成応答の数。未設定の場合は 1 をデフォルトとします。
* **Instruction (String)** - 会話全体で AI モデルが従う指示。AI Scope 会話履歴の先頭に一度追加されます。
* **Max Output Tokens (Int32)** - 応答として生成される最大トークン数。デフォルトは 1920。
* **Stop Sequences (String[])** - 出力生成を停止する最大 5 つの文字列シーケンス。
* **Summarization Message Threshold (Int32)** - 会話要約をトリガーするメッセージ数の閾値。デフォルトは 15。
* **Summarization Token Threshold (Int32)** - 将来のターンのためにトークンを節約する目的で会話要約をトリガーするトークン閾値。デフォルトは 3000。
* **Temperature (Double?)** - 出力のランダム性を制御。0.0 から 2.0 の値を指定。デフォルトは 1.0。
* **Top K (Int32?)** - 次のトークンを選ぶ際に考慮する上位確率トークンの数。
* **Top P (Double?)** - サンプリング時に考慮するトークンの累積確率。0.0 から 1.0 の値を指定。デフォルトは 1.0。

**出力**

* **Full Response (JObject)** - サービスからの完全なレスポンス。
* **Result (String)** - チャット補完の結果。

**その他**

* **Public (Checkbox)** - アクティビティを公開したい場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。
* **Display Name (String)** - このアクティビティの名前。コードを整理・構造化するために名前を編集できます。  
  例: Generate Chat Completion Using Gemini