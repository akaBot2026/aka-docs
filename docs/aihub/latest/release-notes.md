---
id: release-notes
title: Release Notes
sidebar_label: Release Notes
sidebar_position: 2
description: What's new, improved, and fixed in each version of Akabot AI Hub.
displayed_sidebar: aiHubSidebar
---

# Akabot AI Hub — Release Notes

## v1.0.0

Build date: Jul 31, 2026

Support platform: Linux AMD64

This release is distributed as separate packages so customers only need to download the application component required for their installation or update. Customer documents are **not** included in the application packages and are distributed as a separate archive.

### 1. Application Package

| | |
|---|---|
| **File** | `AI-Hub-v1.0.0-application-linux-amd64.tar.gz` |
| **Checksum** | `AI-Hub-v1.0.0-application-linux-amd64.tar.gz.sha256` |

#### Purpose

- New installation using customer-managed external infrastructure.
- Complete application update when both Backend and Frontend are required.
- Recommended package for Microsoft SQL Server deployments.

#### Includes

- AI Hub Backend Docker image.
- AI Hub Frontend Docker image.
- Docker Compose configuration.
- Runtime environment template.
- Quick installation helper.
- Package-specific release notes.

#### Does Not Include

- PostgreSQL, Redis, or Qdrant Docker images.
- Customer documentation.

#### Supported External Databases

- PostgreSQL
- MySQL
- MariaDB
- Microsoft SQL Server

#### Installation Commands

**New PostgreSQL, MySQL, or MariaDB installation:**

```bash
./deployment/quick-install.sh
```

**New and empty Microsoft SQL Server database only:**

```bash
./deployment/quick-install.sh --mssql-bootstrap
```

**Existing database with an approved, prepared schema:**

```bash
./deployment/quick-install.sh --skip-database-setup
```

> ⚠️ **Important MSSQL warning:** Never use `--mssql-bootstrap` against an existing or production database.

---

### 2. Backend Update Package

| | |
|---|---|
| **File** | `AI-Hub-v1.0.0-backend-linux-amd64.tar.gz` |
| **Checksum** | `AI-Hub-v1.0.0-backend-linux-amd64.tar.gz.sha256` |

#### Purpose

- Update only the AI Hub Backend.
- Avoid downloading the Frontend and infrastructure images again.

#### Includes

- AI Hub Backend Docker image only.
- Image update configuration.
- Deployment instructions and package-specific release notes.

#### Database Impact

- A Backend update may require a database schema update.
- Back up the database before applying an approved schema change.
- Follow the release-specific database compatibility and migration plan.
- Do **not** run the fresh-install procedure for this package.

---

### 3. Frontend Update Package

| | |
|---|---|
| **File** | `AI-Hub-v1.0.0-frontend-linux-amd64.tar.gz` |
| **Checksum** | `AI-Hub-v1.0.0-frontend-linux-amd64.tar.gz.sha256` |

#### Purpose

- Update only the AI Hub Frontend.
- Smallest update package when no Backend change is required.

#### Includes

- AI Hub Frontend Docker image only.
- Image update configuration.
- Deployment instructions and package-specific release notes.

#### Database Impact

- No database schema change.
- Do **not** run database migrations for a Frontend-only update.

---

### 4. Full Offline Package

| | |
|---|---|
| **File** | `AI-Hub-v1.0.0-full-linux-amd64.tar.gz` |
| **Checksum** | `AI-Hub-v1.0.0-full-linux-amd64.tar.gz.sha256` |

#### Purpose

- New, completely offline installation using bundled infrastructure.

#### Includes

- AI Hub Backend Docker image.
- AI Hub Frontend Docker image.
- PostgreSQL Docker image.
- Redis Docker image.
- Qdrant Docker image.
- Docker Compose configuration and quick installation helper.
- Package-specific release notes.

#### Database Support

- Bundled PostgreSQL only.

> ⚠️ **Important restriction:** Do not use this package for Microsoft SQL Server deployments.

#### Installation Command

```bash
./deployment/quick-install.sh
```

---

### 5. Documentation Package

| | |
|---|---|
| **File** | `AI-Hub-v1.0.0-docs.tar.gz` |
| **Checksum** | `AI-Hub-v1.0.0-docs.tar.gz.sha256` |

#### Purpose

- Customer installation, operation, and user documentation.
- Distributed separately from application and update packages.

---

### Package Selection Summary

| Customer scenario | Package to deliver |
|---|---|
| New installation with Microsoft SQL Server | Application |
| New installation with external database/services | Application |
| New fully offline installation with PostgreSQL | Full offline |
| Backend-only application update | Backend update |
| Frontend-only application update | Frontend update |
| Backend and Frontend update | Application |
| Documentation only | Documentation |

---

### Delivery and Integrity Verification

Always deliver the selected `.tar.gz` file together with its matching `.tar.gz.sha256` file.

**Verify the archive before extraction:**

```bash
sha256sum -c <package-name>.tar.gz.sha256
```

**After extraction, verify all files inside the package:**

```bash
cd <extracted-package-directory>
sha256sum -c checksums.sha256
```

> 📖 Read `release-notes.md` and `deployment/README.md` inside the selected package before installation or update.
