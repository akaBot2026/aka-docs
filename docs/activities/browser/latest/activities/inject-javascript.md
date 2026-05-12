---
id: inject-javascript
title: "Inject Javascript"
sidebar_label: "Inject Javascript"
sidebar_position: 23
description: "Inject Javascript activity documentation."
displayed_sidebar: activitiesSidebar
---
# Inject Javascript

RCA.Activities.Browser.InjectJs

## **Description**

The Inject JavaScript allows you to inject JavaScript on a webpage.

![image-20220505134721-2.png](/img/59161b_image-20220505134721-2.png)

(\* For Mandatory)

## **In the body of the activity**

* **Script File (String)\***– The path of the JavaScript file or JavaScript text you want to inject.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.

**Input**

* **Arguments:**
  + In case no data needs to be passed => Leave the field empty and click **OK**
  + In case you need to pass input data => Click "Create argument"
    - Enter the name of argument
    - Select direction from a dropdown list `{In, out, in / out}`
    - Select type from a dropdown list.
    - Enter value
* **Script File (String)**\* – The path of the JavaScript file you want to inject. You can also insert the JavaScript code directly here.  
  E.g: `"D:\Users\Downloads\invokeCode\invokeCode\alert.js"` or `"function clickButton(){document.querySelector('#loginButton').click();}"`

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [345357] Inject Javascript
* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

**Output**

* **Script Output (String)\***- The outputted Script File with type = ‘String’. Not allow white space in output name.
