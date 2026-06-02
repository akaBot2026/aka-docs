---
id: generate-text-completion
title: "Generate Text Completion"
sidebar_label: "Generate Text Completion"
sidebar_position: 2
description: "Generate Text Completion activity documentation."
displayed_sidebar: activitiesSidebar
---
# テキスト補完の生成

RCA.Activities.AIServices.GenerateTextCompletion

## **説明**

Generate Text Completion アクティビティは、プロンプトに基づいて OpenAI モデルを使用してテキスト補完応答を生成します。このアクティビティは **Provider Type** を OpenAI に設定した AI Scope 内で使用する必要があります。

![text-open-ai](/static/img/text-open-ai.png)

（\* は必須）

## **アクティビティ本文内**

* **Prompt** - テキスト補完を生成するための入力プロンプト。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール変数は True または False のいずれかです  
  **- True** : アクティビティ内でエラーが発生してもプロセスの残りの実行を続行します。  
  **- False** : 実行の継続をブロックします。
* **Timeout MS (Int32)** - アクティビティが完了するまで待つ最大時間（ミリ秒）。デフォルトは 30000（ミリ秒）。  
  例: 30000

**入力**

* **Prompt (String)\*** - テキスト補完のための入力プロンプト。

**オプション**

* **Best Of (Int32?)** - サーバー側で複数の補完を生成し最良のものを返します。**N** と併用する場合は **Best Of** が **N** より大きくなければなりません。デフォルトは 1。
* **Echo (Boolean?)** - 補完に加えてプロンプトをエコーします。デフォルトは False。
* **Frequency Penalty (Double?)** - -2.0 から 2.0 の値。正の値は繰り返し表現を減らします。デフォルトは 0。
* **Log Probabilities (Int32?)** - 最も可能性の高い出力トークンに関する対数確率を含めます。
* **Max Tokens (Int32)** - プロンプトと生成される回答を合わせた最大トークン数。デフォルトは 1920。
* **N (Int32?)** - 返される補完選択肢の数。デフォルトは 1。
* **Presence Penalty (Double?)** - -2.0 から 2.0 の値。正の値は新しいトピックが出現する可能性を高めます。デフォルトは 0。
* **Stop (String[])** - API がそれ以上トークンを生成しない最大 4 つのシーケンス。
* **Stream (Boolean?)** - 部分的な進行をストリーミングで返すかどうか。デフォルトは False。
* **Suffix (String)** - 挿入テキストの補完後に続くサフィックス。
* **Temperature (Double?)** - 0 から 2 の間の値。高い値はよりランダムな出力を生成し、低い値はより集中した出力になります。デフォルトは 1。
* **Top P (Double?)** - 0 から 1 の間の値。値を小さくすると考慮されるトークンが少なくなります。デフォルトは 1。

**出力**

* **Full Response (JObject)** - サービスからの完全なレスポンス。
* **Result (String)** - テキスト補完の結果。

**その他**

* **Public (Checkbox)** - アクティビティを公開したい場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。
* **Display Name (String)** - このアクティビティの名前。コードを整理・構造化するために名前を編集できます。  
  例: Generate Text Completion