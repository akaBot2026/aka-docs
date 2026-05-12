---
id: send-hot-keys
title: "Send Hot Keys"
sidebar_label: "Send Hot Keys"
sidebar_position: 12
description: "Send Hot Keys activity documentation."
displayed_sidebar: activitiesSidebar
---
# Send Hot Keys

RCA.Activities.Browser.SendHotKeys

## **Description**

The Send Hot Keys activity allows you to send a keyboard shortcut to a browser element.

![Browser_SendHotKeys](/img/5d7892_e9e1b2c-browser_sendhotkey.png)

(\* for Mandatory)

## **In the body of activity**

* **Pick target element** - Chooses a element on a browser to send a keyboard shortcut. This activity will generate a string variable (Selector) to specify the location of that element.
* **Alt (Checkbox)**- Modifier Key.
* **Ctrl (Checkbox)**- Modifier Key.
* **Shift (Checkbox)**- Modifier Key.
* **Special Key (Dropdown List)\***- The key you want to send. A list of all available special keys is provided in the drop-down list.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.
* **TimeOut MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **Alt (Checkbox)**- Modifier Key.
* **Ctrl (Checkbox)**- Modifier Key.
* **Selector (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
* **Shift (Checkbox)**- Modifier Key.
* **Special Key (Dropdown List)**\* - The key you want to send. A list of all available special keys is provided in the drop-down list.
* **Wait visible (Checkbox)** - A Checkbox has two possible values: True or False.  
  Check (default): the automation will wait for the target to be visible before executing the activity.  
  Uncheck: the automation will not wait for the target to be visible before executing the activity.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [234235245] Send Hot Keys
* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.

**Scroll**: To control how the system scrolls the screen to make the target element visible before performing an action*.*

* **Horizontal scroll:** Enter a numeric value (pixels) to scroll horizontally.
  + Positive value → scroll right
  + Negative value → scroll left
  + E.g: 200
* **Scroll element to view (checkbox):** The system automatically scrolls until the target element is visible. Default setting is unchecked.
* **Vertical scroll:** Enter a numeric value (pixels) to scroll vertically
  + Positive value → scroll down
  + Negative value → scroll up
  + E.g: 300
