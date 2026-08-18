---
id: installation
title: "Installation on Linux"
sidebar_label: "Installation on Linux"
sidebar_position: 2
description: "Install or update akaBot AI Hub on Linux from an offline Docker package."
displayed_sidebar: aiHubSidebar
---

# Installation on Linux (Docker / Offline)

This guide explains how to deploy akaBot AI Hub on customer infrastructure using Docker and Docker Compose. Review the [system requirements](./requirements.md) before you start.

## 1. Release package overview

The release is split into four packages so that you only download the components required for an installation or update:

| Package | Images | Use case | Database impact |
| --- | ---: | --- | --- |
| `AI-Hub-v1.0.0-application-linux-amd64.tar.gz` | 2 | New installation with external infrastructure, or a combined Backend and Frontend update | Depends on the approved installation or upgrade schema plan |
| `AI-Hub-v1.0.0-backend-linux-amd64.tar.gz` | 1 | Backend-only update | May require an approved schema update |
| `AI-Hub-v1.0.0-frontend-linux-amd64.tar.gz` | 1 | Frontend-only update | No database change |
| `AI-Hub-v1.0.0-full-linux-amd64.tar.gz` | 5 | New offline installation with bundled PostgreSQL, Redis, and Qdrant | Creates a new PostgreSQL schema |

Use the **Application package** for Microsoft SQL Server. The **Full package** supports bundled PostgreSQL only and must not be used for SQL Server. Customer documents are not included in these release packages.

Always deliver the selected archive together with its matching `.tar.gz.sha256` file. Read the package-specific `release-notes.md` before installation or update.

## 2. Fresh installation

