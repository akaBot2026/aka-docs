---
id: forward-mail
title: "メールを転送"
sidebar_label: "メールを転送"
sidebar_position: 5
description: "メールを転送 アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# メールを転送

RCA.Activities.Office365.ForwardMail

## **説明**

Microsoft Office 365 Outlook を使用して、既存のメール メッセージを 1 人以上の受信者に転送します。

![forward-mail-office.png](/static/img/forward-mail-office.png)

:::note
このアクティビティは、`Mail` サービスを選択した [Office 365 アプリケーション スコープ](../../office365-application-scope.md) の **Do** ブロック内に配置する必要があります。認証とアクセス許可の設定方法は [Office 365 への接続](../../azure-app-registration.md) を参照してください。
:::

（\*必須）

## **アクティビティ本体**

* なし (プロパティ パネルで設定します)。

## **プロパティ**

**共通**

* **エラー発生時に続行 (ブール値)** - True または False を指定します。
  **- True**: アクティビティ内でエラーが発生しても、プロセスの実行を続行します。
  **- False**: プロセスの実行を停止します。

**入力**

* **アカウント (文字列)** - メッセージの転送に使用するメール アカウント。
* **本文 (文字列)** - 転送時に追加する本文。
  例: "Please see the forwarded email below."
* **メッセージ (Office365Message)**\* - 転送する Office365Message オブジェクト。
* **新しい件名 (文字列)** - 転送メールの新しい件名。空の場合は元の件名 (先頭に FW: が付く) が使用されます。
  例: "FW: Monthly Report"

**受信者**

* **宛先 (String[])**\* - 主な受信者のメール アドレスの配列。
  例: `{"teammate@example.com"}`
* **CC (String[])** - CC 受信者のメール アドレスの配列。
* **BCC (String[])** - BCC 受信者のメール アドレスの配列。

**添付ファイル**

* **添付ファイル (`List<String>`)** - 転送メールに追加で添付するファイル パス。
* **添付ファイル コレクション (`IEnumerable<String>`)** - 添付するファイル パスのコレクション。
* **既存のものを置き換え (ブール値)** - True の場合、メールの既存の添付ファイルを新しい添付ファイルに置き換えます。既定値: False。

**オプション**

* **下書き (ブール値)** - True の場合、転送メールを送信せずに下書きとして保存します。既定値: False。

**その他**

* **公開 (チェックボックス)** - 選択すると、アクティビティのデータがログに記録されます。使用する前に、データ セキュリティ要件を考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。ワークフローを整理しやすくするために編集できます。
  例: Forward Mail
