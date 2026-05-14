---
id: send-hotkey
title: "Send Hotkey"
sidebar_label: "Send Hotkey"
sidebar_position: 11
description: "Send Hotkey activity documentation."
displayed_sidebar: activitiesSidebar
---
# Send Hotkey

RCA.Activities.Common.SendHotkey

## **Description**

The Send Hot Key activity allows you to send a keyboard shortcuts to a webpage element or window application element.

![image-20220505133424-1.png](/static/img/923771_image-20220505133424-1.png)

(\* is mandatory)

## **In the body of activity**

* **Indicate on screen**- Chooses the element to verify its existence. This activity will generate a string variable (Selector) to specify the location of that element.
* **Alt (Checkbox)** - Modifier Key.
* **Ctrl (Checkbox)** - Modifier Key.
* **Shift (Checkbox)** - Modifier Key.
* **Win (Checkbox)** - Modifier Key.
* **Special Key (DropDownList)** - The key that compose the hotkey that is sent.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False  
  **- True** : allows the rest of the process to continue the execution even an error occurs within the activity.  
  **- False** : blocks the process from continuing the execution.
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity. The default amount of time is 300 milliseconds.
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations. The default amount of time is 200 milliseconds.

**Input**

* **Key (String)** - The key or key combination that compose the hotkey that is sent.
* **Target (Collapsible list)**  
  **・ Element (UIElement)** - Use the UiEIement variable returned by another activity. This property cannot be used alongside the Selector property.  
  **・ Selector (String)** - Text property used to find a particular UI element when the activity is executed. It is actually a XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.  
  **・ TimeoutMS (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 30000  
  **・ Wait For Ready (Drop-down list)** - Before performing the actions, wait for the target become ready. The following options are available:  
  **- None** : Does not wait for the target to be ready.  
  **- Interactive** : Wait until only a part of the app is loaded.  
  **- Complete**: Waits for the entire app to be loaded.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [3424325] Send Hotkey

**Options**

* **Active (Boolean)** - Active the control.
* **Click Before Typing (Boolean)** - If selected, the text field is clicked the text is written.
* **Delay Between Keys (Int32)** - Specified amount of time between keys.
* **Empty Field (Boolean)** - If selected, all the existing content in the text field will be erased before the text is written.
* **Input Method (Drop-down list)** - Input method (Default, Simulate Click and Send Window Messages).
* **Key Modifiers (ComboBox drop-down)** - Enables you to add a key modifier. The following options are available: Alt, Ctrl, Shift, Win.
* **Special Key (Boolean)** - Indicates if you are using a special key in the keyboard shortcut. A list of all available special keys is provided in the Key drop-down list.
