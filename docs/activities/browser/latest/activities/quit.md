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

1. **Place inside a browser container**: Drag the **Quit Browser** activity into the **Do** container of [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md).
2. **Run the workflow**: akaBot closes the active browser window and terminates all associated browser driver processes.

> For more information about browser containers and browser sessions, see **[Browser Workflow](/docs/activities/browser/latest/user-guide/browser-workflow.md)**.

## **Troubleshooting**

* **Browser not closing**: The **Quit Browser** activity only closes the browser windows opened by the current workflow execution instance. It does not terminate other unrelated browser processes running on your computer.
