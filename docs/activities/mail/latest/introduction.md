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

The activities grouped cover various protocols such as **IMAP**, **POP3**, and **SMTP**, or are specialized in working with **Microsoft Outlook.**

Activities such as [Save Attachments](/docs/activities/mail/latest/activities/save-mail-attachments.md) are not intended to be used with certain mail protocols. Instead, they save the MailMessage object variable retrieved from activities such as [Get POP3 Mail Message](/docs/activities/mail/latest/activities/get-pop3-mail-messages.md) to a specified folder on the current machine.

**Note:**

* These activities can automate with the **Outlook Desktop application**, **Gmail accounts** and **Outlook 365 online**.
* [Get Outlook Mail Message](/docs/activities/mail/latest/activities/get-outlook-mail-message.md), [Send Outlook Mail](/docs/activities/mail/latest/activities/send-outlook-mail.md), [Get Outlook Accounts](/docs/activities/mail/latest/activities/get-outlook-accounts.md), [Move Outlook Message](/docs/activities/mail/latest/activities/move-outlook-message.md), and [Save Outlook Attachments](/docs/activities/mail/latest/activities/save-outlook-attachments.md) require **Outlook Classic** (the desktop application using MAPI/COM). They do not work with the **New Outlook** app, since Microsoft has removed COM API support from it. Before running these activities, make sure Outlook is installed, you are signed in, and a **Default Profile** is configured.
