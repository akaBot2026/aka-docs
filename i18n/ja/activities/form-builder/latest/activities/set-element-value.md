---
id: set-element-value
title: "要素値の設定"
sidebar_label: "要素値の設定"
sidebar_position: 5
description: "Set Element Value アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# 要素値の設定

RCA.Activities.FormBuilder.SetElementValue

## **説明**

指定したキーの要素に値を設定します。

![set-element-value](/static/img/set-element-value.png)

(※ 必須の場合)

## **アクティビティ本文内**

* **Key Name** - 操作対象フィールドを指定する要素のキー名。テキストはクォートで囲んでください。
* **Value** - 上記キーで指定したフィールドに入力する値。サポートされる型: (String, Int32, Double, Decimal, Float, Boolean, JObject, JArray, object)

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール値は True または False のいずれかです。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を続行します。
  - False: 実行の継続を停止します。

**入力**

* **Form Id: `InArgument<Int32>`** - 操作対象のフォームの ID。

* **Key Name: `InArgument<String>`*** - 操作対象フィールドを指定する要素のキー名。テキストはクォートで囲んでください。

* **Value: `InArgument`** - 上記キーで指定したフィールドに入力する値。サポートされる型: (String, Int32, Double, Decimal, Float, Boolean, JObject, JArray, object)

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理のために名前を編集できます。
  例: [3424325] Open Window

