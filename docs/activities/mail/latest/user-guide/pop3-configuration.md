---
id: pop3-configuration
title: "Setup Guide: POP3 (Post Office Protocol 3)"
sidebar_label: "Setup POP3"
sidebar_position: 4
description: "Step-by-step guide to enable POP3 on your email provider and safely configure the Get POP3 Mail Messages activity in akaBot Studio."
displayed_sidebar: activitiesSidebar
---
# Setup Guide: POP3 (Post Office Protocol 3)

This guide explains how to enable POP3 on your email provider, generate credentials, and safely configure the **Get POP3 Mail Messages** activity in akaBot Studio.

---

## 1. What Information You Need

| Field in akaBot | Where to Get It | Typical Example |
|---|---|---|
| **Server** | Provider documentation | `"pop.gmail.com"` |
| **Port** | Provider documentation | `995` (SSL) or `110` |
| **Email** | Your email address | `"bot.account@gmail.com"` |
| **Password** | App Password or account password | String |
| **Delete Messages** | Property checkbox | Unchecked (Recommended) |

---

## 2. Step-by-Step: Enabling POP Access on Providers

### Step 2.1: Enable POP in Gmail

1. Log in to **[Gmail](https://mail.google.com)**.
2. Click the **Settings gear icon** > **See all settings**.
3. Go to the **Forwarding and POP/IMAP** tab.
4. Under the **POP download** section:
   - Select **Enable POP for all mail** (or *Enable POP for mail that arrives from now on*).
   - Choose what Gmail should do when messages are accessed via POP (e.g., *keep Gmail's copy in the Inbox*).
5. Click **Save Changes** at the bottom.
6. Generate a Google **App Password** as explained in the [IMAP setup guide](/docs/activities/mail/latest/user-guide/imap-configuration.md).

![setting-gmail](/static/img/setting-gmail.png)

---

### Step 2.2: Enable POP in Outlook.com / Microsoft 365

1. Log in to **[Outlook Web](https://outlook.live.com)**.
2. Click **Settings** (gear icon) > **Mail** > **Sync email**.
3. Under **POP and IMAP**, select **Yes** under *Let devices and apps use POP*.
4. Click **Save**.

---

## 3. Server & Port Reference Table

| Provider | POP3 Server Host | Port | Secure Connection Setting |
|---|---|---|---|
| **Gmail** | `pop.gmail.com` | `995` | `SslOnConnect` |
| **Outlook.com / M365** | `outlook.office365.com` | `995` | `SslOnConnect` |
| **Yahoo Mail** | `pop.mail.yahoo.com` | `995` | `SslOnConnect` |
| **Corporate POP Server** | `pop.company.com` | `995` / `110` | `Auto` |

---

## 4. How to Configure in akaBot Studio

### Step 4.1: Configure Get POP3 Mail Messages ([`RCA.Activities.Mail.GetPOP3MailMessages`](/docs/activities/mail/latest/activities/pop3/get-pop3-mail-messages.md))

1. In akaBot Studio, search for **Get POP3 Mail Messages** under **Mail** > **POP3** and drag it into your workflow.
2. In the **Properties** panel:
   - **Host** category:
     - **Server**: `"pop.gmail.com"`.
     - **Port**: `995`.
   - **Logon** category:
     - **Email**: `"bot.account@gmail.com"`.
     - **Password**: Enter your 16-character App Password.
   - **Option** category:
     - **Secure Connection**: `SslOnConnect` (or `Auto`).
     - **Top**: `20` (Number of messages to retrieve).
     - **Delete Messages**: **CRITICAL**: Ensure this is unchecked. If checked, downloaded emails will be marked for deletion on the server!
   - **Output** category:
     - **Messages**: Create variable `popMails` (Type: `List<MailMessage>`).
