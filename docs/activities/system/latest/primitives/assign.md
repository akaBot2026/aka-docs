---
id: assign
title: "Assign"
sidebar_label: "Assign"
sidebar_position: 1
description: "Assign activity documentation."
displayed_sidebar: activitiesSidebar
---
# Assign

System.Activities.Statements.Assign

## **Description**

The Assign activity allows you to assign a value to a variable or an argument. This is used quite often in the loop for increment, to assign a sum value of 2 or more variables to a new variable, or to assign to an array.

![image-20220506112928-1.png](/img/fe4e42_image-20220506112928-1.png)

(\* for Mandatory)

**In the body of activity**

* **To (InArgument)**\* - The name of the variable that you want to assign a value to
* **Value (OutArgument)\***- The value you want to assign to your variable

## **Properties**

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Assign
* **To (InArgument)**\* - The name of the variable that you want to assign a value.
* **Value (OutArgument)**\* - The value you want to assign to your variable
