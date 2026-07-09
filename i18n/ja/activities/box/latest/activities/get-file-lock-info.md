---
id: get-file-lock-info
title: "ファイルロック情報の取得"
sidebar_label: "ファイルロック情報の取得"
sidebar_position: 6
description: "Get File Lock Info アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ファイルロック情報の取得

RCA.Activities.Box.Files.GetFileLockInfo

## **説明**

Box ファイルのロック情報を取得します。

![get-file-lock](/static/img/get-file-lock.png)

(※ 必須の場合)

## **プロパティ**

**共通**

* **Continue On Error (Boolean)** - ブール値は True または False のいずれかです。
  - True: アクティビティ内でエラーが発生しても、プロセスの残りの実行を続行します。
  - False: 実行の継続を停止します。

**入力**

* **File Id: `InArgument<String>`*** - ロック情報を取得する Box ファイルの ID。

**その他**

* **Public (Checkbox)** - アクティビティを公開したい場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のために名前を編集できます。
  例: [3424325] Open Window

**出力**

* **Result: `OutArgument<BoxFileLock>`** - Box ファイルのロック情報。


