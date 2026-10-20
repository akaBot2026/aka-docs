---
id: build-code-files-to-dll
title: "コードのビルド (C# から DLL) & メソッドの呼び出し"
sidebar_label: "コードを DLL にビルド"
sidebar_position: 13
description: "akaBot Studio で C# ソース ファイルを Custom_Code.dll にコンパイルし、Invoke Method を使用してメソッドを呼び出す方法。"
displayed_sidebar: studioSidebar
---
# コードのビルド (C# から DLL) & メソッドの呼び出し

## **概要**

**コードのビルド (Build Code)** 機能を使用すると、C# ソース ファイル (`.cs`) を akaBot Studio プロジェクトに直接組み込み、ローカル アセンブリ (`.local\Custom_Code.dll`) にコンパイルして、**Invoke Method** アクティビティを使用してワークフロー内のカスタム メソッドを呼び出すことができます。

![リボンの Build Code ボタン](/static/img/build-code-ribbon.png)

---

## **1. C# ソース ファイルのコンパイル**

C# コードを使用可能なアセンブリにコンパイルするには、以下の手順に従ってください。

1. **プロジェクトに C# ソース ファイルを追加する**:
   - `.cs` ファイルをプロジェクト ディレクトリに作成またはコピーします (例: `JsonDownload.cs`)。
   - カスタム クラスと public メソッド (static またはインスタンス) を定義します。

   ![CS ファイルを含むプロジェクト エクスプローラー](/static/img/build-code-project-explorer.png)

2. **コードのビルドを実行する**:
   - Studio のリボンで **[Build Code]** をクリックします。
   - Studio がすべての `.cs` ファイルをコンパイルし、`.local\Custom_Code.dll` を生成して、`.local\cache.json` を更新します。

3. **Studio を再起動する**:
   - コンパイルされたファイルの一覧が表示され、再起動を促すプロンプトが表示されます。
   - **[Restart Studio]** をクリックして、新しいアセンブリを読み込んだ状態でプロジェクトを再読み込みします。

![コードのビルド成功と再起動プロンプト](/static/img/build-code-success-restart.png)

---

## **2. コンパイル済みメソッドの呼び出し**

Studio を再起動した後、**Invoke Method** アクティビティ (`System.Activities.Statements.InvokeMethod`) を使用して、コンパイルした C# メソッドを呼び出します。

![Invoke Method デザイナー](/static/img/build-code-invoke-method-designer.png)

以下のプロパティを設定します。

| プロパティ | 説明 |
|---|---|
| **TargetType** | **Static** メソッドの場合: コンパイル済みの C# クラスを参照して選択します (例: `MyCompany.Helpers.DataProcessor`)。 |
| **TargetObject** | **インスタンス** メソッドの場合: インスタンス化されたオブジェクト変数を指定します。 |
| **MethodName** | 呼び出すメソッドの正確な名前 (例: `ProcessInvoice`, `ComputeHash`)。 |
| **Parameters** | C# メソッドのシグネチャに対応する入力/出力引数。 |
| **Result** | メソッドの戻り値を受け取るワークフロー変数。 |

![Invoke Method プロパティ](/static/img/build-code-invoke-method-properties.png)