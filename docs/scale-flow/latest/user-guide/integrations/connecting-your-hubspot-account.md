---
id: connecting-your-hubspot-account
title:  HubSpot
sidebar_label: HubSpot
sidebar_position: 7
description: "Step-by-step guide to connect HubSpot with ScaleFlow and sync contacts and tickets, designed for non-technical users."
displayed_sidebar: scaleFlowSidebar
---

# Connect HubSpot to ScaleFlow

This guide shows you how to connect your **HubSpot** account to **ScaleFlow** so you can:

- Sync **contacts** and **tickets** from HubSpot into ScaleFlow.
- View full customer context while replying across channels (LINE, WhatsApp, Facebook, and more).
- Use AI and automation workflows powered by your CRM data.

You **do not need** to copy API keys or configure complex technical settings. Just sign in to HubSpot and authorize access.

---

## How HubSpot and ScaleFlow work together

- **HubSpot**: where you store customer information, pipeline stages, support tickets, and CRM interaction history.
- **ScaleFlow**: where you consolidate conversations from multiple channels, reply to customers, and coordinate with support teams or AI Assistant.

After connecting:

- Contacts and tickets from HubSpot can sync into ScaleFlow.
- Agents can see richer customer context when responding.
- You can build AI Agent workflows based on HubSpot data (for example: welcome new leads, send meeting reminders, re-engage older customers).


---

## Before you start

Prepare the following:

- An active **HubSpot** account with permission to authorize third-party apps (usually admin or super admin).
- A **ScaleFlow** account with integration management permission:
  - You can see the **Integrations** menu in the left sidebar.
  - You can click **Add connection** on the HubSpot page.
- Around **5-10 minutes** for the first-time setup.

> **Note:** HubSpot connection uses secure OAuth sign-in. You will be redirected to HubSpot to grant access, then sent back to ScaleFlow. No API key setup is required.

---

## Step overview

| Step | Where | What to do |
|------|-----------|--------------|
| 1 | ScaleFlow | Open the HubSpot page and click **Add connection** |
| 2 | ScaleFlow | Choose **Production** or **Sandbox** environment |
| 3 | HubSpot | Sign in and **authorize** ScaleFlow access |
| 4 | ScaleFlow | Verify the connection is **active** |
| 5 | ScaleFlow | (Optional) Configure data sync and field mapping |
| 6 | ScaleFlow | (Optional) Set up AI Agent with HubSpot data |

---

## Step 1: Open HubSpot in ScaleFlow

1. Sign in to **ScaleFlow**.
2. In the left menu, choose **Integrations**.
3. In the provider list, find **HubSpot** (orange HubSpot icon).
4. Click **HubSpot** to open its connection management page.
5. Click **Add connection**.


![Open Hubspot](/static/img/open-hubspot.png)

---

## Step 2: Choose connection environment

The setup page explains what ScaleFlow needs permission for:

- Read HubSpot account details (email, domain).
- View, create, and edit contact data.
- Sync contact data between HubSpot and ScaleFlow.

Choose **one of two environments**:

| Option | When to use |
|----------|--------------|
| **HubSpot Production** | Real customer and business data. *(Recommended for daily operations)* |
| **HubSpot Sandbox** | Test environment. Test data may still sync into ScaleFlow, so use only for experiments. |

> **Important:** If your company uses both Production and Sandbox, create **two separate connections** with clear names (for example: `HubSpot Production`, `HubSpot Sandbox`).
 
![Open Hubspot](/static/img/open-hubspot.png)


After selecting the environment, click **Continue on HubSpot**.

---

## Step 3: Sign in to HubSpot and grant permissions

1. Your browser opens a **HubSpot** popup window.
2. If needed, sign in with your HubSpot email and password.
3. HubSpot shows the requested permissions for ScaleFlow. Review and click **Connect** / **Authorize**.
4. After success, the popup closes and you return to ScaleFlow.

![Choose Hubspot](/static/img/choose-account-hubspot.png)
### If the popup is blocked

- Your browser may block new windows. Click the blocked-popup icon in the address bar and choose **Always allow**.
- Click **Continue on HubSpot** again.

### If you do not have authorization permission

Contact your HubSpot admin to get app installation/authorization permissions, or ask an admin to complete the authorization step for you.

---

## Step 4: Confirm the connection is successful

Go back to **Integrations -> HubSpot** in ScaleFlow.

The connection is successful when you see:

- A new connection row in the list (for example: `HubSpot Production`).
- Status shown as **Connected** (active/connected).
- HubSpot Company ID displayed under the connection name.

![Connect Hubspot Success](/static/img/connect-hubspot-success.png)

### Actions on a connection card

| Action | When to use |
|-----|--------------|
| **Test** | Verify ScaleFlow can still communicate with HubSpot. |
| **Reconnect** | Required when reauthorization is needed or access has expired. |
| **Disconnect** | Pause sync while keeping the configuration. |
| **Delete** | Permanently remove the connection (cannot be undone). |

Click the arrow icon or **Manage connection** to open the detail page.

---

