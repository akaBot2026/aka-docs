---
id: generate-text-completion-using-anthropic
title: "Generate Text Completion Using Anthropic"
sidebar_label: "Generate Text Completion Using Anthropic"
sidebar_position: 6
description: "Generate Text Completion Using Anthropic activity documentation."
displayed_sidebar: activitiesSidebar
---
# Anthropic を使用したテキスト補完の生成

RCA.Activities.AIServices.GenerateTextCompletionUsingAnthropic

## **説明**

Generate Text Completion Using Anthropic アクティビティは、プロンプトに基づいて Anthropic モデルを使用してテキスト補完応答を生成します。このアクティビティは **Provider Type** を Anthropic に設定した AI Scope 内で使用する必要があります。

![text-an](/static/img/text-an.png)

（\* は必須）

## **アクティビティ本文内**

* **Prompt** - Anthropic テキスト補完を生成するための入力プロンプト。
* **File Path** - 生成に使用するオプションのファイルパス。
* **Image** - Anthropic テキスト補完の生成に用いる画像オブジェクト。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール変数は True または False のいずれかです  
  **- True** : アクティビティ内でエラーが発生してもプロセスの残りの実行を続行します。  
  **- False** : 実行の継続をブロックします。
* **Timeout MS (Int32)** - アクティビティが完了するまで待つ最大時間（ミリ秒）。デフォルトは 30000（ミリ秒）。  
  例: 30000

**入力**

* **File Path (String)** - 補完生成に使用するファイルのパス。一般的な画像ファイル（JPEG、PNG、WEBP）やドキュメントファイル（PDF、TXT）を含みます。
* **Image (Image)** - テキスト補完に使用する入力画像オブジェクト。
* **Prompt (String)\*** - Anthropic テキスト補完のための入力プロンプト。

**オプション**

* **Max Tokens (Int32)\*** - 生成する最大トークン数。デフォルトは 1920。
* **Stop Sequences (String[])** - 出力生成を停止する文字列シーケンス。
* **Temperature (Double?)** - 出力のランダム性を制御。高い値はより創造的な結果を生成します。
* **Top K (Int32?)** - 次のトークンを選ぶ際に考慮する上位確率トークンの数。
* **Top P (Double?)** - サンプリング時に考慮するトークンの累積確率。

**出力**

* **Full Response (JObject)** - サービスからの完全なレスポンス。
* **Result (String)** - テキスト補完の結果。

**その他**

* **Public (Checkbox)** - アクティビティを公開したい場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。
* **Display Name (String)** - このアクティビティの名前。コードを整理・構造化するために名前を編集できます。  
  例: Generate Text Completion Using Anthropic