---
id: keyboard-type
title: "Keyboard Type"
sidebar_label: "Keyboard Type"
sidebar_position: 31
description: "Keyboard Type activity documentation."
displayed_sidebar: activitiesSidebar
---
# Keyboard Type

RCA.Activities.Windows.KeyboardType

## **Description**

This activity allows you type text with special keyboard keys by selecting in dropdown list.

![image-20220505171530-1.png](/img/c733ee_image-20220505171530-1.png)

(\*For Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)**-A Boolean variable has two possible values: True or False  
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.  
  - False: blocks the process from continuing the execution.

**Input**

* **Text (String)** – The text you want to type in using keyboard.  
  E.g: “This is first line [k(enter)] This is second line”

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [480900273] Keyboard Type

**Options**

* **Delay Between Keys (Int32)** - The amount of time (in milliseconds) to wait between each keystroke. This delay may be required inside each keystroke.
