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

**Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better. E.g: [3131265578] Go Forward
* **Public (Checkbox)**- Check if you want to public it. Default is unchecked.

## **Step-by-Step Usage**

1. **Place inside a browser container**: The **Go Forward** activity must be placed inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.
2. **Configure properties (optional)**: Modify the **Display Name** or set **Continue On Error** in the Properties panel if needed.
3. **Run the workflow**: Execute the process. When the activity is executed, akaBot will navigate the active browser window forward to the next page in its history (if a forward page exists).

## **Troubleshooting**

* **Invalid Browser Session**: If the activity throws an error or fails to execute, ensure that it is running inside an active [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) or [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md) container, and that the browser tab has not been closed.
* **WebDriver Communication Failure**: If the browser driver (e.g. ChromeDriver) has crashed or disconnected, restart your browser session and check if the driver version matches your browser (see the [Environment Setup Guide](/docs/activities/browser/latest/setup-browser-environment.md)).
