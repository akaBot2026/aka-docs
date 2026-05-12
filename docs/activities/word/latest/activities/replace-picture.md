---
id: replace-picture
title: "Replace Picture"
sidebar_label: "Replace Picture"
sidebar_position: 6
description: "Replace Picture activity documentation."
displayed_sidebar: activitiesSidebar
---
# Replace Picture

RCA.Activities.Word.ReplacePicture

## **Description**

Replaces all occurrences of a picture in a Word document with another specified picture.  
The picture to be replaced is identified by its **Alt Text**.  
This activity can only be used within a **Word Application Scope** activity.

![image-20230421111418-1.png](/img/replace-picture.png)

\* indicates required fields.

## **In the Body of Activity**

* **Find picture with 'Alt Text'**: All pictures with this Alt Text will be replaced. Case-insensitive. The value must be enclosed in quotation marks.
* **Replace with picture**: The file path of the replacement image. The value must be enclosed in quotation marks.

## **Properties**

**Input**

* **Find picture with Alt Text (String)**: The Alt Text of the picture to be replaced.
* **Replace with picture (String)**: The file path of the image to insert into the document.

**Misc**

* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security requirements before using this property.
* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.  
  Example: `[3424325] Replace Picture`

**Output**

* **Result (Boolean)**: Indicates the result of the replace operation.  
  True: The picture was replaced successfully.  
  False: The replacement failed due to one of the following reasons:  
  - The Alt Text does not exist  
  - The Alt Text is null