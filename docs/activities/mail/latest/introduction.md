---
id: introduction
title: "Introduction"
sidebar_label: "Introduction"
sidebar_position: 1
description: "Introduction to Mail activity package"
displayed_sidebar: activitiesSidebar
---
# Introduction

The Mail Activities Package lets the Agent read, send, move, save and delete emails.

## Which activities should I use?

| Your mailbox | Use | Setup guide |
|---|---|---|
| The **Outlook desktop app** is installed and signed in on the Agent machine | **Outlook** activities | [Setup Desktop Outlook](/docs/activities/mail/latest/user-guide/desktop-outlook-configuration.md) |
| **Gmail**, **Yahoo Mail** or a company mail server – reading email | **IMAP** activities (or **POP3**) | [Setup IMAP](/docs/activities/mail/latest/user-guide/imap-configuration.md), [Setup POP3](/docs/activities/mail/latest/user-guide/pop3-configuration.md) |
| **Gmail**, **Yahoo Mail** or a company mail server – sending email | **Send SMTP Mail Message** | [Setup SMTP](/docs/activities/mail/latest/user-guide/smtp-configuration.md) |
| Your company's own **Exchange Server** | **Exchange** activities | [Setup Exchange (EWS)](/docs/activities/exchange/latest/user-guide/exchange-ews-configuration.md) |
| **Microsoft 365 / Outlook.com** without the desktop app | **Office 365** package | [Connecting to Office 365](/docs/activities/office365/latest/azure-app-registration.md) |

To save emails or their attachments to disk after reading them, see [Save Mail & Attachments](/docs/activities/mail/latest/user-guide/common-mail-utilities.md). These activities work with emails read by any Get activity.

**Note:** The **Outlook** activities require **Outlook Classic**. They do not work with the **New Outlook for Windows** app, because it does not support the automation interface (COM) the activities use. Before running them, make sure Outlook is installed, signed in and set up with a default profile on the Agent machine.

## Exchange activities

In akaBot Studio, the Exchange activities are listed under **Mail** > **Exchange**. Their documentation is in the [Exchange package](/docs/activities/exchange/latest/introduction.md):

* [Exchange Scope](/docs/activities/exchange/latest/activities/exchange-scope.md)
* [Send Exchange Mail](/docs/activities/exchange/latest/activities/send-exchange-mail.md)
* [Get Exchange Mail Messages](/docs/activities/exchange/latest/activities/get-exchange-email-messages.md)
* [Move Message To Another Folder](/docs/activities/exchange/latest/activities/move-message-to-another-folder.md)
* [Delete Exchange Mail Message](/docs/activities/exchange/latest/activities/delete-exchange-mail-message.md)
