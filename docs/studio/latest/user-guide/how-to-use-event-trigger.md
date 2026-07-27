---
id: how-to-use-event-trigger
title: How to Use Event Trigger
sidebar_label: How to Use Event Trigger
sidebar_position: 9
description: Learn how to configure and use the Event Trigger system to run workflows automatically based on computer events.
displayed_sidebar: studioSidebar
---

# How to Use Event Trigger

The **Event Trigger** system lets you start an akaBot workflow automatically when something happens on your computer - a file appears, a keyboard shortcut is pressed, an email arrives, and so on. No programming or workflow-design knowledge is required.

The system has two parts:

- **Event Trigger Manager** - the desktop window where you create, edit, enable, disable, and delete triggers.
- **Event Trigger** (server) - the background process that watches for the events you configured and runs the assigned workflow when a match is detected.

## About

Event Trigger allows you to automate the response to everyday desktop events. Instead of manually opening akaBot Studio and starting a workflow, you define a trigger once and the system runs the workflow for you whenever the event occurs.

Typical use cases:

- Run a workflow whenever a new invoice file is saved to a folder.
- Press a keyboard shortcut to launch a data-entry workflow.
- Automatically process incoming emails that match certain criteria.
- React when a specific application window opens or closes.
- Start a workflow when a Windows service stops unexpectedly.

---

## Launching Event Trigger Manager

