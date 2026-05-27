---
id: overview
title: Akabot Agent
sidebar_label: Overview
sidebar_position: 1
description: Deploy and run intelligent automation agents on desktops and servers.
displayed_sidebar: agentSidebar
---

# Akabot Agent

Akabot Agent is the runtime component that lives on a machine — desktop or server — and executes automation workflows dispatched by Akabot Center or triggered locally. Agents can run attended (alongside a human user) or unattended (fully automated, 24/7).

![Akabot Agent architecture: Center dispatches workflows over an encrypted, token-authenticated channel to attended, unattended, and testing agents.](/static/img/agent-architecture.svg)

## Agent types

| Type | Description |
|------|-------------|
| **Attended** | Runs on a user's desktop and can interact with the currently logged-in session. Triggered manually or by a hotkey. |
| **Unattended** | Runs on a server or VM without a human present. Triggered remotely by Akabot Center. |
| **Testing** | Used for local development and debugging. Not counted toward your license. |

## Key features

- **Lightweight runtime** — Minimal footprint; runs as a Windows service or user-mode process.
- **Secure channel** — All communication with Akabot Center is encrypted and token-authenticated.
- **Automatic updates** — Agents pull workflow package updates from Center before each run.
- **Local triggers** — Agents can be triggered by file system events, keyboard shortcuts, or REST calls.
- **Cognitive capabilities** — Integrates with Akabot Vision and AI models for intelligent document processing and decision-making.

## Getting started

| Step | Description |
|------|-------------|
| 1 | [Install Akabot Agent](/docs/agent/latest/installation/installation.md/) |
| 2 | Connect the agent to Akabot Center |
| 3 | Assign a workflow package to the agent |
| 4 | Trigger a run from Center or locally |

## Next steps

- [Building your first Agent](/docs/agent/latest/user-guide/how-to-use.md)
- [Connect Agent to Akabot Center](/docs/center/latest/installation/license-activation.md)
- [Schedule time to run Agent](/docs/center/latest/user-guide/how-to-use-by-function/operation-functions/automation/schedule.md)
