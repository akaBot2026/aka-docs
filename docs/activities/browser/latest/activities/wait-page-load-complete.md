---
id: wait-page-load-complete
title: "Wait Page Load Complete"
sidebar_label: "Wait Page Load Complete"
sidebar_position: 28
description: "Wait Page Load Complete activity documentation."
displayed_sidebar: activitiesSidebar
---
# Wait Page Load Complete

RCA.Activities.Browser.WaitPageLoadComplete

## **Description**

The Wait Page Load Complete allows you to waits until a webpage is fully loaded.

![image-20220505140621-1.png](/static/img/9d1869_image-20220505140621-1.png)

(\* For Mandatory)

**Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity.
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations. Default value: 200.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [34116574] Wait Page Load Complete
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

**Output**

* **Wait Success (Boolean)**- A Boolean variable has two possible values: True or False  
  **・True** - The page was fully loaded.  
  **・False** - The page was not fully loaded.

## **Step-by-Step Usage**

1. **Place inside a browser container**: Drag the **Wait Page Load Complete** activity into the **Do** container of [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md).
2. **Configure timeout (optional)**: Set the **Timeout MS** in the properties panel to adjust how long to wait for the page load.
3. **Run the workflow**: akaBot pauses execution until the active web page is fully loaded.

> For more information about browser containers and browser sessions, see **[Browser Workflow](/docs/activities/browser/latest/user-guide/browser-workflow.md)**.

## **Troubleshooting**

* **Invalid Browser Session**: If the activity throws an error or fails to execute, ensure that it is running inside an active [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) or [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md) container, and that the browser tab has not been closed.
* **WebDriver Communication Failure**: If the browser driver (e.g. ChromeDriver) has crashed or disconnected, restart your browser session and check if the driver version matches your browser (see the [Environment Setup Guide](/docs/activities/browser/latest/setup-browser-environment.md)).
