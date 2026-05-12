---
id: convert-secure-string
title: "Convert Secure String"
sidebar_label: "Convert Secure String"
sidebar_position: 4
description: "Convert Secure String activity documentation."
displayed_sidebar: activitiesSidebar
---
# Convert Secure String

RCA.Activities.Core.ConvertSecureString

## **Description**

This activity allows you to convert a SecureString to a String.

![image-20220505103002-1.jpeg](/img/image-20220505103002-1.jpeg)

\* indicates required fields.

## **Properties**

**Input**

* **SecureString (SecureString)**\*: The variable containing the SecureString to be converted.

**Misc**

* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.  
  Example: `Secure String to Text`
* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security before using this property.

**Output**

* **Result (String)**\*: The string value of the SecureString after conversion.