---
id: start-process
title: "Start Process"
sidebar_label: "Start Process"
sidebar_position: 5
description: "start-process activity documentation."
displayed_sidebar: activitiesSidebar
---
# プロセスの開始

RCA.Activities.Core.StartProcess

## **説明**

Start Process アクティビティは、ファイル名からアプリケーションを起動し、起動プロセスに追加の引数を渡すことができます。アクティビティは同期的に実行してプロセスの終了を待つことも、非同期的に実行してプロセス起動後ただちに完了することも可能です。

![start process](/static/img/start-process.png)

（* は必須）

## **アクティビティ本文内**

* **File Name** - 起動するアプリケーションのファイル名。
* **Arguments** - プロセス起動に使用する任意のパラメータ。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)**- エラーが発生した場合に自動化を継続するかを指定するプロパティです。値は True または False の2つのみです。  
  **- True** : アクティビティ内でエラーが発生しても、プロセスの残りの実行を続行します。  
  **- False (デフォルト)** : 実行の継続をブロックします。

**入力**

* **Arguments (String)** - プロセス起動に使用するパラメータのリストを表すオプションの文字列。
* **File Name (String)**\* - 起動するアプリケーションのファイル名。  
  例: C:\Windows\System32\notepad.exe

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。
* **Display Name (String)** - このアクティビティの名前。コードを整理・構造化するために名前を編集できます。  
  例: Start Process 

**オプション**

* **Start Type (StartProcessType)** - アプリケーションの終了を待つか、起動後すぐ終了するかを指定します。サポート値:  
  **- Synchronously** : 起動したプロセスの終了を待ちます。  
  **- Asynchronously** : 起動後ただちに完了します。  
  デフォルト: Synchronously.
* **Timeout (Int32)** - アクティビティの実行を待つ最大時間（ミリ秒）。タイムアウトが経過した場合、アクティビティは終了します。
* **Working Directory: `InArgument<String>`** - 起動アプリケーションの作業ディレクトリを設定します。

**出力**

* **Exit Code (Int32)** - 起動したプロセスが終了したときに返されるコード（同期開始時のみ）。