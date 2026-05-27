---
id: overview
title: Akabot Center
sidebar_label: Overview
sidebar_position: 1
description: Orchestrate, schedule, and monitor all your automation robots from one central place.
displayed_sidebar: centerSidebar
---

# Akabot Center

Akabot Center is the enterprise orchestration server — the single control plane for deploying, scheduling, and monitoring every robot and workflow in your organization. Operations teams use Center to manage robot fleets, handle queued work items, and track execution results in real time.

## Key features

- **Robot management** — Register attended and unattended robots, assign roles, and monitor heartbeat status.
- **Process orchestration** — Deploy published workflows to any robot or robot group on demand or on a schedule.
- **Work queues** — Feed structured data items into queues and let robots process them in parallel.
- **Scheduling** — Define cron-based or event-triggered schedules without writing any code.
- **Monitoring & alerts** — Real-time execution logs, success/failure dashboards, and configurable email alerts.
- **Role-based access control** — Manage users, teams, and permissions across environments (Dev, UAT, Prod).

## Architecture overview

```
Akabot Studio  ──publish──▶  Akabot Center  ──dispatch──▶  Akabot Agent(s)
                                    │
                             Work Queues / Schedules
```

## Getting started

| Step | Description |
|------|-------------|
| 1 | [Install Akabot Center server](/docs/center/latest/installation/license-activation.md) |
| 2 | Create an environment and add robot machines |
| 3 | Publish a workflow from Akabot Studio |
| 4 | Create a schedule or trigger a manual run |
| 5 | Monitor results on the dashboard |

## Next steps

- [Connect Agent to Akabot Center](../../agent/latest/user-guide/how-to-use.md)
- [Schedule time to run Agent](user-guide/how-to-use-by-function/operation-functions/automation/schedule.md)
- [Admin & Ops guide](user-guide/how-to-use-by-function/operation-functions/administration/user-management.md)
