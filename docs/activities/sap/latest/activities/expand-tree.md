---
id: expand-tree
title: "Expand Tree"
sidebar_label: "Expand Tree"
sidebar_position: 2
description: "Expand Tree activity documentation."
displayed_sidebar: activitiesSidebar
---
# Expand Tree

**Expand Tree**

RCA.Activities.Common.ExpandTree

You may use this activity to expand the left menu tree on SAP system. After indicating the SAP Tree element from the SAP GUI window, the Tree list with all available nodes and items is displayed in the activity.

**In the body of activity**

* **Indicate on Screen button –** Allows to indicate directly the element on the screen. After indicating, the selector value will be displayed in the corresponding fields.
* **Item** – Specifies a Tree Item or Tree Node within the parent tree. The active node or item will be selected. Upon indicating the SAP Tree element within the SAP GUI window, the activity will list of all available nodes and items will be displayed in the activity.

**Properties**

**Common**

* **ContinueOnError** - Specifies if the automation should continue even when the activity encounters an error. Only Boolean values (True, False) supported. The default value is False. As a result, if the value is blank or False and an error is thrown, the execution of the project stops. If the value is set to True, the project continues to execute regardless of any error.

**Note:** If this activity is included in ** Try Catch** and the value of the ** ContinueOnError** property is True, no error is caught when the project is executed.

* **DelayAfter** – Specifies the delay time (in milliseconds) after the execution of the activity. The default time is set to 300 milliseconds.
* **DelayBefore** - The duration (in milliseconds) preceding the activity, before any operations commence. The default time is 200 milliseconds.

**Input**

* **Item** – Specifies a Tree Item or Tree Node within the parent tree. The active node or item will be selected. Upon indicating the SAP Tree element within the SAP GUI window, the activity will list of all available nodes and items will be displayed in the activity.
* **Target.CvElement –** Use to find a particular element by using Computer Vision when the activity is executed but this activity does not support the Computer Vision method.
* **Target.CvType** – Indicates the type of element control identified using Computer Vision but this activity does not support the Computer Vision method.
* **Target.Element** – Use to find a particular element by using UIElement when the activity is executed.
* **Target.FuzzySelector** – Use to find a particular element by using Fuzzy Search when the activity is executed.
* **Target.SearchSteps** – The selector types that you want to use for identifying the element. This activity support only 2 kinds of selector types: Strict Selector & Fuzzy Selector, other types are not supported.
* **Target.Selector –** Use to find a particular UI element when the activity is executed. It is actually a XML fragment specifying attributes of the GUI element you are looking for and along with some of its parents.
* **Target.Timeout MS –** Specifies the amount of time (in milliseconds) to wait for the successful login before throwing an error. The default value is 30000 milliseconds.
* **Target.Wait For Ready -** Waits for the target element to become ready before performing actions. 3 available options:
  + None: Does not wait for anything except the target UI element to exist before executing the action.
  + Interactive: Waits all of the UI elements in the target app to exist and interactive before actually executing the action
  + Complete: Waits all of the UI elements in the target app to exist before actually executing the action

**Misc**

* **DisplayName** - The display name of the activity.
* **Public** - If selected, the values of variables and arguments will be logged at Verbose level.

**Options**

* **AlterIfDisabled**- If have value, the action on selected item is executed even if the specified UI element is disabled.