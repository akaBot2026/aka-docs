---
id: installation
title: "Linux へのインストール"
sidebar_label: "Linux へのインストール"
sidebar_position: 2
description: "オフライン Docker パッケージを使用して Linux に akaBot AI Hub をインストールまたは更新します。"
displayed_sidebar: aiHubSidebar
---

# Linux へのインストール（Docker / オフライン）

このガイドでは、Docker および Docker Compose を使用して、顧客のインフラストラクチャに akaBot AI Hub をデプロイする方法を説明します。開始する前に、[システム要件](./requirements.md)を確認してください。

## 1. リリースパッケージの概要

リリースは、インストールまたは更新に必要なコンポーネントのみをダウンロードできるように、4 つのパッケージに分かれています。

| パッケージ | イメージ数 | 用途 | データベースへの影響 |
| --- | ---: | --- | --- |
| `AI-Hub-v1.0.0-application-linux-amd64.tar.gz` | 2 | 外部インフラストラクチャを使用する新規インストール、または Backend と Frontend の同時更新 | 承認済みのインストールまたはアップグレード用スキーマ計画による |
| `AI-Hub-v1.0.0-backend-linux-amd64.tar.gz` | 1 | Backend のみの更新 | 承認済みのスキーマ更新が必要な場合がある |
| `AI-Hub-v1.0.0-frontend-linux-amd64.tar.gz` | 1 | Frontend のみの更新 | データベースの変更なし |
| `AI-Hub-v1.0.0-full-linux-amd64.tar.gz` | 5 | PostgreSQL、Redis、および Qdrant を同梱した新規オフラインインストール | 新しい PostgreSQL スキーマを作成 |

Microsoft SQL Server には **Application パッケージ**を使用してください。**Full パッケージ**が同梱するリレーショナルデータベースは PostgreSQL のみであり、SQL Server には使用できません。顧客文書はこれらのリリースパッケージに含まれません。

選択したアーカイブは、対応する `.tar.gz.sha256` ファイルと一緒に配布してください。インストールまたは更新の前に、パッケージ固有の `release-notes.md` を確認してください。

## 2. 新規インストール

