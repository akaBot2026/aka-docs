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

![Browser_ExtractData](/img/173e9e_f342d2e-screenshot_2021-05-25_160007.jpg)

(\* For Mandatory)

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
