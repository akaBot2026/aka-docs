---
id: expandcollapse
title: "Expand/Collapse"
sidebar_label: "Expand/Collapse"
sidebar_position: 4
description: "Expand/Collapse activity documentation."
displayed_sidebar: activitiesSidebar
---
# Expand/Collapse

RCA.Activities.Java.ExpandCollapse

## **Description**

This activity allows you to expand/collapse activities.

[![expand_collapse.jpg](/img/49b0a4_expand_collapse.jpg)](/bin/download/Activities/Java/Activities/ExpandCollapse/WebHome/expand_collapse.jpg?rev=1.1)  
(\* is mandatory)

**In the body of the activity**

* **Pick target element** - Chooses the field to select the item. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to run before an error is thrown. If the timeout expires, the activity will terminate. Default value: 30000 (milliseconds).

**Input**

* **Input Element (JavaElement)**\* - The element you want to get. If [Selector] is not specified then [Input Element] will be specified
* **From (JavaElement)** - The file you get the element from
* **Selector (String)**\* - You can add selectors here. String supported only. If [Input Element] is not specified then Selector will be specified.  
  Eg:

Text  
`<wnd app="..." ></wnd><java role="..." ></java>`

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Expand Collapse
