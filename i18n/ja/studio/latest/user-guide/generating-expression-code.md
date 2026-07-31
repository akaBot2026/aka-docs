---
id: generating-expression-code
title: 自然言語から式コードの生成
sidebar_label: 自然言語から式コードの生成
sidebar_position: 5
description: akaBot StudioのExpression Editor内で、自然言語を使用してVisual Basic（VB.Net）およびC#の式を直接生成します。
displayed_sidebar: studioSidebar
---

# 自然言語から式コードの生成

**Natural Language to Expression Code（自然言語から式コードの生成）** 機能は、**akaBot Studio**のExpression Editor内に直接統合された、AIを活用したインテリジェントなアシスタントです。開発者は自然言語でロジックの説明を入力するだけで、正確な**VB.Net**または**C#**の式コードを自動的にコンパイルして生成できます。

複雑な構文（シンタックス）を暗記したり、プログラミングライブラリを検索する時間を費やしたりする代わりに、開発者は自分の意図を説明するだけで済みます。AIアシスタントはオートパイロットとして機能し、ワークフロー設計を加速させ、初心者にはローコード/ノーコードのアクセシビリティを提供し、経験豊富な開発者には時間を節約します。

## 主な機能

akaBot Studioの **Natural Language to Expression Generator（自然言語から式生成機能）** は、以下の機能を提供します：

* 自然言語をVB.NetまたはC#の式に変換します。
* 開発者が手動でコーディングする手間を減らし、式をより速く記述できるようにします。
* 構文エラーを減らし、生産性を向上させます。
* ワークフローのロジック、バリデーション、および計算の作成を簡素化します。
* プログラミングの知識が限られているユーザーでも、式の開発を容易にします。

## ユーザーインターフェース（UI）の概要

この機能は、akaBot Studioの標準的な **Expression Editor** ダイアログの下部に直接埋め込まれています。

![ui-expression-code](/static/img/ui-expression-code.png)

1. **Expression Area (Editor Pane)（式エリア / エディターペイン）**: 生成された式が挿入されるメインのテキストフィールドです。ここでコードを手動で編集または修正することもできます。

![expression-textfield.png](/static/img/expression-textfield.png)

2. **Natural Language Input Field（自然言語入力フィールド）**: ダイアログの下部にあるテキストボックスで、*`Describe your expression in natural language...`*（自然言語で式を説明してください...）というプレースホルダーがあります。ここにプロンプトを入力します。

![prompt-expression-code](/static/img/prompt-expression-code.png)

3. **Control Buttons（コントロールボタン）**:

![ui-code](/static/img/ui-code.png)


   - **OK**: 現在の式を保存し、アクティビティのプロパティに適用します。
   - **Cancel（キャンセル）**: 保存せずにダイアログを閉じます。

## ステップバイステップガイド

テキストプロンプトを使用して式コードを生成するには、akaBot StudioがAIサービスにアクティブに接続されていることを確認してください。

テキストプロンプトを使用して式コードを生成するには、以下の手順に従います：

**ステップ 1: ワークフローへの移動**

式を追加したいワークフローファイルに移動します。

**注意**
> * **変数の完全一致**: 式が複数の変数または引数に依存している場合、プロンプトにはワークフローで定義されている変数名または引数名を**完全に一致させて**含める必要があります。
> * **変数の事前宣言**: 式の生成を試みる前に、参照されるすべての変数と引数が、akaBot Studioの **Variables（変数）** または **Arguments（引数）** パネルで既に作成されていることを確認してください。

**ステップ 2: Expression Editorを開く**

ワークフロー内のアクティビティを選択します。右側の **Properties（プロパティ）** パネルで、式を追加したいプロパティ（条件、パス、値など）を見つけます。プロパティフィールドの横にある設定または省略記号（...）ボタンをクリックして、**Expression Editor** ウィンドウを開きます。

**ステップ 3: プロンプトの入力**

Expression Editorダイアログの下部にある、*`Describe your expression in natural language...`* というプレースホルダーがある入力フィールドを見つけます。追加したいロジックや条件を説明するテキストプロンプトを記述します。

**ステップ 4: 式の生成**

キーボードの **Enter** キーを押すか、生成アイコンをクリックします。AIアシスタントがリクエストを処理し、生成されたVB.NetまたはC#の式コードをメインのエディターペインに直接入力します。

**ステップ 5: 保存して適用**

エディターペインで生成された式を確認します。必要に応じて手動で修正を行い、**OK** をクリックして式を保存し、アクティビティに適用します。

## プロンプト記述のベストプラクティス

AIアシスタントから最も正確で信頼性の高い式を得るために、以下のプロンプトのガイドラインに従ってください：

* **変数を正確に参照する**: プロジェクトで定義されている変数、引数、またはアセットの正確な名前を常に使用します（例：`customerEmail`、`invoiceDateText`）。
* **アクション動詞を指定する**: ロジックを導くために、明確なプログラミングの動詞を使用します（例：*"Convert"*（変換する）、*"Filter"*（フィルタリングする）、*"Extract"*（抽出する）、*"Combine"*（結合する）、*"Check whether"*（〜かどうか確認する））。
* **デフォルト値を定義する**: 空（empty）になる可能性のある値を処理する場合は、プロンプトでフォールバック（代替値）を指定します（例：*"Convert amountText to Decimal, using 0 if it is empty"*）。
* **複雑なロジックを分割する**: ロジックに複数のネストされた条件が含まれる場合は、それらを順次説明します（例：*"Check if dt_EmployeeData is not null and has at least one row"*）。


