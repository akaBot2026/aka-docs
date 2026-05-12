---
id: release-notes
title: "Release Notes"
sidebar_label: "Release Notes"
sidebar_position: 2
description: "Release Notes activity documentation."
displayed_sidebar: activitiesSidebar
---
# Release Notes

## **RCA.Activities.Mail Version 2.1.1.0**

### **Bug Fixes**

* Fixed an issue in **Get Outlook Mail Messages** activity which return mail messages when sub-folder in Mail folder path is not exist.
* Fixed an issue in **Get Exchange Mail Messages** activity which unable to get mail with send on behalf.
* Fixed an issue in **Send Outlook Mail**, ** Send SMTP Mail Message** activities when cannot send mail with 'To'/'Cc'/'Bcc' list includes email addresses separated by semicolon
* Fixed an issue in **Get Outlook Mail Messages** activity which sender of output MailMessage is always null.
* Fixed an issue in **Send SMTP Mail Message** activity which does not save email in Sent folder of Sender when Subject and Body are empty and MailMessage refers to some mail message.
* Fixed an issue in **Send SMTP Mail Message** activity which does not send email to expected receiver when Subject or Body is not empty and MailMessage refers to some mail message.
* Fixed an issue in **Get IMAP Mail Messages** activity which activity always returns value = 0 email.
