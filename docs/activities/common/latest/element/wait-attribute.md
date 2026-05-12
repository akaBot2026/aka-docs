---
id: wait-attribute
title: "Wait Attribute"
sidebar_label: "Wait Attribute"
sidebar_position: 15
description: "Wait Attribute activity documentation."
displayed_sidebar: activitiesSidebar
---

# Wait Attribute

RCA.Activities.Common.WaitAttribute

## **Description**

This activity is used to wait for the value of the specified UI element's attribute to be equal to an object.

![image-20230419124551-1.png](/img/image-20230419124551-1.png)

(\* is mandatory)

## **In the body of activity**

- **Attribute Name (String)** - The name of the attribute to be retrieved. This field supports only strings.
- **Attribute Value (String)** - The expected value of the attribute.

## **Properties**

**Common**

- **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False
  - **True** : allows the rest of the process to continue the execution even an error occurs within the activity.
  - **False** : blocks the process from continuing the execution.
- **Timeout MS (Int32)** - Specifies the amount of time (in milliseconds) to wait for the activity to run before an error is thrown. The default value is 30000 milliseconds (30 seconds).

**Input**

- **Attribute (String)** - The name of the attribute to be retrieved. This field supports only strings.
- **Attribute Value (String)** - The expected value of the attribute.
- **Element (UIElement)** - The UI element that should contain the attribute.

**Misc**

- **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
- **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [3424325] Wait Attribute
