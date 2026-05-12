---
id: quit
title: "Quit Browser"
sidebar_label: "Quit Browser"
sidebar_position: 15
description: "Quit Browser activity documentation."
displayed_sidebar: activitiesSidebar
---
# Quit Browser

RCA.Activities.Browser.Quit

## **Description**

The Quit Browser closes the current browser. This will only close window Browser opened by Open Browser activity.

![Browser_Quit](/img/ca06b2_ef854ca-screenshot_2021-05-25_155954.jpg)

(\* For Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [1232145] Quit
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.