> Backend のみまたは Frontend のみのパッケージには、この手順を使用しないでください。これらのパッケージについては、[コンポーネントの更新](#4-コンポーネントの更新)を参照してください。

### ステップ 1：リリースパッケージを展開する

次の例では Application パッケージを使用します。Full パッケージをインストールする場合は、`application` を `full` に置き換えてください。

```bash
# 配布されたアーカイブを展開前に検証
sha256sum -c AI-Hub-v1.0.0-application-linux-amd64.tar.gz.sha256

# アーカイブを展開
tar -xzf AI-Hub-v1.0.0-application-linux-amd64.tar.gz

# リリースディレクトリに移動
cd AI-Hub-v1.0.0-application-linux-amd64
```

### ステップ 2：パッケージの整合性を検証する

展開したパッケージ内のすべてのファイルを検証します。

```bash
sha256sum -c checksums.sha256
```

### ステップ 3：Docker イメージをロードする

パッケージに含まれるアプリケーションイメージと、Full パッケージの場合はインフラストラクチャイメージを、ローカルの Docker デーモンにロードします。

```bash
find images -type f -name '*.tar.gz' -print0 \
  | sort -z \
  | while IFS= read -r -d '' image_archive; do
      docker load --input "${image_archive}"
    done
```

### ステップ 4：ランタイム環境を設定する

同梱のテンプレートからランタイム環境ファイルを作成します。

```bash
cp configuration/runtime.env.template configuration/runtime.env
chmod 600 configuration/runtime.env
```

テキストエディターで `configuration/runtime.env` を開き、すべての `CHANGE_ME` を置き換えます。完成したファイルをコミットまたは共有しないでください。サービスを起動する前に設定を検証します。

```bash
docker compose \
  --env-file configuration/runtime.env \
  -f deployment/compose.yaml \
  config --quiet
```

`docker compose config` の出力には機密情報が含まれる可能性があるため、共有しないでください。

#### 自動クイックインストール

`configuration/runtime.env` の設定後、同梱のヘルパーを使用して、残りの検証、イメージのロード、データベースのセットアップ、サービスの起動、およびヘルスチェックを自動実行できます。

```bash
# PostgreSQL/MySQL/MariaDB の新規インストール
./deployment/quick-install.sh

# 新規かつ空の MSSQL データベースのみ
./deployment/quick-install.sh --mssql-bootstrap
```

ステップ 3 ですべてのイメージをロード済みの場合は、`--skip-load` を追加します。承認済みのスキーマがすでに準備されている場合、またはアップグレード計画で別途処理する場合は、`--skip-database-setup` を使用します。このオプションを `--mssql-bootstrap` と組み合わせないでください。

以降の手順では、管理された運用やトラブルシューティングに使用できる同等の手動手順を説明します。

#### データベース設定

##### PostgreSQL（推奨）

```dotenv
DB_TYPE=postgres
DB_HOST=postgres.customer.internal
DB_PORT=5432
DB_USER=aihub_user
DB_PASSWORD=your_secure_password
DB_NAME=aihub_db
DB_SCHEMA=
DB_SYNCHRONIZE=false
```

##### MySQL

```dotenv
DB_TYPE=mysql
DB_HOST=mysql.customer.internal
DB_PORT=3306
DB_USER=aihub_user
DB_PASSWORD=your_secure_password
DB_NAME=aihub_db
DB_SCHEMA=
DB_SYNCHRONIZE=false
```

##### MariaDB

```dotenv
DB_TYPE=mariadb
DB_HOST=mariadb.customer.internal
DB_PORT=3306
DB_USER=aihub_user
DB_PASSWORD=your_secure_password
DB_NAME=aihub_db
DB_SCHEMA=
DB_SYNCHRONIZE=false
```

##### Microsoft SQL Server

```dotenv
DB_TYPE=mssql
DB_HOST=sqlserver.customer.internal
DB_PORT=1433
DB_USER=aihub_user
DB_PASSWORD=your_secure_password
DB_NAME=aihub_db
DB_SCHEMA=dbo
DB_SYNCHRONIZE=false
DB_MSSQL_ENCRYPT=true
DB_MSSQL_TRUST_SERVER_CERTIFICATE=false
```

#### Redis とベクトルストアの設定

```dotenv
REDIS_URL=redis://:redis_password@redis.customer.internal:6379/0
QDRANT_URL=http://qdrant.customer.internal:6333
```

外部サービスには、顧客環境のホスト名、ポート、認証情報、TLS 設定、およびネットワークルールを使用してください。インストーラーを実行する前に、Docker コンテナから各エンドポイントに接続できることを確認します。

#### akaBot Center の認証とセキュリティ

```dotenv
CENTER_BASE_URL=http://center.customer.internal:8080
CENTER_INTERNAL_HMAC_KEY_ID=your_key_id
CENTER_INTERNAL_HMAC_SECRET=your_hmac_secret
CENTER_WEBHOOK_HMAC_KEY_ID=your_webhook_key_id
CENTER_WEBHOOK_HMAC_SECRET=your_webhook_secret
API_BASE_PATH=https://center.customer.internal/ai-service
PARENT_ORIGIN=https://center.customer.internal
CORS_ALLOWED_ORIGINS=https://aihub.customer.internal,https://center.customer.internal
AI_SERVICE_PUBLIC_BASE_URL=https://center.customer.internal/ai-service
```

環境ごとに一意の 32 バイト暗号化キーを生成します。ドキュメントに記載された固定キーをコピーしないでください。

```bash
openssl rand -hex 32
```

生成された 64 文字の 16 進数値を `ENCRYPTION_KEY` に保存します。その他の署名キーと必須のランタイム値は、顧客が承認したシークレット管理プロセスに従い、同梱テンプレートの項目に設定してください。

### ステップ 5：同梱インフラストラクチャを起動する（Full パッケージのみ）

外部サービスを使用する Application パッケージでは、このステップを省略します。Full パッケージでは、スキーマを準備する前に同梱インフラストラクチャを起動し、準備完了まで待機します。

```bash
docker compose \
  --env-file configuration/runtime.env \
  -f deployment/compose.yaml \
  up -d --wait postgres qdrant redis
```

### ステップ 6：データベーススキーマを準備する

:::warning データベース移行の互換性

* **PostgreSQL / MySQL / MariaDB：** 同梱のベースラインは空のデータベース用です。既存のスキーマはアップグレードできません。
* **Microsoft SQL Server：** 同梱のマイグレーションは MSSQL と互換性がありません。MSSQL では `migrate` サービスを実行しないでください。
* 承認済みのアップグレードを実行する前に、リレーショナルデータベース、Qdrant、および文書ストレージをバックアップし、リリースノートで対応する移行パスを確認してください。

:::

**PostgreSQL / MySQL / MariaDB** の場合は、次を実行します。

```bash
docker compose \
  --env-file configuration/runtime.env \
  -f deployment/compose.yaml \
  run --rm migrate
```

**新規かつ空の Microsoft SQL Server データベースのみ**、1 回限りのメタデータブートストラップを実行します。

1. `configuration/runtime.env` で `DB_SYNCHRONIZE=true` を設定します。
2. Backend のみを起動し、`/health/ready` が応答するまで待機します。

   ```bash
   docker compose \
     --env-file configuration/runtime.env \
     -f deployment/compose.yaml \
     up -d ai-service

   curl --fail http://127.0.0.1:3000/health/ready
   ```

3. 最初のブートストラップが成功した直後に、`DB_SYNCHRONIZE=false` を設定します。
4. 本番環境用の安全な設定で Backend を再作成します。

   ```bash
   docker compose \
     --env-file configuration/runtime.env \
     -f deployment/compose.yaml \
     up -d --force-recreate ai-service
   ```

既存または本番環境の MSSQL スキーマに対して、スキーマ同期を有効にしないでください。MSSQL のアップグレードには、そのリリースで承認されたスキーマ計画が必要です。

### ステップ 7：AI Hub サービスを起動する

Backend API と Frontend UI サービスを起動します。

```bash
docker compose \
  --env-file configuration/runtime.env \
  -f deployment/compose.yaml \
  up -d ai-service frontend
```

## 3. インストール後の確認

すべてのコンテナが正常であり、API エンドポイントが応答することを確認します。

```bash
# コンテナの状態を確認
docker compose --env-file configuration/runtime.env -f deployment/compose.yaml ps

# Backend の liveness と readiness を確認
curl --fail http://127.0.0.1:3000/health
curl --fail http://127.0.0.1:3000/health/ready

# Frontend の設定エンドポイントを確認
curl --fail http://127.0.0.1:3001/runtime-config.js
```

akaBot Center 経由で、認証、認可、チャット、設定済み AI プロバイダー、埋め込み、RAG の引用、および有効なツールを含むエンドツーエンドの受け入れ確認を実施します。Frontend は独自のオリジンから直接配信され、Center の `/ai-service` ゲートウェイルートは API リクエストにのみ使用されます。

## 4. コンポーネントの更新

更新パッケージのテンプレートで、既存の `configuration/runtime.env` を上書きしないでください。選択した更新パッケージを検証して展開し、イメージアーカイブをロードしてから、`configuration/image-update.env` のイメージ値だけを既存のインストール設定にコピーします。

Backend または Application の同時更新の前に、リレーショナルデータベース、Qdrant データ、および文書ストレージをバックアップします。`release-notes.md` に記載された更新元と更新先のバージョン互換性、およびデータベース手順に従ってください。

### Backend のみの更新

`AI-Hub-v1.0.0-backend-linux-amd64.tar.gz` を使用します。同梱の Backend イメージをロードした後、既存のインストールで `BACKEND_IMAGE` のみを更新し、次を実行します。

```bash
docker compose \
  --env-file configuration/runtime.env \
  -f deployment/compose.yaml \
  stop ai-service

# release-notes.md で移行パスが明示的に承認されている場合にのみ実行します。
# MSSQL では、この同梱マイグレーションを実行しないでください。
docker compose \
  --env-file configuration/runtime.env \
  -f deployment/compose.yaml \
  run --rm migrate

docker compose \
  --env-file configuration/runtime.env \
  -f deployment/compose.yaml \
  up -d ai-service
```

MSSQL では `migrate` を省略し、そのリリースで承認されたスキーマ計画のみを適用します。既存または本番環境のデータベースで、Backend の更新時に `DB_SYNCHRONIZE` を有効にしないでください。

### Frontend のみの更新

`AI-Hub-v1.0.0-frontend-linux-amd64.tar.gz` を使用します。Frontend イメージをロードした後、既存のインストールで `FRONTEND_IMAGE` のみを更新し、次を実行します。

```bash
docker compose \
  --env-file configuration/runtime.env \
  -f deployment/compose.yaml \
  up -d frontend
```

Frontend のみの更新では、データベースマイグレーションを実行しないでください。

### Backend と Frontend の同時更新

`AI-Hub-v1.0.0-application-linux-amd64.tar.gz` を使用します。両方のイメージをロードし、`configuration/image-update.env` の `BACKEND_IMAGE` と `FRONTEND_IMAGE` だけを既存のインストールに適用します。アップグレードには新規インストール用ヘルパーを使用しないでください。承認済みの Backend スキーマ手順を適用してから、両方のサービスを再作成します。

```bash
docker compose \
  --env-file configuration/runtime.env \
  -f deployment/compose.yaml \
  up -d ai-service frontend
```

## 5. サービスの保守

### データを削除せずにサービスを停止する

```bash
docker compose --env-file configuration/runtime.env -f deployment/compose.yaml down
```

名前付きボリュームは保持されます。PostgreSQL、Qdrant、Redis、およびアップロード済み文書を意図的に完全削除する場合を除き、`-v` を追加しないでください。

### ログを表示する

```bash
# すべてのログを表示
docker compose --env-file configuration/runtime.env -f deployment/compose.yaml logs -f

# Backend のログのみを表示
docker compose --env-file configuration/runtime.env -f deployment/compose.yaml logs -f ai-service
```
