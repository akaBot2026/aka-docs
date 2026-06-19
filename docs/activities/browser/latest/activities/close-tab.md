---
id: close-tab
title: "Close tab"
sidebar_label: "Close tab"
sidebar_position: 14
description: "Close tab activity documentation."
displayed_sidebar: activitiesSidebar
---
#  Close tab

RCA.Activities.Browser.CloseTab

## **Description**

The **Close Tab** activity closes the currently opened tab in the browser.

![1774422442503-694.png](/static/img/f51f8f_1774422442503-694.png)

(\* For Mandatory)

 **Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **Properties**

### **Common**

* **Continue on Error (Boolean):** A Boolean variable has two possible values: True or False.
  + **True:** The process continues execution even if an error occurs within the activity.
  + **False (default):** The process execution is stopped if an error occurs.
* **Timeout Ms (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **Attribute Name (String)**\* - The expression of the attribute to be selected from. It is a string, so it has to be encased in quotation marks.
* **Selector (String)**\* - Text property used to find a particular UI element when the activity is executed. It is actually a XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.
* **Wait Visible (Checkbox)** - Check this box if you want the automation waits for the target to be visible before executing the activity. This is checked by default

---

### **Misc**

* **Display Name (String):** The name of the activity. You can edit it to better organize and structure your workflow. E.g: [2352452] Close Tab
* **Private (Checkbox):** Check this option to make the activity private. Before enabling, ensure that data security requirements are considered. By default, this option is unchecked.

**Output**

* **Output Value (String)**- Value of the attribute that will be outputted with type = ‘String’.

**Scroll**: To control how the system scrolls the screen to make the target element visible before performing an action*.*

* ​​​​​​​**Horizontal scroll:** Enter a numeric value (pixels) to scroll horizontally.
  + Positive value → scroll right
  + Negative value → scroll left
  + E.g: 200
* **Scroll element to view (checkbox):** The system automatically scrolls until the target element is visible. Default setting is unchecked.
* **Vertical scroll:** Enter a numeric value (pixels) to scroll vertically
  + Positive value → scroll down
  + Negative value → scroll up
  + E.g: 300

## **Step-by-Step Usage**

1. **Place inside a browser container**: The **Close Tab** activity must be placed inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.
2. **Configure properties (optional)**: Modify the **Display Name** or set **Timeout MS** in the Properties panel if needed.
3. **Run the workflow**: Execute the process. When the activity is reached, akaBot will close the active tab in the browser session context.

## **Troubleshooting**

* **Invalid Browser Session**: If the activity throws an error or fails to execute, ensure that it is running inside an active [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) or [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md) container, and that the browser tab has not been closed.
* **WebDriver Communication Failure**: If the browser driver (e.g. ChromeDriver) has crashed or disconnected, restart your browser session and check if the driver version matches your browser (see the [Environment Setup Guide](/docs/activities/browser/latest/setup-browser-environment.md)).
