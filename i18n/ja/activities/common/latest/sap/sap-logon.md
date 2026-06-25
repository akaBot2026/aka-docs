---
id: sap-logon
title: "SAP Logon"
sidebar_label: "SAP Logon"
sidebar_position: 1
description: "SAP Logon アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# SAP Logon

RCA.Activities.Common.SapLogon

## **説明**

SAP Logon ウィンドウの接続名を使用して、SAP システムにネイティブにログオンします。

![sap-logon.png](/static/img/sap-logon.png)

（\*は必須）

## **プロパティ**

**共通**

* **Continue On Error (ブール値)** - アクティビティでエラーが発生した場合でも、ワークフローの実行を継続するかどうかを指定します。ブール値（`True`、`False`）または変数のみがサポートされています。
  * **True** - エラーを無視し、後続のアクティビティの実行を継続します。
  * **False (デフォルト)** - アクティビティが失敗した場合、ワークフローの実行を停止し、エラーをスローします。

**入力**

* **Connection Name (文字列)*** - SAP システムへのログオンに使用する SAP Logon パッドの特定の接続名。
* **Number of retries (Int32)** - SAP Scripting インターフェイスへの接続試行の最大回数。デフォルトは `5` です。
* **Retry Interval MS (Int32)** - 各接続試行の間の待機時間（ミリ秒単位）。デフォルトは `500` です。
* **SAP Logon Path (文字列)*** - `saplogon.exe` プログラムへのファイルパス。これは必須フィールドです（空白のままにするとエラーが発生します）。デフォルトのインストールパスは通常、`C:\Program Files (x86)\SAP\FrontEnd\SAPgui\saplogon.exe` または `C:\Program Files\SAP\FrontEnd\SAPgui\saplogon.exe` です。

**その他**

* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [066936106] SAP Logon
* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。

**出力**

* **SAP Login Window (WindowApp)** - 新しく開かれた SAP ログインウィンドウを格納する WindowApp 変数。この変数は、後続の SAP アクティビティで再利用できます。
