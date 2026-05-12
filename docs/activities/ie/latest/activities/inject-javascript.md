---
id: inject-javascript
title: "Inject Javascript"
sidebar_label: "Inject Javascript"
sidebar_position: 13
description: "Inject Javascript activity documentation."
displayed_sidebar: activitiesSidebar
---
# Inject Javascript

RCA.Activities.IE.InjectJs

## **Description**

The Inject Javascript allows you to inject Javascript on a webpage.

![image-20220506110747-1.png](/img/be951a_image-20220506110747-1.png)

(\* for Mandatory)

**In the body of the activity**

* **Pick target element**- Chooses the field to select the item. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even if an error occurs within the activity. False (default): blocks the process from continuing the execution.

**Input**

* **JS Code (String)**\* - Name of the Javascript file you want to inject. Javascript script to be encased in quotation marks.  
  Ex: code.vbs
* **JS Parameters (Dictionary< String, Argument >)** - Input data for the JavaScript code, as a string or string variable.

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Ex: Inject Javascript

**Output**

* **JS Output (String)** - The outputted Script File with type = ‘String’. Not allow white space in output name.
