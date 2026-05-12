---
id: try-catch
title: "Try Catch"
sidebar_label: "Try Catch"
sidebar_position: 3
description: "Try Catch activity documentation."
displayed_sidebar: activitiesSidebar
---
# Try Catch

System.Activities.Statements.TryCatch

## **Description**

The Try Catch activity allows you to catch a certain type of exception in the activity and either shows you an error notification or dismisses it and continues the program.

![image-20220506112458-1.png](/img/1da425_image-20220506112458-1.png)

(\* for Mandatory)

**In the body of activity**

* **Try**\* - The activity or sequence of activities that you want to find an exception for should be placed in this section.
* **Catches**\* - Mention the type of exception you are looking for and, optionally, perform an activity that informs the user about the found exception.
* **Finally** - (Optional) No matter if the exception occurred or not, the activities (if available) within this block always get executed.

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Try Catch block.
