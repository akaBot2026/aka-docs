---
id: desktop-outlook-configuration
title: "Setup Guide: Desktop Outlook (COM Interop)"
sidebar_label: "Setup Desktop Outlook"
sidebar_position: 1
description: "Step-by-step guide to prepare the local Microsoft Outlook desktop application and configure Outlook activities in akaBot Studio."
displayed_sidebar: activitiesSidebar
---
# Setup Guide: Desktop Outlook (COM Interop)

This guide covers how to set up the local Microsoft Outlook desktop application, configure security settings to avoid blocking prompts, locate account names, and configure Outlook activities in akaBot Studio.

---

## 1. What Information You Need

| Field in akaBot | Where to Get It | Format / Example |
|---|---|---|
| **Account** (Optional) | Outlook > File > Account Settings | Exact email string, e.g., `"bot.operator@company.com"`. Blank = default profile account. |
| **MailFolder** | Your Outlook folder hierarchy | String, e.g., `"Inbox"` or `"Inbox\Invoices"` |
| **Trust Center Setting** | Outlook > File > Options > Trust Center | Antivirus status: Valid, or "Never warn me..." |

---

## 2. Step-by-Step: Preparing Outlook on the Robot Machine

### Step 2.1: Verify Outlook Installation and Profile

> **Requires Outlook Classic.** The activities use the Outlook COM interface, which the **New Outlook for Windows** and Outlook on the web do not support. Use the desktop version that has a **File** tab in the ribbon.

1. On the robot machine, open **Outlook Classic** and sign in to the mailbox.
2. Confirm you can send and receive emails without password prompts or setup wizards.
3. Keep Outlook running while the automation executes.

---

### Step 2.2: How to Find the Exact Account Name

Needed only if Outlook has more than one account.

1. In Outlook, click **File** > **Account Settings** > **Account Settings...**.
2. On the **Email** tab, copy the address in the **Name** column (e.g., `bot.user@company.com`).

---

### Step 2.3: Configure Programmatic Access (Disable Security Warnings)

By default, Outlook may display a security popup: *"A program is trying to access email address information..."*, which pauses the bot indefinitely until a human clicks "Allow".

To prevent this:

1. In Outlook, click **File** > **Options**.
2. In the *Outlook Options* window, click **Trust Center** on the left menu.
3. Click the **Trust Center Settings...** button on the right.
4. On the left side of *Trust Center*, click **Programmatic Access**.
5. Check the **Antivirus status**:
   - If it displays **Valid**, select **Warn me about suspicious activity when my antivirus software is inactive or out-of-date (recommended)**. Outlook will automatically allow akaBot without showing popups.
   - If antivirus status is **Invalid** or unsupported, select **Never warn me about suspicious activity (not recommended)**.  
     *(Note: If these options are grayed out, close Outlook and restart it by right-clicking Outlook > **Run as administrator**).*
6. Click **OK**, then click **OK** again.

---

## 3. How to Configure in akaBot Studio

### Step 3.1: Get Outlook Account ([`RCA.Activities.Mail.GetAccounts`](/docs/activities/mail/latest/activities/outlook/get-outlook-accounts.md))

- Drag **Get Outlook Account Information** into your workflow.
- Properties:
  - **Account Names**: Create an output variable `accountList` (Type: `String[]`).
- Result: Returns all email accounts configured in the desktop client.

---

### Step 3.2: Get Outlook Mail Message ([`RCA.Activities.Mail.GetOutlookMailMessages`](/docs/activities/mail/latest/activities/outlook/get-outlook-mail-message.md))

- Drag **Get Outlook Mail Message** into your workflow.
- Properties:
  - **Account**: `"bot.user@company.com"` (Leave blank to use the default account).
  - **Mail Folder**: `"Inbox"` (Or a nested folder: `"Inbox\Processing"`).
  - **Top**: `30` (Number of emails to retrieve).
  - **Only Unread Messages**: Check to retrieve unread messages only.
  - **Mark as read**: Check to mark retrieved messages as read.
  - **Messages**: Output variable `mailList` (Type: `List<MailMessage>`).

---

### Step 3.3: Send Outlook Mail ([`RCA.Activities.Mail.SendOutlookMail`](/docs/activities/mail/latest/activities/outlook/send-outlook-mail.md))

- Drag **Send Outlook Mail** into your workflow.
- Properties:
  - **Account**: `"bot.user@company.com"` (Leave blank for the default account).
  - **To**: `"manager@company.com"` (Use `;` to separate multiple recipients).
  - **Subject**: `"Report Completed"`
  - **Body**: `"Automation workflow completed successfully."`
  - **Is Body Html**: Check if the body contains HTML tags.
  - **Attachments**: Add file paths to send with the email.

---

### Step 3.4: Move Outlook Message ([`RCA.Activities.Mail.MoveOutlookMessage`](/docs/activities/mail/latest/activities/outlook/move-outlook-message.md))

- Drag **Move Outlook Message** into your workflow.
- Properties:
  - **Mail message**: The `MailMessage` variable (e.g., from a `For Each` loop over `mailList`).
  - **Mail folder**: Target folder name, e.g., `"Inbox\Completed"`. *(The folder must already exist in Outlook)*.

![workflow-desktop-outlook-configuration](/static/img/workflow-desktop-outlook-configuration.png)

