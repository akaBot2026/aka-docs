---
id: wait-web-title
title: "Wait Web Title"
sidebar_label: "Wait Web Title"
sidebar_position: 15
description: "Wait Web Title activity documentation."
displayed_sidebar: activitiesSidebar
---
# Wait Web Title

RCA.Activities.Common.WaitWebTitle

## **Description**

The Wait Web Title verifies if the web title has the requirement format according to the predefined value.

![image-20220505135325-1.png](/img/a4f8fb_image-20220505135325-1.png)

(\*For mandatory)

## **In the body of activity**

* **Comparison Operator (Dropdown List)** - Allow mathematical calculation as well as basic operations to be performed with ease  
  **EQUALS** – The page title is exactly the same as the predefined value.  
  **CONTAINS** – The page title contains the predefined value.  
  **MATCHES** – The page title has the same regular expression as the predefined value
* **Value (String)**\* - The predefined value to verify the web title.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity. The default amount of time is 300 milliseconds.  
  E.g: 300
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations. The default amount of time is 200 milliseconds.  
  E.g: 200
* **Timeout MS (Int32)** - The amount of time (in milliseconds) to wait for the activity to run. If the timeout has expired, the page would not be loaded further. The default amount of time is 30000 milliseconds.  
  E.g: 30000

**Input**

* **Comparison Operator (Dropdown List)** - Allow mathematical calculation as well as basic operations to be performed with ease  
  **EQUALS** – The page title is exactly the same as the predefined value.  
  **CONTAINS** – The page title contains the predefined value.  
  **MATCHES** – The page title has the same regular expression as the predefined value
* **Value (String)**\* - The predefined value to verify the web title.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is uncheck.

**Output**

* **Result (Boolean)** - A Boolean variable has two possible values: True or False  
  **True** - The page title meets the requirement.  
  **False** -The page does not meet the requirement.
