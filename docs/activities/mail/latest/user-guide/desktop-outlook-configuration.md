---
id: desktop-outlook-configuration
title: "Setup Guide: Outlook Desktop App"
sidebar_label: "Setup Desktop Outlook"
sidebar_position: 1
description: "Prepare the Outlook desktop app on the Agent machine, collect the account and folder names, and enter them in the Outlook activities in akaBot Studio."
displayed_sidebar: activitiesSidebar
---
# Setup Guide: Outlook Desktop App

Use the Outlook activities when the Agent machine has the **Outlook desktop app** installed and signed in. The Agent works through that app, so you do **not** need any server name, port or password.

:::tip Using Exchange Server?
If Outlook is not installed on the Agent machine but your mailbox is on your company's own **Exchange Server**, use the **Exchange** activities instead (in akaBot Studio: **Mail** > **Exchange**). See [Setup Exchange (EWS)](/docs/activities/exchange/latest/user-guide/exchange-ews-configuration.md).
:::

---

## 1. Information You Need

| Information | Where to get it | Example |
|---|---|---|
| **Account** (optional) | Outlook > **File** > **Account Settings** (see Step 2.2). Leave empty to use the default account | `"bot.operator@company.com"` |
| **Mail Folder** | The folder name exactly as shown in Outlook's folder list. Use `\` for sub-folders | `"Inbox"` or `"Inbox\Invoices"` |

:::note
Folder names must match the language of Outlook. In a Japanese Outlook, for example, the Inbox is called `受信トレイ`.
:::

---

## 2. Prepare Outlook on the Agent Machine

### Step 2.1: Use Outlook Classic

The activities only work with **Outlook Classic** (the version with a **File** tab in the ribbon). They do not work with the **New Outlook for Windows** or Outlook on the web.

1. On the Agent machine, open **Outlook Classic** and sign in to the mailbox.
2. Check that you can send and receive email without any password prompt or setup wizard.

---

### Step 2.2: Find the Account Name

You need this only if Outlook has more than one email account.

1. In Outlook, click **File** > **Account Settings** > **Account Settings...**.
2. On the **Email** tab, copy the address in the **Name** column, for example `bot.user@company.com`.

You can also get the list automatically with **Get Outlook Accounts** (Step 3.1).

---

### Step 2.3: Stop the Security Pop-up

Outlook may show *"A program is trying to access email address information..."* and wait until someone clicks **Allow**. The Agent stops until then. To prevent this:

1. In Outlook, click **File** > **Options** > **Trust Center** > **Trust Center Settings...**.
2. Click **Programmatic Access**.
3. Check **Antivirus status**:
   - **Valid**: select **Warn me about suspicious activity when my antivirus software is inactive or out-of-date (recommended)**. No pop-up will appear.
   - **Invalid** or not shown: select **Never warn me about suspicious activity (not recommended)**.
4. Click **OK** twice.

If the options are grayed out, close Outlook, right-click the Outlook icon and choose **Run as administrator**, then try again. If they are still grayed out, the setting is controlled by your company – ask your IT team.

---

## 3. Enter the Information in akaBot Studio

All Outlook activities are under **Mail** > **Outlook** in the **Activities** panel.

### Step 3.1: Get Outlook Accounts ([`RCA.Activities.Mail.GetAccounts`](/docs/activities/mail/latest/activities/get-outlook-accounts.md))

- **Output Account Names**: create a variable, for example `accountList` (type `String[]`).
- Result: the email addresses of all accounts in Outlook.

---

### Step 3.2: Get Outlook Mail Messages ([`RCA.Activities.Mail.GetOutlookMailMessages`](/docs/activities/mail/latest/activities/get-outlook-mail-message.md))

| Property | Value |
|---|---|
| **Account** | `"bot.user@company.com"`, or leave empty for the default account |
| **Mail Folder** | `"Inbox"` (default), or a sub-folder such as `"Inbox\Processing"` |
| **Top** | `30` (default) – how many emails to read |
| **Only Unread Messages** | Selected by default – clear it to also read emails you have already opened |
| **Mark As Read** | Select to mark the emails as read |
| **Messages** | Create a variable, for example `mailList` (type `List<MailMessage>`) |

---

### Step 3.3: Send Outlook Mail ([`RCA.Activities.Mail.SendOutlookMail`](/docs/activities/mail/latest/activities/send-outlook-mail.md))

| Property | Value |
|---|---|
| **Account** | `"bot.user@company.com"`, or leave empty for the default account |
| **To** (required) | `"manager@company.com"` – separate several addresses with `;` |
| **Subject** | `"Report Completed"` |
| **Body** | `"The workflow completed successfully."` |
| **Is Body Html** | Select only if **Body** contains HTML |
| **Attachments** | Click `...` and add file paths |

---

### Step 3.4: Move Outlook Message ([`RCA.Activities.Mail.MoveOutlookMessage`](/docs/activities/mail/latest/activities/move-outlook-message.md))

| Property | Value |
|---|---|
| **Mail Message** | One email, for example the current item of a **For Each** loop over `mailList` |
| **Mail Folder** | The destination folder, for example `"Inbox\Completed"`. The folder must already exist in Outlook |

![workflow-desktop-outlook-configuration](/static/img/workflow-desktop-outlook-configuration.png)
