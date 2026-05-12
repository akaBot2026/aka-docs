---
id: check-true
title: "Check True"
sidebar_label: "Check True"
sidebar_position: 3
description: "Check True activity documentation."
displayed_sidebar: activitiesSidebar
---
# Check True

RCA.Activities.Core.CheckTrue

## **Description**

This activity allows you to check whether a given expression evaluates to True.

![image-20220505095635-1.jpeg](/img/image-20220505095635-1.jpeg)

\* indicates required fields.

## **Properties**

**Input**

* **Boolean Expression (Boolean)**\*: The Boolean expression to be evaluated, stored in a variable.

**Misc**

* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.  
  Example: `[997467815] Check True`
* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security before using this property.

**Output**

* **Result (Boolean)**: The result of the evaluated expression.