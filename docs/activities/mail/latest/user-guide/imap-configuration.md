---
id: imap-configuration
title: "Setup Guide: IMAP (Read Email)"
sidebar_label: "Setup IMAP"
sidebar_position: 2
description: "Collect the information needed to read email with IMAP and enter it in the IMAP activities in akaBot Studio."
displayed_sidebar: activitiesSidebar
---
# Setup Guide: IMAP (Read Email)

Use the IMAP activities when the Agent needs to **read** emails from a mailbox such as Gmail, Yahoo Mail or a company mail server.

This guide helps you **collect the information** the activities need and shows **where to enter it** in akaBot Studio. You do not need to install or configure a mail server.

:::note
For **Microsoft 365 / Outlook.com** mailboxes, use the [Office 365 package](/docs/activities/office365/latest/introduction.md) instead. Microsoft no longer accepts a normal password for IMAP.
:::

:::tip Using Exchange Server?
If your mailbox is on your company's own **Exchange Server**, use the **Exchange** activities instead (in akaBot Studio: **Mail** > **Exchange**). See [Setup Exchange (EWS)](/docs/activities/exchange/latest/user-guide/exchange-ews-configuration.md).
:::

---

## 1. Information You Need

Fill in this checklist before you open akaBot Studio.

| Information | Where to get it | Example (Gmail) |
|---|---|---|
| **Server** | Table in [section 3](#3-server-and-port-reference), or ask your IT team | `"imap.gmail.com"` |
| **Port** | Table in [section 3](#3-server-and-port-reference), or ask your IT team | `993` |
| **Email** | The mailbox address the Agent reads | `"bot.account@gmail.com"` |
| **Password** | An **App Password** (see [section 2](#2-get-the-information)), or the account password if your provider allows it | 16 letters, no spaces |
| **Mail Folder** | The folder name exactly as shown in the mailbox | `"Inbox"` |

---

## 2. Get the Information

### Gmail

You only change settings in **your own Gmail account**.

**A. Turn on IMAP**

1. Open [Gmail](https://mail.google.com).
2. Click the **gear icon** (top right) > **See all settings**.
3. Open the **Forwarding and POP/IMAP** tab.
4. In **IMAP access**, select **Enable IMAP**.
5. Click **Save Changes**.

![Gmail settings – Forwarding and POP/IMAP tab](/static/img/setting-gmail.png)

*Gmail **Settings** > **Forwarding and POP/IMAP** tab. The **IMAP access** section is at the bottom.*

**B. Create an App Password**

Gmail does not accept your normal password from apps such as the akaBot Agent. Create a special password for akaBot:

1. Open [Google Account](https://myaccount.google.com) > **Security**.
2. Make sure **2-Step Verification** is **On** (App Passwords only appear when it is on).

   ![Google Account – 2-Step Verification is On](/static/img/gmail-2step-verify.png)

   *Google Account > **Security & sign-in**. **2-Step Verification** must show **On**.*

3. Open [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).
4. Type a name, for example `akaBot`, and click **Create**.
5. Copy the 16-letter password and **remove the spaces**. This is the value for **Password** in akaBot.

   ![Generated app password dialog](/static/img/setting-gmail-passwordapp.png)

   *The App Password is shown only once. Copy it before you click **Done**.*

**C. Create the destination folder (label)**

Step 4.2 moves emails to a folder named `Processed`, which must exist before the workflow runs. In Gmail, folders are called **labels**:

1. In Gmail, click **+** next to **Labels** in the left menu.
2. Type `Processed` and click **Create**.

### Company mail server

Your IT team manages the server. Send them this request:

> Please send me the IMAP settings for the mailbox `<address>`: server name, port, security type (SSL or STARTTLS), and whether I should use my normal password or an App Password.

### Other providers (Yahoo, iCloud, …)

Turn on IMAP access and create an App Password in your account's security settings. See your provider's help page for the exact steps.

---

## 3. Server and Port Reference

| Provider | Server | Port | Secure Connection |
|---|---|---|---|
| **Gmail** | `imap.gmail.com` | `993` | `SslOnConnect` |
| **Yahoo Mail** | `imap.mail.yahoo.com` | `993` | `SslOnConnect` |
| **iCloud** | `imap.mail.me.com` | `993` | `SslOnConnect` |
| **Company server** | Ask your IT team | `993` (SSL) or `143` (STARTTLS) | `SslOnConnect` for 993, `StartTls` for 143, or `Auto` |

---

## 4. Enter the Information in akaBot Studio

### Step 4.1: Get IMAP Mail Messages

*All settings for this activity: [Get IMAP Mail Messages](/docs/activities/mail/latest/activities/get-imap-mail-messages.md)*

1. In the **Activities** panel, open **Mail** > **IMAP** and drag **Get IMAP Mail Messages** into your workflow.
2. In the **Properties** panel, fill in:

| Category | Property | Value |
|---|---|---|
| Host | **Server** | `"imap.gmail.com"` |
| Host | **Port** | `993` |
| Host | **Mail Folder** | `"Inbox"` (default) |
| Logon | **Email** | `"bot.account@gmail.com"` |
| Logon | **Password** | `"abcdefghijklmnop"` (your App Password) |
| Options | **Secure Connection** | `SslOnConnect` (or `Auto`) |
| Options | **Top** | `30` (default) – how many emails to read |
| Options | **Only Unread Messages** | Selected by default – clear it to also read emails you have already opened |
| Options | **Mark As Read** | Select to mark the emails as read after reading |
| Options | **Delete Messages** | **Leave cleared.** If selected, the emails are **permanently deleted** from the server after they are read |
| Output | **Messages** | `imapMails` – create it with **Ctrl+K** (step 3) |

![Get IMAP Mail Messages – example settings](/static/img/imap-properties.png)

*Example settings for Gmail in the **Properties** panel.*

3. In the **Properties** panel, click the **Messages** box (in the **Output** category) and press **Ctrl+K**.
4. Type `imapMails` and press **Enter**.
5. Open the **Variables** panel at the bottom of the designer and check:
   - **Variable type** is `List<MailMessage>`.
   - **Scope** is the **Sequence** that contains both **Get IMAP Mail Messages** and the **For Each** loop. If it shows a smaller container, change it to that Sequence – otherwise the loop cannot use the variable.

:::tip
To protect the password, you can enter it in **SecurePassword** (type `SecureString`) instead of **Password**. Fill in only one of them.
:::

---

### Step 4.2: Move IMAP Mail Message To Another Folder

*All settings for this activity: [Move IMAP Mail Message To Another Folder](/docs/activities/mail/latest/activities/move-imap-message-to-another-folder.md)*

1. Drag a **For Each** activity below the Get activity (inside the same Sequence) and set:
   - **Foreach**: `item`
   - **in**: `imapMails`
   - **TypeArgument** (in the **Properties** panel): `System.Net.Mail.MailMessage`. If it is not in the list, choose **Browse for Types...** and search for `MailMessage`.
2. Drag **Move IMAP Mail Message To Another Folder** into the **Body** of the loop.
3. Fill in:
   - **Server**, **Port**, **Email**, **Password**: the same values as in Step 4.1.
   - **Mail Message**: the current loop item, for example `item`.
   - **Mail Folder** (Destination): the folder to move the email to, for example `"Processed"`. The folder must already exist in the mailbox.

![For Each loop with Move IMAP Mail Message To Another Folder](/static/img/workflow-imap-move.png)

*Each email in `imapMails` is moved to the **Processed** folder.*

---

### Step 4.3: Check the Result

1. Run the workflow.
2. In Gmail, open the **Processed** label. The emails the Agent read should be there.
3. Open the **Inbox**. Those emails should no longer be in it.

If nothing was moved, check that **Only Unread Messages** matches your test emails (by default only unread emails are read) and that the `Processed` label exists.
