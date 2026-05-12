---
id: image-exists
title: "Image Exists"
sidebar_label: "Image Exists"
sidebar_position: 2
description: "Image Exists activity documentation."
displayed_sidebar: activitiesSidebar
---
# Image Exists

RCA.Activities.Core.ImageFound

## **Description**

This activity allows you to check if an image exists or not

![image-20220505093941-1.jpeg](/img/3fd041_image-20220505093941-1.jpeg)

(\* for Mandatory)

## **In the body of activity**

* **Take a Screenshot** - You can take a screenshot of the image for later use.

## **Properties**

**Input**

* **Delay MS (Int32)** - Wait for activity to run in a specified amount of time. If no input value OR input value \<= 1000, the waiting amount = 1000ms (1s). Otherwise, wait time = input value.

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [639993019] Image Exists

**Options**

* **Confident (Double)** - The ratio that the Bot recognize the image. The default ratio is 0.7.

**Output**

* **Result (Boolean)** – The result of the check, indicated if the image exists or not. Only return True or False.