## Step 5: Manage the connection - 3 main tabs

The HubSpot connection detail page has **3 tabs**:

1. **Display**
2. **AI and Automation**
3. **Data sync**

---

### Display tab

Here you can:

- **Rename the connection** (for example, from `HubSpot Production` to `HubSpot - Sales Team`) for easier identification.
- View read-only HubSpot information:
  - Synced company name
  - Company ID
  - Environment (Production or Sandbox)

> **Note:** Company metadata is sourced from HubSpot. When HubSpot updates, ScaleFlow reflects those updates automatically. No manual metadata editing is required.

![Display Hubspot](/static/img/display-hubspot.png)

---

### Data sync tab

This is where you monitor and control synchronization.

#### Sync overview

You will see:

- **Total synced contacts**
- **Total synced tickets**
- **Last sync time**

Need fresh data immediately from HubSpot? Click **Sync now**.

> **Note:** **Sync now** is available only when the connection status is **active**.

![Data sync Hubspot](/static/img/data-sync-hubspot.png)

#### Configure synchronization behavior

By default, ScaleFlow syncs using standard settings. You can fine-tune:

| Section | Meaning |
|-----|---------|
| **Customer data sync** | Select which customer fields (name, email, phone, etc.) sync from HubSpot to ScaleFlow. |
| **Ticket field mapping** | Define how HubSpot ticket fields (status, priority, custom fields) appear in ScaleFlow. |

Click **Configure** on each section to open the mapping dialog. Changes apply only to **new or updated** data after saving.

#### Recent sync activity

You can review recent sync runs, including start time, end time, number of records, and status (success/running/error).

If the list is empty, click **Sync now** once to start.


---

### AI and Automation tab

Once HubSpot is connected, you can use CRM data for AI workflows:

- **Get started** - create a new AI Agent attached to this HubSpot connection.
- **Suggested flows** - built-in ideas such as:
  - Lead classification follow-up
  - Meeting reminders
  - Customer lifecycle stage updates
  - Re-engagement campaigns
  - Post-demo follow-up
  - Customer handoff assistant

![Ai Automation Hubspot](/static/img/ai-automation-hubspot.png)

For AI Agent setup details, see [AI Agent](../scaleflow-ai/ai-agent-usage) and [AI Assistant](../scaleflow-ai/ai-assistant).

---

## Step 6: Use HubSpot in daily operations

Suggested workflow after the connection is stable:

1. A customer sends messages via LINE, WhatsApp, Facebook, or another channel -> messages appear in [Inbox](../operations/inbox-usage).
2. ScaleFlow matches or syncs contact data from HubSpot -> you can see email, CRM stage, and related history.
3. Staff reply to the customer; if follow-up tracking is needed, create a [Ticket](../operations/ticket-usage).
4. Updated contact data in HubSpot syncs back to ScaleFlow on schedule or when you click **Sync now**.

---

## Frequently asked questions

### I cannot see the Integrations menu or Add connection button

Your ScaleFlow account may not have integration management permission. Contact your company administrator.

### Should I choose Production or Sandbox?

- **Production** - for real customers and real business data.
- **Sandbox** - for testing only, to avoid syncing test data into your working environment.

### The status says Reauthorization required

HubSpot access may have expired or been revoked. Open HubSpot connections -> click **Reconnect** -> sign in to HubSpot and grant access again.

### I clicked Sync now but do not see contacts/tickets

Try this checklist:

1. Confirm the connection status is **active**.
2. Click **Test** on the connection card.
3. Open the **Data sync** tab and check whether recent activity shows errors.
4. Make sure the selected HubSpot account actually has data (at least a few contacts or tickets).
5. If still unresolved, contact your ScaleFlow administrator.

### Can I connect multiple HubSpot accounts?

Yes. Each click on **Add connection** creates a separate connection (for example, one Production and one Sandbox, or two different HubSpot portals).

### I want to temporarily stop syncing

Click **Disconnect** on the connection card. To remove permanently, use **Delete** (cannot be undone).

### Company information in ScaleFlow differs from HubSpot

HubSpot is the source of truth for company metadata. Verify values in HubSpot; ScaleFlow will update on the next sync.

---

## Recommended next steps

Once HubSpot is connected and stable:

1. Run **Sync now** for the first time to pull existing contacts and tickets.
2. (Optional) Configure **field mapping** if your team needs additional custom HubSpot fields.
3. Add FAQ/policy content to [Knowledge](../scaleflow-ai/knowledge-usage) to improve AI response quality.
4. Create an [AI Agent](../scaleflow-ai/ai-agent-usage) using one of the suggested flows in **AI and Automation**.
5. Combine with messaging channels such as [LINE](../channels/line/connecting-your-line-business-account) or [WhatsApp](../channels/whatsapp/connecting-your-whatsapp-business-api-account) to centralize conversations.

---

## References

- [HubSpot — Trang đăng nhập](https://app.hubspot.com/login)
- [ScaleFlow Integration Overview](./integration-usage)

In ScaleFlow, the HubSpot management page also includes a **View guide** link that points to this document.
