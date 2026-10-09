---
id: smtp-configuration
title: "Setup Guide: SMTP (Simple Mail Transfer Protocol)"
sidebar_label: "Setup SMTP"
sidebar_position: 3
description: "Step-by-step guide to prepare SMTP relay settings and configure the Send SMTP Mail Message activity in akaBot Studio."
displayed_sidebar: activitiesSidebar
---
# Setup Guide: SMTP (Simple Mail Transfer Protocol)

This guide covers how to prepare SMTP relay settings, obtain the necessary credentials, and configure the **Send SMTP Mail Message** activity in akaBot Studio.

---

## 1. What Information You Need

| Field in akaBot | Where to Get It | Format / Example |
|---|---|---|
| **Server** | Mail provider / IT network team | `"smtp.gmail.com"` or `"smtp.office365.com"` |
| **Port** | Mail provider / IT network team | `587` (STARTTLS) or `465` (SSL) or `25` (Relay) |
| **Email** | Your sender email address | `"bot.notifications@company.com"` |
| **Password** | App Password or account password | String (Omitted if anonymous relay) |
| **To** | Destination email addresses | `"user1@domain.com;user2@domain.com"` |
| **Subject** | Email subject | String |
| **Body** | Email message body | Plain text or HTML string |

---

## 2. Step-by-Step: Preparing SMTP Credentials

### Step 2.1: Public Providers (Gmail, Microsoft 365, Yahoo)

Public mail providers block direct password authentication if Two-Factor Authentication (2FA) is turned on:

- **Gmail**: Generate a 16-character **App Password** via [Google Security Settings](https://myaccount.google.com/apppasswords), as described in the [IMAP setup guide](/docs/activities/mail/latest/user-guide/imap-configuration.md).
- **Office 365 / Outlook.com**: Ensure SMTP AUTH is enabled for the mailbox in Microsoft 365 Admin Center (*Users > Active users > Mail tab > Manage email apps > Check "Authenticated SMTP"*).

---

### Step 2.2: Internal Corporate Mail Relays (Port 25)

Many enterprise networks provide an internal SMTP relay server:

- Often requires **no authentication** (Password can be left empty).
- Authentication is handled by **IP Whitelisting** (the robot machine's static IP address must be permitted on the relay).
- Request the relay server hostname or IP address from your IT network administrator.

---

## 3. Server & Port Reference Table

| Provider / Type | SMTP Server Host | Port | Security / Encryption | Authentication Required |
|---|---|---|---|---|
| **Gmail** | `smtp.gmail.com` | `587` | STARTTLS (`Auto`) | Yes (App Password) |
| **Gmail (Alternative)** | `smtp.gmail.com` | `465` | SSL/TLS (`SslOnConnect`) | Yes (App Password) |
| **Outlook.com / M365** | `smtp.office365.com` | `587` | STARTTLS (`Auto`) | Yes |
| **Yahoo Mail** | `smtp.mail.yahoo.com` | `587` / `465` | STARTTLS / SSL | Yes (App Password) |
| **Internal Corporate Relay** | `mailrelay.corp.local` | `25` | None or opportunistic | No (Anonymous / IP-based) |

---

## 4. How to Configure in akaBot Studio

### Step 4.1: Configure Send SMTP Mail Message ([`RCA.Activities.Mail.SendMail`](/docs/activities/mail/latest/activities/smtp/send-smtp-mail-message.md))

1. In akaBot Studio, search for **Send SMTP Mail Message** under **Mail** > **SMTP** and drag it into your workflow.
2. In the **Properties** panel:
   - **Host** category:
     - **Server**: `"smtp.gmail.com"` (or your corporate relay hostname).
     - **Port**: `587` (Must be an integer value).
   - **Logon** category:
     - **Email**: `"bot.notifications@company.com"`.
     - **Password**: Enter your 16-character App Password (leave blank if using an anonymous corporate relay).
   - **Receiver** category:
     - **To**: `"manager@company.com;finance@company.com"` (Separate multiple recipients with `;`).
     - **Cc**: `"audit@company.com"`.
     - **Bcc**: (Optional hidden recipients).
   - **Mail** category:
     - **Subject**: `"Daily Processing Report - " + DateTime.Now.ToString("dd/MM/yyyy")`.
     - **Body**: `"<html><body><h2>Workflow Complete</h2><p>All items have been processed.</p></body></html>"`.
   - **Option** category:
     - **Is Body Html**: Check if using HTML tags in the body.
     - **Secure Connection**: Select `Auto` or `SslOnConnect`.
   - **Attachments** category:
     - **Attachments**: Click `...` and add file paths to include (e.g., `"C:\Reports\Summary.xlsx"`).
