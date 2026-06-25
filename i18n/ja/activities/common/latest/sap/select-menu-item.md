---
id: select-menu-item
title: "Select Menu Item"
sidebar_label: "Select Menu Item"
sidebar_position: 4
description: "Select Menu Item アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Select Menu Item

RCA.Activities.Common.SelectMenuItem

## **説明**

メイン SAP GUI ウィンドウからメニュー項目を選択します。画面上でウィンドウを指定すると、利用可能なすべてのメニュー項目を含むリストがアクティビティ内に表示されます。

![image-select-menu-item.png](/static/img/select_menu_item.png)

（\*は必須）

## **アクティビティ本体内**

* **Indicate on screen (画面上で指定)** - ワークフローの実行中に、画面上の UI 要素または領域を選択できます。

## **プロパティ**

**共通**

* **Continue On Error (ブール値)** - アクティビティでエラーが発生した場合でも、ワークフローの実行を継続するかどうかを指定します。ブール値（`True`、`False`）または変数のみがサポートされています。
  * **True** - エラーを無視し、後続のアクティビティの実行を継続します。
  * **False (デフォルト)** - アクティビティが失敗した場合、ワークフローの実行を停止し、エラーをスローします。
* **Delay After (Int32)** - このアクティビティの実行後に待機する遅延時間（ミリ秒単位）。デフォルトは `300` ミリ秒です。
* **Delay Before (Int32)** - このアクティビティが操作を開始する前に待機する遅延時間（ミリ秒単位）。デフォルトは `200` ミリ秒です。

**入力**

* **Menu (文字列)*** - 選択する SAP GUI メイン ウィンドウ内のメニュー項目（例: `"System > User Profile > Own Data"`）。SAP ウィンドウを指定した後、アクティビティ内のドロップダウン メニューからメニュー項目を選択できます。

**ターゲット**

* **CvElement (CvElement)** - ターゲットとする Computer Vision 要素。CvElement 型の変数をサポートします。
* **CvType (CvType)** - Computer Vision 要素の種類。
* **Element (UiElement)** - セレクターを使用する代わりに、ターゲットとして使用する既存 UI 要素変数。
* **FuzzySelector (文字列)** - あいまい一致（Fuzzy Matching）ロジックを使用してターゲット要素を特定するための代替セレクター。
* **SearchSteps (SearchSteps)** - ターゲット要素を検索する戦略を指定します。
* **Selector (文字列)*** - ターゲットとなる SAP ウィンドウを特定するための XML セレクター フラグメント。画面上でウィンドウを選択すると、自動的に生成されます。
* **Timeout MS (Int32)** - ターゲット要素が表示されるのを待機する最大時間（ミリ秒単位）。この時間を超えるとエラーがスローされます。デフォルトは `30000`（30秒）です。
* **Wait For Ready (WaitType)** - アクションを実行する前に、ターゲット要素が操作可能になるまで待機するかどうかを指定します。オプションには、`None`、`Interactive`、または `Complete` があります。

**その他**

* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [219011519] Select Menu Item
* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。

**オプション**

* **Alter If Disabled (ブール値)** - 選択した場合、ターゲットのメニュー項目が無効（Disabled）であっても、強制的に選択処理を実行します。
