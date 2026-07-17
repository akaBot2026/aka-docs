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

The **Attach Browser** activity is a container activity that attaches to an existing Chrome browser session and executes Browser activities within that session.

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

1. **Add the Attach Browser activity**: Drag and drop the **Attach Browser** activity into your workflow (typically below [Start Browser For Attach](/docs/activities/browser/latest/activities/start-browser-for-attach.md)).
2. **Configure the connection**: Select the browser type and specify the selector or browser session. For details, see [Browser Workflow](/docs/activities/browser/latest/user-guide/browser-workflow.md).
3. **Add nested activities**: Place the browser activities you want to execute inside the **Do** container.
4. **Run the workflow**: akaBot attaches to the target session and executes the nested activities.

![attach-browser](/static/img/attach-browser.png)

## **Troubleshooting**

* **Browser not attached**: Ensure that [Start Browser For Attach](/docs/activities/browser/latest/activities/start-browser-for-attach.md) runs successfully before **Attach Browser**.
* **Cannot find element**: Verify that the target element is available on the current page and reselect it using **Pick target element** if necessary.
* **Browser actions not executed**: Confirm that all Browser activities (such as [Navigate To](/docs/activities/browser/latest/activities/navigate-to.md), [Type Into](/docs/activities/browser/latest/activities/type-into.md), and [Send Hot Keys](/docs/activities/browser/latest/activities/send-hot-keys.md)) are placed inside the **Do** container of **Attach Browser**.
* **Timeout or WebDriver errors**: Close any existing Chrome instances started by previous debugging sessions and run the workflow again.

## **Related topics**

* [Browser Workflow](/docs/activities/browser/latest/user-guide/browser-workflow.md)
