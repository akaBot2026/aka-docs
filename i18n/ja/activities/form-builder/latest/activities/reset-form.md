---
id: reset-form
title: "フォームのリセット"
sidebar_label: "フォームのリセット"
sidebar_position: 3
description: "Reset Form アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# フォームのリセット

RCA.Activities.FormBuilder.ResetForm

## **説明**

フォーム内のすべてのデータをクリアします。

![resert-form](/static/img/resert-form.png)

(※ 必須の場合)

## **アクティビティ本文内**

* **Form Id** - 値をリセットしたいフォームの ID。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール値は True または False のいずれかです。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を続行します。
  - False: 実行の継続を停止します。

**入力**

* **Form Id: `InArgument<Int32>`** - 操作対象のフォームの ID。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理のために名前を編集できます。
  例: [3424325] Open Window

