---
id: navigate-to
title: "Navigate To"
sidebar_label: "Navigate To"
sidebar_position: 5
description: "Navigate To activity documentation."
displayed_sidebar: activitiesSidebar
---
# Navigate To

RCA.Activities.Browser.NavigateTo

## **Description**

The Navigate To activity allows you to navigate to another URL on the current browser.

![Browser_NavigateTo](/static/img/00ebcd_896cc4b-screenshot_2021-05-25_154828.jpg)

(\* For Mandatory)

**Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **In the body of the activity**

* **URL to be inserted (String)\***- The URL that you want to navigate to in the browser. The URL must be quoted.  
  E.g: "https://www.google.com/"

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Input**

* **URL (String)**\*– The destination URL to navigate to.  
  E.g: "https://www.google.com/"

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [1566898] Navigate To
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

## **Step-by-Step Usage**

1. **Place inside a browser container**: The **Navigate To** activity must be placed inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.
2. **Enter the target URL**: In the body of the activity or in the **URL** field of the **Properties** panel, type the destination URL enclosed in quotation marks. E.g., `"https://www.google.com/"`.
3. **Run the workflow**: When executed, akaBot will redirect the current browser tab to the specified URL without opening a new window.

## **Troubleshooting**

* **Invalid Browser Session**: If the activity throws an error or fails to execute, ensure that it is running inside an active [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) or [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md) container, and that the browser tab has not been closed.
* **WebDriver Communication Failure**: If the browser driver (e.g. ChromeDriver) has crashed or disconnected, restart your browser session and check if the driver version matches your browser (see the [Environment Setup Guide](/docs/activities/browser/latest/setup-browser-environment.md)).
