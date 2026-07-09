---
id: read-statusbar
title: "Read Statusbar"
sidebar_label: "Read Statusbar"
sidebar_position: 6
description: "Read Statusbar アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Read Statusbar

RCA.Activities.Common.ReadStatusbar

## **説明**

SAP GUI ウィンドウの下部に表示されるステータスバーのメッセージを読み取ります。

![read-statusbar.png](/static/img/read-statusbar.png)

（\*は必須）

## **アクティビティ本体内**

* **Indicate on screen (画面上で指定)** - ワークフローの実行中に、画面上の UI 要素または領域を選択できます。

## **プロパティ**

**共通**

* **Continue On Error (ブール値)** - アクティビティでエラーが発生した場合でも、ワークフローの実行を継続するかどうかを指定します。ブール値（`True`、`False`）または変数のみがサポートされています。
  * **True** - エラーを無視し、後続のアクティビティの実行を継続します。
  * **False (デフォルト)** - アクティビティが失敗した場合、ワークフローの実行を停止し、エラーをスローします。

**ターゲット**

* **CvElement (CvElement)** - ターゲットとする Computer Vision 要素。CvElement 型の変数をサポートします。
* **CvType (CvType)** - Computer Vision 要素の種類。
* **Element (UiElement)** - セレクターを使用する代わりに、ターゲットとして使用する既存 UI 要素変数。
* **FuzzySelector (文字列)** - あいまい一致（Fuzzy Matching）ロジックを使用してターゲット要素を特定するための代替セレクター。
* **SearchSteps (SearchSteps)** - ターゲット要素を検索する戦略を指定します。
* **Selector (文字列)*** - ターゲットとなる SAP ステータスバー UI 要素を特定するための XML セレクター フラグメント。画面上でステータスバーを選択すると、自動的に生成されます。
* **Timeout MS (Int32)** - ステータスバー要素が表示されるのを待機する最大時間（ミリ秒単位）。この時間を超えるとエラーがスローされます。デフォルトは `30000`（30秒）です。
* **Wait For Ready (WaitType)** - アクションを実行する前に、ターゲット要素が操作可能になるまで待機するかどうかを指定します。オプションには、`None`、`Interactive`、または `Complete` があります。

**その他**

* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [462266326] Read Statusbar
* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。

**出力**

* **Message Data (文字列の配列)** - ステータス メッセージから抽出された特定のデータ パラメーター（引数）を文字列の配列として格納します。
* **Message Id (文字列)** - ステータス メッセージの技術的な ID を格納します。
* **Message Number (文字列)** - ステータス メッセージに関連付けられた番号コードを格納します。
* **Message Text (文字列)** - ステータス メッセージの実際のテキスト内容を格納します（例: `"伝票 100000012 が転記されました"`）。
* **Message Type (文字列)** - ステータス メッセージの種類を格納します（例: 成功時は `S`、エラー時は `E`、警告時は `W`、情報時は `I`）。
