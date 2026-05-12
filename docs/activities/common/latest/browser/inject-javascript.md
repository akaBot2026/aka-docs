---
id: inject-javascript
title: "Inject Javascript"
sidebar_label: "Inject Javascript"
sidebar_position: 7
description: "Inject Javascript activity documentation."
displayed_sidebar: activitiesSidebar
---
# Inject Javascript

RCA.Activities.Common.InjectJavascript

## **Description**

The Inject JavaScript allows you to inject JavaScript on a webpage.

![image-20220505134722-1.png](/img/5af07a_image-20220505134722-1.png)

(\*For mandatory)

## **In the body of activity**

* **Script File (String)**\* – The path of the JavaScript file you want to inject.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity. The default amount of time is 300 milliseconds.  
  E.g: 300
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations. The default amount of time is 200 milliseconds.  
  E.g: 200

**Input**

* **Script File (String)**\* – The path of the JavaScript file you want to inject.  
  E.g: "D:\Users\Downloads\invokeCode\invokeCode\alert.js

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is uncheck.

**Output**

* **Script Output (String)** - The outputted Script File with type = ‘String’.
