---
id: start-browser-for-attach
title: "Start Browser For Attach"
sidebar_label: "Start Browser For Attach"
sidebar_position: 2
description: "Start Browser For Attach activity documentation."
displayed_sidebar: activitiesSidebar
---

# Start Browser For Attach

RCA.Activities.Browser.StartBrowserForAttach

## **Description**

The **Start Browser For Attach** activity provides a container helper during design time to launch a Google Chrome browser instance, allowing subsequent browser activities to attach to it and execute within that browser session.

![Browser_StartBrowserForAttach](/static/img/554b0d_bdb1dad-screenshot_2021-05-25_173342.jpg)

(\* for Mandatory)

## **In the body of the activity**

* **Click to launch browser**\* - A design-time link that launches a new Chrome instance with remote debugging enabled. This enables the **Attach Browser** activity to locate and attach to this browser session.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - Specifies whether the workflow execution continues even if this activity encounters an error.
  * `True` - Allows the rest of the workflow to continue.
  * `False` (default) - Stops the workflow execution and throws an error.

**Input**

* **Browser Type (Dropdown)** - Specifies the web browser to be used. Currently, only `Chrome` is supported.

**Misc**

* **Display Name (String)** - The name of the activity displayed in the designer panel. You can modify this name to organize and structure your code better. E.g., `[141414124] Start Browser For Attach`
* **Public (Checkbox)** - If selected, makes the activity public. Consider data security requirements before checking this option. Default is unchecked.

## **Step-by-Step Usage**

1. **Add the Start Browser For Attach activity**: Drag and drop the **Start Browser For Attach** activity into the designer panel.
2. **Select Browser Type**: In the **Properties** panel under **Input**, select `Chrome` from the **Browser Type** dropdown list.
3. **Launch the browser**: In the activity designer body, click the **Click to launch browser** link to open a new Chrome browser instance.
4. **Add the Attach Browser activity**: Drag an [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md) activity and place it immediately below the **Start Browser For Attach** activity.
5. **Configure the Selector**: In the **Properties** panel of the **Attach Browser** activity, configure the **Selector** property to target the Chrome browser window opened in Step 3 (for example, by opening the Selector Editor and selecting/indicating the browser window).
6. **Build your browser automation**: Add subsequent browser activities (such as [Click](/docs/activities/browser/latest/activities/click.md), [Type Into](/docs/activities/browser/latest/activities/type-into.md), or [Get Text](/docs/activities/browser/latest/activities/get-text.md)) inside the **Do** container of the **Attach Browser** activity.

![start-browser-for-attach](/static/img/start-browser-for-attach.png)

## **Troubleshooting**

* **Chrome fails to launch**: If the browser does not open after clicking the **Click to launch browser** link:
  * Verify that Google Chrome is correctly installed on the machine.
  * Ensure that Chrome is not blocked by local security software, firewalls, or system Group Policies.
* **Unable to attach to the browser**: If the **Attach Browser** activity fails to attach to the browser:
  * Ensure the target Chrome window was indeed launched via the **Click to launch browser** link.
  * Close any active Chrome processes in the background and retry.
  * Verify that no other applications are using the default remote debugging port (`9222`).

## **Related topics**

* [Browser Workflow](/docs/activities/browser/latest/user-guide/browser-workflow.md)
