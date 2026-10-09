---
id: common-mail-utilities
title: "Setup Guide: Common Mail Utilities (Save Mail & Attachments)"
sidebar_label: "Save Mail & Attachments"
sidebar_position: 5
description: "Step-by-step guide to save email messages to .eml files and extract attachments to local disk using the Save Mail and Save Mail Attachments activities."
displayed_sidebar: activitiesSidebar
---
# Setup Guide: Common Mail Utilities (Save Mail & Attachments)

This guide covers how to save in-memory email messages to `.eml` files and extract attachments to local disk using the **Save Mail** and **Save Mail Attachments** activities in akaBot Studio. Both activities work with a `MailMessage` object retrieved from any Get activity, regardless of the mail protocol used (Outlook, Exchange, IMAP, or POP3).

---

## 1. What Information You Need

| Field in akaBot | Where to Get It | Format / Example |
|---|---|---|
| **Mail Message** | Output of any Get Mail activity | `MailMessage` object |
| **File Path** (Save Mail) | Local or network file destination | Full path ending in `.eml`, e.g., `"C:\Mails\invoice.eml"` |
| **Folder Path** (Save Mail Attachments) | Target storage directory | Directory path, e.g., `"C:\Mails\Attachments"` |
| **Filter** (Optional) | Regular expression for file names | Regex pattern, e.g., `".*\.(pdf|xlsx)"` |

---

## 2. Step-by-Step Workflow Pattern

Both activities operate on individual `MailMessage` objects in memory. You typically retrieve a list of messages using a Get activity, iterate through them with a `For Each` activity, and then save the email or its attachments.

### Step 2.1: Retrieve Email List

1. Use any retrieval activity (e.g., **Get Outlook Mail Message**, **Get IMAP Mail Messages**, **Get Exchange Mail Messages**, or **Get POP3 Mail Messages**).
2. Set its output property to a variable, e.g., `mailList` (Type: `List<MailMessage>`).

---

### Step 2.2: Add a `For Each` Loop

1. From the Activities panel, drag a **For Each** activity into your workflow.
2. In the `Values` input of For Each, enter: `mailList`.
3. In the Properties panel of For Each, set **TypeArgument** to:

   ```text
   System.Net.Mail.MailMessage
   ```

   *(If not listed in the quick dropdown, click "Browse for Types..." and search for `System.Net.Mail.MailMessage`).*

---

### Step 2.3: Configure Save Mail ([`RCA.Activities.Mail.SaveMail`](/docs/activities/mail/latest/activities/pop3/save-mail.md))

1. Drag **Save Mail** inside the **Body** of the For Each loop.
2. In the **Properties** panel:
   - **Input** category:
     - **Mail Message**: Enter `item` (the current loop variable).
     - **File Path**: Specify the target path with file name:

       ```vb
       "C:\ArchivedEmails\" + item.Subject + "_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".eml"
       ```

       *(Tip: If the subject might contain invalid filename characters like `\`, `/`, `:`, `*`, sanitize them with `Path.GetInvalidFileNameChars()` or use a fixed naming convention. If left blank, the file is saved in the project folder.)*

---

### Step 2.4: Configure Save Mail Attachments ([`RCA.Activities.Mail.SaveMailAttachements`](/docs/activities/mail/latest/activities/pop3/save-mail-attachments.md))

1. Drag **Save Mail Attachments** inside the **Body** of the For Each loop.
2. In the **Properties** panel:
   - **Input** category:
     - **Message**: Enter `item`.
     - **Folder Path**: Specify the target directory:

       ```vb
       "C:\ArchivedEmails\Attachments"
       ```

       *(Note: If the directory does not exist, akaBot automatically creates it. Files with the same name in the folder are overwritten.)*
   - **Option** category:
     - **Filter**: (Optional) Regular expression pattern to only save specific file extensions:
       - Save only PDFs: `".*\.pdf"`
       - Save Excel and PDFs: `".*\.(pdf|xlsx|xls)"`
       - Leave blank to save all attachments.
   - **Output** category:
     - **Attachments**: (Optional) Variable of type `IEnumerable<String>` containing the list of saved file paths.
