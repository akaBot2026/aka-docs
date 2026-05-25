---
id: read-status-bar
title: "Read Status Bar"
sidebar_label: "Read Status Bar"
sidebar_position: 3
description: "Read Status Bar activity documentation."
displayed_sidebar: activitiesSidebar
---
# Read Status Bar

RCA.Activities.Common.ReadStatusBar

You may use this activity to read the message displayed in the Status bar on the bottom of the SAP GUI window.

**In the body of activity**

* **Indicate on Screen button –** Allows to indicate directly the Status bar element on the screen. After indicating, the selector value will be displayed in the corresponding fields.

**Properties**

**Common**

* **ContinueOnError** - Specifies if the automation should continue even when the activity encounters an error. Only Boolean values (True, False) supported. The default value is False. As a result, if the value is blank or False and an error is thrown, the execution of the project stops. If the value is set to True, the project continues to execute regardless of any error.

**Note:** If this activity is included in **Try Catch** and the value of the **ContinueOnError** property is True, no error is caught when the project is executed.

**Input**

* **Target.CvElement –** Use to find a particular element by using Computer Vision when the activity is executed.
* **Target.CvType** – Indicates the type of element control identified using Computer Vision.
* **Target.Element** – Use to find a particular element by using UIFramework when the activity is executed but this activity does not support the Computer Vision method.
* **Target.FuzzySelector** – Use to find a particular element by using Fuzzy Search when the activity is executed but this activity does not support the Computer Vision method.
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

**Output**

* **Message Data** – Used to store the data from the status of message in a variable. Only String Array variables supported.
* **Message ID** – Used to store the ID of the message in a variable. Only String variables supported.
* **Message Number** – Used to store the number of the message in a variable. Only String variables supported.
* **Message Text** – Used to store the full message text in a variable. Only String variables supported.
* **Message Type** – Used to store the message type in a variable. Only String variables supported. 3 types of messages supported are:
  + **S** - Success
  + **W** - Warning
  + **E** - Error