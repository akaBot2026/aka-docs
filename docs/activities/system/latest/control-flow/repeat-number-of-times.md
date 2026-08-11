---
id: repeat-number-of-times
title: "Repeat Number Of Times"
sidebar_label: "Repeat Number Of Times"
sidebar_position: 9
description: "Repeat Number Of Times activity documentation."
displayed_sidebar: activitiesSidebar
---
# Repeat Number Of Times

RCA.Activities.Core.RepeatNumberOfTimes

## **Description**

The Repeat Number Of Times activity repeats a set of activities a specified number of times. Add the activities to repeat inside the Body of this activity. The current iteration index is available through the index variable (default name: `CurrentItem`).

![image-repeat-number-of-times.png](/static/img/image-repeat-number-of-times.png)

(\*For Mandatory)

## **In the body of activity**

* **For each (String)** - The name of the index variable used to refer to the current iteration. Default is `CurrentItem`.
* **Repeat number of times (Int32)\*** - How many times to repeat the activities inside the Body.
* **Body** - A container where you add the activities to be executed in each iteration.

## **Properties**

**Input**

* **Number Of Times (Int32)\*** - How many times to repeat the activities added inside this activity. Must be greater than or equal to 0. If the value is 0, the Body is not executed.  
  E.g: 5
* **Start At (Int32)\*** - The starting value of the index variable (`CurrentItem`). Default is 1. You can set it to 0, 1, or any other integer.  
  E.g: 1

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is uncheck.