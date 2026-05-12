---
id: element-exists
title: "Element Exists"
sidebar_label: "Element Exists"
sidebar_position: 3
description: "Element Exists activity documentation."
displayed_sidebar: activitiesSidebar
---
# Element Exists

RCA.Activities.Java.ElementExists

## **Description**

This activity allows you to check if the element exists in a Java file

[![element exist.jpg](/img/5cab0f_element-exist.jpg)](/bin/download/Activities/Java/Activities/Element%20Exists/WebHome/element%20exist.jpg?rev=1.1)

(\* is mandatory)

**In the body of the activity**

* **Pick target element** - Chooses the field to select the item. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even if an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to run before an error is thrown. If the timeout expires, the activity will terminate. Default value: 30000 (milliseconds).

**Input**

* **Input Element (JavaElement)**\* - The element you want to get.
* **From (JavaElement)** - The file you get the element from.
* **Selector (String) \***- You can add selectors here. String supported only.

           Eg:

Text  
`<wnd app="..." ></wnd><java role="..." ></java>`

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Check Java Element Exists

**Output**

* **Exist (Boolean)** - Check if the element exists in the file. Boolean supported only.
