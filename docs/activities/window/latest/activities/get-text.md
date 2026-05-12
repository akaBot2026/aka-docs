---
id: get-text
title: "Get Text"
sidebar_label: "Get Text"
sidebar_position: 22
description: "Get Text activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Text

RCA.Activities.Windows.GetText

## **Description**

This activity allows you to get text from Windows application.

![image-20220505170858-1.png](/img/408b9e_image-20220505170858-1.png)

(\* for Mandatory)

## **In the body of activity**

* **Pick Target Element**- By clicking in this field you can edit selectors and pick elements you want.

## **Properties**

**Common**

* **Continue On Error (Boolean)**-A Boolean variable has two possible values: True or False  
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.  
  - False: blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to run. If the timeout expires, the activity will terminate.  
  Default value: 30000 (milliseconds).
* **Delay After (Int32)**- The amount of time (in milliseconds) to wait once the activity is executed.
* **Delay Before (Int32)** - The amount of time (in milliseconds) to wait before executing the activity.

**Input**

* **Selector (String)**\* - You can add selectors here. Selector will be created automatically after you Pick Target Element.

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [066369874] Get Text

**Options**

* **Automation Base (Dropdown List)**- Specify the version of Automation library. This option goes together with Process argument.
* **Element (AutomationElement)\***- Uses variable with type = ‘AutomationElement’ as input instead of selector string.  
  ***Notes***: This property cannot be used alongside the Selector property.
* **From (UiElement)**- UiElement variable to root when searching for element with Selector string (if not filled, look from desktop root).
* **Use Window (WindowsApp)**- Use output variable from Open Window or Window Scope to scope for activity (similar to From).

**Output**

* **Output Text (String)**- The element you get from the Windows file

**Wait**

* **Wait For Disable (Checkbox)** - Waits for element to be unable to interact with.
* **Wait For Enable (Checkbox)** - Waits for element to be able to interact with.
* **Wait For Vanish (Checkbox)**- Waits for element to vanish.
