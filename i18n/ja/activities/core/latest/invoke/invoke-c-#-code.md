---
id: invoke-csharp-code
title: "Invoke C# Code"
sidebar_label: "Invoke C# Code"
sidebar_position: 1
description: "Invoke C# Code activity documentation."
displayed_sidebar: activitiesSidebar
---
# C# コードの呼び出し

RCA.Activities.Core.InvokeCSharpCode

## **説明**

このアクティビティでは、C# コードを同期的に呼び出し、必要に応じて入力引数の一覧を渡すことができます。このアクティビティは、呼び出し元ワークフローに対してアウト引数を返すこともできます。

![invoke-c-code.png](/static/img/invoke-c-code.png) 

（* は必須）

## **アクティビティ本文内**

* **Edit Code (Button)** – ここをクリックして実行したいコードを記述します。
* **Edit Arguments (Button)** – ここをクリックして各種引数を追加・編集します。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)**- エラーが発生した場合に自動化を継続するかを指定するプロパティです。値は True または False の2つのみです。  
  **True** - アクティビティ内でエラーが発生しても、プロセスの残りの実行を続行します。  
  **False (デフォルト)** - 実行の継続をブロックします。

**入力**

* **Arguments (String)**- 呼び出されるコードに渡されるパラメータ
* **Code (String)** - 呼び出されるコード（VB.Net と表記されていますが、ここでは C# コードを想定しています）。

**その他**

* **Public (Checkbox)**- チェックすると、このアクティビティのデータがログに表示されます。使用前にデータセキュリティを考慮してください。
* **Display Name (String)** - このアクティビティの名前。コードを整理・構造化するために名前を編集できます。  
  例: [246443801] Invoke C# Code