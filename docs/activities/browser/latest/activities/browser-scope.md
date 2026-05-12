---
id: browser-scope
title: "Browser Scope"
sidebar_label: "Browser Scope"
sidebar_position: 4
description: "Browser Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# Browser Scope

RCA.Activities.Browser.BrowserScrope

## **Description**

The Browser Scope activity creates a container that lets you attach an already opened Browser and execute actions within the Browser.

![Browser_BrowserScope](/img/c5655a_c41d394-screenshot_2021-05-25_155316.jpg)  
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

* **Output Browser (String)** - Output of the activity with type = ‘Browser’. Not allow whitespace in the output’s name.
