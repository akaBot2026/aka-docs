---
id: close-form
title: "フォームを閉じる"
sidebar_label: "フォームを閉じる"
sidebar_position: 2
description: "Close Form アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# フォームを閉じる

RCA.Activities.FormBuilder.CloseForm

## **説明**

ID に基づいてフォームを閉じます。

![close-form](/static/img/close-form.png)

(※ 必須の場合)

## **アクティビティ本文内**

* **Form Id** - 閉じたいフォームの ID。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール値は True または False のいずれかです。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を続行します。
  - False: 実行の継続を停止します。

**入力**

* **Form Id: `InArgument<Int32>`** - 閉じたいフォームの ID。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理のために名前を編集できます。
  例: [3424325] Open Window

