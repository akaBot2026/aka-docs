---
id: type-into
title: "Type Into"
sidebar_label: "Type Into"
sidebar_position: 9
description: "Type Into activity documentation."
displayed_sidebar: activitiesSidebar
---
# Type Into

RCA.Activities.Java.TypeInto

## **Description**

This Type Into activity allows you to type into a specified Java file.

[![type into.jpg](/img/ea68b0_type-into.jpg)](/bin/download/Activities/Java/Activities/Type%20Into/WebHome/type%20into.jpg?rev=1.1)

(\* is mandatory)

**In the body of the activity**

* **Pick target element**- Chooses the field to select the item. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Before Type**

* **Click (Checkbox)** - Tick it if you want to choose to click before typing the text.
* **Empty Field (Checkbox)**- Tick it if you want to empty the field before typing the text.
* **Set Focus (Checkbox)**- Tick it if you want to set focus to click before typing the text.

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to run before an error is thrown. If the timeout expires, the activity will terminate. Default value: 30000 (milliseconds).

**Input**

* **Input Element (JavaElement)**\* - The element you want to get.
* **From (JavaElement)**- The file you get the element from.
* **Selector (String) \***- You can add selectors here. String supported only.

**Eg**:

Text  
`<wnd app="..." ></wnd><java role="..." ></java>`

* **Text (String)** - The text to enter.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **Eg**: Type Into Java

**Options**

* **Delay between keys (Number)**- Delay (milliseconds) between keystrokes, the minimum value is 10, the maximum value is 1000.
* **Virtual Type (Checkbox)**: Checked if use event to type into element virtually.

**Output**

* **Success (Boolean)**- Indicates whether all the actions have succeeded or not.
