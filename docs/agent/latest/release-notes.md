---
id: release-notes
title: Release Notes
sidebar_label: Release Notes
sidebar_position: 2
description: What's new, improved, and fixed in each version of Akabot Agent.
displayed_sidebar: agentSidebar
---

# Akabot Agent — Release Notes

## v3.2.0 — April 2026

### New features
- **Tray icon quick-actions** — Start, stop, or check the status of any assigned workflow directly from the system tray.
- **Local REST trigger** — Expose a configurable local HTTP endpoint so desktop apps and scripts can start attended runs programmatically.
- **Cognitive task engine** — Built-in reasoning loop for agent workflows that need to plan and adapt steps at runtime.

### Improvements
- Reduced agent startup time from ~4 s to under 1 s on machines with SSDs.
- Heartbeat interval is now configurable (default 30 s, minimum 5 s).
- Improved reconnection logic when the Center connection drops during a run.

### Bug fixes
- Fixed an issue where the agent would not resume after waking from Windows sleep mode.
- Resolved a UI automation selector mismatch on applications with dynamic accessibility trees.
- Fixed attended trigger hotkey conflicting with Microsoft Teams global shortcuts.

---

## v3.1.0 — January 2026

### New features
- **Attended trigger assistant** — A floating bubble shows pending attended tasks and one-click run buttons.
- **Offline package cache** — Agents can now run the last-synced package version when Center is unreachable.
- **Per-process credentials** — Each process can reference its own Credential Store entry without sharing.

### Improvements
- Package download from Center now uses delta sync — only changed files are transferred.
- Logs are now written asynchronously to avoid blocking activity execution on slow disks.

### Bug fixes
- Fixed a file lock preventing log rotation on agents running 24/7 unattended workflows.
- Corrected an edge case where the agent registered duplicate machine names after an OS hostname change.

---

## v3.0.0 — September 2025

### New features
- **Agent 3.0 service architecture** — Agent now installs as a proper Windows service with optional user-session impersonation.
- **Secure element storage** — Sensitive UI selectors can be encrypted and stored in the platform credential vault.
- **Run history panel** — Embedded view of the last 50 local executions with status, duration, and log access.

### Breaking changes
- Agent v2.x cannot connect to Center v3.0. Both must be upgraded together.
- The legacy `.exe` launcher is replaced by the Windows service installer.

### Bug fixes
- Resolved intermittent failures in the SAP GUI automation driver under high DPI settings.
- Fixed a crash when a workflow attempted to access a network share during agent initialization.