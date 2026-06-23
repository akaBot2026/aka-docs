---
id: switch-to
title: "Switch To"
sidebar_label: "Switch To"
sidebar_position: 20
description: "Switch To activity documentation."
displayed_sidebar: activitiesSidebar
---
# Switch To

RCA.Activities.Browser.SwitchTo

## **Description**

The Switch To activity allows you to switch between different UI Elements within a browser.

![image-20220505133627-1.png](/static/img/7f3a6b_image-20220505133627-1.png)

(\*For Mandatory)

**Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **In the body of the activity**

* **Switch To (Dropdown List)** - Choose the type to switch to  
  ・FRAME - An iframe.  
  ・DEFAULT\_CONTENT - Main webpage.  
  ・PARENT\_FRAME - To be used if there is a nested iframe.  
  ・WINDOW - To switch between tabs.  
  ・ALERT - Alert box with a specified message.  
  ・ACTIVE\_ELEMENT - currently focused element.
* **Value (String)**\* - Value of the specified element.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Input**

* **Switch To Type (Dropdown List)**- Chooses the type of HTML element to switch to.  
  ・FRAME - An iframe.  
  ・DEFAULT\_CONTENT - Main webpage.  
  ・PARENT\_FRAME - To be used if there is a nested iframe.  
  ・WINDOW - To switch between tabs.  
  ・ALERT - Alert box with a specified message.  
  ・ACTIVE\_ELEMENT - currently focused element.
* **Switch To Value (String)**\* - Value of the specified element.

**Misc**

* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: [345365] Switch To
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

**Options**

* **Wait Timeout MS:** Specifies the maximum time (in milliseconds) the system will wait for the target tab/window to be available before performing the switch. Enter a numeric value. E.g: 30000

## **Step-by-Step Usage**

1. **Place inside a browser container**: The **Switch To** activity must be placed inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.
2. **Choose Switch To Type**: In the body or **Properties** panel under **Input**, select the type of element or window you want to switch focus to (e.g., `FRAME` for an iframe, `WINDOW` for switching tabs, or `ALERT` for handling popup alerts).
3. **Specify the Value**: In the **Switch To Value** field, enter the identifier or index of the target frame or window in quotes (e.g., `"1"` for the second tab, or the iframe's ID/name). If switching to `DEFAULT_CONTENT` or `ACTIVE_ELEMENT`, you can leave this field blank.
4. **Run the workflow**: Execute the process. akaBot will switch its execution focus to the specified context (such as inside the target iframe) so subsequent activities can interact with elements within that scope.

## **Troubleshooting**

* **Invalid Browser Session**: If the activity throws an error or fails to execute, ensure that it is running inside an active [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) or [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md) container, and that the browser tab has not been closed.
* **WebDriver Communication Failure**: If the browser driver (e.g. ChromeDriver) has crashed or disconnected, restart your browser session and check if the driver version matches your browser (see the [Environment Setup Guide](/docs/activities/browser/latest/setup-browser-environment.md)).
