---
id: save-image
title: "Save Image"
sidebar_label: "Save Image"
sidebar_position: 11
description: "Save Image activity documentation."
displayed_sidebar: activitiesSidebar
---
# Save Image

RCA.Activities.Core.SaveImage

## **Description**

This activity allows you to save an image to your disk.

![image-20220513111129-1.png](/img/a26eec_image-20220513111129-1.png)

(\* for Mandatory)

## **Properties**

**Input**

* **File Name (String)**\* - The full file path where you want to save the image including its name.  
  E.g: “D:\NewFolder\downloadimage.jpg”
* **Image (Image)**\* - The image that you want to save to your disk stored in a variable.

**Misc**

* **Public (Checkbox)**- If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Save Image
