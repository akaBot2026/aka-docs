---
id: sap-login
title: "SAP ログイン"
sidebar_label: "SAP ログイン"
sidebar_position: 4
description: "SAP ログイン アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# SAP ログイン

RCA.Activities.Common.SapLogin

## 説明

既に開いている SAP セッションウィンドウにサインインするためにこのアクティビティを使用します。まず [SAP ログオン](/i18n/ja/activities/sap/latest/activities/sap-logon.md) アクティビティを実行してそのウィンドウを開き、その直後（同じ **Do** シーケンス内）にこのアクティビティを配置してクライアント、ユーザー名、パスワード、言語を入力し、サインインを完了します。

![1714793840785-992.png](/static/img/1d2608_1714793840785-992.png)

（* は必須）

**注意:** このアクティビティを使用するには、Agent マシンと SAP サーバーの両方で SAP GUI Scripting が有効になっている必要があります。[SAP ログオン](/i18n/ja/activities/sap/latest/activities/sap-logon.md) ページの **前提条件** セクションを参照してください。

## アクティビティの本文

* **Client\*** - ログイン先の SAP クライアント番号。引用符で囲まれた文字列または文字列変数である必要があります。  
  例: `"800"`
* **Username\*** - SAP にログインするためのユーザー名。引用符で囲まれた文字列または文字列変数である必要があります。
* **Password** - SAP にログインするためのパスワード。**Is Secure**（**オプション**内）のチェックが外れている場合のみ使用されます。引用符で囲まれた文字列または文字列変数である必要があります。
* **Secure Password** - SecureString としての SAP ログインパスワード。**Is Secure**（**オプション**内）がチェックされている場合（デフォルト）のみ使用されます。
* **Language\*** - SAP が画面、メニュー、フィールドを表示するために使用する言語コード。引用符で囲まれた文字列または文字列変数である必要があります。  
  例: 英語の場合は `"EN"`。
* **Multiple Logon Option** - 同じユーザーで同時に既にアクティブなログオンが存在する場合の処理方法を選択します:
  * **Single (デフォルト)** - このログオンを続行し、他のログオンを終了します。
  * **Multiple** - 他のログオンを終了せずに、このログオンを続行します。
  * **Terminate** - このログオン試行を中止します。

## プロパティ

**共通**

* **ContinueOnError (Boolean)** - このアクティビティが失敗した場合にワークフローの実行を継続するかどうか。
  * **False (デフォルト)** - ワークフローを停止し、エラーをスローします。
  * **True** - エラーを無視して次のアクティビティに進みます。

  **注:** このアクティビティが **Try Catch** 内に配置され、**ContinueOnError** が `True` の場合、エラーがスローされないため **Catch** ブロックは実行されません。
* **Timeout MS (Int32)** - エラーをスローする前にログインが成功するまで待機する時間（ミリ秒単位）。デフォルトは `5000` です。

**入力**

* **Client (String)\*** - 上記の **Client** と同様。
* **Language (String)\*** - 上記の **Language** と同様。
* **Password (String)** - 上記の **Password** と同様。
* **Secure Password (SecureString)** - 上記の **Secure Password** と同様。
* **Username (String)\*** - 上記の **Username** と同様。

**その他**

* **Public (チェックボックス)** - 選択すると、このアクティビティの変数値が Verbose レベルで実行ログに書き込まれます。有効にする前にデータセキュリティを考慮してください。
* **DisplayName (String)** - ワークフローデザイナーでこのアクティビティに表示される名前。ワークフローを整理するために名前を変更できます。

**オプション**

* **IsSecure (チェックボックス)** - 選択されている場合（デフォルト）、アクティビティは **Secure Password** を使用してログインします。チェックを外すと、プレーンテキストの **Password** フィールドが使用されます。
* **Multiple Logon Option** - 上記の **Multiple Logon Option** と同様。デフォルトは **Single** です。
