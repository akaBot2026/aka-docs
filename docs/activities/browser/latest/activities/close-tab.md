---
id: close-tab
title: "Close tab"
sidebar_label: "Close tab"
sidebar_position: 14
description: "Close tab activity documentation."
displayed_sidebar: activitiesSidebar
---
#  Close tab

RCA.Activities.Browser.CloseTab

## **Description**

The **Close Tab** activity closes the currently opened tab in the browser or a specified browser variable session.

![1774422442503-694.png](/static/img/f51f8f_1774422442503-694.png)

(\* For Mandatory)

**Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **Properties**

**Common**

* **Continue on Error (Boolean):** A Boolean variable has two possible values: True or False.
  + **True:** The process continues execution even if an error occurs within the activity.
  + **False (default):** The process execution is stopped if an error occurs.
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity.
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations.

**Input**

* **Browser (Browser)** - The existing browser variable representing the browser session or tab you want to close. If left empty, the activity will close the active tab in the current container context.

**Misc**

* **Display Name (String):** The name of the activity. You can edit it to better organize and structure your workflow. E.g: [574096313] Close Tab
* **Public (Checkbox):** Check this option to make the activity public. Before enabling, ensure that data security requirements are considered. By default, this option is unchecked.

## **Step-by-Step Usage**

1. **Place inside a browser container**: Drag the **Close Tab** activity into the **Do** container of [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md).
2. **Run the workflow**: akaBot closes the active tab in the current browser container context.

> For more information about browser containers and browser sessions, see **[Browser Workflow](/docs/activities/browser/latest/user-guide/browser-workflow.md)**.

## **Troubleshooting**

* **Invalid Browser Session**: If the activity throws an error or fails to execute, ensure that it is running inside an active [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) or [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md) container, or that the **Browser** variable passed into the Input property is valid and represents an open tab.
* **WebDriver Communication Failure**: If the browser driver (e.g. ChromeDriver) has crashed or disconnected, restart your browser session and check if the driver version matches your browser (see the [Environment Setup Guide](/docs/activities/browser/latest/setup-browser-environment.md)).

## **Related topics**

* [Browser Workflow](/docs/activities/browser/latest/user-guide/browser-workflow.md)
