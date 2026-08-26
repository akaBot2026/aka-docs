---
id: how-to-use
title: "How to use akaBot Agent"
sidebar_label: "How to use"
sidebar_position: 2
description: "Step-by-step guide to configuring and operating akaBot Agent."
displayed_sidebar: agentSidebar
---
# How to Use akaBot Agent

## **Overview**

akaBot Agent is a runtime execution component that runs automation processes built in akaBot Studio or deployed from akaBot Center.

This guide walks you through the complete workflow: opening the Agent, connecting to akaBot Center, retrieving process packages, and controlling process execution.

## **Getting Started**

Before running a process, complete the following steps in order:

1. *(Optional)* Configure network settings if your environment requires a proxy to reach akaBot Center.
2. Connect akaBot Agent to akaBot Center using your Agent Key.
3. Retrieve published process packages from akaBot Center or akaBot Studio.
4. Run, stop, configure arguments, or review execution history for your processes.

### **Opening akaBot Agent**

To open the akaBot Agent window:

1. Click the system tray to reveal hidden icons.
2. Right-click the **akaBot** icon.
3. Select **Show akaBot Agent**.

![System tray — right-click akaBot icon to open Agent](/static/img/d5b6ed_image-20220505174101-1.png)

The akaBot Agent window opens, displaying the list of available processes.

![akaBot Agent main screen — workflow list](/static/img/2d6c9f_image-20221117102945-5.png)

---

## **Configure Network Settings**

If your network requires a proxy to connect to akaBot Center, configure the proxy settings before establishing the connection.

**Step 1:** Navigate to the **Settings** screen. If you are on the Workflow List screen, click the **Settings** button in the upper-right corner.

**Step 2:** Select the **Network** tab and complete the **Network Configuration** form.

- **No Proxy / Auto Detect**: No additional configuration is required in this section.
- **Manual Proxy**: Specify the following settings:
  - **Proxy Type**: Select the appropriate protocol.
  - **Proxy Server URL**: Enter the proxy server address.
  - **Proxy Port**: Enter the port number.
  - **Authentication** *(if required)*: Enable **Required Authentication**, then enter your username and password.

![Network Configuration — Manual Proxy settings](/static/img/5d0ea0_image-20221117102229-3.png)

---

## **Connect akaBot Agent to akaBot Center**

To connect akaBot Agent to akaBot Center, you must first obtain an **Agent Key** by registering the agent in akaBot Center.

Once you have the Agent Key:

**Step 1:** Navigate to the **Settings** screen by clicking the **Settings** button in the upper-right corner.

**Step 2:** Select the **Center** tab and complete the **Center Configuration** form:

- **Machine Name**: The hostname of the current machine (pre-populated automatically).
- **Agent Key**: The key obtained from akaBot Center registration.
- **Center URL**: The URL of your akaBot Center instance.

**Step 3:** Click **Connect** to establish the connection.

When the connection is successful, the status indicator changes to **Connected**.

![Center Configuration — Connected status](/static/img/fabb7a_image-20221117102433-4.png)

To disconnect at any time, click **Disconnect**.

---

## **Retrieve Processes**

akaBot Agent automatically synchronizes and retrieves all process packages published from akaBot Center. No manual refresh is required.

To learn how to publish a package from akaBot Studio, see: [How to use akaBot Studio](/docs/studio/latest/user-guide/how-to-use.md)

---

## **Control Processes**

From the workflow list, you can perform the following actions on any process:

- Pull the latest package version.
- View details, configure input arguments, and review execution history.
- Start a process in Standard or Picture-in-Picture (PiP) mode.
- Stop a running process.

### **1. Pull a New Package Version**

To update a process to its latest version, click the **Download** (↓) icon on the workflow card. akaBot Agent downloads and installs the new version automatically.

The updated version takes effect on the next execution.

![Workflow card with Down Arrow button to pull a new package version](/static/img/2d6c9f_image-20221117102945-5.png)

---

### **2. Workflow Detail Tabs**

Clicking any workflow card opens a side panel with **three tabs**:

#### **A. Details Tab**

Displays metadata for the selected workflow:

| Field | Description |
|---|---|
| **Name** | The automation package name. |
| **Version** | The currently installed package version. |
| **Last Run** | Timestamp of the most recent execution. |
| **Last Update** | Date the package was installed or last updated. |
| **Description** | A functional description of the package. |

> **Tip:** All text fields support text selection and can be copied with `Ctrl+C`.

![Workflow Details Tab](/static/img/agent-details-tab.png)

#### **B. Configure Tab**

Use this tab to customize input parameters (`InArgument`) before running the process.

**Supported argument types**: String (up to 4,000 characters), Int32, Boolean, and DateTime.

**Required arguments** are marked with a red asterisk (`*`):

- **No default value**: The field is empty and must be filled in before the process can run.
- **Has default value**: The field displays *"Use default value"*. Click the **Pencil** icon to override the value, or **Undo** to revert to the default.

Click **Save** to persist the configured values for future runs, or **Run** to validate and execute immediately.

![Workflow Configure Arguments](/static/img/agent-configure-tab.png)

#### **C. History Tab**

Displays an audit log of past executions for the selected workflow.

- **Execution records**: Each entry shows the execution status (Success, Failed, or Cancelled), start time, and duration.
- **Execution details**: Click any record to view the execution source (Local, Center, or PiP), output argument values, and any error messages.

![Workflow Execution History](/static/img/agent-history-tab.png)

---

### **3. Start a Process**

Only one process can run at a time. akaBot Agent supports two execution modes:

#### **Standard Mode**

To run a process on the current desktop session, click the **Play** (▶) icon on the workflow card.

The process begins executing and the Agent status changes to **Running / Busy**.

![Agent status turns to Running/Busy after clicking Play](/static/img/agent-play-button.png)

#### **Picture-in-Picture (PiP) Mode**

PiP mode runs an automation in an isolated desktop session, allowing you to continue working on the main screen without interruption.

To start a process in PiP mode, click the **PiP** icon on the workflow card.

![Workflow card with PiP icon highlighted](/static/img/agent-pip-icon.png)

> **Note:** On first use, you will be prompted to enter your Windows credentials. akaBot Agent requires these to initialize the secondary desktop session.

![Windows credentials prompt for first-time PiP session](/static/img/b6ccf9_image-20221117140949-9.png)

Once the PiP session starts, a floating window appears. Use the controls to manage the session:

- **Take Control**: Interact with the PiP session using your mouse and keyboard.
- **Keep on Top**: Pin the floating window to the foreground to monitor execution.

![PiP floating session with Take control and Keep on top options](/static/img/e9d235_328420978_738762340828688_4227970519572779063_n.png)

---

### **4. Stop a Process**

To stop a running process, click the **Stop** button on the workflow card.

Once stopped, the Agent status returns to **Available** and all associated process threads are terminated.

![Agent status returns to Available after process is stopped](/static/img/agent-stop-process.png)
