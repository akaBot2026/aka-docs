---
id: how-to-use-event-trigger
title: How to Use Event Trigger
sidebar_label: How to Use Event Trigger
sidebar_position: 9
description: Learn how to configure and use the Event Trigger system to run workflows automatically based on computer events.
displayed_sidebar: studioSidebar
---

# About Triggers

Triggers enable you to execute workflows automatically in response to specific events on your machine, such as file system changes, hotkey presses, or incoming emails. This allows you to orchestrate and automate execution without manual intervention.

The Event Trigger system consists of two primary components:

* **Event Trigger Manager** - The desktop user interface used to create, edit, enable, disable, and delete triggers.
* **Event Trigger Server** - The background process that monitors configured events and dispatches the associated workflow when conditions are met.

Typical use cases:

* Executing an invoice-processing workflow when a new file is saved to a shared directory.
* Launching a data-entry workflow when a specific hotkey combination is pressed.
* Processing incoming emails that match specified criteria automatically.
* Reacting when a specific application window opens or closes.
* Starting recovery workflows when a Windows service stops unexpectedly.

---

## Launching Event Trigger Manager

The **Event Trigger Manager** can be launched either from **akaBot Studio** or directly from the Windows Start Menu. The application executable is located at:

`C:\Program Files\FPT Software\akaBot Platform\EventTriggerManager.exe`

When started, the Event Trigger Manager automatically loads existing trigger configurations from the local settings file, `triggerSettings.json`, which is stored in:

