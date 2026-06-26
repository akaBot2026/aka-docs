---
id: find-ocr-text-position
title: "Find OCR Text Position"
sidebar_label: "Find OCR Text Position"
sidebar_position: 4
description: "Find OCR Text Position アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Find OCR Text Position

RCA.Activities.OCR.FindTextPosition

## **説明**

UI 要素または画像内で指定された文字列を検索し、その文字列の画面位置にクリッピング領域を設定した別の UI 要素を返します。

![find-ocr-text-position](/static/img/find-ocr-text-position.png)

> [!NOTE]
> **動作の仕組み:**  
> ネイティブな UI 要素をターゲットにする標準的な Find Element アクティビティとは異なり、**Find OCR Text Position** はターゲット領域の画像をキャプチャすることによって動作します。このアクティビティは、ネストされた **OCR Engine**（デフォルトでは Tesseract OCR がネストされています）を「目」として機能させ、画像をスキャンして文字とピクセル座標を認識します。その後、アクティビティは指定されたテキストが認識されたテキストと一致するかどうかを確認し、位置座標を含む UIElement を出力します。必要に応じて、ツールボックスからデフォルトのエンジンを他の OCR エンジン（例: Google Cloud OCR、akaBot OCR）に置き換えることができます。

（\*は必須）

## **アクティビティ本体内**

* **Pick target element (ターゲット要素を選択)** - クリックして画面上のターゲット UI 要素またはウィンドウを指定し、検索を実行します。
* **Drop OCR Engine Here (ここに OCR エンジンをドロップ)** - ターゲットに対する文字認識を実行するために、OCR エンジン アクティビティ（*Tesseract OCR* など）をドラッグ アンド ドロップする必要があるコンテナー ブロック。

## **プロパティ**

**共通**

* **Continue On Error (ブール値)** - エラーが発生した場合でも、ワークフローの実行を継続するかどうかを指定します。ブール値（`True`、`False`）または変数のみがサポートされています。デフォルトは `False` です。

**入力**

* **Occurrence (Int32)** - 指定したテキストが複数回出現する場合、何回目の出現を対象にするか（出現インデックス）を指定します。デフォルトは `1` です。
* **Target (ターゲット)*** - 検索対象となるターゲット コンテナー要素。
  * **Clipping Region (リージョン)** - 画面上のターゲットのクリッピング領域。
  * **Element (UIElement)** - 他のアクティビティから返された UIElement 変数を使用します。
  * **Selector (文字列)** - 特定の UI 要素を検索するために使用するセレクター文字列。
  * **Text (文字列)*** - 検索するテキスト文字列。
  * **Timeout MS (Int32)** - エラーがスローされる前にアクティビティの実行を待機する最大時間（ミリ秒単位）。デフォルトは `30000` です。

**その他**

* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [796143226] Find OCR Text Position
* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする trước にデータ セキュリティ要件を考慮してください。

**オプション**

* **CaseSensitive (ブール値)** - 大文字と小文字を区別して文字比較を行うかどうか。デフォルトは `True` です。

**出力**

* **Element (UIElement)** - 指定した文字列が見つかった位置の UI 要素。
