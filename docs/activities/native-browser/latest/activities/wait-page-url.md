---
id: wait-page-url
title: "Wait Page URL (NB)"
sidebar_label: "Wait Page URL (NB)"
sidebar_position: 27
description: "Wait Page URL (NB) activity documentation."
displayed_sidebar: activitiesSidebar
---
# Wait Page URL (NB)

RCA.Activities.NativeBrowser.WaitPageUrl

## **Description**

The Wait Page URL activity verifies whether the page URL matches a predefined condition.

![image-20220505151834-1.png](/img/image-20220505151834-1.png)

\* indicates required fields.

## **In the Body of Activity**

* **Comparison Operator (Dropdown List)**: Defines the condition to evaluate the page URL.  
  **EQUALS** – The page URL exactly matches the predefined value.  
  **CONTAINS** – The page URL contains the predefined value.  
  **MATCHES** – The page URL matches the predefined regular expression.
* **Value (String)**\*: The predefined value used to verify the page URL.

## **Properties**

**Common**

* **Continue On Error (Boolean)**: Specifies whether the automation should continue when an error occurs.  
  True: Continues execution even if an error occurs within the activity.  
  False (default): Stops the process when an error occurs.
* **Delay After (Int32)**: The delay time (in milliseconds) after the activity executes. Default is `300`.  
  Example: `300`
* **Delay Before (Int32)**: The delay time (in milliseconds) before the activity starts. Default is `300`.  
  Example: `300`
* **Timeout MS (Int32)**: The maximum time (in milliseconds) to wait for the activity to run. If the timeout expires, execution stops. Default is `30000`.  
  Example: `30000`

**Input**

* **Comparison Operator (Dropdown List)**: Defines the condition to evaluate the page URL.  
  **EQUALS** – The page URL exactly matches the predefined value.  
  **CONTAINS** – The page URL contains the predefined value.  
  **MATCHES** – The page URL matches the predefined regular expression.
* **Value (String)**\*: The predefined value used to verify the page URL.

**Misc**

* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.
* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security requirements before using this property. Default is unchecked.

**Output**

* **Result (Boolean)**: Indicates whether the page URL meets the specified condition.  
  True: The page URL satisfies the condition.  
  False: The page URL does not satisfy the condition.