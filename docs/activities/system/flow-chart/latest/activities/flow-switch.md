---
id: flow-switch
title: "Flow Switch"
sidebar_label: "Flow Switch"
sidebar_position: 3
description: "Flow Switch activity documentation."
displayed_sidebar: activitiesSidebar
---
# [03]Flow Switch - akaBot Docs

System.Activities.Statements.FlowSwitch

## **Description**

This activity allows you to split the control flow into more than two branches, each one is executed based on a specified condition.

![image-20220505162342-1.png](/img/ed7424_image-20220505162342-1.png)

(\* for Mandatory)

## **Properties**

**Misc**

* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [387438076] Flow Switch
* **Expression**\*- The specific condition that will be evaluated for the new branch of workflow that you want akaBot to execute.  
  By default, the supported variable is Object. To change the variable type, please select the corresponding options in TypeArgument property.
* **Type Argument (Dropdown List)** - Enables you to choose different types of statement that can be add in the expression property.

Table of Content

* [Description](#HDescription)
* [Properties](#HProperties)