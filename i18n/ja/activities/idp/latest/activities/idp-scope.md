---
id: idp-scope
title: "IDP スコープ"
sidebar_label: "IDP スコープ"
sidebar_position: 1
description: "IDP Scope アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# IDP スコープ

RCA.Activities.IDP.IDPScope

## **説明**

IDP Scope アクティビティは、特定の akaBot Vision アカウントと対話するためのコンテキストを提供します。このアクティビティの入力で指定されたアカウントを使用して、他のすべての IDP アクティビティが動作します。IDP Scope の外で IDP アクティビティは動作しません。

![idp-scope](/static/img/idp-scope.png)

(*必須項目の場合あり)

## **アクティビティの本文内**

* **Do** - IDP スコープ内で実行したいアクティビティ。

## **プロパティ**

**入力**

* **Api Key (`String`)**\* - 特定の akaBot Vision アカウントの API Key。
* **Server Endpoint (`String`)**\* - akaBot Vision サーバーの URL。

**その他**

* **Display Name (`String`)** - このアクティビティの名前。アクティビティ名を編集してコードの整理ができます。
  例: `[366354422] IDP Scope`.
* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。

## **ステップバイステップ使用方法**

IDP Scope コンテナを使って akaBot Studio で IDP ワークフローを構築する手順:

1. **IDP Scope コンテナを追加**:
   * ツールボックスの **IDP** から **IDP Scope** アクティビティをドラッグ＆ドロップし、ワークフローデザイナ（シーケンス内）に配置します。
   * **プロパティ** の **Input** で:
     * **Api Key**: akaBot Vision の API Key を引用符で囲んで入力します（例: `"akabot-test-api-key"`）。
     * **Server Endpoint**: akaBot Vision サーバーの URL を引用符で囲んで入力します（例: `"https://idp-stage.akabot.com"`）。

2. **Import Document を追加**:
   * **IDP Scope** の **Do** ブロック内に [Import Document](/docs/activities/idp/latest/activities/import-document.md) アクティビティを配置します。
   * プロパティを設定します:
     * **File Path**: 処理したいドキュメントのパスを入力（例: `"C:\RPA\Invoices\invoice_01.pdf"`）。
     * **Pipeline Key**: 対象のパイプラインキーを引用符で入力（例: `"pipeline-invoice-v2"`）。
     * **Document Key** (出力): **Ctrl + K** を押して `docKey` という `String` 変数を作成して格納します。

3. **処理状況のチェック（任意）**:
   * [Get Document Status](/docs/activities/idp/latest/activities/get-document-status.md) を Import Document の下に配置して、`docKey` の処理状況をチェックします。

4. **Export Document を追加**:
   * [Export Document](/docs/activities/idp/latest/activities/export-document.md) を追加し、**Document Key** に `docKey` を指定、**Extract Type** に `DataTable` / `JsonString` / `XMLString` を選択します。
   * **Extracted Data**（出力）には `dtExtractedData` という `DataTable` 変数を作成して受け取ります。

5. **ワークフローを実行**:
   * 実行すると IDP Scope により認証され、ドキュメントがアップロード・処理され、抽出データがワークフロー内の変数に格納されます。

## **トラブルシューティング**

* **無効な API Key（Unauthorized）**:
  * Api Key が正しいか、期限切れでないかを確認してください。引用符で囲んで入力することを忘れずに。
* **Server Endpoint 接続失敗**:
  * URL のプロトコル（`http://` または `https://`）を含め、タイプミスがないか確認してください。プロキシやファイアウォールが接続をブロックしていないかも確認してください。
* **スコープ外でのアクティビティ実行**:
  * すべての IDP アクティビティ（Import Document、Export Document、Get Document Status 等）は **IDP Scope** の **Do** コンテナ内に配置してください。外に配置するとランタイムエラーになります。
* **ドキュメントステータスの失敗**:
  * エクスポートに失敗する場合、ドキュメントが確定（例: `Confirmed` や `Exported`）になっているか確認してください。処理中や検証に失敗したドキュメントはエクスポートできません。

