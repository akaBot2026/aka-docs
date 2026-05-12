---
id: type-into
title: "Type Into"
sidebar_label: "Type Into"
sidebar_position: 21
description: "Type Into activity documentation."
displayed_sidebar: activitiesSidebar
---
# Type Into

RCA.Activities.IE.TypeInto

## **Description**

The Type Into activity allows you to type text into fields of an IE browser.

![image-20220506111327-1.png](/img/d6966f_image-20220506111327-1.png)

(\* for Mandatory)

**In the body of the activity**

* **Pick Target Element**\* - Chooses the field to select the item. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Before Type**

* **Click(IE) (Checkbox)** - If selected, a click action is performed before this activity.
* **Empty Field (Checkbox)**- If selected, the field will get cleared before typing.
* **Set Focus (Checkbox)**- If selected, the field will get focused before typing.

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even an error occurs within the activity. False (default): blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to run before an error is thrown. If the timeout expires, the activity will terminate. Default value: 30000 (milliseconds).  
  **Ex**: 30000

**Input**

* **Selector (String)**\* - String of characters that identifies the element to be checked for existence on the IE browser.
* **Text (String)**\* - The element you type into  
  Ex: “akabot”

**Options**

* **Delay Between Keys (Int32)**- To put a delay of time (in milliseconds) between every key when typing.  
  Ex: 30000
* **From Elements (IEElement)**- Element to be referred to when searching for the desired element. Only IEElement variable type accepted.
* **Virtual Type (Checkbox)**- If selected, a virtual type method is performed.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **Ex**: [44155135] Type Into

**Target**

* **Scroll Height (Int32)** - Scroll before getting the element. To input a number equals to the amount of pixels to scroll vertically. A negative value is to scroll upwards, a positive value is to scroll downwards.  
  Ex: 20
* **Scroll IntoView (Checkbox)**- If selected, the screen will automatically scroll to the desired element on the screen.
* **Scroll Width (Int32)**- Scroll before getting the element. To input a number equals to the amount of pixels to scroll horizontally. A negative value is to scroll to the leftwards, a positive value is to scroll rightwards.  
  Ex: 20
