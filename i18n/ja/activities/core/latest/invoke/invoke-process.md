---
id: invoke-process
title: Invoke Process
sidebar_label: "Invoke Process"
sidebar_position: 6
description: "invoke-process activity documentation."
displayed_sidebar: activitiesSidebar
---
# プロセスの呼び出し

RCA.Activities.Core.InvokeProcess

## **説明**

このアクティビティでは、プロセスのディレクトリまたはプロセス名を使用してプロセスを呼び出すことができます。

![invoke-process](/static/img/invoke-process.png)

（* は必須）

## **アクティビティ本文内**

* **Process Directory** - 呼び出すプロセスのディレクトリ。
* **Process Name** - 呼び出す公開済みまたはダウンロード済みプロセスの名前。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)**- エラーが発生した場合に自動化を継続するかを指定するプロパティです。値は True または False の2つのみです。  
  **True** - アクティビティ内でエラーが発生しても、プロセスの残りの実行を続行します。  
  **False (デフォルト)** - 実行の継続をブロックします。
* **Timeout (TimeSpan)** - 呼び出したプロセスが終了するのを待つ最大時間（例: 00:05:00）。 

**入力**

* **Process Directory (String)** - ローカルディレクトリによってプロセスを呼び出したい場合に使用するプロセスのディレクトリ。
* **Process Name (String)** - 名前で公開済みまたはダウンロード済みプロセスを呼び出したい場合に使用するプロセス名。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。
* **Display Name (String)** - このアクティビティの名前。コードを整理・構造化するために名前を編集できます。  
  例: Invoke Process

### **オプション**

* **Arguments (Dictionary\<String, Argument\>)** - 呼び出し先プロセスに渡される、または呼び出し先から返される引数のディクショナリ。In と In/Out 引数は呼び出し先に送られます。Out と In/Out 引数は呼び出し先からの返却値を受け取ることができます。
* **Throws On Process Exception (Boolean)** - 呼び出し先プロセス内で例外が発生した場合に、アクティビティが例外をスローするかを指定します。デフォルト: True。

### **出力**

* **Exception Message (String)** - プロセス実行時の例外メッセージ。
* **Exit Code (Int32)** - プロセス実行から返される整数コード。