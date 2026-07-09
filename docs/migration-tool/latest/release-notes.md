---
id: release-notes
title: Release Notes
sidebar_label: Release Notes
sidebar_position: 3
description: What's new, improved, and fixed in each version of akaBot Migration Tool.
displayed_sidebar: migrationToolSidebar
---

# Migration Tool — Release Notes

## v1.0.0.0

**Added**

* **Project Analyzer**
  - Support uploading compressed `.zip` files containing original RPA projects (UiPath or Windows Workflow Foundation XAML).
  - Analyze activity compatibility and auto-calculate compatibility metrics.
  - Automatically convert project activities to corresponding akaBot Studio activities.
  - Export converted projects as `.zip` packages compatible with akaBot Studio.

* **Dashboard**
  - Monitor total uploaded projects, estimated manual migration effort (Man-Days/Man-Months), and activity counts.
  - View interactive effort comparison bar charts and complexity scatter plots.

* **Project Details**
  - Deep-dive analysis on activity categories, linked applications, and reuse statistics.
  - Export comprehensive Excel analyzer reports.

* **Common Workflows**
  - View common reused workflow files across projects.
  - Evaluate raw vs. actual development effort to measure savings.

* **User Management**
  - User management interface for administrators to create, edit, deactivate, or delete user accounts.

* **Deployment Options**
  - Support for Windows and Linux environments.
  - Standalone JAR execution or containerized Docker deployment.
  - Support for PostgreSQL, MySQL, and zero-configuration embedded H2 database.
