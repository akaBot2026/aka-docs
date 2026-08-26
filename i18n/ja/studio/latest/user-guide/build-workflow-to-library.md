---
id: build-workflow-to-library
title: "ワークフローをライブラリ パッケージにビルド"
sidebar_label: "ワークフローをライブラリにビルド"
sidebar_position: 12
description: "akaBot Studio で現在のワークフローを再利用可能な NuGet ライブラリ (.nupkg) にコンパイルおよびパッケージ化する方法。"
displayed_sidebar: studioSidebar
---
# ワークフローをライブラリ パッケージにビルド

## **概要**

**ワークフローをライブラリにビルド (Build Workflow to Library)** 機能は、現在のワークフロー プロジェクトを再利用可能な NuGet パッケージ (`.nupkg`) にコンパイルおよびパッケージ化します。生成されたライブラリは **akaBot Center** に公開したり、ローカル NuGet フィード経由で配布したりして、複数の自動化プロジェクト間で活用できます。

![リボンの Build Library ボタン](/static/img/build-library-ribbon.png)

---

## **1. 前提条件**

ライブラリ パッケージをビルドする前に、以下の条件を満たしていることを確認してください。

1. **すべてのワークフローを保存する**: プロジェクト内のすべてのワークフロー ファイル (`.xaml`) が保存されていること。
2. **検証エラーをすべて解決する**: プロジェクトに検証エラーがないこと。不足している引数やアクティビティ プロパティの設定ミスがある場合は、続行する前に解決してください。

![検証エラーの警告](/static/img/build-library-validation-error.png)

---

## **2. ライブラリ パッケージのビルド**

1. Studio のリボンで **[Build Library]** をクリックします。
2. **[バージョン入力 (Version Input)]** ダイアログで:
   - **Version**: セマンティック バージョン番号を入力します (例: `1.0.0.1` または `1.1.0.0`)。
   - **Release Notes**: このバージョンに含まれる変更点、修正、または機能拡張を記述します。
   - **[OK]** をクリックして続行します。

   ![バージョン入力ダイアログ](/static/img/build-library-version-dialog.png)

3. Studio がすべてのワークフローをコンパイルし、プロジェクトの依存関係を解決して、出力パッケージ `<ProjectName>.<Version>.nupkg` を生成します。
4. ビルド完了ダイアログが表示され、パッケージ名、バージョン、出力ファイルの場所が確認できます。**[Open Output Folder]** をクリックして生成されたファイルにアクセスします。

![ライブラリ ビルド成功ダイアログ](/static/img/build-library-success-dialog.png)

---

## **3. 他のプロジェクトでのライブラリの使用**

1. 対象のプロジェクトで、Studio のリボンから **[Manage Packages]** を開きます。
2. 適切なフィード (**akaBot Center** またはカスタム ローカル リポジトリ) を選択します。
3. ライブラリ パッケージ名で検索し、目的のバージョンを選択して、**[Install]** → **[Save]** をクリックします。
4. ライブラリのカスタム アクティビティが **[アクティビティ ツールボックス (Activities Toolbox)]** に表示され、ワークフローで使用できるようになります。

![Manage Packages でのライブラリ使用](/static/img/build-library-manage-packages.png)