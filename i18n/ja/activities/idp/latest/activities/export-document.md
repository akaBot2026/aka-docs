---
id: export-document
title: "Export Document"
sidebar_label: "Export Document"
sidebar_position: 3
description: "Export Document activity documentation."
displayed_sidebar: activitiesSidebar
---
# Export Document

RCA.Activities.IDP.ExportDocument

## **説明**

このアクティビティを使用すると、処理されたドキュメント（akaBot IDP 上で確認またはエクスポートされたもの）のデジタル化および抽出されたデータを、DataTable、JSON、または XML などの標準形式に出力（エクスポート）できます。

![export-document](/static/img/export-document.png)

(\* は必須項目)

**コンテナ要件:** このアクティビティは [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) コンテナ内で実行する必要があります。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - 真または偽のブール値。  
  * **True** - アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続することを許可します。  
  * **False (デフォルト)** - プロセスの実行をブロック（中断）します。
* **Timeout MS (Int32)** - エラーがスローされる前に、アクティビティがエクスポートされたデータを取得するのを待機する時間（ミリ秒単位）を指定します。デフォルト値は `30000` ミリ秒（30秒）です。

**入力**

* **Document Key (String)**\* - エクスポートしたい処理済みドキュメントの一意のドキュメントキー。例: `"DOC_2026_06_22_001"`
* **Extract Type (Dropdown List)** - 出力データの形式を指定します。次の3つのオプションから選択します：
  * `DataTable` (デフォルト)
  * `JsonString`
  * `XMLString`

**その他**

* **Display Name (String)** - このアクティビティの表示名。コードをより良く整理および構造化するために、アクティビティの名前を編集できます。  
  例: `[838217454] Export Document`。
* **Public (Checkbox)** - アクティビティを公開したい場合にチェックします。このプロパティを使用する前に、データセキュリティの要件を考慮してください。

**出力**

* **Extracted Data (Object)** - エクスポートされたドキュメントデータが保存される akaBot 変数。変数の型は、選択した **Extract Type** と一致する必要があります（例: DataTable の場合は `DataTable`、JsonString/XMLString の場合は `String`）。

## **ステップ・バイ・ステップの使用方法**

1. **IDP Scope コンテナ内に配置**:
   * **Toolbox** から [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) アクティビティをワークフローデザイナーパネルにドラッグ＆ドロップします。接続の詳細（`Api Key` と `Server Endpoint`）を設定します。

2. **Import Document を追加**:
   * **IDP Scope** コンテナ内に [Import Document](/docs/activities/idp/latest/activities/import-document.md) アクティビティをドラッグ＆ドロップしてファイルをアップロードし、出力を `docKey` という名前の String 型変数に割り当てます。

3. **Export Document を追加**:
   * **IDP Scope** コンテナ内（ドキュメント処理手順の下）に **Export Document** アクティビティをドラッグ＆ドロップします。

4. **プロパティを設定**:
   * **Document Key**: 入力セクションに変数 `docKey` を入力します。
   * **Extract Type**: ドロップダウンリストから希望の形式を選択します（例: 抽出されたフィールドを構造化された表として出力する場合は `DataTable`）。

5. **出力 Extracted Data をマップ**:
   * **Properties** パネルの **出力** で、**Extracted Data** フィールドをクリックし、**Ctrl + K** を押して、抽出されたデータを格納するための `dtExtractedData` という名前の DataTable 型変数を作成します。

6. **ワークフローを実行**:
   * プロセスを実行します。akaBot は akaBot IDP サーバーからインポートされたドキュメントの処理済みデータを取得し、`dtExtractedData` 変数に保存します。

## **トラブルシューティング**

* **Document Still Processing (ドキュメントはまだ処理中)**:
  * サーバーでの処理が完了していないドキュメントからデータをエクスポートしようとすると、アクティビティは失敗します。ループ内で [Get Document Status](/docs/activities/idp/latest/activities/get-document-status.md) アクティビティを使用するか、遅延（Delay）を挿入して、エクスポートする前にドキュメントのステータスが `Confirmed`（確認済み）または `Completed`（完了）になっていることを確認してください。
* **Document Key Invalid or Empty (ドキュメントキーが無効または空)**:
  * **Document Key** プロパティに有効なドキュメントキー変数または文字列が指定されていることを確認してください。
* **Invalid Output Variable Type (無効な出力変数型)**:
  * **Extracted Data** 出力プロパティにマップされている変数が、選択した **Extract Type** と一致していることを確認してください。例えば、**Extract Type** が `DataTable` の場合、出力変数は `DataTable` 型である必要があります。`JsonString` または `XMLString` の場合、出力変数は `String` 型である必要があります。
* **Connection Timeout / Network Errors (接続タイムアウト / ネットワークエラー)**:
  * サーバー接続を確認し、インターネットが安定していることを確認してください。ドキュメントが非常に大きく、ダウンロードに時間がかかる場合は、**Timeout MS** プロパティを増やしてください。
* **Invalid API Key or Server Endpoint (無効な API キーまたはサーバーエンドポイント)**:
  * 親の **IDP Scope** アクティビティが正しく構成され、接続が正常に確立されていることを確認してください。
