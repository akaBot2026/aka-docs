---
id: click-image
title: "Click Image"
sidebar_label: "Click Image"
sidebar_position: 1
description: "Click Image activity documentation."
displayed_sidebar: activitiesSidebar
---
# Click Image

RCA.Activities.Core.ClickImage

## **Description**

This activity allows you to search for an image and click it within a UI element.

![image-20220505092211-1.jpeg](/img/54acdd_image-20220505092211-1.jpeg)

(\* for Mandatory)

## **In the body of activity**

* **Take a Screenshot** - The Image Selector. You can get a screenshot by clicking to this option. Text will be extracted using this screenshot.

## **Properties**

**Input**

* **Click type (Dropdown list)** - Determines which type of mouse click you want to use. Available options are Leftclick, LeftDoubleClick, RightClick, RightDoubleClick.
* **Delay MS (Int32)**- The amount of time after the execution. If the input value is less than 1000 or empty, the timeout will be 1000 milliseconds.
* **OffsetX (Int32)** - The horizontal displacement of the position (in pixels)
* **OffsetY (Int32)** - The vertical displacement of the position. (in pixels)
* **Image Path (String)** - Enables you to load an image from the disk and save it to an Image variable.  
  E.g: “D:\photo.jpg”

**Notes**: You can only choose to either input an Image Path or use the Image Selector.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [997446715] Click-image
* **Public (Checkbox)**- If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.

**Options**

* **Click position (Dropdown list)**- The position you want to set the click. The available options are Left, Right, Center.
* **Confident (Double)**- The ratio that the bot recognizes the image. The higher the value, the more precise the image must be for the bot to click on.  
  E.g: 0.7
* **Use image advance Search (Checkbox)** - This tool allows you to use image as an advanced search: blurry/ scale out image...
