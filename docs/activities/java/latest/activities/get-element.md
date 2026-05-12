---
id: get-element
title: "Get Element"
sidebar_label: "Get Element"
sidebar_position: 5
description: "Get Element activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Element

RCA.Activities.Java.GetElement

## **Description**

This activity allows you to get elements from a Java file.

[![get element.png](/img/b3bf86_get-element.png)](/bin/download/Activities/Java/Activities/Get%20Element/WebHome/get%20element.png?rev=1.1)

(\* is mandatory)

## **Properties**

**Common**

* **CONTINUE ON ERROR (Boolean)**- A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even if an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to run before an error is thrown. If the timeout expires, the activity will terminate. Default value: 30000 (milliseconds).

**Input**

* **Input Element (JavaElement)\***- The element you want to get.
* **From (JavaElement)\***- The file you get the element from
* **Selector (String) \***- You can add selectors here. String supported only.

Eg:

Text  
`<wnd app="..." ></wnd><java role="..." ></java>`

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Get Element

**Output**

* **Output Element (JavaElement)**- The element you get from the Java file. Output to JavaElement variable only.
