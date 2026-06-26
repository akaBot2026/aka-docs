---
id: akabot-ocr
title: "akaBot OCR"
sidebar_label: "akaBot OCR"
sidebar_position: 1
description: "akaBot OCR エンジン アクティビティに関するドキュメント。"
displayed_sidebar: activitiesSidebar
---
# akaBot OCR

RCA.Activities.OCR.akaBotOCR

## **説明**

akaBot によって開発された、オフライン処理をサポートするローカル OCR エンジンです。

![akabot-ocr](/static/img/akabot-ocr.png)

（\*は必須）

## **プロパティ**

**入力**

* **Image (Image)** - 処理対象となる画像オブジェクト。

**ログイン**

* **API Key (文字列)** - オンライン モードで実行する際に、akaBot OCR にアクセスするために使用する API キー。
* **Endpoint (文字列)** - オンライン akaBot OCR サービスの URL エンドポイント。

**その他**

* **Display Name (文字列)** - デザイナー パネルに表示されるこのアクティビティの名前。ワークフローをより適切に整理および構造化するために、この名前を編集できます。  
  例: [420316221] akaBot OCR
* **Public (チェックボックス)** - 選択した場合、このアクティビティの実行詳細と変数をログに記録します。機密情報がログに記録される可能性があるため、このオプションを有効にする前にデータ セキュリティ要件を考慮してください。

**オプション**

* **Language (ドロップダウン リスト)** - OCR 抽出に使用する言語。デフォルトは English です。
* **Scale (Double)** - 選択した UI 要素または画像の拡大倍率。デフォルトは `1.0` です。
* **Use Local Server (ブール値)** - ローカル サーバーを使用したローカル処理モードを有効にします。デフォルトは `False` です。

**出力**

* **Text (文字列)** - 抽出されたテキスト。
