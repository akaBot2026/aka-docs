---
id: attach-browser
title: "Attach Browser"
sidebar_label: "Attach Browser"
sidebar_position: 3
description: "Attach Browser activity documentation."
displayed_sidebar: activitiesSidebar
---
# Attach Browser

RCA.Activities.Browser.AttachBrowser

## **Description**

A container that enables you to attach to an already opened native browser and perform multiple actions within it.

![Browser_AttachBrowser](/static/img/b5a5f0_a15035e-screenshot_2021-05-25_154745.jpg)

(\*For mandatory)

## **In the body of the activity**

* **Do** - The activities you want to execute within the browser.

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Input**

* **Browser (Browser)** - The existing browser variable representing the browser session you want to attach to.
* **Browser Type (Dropdown)** - The choice of browser for this activity to use (e.g. Chrome, Edge, Firefox).
* **Selector (String)** - Text property used to find a particular window or tab when the activity is executed. It is an XML fragment specifying attributes of the GUI element you are looking for.
* **Timeout MS (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [4234234] Attach Browser
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. This checkbox is unchecked by default.

**Output**

* **Output Browser (Browser)** - Output variable of the activity with type = ‘Browser’. Not allow whitespace in the output’s name.

## **Step-by-Step Usage**

1. **Obtain an open browser session**:
   * **Method A**: Use the [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) activity and assign its output to a `Browser` variable (e.g., `myBrowser`).
   * **Method B**: Launch the browser in debugging mode using the [Start Browser For Attach](/docs/activities/browser/latest/activities/start-browser-for-attach.md) activity.
2. **Add the Attach Browser activity**: Drag and drop the **Attach Browser** activity into your workflow.
3. **Configure connection method**: In the **Properties** panel under **Input**:
   * If using **Method A**: Assign your variable `myBrowser` to the **Browser** property.
   * If using **Method B**: Leave the **Browser** field empty and configure the **Selector** property to target the active window/tab.
4. **Choose Browser Type**: Set the **Browser Type** (e.g., `Chrome`) matching your target browser.
5. **Place activities inside the container**: Inside the **Do** container block, drag browser activities (like [Click](/docs/activities/browser/latest/activities/click.md) or [Type Into](/docs/activities/browser/latest/activities/type-into.md)) to execute actions within this attached session.
6. **Assign output variable (optional)**: In the **Output Browser** property, create a new browser variable to pass this session to subsequent container activities.

## **Troubleshooting**

* **Target Window Not Found**: 
  * If attaching using a **Selector**, ensure the target browser window/tab is open and visible. If the tab has a dynamic title, edit the Selector to use wildcards (`*` or `?`).
  * If attaching using a debugging port, ensure the browser was launched correctly with remote debugging enabled.
* **Invalid Browser Session**: If using a **Browser** variable, ensure that the variable is initialized and that the browser window has not been closed prior to reaching this activity.
* **WebDriver Communication Failure**: If the browser driver (e.g. ChromeDriver) has crashed or disconnected, restart your browser session and check if the driver version matches your browser (see the [Environment Setup Guide](/docs/activities/browser/latest/setup-browser-environment.md)).

