---
id: throw
title: "Throw"
sidebar_label: "Throw"
sidebar_position: 2
description: "Throw activity documentation."
displayed_sidebar: activitiesSidebar
---
# Throw

System.Activities.Core.Throw

## **Description**

The Throw activity allows you to throw and find an exception providing you enter the type of exception. This activity can be used in the Catch block and the Try block in the Try Catch activity.

![image-20220506112428-1.png](/img/41b49d_image-20220506112428-1.png)  
(\* for Mandatory)

## **Properties**

**Misc**

* **Public (Checkbox)**- If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Throw.
* **Throw Exception (Exception)**\* - Type of exception to throw.  
  E.g: new\_Exception("something went wrong").
