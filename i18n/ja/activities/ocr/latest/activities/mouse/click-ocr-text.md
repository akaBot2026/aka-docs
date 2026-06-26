---
id: click-ocr-text
title: "Click OCR Text"
sidebar_label: "Click OCR Text"
sidebar_position: 1
description: "Click OCR Text アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Click OCR Text

RCA.Activities.OCR.ClickText

## **説明**

OCR 技術を使用して、指定された UI 要素または画像内で指定された文字列を検索し、それをクリックします。

![click-ocr-text](/static/img/click-ocr-text.png)

> [!NOTE]
> **動作の仕組み:**  
> ネイティブな UI 要素をターゲットにする標準的なクリック アクティビティとは異なり、**Click OCR Text** はターゲット領域の画像をキャプチャすることによって動作します。このアクティビティは、ネストされた **OCR Engine**（デフォルトでは Tesseract OCR がネストされています）を「目」として機能させ、画像をスキャンして文字とピクセル座標を認識します。その後、アクティビティはこれらの座標を使用してマウスのクリックを実行します。必要に応じて、ツールボックスからデフォルトのエンジンを他の OCR エンジン（例: Google Cloud OCR、akaBot OCR）に置き換えることができます。

（\*は必須）

## **アクティビティ本体内**

* **Pick target element (ターゲット要素を選択)** - クリックして画面上のターゲット UI 要素またはウィンドウを指定し、検索を実行します。
* **Text (テキスト)** - 検索してクリックする文字列を入力します（ダブルクォーテーションで囲む必要があります）。（デザイナー本体内の **Text must be quoted** テキストボックスに対応します）。
* **Drop OCR Engine Here (ここに OCR エンジンをドロップ)** - ターゲットに対する文字認識を実行するために、OCR エンジン アクティビティ（*Tesseract OCR* など）をドラッグ アンド ドロップする必要があるコンテナー ブロック。

## **プロパティ**

**共通**

* **Continue On Error (ブール値)** - エラーが発生した場合でも、ワークフローの実行を継続するかどうかを指定します。ブール値（`True`、`False`）または変数のみがサポートされています。デフォルトは `False` です。
* **Delay After (Int32)** - アクティビティ実行後に待機する遅延時間（ミリ秒単位）。デフォルトは `200` ミリ秒です。
* **Delay Before (Int32)** - アクティビティが開始される前に待機する遅延時間（ミリ秒単位）。デフォルトは `300` ミリ秒です。

**入力**

* **Click Type (ドロップダウン リスト)** - クリック操作の種類（Click、DoubleClick、RightClick、RightDoubleClick）。デフォルトは Click です。
* **Occurrence (Int32)** - 指定したテキストが複数回出現する場合、何回目の出現を対象にするか（出現インデックス）を指定します。デフォルトは `1` です。
* **Target (ターゲット)*** - 検索対象となるターゲット コンテナー要素。
* **Text (文字列)*** - クリックする文字列。

**その他**

* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [683185546] Click OCR Text
* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。

**オプション**

* **CaseSensitive (ブール値)** - 大文字と小文字を区別して文字比較を行うかどうか。デフォルトは `True` です。
* **Cursor Position (CursorPosition)** - テキストブロックに対する相対的な位置オフセットとアンカーポイント。
* **Key Modifiers (Flags)** - キー修飾子（Alt、Ctrl、Shift、Win）を有効にします。デフォルトは None です。
