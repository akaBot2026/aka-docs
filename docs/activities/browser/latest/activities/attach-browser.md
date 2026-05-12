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

![Browser_AttachBrowser](/img/b5a5f0_a15035e-screenshot_2021-05-25_154745.jpg)

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
