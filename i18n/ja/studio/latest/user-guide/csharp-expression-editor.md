---
id: csharp-expression-editor
title: C# 式エディターと IntelliSense
sidebar_label: C# 式エディターと IntelliSense
sidebar_position: 8
description: akaBot Studio で C# プロジェクトを作成し、自動完成、パラメーターの提案、オーバーロード、LINQ に対応した C# 式エディター（IntelliSense 搭載）を使用する方法を学びます。
displayed_sidebar: studioSidebar
---

# C# 式エディター & IntelliSense

以前のバージョンでは、akaBot Studio は新しい自動化プロジェクトを作成する際、プロジェクトの式言語として VB.NET のみをサポートしていました。最新のアップデートにより、akaBot Studio は **C#** 言語を完全にサポートするようになりました。C# 構文を使用して、ワークフローの構築、変数の代入、条件の設定、LINQ クエリの記述を行うことができます。

このガイドでは、C# プロジェクトの作成、C# 式エディターの使用、C# IntelliSense 機能の概要、およびレガシープロジェクトの移行手順について説明します。

---

## 新規 C# プロジェクトの作成方法

プロジェクトの式言語として C# を使用する新しいプロジェクトを作成するには、次の手順に従います。

1. **akaBot Studio** を開き、スタート画面で **New Project**（新規プロジェクト）をクリックして、**New Blank Project**（新規空のプロジェクト）ダイアログを開きます。

   ![Create New Blank Project](/static/img/csharp-new-project-step.png)

2. プロジェクトの **Name**（名前）と **Location**（保存先）を入力します。**Expression Language**（式言語）設定の下で、**C#** を選択します。

3. **Create**（作成）をクリックしてプロジェクトを初期化します。正常に作成されると、プロジェクトのワークスペースが開きます。下部にあるステータスバーに **Expression Language: C#** と表示され、現在のプロジェクトで C# が有効であることが示されます。

   ![Project Created Successfully](/static/img/csharp-new-project-success.png)

---

## `project.json` から `project.v1.json` への移行

### 移行する理由
古いバージョンの akaBot Studio では、プロジェクト設定が `project.json` に保存されていました。このファイルにはプロジェクトの式言語を指定するフィールドがありませんでした（すべてのプロジェクトがデフォルトで VB.NET に設定されていたため）。

複数の式言語（VB.NET と C#）をサポートし、その他の互換性機能を管理するため、akaBot Studio は **`project.v1.json`** 形式を使用するようになりました。レガシープロジェクトを開くと、Studio は古い形式を検出して移行を促します。新しい設定ファイルには `"expressionLanguage"` プロパティ（例: `"expressionLanguage": "CSharp"` または `"expressionLanguage": "VisualBasic"`）が含まれます。

### プロジェクト移行設定
akaBot Studio での移行動作を制御できます。**File（ファイル） → Options（オプション）** に移動し、**Common（全般）** タブを選択し、下部にある **Project Migration（プロジェクト移行）** セクションを確認します。

    ![Project Migration Options Tab](/static/img/csharp-migration-options-tab.png)

ここでは、次の 2 つのオプションを設定できます。
- **Confirm Project Migration（プロジェクト移行を確認する）**:
  - **チェックあり（デフォルト）**: 移行前に確認ダイアログが表示されます。確認すると、移行が実行されます。
  - **チェックなし**: レガシープロジェクトは、ポップアップダイアログを表示せずに自動的にサイレント移行されます。
- **Remove Old Project File（古いプロジェクトファイルを削除する）**:
  - **チェックあり**: `project.v1.json` への移行が成功した後、古い `project.json` ファイルが削除され、プロジェクトワークスペースがクリーンに保たれます。
  - **チェックなし**: `project.json` と移行された `project.v1.json` の両方がフォルダ内に保持されます。

---

## C# 式エディター

**C# 式エディター**は、アクティビティ内の式フィールド（**Assign**（代入）アクティビティの **Value**（値）フィールドなど）を編集するときに開きます。これは、構文のハイライト、エラー検証、括弧の一致、および IntelliSense をサポートするコードエディターとして機能します。

C# の式は、標準的な C# 構文ルールに従います。以下は、一般的な操作の簡単な比較です。

| 操作 | C# | VB.NET |
| --- | --- | --- |
| 文字列の結合 | `"Hello " + name` | `"Hello " & name` |
| 文字列の比較 | `name == "Admin"` | `name = "Admin"` |
| 不等（等しくない） | `status != "Done"` | `status <> "Done"` |
| Null チェック | `value == null` | `value Is Nothing` |
| 三項演算子 | `success ? "OK" : "Error"` | `If(success, "OK", "Error")` |

