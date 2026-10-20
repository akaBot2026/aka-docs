---
id: google-cloud-scope
title: "Google Cloud スコープ"
sidebar_label: "Google Cloud スコープ"
sidebar_position: 3
description: "Google Cloud スコープ アクティビティのドキュメントです。"
displayed_sidebar: activitiesSidebar
---

# Google Cloud スコープ

`RCA.Activities.GoogleCloud.GCPScope`

## 説明

認証済みの Google Cloud セッションを作成し、コンテナー内に配置されたすべての子アクティビティに接続コンテキストを提供します。

Google Cloud に関するすべてのアクティビティ（Create Bucket、Upload Object、Get Object など）は、このスコープの **Do** ブロック内に配置する必要があります。スコープが認証を処理し、ネストされたすべてのアクティビティに認証情報を自動的に渡します。

![google-cloud-scope.png](/static/img/google-cloud-scope.png)

(\*必須項目)

> サービスアカウントの作成と JSON キーファイルの取得に関するステップバイステップガイドについては、[Google Cloud 認証情報の設定](google-cloud-credentials-setup.md) を参照してください。

---

## アクティビティ本体の設定

スコープは、ワークフロー デザイナー上で **Service Account Credentials Mode（サービスアカウント認証情報モード）** ドロップダウンを直接表示します。プロパティパネルを開かずに認証方式を選択できます。

* **Service Account Credentials Mode** - 認証モードを選択します（`AutoDetect`、`ServiceAccountKey`、または `ServiceAccountKeyFromFile`）。
* **Do** - 同じ接続コンテキストを共有する Google Cloud アクティビティを配置するコンテナーブロックです。

---

## プロパティ

### 入力 (Input)

* **Credentials Mode: ScopeType** - Google Cloud との認証に使用する方式です。以下のいずれかの値を選択してください：

  | 値 | 説明 |
  | :--- | :--- |
  | `AutoDetect` | akaBot が環境から認証情報を自動的に検出します。`GOOGLE_APPLICATION_CREDENTIALS` 環境変数、または Google Cloud メタデータサーバー（Compute Engine VM 上で実行している場合）を確認します。アクティビティにキーファイルやキーの内容を指定する必要はありません。 |
  | `ServiceAccountKey` *（デフォルト）* | **Service Account Key** フィールドに `SecureString` として直接提供されたサービスアカウントキーの JSON コンテンツを使用して認証します。 |
  | `ServiceAccountKeyFromFile` | ロボットマシンのローカルディスクに保存されているサービスアカウント JSON キーファイルへのパスを使用して認証します。 |

* **Service Account Key: `InArgument<SecureString>`\*** - サービスアカウントキーの JSON コンテンツです。**Credentials Mode** が `ServiceAccountKey` に設定されている場合に必須です。

* **Service Account Key From File: `InArgument<String>`\*** - ロボットマシン上のサービスアカウント JSON キーファイルへのフルファイルパスです（例: `"C:\akabot\credentials\gcp-key.json"`）。**Credentials Mode** が `ServiceAccountKeyFromFile` に設定されている場合に必須です。

---

### その他 (Misc)

* **Display Name (`String`)** - ワークフロー デザイナーでのアクティビティの表示名です。ワークフローを読みやすくするために変更できます。デフォルト: `Google Cloud Scope`。

---

## 関連情報

* [Google Cloud 認証情報の設定](google-cloud-credentials-setup.md) - Google Cloud 認証情報の生成と設定に関するステップバイステップガイドです。
