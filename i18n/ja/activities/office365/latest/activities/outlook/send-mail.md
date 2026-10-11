---
id: send-mail
title: "メールを送信"
sidebar_label: "メールを送信"
sidebar_position: 1
description: "メールを送信 アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# メールを送信

RCA.Activities.Office365.SendMail

## **説明**

Microsoft Office 365 Outlook を使用してメール メッセージを送信します。

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

* **アカウント (文字列)** - メールの送信に使用するメール アドレス / アカウント。空の場合は、Office365 アプリケーション スコープで認証されたユーザーのアカウントが使用されます。
  例: "user@example.com"

**メール**

* **本文 (文字列)** - メールの本文。
  例: "Hello, please find the attached report."
* **件名 (文字列)** - メールの件名。
  例: "Monthly Report"

**受信者**

* **宛先 (String[])** - 主な受信者のメール アドレスの配列。**宛先**、**Cc**、**Bcc** のいずれかに少なくとも 1 人の受信者を指定する必要があります。
  例: {"receiver@example.com"}
* **Cc (String[])** - CC 受信者のメール アドレスの配列。
  例: {"manager@example.com"}
* **Bcc (String[])** - BCC 受信者のメール アドレスの配列。
  例: {"audit@example.com"}

**添付ファイル**

* **添付ファイル (`List<String>`)** - 添付するファイル パスの一覧。
* **添付ファイル コレクション (`IEnumerable<String>`)** - 添付するファイル パスのコレクション。
  例: {"C:\Reports\MonthlyReport.xlsx"}

**オプション**

* **差出人 (文字列)** - 送信元のメール アドレス (共有メールボックスの代理で送信する場合に使用)。
  例: "shared@example.com"
* **返信先 (String[])** - 返信を受け取るメール アドレスの配列。
* **重要度 (ドロップダウンリスト)** - メールの重要度: Low、Normal、High。既定値: Normal。
* **本文が HTML (ブール値)** - 本文が HTML かどうかを指定します。既定値: False。
* **下書き (ブール値)** - True の場合、メールを送信せずに下書きとして保存します。既定値: False。

**その他**

* **公開 (チェックボックス)** - 選択すると、アクティビティのデータがログに記録されます。使用する前に、データ セキュリティ要件を考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。ワークフローを整理しやすくするために編集できます。
  例: Send Mail
