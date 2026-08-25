---
id: build-code-files-to-dll
title: "コードのビルド (C# から DLL) & メソッドの呼び出し"
sidebar_label: "コードを DLL にビルド"
sidebar_position: 13
description: "akaBot Studio で C# ソース ファイルを Custom_Code.dll にコンパイルし、Invoke Method を使用してメソッドを呼び出す方法。"
displayed_sidebar: studioSidebar
---
# コードのビルド (C# から DLL) & メソッドの呼び出し

akaBot Studio 機能: `Build C# Code Files To Dll` & `System.Activities.Statements.InvokeMethod`

## **説明**

**コードのビルド (Build Code)** 機能を使用すると、開発者は C# ソース コード ファイル (`.cs`) を akaBot プロジェクト内に直接含め、ローカル アセンブリ (`.local\Custom_Code.dll`) にコンパイルして、**Invoke Method** アクティビティまたはワークフロー式を使用してカスタム メソッドや型を呼び出すことができます。

![リボンの Build Code ボタン](/static/img/build-code-ribbon.png)

---

## **1. ステップごとのコンパイル プロセス**

1. **C# ソース ファイルの追加**:
   * プロジェクト ディレクトリ内に `.cs` ファイルを作成または貼り付けます (例: `JsonDownload.cs`)。
   * カスタムの public static / インスタンス メソッドやクラスを記述します。

![CS ファイルを含むプロジェクト エクスプローラー](/static/img/build-code-project-explorer.png)

2. **コードのビルド (Build Code) の実行**:
   * Studio のリボンで **Build Code** をクリックします。
   * Studio がすべての `.cs` ファイルを `.local\Custom_Code.dll` にコンパイルし、`.local\cache.json` を更新します。
3. **Studio の再起動**:
   * コンパイルされた `.cs` ファイルのリストが表示され、Studio の再起動を促すメッセージが表示されます。
   * **Restart Studio** をクリックしてプロジェクトを再読み込みし、型実行エンジンに新しくコンパイルされたアセンブリを読み込みます。

![コードのビルド成功と再起動プロンプト](/static/img/build-code-success-restart.png)

---

## **2. Invoke Method を使用したコンパイル済みメソッドの呼び出し**

Studio を再起動した後、**Invoke Method** アクティビティ (`System.Activities.Statements.InvokeMethod`) を使用して、コンパイルされた C# メソッドを呼び出すことができます。

![Invoke Method デザイナー](/static/img/build-code-invoke-method-designer.png)

### **プロパティの設定**:
* **TargetType**: **Static / Shared** メソッドを呼び出す場合、参照してコンパイル済みの C# クラス型を選択します (例: `MyCompany.Helpers.DataProcessor`)。
* **TargetObject**: **Instance** メソッドを呼び出す場合、インスタンス化されたオブジェクト変数を指定します。
* **MethodName**: 正確なメソッド名を入力します (例: `ProcessInvoice`, `ComputeHash`)。
* **Parameters**: C# メソッドのシグネチャに一致する必要な入力/出力引数を追加します。
* **Result**: 戻り値を受け取るワークフロー変数を割り当てます。

![Invoke Method プロパティ](/static/img/build-code-invoke-method-properties.png)