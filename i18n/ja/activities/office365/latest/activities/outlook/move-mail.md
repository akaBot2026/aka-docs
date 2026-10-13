---
id: move-mail
title: "メールを移動"
sidebar_label: "メールを移動"
sidebar_position: 3
description: "メールを移動 アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# メールを移動

RCA.Activities.Office365.MoveMail

## **説明**

Microsoft Office 365 Outlook でメール メッセージを指定したフォルダーに移動します。

![move-mail-office.png](/static/img/move-mail-office.png)

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

* **アカウント (文字列)** - メッセージがあるメール アカウント。空の場合は、認証されたユーザーのアカウントが使用されます。
* **移動先フォルダー (文字列)**\* - メッセージの移動先フォルダーの名前。
  例: "Archive"
* **メッセージ (Office365Message)**\* - 移動する Office365Message オブジェクト (例: メールを取得 アクティビティで取得したもの)。

**その他**

* **公開 (チェックボックス)** - 選択すると、アクティビティのデータがログに記録されます。使用する前に、データ セキュリティ要件を考慮してください。
* **表示名 (文字列)** - このアクティビティの名前。ワークフローを整理しやすくするために編集できます。
  例: Move Mail
