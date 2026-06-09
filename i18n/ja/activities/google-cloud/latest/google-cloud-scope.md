---
id: google-cloud-scope
title: "Google Cloud スコープ"
sidebar_label: "Google Cloud スコープ"
sidebar_position: 3
description: "Google Cloud スコープアクティビティのドキュメント。"
displayed_sidebar: activitiesSidebar
---
# Google Cloud スコープ

RCA.Activities.GoogleCloud.GCPScope

## **説明**

Google Cloud のスコープを作成し、子アクティビティに Google Cloud コマンドコンテキストを提供します。

![google-cloud-scope.png](/static/img/google-cloud-scope.png)

(※ 必須の場合)

## **アクティビティ本文内**

* **Do** - スコープ内で実行する Google Cloud のアクティビティ。

## **プロパティ**

**入力**

* **Credentials Mode (Dropdown List)** - Google Cloud へ接続するための認証方法を指定します。以下のいずれかを選択してください：
  * **AutoDetect** - 環境変数または Google Cloud 環境メタデータから自動的に認証情報を検出します。
  * **ServiceAccountKey** - サービスアカウントキーを直接使って認証します。
  * **ServiceAccountKeyFromFile** - サービスアカウントキーのファイルを使って認証します。

* **Service Account Key: `InArgument<SecureString>`** - Google Cloud のサービスアカウントキーのデータ。

* **Service Account Key From File: `InArgument<String>`** - Google Cloud サービスアカウントキーのファイルへのパス。

**その他**

* **Public (Checkbox)** - アクティビティを公開する場合はチェックしてください。使用前にデータセキュリティ要件を検討してください。

* **Display Name (String)** - このアクティビティの表示名。コードの整理や構造化のために名前を編集できます。
  例: [3424325] Open Window

