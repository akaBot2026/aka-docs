---
id: switch-to
title: "Switch To"
sidebar_label: "Switch To"
sidebar_position: 20
description: "Switch To activity documentation."
displayed_sidebar: activitiesSidebar
---
# Switch To

RCA.Activities.IE.SwitchTo

## **Description**

The Switch To activity allows you to switch between different UI Elements within a browser.

![image-20220506111255-1.png](/img/92f70a_image-20220506111255-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even an error occurs within the activity. False (default): blocks the process from continuing the execution.

**Input**

* **Switch To Type (Dropdown List)** -Chooses the type of HTML element to switch to.  
  ・WINDOW - To switch between tabs.
* **Switch To Value (String)**- Value of the specified element.

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **Ex**: [333212312] Switch To
