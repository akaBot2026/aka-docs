---
id: element-exists
title: "Element Exists"
sidebar_label: "Element Exists"
sidebar_position: 3
description: "Element Exists activity documentation."
displayed_sidebar: activitiesSidebar
---
# Element Exists

RCA.Activities.Common.UiElementExists

## **Description**

The Element Exist activity allows you to confirm whether an element exist.

![image-20220505132755-1.png](/img/de43b5_image-20220505132755-1.png)

(\* is mandatory)

## **In the body of activity**

* **Indicate on screen** - Chooses the element to verify its existence. This activity will generate a string variable (Selector) to specify the location of that element.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False
  + **True** : allows the rest of the process to continue the execution even an error occurs within the activity.
  + **False** : blocks the process from continuing the execution.

**Input**

* **Target (Collapsible list) :**
  + **Element (UIElement)** - Use the UiEIement variable returned by another activity. This property cannot be used alongside the Selector property.
  + **Selector (String)** - Text property used to find a particular UI element when the activity is executed. It is actually a XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.
  + **TimeoutMS (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds). E.g: 30000
  + **Wait For Ready (Drop-down list)** - Before performing the actions, wait for the target become ready. The following options are available:
    - **None** : Does not wait for the target to be ready.
    - **Interactive** : Wait until only a part of the app is loaded.
    - **Complete**: Waits for the entire app to be loaded.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [3424325] Element Exists

**Output**

* **Exists (Boolean)** - Indicates if the element exists or not. The field supports only Boolean variables.  
  **- True** : The element exists  
  **- Fault** : The element does not exist.
