---
id: navigate-to
title: "Navigate To"
sidebar_label: "Navigate To"
sidebar_position: 8
description: "Navigate To activity documentation."
displayed_sidebar: activitiesSidebar
---
# Navigate To

RCA.Activities.Common.NavigateTo

## **Description**

The Navigate To activity allows you to navigate to another URL on the current browser.

![image-20220505134753-1.png](/img/03bea2_image-20220505134753-1.png)

(\*For mandatory)

## **In the body of activity**

* **URL to be inserted (String)**\* - The URL that you want to navigate to in the browser. The URL must be quoted.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity. The default amount of time is 300 milliseconds.  
  E.g: 300
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations. The default amount of time is 200 milliseconds.  
  E.g: 200

**Input**

* **Browser (NativeBrowser)** - The existing browser variable that you want to attach to.
* **URL (String)**\* – Starting this destination URL when the browser is opened.  
  E.g: "https://www.google.com/"

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is uncheck.
