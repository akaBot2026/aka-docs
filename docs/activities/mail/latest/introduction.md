---
id: introduction
title: "Introduction"
sidebar_label: "Introduction"
sidebar_position: 1
description: "Introduction to Mail activity package"
displayed_sidebar: activitiesSidebar
---
# Introduction

The Mail Activities Package is designed to facilitate the automation of mail-related tasks.

The activities grouped cover various protocols such as **IMAP**, **POP3**, and **SMTP**, or are specialized in working with **Microsoft Outlook** and **Microsoft Exchange**.

Activities such as [Save Attachments](/docs/activities/mail/latest/activities/pop3/save-mail-attachments.md) are not intended to be used with certain mail protocols. Instead, they save the MailMessage object variable retrieved from activities such as [Get POP3 Mail Message](/docs/activities/mail/latest/activities/pop3/get-pop3-mail-messages.md) to a specified folder on the current machine.

**Note:**

* These activities can automate with the **Outlook Desktop application**, **Gmail accounts** and **Outlook 365 online**.
* **Outlook activities** require the **Outlook Classic** desktop application (they do not support the **New Outlook for Windows** app because Microsoft removed COM API support). Before running these activities, ensure Microsoft Outlook is installed, signed in, and configured with a default profile on the Agent machine.

## Exchange activities

In akaBot Studio, the Exchange activities are listed under **Mail** > **Exchange**. Their documentation is in the [Exchange package](/docs/activities/exchange/latest/introduction.md):

* [Exchange Scope](/docs/activities/exchange/latest/activities/exchange-scope.md)
* [Send Exchange Mail](/docs/activities/exchange/latest/activities/send-exchange-mail.md)
* [Get Exchange Mail Messages](/docs/activities/exchange/latest/activities/get-exchange-email-messages.md)
* [Move Message To Another Folder](/docs/activities/exchange/latest/activities/move-message-to-another-folder.md)
* [Delete Exchange Mail Message](/docs/activities/exchange/latest/activities/delete-exchange-mail-message.md)

## Setup guides

* [Setup Desktop Outlook](/docs/activities/mail/latest/user-guide/desktop-outlook-configuration.md) - for the Outlook activities.
* [Setup IMAP](/docs/activities/mail/latest/user-guide/imap-configuration.md) - for the IMAP activities.
* [Setup SMTP](/docs/activities/mail/latest/user-guide/smtp-configuration.md) - for the Send SMTP Mail Message activity.
* [Setup POP3](/docs/activities/mail/latest/user-guide/pop3-configuration.md) - for the POP3 activities.
* [Save Mail & Attachments](/docs/activities/mail/latest/user-guide/common-mail-utilities.md) - for saving mail messages and attachments retrieved by any Get activity.
* [Setup Exchange (EWS)](/docs/activities/exchange/latest/user-guide/exchange-ews-configuration.md) - for the Exchange activities.
