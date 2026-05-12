---
id: invoke-code
title: "Invoke Code"
sidebar_label: "Invoke Code"
sidebar_position: 2
description: "Invoke Code activity documentation."
displayed_sidebar: activitiesSidebar
---
# Invoke Code

RCA.Activities.Core.InvokeCode

## **Description**

With this activity, you can synchronously invoke VB.NET or C# code, optionally passing it a list of input arguments. This activity can also return out arguments to the caller workflow.

![image-20220505160824-1.png](/img/bdc644_image-20220505160824-1.png)

(\* for Mandatory)

## **In the body of activity**

* **Edit Code (Button)** – Click here to write your desired code
* **Edit Arguments (Button)** – Click here to add and edit different types of arguments.

## **Properties**

**Common**

* **Continue On Error (Boolean)**- This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Input**

* **Arguments (String)**- The parameters that can be passed to the code that is invoked
* **Code (String)** - The VB.Net code that is to be invoked.

**Misc**

* **Public (Checkbox)**- If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [246443801] Invoke Code
