---
id: release-notes
title: Release Notes
sidebar_label: Release Notes
sidebar_position: 2
description: What's new, improved, and fixed in each version of Akabot Integration Service.
displayed_sidebar: integrationServiceSidebar
---

# Integration Service — Release Notes

## v3.2.0 — April 2026

**New features**
- **Event mesh** — Publish events from one workflow and subscribe to them in another without direct coupling; supports fan-out to multiple subscribers.
- **GraphQL connector** — Query and mutate GraphQL APIs with full schema introspection and variable support.
- **Connection health checks** — Scheduled connectivity tests with automatic alerting and a health-status badge in Center.

**New connectors**
- Workday (HR & Finance)
- HubSpot (CRM)
- Twilio (SMS & Voice)
- Azure Service Bus (messaging)

**Improvements**
- OAuth 2.0 token refresh is now handled transparently with zero workflow interruptions.
- Payload transformation editor now supports JSONata v2 expressions with unit-test mode.
- Retry policy now configurable per connector: max attempts, delay strategy (fixed / exponential), and retryable error codes.

**Bug fixes**
- Fixed Salesforce connector losing the session token after exactly 2 hours due to an off-by-one in the expiry calculation.
- Resolved a deadlock when two workflows concurrently refreshed the same shared OAuth token.
- Fixed webhook events being dropped when the receiving workflow was already at max concurrency.

---

## v3.1.0 — January 2026

**New features**
- **Bi-directional sync templates** — Pre-built sync patterns for common pairs (SAP ↔ Salesforce, Jira ↔ ServiceNow) configurable with a wizard.
- **Request signing** — HMAC-SHA256 signing for outbound webhook calls so receiving systems can verify authenticity.
- **Connection groups** — Bundle multiple connections into a named group and reference the group in a workflow; swap environments by changing one setting.

**New connectors**
- Microsoft Dynamics 365
- Google Workspace (Sheets, Drive, Gmail)
- Slack

**Improvements**
- Connector catalog increased from 150 to 200+ applications.
- Log verbosity for integration calls is now configurable (errors only / summary / full payload).

**Bug fixes**
- Fixed an issue where SOAP connectors with WS-Security headers failed on .NET 8 runtime.
- Corrected field mapping for connectors using ISO 8601 date formats with timezone offsets.

---

## v3.0.0 — September 2025

**New features**
- **Integration Service v3 launch** — New low-code connectivity layer with a visual connector builder and centralized connection vault.
- **200+ pre-built connectors** — Out-of-the-box connectors for major ERP, CRM, ITSM, and cloud platforms.
- **Event triggers** — Start any workflow in response to an inbound webhook or polling event from a connected system.

**Breaking changes**
- Custom connector definitions from Integration Service v2 must be migrated to the new YAML connector spec.
- The v2 `InvokeConnector` activity is replaced by app-specific activities generated from connector schemas.

**Bug fixes**
- Resolved a connection pool exhaustion issue under sustained high-volume API call workloads.
- Fixed the SAP RFC connector failing silently when the RFC function module returned a non-zero return code.
