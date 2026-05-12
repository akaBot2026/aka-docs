---
id: click
title: "Click"
sidebar_label: "Click"
sidebar_position: 2
description: "Click activity documentation."
displayed_sidebar: activitiesSidebar
---
# Click

RCA.Activities.Common.Click

## **Description**

The Click activity is used to send a click action into a webpage or window application.

![image-20220505132717-1.png](/img/787290_image-20220505132717-1.png)

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

* **Click Type (Drop-down list)** - Specifies the type of mouse click used when simulating the click event. By default, single click is selected.
  + **Single** : A single click.
  + **Double** : Two clicks in quick succession.
  + **Up** : Releases the mouse button.
  + **Down** : Holds down the mouse button.
* **Cursor Motion Type (Drop-down list)** - Specifies the of motion performed by the mouse cursor. There are two available options:
  + **Instant** : The cursor jumps to the destination.
  + **Smooth** : The cursor moves in increments. Has no effect if SendWindowMessages or SimulateCIick are enabled.

            By default, Instant is selected.

* **Cursor Position (Collapsible list) :**
  + OffsetX (Int32) - Horizontal displacement of the cursor position according to the option selected in the Position field.
  + OffsetY (Int32) - Vertical displacement of the cursor position according to the option selected in the Position field.
  + Position (Drop-down list) - The position you want to set the click. The default value is: Center
* **Mouse Button (Drop-down list)** - The mouse button (left, right, middle) used for the click action. By default, the left mouse button is selected.
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
  E.g: [3424325] Click

**Options**

* **After I Disabled (Boolean)** - If selected, the simulated type is executed even if the specified UI element is disabled.
* **Input Method (Drop-down list)** - Input method (Default, Simulate Click and Send Window Messages).
* **Key Modifiers (ComboBox drop-down)** - Enables you to add a key modifier. The following options are available: Alt, Ctrl, Shift, Win.
