---
id: browser-scope
title: "Browser Scope"
sidebar_label: "Browser Scope"
sidebar_position: 4
description: "Browser Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# Browser Scope

RCA.Activities.Browser.BrowserScope

## **Description**

The Browser Scope activity creates a container that lets you attach an already opened Browser and execute actions within the Browser.

![Browser_BrowserScope](/static/img/c5655a_c41d394-screenshot_2021-05-25_155316.jpg)  
(\* For Mandatory)

## **In the body of activity**

* **Do**- The activities you want to execute within the browser.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.
* **Quit Browser on Completed or Faulted (Checkbox)** - Specifies whether the browser is closed when execution is finished or faulted. Default value is checked.

**Input**

* **Browser (String)**\* - Input of type Browser. The input can be gotten from the output of the Open Browser activity.

**Misc**

* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [234234234] Browser Scope
* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it. Default value is unchecked.

**Output**

* **Output Browser (String)**  - Output of the activity with type = ‘Browser’. Not allow whitespace in the output’s name.

## **Step-by-Step Usage**

1. **Get a Browser Variable**: Ensure you have an active browser variable from the **Output Browser** property of either [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) or [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md).
2. **Add Browser Scope**: Drag the **Browser Scope** activity into your workflow.
3. **Link the Browser Session**: Pass the browser variable into the **Browser** property under the **Input** section of the **Properties** panel.
4. **Define actions**: Place automation activities (e.g., [Navigate To](/docs/activities/browser/latest/activities/navigate-to.md), [Click](/docs/activities/browser/latest/activities/click.md)) inside the **Do** container. All nested activities will run within the context of the linked browser.
5. **Output session reference (optional)**: Store the context in the **Output Browser** property if you need to pass it to subsequent activities.

## **Troubleshooting**

* **Null Browser Reference**: If the input browser variable is null or uninitialized, the activity will throw a `NullReferenceException`. Ensure that the parent activity that initialized the variable executed successfully.
* **Auto-Quitting**: If **Quit Browser on Completed or Faulted** is checked (default), the browser session will close immediately after the activities in the **Do** container finish. Uncheck it if you need the browser to remain open.

