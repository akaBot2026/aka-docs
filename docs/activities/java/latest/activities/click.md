---
id: click
title: "Click"
sidebar_label: "Click"
sidebar_position: 1
description: "Click activity documentation."
displayed_sidebar: activitiesSidebar
---
# Click

RCA.Activities.Java.Click

## **Description**

This activity allows you to click a specified element.

[![https://files.readme.io/4d8c2a8-Screenshot_2021-06-03_102748.jpg](/img/037630_click.jpg)](/bin/download/Activities/Java/Activities/Click/WebHome/click.jpg?rev=1.1)  
(\* is mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to run before an error is thrown. If the timeout expires, the activity will terminate. Default value: 30000 (milliseconds).

**Input**

* **Click Type (DropdownList)** - Specifies the type of mouse click (LEFTCLICK, LEFTDOUBLECLICK, RIGHTCLICK, RIGHTDOUBLECLICK.) used when simulating the click event. By default, LEFTCLICK is selected.
* **From (JavaElement)** - The file you get the element from
* **Input Element(JavaElement)\***- The element you want to get. If [Selector] is not specified then [Input Element] will be specified, [Input Element] and [Selector] can not be both filled.
* **Selector (String) \***- You can add selectors here. String supported only. If [Input Element] is not specified then Selector will be specified, [Input Element] and [Selector] can not be both filled.  
  Eg:

Text  
`<wnd app="..." ></wnd><java role="..." ></java>`

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Click Java
* **OffsetX (Int32)**- Horizontal displacement of the cursor position according to the option selected in the Position field.
* **OffsetY (Int32)** - Vertical displacement of the cursor position according to the option selected in the Position field.

**Options**

* **Animated Mouse (Checkbox)** - If you choose this, you can see animated mouse appear on the screen.
* **Virtual Click (Checkbox)** - If you choose this, you can see the click when akaBot executes the action.
