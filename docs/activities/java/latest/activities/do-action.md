---
id: do-action
title: "Do Actions"
sidebar_label: "Do Actions"
sidebar_position: 2
description: "Do Actions activity documentation."
displayed_sidebar: activitiesSidebar
---
# Do Actions

RCA.Activities.Java.DoActions

## **Description**

This activity allows you to pick elements and execute other actions.

[![do actions.jpg](/img/5a177e_do-actions.jpg)](/bin/download/Activities/Java/Activities/Do%20Action/WebHome/do%20actions.jpg?rev=1.1)

(\* is mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)**- This property specifies when the automation keeps going if it has an error. Only have two possible values: True Or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to run before an error is thrown. If the timeout expires, the activity will terminate. Default value: 30000 (milliseconds).

**Input**

* **Actions (String[])**\* - Execution of multiple actions from a Java element.  
  Eg: Available actions page-up , page-down, select-all …
* **From (JavaElement)** - The file you get the element from.
* **Input Element (JavaElement)**\* - The element you want to get.
* **Selector (String)**\* - You can add selectors here. String supported only.  
  Eg:

Text  
`<wnd app="..." ></wnd><java role="..." ></java>`

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **Eg**: Do Actions

**Output**

* **Success (Boolean)** – Indicate if the action runs successfully.
