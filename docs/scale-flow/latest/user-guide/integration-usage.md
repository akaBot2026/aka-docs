---
id: integration-usage
title: Integration Usage
sidebar_label: Integration Usage
sidebar_position: 13
description: Beginner-friendly guide to connect external business tools to ScaleFlow.
displayed_sidebar: scaleFlowSidebar
---

# Integration Usage

Integrations connect ScaleFlow to other tools your business already uses, such as HubSpot, Shopify, Google Drive, and Google Sheets.

Use integrations when you want ScaleFlow, [Knowledge](./knowledge-usage), or [AI Agent](./ai-agent-usage) to work with information stored outside ScaleFlow.

## What integrations are used for

- Connect customer data from HubSpot or e-commerce data from Shopify.
- Use files from Google Drive as Knowledge.
- Work with data in Google Sheets.
- Let approved AI Agents use selected connected tools.
- Check whether a connection is healthy.

Example: Your company stores support documents in Google Drive. Connect Google Drive, create Knowledge from selected files, then let Smart Assistant answer customers using that information.

## Where to open integrations

There are 2 places in the left menu:

- **Integrations**: browse providers and start connecting

![Integration connection](/static/img/integration-connection.png)


- **Integration Connections**: see all existing connections across providers

![Integrations provider list](/static/img/list-integration.png)

If you cannot connect or edit integrations, ask your admin to grant integration management access.

## Providers currently available in UI

- **HubSpot**
- **Shopify**
- **Google Sheets**
- **Google Drive**

Other providers in the grid may show **Coming soon** and cannot be connected yet.

## Connect a new integration

1. Open **Integrations**.
2. Choose a provider card.
3. Click **Connect**.
4. On setup screen, review requested permissions.
5. Click:
   - **Continue on HubSpot** (HubSpot),
   - **Continue with Google** (Google Sheets / Google Drive), or
   - Enter credentials and click **Connect** (Shopify).

   ![Connect Google Drive flow](/static/img/connect-google-drive.png)

6. Complete authorization in provider popup.
7. Return to ScaleFlow and verify the connection appears in the provider page.

Authorization means you approve ScaleFlow to connect to that tool. Only approve accounts that belong to your business.

## Manage connections for one provider

Open one provider page (for example **Integrations -> HubSpot**) to:

- See all connections for that provider
- Click **Add connection** to create another connection
- Open a connection detail page by clicking the external-link icon

Each connection row also supports quick actions:

- **Test connection** (refresh icon)
- **Reconnect** (key icon, shown when ScaleFlow needs you to sign in again)
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

## What you can do with each provider

### HubSpot connection

Use HubSpot when your sales or support team stores customer records in HubSpot.

Inside one HubSpot connection, you can rename the connection, review available AI actions, and sync customer or ticket data when your setup supports it.

### Shopify connection

Use Shopify when your business uses Shopify for e-commerce.

For a detailed guide on how to get the required API credentials (Client ID, Client Secret, and Store URL) and connect the integration, refer to the [Shopify Integration](./shopify-integration) guide.

### Google Sheets connection

Use Google Sheets when your team manages simple tables, lead lists, price tables, or tracking sheets.

Inside one Google Sheets connection, you can review the linked account and available automation ideas.

### Google Drive connection

Use Google Drive when your team stores documents that AI should read.

After connecting, you can create [Knowledge](./knowledge-usage) from selected Drive files.

## Real-world workflow

1. Admin connects Google Drive in Integrations.
2. Admin creates a Knowledge base from the company's FAQ folder.
3. Admin connects that Knowledge to an AI Agent.
4. Smart Assistant answers customers in Inbox using the FAQ.
5. When the FAQ changes, the admin syncs Knowledge again.

## What to read next

- Want AI to read Google Drive files? Go to [Knowledge Usage](./knowledge-usage).
- Want AI to use connected tools? Go to [AI Agent Usage](./ai-agent-usage).
- Want AI to answer customers in Inbox? Go to [AI Assistant](./ai-assistant).

## Quick troubleshooting

### I cannot see Integrations menu

- Ask an admin to grant integration view access.

### I can view but cannot connect or edit

- You likely have view-only access. Ask for integration management access.

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
- Validate new connections with **Test connection** right after setup.
- Remove unused connections to reduce confusion and permission risk.
- Connect only business accounts that your organization approves.

![Delete connection confirmation dialog](/static/img/delete-connection.png)