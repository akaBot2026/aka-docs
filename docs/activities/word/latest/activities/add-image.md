---
id: add-image
title: "Add Image"
sidebar_label: "Add Image"
sidebar_position: 1
description: "Add Image activity documentation."
displayed_sidebar: activitiesSidebar
---
# Add Image

RCA.Activities.Common.AddImage

## **Description**

This activity allows to add an image at the end of a specified Word document. This activity is used only within Word Application Scope activity

![image-20220506111624-1.png](/img/3bf854_image-20220506111624-1.png)

(\* is mandatory)

## **In the body of activity**

- **File Path** - Path to the image to be added in a Word document

## **Properties**

**Common**

- **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False
  - **True** : allows the rest of the process to continue the execution even an error occurs within the activity.
  - **False** : blocks the process from continuing the execution.

**Input**

- **File Path** - Path to the image to be added in a Word document

**Misc**

- **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
- **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [3424325] Add Image