---
id: installation-on-windows
title: "Windows へのインストール"
sidebar_label: "Windows へのインストール"
sidebar_position: 3
description: "オフライン Docker パッケージを使用して Windows に akaBot AI Hub をインストールまたは更新します。"
displayed_sidebar: aiHubSidebar
---

# Windows へのインストール（Docker / オフライン）

このガイドでは、Docker、Docker Compose、およびオフラインリリースパッケージを使用して、Windows に akaBot AI Hub をデプロイする方法を説明します。開始する前に、[システム要件](./requirements.md)を確認してください。

主な手順では、PostgreSQL/MySQL/MariaDB/Microsoft SQL Server、Redis、および Qdrant がすでに利用可能な環境向けの **Application パッケージ**を使用します。このホストに PostgreSQL、Redis、および Qdrant も構築する必要がある場合に限り、**Full パッケージ**を選択してください。Windows パッケージは `.zip` 形式ですが、内部の Docker イメージは Linux コンテナ用の圧縮された `.tar.gz` アーカイブのままであり、Docker に直接ロードできます。

:::caution

Windows コンテナモードはサポートされません。Docker で Linux コンテナイメージを実行できる必要があります。

:::

## 1. リリースパッケージの概要

Windows リリースは 4 つのパッケージに分かれています。

| パッケージ | イメージ数 | 用途 | データベースへの影響 |
| --- | ---: | --- | --- |
| `AI-Hub-v1.0.0-application-windows-amd64.zip` | 2 | 外部インフラストラクチャを使用する新規インストール、または Backend と Frontend の同時更新 | 承認済みのスキーマ計画による |
| `AI-Hub-v1.0.0-backend-windows-amd64.zip` | 1 | Backend のみの更新 | 承認済みのスキーマ更新が必要な場合がある |
| `AI-Hub-v1.0.0-frontend-windows-amd64.zip` | 1 | Frontend のみの更新 | データベースの変更なし |
| `AI-Hub-v1.0.0-full-windows-amd64.zip` | 5 | PostgreSQL、Redis、および Qdrant を同梱した新規オフラインインストール | 新しい PostgreSQL スキーマを作成 |

顧客がデータベース、Redis、および Qdrant をすでに運用している場合は、**Application パッケージ**を使用します。PostgreSQL、Redis、および Qdrant を同梱した新規の自己完結型インストールに限り、**Full パッケージ**を使用します。Full パッケージが対応するリレーショナルデータベースは PostgreSQL のみです。Microsoft SQL Server には必ず Application パッケージを使用してください。

以降の手順では Application パッケージを使用します。Full パッケージを選択した場合は、アーカイブ名とフォルダー名の `application` を `full` に置き換え、ステップ 6 の Full パッケージ専用インフラストラクチャ手順に従ってください。インストール前に `release-notes.md` を確認してください。

## 2. 新規インストール

