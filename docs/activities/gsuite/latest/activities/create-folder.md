---
id: create-folder
title: "Create Folder"
sidebar_label: "Create Folder"
sidebar_position: 4
description: "Create Folder activity documentation."
displayed_sidebar: activitiesSidebar
---
# Create Folder

RCA.Activities.GSuite.CreateFolder

## **Description**

This activity allows you to create a new folder in Google Drive.

![image-20220505155144-1.png](/img/f40f41_image-20220505155144-1.png)

(\*For mandatory)

## **In the body of activity**

* **Untitled Folder (String)**\* - Description of new folder. String variables are supported.  
  Eg: :”Untiled Folder”
* **Id of the parent folder, or “root” (String)** - ID of parent folder to create a new folder.

## **Properties**

**Input**

* **Folder description (String)** - Description of new folder. String variables are supported.
* **Folder name (String)**\* - Name of new folder. String variables and Strings are supported.  
  Eg: :”Untiled Folder”
* **Parent ID (String)** - The ID of the parent folder where you want to create the new folder. This property supports String variables and string formatted values

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.2  
  E.g : [91512312] Create Folder

**Output**

* **Result (String)** - ID of the new folder. String variables are supported.
