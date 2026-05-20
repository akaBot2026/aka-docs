---
id: requirements
title: "ハードウェアとソフトウェアの要件"
sidebar_label: "ハードウェアとソフトウェアの要件"
sidebar_position: 1
description: "ハードウェアとソフトウェアの要件に関するドキュメント。"
displayed_sidebar: centerSidebar
---
# ハードウェアとソフトウェアの要件

## **アカボット センター**

| エージェントの数 | CPU コア (最小 2 GHz) | RAM (GB) | ストレージ (GB) |
| --- | --- | --- | --- |
| \<20 | 8 | 16 | 400 |
| \<50 | 8 | 16 | 500 |
| \<100 | 8 | 16 | 600 |
| \<200 | 8 | 16 | 700 |
| \<250 | 8 | 16 | 800 |

## **データベースのハードウェア要件 (高可用性)**

| エージェントの数 | CPU コア (最小 2 GHz) | RAM (GB) | ストレージ (GB) |
| --- | --- | --- | --- |
| \<20 | 4 | 8 | 100 |
| \<50 | 4 | 8 | 200 |
| \<100 | 8 | 8 | 300 |
| \<200 | 8 | 8 | SSD400 |
| \<250 | 8 | 16 | SSD400 |

## **ソフトウェア要件**

|  | サポートされているバージョン |
| --- | --- |
| **オペレーティング システム (OS)** | Windows 10 |
|  | Windows10N |
|  | Windows 11 |
|  | Windowsサーバー2016 |
|  | Windowsサーバー2019 |
|  | Windowsサーバー2022 |
|  | Windowsサーバー2025 |
|  | Ubuntu 18、20、22、24 LTS |
|  | Red Hat Enterprise Linux (RHEL) 8、9、10 |
|  | Amazon Linux 2、2023、2025 |
|  | *Debian (11、12、13)、CentOS (7、8、9)、Fedora (40、41、42) \** |
| **データベース** | MySQL 8.x |
|  | Microsoft SQL Server (MSSQL) 2016、2017、2029、2022 |
|  | Oracle データベース (10g、11g、12c、18c、19c、21c、23c) |
|  | PostgreSQL 14、15、16 *(akaBot Center バージョン 4.x.x.x からのみサポート)* |
| **Web サーバー** | Tomcat 8.5.x (*akaBot Center 2.x、3.x*) Tomcat 9.0.x (*akaBot Center 2.x、3.x*) Tomcat 10.1.x (*akaBot Center 4.x*) Tomcat 11.0.x (*akaBot Center 4.x*) |
| **アクティブMQ** | ActiveMQ Classic 5.15.x 以降 |
| **ブラウザ** (センターの UI を使用するため) | Google Chrome バージョン 65 以降 |
| **JRE/JDK** | 最小: Java 8 |

> **注:** 運用環境では akaBot Center 専用のサーバーを使用することを強くお勧めします。サーバーを他のエンタープライズ アプリケーションと共有すると、リソースの競合が発生し、パフォーマンスが低下する可能性があります。

> **警告:** サポートされていないオペレーティング システムまたはソフトウェア バージョンで akaBot Center を実行することは推奨されません。予期しない動作やインストールの失敗が発生する可能性があります。
