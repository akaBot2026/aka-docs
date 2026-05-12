---
id: wait-web-attribute
title: "Wait Web Attribute"
sidebar_label: "Wait Web Attribute"
sidebar_position: 14
description: "Wait Web Attribute activity documentation."
displayed_sidebar: activitiesSidebar
---
# Wait Web Attribute

RCA.Activities.Common.WaitWebAttribute

## **Description**

The Wait Web Attribute waits for the value of a specified web attribute to be enabled.

![image-20220505135246-1.png](/img/2d9e58_image-20220505135246-1.png)

(\*For mandatory)

## **In the body of activity**

* **Indicate on screen**\* - Enables to select an UI element or region on screen while running the workflow.
* **Attribute Name (String)**\* - The expression of the attribute to be selected from.
* **Attribute Value (String)**\* - The value of the specified attribute.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity. The default amount of time is 300 milliseconds.  
  E.g: 300
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations. The default amount of time is 200 milliseconds.  
  E.g: 200

**Input**

* **Attribute Name (String)**\* - The expression of the attribute to be selected from.
* **Attribute Value (String)**\* - The value of the specified attribute.

**Properties**

* **Target (Dropdown list)** - Identifies the UI element the activity works with.  
  **Element (UIElement)** - Use the UiElement variable returned by another activity. This property cannot be used alongside the Selector property.  
  **Selector (String)** - Text property used to find a particular UI element when the activity is executed. It is actually an XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.  
  **Timeout MS (Int32)** - Specifies the amount of time (in milliseconds) to wait for the activity to run before an error is thrown. The default value is 30000 milliseconds (30 seconds).  
  **Wait For Ready (Dropdown list)** - Before performing the actions, wait for the target to become ready. The following options are available: None - does not wait for the target to be ready; Interactive - waits until only a part of the app is loaded; Complete - waits for the entire app to be loaded.
* **Wait Visible (Checkbox)** - Check this box if you want the automation waits for the target to be visible before executing the activity. This is checked by default

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is uncheck.
