---
id: wait-web-title
title: "Wait Page Title"
sidebar_label: "Wait Page Title"
sidebar_position: 30
description: "Wait Page Title activity documentation."
displayed_sidebar: activitiesSidebar
---
# Wait Page Title

RCA.Activities.Browser.WaitWebTitle

## **Description**

The Wait Page Title verifies if the page title has the requirement format according to the predefined  
value.

![image-20220505141738-1.png](/img/73bc4f_image-20220505141738-1.png)

(\* For Mandatory)

## **In the body of the activity**

* **Comparison Operator (Dropdown List)**- allow mathematical calculation as well as basic operations to be performed with ease  
  **・EQUALS** – The page title is exactly the same as the predefined value.  
  **・CONTAINS** – The page title contains the predefined value.  
  **・MATCHES** – The page title has the same regular expression as the predefined value
* **Value (String)**\* - The predefined value to verify the page title.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Input**

* **Comparison Operator (Dropdown List)**- allow mathematical calculation as well as basic operations to be performed with ease  
  **・EQUALS** – The page title is exactly the same as the predefined value.  
  **・CONTAINS** – The page title contains the predefined value.  
  **・MATCHES** – The page title has the same regular expression as the predefined value
* **Title Value (String)** - The predefined value to verify the page title.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [132567] Wait Page Title
* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

**Options**

* **Wait Timeout MS (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 20000

**Output**

* **Result (Boolean)** - A Boolean variable has two possible values: True or False  
  **・True** - The page title meets the requirement.  
  **・False** -The page does not meet the requirement.
