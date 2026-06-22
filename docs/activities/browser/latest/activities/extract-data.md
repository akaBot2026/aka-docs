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

1. **Place inside a browser container**: The **Extract Data** activity must be placed inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.
2. **Provide Config JSON**: In the **Config Json** field, input the path to your extraction configuration JSON file in quotes (e.g., `"C:\\RPA\\Configs\\extractConfig.json"`).
3. **Map the Output**: Under **Output** -> **Output Json**, create a String variable named `jsonResult` (Ctrl+K -> type `jsonResult` -> press Enter) to store the extracted data.
4. **Run the workflow**: Execute the process. akaBot will read the web content based on the config JSON and output the structured data in JSON format to your variable.

## **Troubleshooting**

* **Invalid Browser Session**: If the activity throws an error or fails to execute, ensure that it is running inside an active [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) or [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md) container, and that the browser tab has not been closed.
* **WebDriver Communication Failure**: If the browser driver (e.g. ChromeDriver) has crashed or disconnected, restart your browser session and check if the driver version matches your browser (see the [Environment Setup Guide](/docs/activities/browser/latest/setup-browser-environment.md)).
