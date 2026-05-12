---
id: take-screenshot
title: "Take Screenshot"
sidebar_label: "Take Screenshot"
sidebar_position: 12
description: "Take Screenshot activity documentation."
displayed_sidebar: activitiesSidebar
---
# Take Screenshot

RCA.Activities.Common.TakeScreenshot

## **Description**

The Take Screenshot allows you to take screenshot of a UI Elements within a browser or window application.

![image-20220505133457-1.png](/img/08d8cd_image-20220505133457-1.png)

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
  E.g: [3424325] Take Screenshot

**Options**

* **Wait before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations. The default amount of time is 200 milliseconds.

**Output**

* **Output Screenshot (Image)** -The outputted screenshot with type = ‘Image’.
