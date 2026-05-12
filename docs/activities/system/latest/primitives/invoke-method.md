---
id: invoke-method
title: "Invoke Method"
sidebar_label: "Invoke Method"
sidebar_position: 3
description: "Invoke Method activity documentation."
displayed_sidebar: activitiesSidebar
---
# Invoke Method

System.Activities.Statements.InvokeMethod

## **Description**

The InvokeMethod activity is another way to implement a code that is outside of the standard built-in activities. You can use this activity to invoke a method of a class.

![image-20220506113031-1.png](/img/3282fc_image-20220506113031-1.png)

**In the body of activity**

* **TargetType (Dropdown list)**- When we want to invoke static methods, we specify the type that contains the static method to execute.
* **TargetObject** – You can input the Method you want to invoke here.  
  E.g: Datatablename.Columns(“ID”).SetOrdinal(0).
* **MethodName (String)** - Assign the method name to this property.  
  E.g: SetOrdinal.

## **Properties**

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Invoke Method
* **Generic Type Argument (Type)**- When we want to invoke a generic method, we specify generic types in this collection. You can click on the “…” and the Type Collection Editor will pop up.
* **MethodName (String)** - Assign the method name to this property.  
  E.g: SetOrdinal
* **Parameters (InArgument)** - The parameter collection of the method to be invoked.
* **Result (OutArgument)**- The return value of the method execution.
* **Run Asynchronously (Checkbox)** - Method that returns a value
* **TargetType (Dropdown list)**- When we want to invoke static methods, we specify the type that contains the static method to execute.
* **TargetObject** – You can input the Method you want to invoke here.  
  E.g: Datatablename.Columns(“ID”).SetOrdinal(0)
