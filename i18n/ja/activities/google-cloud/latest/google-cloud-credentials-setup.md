---
id: google-cloud-credentials-setup
title: "Google Cloud 認証情報の設定"
sidebar_label: "Google Cloud 認証情報の設定"
sidebar_position: 2
description: "akaBot を Google Cloud サービスに接続するために必要な Google Cloud サービスアカウントの作成と JSON キーの取得に関するステップバイステップガイドです。"
displayed_sidebar: activitiesSidebar
---

# Google Cloud 認証情報の設定

akaBot を Google Cloud サービス（Google Cloud Storage など）に接続するには、**Google Cloud スコープ** アクティビティに**サービスアカウント**とそれに関連する **JSON キーファイル**が必要です。このガイドでは、Google Cloud コンソールでサービスアカウントを作成し、akaBot Studio で設定する手順を説明します。

> **前提条件:** サービスアカウントの作成に必要な **IAM と管理** 権限を持つ [Google Cloud プロジェクト](https://console.cloud.google.com/) へのアクセスが必要です。必要なロールは **Project IAM Admin** 以上です。

---

## 認証モードの概要

**Google Cloud スコープ** アクティビティは 3 つの **Credentials Mode（認証情報モード）** をサポートしています。開始前に、ご利用の環境に合ったモードを選択してください：

| Credentials Mode | 動作 | 使用する場合 |
| :--- | :--- | :--- |
| **AutoDetect** | akaBot が環境から認証情報を自動的に検出します（例：`GOOGLE_APPLICATION_CREDENTIALS` 環境変数または Google Cloud メタデータサーバー）。 | サービスアカウントがすでにアタッチされている Google Cloud 仮想マシン（Compute Engine）で akaBot を実行している場合、または認証情報が事前設定されている環境で使用します。 |
| **ServiceAccountKey** *（デフォルト）* | アクティビティ内で `SecureString` として直接提供されたサービスアカウントキーの生の JSON コンテンツを使用して認証します。 | ロボットディスクに物理ファイルを保存せずに、akaBot Center（オーケストレーター）アセットからキーの内容を直接提供したい場合に使用します。 |
| **ServiceAccountKeyFromFile** | ロボットマシンのローカルディスクに保存されているサービスアカウント JSON キーファイルへのパスを使用して認証します。 | JSON キーファイルがロボットマシンに展開されており、ローカルファイルパスで参照したい場合に使用します。 |

---

## ステップ 1 — サービスアカウントの作成

1. [Google Cloud コンソール](https://console.cloud.google.com/) にサインインします。
2. ページ上部のプロジェクトドロップダウンから、自動化に使用するプロジェクトを選択します。
3. 左側のナビゲーションメニューで、**IAM と管理 > サービスアカウント** に移動します。
4. ページ上部の **サービスアカウントを作成** をクリックします。
5. サービスアカウントの詳細を入力します：
   - **サービスアカウント名:** わかりやすい名前を入力します（例：`akabot-automation`）。
   - **サービスアカウント ID:** 名前に基づいて自動入力されます。サービスアカウントのメールアドレスを形成します（例：`akabot-automation@your-project.iam.gserviceaccount.com`）。
   - **サービスアカウントの説明:** 任意です。このアカウントの目的を説明します。
6. **作成して続行** をクリックします。

![gcp-create-service-account.png](/static/img/gcp-create-service-account.png)

---

## ステップ 2 — サービスアカウントへのロールの付与

サービスアカウントには、自動化に必要な Google Cloud リソースへのアクセスを許可するロールを付与する必要があります。

1. **サービスアカウント** の一覧ページで、サービスアカウント（例：`akabot-automation`）をクリックして詳細を開き、**権限** タブに移動して **アクセス権を管理** をクリックします。
2. 右側の **アクセス権を編集** パネルで、**ロールを割り当てる** の下にある **ロールを選択** ドロップダウンをクリックします。
3. 自動化のユースケースに必要なロールを検索して選択します。akaBot の Google Cloud Storage ワークフローで一般的なロールは以下のとおりです：

   | akaBot のユースケース | 推奨ロール |
   | :--- | :--- |
   | Google Cloud Storage でのファイルの読み書き | **Storage Object Admin** |
   | Google Cloud Storage からのファイルの読み取りのみ | **Storage Object Viewer** |
   | 特定のバケットへのファイルのアップロード | **Storage Object Creator** |
   | ストレージへのフルアクセス（バケット＋オブジェクト） | **Storage Admin** |

4. **保存** をクリックして、ロールをサービスアカウントに適用します。

![gcp-grant-role.png](/static/img/gcp-grant-role.png)

---

## ステップ 3 — JSON キーの作成とダウンロード

JSON キーは、akaBot がサービスアカウントとして認証するために使用する認証情報ファイルです。

1. **サービスアカウント** の一覧ページで、作成したサービスアカウントを見つけ、そのメールアドレスをクリックして詳細を開きます。
2. **キー** タブに移動します。
3. **鍵を追加 > 新しい鍵を作成** をクリックします。
4. ダイアログで、キーのタイプとして **JSON** を選択します。
5. **作成** をクリックします。JSON キーファイルが自動的にコンピューターにダウンロードされます。

![gcp-create-key.png](/static/img/gcp-create-key.png)

> **セキュリティに関する警告:** JSON キーファイルには、サービスアカウントが権限を持つ Google Cloud リソースへのフルアクセスを付与する秘密鍵が含まれています。安全に保管し、ソース管理（Git など）にはコミットしないでください。パスワードと同じレベルで慎重に扱ってください。

**JSON 構造の例：**
```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN RSA PRIVATE KEY-----\n...\n-----END RSA PRIVATE KEY-----\n",
  "client_email": "akabot-automation@your-project.iam.gserviceaccount.com",
  "client_id": "123456789",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token"
}
```

---

## ステップ 4 — akaBot Studio での Google Cloud スコープの設定

akaBot Studio を開き、ワークフローに **Google Cloud スコープ** アクティビティを追加して、**Credentials Mode** プロパティを設定します：

### モード 1: ServiceAccountKeyFromFile

ロボットマシンに保存されたダウンロード済み JSON キーファイルへのパスを使用して認証します。
* アクティビティ本体またはプロパティパネルで、**Credentials Mode** を `ServiceAccountKeyFromFile` に設定します。
* **Service Account Key From File** フィールドに、文字列式として絶対パスを指定します：
  `"C:\akabot\credentials\gcp-key.json"`

### モード 2: ServiceAccountKey

`SecureString` に変換された生の JSON キーの内容を使用して認証します。akaBot Center アセットからキーを取得する場合に最適です。
* **Credentials Mode** を `ServiceAccountKey` に設定します。
* **Service Account Key** フィールドに、JSON コンテンツを含む `SecureString` 変数を渡します。
* アセットから JSON コンテンツを `String` 変数（例：`strJsonKey`）に読み込んだ場合は、以下を使用して `SecureString` に変換します：
  `new System.Net.NetworkCredential("", strJsonKey).SecurePassword`

### モード 3: AutoDetect

マシンの環境を使用して自動的に認証します。アクティビティにキーパスやキーの内容を設定する必要はありません。
* **Credentials Mode** を `AutoDetect` に設定します。
* `GOOGLE_APPLICATION_CREDENTIALS` 環境変数が有効な JSON キーファイルを指しているか、またはサービスアカウントがアタッチされた GCP Compute Engine VM 上でロボットが実行されていることを確認してください。

![gcp-scope-studio.png](/static/img/gcp-scope-studio.png)

---

## 関連情報

* [Google Cloud スコープ](google-cloud-scope.md) - スコープ アクティビティの完全なプロパティリファレンスです。
