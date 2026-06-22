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

Google Cloud のスコープを作成し、スコープ内の子アクティビティに対して Google Cloud のコマンドコンテキストを提供します。

![google-cloud-scope.png](/static/img/google-cloud-scope.png)

(※ 必須項目)

## **アクティビティ本文内**

* **Do** - スコープ内で実行する Google Cloud のアクティビティ。

## **プロパティ**

**入力**

* **Credentials Mode (ドロップダウン)** - Google Cloud に接続する認証方法を指定します。以下のいずれかを選択してください：
  * **AutoDetect** - 環境変数や Google Cloud 環境のメタデータから自動的に認証情報を検出します。
  * **ServiceAccountKey** - サービスアカウントキーの文字列データで認証します。
  * **ServiceAccountKeyFromFile** - サービスアカウントキーをファイル経由で指定して認証します。

* **Service Account Key: `InArgument<SecureString>`** - サービスアカウントキーの内容。

* **Service Account Key From File: `InArgument<String>`** - サービスアカウントキーのファイルパス。

**その他**

* **Public (チェックボックス)** - アクティビティを公開する場合にチェックします。公開前にデータセキュリティ要件を確認してください。

* **Display Name (String)** - このアクティビティの表示名。コード構造の整理のために編集できます。
  例: [3424325] Open Window

