---
id: management
title: "Management"
sidebar_label: "Management"
sidebar_position: 5
description: "Platform administration: AI connections, models, default tools, governance, usage limits, the system Channel pack, access audit, and operations in AI Hub."
displayed_sidebar: aiHubSidebar
---

# Management

> **⚠️ Admin only:** The **Management** module controls platform-wide infrastructure, AI models, governance, system logs, and security controls. Access is restricted to **Platform Administrators** with platform scope (`platform.manage`). Non-admin users (Business Users, Knowledge Editors, Channel Builders/Publishers) will not see this module.


If you are a Channel builder or business user, see [Channels](./channels.md) or [Chat](./chat.md) instead.

## Management setup order

For a new environment, use this order:

1. Create and test at least one AI provider connection.
2. Enable at least one chat model.
3. Enable at least one embedding model.
4. Review and enable the required default tools.
5. Review governance defaults and limits.
6. Install and manually activate the system Channel pack only when approved.
7. Configure access and run acceptance tests.

The management hub may hide dependent functions until required AI setup is complete.

## Add an AI connection

**Prerequisites**

- Platform Administrator permission (`platform.manage`).
- Approved endpoint and credential stored through the customer secret process.

**Procedure**

1. Open **Management → Connections**.

![AI Connections overview showing configured providers with status indicators and the full provider catalog for setup](/static/img/fig-14-admin-ai-providers.png)

2. Select a provider from the catalog.

![AI provider Connections tab showing empty state with Add connection button and Round robin load balancing option](/static/img/fig-14-admin-ai-provider-providers.png)

3. Select **Add connection**.
4. Enter a descriptive label, API endpoint if required, credential, and priority. Connections are system-scoped by default.

![Add connection panel for Google Gemini showing API key, connection name, Base URL, priority, routing, and Active settings](/static/img/fig-14-admin-ai-provider-add.png)

5. Save.
6. Select **Test**.
7. Confirm the connection shows **Active**.

Do not create every provider merely because it appears in the catalog. Configure only approved providers needed by the environment.

## Add or enable models

**Procedure**

1. Open the configured provider.
2. Select **Add model**.

![Add model dialog showing a model suggested by the active connection with auto-detected model type](/static/img/fig-14-admin-ai-provider-model.png)

3. Use model suggestions when discovery succeeds, or enter the exact model ID manually.
4. Review the auto-inferred model capability (Chat, Embedding, or Vision) detected by the system based on the Model ID.
5. Save and enable the model.
6. Verify the model status is **Ready**.

![Provider Models tab showing enabled Chat and Embedding models with Ready status, working dimensions, and test capability](/static/img/fig-14-admin-ai-provider-model-ready.png)

A suggested model is not automatically approved for production. Verify provider entitlement, capability, data policy, context limit, and cost.

## Rotate a provider credential

**Procedure**

1. Obtain the new credential through the approved process.
2. Open the connection and select **Edit**.
3. Replace the credential without exposing it in notes or screenshots.
4. Save and test.
5. Run a controlled model request.
6. Revoke the old provider credential after validation.
7. Confirm the audit entry.

Coordinate rotation when a connection serves multiple Channels.

## Manage default tools

This release provides only the default tools built into Akabot Center.

**Prerequisites**

- Platform Administrator permission (`platform.manage`).
- Approval to change tool availability or execution policy across the platform.

**Procedure**

1. Open **Management → Tools**.

![Management Tools page showing 39 active tools across categories including Monitoring, Automation, Agent, Transaction Queues, and Administration](/static/img/fig-16-admin-tools.png)

2. Review the **Active Tools** and **Center Tools** totals.
3. Search for a tool or filter the list by category and status when required.
4. Expand a category and select a tool to open its details.
5. Turn the tool on or off. Disabling a tool prevents Channels from executing it.
6. Under **Configuration**, review the approval rule and advanced timeout setting, then select **Save settings** if you make a change.
7. Open **Test**, enter the required inputs, and select **Run test**.
8. Confirm that the test status is **Succeeded**, or resolve any permission, configuration, timeout, or service error shown by the test result.

Use the category action menu to turn all eligible tools in that category on or off. Review the confirmation carefully because the change applies immediately across the system.

Write-capable tools may be locked while the governance tool mode is set to **Safe**. Change the governance policy only through the approved process; do not loosen it solely to bypass a blocked test.

Before disabling a tool, identify the Channel drafts and active versions that use it. A disabled tool remains referenced by those Channels but cannot be executed until it is enabled again.

## Configure governance defaults

Governance may include:

- allowed chat models;
- default embedding model;
- default tool permission mode;
- maximum file size and page count;
- OCR service;
- explicit deny rules;
- retention and cleanup settings.

**Procedure**

1. Open **Management → Limits & Data → AI Policies**.

![Limits and Data AI Policies tab showing allowed chat model settings, default semantic search model, tool permission level, and max upload size](/static/img/fig-17-admin-policies.png)

2. Identify affected organizations, principals, Channels, and knowledge bases.
3. Record the current value.
4. Enter the approved new value.
5. Save and confirm the audit event.
6. Test at least one affected and one unaffected target.
7. Monitor denial/error rates.

