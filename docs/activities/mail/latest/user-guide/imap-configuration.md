---
id: imap-configuration
title: "Setup Guide: IMAP (Internet Message Access Protocol)"
sidebar_label: "Setup IMAP"
sidebar_position: 2
description: "Step-by-step guide to enable IMAP on popular email providers and configure IMAP activities in akaBot Studio."
displayed_sidebar: activitiesSidebar
---
# Setup Guide: IMAP (Internet Message Access Protocol)

This guide covers how to enable IMAP on popular email providers (Gmail, Outlook.com), generate the required App Passwords (to bypass 2FA restrictions), and configure IMAP activities in akaBot Studio.

---

## 1. What Information You Need

| Field in akaBot | Where to Get It | Typical Example (Gmail) |
|---|---|---|
| **Server** | Provider documentation | `"imap.gmail.com"` |
| **Port** | Provider documentation | `993` (SSL) or `143` |
| **Email** | Your email address | `"bot.account@gmail.com"` |
| **Password** | App Password generator | 16-character string without spaces |
| **Secure Connection** | Dropdown in akaBot | `SslOnConnect` or `Auto` |
| **Mail folder** | Mailbox folder name | `"Inbox"` or `"INBOX"` |

---

## 2. Step-by-Step: Provider Setup & App Password Generation

### Step 2.1: Setting Up Google Gmail

#### A. Enable IMAP Access in Gmail

1. Open your browser and go to **[Gmail](https://mail.google.com)**.
2. In the top-right corner, click the **Settings gear icon**, then click **See all settings**.
3. Select the **Forwarding and POP/IMAP** tab at the top.
4. In the **IMAP access** section, select **Enable IMAP**.
5. Scroll down to the bottom of the page and click **Save Changes**.

#### B. Generate a Google App Password (Required for 2-Factor Authentication)

Standard Google account passwords cannot be used with IMAP if 2-Step Verification is active:

1. Go to **[Google Account Management](https://myaccount.google.com)**.
2. On the left navigation menu, click **Security**.
3. Under the **How you sign in to Google** section, ensure **2-Step Verification** is turned **On**.
4. Click on **2-Step Verification** > Enter your password to confirm.
5. Scroll down to the bottom of the page and click **App passwords** (or go directly to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)).
6. Under **App name**, type `akaBot` (or any custom name) and click **Create**.
7. A yellow dialog box will appear showing a **16-character password** (e.g., `abcd efgh ijkl mnop`).
8. **Copy this 16-character code** (remove any spaces when copying).  
   *(This code is the value to enter into the **Password** property in akaBot).*

---

### Step 2.2: Setting Up Outlook.com / Microsoft 365 Webmail

1. Log in to **[Outlook Web](https://outlook.live.com)**.
2. Click the **Settings gear icon** in the top-right banner.
3. In the settings panel, select **Mail** > **Sync email**.
4. Under **POP and IMAP**, ensure **Let devices and apps use POP** or **IMAP access** is set to **Yes**.
5. Click **Save**.

---

## 3. Server & Port Reference Table

| Mail Provider | IMAP Server Host | Port | Secure Connection Setting |
|---|---|---|---|
| **Gmail** | `imap.gmail.com` | `993` | `SslOnConnect` |
| **Outlook.com / Microsoft 365** | `outlook.office365.com` | `993` | `SslOnConnect` |
| **Yahoo Mail** | `imap.mail.yahoo.com` | `993` | `SslOnConnect` |
| **iCloud** | `imap.mail.me.com` | `993` | `SslOnConnect` |
| **Generic Corporate Server** | `mail.company.com` | `993` (SSL) / `143` (STARTTLS) | `Auto` |

---

## 4. How to Configure in akaBot Studio

### Step 4.1: Get IMAP Mail Messages ([`RCA.Activities.Mail.GetIMAPMailMessages`](/docs/activities/mail/latest/activities/imap/get-imap-mail-messages.md))

1. In akaBot Studio, search for **Get IMAP Mail Messages** under **Mail** > **IMAP** and drag it to your workflow.
2. In the **Properties** panel:
   - **Host** category:
     - **Server**: `"imap.gmail.com"`
     - **Port**: `993`
   - **Logon** category:
     - **Email**: `"bot.account@gmail.com"`
     - **Password**: Enter your 16-character App Password, e.g., `"abcdefghijklmnop"`.
   - **Option** category:
     - **Secure Connection**: Select `SslOnConnect` (or `Auto`).
     - **Top**: `30` (Number of emails to retrieve).
     - **Only Unread Messages**: True / False.
     - **Mark as read**: True / False (If checked, fetched emails will be marked as read on the server).
     - **Delete Messages**: **Keep unchecked** unless you want emails marked for deletion upon retrieval.
   - **Output** category:
     - **Messages**: Create variable `imapMails` (Type: `List<MailMessage>`).

---

### Step 4.2: Move IMAP Message To Another Folder ([`RCA.Activities.Mail.MoveIMAPMessageToFolder`](/docs/activities/mail/latest/activities/imap/move-imap-message-to-another-folder.md))

- Drag **Move IMAP Message To Another Folder** inside a `For Each` loop processing `imapMails`.
- Properties:
  - Same **Host** (**Server**, **Port**) and **Logon** (**Email**, **Password**) as above.
  - **Mail Message**: The current loop item.
  - **Mail folder**: The destination folder name, e.g., `"Processed"`.
