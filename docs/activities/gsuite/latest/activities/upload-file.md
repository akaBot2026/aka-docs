---
id: upload-file
title: "Upload File"
sidebar_label: "Upload File"
sidebar_position: 16
description: "Upload File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Upload File

RCA.Activities.GSuite.UploadFile

## **Description**

This activity is specified for Google Drive to upload file.

![image-20220505160610-1.png](/img/3bd52f_image-20220505160610-1.png)

(\*For mandatory)

## **In the body of activity**

* **Load File Path (String)**\* - File path which document would be uploaded.  
  E.g: “D:\file.txt”

## **Properties**

**Input**

* **Local File Path (String)**\* - File path which document would be uploaded.  
  E.g: “D:\file.txt”
* **Parent ID (String)**\* - The ID of the parent folder where you want to upload the file. This property supports String variables and string formatted values.

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [3275687978] Upload File

**Options**

* **Update Existing (Checkbox)** - If selected, any file with the same name as the source file that already exists in the destination location is replaced when the automation is executed.

**Output**

* **Result (String)** - ID of uploaded file. String variables are supported.
