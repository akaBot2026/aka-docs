---
id: switch-to
title: "Switch To"
sidebar_label: "Switch To"
sidebar_position: 20
description: "Switch To activity documentation."
displayed_sidebar: activitiesSidebar
---
# Switch To

RCA.Activities.Browser.SwitchTo

## **Description**

The Switch To activity allows you to switch between different UI Elements within a browser.

![image-20220505133627-1.png](/img/7f3a6b_image-20220505133627-1.png)

(\*For Mandatory)

## **In the body of the activity**

* **Switch To (Dropdown List)** - Choose the type to switch to  
  ・FRAME - An iframe.  
  ・DEFAULT\_CONTENT - Main webpage.  
  ・PARENT\_FRAME - To be used if there is a nested iframe.  
  ・WINDOW - To switch between tabs.  
  ・ALERT - Alert box with a specified message.  
  ・ACTIVE\_ELEMENT - currently focused element.
* **Value (String)**\* - Value of the specified element.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Input**

* **Switch To Type (Dropdown List)**- Chooses the type of HTML element to switch to.  
  ・FRAME - An iframe.  
  ・DEFAULT\_CONTENT - Main webpage.  
  ・PARENT\_FRAME - To be used if there is a nested iframe.  
  ・WINDOW - To switch between tabs.  
  ・ALERT - Alert box with a specified message.  
  ・ACTIVE\_ELEMENT - currently focused element.
* **Switch To Value (String)**\* - Value of the specified element.

**Misc**

* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: [345365] Switch To
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

**Options**

* **Wait Timeout MS:** Specifies the maximum time (in milliseconds) the system will wait for the target tab/window to be available before performing the switch. Enter a numeric value. E.g: 30000
