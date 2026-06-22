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

A container that enables you to attach to a browser which is already running

![Browser_StartBrowserForAttach](/static/img/554b0d_bdb1dad-screenshot_2021-05-25_173342.jpg)

(\* for Mandatory)

## **In the body of activity**

* **Click to launch browser**\* - The activities you want to attach within the browser.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Input**

* **Browser Type**- The choice of browser for this activity to use. There is only one choice: Chrome

**Misc**

* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **E.g**: [141414124] Start Browser for Attach
* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it. This tickbox is uncheck by default

## **Step-by-Step Usage**

1. **Add the Start Browser For Attach activity**: Drag the **Start Browser For Attach** activity into the designer.
2. **Select Browser Type**: In the **Properties** panel, select `Chrome` from the **Browser Type** dropdown list (currently only Chrome is supported).
3. **Drag trigger action**: Inside the **Click to launch browser** container, place a [Click](/docs/activities/browser/latest/activities/click.md) activity (or other actions) that triggers launching the web browser instance.
4. **Attach sequence**: Immediately after this activity, add the [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md) activity and indicate this browser session on screen.

## **Troubleshooting**

* **Port conflicts**: If Chrome fails to launch or attach, verify that the remote debugging port (default `9222`) is not blocked or in use by another application.
* **Chrome not launching**: Verify that you have placed a valid launch trigger activity (like [Click](/docs/activities/browser/latest/activities/click.md)) inside the **Click to launch browser** container.