---
id: get-menu
title: "Get Menu"
sidebar_label: "Get Menu"
sidebar_position: 11
description: "Get Menu activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Menu

RCA.Activities.Windows.GetMenu

## **Description**

The Get Menu activity allows you to select the menu of a specified window element.

![image-20220505170004-1.png](/img/1d8327_image-20220505170004-1.png)

(\*For mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)**-A Boolean variable has two possible values: True or False  
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.  
  - False: blocks the process from continuing the execution.

**Input**

* **Context Menu Name (String)**- Name of the menu. The default value is "Menu".  
  E.g: Menu
* **Is Context Menu (Boolean)**- Specifies whether the menu is context menu.
* **Use Window (WindowApp)**\* - The window to get menu. This property allows WindowApp variable.

**Misc**

* **Public (Checkbox)**- Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g:[23232] Get Menu

**Output**

* **Output Menu (WindowApp)\***- The output menu. This property supports variable with type = ‘Menu’.
