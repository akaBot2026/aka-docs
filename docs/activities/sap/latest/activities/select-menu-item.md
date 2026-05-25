---
id: select-menu-item
title: "Select Menu Item"
sidebar_label: "Select Menu Item"
sidebar_position: 6
description: "Select Menu Item activity documentation."
displayed_sidebar: activitiesSidebar
---
# Select Menu Item

**SAP Select Menu Item**

RCA.Activities.Common.Select Menu Item

You may use this activity to select a menu item of SAP application. After indicating the menu from the SAP GUI window, the list with all available menu items is displayed in the activity for you to select.

**In the body of activity**

* **Indicate on Screen button –** Allows to indicate directly the element on the screen. After indicating, the selector value will be displayed in the corresponding fields.
* **Menu** – Specifies the menu on SAP GUI window. After indicating the menu from the SAP GUI window, the list with all available menu items is displayed in the activity for you to select.

**Properties**

**Common**

* **ContinueOnError** - Specifies if the automation should continue even when the activity encounters an error. Only Boolean values (True, False) supported. The default value is False. As a result, if the value is blank or False and an error is thrown, the execution of the project stops. If the value is set to True, the project continues to execute regardless of any error.

**Note:** If this activity is included in **Try Catch** and the value of the **ContinueOnError** property is True, no error is caught when the project is executed.

* **DelayAfter** – Specifies the delay time (in milliseconds) after the execution of the activity. The default time is set to 300 milliseconds.
* **DelayBefore** - The duration (in milliseconds) preceding the activity, before any operations commence. The default time is 200 milliseconds.

**Input**

* **Menu** – Specifies the menu on SAP GUI window. After indicating the menu from the SAP GUI window, the list with all available menu items is displayed in the activity for you to select.
* **Target.CvElement –** Use to find a particular menu item by using Computer Vision when the activity is executed but this activity does not support the Computer Vision method.
* **Target.CvType** – Indicates the type of menu item identified using Computer Vision but this activity does not support the Computer Vision method.
* **Target.Element** – Use to find a particular menu item by using UIFramework when the activity is executed.
* **Target.FuzzySelector** – Use to find a particular menu item by using Fuzzy Search when the activity is executed.
* **Target.SearchSteps** – The selector types that you want to use for identifying the menu item. This activity support only 2 kinds of selector types: Strict Selector & Fuzzy Selector, other types are not supported.
* **Target.Selector –** Use to find a particular menu item when the activity is executed. It is actually a XML fragment specifying attributes of the GUI element you are looking for and along with some of its parents.
* **Target.Timeout MS –** Specifies the amount of time (in milliseconds) to wait for the successful login before throwing an error. The default value is 30000 milliseconds.
* **Target.Wait For Ready -** Waits for the target menu item to become ready before performing actions. 3 available options:
  + None: Does not wait for anything except the target button to exist before executing the action.
  + Interactive: Waits all of the UI elements in the target app to exist and interactive before actually executing the action
  + Complete: Waits all of the UI elements in the target app to exist before actually executing the action

**Misc**

* **DisplayName** - The display name of the activity.
* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.

**Options**

* **AlterIfDisabled**- If have value, the action on selected item is executed even if the specified button is disabled.