---
id: remove-log-fields
title: "Remove Log Fields"
sidebar_label: "Remove Log Fields"
sidebar_position: 3
description: "Remove Log Fields activity documentation."
displayed_sidebar: activitiesSidebar
---
# Remove Log Fields

RCA.Activities.Core.RemoveLogFields

## **Description**

This activity allows you to remove customized log fields to each Log Message.

![image-20220505093240-1.jpeg](/img/d0ec7b_image-20220505093240-1.jpeg)

(\* for Mandatory)

## **Properties**

**Input**

* **Fields (Collection of String)**\* - The collection of string arguments to be removed from subsequent log lines.

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [287771588] Remove Log Fields
