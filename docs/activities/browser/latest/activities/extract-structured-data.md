---
id: extract-structured-data
title: "Extract Structured Data"
sidebar_label: "Extract Structured Data"
sidebar_position: 17
description: "Extract Structured Data activity documentation."
displayed_sidebar: activitiesSidebar
---
# Extract Structured Data

RCA.Activities.Browser.ExtractStructuredData

## **Description**

The Extract Structured Data allows you to extract structured data from a specified webpage.

![Browser_ExtractStructuredData](/img/b174d1_d1a0e86-screenshot_2021-05-25_160026.jpg)

(\* For mandatory)

## **In the body of the activity**

* **Pick target element**\* - Chooses the element to verify its existence. This activity will generate a string variable (Selector) to specify the location of that element.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Input**

* **Selector (String)\***- Text property used to find a particular UI element when the activity is executed. It is actually a XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.
* **Extracting HTML (String)** - This property allows you to input the page source contained the Structure Data needed to be extracted. If the Extracting HTML field and (Native) Browser are both filled, data from Browser shall be prioritized.
* **Browser (Browser)**- The existing browser variable that you want to extract to.

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Extract Data.

**Options**

* **Delay Between Page MS (Int32)** – The amount of time (in seconds) to wait until the next page is loaded. The default value is 1000 milliseconds. If the loading time of the page is longer, this value should be higher.  
  E.g: 1000
* **Max Number Of Result (Int32)** – The maximum number of results to be extracted. If the value is 0, all the identified elements are added to the output. The default value is 100.  
  E.g: 100
* **Next Page Timeout MS (Int32)**- The amount of time (in milliseconds) to wait for the next page to load. If the timeout has expired, the page would not be loaded further. The default amount of time is 30000 milliseconds.  
  E.g: 30000

**Output**

* **Result (Data Table)\***- The outputted data with type = ‘DataTable’. Not allow white space in output’s name.
