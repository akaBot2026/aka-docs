---
id: introduction
title: "はじめに"
sidebar_label: "はじめに"
sidebar_position: 1
description: "OCR Local Server アクティビティ パッケージ（RCA.Activities.OCRLocalServer）の概要。"
displayed_sidebar: activitiesSidebar
---
# はじめに

**OCR Local Server** アクティビティ パッケージ（akaBot Studio では **RCA.Activities.OCRLocalServer** として知られています）は、光学文字認識（OCR）およびテキスト抽出のためのアクティビティとエンジンを提供します。ロボットは、ローカルまたはクラウドベースの OCR 技術を使用して、OCR ベースの画面スクレイピング、画面上または画像内のテキスト検索、およびユーザー インターフェース要素との対話を行うことができます。

---

## **主なアクティビティ**

akaBot Studio のワークフローは、このパッケージを使用して OCR 経由でテキストの特定、抽出、対話を行います。パッケージには以下のものが含まれています。

### **OCR スコープ**
- **OCR Scope (OCR スコープ)**: ネストされたすべての OCR アクティビティに対して、OCR コンテキストと設定（デフォルトの OCR エンジンなど）を確立するコンテナー アクティビティ。

### **OCR テキスト抽出と検索**
- **Load Image (画像を読み込み)**: 他のアクティビティが OCR 操作を実行できるように、指定されたパスから画像ファイルを読み込みます。
- **Get OCR Text (OCR テキストを取得)**: OCR 画面スクレイピング手法を使用して、指定された UI 要素または画像からテキストを抽出します。
- **Get OCR Text With Anchor (アンカー付き OCR テキスト取得)**: 指定された UI 要素または画像から、アンカー文字列に対する相対的な位置にあるテキストを抽出します。
- **Find OCR Text Position (OCR テキスト位置を検索)**: 文字列を検索し、画面上の位置を表す UIElement を返します。
- **Text Exists OCR (OCR テキスト存在チェック)**: 指定されたテキスト文字列がターゲット UI 要素または画像内に存在するかどうかを確認します。

### **OCR マウス操作**
- **Click OCR Text (OCR テキストをクリック)**: OCR を使用して特定の文字列を検索し、その上をマウスでクリックします。
- **Hover OCR Text (OCR テキストにホバー)**: OCR を使用して特定の文字列を検索し、その上にマウス カーソルを合わせます。

### **ネストされた OCR エンジン**
OCR ベースのアクティビティ（*Click OCR Text*、*Get OCR Text* など）は、画像をスキャンして文字を認識するために、ネストされた OCR エンジンに依存しています。以下のエンジンを OCR アクティビティ内にドラッグ アンド ドロップして使用できます。
- **akaBot OCR**: 構造化テキスト抽出に最適化された、akaBot 独自の OCR エンジン。
- **Tesseract OCR**: デフォルトで統合されているオープンソースのローカル OCR エンジン。
- **Google Cloud OCR**: Google Cloud Vision API を活用するクラウドベースのエンジン。
- **Microsoft Azure OCR**: Azure Cognitive Services Computer Vision API を使用するクラウドベースのエンジン。
- **Microsoft Windows 10 OCR**: Windows 10/11 オペレーティング システムに組み込まれているローカル OCR エンジン。
