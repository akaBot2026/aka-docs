---
id: navigate-to
title: "Navigate To"
sidebar_label: "Navigate To"
sidebar_position: 5
description: "Navigate To activity documentation."
displayed_sidebar: activitiesSidebar
---
# Navigate To

RCA.Activities.Browser.NavigateTo

## **Description**

The Navigate To activity allows you to navigate to another URL on the current browser.

![Browser_NavigateTo](/img/00ebcd_896cc4b-screenshot_2021-05-25_154828.jpg)

(\* For Mandatory)

## **In the body of the activity**

* **URL to be inserted (String)\***- The URL that you want to navigate to in the browser. The URL must be quoted.  
  E.g: "https://www.google.com/"

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Input**

* **URL (String)**\*– (String) Starting this destination URL when the browser is opened.  
  E.g: "https://www.google.com/"

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [1566898] Navigate To
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.
