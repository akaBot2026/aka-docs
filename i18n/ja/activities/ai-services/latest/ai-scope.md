---
id: ai-scope
title: "AI Scope"
sidebar_label: "AI Scope"
sidebar_position: 1
description: "AI Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# AI スコープ

RCA.Activities.AIServices.AIScope

## **説明**

AI Scope アクティビティは AI プロバイダーへの接続と認証を行います。AI Service アクティビティをこのスコープ内に配置することで、設定されたプロバイダーに対してプロンプト送信、テキスト応答生成、チャットの継続などを行えます。

![scope](/static/img/scope.png)

（\* は必須）

## **アクティビティ本文内**

* **Do** - 設定された AI プロバイダーセッション内で実行したい AI Service アクティビティ。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール変数は True または False のいずれかです  
  **- True** : アクティビティ内でエラーが発生してもプロセスの残りの実行を続行します。  
  **- False** : 実行の継続をブロックします。
* **Timeout MS (Int32)** - スコープのタイムアウト（ミリ秒）。子アクティビティが独自のタイムアウトを指定していない場合のデフォルトとして使用されます。デフォルト値: 30000（ミリ秒）。  
  例: 30000

**入力**

* **Api Key (String)\*** - 選択した AI プロバイダーへ認証するために使用する API キー。
* **Endpoint (String)** - サービスプロバイダーのエンドポイント URL。**Provider Type** が AzureOpenAI の場合に必須。  
  例: https://project-name.openai.azure.com/
* **Model (String)\*** - 応答を生成するために使用するモデルの ID。  
  例: gpt-4o, gemini-1.5-pro-latest, claude-3-sonnet-20240229
* **Provider Type (AIProviderType)** - 使用する AI プロバイダーの種類。サポートされる値には OpenAI、GoogleGemini、Anthropic、AzureOpenAI が含まれます。
* **Use Existing Session (AISession)** - 以前の AI Scope からの既存セッション。提供されると新しいセッションを作成する代わりに当該セッションを再利用します。

**オプション**

* **Disposed On Completion (Boolean)** - アクティビティ完了時にリソースを自動的に破棄するかを制御します。後続の AI Scope アクティビティでセッションを再利用したい場合は False に設定し、チェーンの最後の AI Scope でリソースをクリーンアップしたい場合は True に設定します。

**出力**

* **Output Session (AISession)** - 後続の AI Scope アクティビティに渡せる出力セッション。

**その他**

* **Public (Checkbox)** - アクティビティを公開したい場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。
* **Display Name (String)** - このアクティビティの名前。コードを整理・構造化するために名前を編集できます。  
  例: AI Scope