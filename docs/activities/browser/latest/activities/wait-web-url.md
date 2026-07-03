---
id: wait-page-url
title: "Wait Page Url"
sidebar_label: "Wait Page Url"
sidebar_position: 31
description: "Wait Page Url activity documentation."
displayed_sidebar: activitiesSidebar
---
# Wait Page Url

RCA.Activities.Browser.WaitPageUrl

## **Description**

The Wait Page URL verifies if the page URL has the requirement format according to the predefined value

![image-20220505142016-2.png](/static/img/613d9d_image-20220505142016-2.png)

(\* for Mandatory)

**Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **In the body of the activity**

* **Comparison Operator (Dropdown List)**- allow mathematical calculation as well as basic operations to be performed with ease  
  **・EQUALS** – The page URL is exactly the same as the predefined value.  
  **・CONTAINS** – The page URL contains the predefined value.  
  **・MATCHES** – The page URL has the same regular expression as the predefined value
* **Value (String)**\* - The predefined value to verify the page URL

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Input**

* **Comparison Operator (Dropdown List)**- allow mathematical calculation as well as basic operations to be performed with ease  
  **・EQUALS** – The page URL is exactly the same as the predefined value.  
  **・CONTAINS** – The page URL contains the predefined value.  
  **・MATCHES** – The page URL has the same regular expression as the predefined value
* **Url Value (String)**\* - The predefined value to verify the page URL

**Misc**

* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [2356558] Wait Page Url
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

**Options**

* **Wait Timeout MS (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 20000

**Output**

* **Result (Boolean)** - A Boolean variable has two possible values: True or False.  
  **・True**- The page URL meet the requirement  
  **・False**- The page URL does not meet the requirement.

## **Step-by-Step Usage**

1. **Place inside a browser container**: Drag the **Wait Web Url** activity into the **Do** container of [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md).
2. **Configure the target URL**: Enter the expected URL string (or a wildcard pattern) in the **Url** property of the properties panel.
3. **Run the workflow**: akaBot pauses execution until the browser's active tab URL matches the specified text.

> For more information about browser containers and browser sessions, see **[Browser Workflow](/docs/activities/browser/latest/user-guide/browser-workflow.md)**.

## **Troubleshooting**

* **Invalid Browser Session**: If the activity throws an error or fails to execute, ensure that it is running inside an active [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) or [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md) container, and that the browser tab has not been closed.
* **WebDriver Communication Failure**: If the browser driver (e.g. ChromeDriver) has crashed or disconnected, restart your browser session and check if the driver version matches your browser (see the [Environment Setup Guide](/docs/activities/browser/latest/setup-browser-environment.md)).