Event Trigger Manager can be opened from **akaBot Studio** or from the Windows Start Menu. When the application starts, it loads any previously saved triggers from the local configuration file (`triggerSettings.json`, stored in `%LOCALAPPDATA%\akaBot\`).

---

## Main Window

The main window is titled **Desktop Trigger Manager**. It contains two major areas: the **Ribbon Toolbar** at the top and the **Trigger List** below it.

![Desktop Trigger Manager Main Window](/static/img/event-trigger-manager-main.png)

### Ribbon Toolbar

The ribbon is organized into several groups on the **Home** tab:

| Group           | Controls                                                      | Description                                                                                                                                                          |
| :-------------- | :------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **New Trigger** | Drop-down button                                              | Opens a menu listing all available trigger types (File, Folder, Hotkey, Email, Process, Service, Window, Interface). Select one to open the trigger creation wizard. |
| **Manage**      | Edit Trigger, Enable Trigger, Disable Trigger, Delete Trigger | Operates on the trigger currently selected in the list.                                                                                                              |
| **Server**      | Refresh                                                       | Sends the current trigger configuration to the Event Trigger background server so changes take effect immediately.                                                   |
| **Action**      | Local Mode toggle                                             | Switches between Local Mode and Center Mode (see below).                                                                                                             |
| **Language**    | Language drop-down                                            | Changes the display language. Available languages: English, Japanese, Chinese (Simplified), Chinese (zh-Hans).                                                       |

### Trigger List

The main area of the window shows a data grid with the following columns:

| Column          | Description                                                                              |
| :-------------- | :--------------------------------------------------------------------------------------- |
| **Enabled**     | A toggle switch. Turn it on or off to enable or disable the trigger without deleting it. |
| **Name**        | The name you gave the trigger when you created it.                                       |
| **Type**        | The trigger type (File, Folder, Hotkey, Email, Process, Service, Windows, Interface).    |
| **Description** | The optional description you entered.                                                    |

Double-click a row (or select it and click **Edit Trigger**) to open the trigger wizard for editing.

---

## Creating a New Trigger

1. Click the **New Trigger** drop-down in the ribbon.
2. Select the trigger type you want.
3. The **Trigger Wizard** window opens. It has three tabs: **Basic Info**, **Detail**, and **Action**.

### Step 1 - Basic Info

![Trigger Wizard - Basic Info Tab](/static/img/event-trigger-wizard-basic-info.png)

| Field                   | Required | Description                                        |
| :---------------------- | :------- | :------------------------------------------------- |
| **Trigger Name**        | Yes      | A unique name for the trigger (max 50 characters). |
| **Trigger Description** | No       | A free-text description (max 250 characters).      |

An icon and short explanation of the selected trigger type are shown at the top of this tab.

### Step 2 - Trigger Detail

This tab changes depending on the trigger type. See the [Trigger Types](#trigger-types) section below for the fields specific to each type.

![Trigger Wizard - File Trigger Details Example](/static/img/event-trigger-wizard-detail-file.png)

### Step 3 - Action

![Trigger Wizard - Action Tab](/static/img/event-trigger-wizard-action.png)

| Field                  | Required                           | Description                                                                                                                                                                           |
| :--------------------- | :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Action Type**        | Yes                                | Currently supports **Workflow**. Select `Workflow` to run a published akaBot workflow. Selecting `None` means the trigger fires but performs no action.                               |
| **Workflow**           | Yes (when Action Type is Workflow) | Choose the workflow to execute from the drop-down list of published workflows.                                                                                                        |
| **Workflow Arguments** | No                                 | Key-value pairs passed to the workflow at runtime. Click **New** to add an argument row. Special variables are available (see [Using Workflow Arguments](#using-workflow-arguments)). |

Click **OK** to save the trigger and close the wizard.

---

## Trigger Types

### File Trigger

Fires when a file event is detected in a specific folder.

| Field                  | Required | Description                                                                                                     |
| :--------------------- | :------- | :-------------------------------------------------------------------------------------------------------------- |
| **Monitoring Folder**  | Yes      | The folder path to watch. Use the **...** button to browse.                                                     |
| **Include Subfolders** | No       | Check this to also watch all subfolders inside the monitoring folder.                                           |
| **Event**              | Yes      | One or more file events to react to: **Created**, **Changed**, **Deleted**, **Renamed**. Check at least one.    |
| **File Filter**        | Yes      | A filter pattern for file names (e.g., `*.xlsx`, `*.pdf`, `report_*.*`). Only matching files trigger the event. |

### Folder Trigger

Fires when a subfolder event is detected in a specific folder. The configuration is identical to the File Trigger except there is no **File Filter** field - it monitors folder-level changes only.

| Field                  | Required | Description                                         |
| :--------------------- | :------- | :-------------------------------------------------- |
| **Monitoring Folder**  | Yes      | The folder path to watch.                           |
| **Include Subfolders** | No       | Also watch nested subfolders.                       |
| **Event**              | Yes      | **Created**, **Changed**, **Deleted**, **Renamed**. |

### Hotkey Trigger

Fires when you press a specific keyboard shortcut anywhere on the desktop.

| Field        | Required | Description                                                                                                                             |
| :----------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **Modifier** | No       | Optional modifier keys: **Alt**, **Ctrl**, **Shift**, **Win**. Check one or more.                                                       |
| **Key**      | Yes      | The main key to combine with the modifiers. Choose from the drop-down (letters, numbers, function keys, numpad keys, arrow keys, etc.). |

Example: checking **Ctrl** + **Shift** and selecting **F9** creates the shortcut `Ctrl+Shift+F9`.

### Email Trigger

Fires when a new email matching your criteria arrives in a mail server inbox.

| Field                | Required | Description                                                                                          |
| :------------------- | :------- | :--------------------------------------------------------------------------------------------------- |
| **Email Protocol**   | Yes      | **IMAP** or **POP3**.                                                                                |
| **Host**             | Yes      | The mail server address (e.g., `imap.gmail.com`).                                                    |
| **Port**             | Yes      | The server port (e.g., `993` for IMAP with SSL).                                                     |
| **Use SSL**          | No       | Enable for a secure (TLS/SSL) connection.                                                            |
| **Credential**       | Yes      | Select a stored credential (username and password) for the mail account.                             |
| **Interval**         | Yes      | How often (in seconds) to check for new mail.                                                        |
| **Mail Folder**      | No       | The mailbox folder to monitor (e.g., `INBOX`).                                                       |
| **From**             | No       | Only trigger for emails from this sender address.                                                    |
| **Subject Contains** | No       | Only trigger when the subject line contains this text.                                               |
| **Attachment**       | No       | Filter by attachment presence: **Both** (any email), **With Attachment**, or **Without Attachment**. |

### Process Trigger

Fires when a Windows process starts or stops.

| Field            | Required | Description                                                             |
| :--------------- | :------- | :---------------------------------------------------------------------- |
| **File Path**    | No       | The full path to the executable (e.g., `C:\Program Files\App\app.exe`). |
| **Process Name** | Yes      | The process name to watch. Supports regex patterns.                     |
| **On Start**     | No       | Fire when the process starts.                                           |
| **On Stop**      | No       | Fire when the process stops.                                            |

Check at least one of **On Start** or **On Stop**.

### Service Trigger

Fires when a Windows service changes state.

| Field            | Required | Description                                        |
| :--------------- | :------- | :------------------------------------------------- |
| **Service Name** | Yes      | The Windows service name. Supports regex patterns. |
| **On Start**     | No       | Fire when the service starts.                      |
| **On Stop**      | No       | Fire when the service stops.                       |
| **On Pause**     | No       | Fire when the service pauses.                      |
| **On Resume**    | No       | Fire when the service resumes from a paused state. |

Check at least one event.

### Window Trigger

Fires when a desktop application window opens or closes.

| Field            | Required | Description                                              |
| :--------------- | :------- | :------------------------------------------------------- |
| **File Path**    | No       | The path to the application executable.                  |
| **Window Title** | Yes      | The window title to match. Supports wildcard characters. |
| **On Open**      | No       | Fire when a matching window opens.                       |
| **On Close**     | No       | Fire when a matching window closes.                      |

Check at least one of **On Open** or **On Close**.

### Interface Trigger

Fires when a specific UI element on screen receives an interaction. This is the most advanced trigger type.

| Field            | Required | Description                                                                                                                         |
| :--------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| **Pick Element** | Yes      | Click this button, then click the target UI element on screen. The system captures a selector that uniquely identifies the element. |
| **Selector**     | Yes      | The auto-generated selector string. You can edit it manually if needed.                                                             |
| **Event**        | Yes      | The UI event to listen for: **Click**, **Selection Changed**, **Got Focus**, or **Lost Focus**.                                     |
| **Modifier**     | No       | Optional modifier keys (**Alt**, **Ctrl**, **Shift**, **Win**) that must be held during the event.                                  |

The **Pick Element** button launches the element inspector overlay. Hover over the desired control and click to capture it. Press `Escape` to cancel.

---

## Editing a Trigger

1. Select a trigger in the list.
2. Click **Edit Trigger** in the ribbon (or double-click the row).
3. The trigger wizard opens with the current settings pre-filled across all three tabs.
4. Make your changes and click **OK** to save.

---

## Enabling and Disabling Triggers

There are two ways to enable or disable a trigger:

- **Toggle switch in the list**: Click the toggle in the **Enabled** column to switch a trigger on or off immediately.
- **Ribbon buttons**: Select a trigger and click **Enable Trigger** or **Disable Trigger**.

Disabling a trigger keeps its configuration but stops the Event Trigger server from monitoring that event.

---

## Deleting a Trigger

1. Select the trigger in the list.
2. Click **Delete Trigger** in the ribbon.
3. Confirm the deletion in the dialog that appears.

Deletion is permanent.

---

## Refreshing the Trigger Server

Click the **Refresh** button in the **Server** group of the ribbon to restart the Event Trigger background server with the latest configuration. This is useful if you suspect the server is out of sync or not responding.

The server is also automatically refreshed whenever you create, edit, enable, disable, or delete a trigger.

---

## Local Mode vs Center Mode

The **Local Mode** toggle in the ribbon controls how the triggered workflow is executed.

![Local Mode Toggle Dialog](/static/img/event-trigger-local-mode-toggle.png)

| Mode                         | Behavior                                                                                                                                                |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Center Mode** (toggle off) | The trigger sends the job to **akaBot Center**, which dispatches it to an available robot. This is the default when the agent is connected to a server. |
| **Local Mode** (toggle on)   | The trigger runs the workflow directly on the local machine without contacting akaBot Center.                                                           |

When the agent is not connected to akaBot Center, Local Mode is enabled automatically and the toggle is disabled.

Turning on Local Mode shows a confirmation dialog: _"When you turn on local mode, the desktop trigger will no longer send tasks to the Center."_

---

## Trigger History

When editing a trigger, the **History** tab in the trigger wizard shows a log of past trigger executions. Each row in the history grid represents one time the trigger fired.

Select a row to view its execution details in the **Details** text area below the grid.

---

## Changing the Language

Use the **Language** drop-down in the ribbon to switch the display language. The application window reloads with the selected language applied to all labels and messages.

Supported languages:

- English
- Japanese
- Chinese (Simplified)
- Chinese (zh-Hans)

---

## Using Workflow Arguments

When the action type is **Workflow**, you can pass arguments to the workflow. Click **New** in the Action tab to add a new argument row. Each argument has a **Name** and a **Value**.

Two special variables can be used as argument values:

| Variable           | Description                                                                                                                                                                                               |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `${TriggerOutput}` | The output produced by the trigger. The value depends on the trigger type - for example, the file path for a File trigger, the folder path for a Folder trigger, or the mail object for an Email trigger. |
| `${TriggerType}`   | The type of the trigger that fired (e.g., `File`, `Hotkey`, `Email`).                                                                                                                                     |

These variables are replaced with actual values at runtime before the workflow starts.
