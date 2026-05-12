---
id: select-item
title: "Select Item"
sidebar_label: "Select Item"
sidebar_position: 8
description: "Select Item activity documentation."
displayed_sidebar: activitiesSidebar
---
# Select Item

RCA.Activities.Java.SelectItem

## **Description**

This Select Item activity allows you to select specific items from a Java file.

[![select item.jpg](/img/05fa78_select-item.jpg)](/bin/download/Activities/Java/Activities/Select%20Item/WebHome/select%20item.jpg?rev=1.1)

(\* is mandatory)

**In the body of the activity**

* **Pick target element**- Chooses the field to select the item. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to run before an error is thrown. If the timeout expires, the activity will terminate. Default value: 30000 (milliseconds).

**Input**

* **From (JavaElement)** - The file you get the element from
* **Index (Int32)\***- The index of the element. Int32 supported only
* **Input Element(JavaElement)\***- The element you want to get.
* **Selector (String) \***- You can add selectors here. String supported only.

          Eg:

Text  
`<wnd app="..." ></wnd><java role="..." ></java>`

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Select Java Item
