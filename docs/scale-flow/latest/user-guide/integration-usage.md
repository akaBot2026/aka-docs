---
id: integration-usage
title: Integration Usage
sidebar_label: Integration Usage
sidebar_position: 13
description: Practical guide for non-technical users to connect and manage integrations in ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Integration Usage

This guide helps non-technical users connect and manage integrations in ScaleFlow using the current UI.

## What this feature is for

Use **Integrations** to connect external tools so your team can:

- Bring CRM or spreadsheet data into workflows
- Let AI agents use provider actions safely
- Monitor connection health in one place

## Where to open integrations

There are 2 places in the left menu:

- **Integrations**: browse providers and start connecting

![Integration connection](/static/img/integration-connection.png)


- **Integration Connections**: see all existing connections across providers

![Integrations provider list](/static/img/list-integration.png)

## Permissions you need

- **View integrations**: `integration.view`
- **Create/update/disconnect/delete connections**: `integration.manage`

If you do not have the required permission, the page will show an access denied flow.

## Providers currently available in UI

From the current implementation, these providers can be connected now:

- **HubSpot**
- **Google Sheets**
- **Google Drive**

Other providers in the grid may show **Coming soon** and cannot be connected yet.

## Connect a new integration

1. Open **Integrations**.
2. Choose a provider card.
3. Click **Connect**.
4. On setup screen, review requested permissions.
5. Click:
   - **Continue on HubSpot** (HubSpot), or
   - **Continue with Google** (Google Sheets / Google Drive).

   ![Connect Google Drive flow](/static/img/connect-google-drive.png)

6. Complete authorization in provider popup.
7. Return to ScaleFlow and verify the connection appears in the provider page.

## Manage connections for one provider

Open one provider page (for example **Integrations -> HubSpot**) to:

- See all connections for that provider
- Click **Add connection** to create another connection
- Open a connection detail page by clicking the external-link icon

Each connection row also supports quick actions:

- **Test connection** (refresh icon)
- **Reconnect** (key icon, shown for OAuth2 when status is not active)
- **Disconnect** (unplug icon, shown when status is active)
- **Delete** (trash icon, with confirmation dialog)

## Manage all connections in one screen

Open **Integration Connections** to:

- Review all providers together in one list
- See status and key timestamps
- Jump to provider-specific management page using **Manage connection**

## Understand connection statuses

You may see these statuses:

- **Connected**
- **Draft**
- **Disconnected**
- **Error**
- **Reauth required**
- **Disabled**

If status is not healthy (for example **Error** or **Reauth required**), use **Reconnect** or **Test connection** first.

## What you can configure inside a connection

### HubSpot connection

Inside one HubSpot connection, there are 3 tabs:

- **Display**: rename connection and view read-only metadata (company, company ID, environment)
- **AI and Automation**: review actions and start AI agent setup
- **Data sync**:
  - trigger **Sync now** (manual sync)
  - review sync metrics and recent sync activity
  - open field mapping dialogs for contact and ticket data

### Google Sheets connection

Inside one Google Sheets connection:

- **Display**: rename connection and review linked Google account metadata
- **AI and Automation**: review available actions and recommended AI flow templates

### Google Drive connection

Inside one Google Drive connection:

- **Display**: rename connection and review linked Google account metadata
- **AI and Automation**: review available actions and recommended AI flow templates

## Quick troubleshooting

### I cannot see Integrations menu

- Your account may not include `integration.view`.
- Ask an admin to grant integration view permission.

### I can view but cannot connect or edit

- You likely have view-only access.
- Ask for `integration.manage` permission.

### My connection shows error or reauth required

1. Open the provider connection list.
2. Click **Reconnect**.
3. Complete provider authorization.
4. Click **Test connection** to verify.

### I clicked connect but no connection appears

- Refresh the provider page.
- Check whether popup authorization was completed fully.
- Try connecting again and watch for error notification.

## Best practices for non-technical teams

- Use clear connection names (example: `HubSpot Production`, `Google Drive - Marketing`).
- Keep production and sandbox connections separate when available.
- Validate new connections with **Test connection** right after setup.
- Remove unused connections to reduce confusion and permission risk.

![Delete connection confirmation dialog](/static/img/delete-connection.png)