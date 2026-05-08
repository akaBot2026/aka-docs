---
id: block-user-input
title: "Block User Input"
sidebar_label: "Block User Input"
sidebar_position: 1
description: "Block User Input activity documentation."
displayed_sidebar: activitiesSidebar
---
# Block User Input - akaBot Docs

RCA.Activities.Core.BlockUserInput

## **Description**

This activity allows you to block users from using mouse, keyboard when activities run. Can be configured to block either mouse, keyboard, or both, and permits you to designate a hotkey combination to re-enable them.

![image-20220505100618-1.jpeg](/img/448ddf_image-20220505100618-1.jpeg)

(\* for Mandatory)

## **In the body of the activity**

* **Alt** - If you tick this, akaBot will disable Alt key.
* **Ctrl** - If you tick this, akaBot will disable Ctrl key.
* **Shift**- If you tick this, akaBot will disable Shift key.
* **Win** - If you tick this, akaBot will disable Win key.
* **Key** - The key you want to use to reactivate the mouse and keyboard. A list of all available special keys is provided

## **Properties**

**Common**

* **Continue On Error (Boolean)** - Specifies if the automation should continue even when the activity throws an error. This field only supports Boolean values (True, False). The default value is False.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) waits before throwing an error. If the timeout expires, the execution of the project stops.

**Input**

* **Block (Dropdown list)** - You can choose to block all, mouse or keyboard.

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [132682924] Block User Input

**Unblock Options**

* **Key (String)**- The key you want to use to reactivate the mouse and keyboard. You can select this in the body of the activity.
* **KeyModifiers (Dropdown list)** - The modifiers you want to use alongside the key selected in the Key property to reactivate the mouse and keyboard. The following options are available: Alt, Ctrl, Shift, and Win.
* **SpecialKey (Boolean)** - Indicates if you are using a special key in the keyboard shortcut. A list of all available special keys is provided in the Key drop-down list present in the body of the activity.

Table of Content

* [Description](#HDescription)
* [In the body of the activity](#HInthebodyoftheactivity)
* [Properties](#HProperties)