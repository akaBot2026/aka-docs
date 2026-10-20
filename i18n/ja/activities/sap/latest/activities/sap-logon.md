---
id: sap-logon
title: "SAP ログオン"
sidebar_label: "SAP ログオン"
sidebar_position: 5
description: "SAP ログオン アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# SAP ログオン

RCA.Activities.Common.SapLogon

## 説明

このアクティビティを使用して、SAP Logon ウィンドウを開き、SAP Logon Pad にあらかじめ保存されている接続名を使用して SAP システムに接続します。通常、これは SAP 自動化における**最初**のアクティビティになります。実行後、[SAP ログイン](/i18n/ja/activities/sap/latest/activities/sap-login.md) を使用してクライアント、ユーザー名、パスワード、言語を入力し、サインインを完了します。

![1714791370040-272.png](/static/img/5443fe_1714791370040-272.png)

（* は必須）

## 前提条件

このアクティビティが接続する前に、Agent マシンと SAP サーバーの両方で SAP GUI Scripting が有効になっている必要があります。有効になっていない場合、アクティビティは接続またはスクリプトエラーで失敗します。

1. **クライアント側:** **SAP Logon** > **オプション** > **アクセシビリティ & スクリプト** > **スクリプト** を開き、**スクリプトが SAP GUI にアタッチするときに通知する** のチェックボックスを外します（スクリプト機能自体が無効化されていないことを確認してください）。
2. **サーバー側:** SAP Basis 管理者に依頼し、トランザクション `RZ11` を使用してプロファイルパラメータ `sapgui/user_scripting = TRUE` を設定してもらいます。

## アクティビティの本文

* **SAP Logon Path\*** - ローカルの `saplogon.exe` プログラムへのフルファイルパス。引用符で囲まれた文字列または文字列変数である必要があります。  
  例: `"C:\Program Files (x86)\SAP\FrontEnd\SAPgui\saplogon.exe"`
* **Connection name\*** - SAP Logon Pad に表示されている正確な接続名（SAP Logon を開いたときに表示される保存済み接続のリスト）。引用符で囲まれた文字列または文字列変数である必要があります。

## プロパティ

**共通**

* **ContinueOnError (Boolean)** - このアクティビティが失敗した場合にワークフローの実行を継続するかどうか。
  * **False (デフォルト)** - ワークフローを停止し、エラーをスローします。
  * **True** - エラーを無視して次のアクティビティに進みます。

  **注:** このアクティビティが **Try Catch** 内に配置され、**ContinueOnError** が `True` の場合、エラーがスローされないため **Catch** ブロックは実行されません。

**入力**

* **Connection Name (String)\*** - 上記の **Connection name** と同様: SAP Logon Pad の正確な接続名。
* **NumberOfRetries (Int32)** - 最初の試行が失敗した場合にアクティビティが接続を再試行する回数。デフォルトは `5` です。
* **RetryInterval (Int32)** - 各再試行の間隔待機時間（ミリ秒単位）。デフォルトは `500` です。
* **SAP Logon Path (String)\*** - 上記の **SAP Logon Path** と同様: `saplogon.exe` へのパス。

**その他**

* **Public (チェックボックス)** - 選択すると、このアクティビティの変数値が Verbose レベルで実行ログに書き込まれます。有効にする前にデータセキュリティを考慮してください。
* **DisplayName (String)** - ワークフローデザイナーでこのアクティビティに表示される名前。ワークフローを整理するために名前を変更できます。

**出力**

* **SAP Login Window (Window)** - このアクティビティによって新しく開かれた SAP アプリケーションウィンドウが格納される `Window` 変数。ウィンドウ操作（**Attach Window** やウィンドウ管理など）が必要な場合に使用できます。[SAP ログイン](/i18n/ja/activities/sap/latest/activities/sap-login.md) はアクティブな SAP セッションに直接接続するため、この変数を渡す必要はありません。
