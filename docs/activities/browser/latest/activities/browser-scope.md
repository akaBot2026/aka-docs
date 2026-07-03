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

The **Browser Scope** activity is a container that allows subsequent Browser activities to continue working with an existing browser session by using a Browser variable.

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

1. **Add the Browser Scope activity**: Drag the **Browser Scope** activity below a container or activity that outputs a browser session.
2. **Select the browser session**: In the **Browser** property (under **Input**), select the `Browser` variable representing the active session. For more details on browser variables, see [Browser Workflow](/docs/activities/browser/latest/user-guide/browser-workflow.md).
3. **Add nested activities**: Drag the browser activities you want to execute into the **Do** container.
4. **Run the workflow**: akaBot executes the nested activities in the same browser session.

![browser-scope.png](/static/img/browser-scope.png)

## **Troubleshooting**

* **Null Browser Reference**: If the input browser variable is null or uninitialized, the activity will throw a `NullReferenceException`. Ensure that the parent activity that initialized the variable executed successfully.
* **Auto-Quitting**: If **Quit Browser on Completed or Faulted** is checked (default), the browser session will close immediately after the activities in the **Do** container finish. Uncheck it if you need the browser to remain open.

## **Related topics**

* [Browser Workflow](/docs/activities/browser/latest/user-guide/browser-workflow.md)
