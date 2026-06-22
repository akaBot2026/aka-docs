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

1. **Place inside a browser container**: The **Wait Page Load Complete** activity must be placed inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.
2. **Configure properties (optional)**: Modify the **Display Name**, **Continue On Error**, **Delay Before**, or **Delay After** in the Properties panel if needed (e.g., set **Delay Before** to wait a brief moment before checking the load status).
3. **Map the Output (optional)**: Under **Output** -> **Wait Success**, create a Boolean variable named `isLoaded` (Ctrl+K -> type `isLoaded` -> press Enter) to store whether the page loaded successfully.
4. **Run the workflow**: Execute the process. akaBot will block further execution until the current webpage's document status transitions to complete (fully loaded).


## **Troubleshooting**

* **Invalid Browser Session**: If the activity throws an error or fails to execute, ensure that it is running inside an active [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) or [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md) container, and that the browser tab has not been closed.
* **WebDriver Communication Failure**: If the browser driver (e.g. ChromeDriver) has crashed or disconnected, restart your browser session and check if the driver version matches your browser (see the [Environment Setup Guide](/docs/activities/browser/latest/setup-browser-environment.md)).