`%LOCALAPPDATA%\akaBot\`

---

## User Interface Overview

The main application window, **Desktop Trigger Manager**, is divided into two main areas: the **Ribbon Toolbar** at the top and the **Trigger List** panel below.

![Desktop Trigger Manager Main Window](/static/img/event-trigger-manager-main.png)

### Ribbon Toolbar

The ribbon toolbar groups actions on the **Home** tab:

| Group | Control | Description |
| :--- | :--- | :--- |
| **New Trigger** | Drop-down Menu | Lists available trigger types (File, Folder, Hotkey, Email, Process, Service, Window, Interface). Select a type to launch the trigger creation wizard. |
| **Manage** | Edit, Enable, Disable, Delete | Performs actions on the currently selected trigger in the list. |
| **Server** | Refresh | Syncs the current configurations with the Event Trigger background server to apply changes immediately. |
| **Action** | Local Mode Toggle | Toggles execution between Local Mode and Center Mode. |
| **Language** | Drop-down Menu | Sets the application display language (English, Japanese, Simplified Chinese). |

### Trigger List

The main data grid displays all configured triggers:

| Column | Description |
| :--- | :--- |
| **Enabled** | A toggle switch to active or deactivate the trigger without deleting its settings. |
| **Name** | The unique identifier assigned to the trigger. |
| **Type** | The category of event being monitored (e.g., File, Hotkey). |
| **Description** | User-defined details about the trigger purpose. |

Double-clicking any row (or selecting a row and clicking **Edit Trigger**) opens the trigger settings wizard.

---

## Managing Triggers

### Creating a Trigger

1. Click the **New Trigger** drop-down menu in the ribbon.
2. Select the desired trigger type.
3. In the **Trigger Wizard**, configure settings across the three tabs: **Basic Info**, **Detail**, and **Action**.

#### Step 1: Basic Info

![Trigger Wizard - Basic Info Tab](/static/img/event-trigger-wizard-basic-info.png)

| Field | Required | Description |
| :--- | :--- | :--- |
| **Trigger Name** | Yes | A unique identifier for the trigger (maximum 50 characters). |
| **Trigger Description** | No | Optional details about the trigger (maximum 250 characters). |

#### Step 2: Trigger Detail

Configure the specific conditions for the selected event type. For detailed property descriptions, see [Trigger Types](#trigger-types).

![Trigger Wizard - File Trigger Details Example](/static/img/event-trigger-wizard-detail-file.png)

#### Step 3: Action

Define the operation performed when the trigger conditions are met.

![Trigger Wizard - Action Tab](/static/img/event-trigger-wizard-action.png)

| Field | Required | Description |
| :--- | :--- | :--- |
| **Action Type** | Yes | Select **Workflow** to run an akaBot process, or **None** to register the event without executing a process. |
| **Workflow** | Yes (if Action Type is Workflow) | Select the published workflow to execute from the list of available processes. |
| **Workflow Arguments** | No | Pass custom variables or system-generated parameters to the workflow at runtime (see [Using Workflow Arguments](#using-workflow-arguments)). |

Click **OK** to save the configuration and register the trigger.

### Editing a Trigger

1. Select the target trigger from the list.
2. Click **Edit Trigger** in the ribbon or double-click the row.
3. Modify the properties in the **Trigger Wizard** and click **OK** to save changes.

### Enabling and Disabling Triggers

You can change the active state of a trigger in two ways:

* Use the toggle in the **Enabled** column of the grid.
* Select the trigger and click **Enable Trigger** or **Disable Trigger** in the ribbon.

> **Note:** Disabling a trigger retains its configuration but suspends the background server from monitoring the associated events.

### Deleting a Trigger

1. Select the trigger from the list.
2. Click **Delete Trigger** in the ribbon.
3. Confirm deletion in the confirmation dialog.

> **Caution:** Trigger deletion is permanent and cannot be undone.

---

## Refreshing the Trigger Server

The background server automatically refreshes its configuration when triggers are created, edited, enabled, disabled, or deleted. 

If you suspect the background service is out of sync, click **Refresh** in the **Server** group of the ribbon to manually restart the service with the latest settings.

---

## Local Mode vs Center Mode

The execution target of the triggered workflow is controlled by the **Local Mode** toggle in the ribbon.

![Local Mode Toggle Dialog](/static/img/event-trigger-local-mode-toggle.png)

| Mode | Description |
| :--- | :--- |
| **Center Mode** (Toggle Off) | Dispatches execution jobs to **akaBot Center**, which assigns them to an available robot. This is the default mode when connected to a server. |
| **Local Mode** (Toggle On) | Runs the workflow directly on the local machine without routing through akaBot Center. |

> **Note:** If the robot agent is disconnected from akaBot Center, Local Mode is enabled automatically, and the toggle is disabled.

---

## Trigger History

To review execution history, edit the trigger and select the **History** tab in the wizard. The grid lists every instance the trigger was fired. Selecting a row displays detailed logs in the **Details** pane.

---

## Trigger Types

### File Trigger

Monitors file events in a specified directory.

| Field | Required | Description |
| :--- | :--- | :--- |
| **Monitoring Folder** | Yes | The directory path to monitor. Use the ellipsis (**...**) button to browse. |
| **Include Subfolders** | No | Enables monitoring of all child directories within the target folder. |
| **Event** | Yes | The file operations to monitor (**Created**, **Changed**, **Deleted**, **Renamed**). At least one must be selected. |
| **File Filter** | Yes | A wild card pattern to filter target files (e.g., `*.xlsx`, `*.pdf`, `invoice_*.*`). |

### Folder Trigger

Monitors directory-level changes within a specified parent folder.

| Field | Required | Description |
| :--- | :--- | :--- |
| **Monitoring Folder** | Yes | The directory path to monitor. |
| **Include Subfolders** | No | Enables monitoring of nested child directories. |
| **Event** | Yes | The directory operations to monitor (**Created**, **Changed**, **Deleted**, **Renamed**). |

### Hotkey Trigger

Fires when a designated keyboard shortcut is pressed.

| Field | Required | Description |
| :--- | :--- | :--- |
| **Modifier** | No | Keyboard modifiers to combine with the trigger key (**Alt**, **Ctrl**, **Shift**, **Win**). |
| **Key** | Yes | The primary key from the drop-down list. |

### Email Trigger

Fires when a new email matching configured rules arrives in the monitored inbox.

| Field | Required | Description |
| :--- | :--- | :--- |
| **Email Protocol** | Yes | Select **IMAP** or **POP3**. |
| **Host** | Yes | The address of the mail server (e.g., `imap.gmail.com`). |
| **Port** | Yes | The port number (e.g., `993` for SSL/TLS IMAP). |
| **Use SSL** | No | Enables secure connection protocols. |
| **Credential** | Yes | The stored username and password profile for the mail account. |
| **Interval** | Yes | The polling frequency in seconds. |
| **Mail Folder** | No | The specific folder to monitor (defaults to `INBOX`). |
| **From** | No | Filters emails by sender email address. |
| **Subject Contains** | No | Filters emails by a string match in the subject line. |
| **Attachment** | No | Filters based on attachment status (**Both**, **With Attachment**, or **Without Attachment**). |

### Process Trigger

Monitors the state of specific Windows processes.

| Field | Required | Description |
| :--- | :--- | :--- |
| **File Path** | No | The absolute file path to the executable file. |
| **Process Name** | Yes | The name of the process (supports regular expressions). |
| **On Start** | No | Triggers when the process launches. |
| **On Stop** | No | Triggers when the process terminates. |

### Service Trigger

Monitors state transitions of Windows background services.

| Field | Required | Description |
| :--- | :--- | :--- |
| **Service Name** | Yes | The name of the Windows service (supports regular expressions). |
| **On Start** | No | Triggers when the service state changes to Started. |
| **On Stop** | No | Triggers when the service state changes to Stopped. |
| **On Pause** | No | Triggers when the service state changes to Paused. |
| **On Resume** | No | Triggers when the service resumes from a paused state. |

### Window Trigger

Fires based on window events for desktop applications.

| Field | Required | Description |
| :--- | :--- | :--- |
| **File Path** | No | The absolute path to the application executable. |
| **Window Title** | Yes | The title string of the target window (supports wildcard characters). |
| **On Open** | No | Triggers when the target window opens. |
| **On Close** | No | Triggers when the target window closes. |

### Interface Trigger

Monitors user interactions with specific UI elements.

| Field | Required | Description |
| :--- | :--- | :--- |
| **Pick Element** | Yes | Launches the element selector overlay. Hover and click to capture the target control. Press `Escape` to exit. |
| **Selector** | Yes | The generated XML selector string uniquely identifying the UI element. Can be edited manually. |
| **Event** | Yes | The UI event to monitor (**Click**, **Selection Changed**, **Got Focus**, **Lost Focus**). |
| **Modifier** | No | Optional modifier keys required to fire the event. |

---

## Using Workflow Arguments

When configuring a workflow action, you can pass parameters from the trigger event to the workflow variables. Click **New** under the Arguments table to add a parameter mapping.

The following system-defined variables are supported:

| Variable | Description |
| :--- | :--- |
| `${TriggerOutput}` | Returns the output payload of the event (e.g., the file path for File triggers, directory path for Folder triggers, or the email object for Email triggers). |
| `${TriggerType}` | Returns the category identifier of the trigger (e.g., `File`, `Hotkey`, `Email`). |
