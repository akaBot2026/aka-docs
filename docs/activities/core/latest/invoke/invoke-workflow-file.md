---
id: invoke-workflow-file
title: "Invoke Workflow File"
sidebar_label: "Invoke Workflow File"
sidebar_position: 3
description: "Invoke Workflow File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Invoke Workflow File

RCA.Activities.Core.InvokeWorkflowFile

## **Description**

With this activity, you can call the specified workflow synchronously, optionally passing it a list of input arguments. Arguments can be imported from a specified workflow with this activity by using the Import Arguments button in the body of the activity.

![image-20220505161118-3.png](/img/ac80db_image-20220505161118-3.png)

(\* for Mandatory)

## **In the body of activity**

* **Workflow Path (String)**\* - The file path of the .xaml file to be invoked.  
  E.g: “C:\Users\Admin\Documents\akaBot\Invokefile.xaml”
* **Edit Arguments (Button)** – Click here to add and edit different types of arguments.
* **Import Arguments (Button)** - You can import more arguments in this field

## **Properties**

**Common**

* **Continue On Error (Boolean)**- This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. The default value is False.

**Input**

* **Arguments (String)**- The parameters that can be passed to the code that is invoked
* **Workflow File Name (String)**\* - The file path of the .xaml file to be invoked.  
  E.g: “C:\Users\Admin\Documents\akaBot\Invokefile.xaml”

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [663505729] Invoke Workflow File

**Options**

* **Workflow Timeout (TimeSpan)** - The amount of time to wait for the activity to run before an error is thrown.  
  E.g: 00:00:05
