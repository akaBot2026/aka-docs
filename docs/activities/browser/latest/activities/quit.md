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

![Browser_Quit](/static/img/ca06b2_ef854ca-screenshot_2021-05-25_155954.jpg)

(\* For Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Misc**

* **Display Name (String)**  - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [1232145] Quit
* **Public (Checkbox)**  - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

## **Step-by-Step Usage**

1. **Place the activity**: Drag the **Quit Browser** activity to the bottom of your workflow sequence, outside of the browser container (e.g. [Open Browser](/docs/activities/browser/latest/activities/open-browser.md)).
2. **Execute flow**: When executed, this activity terminates the browser session currently managed by the active browser container context.

## **Troubleshooting**

* **Browser not closing**: The **Quit Browser** activity only closes the browser windows opened by the current workflow execution instance. It does not terminate other unrelated browser processes running on your computer.

