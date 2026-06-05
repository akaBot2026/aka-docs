---
id: get-file-info-details
title: "ファイル情報の詳細取得"
sidebar_label: "ファイル情報の詳細取得"
sidebar_position: 5
description: "Get File Info Details アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ファイル情報の詳細取得

RCA.Activities.Box.Files.GetFileInfoDetails

## **説明**

Box ファイルの詳細情報を取得します。

![get-file-info](/static/img/get-file-info.png)

(※ 必須の場合)

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール値は True または False のいずれかです。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を続行します。
  - False: 実行の継続を停止します。

**入力**

* **File Id: InArgument<String>*** - 情報を取得する Box ファイルの ID。

**その他**

* **Public (Checkbox)** - アクティビティを公開したい場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のために名前を編集できます。
  例: [3424325] Open Window

**出力**

* **Result: OutArgument<BoxFile>** - 詳細な Box ファイル情報。