## 要件と制限事項

 コンパイルエラーを回避するために、以下のルールに留意してください：
 
> 1. **変数の事前宣言**: AIアシスタントは、名前をプロジェクト内の変数にマッピングします。式を生成する前に、参照されるすべての変数と引数がakaBot Studioの **Variables（変数）** または **Arguments（引数）** パネルで既に作成されていることを確認してください。
> 2. **プロジェクトの言語コンテキスト**: 式のフォーマット（VB.NetかC#か）は、プロジェクトの設定によって決定されます。プロジェクトがVB.Netプロジェクトの場合、エディターはVBの式を生成し、C#プロジェクトの場合はC#の式を生成します。


## サンプルライブラリ

以下は、使用されるエディターのコンテキストごとに整理された一般的なプロンプトのライブラリ（サンプル集）です。

**Expression Editorの例**

これらのプロンプトは、**Expression Editor** が単一行の式（計算、条件チェック、単純な文字列/パス操作、データテーブルのフィルタリングなど）を生成するために設計されています。

| Expression Target | Function (機能) | Example Prompt (プロンプト例) |
| :--- | :--- | :--- |
| **App variables** | ワークフロー変数 `str_UserToken` が空かどうかを確認し、デフォルトのトークン値を割り当てます。 | `"If str_UserToken is null or empty, set it to 'DEFAULT_TOKEN'"` |
| **App arguments** | 取引手数料を計算し、それを出力引数 `out_TransactionFee` に割り当てます。 | `"Calculate out_TransactionFee as 5 percent of in_Amount"` |
| **Filter** | 無効または空白のメールアドレスを含む行を除外するために、DataTable変数をフィルタリングします。 | `"Filter dt_CustomerData where Column 'Email' is not empty and contains '@'"` |
| **Custom Model** | ブラウザー変数から現在のURLを取得します。 | `"Get the current URL from edgeBrowser"` |
| **Filter** | DataTable `dt_EmployeeData` がnullではなく、少なくとも1つの行を持っているかを確認します。 | `"Check if the datatable dt_EmployeeData is not null and has at least one row"` |
| **Files** | 完全なファイルパスから、拡張子なしのファイル名を抽出します。 | `"Extract the file name without extension from fullFilePath"` |
| **Datetime** | yyyyMMdd_HHmmss形式でタイムスタンプの文字列を作成します。 | `"Create a timestamp string in yyyyMMdd_HHmmss format"` |
| **Convert** | 請求書の日付のテキスト表現をDateTimeオブジェクトに変換します。 | `"Convert invoiceDateText to a DateTime"` |
| **Check** | テキストの金額をDecimalに変換し、空の場合はデフォルトで0にします。 | `"Convert amountText to Decimal, using 0 if it is empty"` |

**AI Code Editorの例**

これらのプロンプトは、**Code Editor**（Invoke CodeまたはScriptアクティビティで使用）が、複数行のロジック、複雑なループ、エラーハンドリングブロック、データベースクエリ、およびWebサービス呼び出しを生成するために設計されています。

| Expression Target | Function (機能) | Example Prompt (プロンプト例) |
| :--- | :--- | :--- |
| **App variables** | 入力アイテムを反復処理し、値をクリーンアップして、出力リストにデータを入力します。 | `"Loop through in_RawData list of strings, trim whitespace, convert to uppercase, and add to list_ProcessedData"` |
| **App arguments** | 入ってくるワークフロー引数からのデータベースクエリパラメータを、コマンド実行にマッピングします。 | `"Create SQL command using connectionString and in_Query, bind argument in_UserId, execute query, and assign output to out_ResultDataTable"` |
| **Custom model** | カスタムC#またはVB.NETスクリプトブロック内で、Webコンテンツをダウンロードするか、APIエンドポイントと通信します。 | `"Create an HttpClient to make a GET request to in_Url, parse the response status code, and output JSON string to out_ResponseJson"` |
| **Filter & Aggregation** | 単一行の式には長すぎるデータテーブルのグループ化、集計、および複雑な結合を行います。 | `"Group dt_Sales by Column 'Region' and compute the sum of 'Revenue' for each region into a new DataTable out_Summary"` |
| **Error Handling & Logging** | メインのボットスレッドを中断することなくエラーを記録するために、機密性の高いファイル操作の周囲に標準のtry-catchブロックを実装します。 | `"Try to read file at in_FilePath, catch all exceptions, write details to Console.Error, and set out_IsSuccess to false"` |
| **File System Manipulation** | 詳細な再帰的ファイルスキャン、フィルタリング、およびコピー操作を実行します。 | `"Recursively search directory in_SourcePath for all files modified in the last 24 hours, copy them to in_DestPath, and count total files copied in out_FileCount"` |

## トラブルシューティング

Ask AIサービスの使用中にネットワーク接続の問題やエラーが発生した場合は、[Ask AIのトラブルシューティング](../troubleshoot/troubleshoot-ask-ai.md) ガイドを参照してください。
