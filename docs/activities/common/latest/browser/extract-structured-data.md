---
id: extract-structured-data
title: "Extract Structured Data"
sidebar_label: "Extract Structured Data"
sidebar_position: 4
description: "Extract Structured Data activity documentation."
displayed_sidebar: activitiesSidebar
---
# Extract Structured Data

RCA.Activities.Common.ExtractStructuredData

## **Requirement**
Activity should be placed inside Open Browser/Attach Browser Activity.

## **Description**

The Extract Structured Data allows you to extract structured data from a specified webpage.

![image-20220505134517-1.png](/static/img/04d80e_image-20220505134517-1.png)

(\*For mandatory)

## **In the body of activity**

* **Open Wizard**\* - Chooses the element to verify its existence. This activity will generate a string variable (Selector) to specify the location of that element.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity. The default amount of time is 300 milliseconds.  
  E.g: 300
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations. The default amount of time is 200 milliseconds.  
  E.g: 200

**Input**

* **Selector (String)** - The outputted data with type 'DataTable'.

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

* **Result (Data Table)** - The outputted data with type = ‘DataTable’.

## **Extract Wizard**
How to use Extract Wizard to indicate structure data config.

**Steps**

**1. Open Wizard**
Click Open Wizard on Activity Designer

![openmwizard.png](/static/img/openmwizard.png)

**2. Add Column**

On Extract Data Wizard. Click Add Column to indicate the data to extract.

![6d3bf057-452a-41ca-aaf9-c73cdc79e8c1.png](/static/img/6d3bf057-452a-41ca-aaf9-c73cdc79e8c1.png)

Select the field on data to Extract

![8a8d282c-5a21-4128-8b48-49de9b5568bb.png](/static/img/8a8d282c-5a21-4128-8b48-49de9b5568bb.png)

Columns and preview data would show up in the wizard.

![dbe3431e-e416-4f29-af1f-54e51095a234.png](/static/img/dbe3431e-e416-4f29-af1f-54e51095a234.png)

**3. Add Next Page Seletor (Optional)**

Indicate next page to Help with pagination

![767d948d-9ce1-4512-8d04-06bdb5cea560.png](/static/img/767d948d-9ce1-4512-8d04-06bdb5cea560.png)
![e4fd7ae1-71e2-4451-bc02-dc49f326a37e.png](/static/img/e4fd7ae1-71e2-4451-bc02-dc49f326a37e.png)

**4. Save Config**

Click Save to save config for extraction

![5434e7be-4bbf-42cb-b072-7b6a5cea93ce.png](/static/img/5434e7be-4bbf-42cb-b072-7b6a5cea93ce.png)

Example table url: https://datatables.net/examples/basic_init/alt_pagination.html

