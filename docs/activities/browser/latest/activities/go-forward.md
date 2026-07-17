---
id: go-forward
title: "Go Forward"
sidebar_label: "Go Forward"
sidebar_position: 7
description: "Go Forward activity documentation."
displayed_sidebar: activitiesSidebar
---
# Go Forward

RCA.Activities.Browser.GoForward

## **Description**

The Go Forward activity goes forward one URL in the history list of the current browser.

![Browser_GoForward](/static/img/7aa8f2_9db89ed-screenshot_2021-05-25_154922.jpg)

(\* For Mandatory)

**Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  * **True** - Allows the rest of the process to continue the execution even if an error occurs within the activity.  
  * **False (default)** - Blocks the process from continuing the execution.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[655936690] Go Forward(B)`.
* **Public (Checkbox)** - If checked, the data of this activity will be shown in the log. Consider data security before using it.

## **Step-by-Step Usage**

1. **Place inside a browser container**: Drag the **Go Forward** activity into the **Do** container of [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md).
2. **Run the workflow**: akaBot navigates the active browser window forward to the next webpage in its history.

![test-go-forward.png](/static/img/test-go-forward.png)

## **Troubleshooting**

* **Invalid Browser Session**: If the activity throws an error or fails to execute, ensure that it is running inside an active [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) or [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md) container, and that the browser tab has not been closed.
* **No Forward Page in History**: If there is no forward page in the browser session's history (e.g. if the user has not navigated back first), the activity will not perform any navigation action.
* **WebDriver Communication Failure**: If the browser driver (e.g. ChromeDriver) has crashed or disconnected, restart your browser session and check if the driver version matches your browser (see the [Environment Setup Guide](/docs/activities/browser/latest/setup-browser-environment.md)).

## **Related topics**

* [Browser Workflow](/docs/activities/browser/latest/user-guide/browser-workflow.md)
