---
id: extract-data
title: "Extract Data"
sidebar_label: "Extract Data"
sidebar_position: 16
description: "Extract Data activity documentation."
displayed_sidebar: activitiesSidebar
---
# Extract Data

RCA.Activities.Browser.ExtractData

## **Description**

The Extract Data activity allows you to get data from a specified webpage.

![Browser_ExtractData](/static/img/173e9e_f342d2e-screenshot_2021-05-25_160007.jpg)

(\* For Mandatory)

**Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **In the body of activity**

* **Config Json (String)**\* - Json file enables you to extract data from indicated webpage. The text must be quoted.  
  E.g: "project.json"
* **Text html (String)** - Text string specifies what information to extract from indicated webpage. The text must be quoted.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Input**

* **Config Json (String)** - Json file enables you to extract data from indicated webpage. The text must be quoted.
* **Extracting HTML (String)** - HTML to extract from indicated webpage. The text must be quoted.

**Misc**

* **Public (Checkbox)** - Check if you want to public it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [342342314] Extract Data

**Output**

* **Output Json (String)\***- The outputted data with type = ‘String’. Not allow white space in output’s name.

## **Step-by-Step Usage**

1. **Place inside a browser container**: Drag the **Extract Data** activity into the **Do** container of [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md).
2. **Configure target data**: Click the **Pick target element** helper to define the text or element to scrape.
3. **Set the output variable**: Specify a DataTable variable in the **Extract Data** property of the properties panel to store the result.
4. **Run the workflow**: akaBot extracts the configured web data and writes it to the designated variable.

> For more information about selecting web elements and selectors, see **[Working with Web Elements](/docs/activities/browser/latest/user-guide/working-with-web-elements.md)**.

## **Troubleshooting**

* **Invalid Browser Session**: If the activity throws an error or fails to execute, ensure that it is running inside an active [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) or [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md) container, and that the browser tab has not been closed.
* **WebDriver Communication Failure**: If the browser driver (e.g. ChromeDriver) has crashed or disconnected, restart your browser session and check if the driver version matches your browser (see the [Environment Setup Guide](/docs/activities/browser/latest/setup-browser-environment.md)).

## **Related topics**

* [Working with Web Elements](/docs/activities/browser/latest/user-guide/working-with-web-elements.md)
