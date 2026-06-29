---
id: import-document
title: "Import Document"
sidebar_label: "Import Document"
sidebar_position: 2
description: "Import Document activity documentation."
displayed_sidebar: activitiesSidebar
---
# Import Document

RCA.Activities.IDP.ImportDocument

## **説明**

このアクティビティを使用すると、ドキュメントファイルをアップロードして、akaBot IDP プラットフォーム上の指定された処理パイプラインにインポートできます。

![import-document](/static/img/import-document.png)

(\* は必須項目)

**コンテナ要件:** このアクティビティは [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) コンテナ内で実行する必要があります。

## **アクティビティの本文**

* **File path**\* - アップロードして処理したいドキュメントファイルへの絶対パスまたは相対パス。例: `"C:\Users\Admin\Documents\Invoice_01.pdf"`

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - 真または偽のブール値。  
  * **True** - アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続することを許可します。  
  * **False (デフォルト)** - プロセスの実行をブロック（中断）します。
* **Timeout MS (Int32)** - エラーがスローされる前に、アクティビティがファイルをアップロードするのを待機する時間（ミリ秒単位）を指定します。デフォルト値は `30000` ミリ秒（30秒）です。

**入力**

* **File path (String)**\* - インポートしたいファイルのパス。例: `"C:\Users\Admin\Documents\Invoice_01.pdf"`
* **Pipeline Key (String)**\* - ファイルをインポートする特定の処理パイプラインの一意のパイプラインキー。このキーは akaBot IDP のパイプライン設定から取得できます。例: `"invoice_pipeline"`

**その他**

* **Display Name (String)** - このアクティビティの表示名。コードをより良く整理および構造化するために、アクティビティの名前を編集できます。  
  例: `[400311067] Import Document`。
* **Public (Checkbox)** - アクティビティを公開したい場合にチェックします。このプロパティを使用する前に、データセキュリティの要件を考慮してください。

**出力**

* **Document Key (String)** - インポートされたドキュメントの一意のキーが保存され、その後の追跡に使用される akaBot の String 型変数。

## **ステップ・バイ・ステップの使用方法**

1. **IDP Scope コンテナを追加**:
   * **Toolbox**（**IDP** の下）から [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) アクティビティをワークフローデザイナーパネルにドラッグ＆ドロップします。接続の詳細（`Api Key` と `Server Endpoint`）を設定します。

2. **Import Document を追加**:
   * **Import Document** アクティビティを **IDP Scope** コンテナの **Do** ブロック内にドラッグ＆ドロップします。

3. **プロパティを設定**:
   * アクティビティを選択し、**Properties** パネルの **入力** で以下を設定します：
     * **File path**: デジタル化したいファイルのパスをダブルクォーテーションで囲んで入力します (例: `"C:\Users\Admin\Documents\Invoice_01.pdf"`)。
     * **Pipeline Key**: ターゲットとなる akaBot IDP パイプラインキーをダブルクォーテーションで囲んで入力します (例: `"invoice_pipeline"`)。

4. **出力 Document Key をマップ**:
   * **Properties** パネル의 **出力** で、**Document Key** フィールドをクリックし、**Ctrl + K** を押して、インポートされたドキュメントの一意の識別子を格納するための `docKey` という名前の String 型変数を作成します。

5. **ワークフローを実行**:
   * プロセスを実行します。akaBot は指定されたファイルを指定されたパイプラインの下にある akaBot IDP サーバーにアップロードし、ドキュメント処理を開始し、一意のドキュメントキーを `docKey` に返します。

## **トラブルシューティング**

* **FileNotFoundException / Path Invalid (ファイルが見つからない / パスが無効)**:
  * ドキュメントへのパスが正しく、ロボットを実行しているマシンからアクセス可能であることを確認してください。
  * 相対パスを使用している場合は、プロジェクトディレクトリに対して正しく解決されていることを確認してください。
* **PipelineNotFoundException / Invalid Pipeline Key (パイプラインが見つからない / パイプラインキーが無効)**:
  * **Pipeline Key** の値を再確認してください。akaBot IDP プラットフォームの設定で定義されているパイプラインキーと完全に一致していることを確認してください。
* **Connection Timeout / Network Errors (接続タイムアウト / ネットワークエラー)**:
  * このアクティビティはサーバーにファイルをアップロードするため、インターネット接続がアクティブで安定していること、およびファイルサイズがサーバーのアップロード制限を超えていないことを確認してください。
  * **Timeout MS** プロパティを確認してください。大きなドキュメント（例: 多数ページの PDF）の場合、タイムアウト値を増やす必要がある場合があります。
* **Invalid API Key or Server Endpoint (無効な API キーまたはサーバーエンドポイント)**:
  * このアクティビティはサーバー認証を親アクティビティに依存しているため、親の **IDP Scope** アクティビティに有効な資格情報が設定されていることを確認してください。