An explicit deny rule takes precedence over a general default. Removing a deny rule may immediately make the blocked capability available again.


## Configure usage limits

Limits may apply to an organization, principal, or Channel.

**Procedure**

1. Open **Management → Limits & Data → Usage Limits**.
2. Select the subject type.
3. Select the exact subject.
4. Enter the approved monthly token/call limit.
5. Save and verify the displayed period and remaining value.

Removing a limit may mean the target becomes unlimited unless a broader limit still applies. Confirm policy before clearing a value.

## Install the system Channel pack

The system Channel pack (`v1`) delivers pre-configured, platform-managed Channels with built-in knowledge bases that are **ready to use immediately** upon installation and activation:

- **Akabot Center Assistant** (`aka-center-assistant`): Primary active platform Channel in the Chat UI, grounded in Center and Support documentation and integrated with the built-in read-only Akabot Center tool catalog.
- **Akabot Expression Generator** (`generate-expression-code`): Pre-configured assistant that generates akaBot developer expressions and schema code via machine endpoints.
- **AkaNinja** (`akaninja`): Comprehensive AI assistant pre-loaded with official akaBot knowledge bases (covering akaBot Activities, Agent, Center, Studio, Support, and developer guides).

These pre-packaged assets include pre-processed RAG knowledge documents, localized metadata, and ready-to-use API endpoints — enabling immediate deployment without building custom Channels or Knowledge Bases from scratch.

**Procedure**

1. Complete AI setup with a ready chat model and embedding model.
2. Open **Management → System Channel pack**.

![System Channel Pack page showing APPLIED status, version 1.0.0, with Install pack and Activate manually buttons](/static/img/fig-15-admin-system-pack.png)

3. Review package status and version (`v1.0.0`).
4. Select **Install pack** and confirm.
5. Review the installed platform Channel drafts.
6. Select the target chat and embedding models for activation.
7. Type the required confirmation phrase exactly when prompted.
8. Activate the pack manually.
9. Grant access to approved principals or user groups.
10. Verify immediate availability via Chat UI or REST API endpoint (`POST /api/v1/agent-endpoints/<endpoint-key>/invocations`).

## Audit directory and effective access

Use **Directory & Access Audit** to search users, Agents, and Agent Groups synchronized from Akabot Center and to understand Channel assignments.

**Procedure**

1. Open **Directory & Access Audit**.

![Directory and Access Audit page showing Agent list with Check access panel displaying an access denial decision](/static/img/fig-18-admin-access-control.png)

2. Select the principal you want to check.
3. Select the Channel or resource.
4. Review direct and inherited assignments.
5. Review the displayed reason when access is denied.
6. Change the grant at its actual source.
7. Recheck effective access after synchronization.

During Center synchronization, some administrative actions may be temporarily unavailable. Wait for synchronization rather than creating duplicate grants.

## Monitor run history

Run history may include Web Chat, API/AkaNinja, draft test, Pipeline, and scheduled execution.

Filter by mode, status, Channel, or time. Common states:

| State | Meaning |
|---|---|
| Accepted | Request was accepted by the service |
| Queued | Waiting for a worker or capacity |
| Running | Execution is active |
| Waiting | Waiting for approval or an external event |
| Success | Execution completed successfully |
| Error | Execution failed |
| Cancelled | Execution was cancelled |
| Timed out | Allowed execution time expired |

![Run History AI activity tab showing successful web chat and test run executions with Channel, caller, execution source, and token usage details](/static/img/fig-19-admin-monitoring.png)

Open a run to review caller, Channel/version, duration, token use, result/failure, and timeline. Historical trace data may be unavailable when tracing was disabled or retention expired.

## Review audit logs

Audit logs record administrative changes such as provider-key changes, quota updates, access/deployment changes, principal suspension, knowledge-base deletion, and governance changes.

**Procedure**

1. Open **Management → Run history → System logs**.

![System logs tab showing administrative change entries with Type, Performed by, Affected item columns and date range filters](/static/img/fig-20-admin-audit-logs.png)

2. Select a date range.
3. Filter by type or actor.
4. Open the event details.
5. Compare actor, target, time, and payload with the approved change or incident record.

Audit data helps establish what changed; it does not replace business approval records.

## Use emergency controls

Emergency controls require level-4 authority and must follow the incident-response process.

To suspend an organization or principal, follow the incident-response process:

**Procedure**

1. Confirm the incident commander/authorizer.
2. Select the exact target.
3. Enter a meaningful reason.
4. Type the required confirmation phrase.
5. Submit and verify that traffic is blocked.
6. Record the action in the incident timeline.

To restore activity, confirm remediation and authorization, use **Restore activity**, then monitor new runs. Do not leave a suspension without an owner and review time.

## Where to go next

- New environment? Follow the setup order above, then hand off to Channel builders — see [Channels](./channels.md).
- Reviewing who can access what? See [Getting started: Roles and permissions](./getting-started.md#step-3-know-what-youre-allowed-to-do).
