---
id: handle-alert
title: "Handle Alert"
sidebar_label: "Handle Alert"
sidebar_position: 33
description: "Handle Alert activity documentation."
displayed_sidebar: activitiesSidebar
---
# Handle Alert

RCA.Activities.Browser.HandleAlert

## **Description**

The Handle Alert activity allows you to handle alert popup box in various ways.

![image-20220505142619-1.png](/img/7116a9_image-20220505142619-1.png)

(\* For Mandatory)

## **In the body of activity**

* **Handle Option (Dropdown List)**  
  ・ACCEPT - Accepts the alert thereby clicking on the Ok button.  
  ・DISMISS - Clicks on the “Cancel” or "Exit" button as soon as the pop up window appears.  
  ・GETTEXT - Gets the text from alert box.  
  ・SENDKEYS – Sends string of text to the alert box.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 20000

**Input**

* **Handle Option (Dropdown List)**  
  ・ACCEPT - Accepts the alert thereby clicking on the Ok button.  
  ・DISMISS - Closes the alert thereby clicking on the Cancel button or Exit button  
  ・GETTEXT - Gets the text from alert box.  
  ・SENDKEYS – Sends string of text to the alert box.
* **KeysToSend (String)\***- String of text passed to the alert box (with SENDKEYS handle option).  
  E.g: `{ENTER}`, `{TAB}`..

**Misc**

* **Public (Checkbox)**- If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Handle Alert.

**Output**

* **Alert Text (String)**\* - Text returned from the alert box.
