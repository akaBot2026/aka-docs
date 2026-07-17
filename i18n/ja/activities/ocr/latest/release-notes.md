---
id: release-notes
title: "リリースノート"
sidebar_label: "リリースノート"
sidebar_position: 2
description: "OCR Local Server アクティビティ パッケージのリリースノート。"
displayed_sidebar: activitiesSidebar
---
# リリースノート

## **v3.1.1.7**

**追加**
* .NET Framework v4.7.2 ランタイムの互換性をサポートしました。
* **akaBot OCR** エンジンの最新バージョンを統合し、低解像度の画面キャプチャに対する処理速度と文字認識精度を最適化しました。
* 新しい **Get OCR Text With Anchor** アクティビティを追加し、ターゲットとなるラベルやアンカーに対する相対的なテキスト抽出を強固に行えるようにしました。
* **Get OCR Text With Anchor** のオプションに `Grab Region (グラブ領域)` サポートを追加し、抽出ゾーンを細かく調整できるようにしました。

**バグ修正**
* **Find OCR Text Position** において、検索クエリ内の特殊文字が原因で座標オフセットの計算が正しく行われなかったバグを修正しました。
* **Load Image** アクティビティで、複数の高解像度ファイルを連続して読み込む際に発生していたメモリリークを解決しました。
* akaBot Studio における **Tesseract OCR** エンジン設定プロパティ パネルの UI レンダリングの問題を修正しました。

---

## **v3.1.0.0**

**追加**
* デフォルトのオフライン代替エンジンとして **Microsoft Windows 10 OCR** エンジンのサポートを追加しました。
* 複数行の文字列を照合する際のマッチング精度を向上させるため、 **Text Exists OCR** アクティビティの検索精度を改善しました。

---

## **v2.0.0.0**

**追加**
* クラウドベースの OCR プロバイダーである **Google Cloud OCR** および **Microsoft Azure OCR** との互換性を追加しました。
* **Click OCR Text** アクティビティにキー修飾子（Ctrl、Alt、Shift、Win）を導入しました。

---

## **v1.0.0.0**

**追加**
* OCR Local Server アクティビティ パッケージ（**RCA.Activities.OCRLocalServer**）の初期リリース。
* 導入されたコア アクティビティ:
  * **OCR Scope**（コンテキスト コンテナー）
  * **Load Image**（画像ロード）
  * **Get OCR Text**（テキスト スクレイピング）
  * **Find OCR Text Position**（座標検索）
  * **Click OCR Text**（テキスト クリックの統合）
  * **Hover OCR Text**（テキスト ホバーの統合）
  * **Text Exists OCR**（テキスト存在確認）
* デフォルトのローカル エンジン:
  * **Tesseract OCR**（統合されたオフライン OCR エンジン）