> Backend のみまたは Frontend のみのパッケージには、この手順を使用しないでください。これらのパッケージについては、[コンポーネントの更新](#4-コンポーネントの更新)を参照してください。

### ステップ 1：リリースパッケージを展開する

配布ディレクトリで PowerShell を開き、Application パッケージを展開します。

```powershell
Expand-Archive '.\AI-Hub-v1.0.0-application-windows-amd64.zip' `
  -DestinationPath D:\software\ai-hub -Force
Set-Location D:\software\ai-hub\AI-Hub-v1.0.0-application-windows-amd64
```

`D:\software\ai-hub` などの短いローカルパスに展開してください。ZIP ファイル内やネットワーク共有上から直接実行しないでください。

![Application パッケージを専用のローカルフォルダーに展開する](/static/img/aihub-install-windows-extract.png)

### ステップ 2：ランタイム環境を設定する

```powershell
Copy-Item configuration\runtime.env.template configuration\runtime.env
notepad configuration\runtime.env
```

![同梱テンプレートから runtime.env を作成する](/static/img/aihub-install-windows-create-runtime-env.png)

すべての `CHANGE_ME` を置き換えます。完成したファイルをコミットしたり、メールで送信したり、サポートチケットに貼り付けたりしないでください。

![すべての CHANGE_ME を顧客環境固有の値に置き換える](/static/img/aihub-install-windows-runtime-env.png)

起動前にファイルを検証します。

```powershell
docker compose --env-file configuration\runtime.env `
  -f deployment\compose.yaml config --quiet
```

![Docker Compose 設定の検証と Docker 環境の詳細](/static/img/aihub-install-windows-docker-validation.png)

`docker compose config` の出力には機密情報が含まれる可能性があるため、共有しないでください。

### ステップ 3：自動インストーラーを実行する

展開したバンドルのルートから、次を実行します。

```powershell
deployment\quick-install.bat
```

インストーラーは、パッケージ内のすべてのファイルを検証し、すべてのイメージアーカイブをロードし、データベースを準備し、選択したパッケージに含まれるサービスを起動し、ヘルスチェックの完了を待って、最終ステータスを表示します。Application パッケージの場合は、AI Hub Backend と Frontend のみを起動し、`runtime.env` で設定した外部サービスに接続します。PostgreSQL、Redis、または Qdrant はインストールしません。通常のインストールでは、手動のチェックサムコマンドは不要です。

利用可能なオプションは次のとおりです。

```powershell
deployment\quick-install.bat --skip-load
deployment\quick-install.bat --skip-database-setup
deployment\quick-install.bat --mssql-bootstrap
deployment\quick-install.bat --help
```

`--mssql-bootstrap` は、新規かつ空の SQL Server データベースにのみ使用してください。`--skip-database-setup` と組み合わせないでください。

以降の手順では、管理された運用やトラブルシューティングに使用できる同等の手動手順を説明します。

![既存インフラストラクチャを使用する Application パッケージのインストール成功](/static/img/aihub-install-windows-success.png)

:::note

上のスクリーンショットは、PostgreSQL、Redis、および Qdrant コンテナがすでに実行されているホストで取得したものです。これらが `docker compose ps` に表示されても、Application パッケージによってインストールされたことを意味しません。

:::

### ステップ 4：イメージを手動でロードする（オプション）

通常はこのステップを省略し、`quick-install.bat` を使用します。イメージを個別にロードする必要がある管理運用では、次を実行します。

```powershell
Get-ChildItem .\images -Recurse -File -Filter *.tar.gz |
  Sort-Object FullName |
  ForEach-Object {
    docker load --input $_.FullName
    if ($LASTEXITCODE -ne 0) { throw "Failed to load $($_.Name)" }
  }
```

Windows 配布用の外側のパッケージは ZIP 形式です。`.tar.gz` イメージファイルを手動で展開しないでください。`docker load` はこれらを直接読み込みます。

### ステップ 5：データベースとサービスを設定する

#### PostgreSQL（推奨）

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

Application パッケージでは、顧客データベースの実際のホスト名または IP アドレスを使用します。ホスト名 `postgres` は、Full パッケージに同梱される PostgreSQL サービス用です。

#### MySQL

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

#### MariaDB

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

#### Microsoft SQL Server

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
REDIS_URL=redis://redis.customer.internal:6379/0
QDRANT_URL=http://qdrant.customer.internal:6333
```

外部サービスを使用する Application パッケージでは、顧客環境のホスト名、ポート、認証情報、TLS 設定、およびネットワークルールを使用します。インストーラーを実行する前に、Docker コンテナから各エンドポイントに接続できることを確認してください。

#### akaBot Center の認証とセキュリティ

```dotenv
CENTER_BASE_URL=http://docker-host.example.internal:8080
CENTER_INTERNAL_HMAC_KEY_ID=your_key_id
CENTER_INTERNAL_HMAC_SECRET=your_hmac_secret
CENTER_WEBHOOK_HMAC_KEY_ID=your_webhook_key_id
CENTER_WEBHOOK_HMAC_SECRET=your_webhook_secret
API_BASE_PATH=http://localhost:8080/ai-service
PARENT_ORIGIN=http://localhost:8080
CORS_ALLOWED_ORIGINS=http://localhost:3001,http://localhost:8080
AI_SERVICE_PUBLIC_BASE_URL=http://localhost:8080/ai-service
```

コンテナ内から接続できるホスト名または IP アドレスを `CENTER_BASE_URL` に設定します。選択した Docker ランタイムが対応するマッピングを提供する場合に限り、`host.docker.internal` を使用できます。本番環境では、顧客の DNS 名と HTTPS エンドポイントを使用してください。

PowerShell で一意の 32 バイト暗号化キーを生成します。

```powershell
$Bytes = New-Object byte[] 32
$Rng = [Security.Cryptography.RandomNumberGenerator]::Create()
$Rng.GetBytes($Bytes)
$EncryptionKey = -join ($Bytes | ForEach-Object { $_.ToString('x2') })
$Rng.Dispose()
$EncryptionKey
```

生成された 64 文字の値を `ENCRYPTION_KEY` に保存します。

### ステップ 6：インフラストラクチャとスキーマを手動で準備する

**Application パッケージ**では、この Compose ファイルから PostgreSQL、Redis、または Qdrant を起動しないでください。顧客管理のサービスが実行中であり、Docker から接続できることを確認してから、以下の承認済みスキーマ手順に進みます。

**Full パッケージのみ**、同梱インフラストラクチャを起動します。

```powershell
docker compose --env-file configuration\runtime.env `
  -f deployment\compose.yaml up -d --wait postgres qdrant redis
```

新規の PostgreSQL/MySQL/MariaDB データベースの場合は、次を実行します。

```powershell
docker compose --env-file configuration\runtime.env `
  -f deployment\compose.yaml run --rm migrate
```

同梱のベースラインは空のデータベース用であり、既存のスキーマはアップグレードできません。Microsoft SQL Server では、同梱のマイグレーションサービスを実行しないでください。新規かつ空の MSSQL データベースの場合は、次を実行します。

```powershell
deployment\quick-install.bat --mssql-bootstrap
```

既存または本番環境のデータベースに対して、`DB_SYNCHRONIZE` を有効にしないでください。

### ステップ 7：AI Hub サービスを手動で起動する

```powershell
docker compose --env-file configuration\runtime.env `
  -f deployment\compose.yaml up -d --wait ai-service frontend
```

## 3. インストール後の確認

```powershell
docker compose --env-file configuration\runtime.env `
  -f deployment\compose.yaml ps

Invoke-WebRequest http://127.0.0.1:3000/health -UseBasicParsing
Invoke-WebRequest http://127.0.0.1:3000/health/ready -UseBasicParsing
Invoke-WebRequest http://127.0.0.1:3001/runtime-config.js -UseBasicParsing
```

akaBot Center 経由で、認証、認可、チャット、AI プロバイダーへの接続、埋め込み、RAG の引用、および有効なツールを含むエンドツーエンドの受け入れ確認を実施します。

## 4. コンポーネントの更新

更新パッケージのテンプレートで、既存の `configuration\runtime.env` を上書きしないでください。Backend または同時更新の前に、PostgreSQL、Qdrant、および文書ストレージをバックアップします。

### Backend のみの更新

Backend イメージをロードし、`configuration\image-update.env` から `BACKEND_IMAGE` のみをコピーして、リリースで承認されたスキーマ計画を実行します。

```powershell
docker compose --env-file configuration\runtime.env `
  -f deployment\compose.yaml stop ai-service

# release-notes.md で移行パスが承認されている場合にのみ実行します。
# MSSQL では、この同梱マイグレーションを実行しないでください。
docker compose --env-file configuration\runtime.env `
  -f deployment\compose.yaml run --rm migrate

docker compose --env-file configuration\runtime.env `
  -f deployment\compose.yaml up -d ai-service
```

MSSQL では `migrate` を省略し、そのリリースで承認されたスキーマ計画のみを適用します。既存または本番環境のデータベースで `DB_SYNCHRONIZE` を有効にしないでください。

### Frontend のみの更新

Frontend イメージをロードし、`FRONTEND_IMAGE` のみをコピーして、次を実行します。

```powershell
docker compose --env-file configuration\runtime.env `
  -f deployment\compose.yaml up -d frontend
```

Frontend のみの更新では、データベースマイグレーションを実行しないでください。

### Backend と Frontend の同時更新

Application パッケージを使用して両方のイメージをロードし、既存のランタイム設定に `BACKEND_IMAGE` と `FRONTEND_IMAGE` のみをコピーします。

```powershell
docker compose --env-file configuration\runtime.env `
  -f deployment\compose.yaml up -d ai-service frontend
```

サービスを再作成する前に、承認済みの Backend スキーマ手順を適用してください。

## 5. サービスの保守と Windows に関する注意事項

### データを削除せずにサービスを停止する

```powershell
docker compose --env-file configuration\runtime.env `
  -f deployment\compose.yaml down
```

名前付きボリュームは保持されます。PostgreSQL、Qdrant、Redis、およびアップロード済み文書を意図的に完全削除する場合を除き、`-v` を追加しないでください。

### Windows での一般的な確認事項

* `docker info` を実行し、サーバーに接続でき、Linux コンテナを使用していることを確認します。
* `docker compose version` を実行し、Docker Compose v2 が利用できることを確認します。
* サービスがポートをバインドできない場合は、ポート `3000` と `3001` を確認します。
* バンドルはローカルの NTFS ドライブに配置し、非常に長い展開パスを避けます。
* PostgreSQL、Redis、および Qdrant はデフォルトで内部サービスとして構成され、ホストポートを公開しません。これは意図された動作です。

### ログを表示する

```powershell
docker compose --env-file configuration\runtime.env `
  -f deployment\compose.yaml logs -f

docker compose --env-file configuration\runtime.env `
  -f deployment\compose.yaml logs -f ai-service
```
