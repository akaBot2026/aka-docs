---
id: get-event-info
title: "Get Event Info"
sidebar_label: "Get Event Info"
sidebar_position: 1
description: "Get Event Info activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Event Info

RCA.Activities.Core.GetEventInfo

## **Description**

This activity allows extracting different types of information related to a trigger. This can be used only inside the Monitor Events activity.

![image-20220506112201-1.png](/img/4adde3_image-20220506112201-1.png)

(\* for Mandatory)

## **Properties**

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Get Even Info
* **Type Argument (Dropdown list)** - Variable type of the Result, support to verify the outArgument.

**Output**

* **Result (OutArgument)** - The output information from the trigger.
