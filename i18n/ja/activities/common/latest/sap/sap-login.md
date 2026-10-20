---
id: sap-login
title: "SAP Login"
sidebar_label: "SAP Login"
sidebar_position: 2
description: "SAP Login アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# SAP Login

RCA.Activities.Common.SapLogin

## **説明**

SAP システムにログインするためにこのアクティビティを使用します。

![sap-login.png](/static/img/sap-login.png)

（*は必須）

**注意:** このアクティビティは、既に開かれている SAP セッションウィンドウにログインします。まず [SAP Logon](/i18n/ja/activities/common/latest/sap/sap-logon.md) アクティビティ（**SAP Logon Path** および SAP Logon Pad に保存された接続名と一致する **Connection Name** を設定）を使用して接続を開きます。ワークフロー内でその直後に **SAP Login** を配置してください。このアクティビティはアクティブな SAP GUI セッションに自動的に接続するため、入力ウィンドウ変数は必要ありません。また、SAP GUI Scripting が有効になっている必要があります。[SAP Logon](/i18n/ja/activities/common/latest/sap/sap-logon.md) ページの **前提条件** の注意を参照してください。

## **プロパティ**

**共通**

* **Continue On Error (ブール値)** - アクティビティでエラーが発生した場合でも、ワークフローの実行を継続するかどうかを指定します。ブール値（`True`、`False`）または変数のみがサポートされています。
  * **True** - エラーを無視し、後続のアクティビティの実行を継続します。
  * **False (デフォルト)** - アクティビティが失敗した場合、ワークフローの実行を停止し、エラーをスローします。
* **Timeout MS (Int32)** - エラーがスローされる前にログイン処理の完了を待機する最大時間（ミリ秒単位）。デフォルトは `5000`（5秒）です。

**入力**

* **Client (文字列)\*** - ログイン先の SAP クライアント番号（例: `"800"`）。
* **Language (文字列)\*** - SAP セッションインターフェイスの言語コード（例: 英語の場合は `"EN"`）。
* **Password (文字列)** - SAP システムにログインするためのパスワード。**Is Secure** が選択解除されている場合に必須です。
* **Secure Password (SecureString)** - ログインに使用するセキュアパスワード（SecureString 変数として格納）。**Is Secure** が選択されている場合に必須です。
* **Username (文字列)\*** - SAP システムにログインするためのユーザー名。

**その他**

* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [805164335] SAP Login
* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。

**オプション**

* **Is Secure (チェックボックス)** - 選択した場合、アクティビティは **Secure Password** プロパティを使用します。それ以外の場合は、標準の **Password** プロパティを使用します。デフォルトは選択されています。
* **Multiple Logon Option (ドロップダウン リスト)** - ユーザーがすでにシステムにログインしている場合のログイン処理方法を指定します。デフォルトは `Single` です。オプションは次のとおりです。
  * `Single` (デフォルト) - このログインを続行し、このユーザーの他のすべてのアクティブなログインを終了します。
  * `Multiple` - 他のアクティブなログインを終了せずに、このログインを続行します。
  * `Terminate` - このログイン試行を中止します。
