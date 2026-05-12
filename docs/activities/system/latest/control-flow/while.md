---
id: while
title: "While"
sidebar_label: "While"
sidebar_position: 8
description: "While activity documentation."
displayed_sidebar: activitiesSidebar
---
# While

System.Activities.Statements.While

## **Description**

Allows you to execute a set of activities repeatedly while a specified condition is True.  
This activity is useful when you need to perform an action multiple times based on a condition.

![image-20220513134736-1.png](/img/while.png)

\* indicates required fields.

## **In the Body of Activity**

* **Condition (Boolean)**\*: The condition evaluated before each iteration.  
  Example: `counter < 15`
* **Body**\*: A container where you can add activities to be executed in each iteration.

## **Properties**

**Misc**

* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.  
  Example: `[410342694] While`
* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security before using this property.
* **Condition (Boolean)**\*: The condition that controls the loop execution.  
  Example: `var_counter < 15` – the activities inside the Body will repeat until the condition becomes False.