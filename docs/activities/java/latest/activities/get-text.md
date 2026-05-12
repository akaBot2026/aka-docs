---
id: get-text
title: "Get Text"
sidebar_label: "Get Text"
sidebar_position: 6
description: "Get Text activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Text

RCA.Activities.Java.GetText

## **Description**

This activity allows you to get text from a Java file.

[![get text.png](/img/60fecf_get-text.png)](/bin/download/Activities/Java/Activities/Get%20Text/WebHome/get%20text.png?rev=1.1)

(\* is mandatory)

**In the body of the activity**

* **Pick target element** - Chooses the field to select the item. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **TimeOut MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to run before an error is thrown. If the timeout expires, the activity will terminate. Default value: 30000 (milliseconds).

**Input**

* **Input Element (JavaElement)\***- The element you want to get.
* **From (JavaElement)** - The file you get the element from
* **Selector (String)**\* - You can add selectors here. String supported only.  
  Eg:

Text  
`<wnd app="..." ></wnd><java role="..." ></java>`

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Get Text Java

**Output**

* **Output Text (String)**- The element you get from the Java file. Output to a String variable.
