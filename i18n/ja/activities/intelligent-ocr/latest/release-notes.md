---
id: release-notes
title: "リリースノート"
sidebar_label: "リリースノート"
sidebar_position: 2
description: "Intelligent OCR アクティビティ パッケージのリリースノート。"
displayed_sidebar: activitiesSidebar
---
# リリースノート

## **v3.1.0.1**

**追加**
* .NET Framework v4.7.2 ランタイムのサポートを追加しました。
* **Digitize Document** アクティビティにおいて、大きなドキュメント処理時のデジタル化パフォーマンスとメモリ管理を向上させました。
* **Form Extractor** アクティビティにおけるテンプレート マッチングの精度とレイアウトの配置ルールを強化しました。
* OpenCV の依存関係を更新し、OCR エンジン用の画像前処理を改善しました。

**バグ修正**
* **Regular Expression Extractor** アクティビティにおいて、エスケープされた JSON 文字を処理する際の設定文字列解析の検証エラーを修正しました。
* akaBot Studio でタクソノミー（分類）フィールドを設定する際に発生していた UI スレッドのロック問題を解決しました。

---

## **v2.1.0.2**

**バグ修正**
* **Export Extraction Results** アクティビティにおいて、確信度スコアを DataTable にエクスポートする際のスキーマ検証バグを修正しました。
* デジタル化ステップから破損した DOM 出力を受け取った際に、 **Data Extraction Scope** 内で時折発生していた NullReferenceException を解決しました。

---

## **v2.1.0.1**

**追加**
* **Data Extraction Scope** アクティビティに、フィールドごとのカスタム確信度しきい値のサポートを追加しました。
* **Digitize Document** 内での無効なドキュメント パスに対するエラー メッセージを改善しました。

---

## **v2.1.0**

**追加**
* Intelligent OCR アクティビティ パッケージ（**RCA.Activities.OCR**）の初期リリース。
* 導入されたコア アクティビティ:
  * **Digitize Document**（OCR エンジンを使用して DOM とテキストを抽出）
  * **Data Extraction Scope**（データ抽出を調整）
  * **Export Extraction Results**（抽出結果を標準の DataSet に変換）
* 導入されたコア抽出器（Extractor）:
  * **Form Extractor**（固定レイアウト向けの座標ベースの抽出）
  * **Regular Expression Extractor**（パターンベースの抽出）
