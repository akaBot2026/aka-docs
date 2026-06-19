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

## **In the body of the activity**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Misc**

* **Display (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: [2446667] Go Back
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

## **Step-by-Step Usage**

1. **Place inside a browser container**: The **Go Back** activity must be placed inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.
2. **Configure properties (optional)**: Modify the **Display Name** or set **Continue On Error** in the Properties panel if needed.
3. **Run the workflow**: Execute the process. When the activity is executed, akaBot will navigate the active browser window back to the previous page in its history.

## **Troubleshooting**

* **Invalid Browser Session**: If the activity throws an error or fails to execute, ensure that it is running inside an active [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) or [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md) container, and that the browser tab has not been closed.
* **WebDriver Communication Failure**: If the browser driver (e.g. ChromeDriver) has crashed or disconnected, restart your browser session and check if the driver version matches your browser (see the [Environment Setup Guide](/docs/activities/browser/latest/setup-browser-environment.md)).
