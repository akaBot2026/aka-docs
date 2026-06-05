---
id: delete-computer
title: "Delete Computer"
sidebar_label: "Delete Computer"
sidebar_position: 13
description: "Delete Computer activity documentation."
displayed_sidebar: activitiesSidebar
---

# コンピューターの削除

RCA.Activities.ActiveDirectory.DeleteSingleComputer

## **説明**

Active Directory からコンピューターを削除します。

![delete-computer-active](/static/img/delete-computer-active.png)

（*必須）

## **アクティビティ本文内の項目**

- **SAM Account Name** - 削除するコンピューターの SAM アカウント名。
- **Filters** - コンピューターを検索するための追加フィルターを設定するにはクリックします。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール変数は True または False の 2 つの値を取ります。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続します。
  - False: プロセスの実行を継続しません。

**入力 - コンピューター情報**


* **SAM Account Name: `InArgument<String>`** - 削除するコンピューターの SAM アカウント名。

**入力 - 既存プリンシパル**


* **Existing Computer: `InArgument<ComputerPrincipal>`** - 既存の ComputerPrincipal オブジェクト。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックします。公開する前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの名前。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Delete Computer

**オプション**

* **Filters: `Dictionary<String,Argument>`** - コンピューターを検索するための追加フィルター。

**出力**

* **Delete Success: `OutArgument<Boolean>`** - コンピューターが正常に削除された場合は True、そうでない場合は False。

