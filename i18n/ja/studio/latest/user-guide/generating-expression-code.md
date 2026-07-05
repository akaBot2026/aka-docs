---
id: generating-expression-code
title: 自然言語から式コードへの生成
sidebar_label: 自然言語から式コードへの生成
sidebar_position: 5
description: akaBot StudioのExpression Editor内で、自然言語を使用してVisual Basic (VB.Net) および C# の式を直接生成します。
displayed_sidebar: studioSidebar
---

# 自然言語から式コードへの生成

**自然言語から式コードへの生成（Natural Language to Expression Code）**機能は、**akaBot Studio**のExpression Editorに直接統合された、インテリジェントなAI搭載アシスタントです。開発者は、平易な自然言語でロジックの記述を入力するだけで、**VB.Net**または**C#**の正確な式コードを自動的にコンパイルし生成できます。

複雑な構文を暗記したり、プログラミングライブラリの検索に時間を費やしたりすることなく、開発者は意図を説明するだけで済みます。AIアシスタントはオートパイロットとして機能し、ワークフローの設計を加速させ、初心者向けのローコード/ノーコードのアクセシビリティを実現し、経験豊富な開発者の時間を節約します。

## 主な機能

akaBot Studioの **自然言語から式コードへの生成** 機能は、以下の機能を提供します。

* 自然言語をVB.NetまたはC#の式に変換します。
* 手動でのコーディングを減らし、開発者がより迅速に式を記述できるように支援します。
* 構文エラーを減らし、生産性を向上させます。
* ワークフローのロジック、検証、および計算の作成を簡素化します。
* プログラミング知識が限られているユーザーでも、式開発を容易に行えるようにします。

## ユーザーインターフェイス（UI）の概要

この機能は、akaBot Studioの標準的な **Expression Editor** ダイアログの最下部に直接組み込まれています。

![ui-expression-code](/static/img/ui-expression-code.png)

1. **Expression領域（エディタペイン）**: 生成された式が挿入されるメインのテキストフィールドです。ここでコードを手動で編集したり微調整したりすることもできます。

![expression-textfield.png](/static/img/expression-textfield.png)

2. **自然言語入力フィールド**: ダイアログの最下部にある、プレースホルダー：*`Describe your expression in natural language...`* が表示されたテキストボックスです。ここにプロンプトを入力します。

![prompt-expression-code](/static/img/prompt-expression-code.png)

3. **コントロールボタン**:

![ui-code](/static/img/ui-code.png)


   - **OK**: 現在の式を保存し、アクティビティのプロパティに適用します。
   - **Cancel**: 保存せずにダイアログを閉じます。

## 操作手順

テキストプロンプトを使用して式コードを生成するには、akaBot StudioがAIサービスにアクティブに接続されていることを確認してください。

テキストプロンプトを使用して式コードを生成するには、次の手順に従います。

**ステップ 1: ワークフローに移動する**

式を追加したいワークフローファイルを開きます。

**注意点**
> * **変数の正確な一致**: 式が複数の変数や引数に依存している場合、プロンプトには、ワークフローで定義されている変数名または引数名を正確に含める必要があります。
> * **変数の事前宣言**: 式を生成する前に、参照されているすべての変数および引数が、akaBot Studioの **Variables** パネルまたは **Arguments** パネルであらかじめ作成されていることを確認してください。

**ステップ 2: Expression Editorを開く**

ワークフロー内のアクティビティを選択します。右側の **Properties** パネルで、式を追加したいプロパティ（条件、パス、値など）を見つけます。プロパティフィールドの横にある構成ボタン（または「...」ボタン）をクリックして、**Expression Editor** ウィンドウを開きます。

**ステップ 3: プロンプトを入力する**

Expression Editor ダイアログの下部にある、プレースホルダー：*`Describe your expression in natural language...`* が表示された入力フィールドを見つけます。追加したいロジックや条件を記述するテキストプロンプトを入力します。

**ステップ 4: 式を生成する**

キーボードの **Enter** キーを押すか、生成アイコンをクリックします。AIアシスタントがリクエストを処理し、生成されたVB.NetまたはC#の式コードをメインエディタペインに直接流し込みます。

**ステップ 5: 保存と適用**

エディタペインに生成された式を確認します。必要に応じて手動で微調整を行い、**OK** をクリックしてアクティビティに式を保存・適用します。

## プロンプトを作成するためのベストプラクティス

AIアシスタントから最も正確で信頼性の高い式を取得するには、以下のプロンプトガイドラインに従ってください。

* **変数を正確に参照する**: プロジェクトで定義されている変数、引数、またはアセットの正確な名前（例：`customerEmail`、`invoiceDateText`）を常に使用してください。
* **動作を表す動詞を指定する**: ロジックをガイドするために、明確なプログラミング動詞（例：「*変換（Convert）*」、「*フィルター（Filter）*」、「*抽出（Extract）*」、「*結合（Combine）*」、「*〜かどうかを確認（Check whether）*」など）を使用します。
* **デフォルト値を定義する**: 空値の可能性がある値を処理する場合は、プロンプトでフォールバック（代替手段）を指定します（例：「*amountText を Decimal に変換し、空の場合は0を使用する*」）。
* **複雑なロジックを分解する**: ロジックに複数のネストされた条件が含まれている場合は、それらを順番に記述します（例：「*dt_EmployeeData が null でなく、少なくとも1行あるかどうかを確認する*」）。

