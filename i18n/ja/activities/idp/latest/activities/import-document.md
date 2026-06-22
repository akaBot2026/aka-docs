---
id: import-document
title: "ドキュメントのインポート"
sidebar_label: "ドキュメントのインポート"
sidebar_position: 2
description: "Import Document アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ドキュメントのインポート

RCA.Activities.IDP.ImportDocument

## **説明**

このアクティビティは、ドキュメントファイルを指定した akaBot Vision の処理パイプラインにアップロードしてインポートするために使用します。

![import-document](/static/img/import-document.png)

(*必須項目の場合あり)

**コンテナ要件:** このアクティビティは [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) コンテナ内で実行する必要があります。

## **アクティビティの本文内**

* **File path**\* - アップロードして処理するドキュメントファイルへの絶対パスまたは相対パス。例: `"C:\Users\Admin\Documents\Invoice_01.pdf"`

## **プロパティ**

**共通**

* **Continue On Error (`Boolean`)** - 真または偽のブール値。  
  * **True** - アクティビティ内でエラーが発生しても処理の残りを継続します。  
  * **False (デフォルト)** - 実行を中断します。
* **Timeout MS (`Int32`)** - アップロードの待機時間（ミリ秒）。デフォルトは `30000` ミリ秒 (30 秒) です。

**入力**

* **File path (`String`)**\* - インポートするファイルのパス。例: `"C:\Users\Admin\Documents\Invoice_01.pdf"`
* **Pipeline Key (`String`)**\* - ファイルをインポートする対象のパイプラインキー。akaBot Vision のパイプライン設定から取得します。例: `"invoice_pipeline"`

**その他**

* **Display Name (`String`)** - このアクティビティの表示名。例: `[400311067] Import Document`。
* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。

**出力**

* **Document Key (`String`)** - インポートされたドキュメントの一意キーが保存される変数。

## **ステップバイステップ使用方法**

1. **IDP Scope コンテナを追加**: [IDP Scope] を追加し、接続設定を行います。
2. **Import Document を追加**: **IDP Scope** の **Do** ブロック内に配置します。
3. **プロパティを設定**: **File path** と **Pipeline Key** を指定します。
4. **出力の Document Key をマップ**: **Ctrl + K** を押して `docKey` という `String` 変数を作成します。
5. **ワークフローを実行**: ファイルがアップロードされ、処理が開始され、`docKey` にキーが返されます。

## **トラブルシューティング**

* **ファイルが見つからない / パス無効**: パスが正しくアクセス可能か確認してください。
* **Pipeline Key 無効**: パイプラインキーが正しいか確認してください。
* **接続タイムアウト / ネットワークエラー**: Timeout MS を増やすか接続を確認してください。
* **無効な API Key / Server Endpoint**: 親の **IDP Scope** の認証設定を確認してください。

