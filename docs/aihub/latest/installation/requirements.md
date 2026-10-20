---
id: requirements
title: "System Requirements"
sidebar_label: "System Requirements"
sidebar_position: 1
description: "Hardware, software, database, and network requirements for akaBot AI Hub."
displayed_sidebar: aiHubSidebar
---

# System Requirements

Review these requirements before installing akaBot AI Hub. For the installation procedure, select [Linux](./installation.md) or [Windows](./installation-on-windows.md).

## Hardware requirements

The following capacity is recommended for a standard installation:

| Resource | Recommended capacity |
| --- | --- |
| CPU | 4 cores or more |
| Memory | 12 GB RAM or more |
| Storage | 30 GB of free disk space or more |

Increase capacity for large document collections, high request volume, or additional AI workloads.

## Supported operating systems

| Platform | Supported version |
| --- | --- |
| Linux | Ubuntu 20.04+, RHEL 8+, or Debian 11+ |
| Windows | Windows 10/11 64-bit with current security updates |
| macOS | Supported for non-production or evaluation environments |

On Windows, Docker must run in Linux-container mode. Windows-container mode is not supported because the release contains Linux container images.

## Container runtime

| Component | Requirement |
| --- | --- |
| Docker Engine | Version 24.0 or later |
| Docker Compose | Compose v2.20 or later, available through `docker compose` |
| PowerShell (Windows only) | Windows PowerShell 5.1+ or PowerShell 7+ |

Confirm that the account performing the installation can run Docker commands.

## Data services

AI Hub requires the following services. They can be customer-managed services used with the **Application package**, or bundled services supplied by the **Full package** where noted.

| Service | Supported version | Notes |
| --- | --- | --- |
| PostgreSQL | 16+ | Recommended; bundled with the Full package |
| MySQL | 8.0+ | External service only |
| MariaDB | 10.6+ | External service only |
| Microsoft SQL Server | 2019+ | External service only; use the Application package |
| Redis | 7.0+ | External or bundled |
| Qdrant | 1.12+ | External or bundled |

The Full package supports bundled PostgreSQL only. Do not use it for Microsoft SQL Server.

## Network and integration requirements

Before installation, confirm that:

* Docker containers can reach the configured relational database, Redis, and Qdrant endpoints.
* AI Hub can reach akaBot Center through `CENTER_BASE_URL`.
* akaBot Center can reach the public AI Hub route configured in `AI_SERVICE_PUBLIC_BASE_URL`.
* Ports `3000` and `3001` are available on the Docker host unless the deployment configuration maps them differently.
* Customer DNS, TLS certificates, firewall rules, and proxy settings are ready for production endpoints.

## Installation package

Choose the package that matches the deployment:

* Use the **Application package** when PostgreSQL/MySQL/MariaDB/Microsoft SQL Server, Redis, and Qdrant are already available.
* Use the **Full package** only for a new self-contained installation that should provision PostgreSQL, Redis, and Qdrant on the host.
* Use the **Backend** or **Frontend** package only for a component update, not for a fresh installation.

Read the package-specific `release-notes.md` before installation or update.
