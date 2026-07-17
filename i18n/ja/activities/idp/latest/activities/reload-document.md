---
id: reload-document
title: "Reload Document"
sidebar_label: "Reload Document"
sidebar_position: 7
description: "Reload Document activity documentation."
displayed_sidebar: activitiesSidebar
---
# Reload Document

RCA.Activities.IDP.ReloadDocument

## **説明**

このアクティビティを使用すると、akaBot IDP プラットフォーム上の無効または失敗したドキュメントの処理を再ロード（再試行）でき、再処理の実行のために新しいドキュメントキーを生成します。

![reload-document](/static/img/reload-document.png)

(\* は必須項目)

**コンテナ要件:** このアクティビティは [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) コンテナ内で実行する必要があります。

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - 真または偽のブール値。  
  * **True** - アクティビティ内でエラーが発生しても、プロセスの残りの実行を継続することを許可します。  
  * **False (デフォルト)** - プロセスの実行をブロック（中断）します。
* **Timeout MS (Int32)** - エラーがスローされる前に、アクティビティが再ロードを要求するのを待機する時間（ミリ秒単位）を指定します。デフォルト値は `30000` ミリ秒（30秒）です。

**入力**

* **Document Key (String)**\* - 再ロードしたい失敗したドキュメントまたは無効なドキュメントの一意のドキュメントキー。例: `"DOC_2026_06_22_001"`

**その他**

* **Display Name (String)** - このアクティビティの表示名。コードをより良く整理および構造化するために、アクティビティの名前を編集できます。  
  例: `[787606491] Reload Document`。
* **Public (Checkbox)** - アクティビティを公開したい場合にチェックします。このプロパティを使用する前に、データセキュリティの要件を考慮してください。

**出力**

* **New Document Key (String)** - 再ロード/再処理されたドキュメントの新しい一意のキーが保存される akaBot の String 型変数。

## **ステップ・バイ・ステップの使用方法**

1. **IDP Scope コンテナ内に配置**:
   * **Toolbox** から [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) アクティビティをワークフローデザイナーパネルにドラッグ＆ドロップします。接続の詳細を設定します。

2. **Reload Document を追加**:
   * **Reload Document** アクティビティを **IDP Scope** コンテナの **Do** ブロック内にドラッグ＆ドロップします。

3. **プロパティを設定**:
   * **Document Key**: 変数 `docKey`（失敗/無効なドキュメントキーを表す）または特定のドキュメントキーをダブルクォーテーションで囲んで入力します (例: `"DOC_2026_06_22_001"`)。

4. **出力プロパティをマップ**:
   * **Properties** パネルの **出力** で、**New Document Key** フィールドをクリックし、**Ctrl + K** を押し、再処理されたドキュメントに対して生成された新しい一意のドキュメントキーを格納する `newDocKey` という名前の String 型変数を作成します。

5. **ワークフローを実行**:
   * プロセスを実行します。akaBot は akaBot IDP に対してドキュメントの再処理を指示し、新しいドキュメントキーを `newDocKey` に返します。

## **トラブルシューティング**

* **Document Key Not Found (ドキュメントキーが見つかりません)**:
  * 指定されたドキュメントキーが akaBot IDP サーバーに存在し、接続されているアカウントに属していることを確認してください。
* **Reprocessing Not Allowed (Status Conflict) (再処理は許可されていません (ステータスの競合))**:
  * すでに正常に完了したドキュメント（`Completed` または `Exported`）は再ロードできません。再ロードを試みる前に、`Get Document Status` を使用してドキュメントのステータスを確認してください。このアクティビティは通常、処理に失敗したドキュメントまたは無効マークが付いたドキュメントに対してのみ使用されます。
* **Invalid API Key or Server Endpoint (無効な API キーまたはサーバーエンドポイント)**:
  * 親の **IDP Scope** コンテナが、有効な API キーとエンドポイントで正しく構成されていることを確認してください。