## 要件と制限事項

コンパイルエラーを防ぐために、以下のルールに留意してください。
 
> 1. **変数の事前宣言**: AIアシスタントは、プロジェクト内の変数名とマッピングを行います。式を生成する前に、参照されているすべての変数と引数が、akaBot Studioの **Variables** パネルまたは **Arguments** パネルであらかじめ作成されていることを確認してください。
> 2. **プロジェクト言語のコンテキスト**: 式の形式（VB.Net または C#）は、プロジェクト設定によって決まります。プロジェクトがVB.Netプロジェクトの場合はVBの式が生成され、C#プロジェクトの場合はC#の式が生成されます。

## サンプルライブラリ

以下は、使用されるエディタコンテキストごとに整理された、一般的なプロンプトのライブラリです。

**Expression Editor の例**

これらのプロンプトは、**Expression Editor**で1行の式（例：計算、条件チェック、単純な文字列/パス操作、データテーブルのフィルタリングなど）を生成するために設計されています。

| 式の対象 | 機能 | プロンプト例 |
| :--- | :--- | :--- |
| **App variables** | ワークフロー変数 `str_UserToken` が空であるかを確認し、デフォルトのトークン値を割り当てます。 | `"If str_UserToken is null or empty, set it to 'DEFAULT_TOKEN'"` |
| **App arguments** | 取引手数料を計算し、それを出力引数 `out_TransactionFee` に割り当てます。 | `"Calculate out_TransactionFee as 5 percent of in_Amount"` |
| **Filter** | DataTable 変数をフィルターして、無効なまたは空白のメールアドレスを含む行を除外します。 | `"Filter dt_CustomerData where Column 'Email' is not empty and contains '@'"` |
| **Custom Model** | ブラウザ変数から現在のURLを取得します。 | `"Get the current URL from edgeBrowser"` |
| **Filter** | DataTable `dt_EmployeeData` が null でなく、少なくとも1行存在するかどうかを確認します。 | `"Check if the datatable dt_EmployeeData is not null and has at least one row"` |
| **Files** | フルファイルパスから拡張子なしのファイル名を抽出します。 | `"Extract the file name without extension from fullFilePath"` |
| **Datetime** | yyyyMMdd_HHmmss 形式のタイムスタンプ文字列を作成します。 | `"Create a timestamp string in yyyyMMdd_HHmmss format"` |
| **Convert** | 請求書の日付のテキスト表現を DateTime オブジェクトに変換します。 | `"Convert invoiceDateText to a DateTime"` |
| **Check** | テキスト金額を Decimal に変換し、空の場合はデフォルトで0に設定します。 | `"Convert amountText to Decimal, using 0 if it is empty"` |

**AI Code Editor の例**

これらのプロンプトは、**Code Editor**（Invoke CodeまたはScriptアクティビティで使用）向けに設計されており、複数行のロジック、複雑なループ、エラー処理ブロック、データベースクエリ、およびWebサービスコールを生成します。

| 式の対象 | 機能 | プロンプト例 |
| :--- | :--- | :--- |
| **App variables** | 入力項目をループ処理し、値をクリーンアップして、出力リストに入力します。 | `"Loop through in_RawData list of strings, trim whitespace, convert to uppercase, and add to list_ProcessedData"` |
| **App arguments** | 入力されるワークフロー引数からデータベースクエリパラメータをコマンド実行にマッピングします。 | `"Create SQL command using connectionString and in_Query, bind argument in_UserId, execute query, and assign output to out_ResultDataTable"` |
| **Custom model** | カスタム C# または VB.NET スクリプトブロック内で、Webコンテンツをダウンロードするか、APIエンドポイントと通信します。 | `"Create an HttpClient to make a GET request to in_Url, parse the response status code, and output JSON string to out_ResponseJson"` |
| **Filter & Aggregation** | 1行の式では冗長すぎるデータテーブルに対するグループ化、集約、および複雑な結合処理を行います。 | `"Group dt_Sales by Column 'Region' and compute the sum of 'Revenue' for each region into a new DataTable out_Summary"` |
| **Error Handling & Logging** | メインのボットスレッドを中断することなくエラーをログに記録するため、機密性の高いファイル操作の周囲に標準の try-catch ブロックを実装します。 | `"Try to read file at in_FilePath, catch all exceptions, write details to Console.Error, and set out_IsSuccess to false"` |
| **File System Manipulation** | 深い再帰的なファイルスキャン、フィルタリング、およびコピー操作を実行します。 | `"Recursively search directory in_SourcePath for all files modified in the last 24 hours, copy them to in_DestPath, and count total files copied in out_FileCount"` |

## トラブルシューティング

Ask AI サービスの使用中にネットワーク接続の問題やエラーが発生した場合は、[Ask AI のトラブルシューティング](../troubleshoot/troubleshoot-ask-ai.md) ガイドを参照してください。
