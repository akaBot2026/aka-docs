---
id: extract-structured-data
title: "Extract Structured Data (NB)"
sidebar_label: "Extract Structured Data (NB)"
sidebar_position: 6
description: "Extract Structured Data (NB) activity documentation."
displayed_sidebar: activitiesSidebar
---
# Extract Structured Data (NB)

RCA.Activities.NativeBrowser.ExtractStructuredData

## **Description**

The Extract Structured Data allows you to extract structured data from a specified webpage.

![image-20220505145843-1.png](/img/98c685_image-20220505145843-1.png)

(\*For mandatory)

## **In the body of activity**

* **Pick target element**\* - Chooses the element to verify its existence. This activity will generate a string variable (Selector) to specify the location of that element.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity. The default amount of time is 300 milliseconds.  
  E.g: 300
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations. The default amount of time is 300 milliseconds.  
  E.g: 300

**Input**

* **Extracting HTML (String)** - This property allows you to input the page source containing the Structure Data needed to be extracted. If the Extracting HTML field and (Native) Browser are both filled, data from Native Browser shall be prioritized. Robot will priority input from Extracting HTML over the Output of Open Browser or Attach Browser activities.
* **Browser (Native Browser)** - The existing browser variable that you want to extract to.
* **Selector (String)**\* - Text property used to find a particular UI element when the activity is executed. It is actually an XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is uncheck.

**Options**

* **Delay Between Pages MS (Int32)** – The amount of time (in milliseconds) to wait until the next page is loaded. The default value is 1000 milliseconds. If the loading time of the page is longer, this value should be higher.  
  E.g: 1000
* **Max Number Of Result (Int32)** – The maximum number of results to be extracted. If the value is 0, all the identified elements are added to the output. The default value is 100.  
  E.g: 100
* **Next Page Timeout MS (Int32)**- The amount of time (in milliseconds) to wait for the next page to load. If the timeout has expired, the page would not be loaded further. The default amount of time is 30000 milliseconds. If the input value is less than or equal to 0, the timeout will be 30000 (milliseconds).  
  E.g: 30000

**Output**

* **Result (Data Table)** - The outputted data with type = ‘DataTable’. Not allow white space in output’s name.
