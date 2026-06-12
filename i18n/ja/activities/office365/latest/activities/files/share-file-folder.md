---
id: share-file-folder
title: "ファイル/フォルダーの共有"
sidebar_label: "ファイル/フォルダーの共有"
sidebar_position: 9
description: "ファイル/フォルダー共有アクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# ファイル/フォルダーの共有

RCA.Activities.Office365.ShareItem

## **説明**

指定した受信者とファイルまたはフォルダーのドライブ項目を共有します。

![share-file-folder.png](/static/img/share-file-folder.png)

(*必須項目の場合あり)

## **アクティビティの本文内**

* **共有するファイルまたはフォルダー** - 共有するファイルまたはフォルダー。
* **Grantee type** - 権限が付与される受信者のタイプ。
* **Grantee permission** - 付与される権限の種類。

## **プロパティ**

**入力**

* **File or folder to share: InArgument<DriveItem>** - 共有するファイルまたはフォルダー。

* **Grantee type: GranteeType** - 権限が付与される受信者のタイプ。

* **Grantee permission: GranteePermission** - 付与される権限の種類。

**特定のユーザー**

* **Send sharing invitation email: Boolean** - Recipients プロパティで指定した受信者に共有招待メールを送信するかどうかを指定します。

* **Message: InArgument<String>** - 共有招待メールに含めるプレーンテキストメッセージ。

* **Recipients: InArgument<String[]>** - アクセスを受け取り、オプションで共有招待を受け取る特定の受信者のリスト。各受信者はメールアドレスで指定します。

* **Requires sign in: Boolean** - 受信者が共有アイテムを表示するためにサインインを要求するかどうかを指定します。

**出力**

* **Access url: OutArgument<String>** - 共有リンクまたはドライブ項目の Web URL（Specific People の場合）。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を考慮してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のためにアクティビティ名を編集できます。
  例: [3424325] Open Window

