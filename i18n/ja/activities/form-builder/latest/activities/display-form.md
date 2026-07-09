---
id: display-form
title: "フォームの表示"
sidebar_label: "フォームの表示"
sidebar_position: 1
description: "Display Form アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# フォームの表示

RCA.Activities.FormBuilder.DisplayForm

## **説明**

このアクティビティはフォームの設計と操作を可能にします。

![display-form](/static/img/display-form.png)

(※ 必須の場合)

## **アクティビティ本文内**

* **Do** - フォームが表示されている間に実行するアクティビティ。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール値は True または False のいずれかです。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を続行します。
  - False: 実行の継続を停止します。

* **Execute Do Block First: Boolean** - フォームが準備できた後に Do ブロックを1回実行します。

* **TimeoutMS: `InArgument<Int32>`** - フォームが自動的に閉じるまでの時間（ミリ秒）。未入力または 0 以下の場合、ユーザーが手動で閉じるまでフォームは閉じません。
  例: 30000

**フォーム形式**

* **Form Title: `InArgument<String>`** - フォームのタイトル。未入力の場合、フォームのモードに応じて既定値は "Form Builder" または "Form Runner" になります。

* **Form Width: `InArgument<Int32>`** - フォームの幅。未入力の場合、既定値は 540 ピクセルになります。

* **Form Height: `InArgument<Int32>`** - フォームの高さ。未入力の場合、フォームの内容に合わせて自動調整されます。

* **Form Position X: `InArgument<Int32>`** - フォームの x 座標（左上からの距離）。既定値では画面に対して中央配置されます。

* **Form Position Y: `InArgument<Int32>`** - フォームの y 座標（上からの距離）。既定値では画面に対して中央配置されます。

* **Is Minimize On Start: `InArgument<Boolean>`** - フォーム開始時に最小化するかどうか。未入力の場合は false が既定値です。

* **Form Icon Path: `InArgument<String>`** - フォームウィンドウのアイコン。未入力時は既定のアイコンが使用されます。

* **Always On Top: Boolean** - 常に最前面に表示します。

* **Form Zoom Level: `InArgument<Int32>`** - フォームのズームレベル（%）。未入力の場合は 100% が既定です。

**入力**

* **Json Schema File Name: `InArgument<String>`*** - フォームの JSON スキーマファイル名。フォームを格納するファイルで、このプロパティは必須です。

* **Form Arguments: `Dictionary<String,Argument>`** - (String, Int32, Double, Decimal, Float, Boolean, JObject, JArray) 型の変数コレクションです。ワークフロー変数をフォームフィールドにバインドできます（変数名がフォームフィールドのキー名に対応します）。

* **Form Fields Input Data: `InArgument<String>`** - フォームに入力する JSON 文字列。`Form Arguments` と両方が入力され、同じキーが存在する場合はこのプロパティの値が優先されます。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理のために名前を編集できます。
  例: [3424325] Open Window

**出力**

* **Form Id: `OutArgument<Int32>`** - フォームの ID（ウィンドウのプロセス ID）。

* **Is Dismissed: `OutArgument<Boolean>`** - ユーザーがフォームを送信せずに閉じた場合は true、そうでなければ false。

* **Selected Key: `OutArgument<String>`** - Do を発動させた直近にクリックされたコンポーネントのキー。

* **Output Data: `OutArgument<Object>`** - フォームのフィールドに入力されたデータを JSON として出力します。