> Do not use this procedure for a Backend-only or Frontend-only package. Follow [Component updates](#4-component-updates) for those packages.

### Step 1: Extract the release package

The following example uses the Application package. Replace `application` with `full` when installing a Full package.

```bash
# Verify the delivered archive before extraction
sha256sum -c AI-Hub-v1.0.0-application-linux-amd64.tar.gz.sha256

# Extract the archive
tar -xzf AI-Hub-v1.0.0-application-linux-amd64.tar.gz

# Navigate to the release directory
cd AI-Hub-v1.0.0-application-linux-amd64
```

### Step 2: Verify package integrity

Verify every file inside the extracted package:

```bash
sha256sum -c checksums.sha256
```

### Step 3: Load Docker images

Load the packaged application and, for a Full package, infrastructure images into the local Docker daemon:

```bash
find images -type f -name '*.tar.gz' -print0 \
  | sort -z \
  | while IFS= read -r -d '' image_archive; do
      docker load --input "${image_archive}"
    done
```

### Step 4: Configure the runtime environment

Create the runtime environment file from the supplied template:

```bash
cp configuration/runtime.env.template configuration/runtime.env
chmod 600 configuration/runtime.env
```

Open `configuration/runtime.env` in a text editor. Replace every `CHANGE_ME` value. Do not commit or share the completed file. Validate it before starting services:

```bash
docker compose \
  --env-file configuration/runtime.env \
  -f deployment/compose.yaml \
  config --quiet
```

Do not share the output of `docker compose config`; rendered output may contain secrets.

#### Automated quick installation

After completing `configuration/runtime.env`, the packaged helper can perform the remaining validation, image loading, database setup, service startup, and health checks automatically:

```bash
# Fresh PostgreSQL/MySQL/MariaDB installation
./deployment/quick-install.sh

# New, empty MSSQL database only
./deployment/quick-install.sh --mssql-bootstrap
```

If Step 3 already loaded all images, add `--skip-load`. If an approved schema is already prepared or an upgrade plan handles it separately, use `--skip-database-setup`. Never combine that option with `--mssql-bootstrap`.

The remaining steps document the equivalent manual procedure for controlled operations and troubleshooting.

#### Database configuration

##### PostgreSQL (recommended)

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

#### Redis and vector store configuration

```dotenv
REDIS_URL=redis://:redis_password@redis.customer.internal:6379/0
QDRANT_URL=http://qdrant.customer.internal:6333
```

Use the customer hostnames, ports, credentials, TLS settings, and network rules for external services. Confirm that the Docker containers can reach each endpoint before running the installer.

#### akaBot Center authentication and security

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

Generate a unique 32-byte encryption key for each environment. Do not copy a fixed key from documentation:

```bash
openssl rand -hex 32
```

Store the generated 64-character hexadecimal value in `ENCRYPTION_KEY`. Set all other signing keys and required runtime values from the supplied template using the customer's approved secret-management process.

### Step 5: Start bundled infrastructure (Full package only)

Skip this step for an Application package that uses external services. For a Full package, start the bundled infrastructure and wait for it before preparing the schema:

```bash
docker compose \
  --env-file configuration/runtime.env \
  -f deployment/compose.yaml \
  up -d --wait postgres qdrant redis
```

### Step 6: Prepare the database schema

:::warning Database migration compatibility

* **PostgreSQL / MySQL / MariaDB:** The packaged baseline is for an empty database. It cannot upgrade a legacy schema.
* **Microsoft SQL Server:** Packaged migrations are not compatible with MSSQL. Do not run the `migrate` service for MSSQL.
* Before every approved upgrade, back up the relational database, Qdrant, and document storage, and confirm the supported migration path in the release notes.

:::

For **PostgreSQL / MySQL / MariaDB**, run:

```bash
docker compose \
  --env-file configuration/runtime.env \
  -f deployment/compose.yaml \
  run --rm migrate
```

For a **new, empty Microsoft SQL Server database only**, perform a one-time metadata bootstrap:

1. Set `DB_SYNCHRONIZE=true` in `configuration/runtime.env`.
2. Start only the Backend and wait for `/health/ready`:

   ```bash
   docker compose \
     --env-file configuration/runtime.env \
     -f deployment/compose.yaml \
     up -d ai-service

   curl --fail http://127.0.0.1:3000/health/ready
   ```

3. Set `DB_SYNCHRONIZE=false` immediately after the first successful bootstrap.
4. Recreate the Backend with the production-safe setting:

   ```bash
   docker compose \
     --env-file configuration/runtime.env \
     -f deployment/compose.yaml \
     up -d --force-recreate ai-service
   ```

Never enable schema synchronization against an existing or production MSSQL schema. MSSQL upgrades require the schema plan approved for that release.

### Step 7: Start AI Hub services

Start the Backend API and Frontend UI services:

```bash
docker compose \
  --env-file configuration/runtime.env \
  -f deployment/compose.yaml \
  up -d ai-service frontend
```

## 3. Post-installation verification

Verify that all containers are healthy and the API endpoints respond correctly:

```bash
# Check container status
docker compose --env-file configuration/runtime.env -f deployment/compose.yaml ps

# Verify Backend liveness and readiness
curl --fail http://127.0.0.1:3000/health
curl --fail http://127.0.0.1:3000/health/ready

# Verify the Frontend configuration endpoint
curl --fail http://127.0.0.1:3001/runtime-config.js
```

Complete an end-to-end acceptance check through akaBot Center: authentication, authorization, chat, configured AI providers, embedding, RAG citations, and enabled tools. The Frontend is served directly from its own origin; only API requests use the Center `/ai-service` gateway route.

## 4. Component updates

Never replace the existing customer's `configuration/runtime.env` with the template from an update package. Verify and extract the selected update package, load its image archives, then copy only the image value from `configuration/image-update.env` into the existing installation configuration.

Before a Backend or combined Application update, back up the relational database, Qdrant data, and document storage. Follow the source-to-target version compatibility and database procedure in `release-notes.md`.

### Backend-only update

Use `AI-Hub-v1.0.0-backend-linux-amd64.tar.gz`. After loading the packaged Backend image, update only `BACKEND_IMAGE` in the existing installation and run:

```bash
docker compose \
  --env-file configuration/runtime.env \
  -f deployment/compose.yaml \
  stop ai-service

# Run this only when release-notes.md explicitly approves the migration path.
# Never run this packaged migration for MSSQL.
docker compose \
  --env-file configuration/runtime.env \
  -f deployment/compose.yaml \
  run --rm migrate

docker compose \
  --env-file configuration/runtime.env \
  -f deployment/compose.yaml \
  up -d ai-service
```

For MSSQL, skip `migrate` and apply only the schema plan approved for the release. A Backend update must never enable `DB_SYNCHRONIZE` on an existing or production database.

### Frontend-only update

Use `AI-Hub-v1.0.0-frontend-linux-amd64.tar.gz`. After loading the Frontend image, update only `FRONTEND_IMAGE` in the existing installation and run:

```bash
docker compose \
  --env-file configuration/runtime.env \
  -f deployment/compose.yaml \
  up -d frontend
```

Do not run a database migration for a Frontend-only update.

### Combined Backend and Frontend update

Use `AI-Hub-v1.0.0-application-linux-amd64.tar.gz`. Load both images and apply only `BACKEND_IMAGE` and `FRONTEND_IMAGE` from `configuration/image-update.env` to the existing installation. Do not run the fresh-install helper for an upgrade. Apply the approved Backend schema procedure, then recreate both services:

```bash
docker compose \
  --env-file configuration/runtime.env \
  -f deployment/compose.yaml \
  up -d ai-service frontend
```

## 5. Service maintenance

### Stop services without deleting data

```bash
docker compose --env-file configuration/runtime.env -f deployment/compose.yaml down
```

Named volumes remain intact. Do not add `-v` unless permanent deletion of PostgreSQL, Qdrant, Redis, and uploaded documents is intentional.

### View logs

```bash
# View all logs
docker compose --env-file configuration/runtime.env -f deployment/compose.yaml logs -f

# View Backend logs only
docker compose --env-file configuration/runtime.env -f deployment/compose.yaml logs -f ai-service
```
