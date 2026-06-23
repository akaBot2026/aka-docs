---
id: idp-scope
title: "IDP Scope"
sidebar_label: "IDP Scope"
sidebar_position: 1
description: "IDP Scope アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# IDP Scope

`RCA.Activities.IDP.IDPScope`

## **Description**

**IDP Scope** アクティビティは、他のすべての IDP アクティビティが、このアクティビティの「入力」で指定された特定の akaBot IDP アカウントと対話するためのスペースを提供します。IDP Scope の外部では、どの IDP アクティビティも動作しません。

![idp-scope](/static/img/idp-scope.png)

(\* は必須項目)

## **アクティビティの本体**

* **Do** - IDP Scope 内で実行するアクティビティ。

## **プロパティ**

**入力**

* **Api Key (String)**\* - 特定の akaBot IDP アカウントの API キー。
* **Server Endpoint (String)**\* - akaBot IDP サーバーの URL。

**その他**

* **Display Name (String)** - このアクティビティの表示名。ワークフローを整理しやすくするために変更できます。  
  例: `[366354422] IDP Scope`
* **Public (Checkbox)** - アクティビティの実行ログを公開する場合にチェックします。セキュリティ要件を考慮した上で使用してください。

## **ステップ・バイ・ステップの使用方法**

akaBot Studio で **IDP Scope** コンテナを使用してインテリジェント文書処理 (IDP) フローを構築するには、次の手順に従います：

1. **IDP Scope コンテナの追加**:
   * **Toolbox** (IDP の下) から **IDP Scope** アクティビティをワークフロー デザイナー パネル (Sequence 内) にドラッグ アンド ドロップします。
   * **入力** セクションの **Properties** パネルで以下を設定します：
     * **Api Key**: ダブルクォーテーションで囲んだ akaBot IDP API キーを入力します (例: `"akabot-test-api-key"`)。
     * **Server Endpoint**: ダブルクォーテーションで囲んだ akaBot IDP サーバーの URL を入力します (例: `"https://idp-stage.akabot.com"`)。

2. **Import Document の追加**:
   * **IDP Scope** コンテナの **Do** ブロック内に [Import Document](/docs/activities/idp/latest/activities/import-document.md) アクティビティをドラッグ アンド ドロップします。
   * プロパティを設定します：
     * **File Path**: 処理したいドキュメントのパスを入力します (例: `"C:\RPA\Invoices\invoice_01.pdf"`)。
     * **Pipeline Key**: ターゲット パイプライン キーをダブルクォーテーションで囲んで入力します (例: `"pipeline-invoice-v2"`)。
     * **Document Key** (**出力** セクション): **Ctrl + K** を押して、生成されたドキュメント キーを保存するための `docKey` という名前 of String 型変数を作成します。

3. **Export Document の追加**:
   * **Import Document** アクティビティのすぐ下に [Export Document](/docs/activities/idp/latest/activities/export-document.md) アクティビティをドラッグ アンド ドロップします。
   * プロパティを設定します：
     * **Document Key**: 入力セクションに変数 `docKey` (手順 2 のもの) を入力します。
     * **Extract Type**: 希望の出力形式を選択します (例: `DataTable`、`JsonString`、または `XMLString`)。
     * **Extracted Data** (**出力** セクション): 結果を受け取る変数を作成します (例: `dtExtractedData` という名前の DataTable 型変数)。

4. **ワークフローの実行**:
   * ワークフローを実行します。akaBot は **IDP Scope** を介して認証を行い、指定されたドキュメントをインポートし、デジタル化されたデータを抽出し、後続の自動化タスクで使用するために変数に出力 (エクスポート) します。

## **トラブルシューティング**

* **無効な API キー (認証エラー)**:
  * **Api Key** フィールドに入力された API キーが正しく、有効期限が切れていないことを確認してください。
  * キーがダブルクォーテーションで囲まれていることを確認してください。
* **サーバー エンドポイントへの接続失敗**:
  * **Server Endpoint** URL に入力ミスがないか確認し、正しいプロトコル (`http://` または `https://`) が含まれていることを確認してください。
  * インターネット接続を確認し、プロキシやローカル ファイアウォールが akaBot IDP サーバーへの要求をブロックしていないことを確認してください。
* **スコープ外でのアクティビティの実行**:
  * 他のすべての IDP アクティビティ (*Import Document*、*Export Document*、*Get Document Status* など) が、**IDP Scope** の **Do** コンテナ内に正しく配置されていることを確認してください。スコープ外に配置すると実行時エラーが発生します。
* **ドキュメント ステータスの失敗**:
  * エクスポートが失敗する場合は、ドキュメントが完了したステータス (例: `Confirmed` または `Exported`) に達していることを確認してください。まだ処理中または検証に失敗したドキュメントをエクスポートしようとするとエラーが発生します。
