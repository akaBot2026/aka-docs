---
id: common-mail-utilities
title: "Setup Guide: Save Mail & Attachments"
sidebar_label: "Save Mail & Attachments"
sidebar_position: 5
description: "Save emails as .eml files and save their attachments to a folder with the Save Mail and Save Mail Attachments activities."
displayed_sidebar: activitiesSidebar
---
# Setup Guide: Save Mail & Attachments

After the Agent has read emails, you can:

- save each email as an `.eml` file with **Save Mail**, and
- save the attached files to a folder with **Save Mail Attachments**.

Both activities work with emails read by **Get Outlook Mail Messages**, **Get IMAP Mail Messages**, **Get POP3 Mail Messages** or **Get Exchange Mail Messages**.

:::tip Using Exchange Server?
Reading emails from your company's own **Exchange Server**? Set up **Get Exchange Mail Messages** first with [Setup Exchange (EWS)](/docs/activities/exchange/latest/user-guide/exchange-ews-configuration.md), then continue with this guide.
:::

---

## 1. Information You Need

| Information | Where to get it | Example |
|---|---|---|
| **Emails** | The **Messages** output of a Get activity | `mailList` |
| **File Path** (Save Mail) | A full path ending in `.eml`. The folder must already exist | `"C:\Mails\invoice.eml"` |
| **Folder Path** (Save Mail Attachments) | The folder for the attachments. It is created if it does not exist | `"C:\Mails\Attachments"` |
| **Filter** (optional) | A pattern for the file names to keep (see Step 2.4) | `"(?i)\.pdf$"` |

---

## 2. Build the Workflow

### Step 2.1: Read the Emails

1. Add any Get activity, for example **Get Outlook Mail Messages**.
2. In its **Messages** output, create a variable, for example `mailList`.

---

### Step 2.2: Loop Through the Emails

1. Drag a **For Each** activity below the Get activity.
2. In **Values**, enter `mailList`.
3. In the **Properties** panel, set **TypeArgument** to `System.Net.Mail.MailMessage`. If it is not in the list, click **Browse for Types...** and search for `MailMessage`.

---

### Step 2.3: Save Mail ([`RCA.Activities.Mail.SaveMail`](/docs/activities/mail/latest/activities/save-mail.md))

1. Drag **Save Mail** into the **Body** of the For Each loop.
2. Fill in:
   - **Mail Message**: `item`
   - **File Path** (required): the full path and file name, for example:

     ```vb
     "C:\ArchivedEmails\mail_" + DateTime.Now.ToString("yyyyMMdd_HHmmssfff") + ".eml"
     ```

:::caution
- The folder (`C:\ArchivedEmails` in the example) must **already exist**, otherwise the activity fails. Add a **Create Folder** activity before the loop if needed.
- A file with the same name is overwritten.
- If you put the email subject in the file name, characters such as `\ / : * ? " < > |` make the activity fail. The example above uses the date and time instead.
:::

---

### Step 2.4: Save Mail Attachments ([`RCA.Activities.Mail.SaveMailAttachments`](/docs/activities/mail/latest/activities/save-mail-attachments.md))

1. Drag **Save Mail Attachments** into the **Body** of the For Each loop.
2. Fill in:
   - **Message** (required): `item`
   - **Folder Path**: for example `"C:\ArchivedEmails\Attachments"`. The folder is created if it does not exist. If empty, the files are saved in the project folder. Files with the same name are overwritten.
   - **Filter** (optional): keep only some files. Leave empty to save all attachments.
     - Only PDF files: `"(?i)\.pdf$"`
     - PDF and Excel files: `"(?i)\.(pdf|xlsx|xls)$"`

     *(`(?i)` makes the filter ignore upper/lower case, so `INVOICE.PDF` also matches.)*
   - **Attachments** (output, optional): a variable of type `IEnumerable<String>` that receives the paths of the saved files.
