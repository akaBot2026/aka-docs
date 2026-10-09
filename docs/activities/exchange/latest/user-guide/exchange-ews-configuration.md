---
id: exchange-ews-configuration
title: "Setup Guide: Microsoft Exchange (EWS)"
sidebar_label: "Setup Exchange (EWS)"
sidebar_position: 1
description: "Step-by-step guide to discover Exchange Web Services (EWS) connection details and configure Exchange activities in akaBot Studio."
displayed_sidebar: activitiesSidebar
---
# Setup Guide: Microsoft Exchange (EWS)

This guide explains how to discover your Exchange Web Services (EWS) server URL, find your Active Directory domain and user credentials, and configure Exchange activities in akaBot Studio.

**Note:** These activities connect using **Exchange Web Services (EWS)** with Basic Authentication and are designed primarily for **on-premises Exchange Server**. For Microsoft 365 or Exchange Online mailboxes, use the **Office 365** activity package instead.

---

## 1. What Information You Need

| Field in akaBot | Where to Get It | Format / Example |
|---|---|---|
| **Server** | Outlook AutoConfiguration Test / Exchange Admin | `https://mail.company.com/EWS/Exchange.asmx` |
| **Email Auto discover** | Your company email address (Alternative to Server) | `user@company.com` |
| **User** | Command Prompt `whoami` command / Domain account | `botuser` or `botuser@company.com` |
| **Password** | Active Directory password | String |
| **Domain** | Command Prompt `whoami` command / Windows domain | `CORP` or `MYCOMPANY` |
| **Exchange Version** | Exchange Admin / IT Department | Dropdown: `Exchange2013_SP1` (for 2013/2016/2019/Online) |

---

## 2. Step-by-Step: How to Discover Exchange Connection Details

### Step 2.1: How to Find the EWS Server URL using Outlook

If Outlook is connected to your Exchange account on any Windows machine:

1. Hold **Ctrl** and right-click the **Outlook icon** in the system tray (click `^` first if it is hidden), then select **Test E-mail AutoConfiguration**.
2. Enter your **E-mail Address** and **Password**, uncheck **Use Guessmart** and **Secure Guessmart Authentication**, check **Use AutoDiscover**, then click **Test**.
3. In the **Results** log, find the **Availability Service URL** (or **OOF URL**) line and copy the URL ending in `/EWS/Exchange.asmx`, for example `https://mail.company.com/EWS/Exchange.asmx`.  
   *(This is the value for the **Server** property in akaBot.)*

---

### Step 2.2: How to Find Your Active Directory Domain and Username

1. Press **Windows + R**, type `cmd`, and press **Enter**.
2. Run `whoami`. The output looks like `MYDOMAIN\botuser`:
   - The part before `\` is the **Domain** (`MYDOMAIN`).
   - The part after `\` is the **User** (`botuser`).

---

## 3. How to Configure in akaBot Studio

### Step 3.1: Configure Exchange Scope ([`RCA.Activities.Mail.ExchangeScope`](/docs/activities/exchange/latest/activities/exchange-scope.md)) (Recommended)

1. In akaBot Studio, search for **Exchange Scope** in the Activities panel and drag it into your workflow.
2. In the **Properties** panel of **Exchange Scope**:
   - **New Connection** category: fill in **either** option A **or** option B, never both:
     - **Option A - Manual** (recommended): enter **Server** (`"https://mail.company.com/EWS/Exchange.asmx"`) and select **Exchange Version** (`Exchange2013`). Leave **Email Auto discover** empty.
     - **Option B - Autodiscover**: enter **Email Auto discover** (`"user@company.com"`) and leave **Server** empty.
   - **Logon** category:
     - **User**: `"botuser"`
     - **Password**: `"YourPassword"`
     - **Domain**: `"MYDOMAIN"` (Leave empty if using a cloud UPN like `user@company.com`).

---

### Step 3.2: Use Child Activities Inside Exchange Scope

Place activities inside the **Do** body of **Exchange Scope**. They automatically inherit the connection context, but each activity still requires its own **Connection** and **Logon** properties to be filled in (**Exchange Scope** does not currently share its connection automatically with child activities):

#### A. Get Exchange Email Messages ([`RCA.Activities.Mail.GetExchangeEmailMessage`](/docs/activities/exchange/latest/activities/get-exchange-email-messages.md))

- **Mail Folder**: `"Inbox"`.
- **Top**: `30`.
- **Only Unread Messages**: True / False.
- **Messages**: Output variable `exchangeMails` (Type: `List<MailMessage>`).

#### B. Send Exchange Mail ([`RCA.Activities.Mail.SendExchangeMail`](/docs/activities/exchange/latest/activities/send-exchange-mail.md))

- **To**: `"client@example.com"`.
- **Subject**: `"Invoice Notification"`.
- **Body**: `"Please find attached invoice."`.

#### C. Move Message To Another Folder ([`RCA.Activities.Mail.MoveMessageToFolder`](/docs/activities/exchange/latest/activities/move-message-to-another-folder.md))

- **Mail Message**: The `MailMessage` variable (a single message, for example the current item of a **For Each** loop over `exchangeMails`).
- **Mail Folder**: Destination folder name, e.g., `"Processed"`.

#### D. Delete Exchange Mail Message ([`RCA.Activities.Mail.DeleteExchangeMailMessage`](/docs/activities/exchange/latest/activities/delete-exchange-mail-message.md))

- **Mail Message**: The `MailMessage` variable to delete.
- **Delete Mode**: Select the deletion type from the dropdown:
  - `MoveToDeletedItems`: Similar to sending the item to the Recycle Bin.
  - `SoftDelete`: Similar to sending the item to the Recycle Bin and then emptying it.
  - `HardDelete`: Permanently deletes the message.

> **Tips for Mail Message**
>
> - Type the name of an existing variable in the **Mail Message** field. Creating a new variable with a name that already exists (for example `MailMessage`) shows the error *"A variable with the same name already exists in the specified scope"*.
> - Use a single message, such as the current item of a **For Each** loop over `exchangeMails`, not the whole list.
> - Use **Move** and **Delete** as alternatives for the same message. Deleting a message that was already moved may fail.

![workflow-mail-exchange](/static/img/workflow-mail-exchange.png)