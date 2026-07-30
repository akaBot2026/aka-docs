---
id: multiple-assign
title: "Multiple Assign"
sidebar_label: "Multiple Assign"
sidebar_position: 5
description: "Multiple Assign activity documentation."
displayed_sidebar: activitiesSidebar
---
# Multiple Assign

RCA.Activities.Core.MultipleAssign

## **Description**

The Multiple Assign activity allows you to assign values to multiple variables or arguments in a single activity, without using multiple Assign activities. A common use case is initializing variables before a large process.

![image-multiple-assign.png](/static/img/image-multiple-assign.png)

(\*For Mandatory)

## **In the body of activity**

* **To (OutArgument)\*** - The variable or argument that you want to assign a value to.
* **Value (InArgument)\*** - The value you want to assign to the variable or argument.
* **Add** - Adds a new To / Value pair so you can assign multiple values at once.
* **Remove (X)** - Removes the current To / Value pair.
* **Move** - Drag and drop to reorder the To / Value pairs.

## **Properties**

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is uncheck.