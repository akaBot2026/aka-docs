---
id: close-window
title: "Close Window"
sidebar_label: "Close Window"
sidebar_position: 2
description: "Close Window activity documentation."
displayed_sidebar: activitiesSidebar
---
# Close Window

RCA.Activities.Common.CloseWindow

## **Description**

The Close Window activity allows you to close an application window on the screen.

![image-20230417161136-1.png](/img/d5509a_image-20230417161136-1.png)

(\* is mandatory)

## **In the body of activity**

* **Indicate on screen**- Allows you to close which application by selecting its window.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False  
  **- True** : allows the rest of the process to continue the execution even an error occurs within the activity.  
  **- False** : blocks the process from continuing the execution.

**Input**

* **Selector (String)** - String of characters that identifies the location of the window.
* **Timeout MS (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 30000
* **Use Window:** Use output variable from Open Window or Window Scope to scope for activity (similar to From).
* **Wait For Ready:**  Before performing the actions, wait for the target to become ready. The following options are available: None - does not wait for the target to be ready; Interactive - waits until only a part of the app is loaded; Complete - waits for the entire app to be loaded.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [3424325] Close Window
