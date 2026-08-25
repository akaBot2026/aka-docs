---
id: build-workflow-to-library
title: "ワークフローをライブラリ パッケージにビルド"
sidebar_label: "ワークフローをライブラリにビルド"
sidebar_position: 12
description: "akaBot Studio で現在のワークフローを再利用可能な NuGet ライブラリ (.nupkg) にコンパイルおよびパッケージ化する方法。"
displayed_sidebar: studioSidebar
---

# ワークフローをライブラリ パッケージにビルド

akaBot Studio 機能: `BuildWorkflowToLibrary`

## **説明**

**ワークフローをライブラリにビルド (Build Workflow to Library)** 機能を使用すると、開発者は作業中のワークフロー プロジェクトを再利用可能な NuGet パッケージ (`.nupkg`) にコンパイルおよびパッケージ化できます。これらのライブラリは、**akaBot Center** に公開したり、ローカル NuGet フィード経由で配布したりして、複数の自動化プロジェクト間で再利用できます。

![リボンの Build Library ボタン](/static/img/build-library-ribbon.png)

---

## **1. 前提条件と検証**

ライブラリ パッケージをビルドする前に:

1. **ワークフローの保存**: すべてのワークフロー ファイル (`.xaml`) が保存されていることを確認します。
2. **検証エラー 0 件**: 作業中のワークフローに検証エラーが 0 件である必要があります。必要な引数やアクティビティ プロパティが不足している場合は、続行する前に解決してください。

![検証エラーの警告](/static/img/build-library-validation-error.png)

---

## **2. ステップごとのビルド プロセス**

1. Studio のリボンで **Build Library** をクリックします。
2. **バージョン入力ダイアログ (Version Input Dialog)** で:
   - **Version**: セマンティック バージョンを設定します (例: `1.0.0.1` または `1.1.0.0`)。
   - **Release Notes**: 変更点、バグ修正、または機能拡張を記述します。
   - **OK** をクリックします。

![バージョン入力ダイアログ](/static/img/build-library-version-dialog.png)

3. Studio がすべてのワークフローをコンパイルし、プロジェクトの依存関係を解決して、`<ProjectName>.<Version>.nupkg` パッケージ ファイルを生成します。
4. 出力詳細 (パッケージ名、バージョン、ファイルの場所) と **Open Output Folder** ボタンを含む完了ダイアログが表示されます。

![ライブラリ ビルド成功ダイアログ](/static/img/build-library-success-dialog.png)

---

## **3. 他のプロジェクトでのライブラリの使用**

1. 対象のプロジェクトで、リボンから **Manage Packages** を開きます。
2. フィード (**akaBot Center** またはカスタム ローカル リポジトリ) を選択します。
3. ライブラリ パッケージ名を検索し、目的のバージョンを選択して、**Install** $\rightarrow$ **Save** をクリックします。
4. ライブラリのカスタム アクティビティが **アクティビティ ツールボックス (Activities Toolbox)** に表示され、ドラッグ アンド ドロップでワークフローを構築できるようになります。

![Manage Packages でのライブラリ使用](/static/img/build-library-manage-packages.png)