---

## C# IntelliSense 機能

C# IntelliSense は、入力中にリアルタイムでヘルプを提供し、迅速でエラーのない開発をサポートします。

### 1. 変数と引数のパラメーター提案
任意の式ボックスに入力すると、IntelliSense はスコープ内のすべてのアクティブな変数と引数を自動的にリストします。また、名前の横に変数のデータ型（`Int32`、`String` など）を表示します。

  ![Suggesting Variables and Arguments](/static/img/csharp-intellisense-variables.png)

### 2. 関数とオーバーロードの提案
変数またはクラス名の後ろにドット（`.`）を入力すると、利用可能なすべてのメソッドとプロパティが提案されます。開き括弧 `(` を入力してメソッドを呼び出すと、IntelliSense はパラメーターの型と説明を示すメソッドの**オーバーロード**をすべてリストします。**上**および**下**矢印キーを使用して、利用可能なシグネチャをスクロールできます。

  ![Suggesting Functions and Overloads](/static/img/csharp-intellisense-overloads.png)

### 3. LINQ サポート
IntelliSense は **LINQ（統合言語クエリ）**を完全にサポートしています。ラムダ式内の完全な自動完成候補を使用して、コレクションやデータテーブルをフィルタリング、マッピング、および変換できます。

:::note 重要: 非ジェネリックコレクションでの LINQ
`myDataTable.Columns.` と入力したときに、LINQ メソッド（`Where`、`Select`、`Count` など）が IntelliSense ドロップダウンに表示されない場合、これは C# の予期された動作です。

* **理由:** `myDataTable.Columns`（`DataColumnCollection`）や `myDataTable.Rows`（`DataRowCollection`）などのコレクションは、ジェネリックの `IEnumerable<T>` ではなく非ジェネリックの `IEnumerable` インターフェースを実装する**非ジェネリックコレクション**です。C#/.NET では、標準の LINQ 拡張メソッドはジェネリックコレクションにのみ定義されています。
* **これらで LINQ を使用する方法:**
  * **Columns（列）の場合**: 最初に使用する前に、`.Cast<DataColumn>()` または `.OfType<DataColumn>()` を使用してコレクションを変換します。
    ```csharp
    myDataTable.Columns.Cast<DataColumn>().Where(col => col.ColumnName.Contains("ID"))
    ```
  * **Rows（行）の場合**: `.AsEnumerable()`（`DataRow` のジェネリックコレクションを返す）を使用して、すべての LINQ メソッドを有効にします。
    ```csharp
    myDataTable.AsEnumerable().Where(row => row.Field<string>("Status") == "Active")
    ```
:::

**LINQ クエリの例:**

- DataTable 行のフィルタリング:
  ```csharp
  myDataTable.AsEnumerable().Where(row => row.Field<string>("Status") == "Active")
  ```
- 行のカウント:
  ```csharp
  myDataTable.AsEnumerable().Count(row => row.Field<int>("Age") > 18)
  ```
- 列からリストへのマッピング:
  ```csharp
  myDataTable.AsEnumerable().Select(row => row.Field<string>("Name")).ToList()
  ```

  ![LINQ Autocomplete Support](/static/img/csharp-intellisense-linq.png)

---

## 実践例

以下は、標準のワークフローにおける C# 式と IntelliSense の使用方法を示す簡単なウォークスルーです。

### 変数のセットアップ
変数パネルで 2 つの変数を作成します。
- `v_Number`（データ型: `Int32`、デフォルト値: `5`）
- `v_Message`（データ型: `String`）

### ワークフローステップ
1. **Assign Value（値の代入）**: **Assign** アクティビティを追加します。
   - **To（宛先）**: `v_Number`
   - **Value（値）**: `v_Number + 10` と入力します。
2. **Format Message（メッセージのフォーマット）**: 別の **Assign** アクティビティを追加します。
   - **To（宛先）**: `v_Message`
   - **Value（値）**: `"Result is: " + v_Number.` と入力します。ドット `.` を入力するとすぐに IntelliSense リストが表示されるので、`ToString()` を選択します。
     ```csharp
     "Result is: " + v_Number.ToString()
     ```
3. **Log Message（メッセージをログ）**: **Log Message** アクティビティを追加します。
   - **Message（メッセージ）**: `v_` と入力し、自動完成の候補から `v_Message` を選択します。

  ![C# Sequence Workflow Example](/static/img/csharp-example-assign-linq.png)