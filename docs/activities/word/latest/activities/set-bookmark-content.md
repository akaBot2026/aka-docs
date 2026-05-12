---
id: set-bookmark-content
title: "Set Bookmark Content"
sidebar_label: "Set Bookmark Content"
sidebar_position: 8
description: "Set Bookmark Content activity documentation."
displayed_sidebar: activitiesSidebar
---
# Set Bookmark Content

RCA.Activities.Word.SetBookmarkContent

## **Description**

This activity allows you to add text or content to a specified bookmark location in a document.  
This activity can only be used within a **Word Application Scope** activity.

![image-20220506111935-1.png](/img/18e34e_image-20220506111935-1.png)

## **In the Body of Activity**

* **Bookmark Name (String)**: The name of the existing bookmark where the text will be written. Supports only String and String variables.  
  Example: `"Description"`
* **Bookmark Text Content (String)**: The text to be written into the specified bookmark. Supports only String and String variables.  
  Example: `"Title"`

## **Properties**

**Common**

* **Continue On Error (Boolean)**: A Boolean variable with two possible values: True or False.  
  True: Continues execution even if an error occurs within the activity.  
  False (default): Stops the process from continuing execution.

**Input**

* **Is Form Field (Checkbox)**: Select this option if the bookmark is a form field. By default, this option is unchecked.
* **Bookmark Name (String)**: The name of the existing bookmark where the text will be written. Supports only String and String variables.  
  Example: `"Description"`
* **Bookmark Text Content (String)**: The text to be written into the specified bookmark. Supports only String and String variables.

**Misc**

* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security requirements before using this property.
* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.  
  Example: `Set Bookmark Content`
