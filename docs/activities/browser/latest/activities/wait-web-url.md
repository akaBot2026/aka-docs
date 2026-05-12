---
id: wait-web-url
title: "Wait Page Url"
sidebar_label: "Wait Page Url"
sidebar_position: 31
description: "Wait Page Url activity documentation."
displayed_sidebar: activitiesSidebar
---
# Wait Page Url

RCA.Activities.Browser.WaitPageUrl

## **Description**

The Wait Page URL verifies if the page URL has the requirement format according to the predefined value

![image-20220505142016-2.png](/img/613d9d_image-20220505142016-2.png)

(\* for Mandatory)

## **In the body of the activity**

* **Comparison Operator (Dropdown List)**- allow mathematical calculation as well as basic operations to be performed with ease  
  **・EQUALS** – The page URL is exactly the same as the predefined value.  
  **・CONTAINS** – The page URL contains the predefined value.  
  **・MATCHES** – The page URL has the same regular expression as the predefined value
* **Value (String)**\* - The predefined value to verify the page URL

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Input**

* **Comparison Operator (Dropdown List)**- allow mathematical calculation as well as basic operations to be performed with ease  
  **・EQUALS** – The page URL is exactly the same as the predefined value.  
  **・CONTAINS** – The page URL contains the predefined value.  
  **・MATCHES** – The page URL has the same regular expression as the predefined value
* **Url Value (String)**\* - The predefined value to verify the page URL

**Misc**

* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [2356558] Wait Page Url
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

**Options**

* **Wait Timeout MS (Int32)** - The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 20000

**Output**

* **Result (Boolean)** - A Boolean variable has two possible values: True or False.  
  **・True**- The page URL meet the requirement  
  **・False**- The page URL does not meet the requirement.
