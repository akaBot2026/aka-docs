---
id: message-box
title: "Message Box"
sidebar_label: "Message Box"
sidebar_position: 1
description: "Message Box activity documentation."
displayed_sidebar: activitiesSidebar
---
# Message Box

RCA.Activities.Core.MessageBox

## **Description**

This activity allows you to display a message box with the specified text and button options.

![image-20220505092843-1.jpeg](/img/25aa1c_image-20220505092843-1.jpeg)

(\* is mandatory.)

## **In the body of activity**

* **Text (String)**\* – The text to be displayed in the message box.  
  E.g: “Today is”

## **Properties**

**Input**

* **Buttons (Dropdown list)**- Specifies which buttons to be displayed in the message box. Available options are OK, OK/Cancel, Yes/No and Yes/No/Cancel.
* **Captions (String)**- The title of the message box dialog.  
  E.g: “Warning! Attention!”
* **Message Box Duration (Int32)**-Duration (in milliseconds) before the message box closes. If the input is smaller than 500 ms, duration will be set to infinite.  
  E.g: Message Box Duration = 400
* **Text (String)**\* – The text to be displayed in the message box.   
  E.g: “Today is”

**Misc**

* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [120548615] Message Box
* **Public (Checkbox)**- If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Top Most (Checkbox)** – If selected, always bring the message box to the foreground. Checked by default

**Output**

* **Chosen Button (String)**- Specifies which of the buttons specified in the Buttons property has been clicked during run time. The possible options are: Ok, Yes, No or, Cancel.
