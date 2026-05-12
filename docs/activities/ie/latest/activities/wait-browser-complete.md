---
id: wait-browser-complete
title: "Wait Browser Complete"
sidebar_label: "Wait Browser Complete"
sidebar_position: 22
description: "Wait Browser Complete activity documentation."
displayed_sidebar: activitiesSidebar
---
# Wait Browser Complete

RCA.Activities.IE.WaitBrowserComplete

## **Description**

To wait for the browser to complete loading a page.

![image-20220506111359-1.png](/img/d57b6f_image-20220506111359-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even an error occurs within the activity. False (default): blocks the process from continuing the execution.

**Input**

* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to run before an error is thrown. If the timeout expires, the activity will terminate. Default value: 10000 (milliseconds).

            Ex: 10000

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Ex: [867238423] Wait Browser Complete

**Output**

* **Wait Success (Boolean)**- A Boolean type variable indicating whether the activity is succeeded or not.
