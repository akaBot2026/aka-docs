---
id: select-multiple-items
title: "Select Multiple Items"
sidebar_label: "Select Multiple Items"
sidebar_position: 10
description: "Select Multiple Items activity documentation."
displayed_sidebar: activitiesSidebar
---
# Select Multiple Items

RCA.Activities.Common.SelectMultipleItems

## **Description**

The Select Multiple Items activity allows you to select many items from a combo box or list box.

![image-20220505133354-1.png](/img/fe49d4_image-20220505133354-1.png)

(\* is mandatory)

## **In the body of activity**

* **Indicate on screen** - Chooses the element to verify its existence. This activity will generate a string variable (Selector) to specify the location of that element.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False
  + **True** : allows the rest of the process to continue the execution even an error occurs within the activity.
  + **False** : blocks the process from continuing the execution.
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity. The default amount of time is 300 milliseconds.
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations. The default amount of time is 200 milliseconds.

**Input**

* **MultipleItems (String[])\***- Specify the items to be selected in the list box.
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
  E.g: [3424325] Select Multiple Items

**Options**

* **Add to selection (Boolean)** - Specify if the items will be added to the existing selection or if the list selection is first cleared.
* **After I Disabled (Boolean)** - If selected, the simulated type is executed even if the specified UI element is disabled.
