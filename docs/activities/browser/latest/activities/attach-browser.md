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

* **Do** - The activities you want to execute within the browser.

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.
* **Quit Browser on Completed or Faulted (Checkbox)** - Specifies whether the browser is closed when execution is finished or faulted. Default value is unchecked.

**Input**

* **Browser Type**- The choice of browser for this activity to use. There is only 1 choice: Chrome

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [4234234] Attach Browser
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. This check box is unchecked by default

**Output**

* **Output Browser** - Output variable of the activity with type = ‘Browser’. Not allow whitespace in the output’s name.

## **Step-by-Step Usage**

1. **Start Browser in Debugging Mode**: Before attaching, start your Chrome browser in debugging mode using the [Start Browser For Attach](/docs/activities/browser/latest/activities/start-browser-for-attach.md) activity.
2. **Add the Attach Browser activity**: Drag the **Attach Browser** activity below the Start Browser For Attach activity.
3. **Choose Browser Type**: Ensure **Browser Type** is set to `Chrome` in the **Properties** panel.
4. **Place activities inside the container**: Add activities like [Click](/docs/activities/browser/latest/activities/click.md) or [Type Into](/docs/activities/browser/latest/activities/type-into.md) inside the **Do** container block to perform automated tasks in the attached browser.
5. **Assign output variable (optional)**: Store the attached session in a browser variable by specifying a name in the **Output Browser** field.

## **Troubleshooting**

* **Target Window Not Found**: Ensure that the Chrome window is fully open and active before running the workflow. If it doesn't attach, check that the browser was correctly launched with the remote debugging port.
* **Quit Browser behavior**: By default, **Quit Browser on Completed or Faulted** is unchecked, meaning the attached browser remains open after automation ends. Check this option if you want akaBot to close the browser automatically.
