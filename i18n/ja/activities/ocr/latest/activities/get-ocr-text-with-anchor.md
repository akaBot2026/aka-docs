---
id: get-ocr-text-with-anchor
title: "Get OCR Text With Anchor"
sidebar_label: "Get OCR Text With Anchor"
sidebar_position: 3
description: "Get OCR Text With Anchor アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Get OCR Text With Anchor

RCA.Activities.OCR.GetTextAnchor

## **説明**

OCR 画面スクレイピング手法を使用して、指定された UI 要素または画像から、アンカー文字列に対する相対的な位置にある文字列とその情報を抽出します。

![get-ocr-text-with-anchor](/static/img/get-ocr-text-with-anchor.png)

> [!NOTE]
> **動作の仕組み:**  
> ネイティブな UI 要素をターゲットにする標準的な Get Text アクティビティとは異なり、**Get OCR Text With Anchor** はターゲット領域の画像をキャプチャすることによって動作します。このアクティビティは、ネストされた **OCR Engine**（デフォルトでは Tesseract OCR がネストされています）を「目」として機能させ、画像をスキャンして文字とアンカーに対する相対的なピクセル座標を認識します。その後、アクティビティはこれらの座標を使用してテキストを抽出します。必要に応じて、ツールボックスからデフォルトのエンジンを他の OCR エンジン（例: Google Cloud OCR、akaBot OCR）に置き換えることができます。

（\*は必須）

## **アクティビティ本体内**

* **Pick target element (ターゲット要素を選択)** - クリックして画面上のターゲット UI 要素またはウィンドウを指定し、検索を実行します。
* **Drop OCR Engine Here (ここに OCR エンジンをドロップ)** - ターゲットに対する文字認識を実行するために、OCR エンジン アクティビティ（*Tesseract OCR* など）をドラッグ アンド ドロップする必要があるコンテナー ブロック。

## **プロパティ**

**共通**

* **Continue On Error (ブール値)** - アクティビティでエラーが発生した場合でも、ワークフローの実行を継続するかどうかを指定します。ブール値（`True`、`False`）または変数のみがサポートされています。デフォルトは `False` です。

**入力**

* **Target (ターゲット)*** - ターゲットのコンテナー要素。
  * **Clipping Region (リージョン)** - 画面上のターゲットのクリッピング領域。
  * **Element (UIElement)** - 他のアクティビティから返された UIElement 変数を使用します。
  * **Selector (文字列)** - 特定の UI 要素を検索するために使用するセレクター文字列。
  * **Timeout MS (Int32)** - エラーがスローされる前にアクティビティの実行を待機する最大時間（ミリ秒単位）。デフォルトは `30000` です。

**その他**

* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [511248435] Get OCR Text With Anchor
* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。

**オプション**

* **Grab Region (リージョン)** - テキストをグラブ（抽出）する画面上の領域。ターゲットまたはアンカーからの相対位置で定義されます。

**出力**

* **Text (文字列)** - アンカーに対して相対的な位置から抽出された文字列。
* **Words Info (TextInfo)** - 指定された UI 要素内で検出された各単語の画面座標。
