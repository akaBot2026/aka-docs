---
id: go-back
title: "Go Back"
sidebar_label: "Go Back"
sidebar_position: 6
description: "Go Back activity documentation."
displayed_sidebar: activitiesSidebar
---
# Go Back

RCA.Activities.Browser.GoBack

## **Description**

The Go Back activity goes back one URL in the history list of the current browser.

![Browser_GoBack](/static/img/dc4c6f_bdce0db-screenshot_2021-05-25_154910.jpg)

(\* For Mandatory)

**Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  * **True** - Allows the rest of the process to continue the execution even if an error occurs within the activity.  
  * **False (default)** - Blocks the process from continuing the execution.
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity.
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations.

**Input**

* **Browser (Browser)** - The existing browser variable representing the browser session you want to navigate back. If left empty, the activity will navigate back the active tab in the current container context.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[536469725] Go Back`.
* **Public (Checkbox)** - If checked, the data of this activity will be shown in the log. Consider data security before using it.

## **Step-by-Step Usage**

1. **Place inside a browser container**: Drag the **Go Back** activity into the **Do** container of [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md).
2. **Run the workflow**: akaBot navigates the active browser window back to the previous webpage in its history.

**NOTE**

* The **Go Back** activity only works if the browser has previously navigated to another webpage during the current browser session.

![go-back](/static/img/go-back.png)

## **Troubleshooting**

* **Invalid Browser Session**: If the activity throws an error or fails to execute, ensure that it is running inside an active [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) or [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md) container, or that a valid browser session variable is provided in the **Browser** property.
* **No Previous Page in History**: If there is no previous page in the browser session's history (e.g. if the browser was just opened and no navigation occurred), the activity will not perform any navigation action.
* **WebDriver Communication Failure**: If the browser driver (e.g. ChromeDriver) has crashed or disconnected, restart your browser session and check if the driver version matches your browser (see the [Environment Setup Guide](/docs/activities/browser/latest/setup-browser-environment.md)).

## **Related topics**

* [Browser Workflow](/docs/activities/browser/latest/user-guide/browser-workflow.md)
