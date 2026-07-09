---
id: get-element-value
title: "要素値の取得"
sidebar_label: "要素値の取得"
sidebar_position: 4
description: "Get Element Value アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# 要素値の取得

RCA.Activities.FormBuilder.GetElementValue

## **説明**

指定したキーの要素の値を取得します。

![get-element-value](/static/img/get-element-value.png)

(※ 必須の場合)

## **アクティビティ本文内**

* **Key Name** - 操作対象フィールドを指定する要素のキー名。テキストはクォートで囲んでください。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール値は True または False のいずれかです。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を続行します。
  - False: 実行の継続を停止します。

**入力**

* **Form Id: `InArgument<Int32>`** - 操作対象のフォームの ID。

* **Key Name: `InArgument<String>`*** - 操作対象フィールドを指定する要素のキー名。テキストはクォートで囲んでください。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理のために名前を編集できます。
  例: [3424325] Open Window

**出力**

* **Output Data: `OutArgument<Object>`** - 指定したキーに対応する要素の値。

