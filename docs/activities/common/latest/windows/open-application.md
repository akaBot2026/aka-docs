---
id: open-application
title: "Open Application"
sidebar_label: "Open Application"
sidebar_position: 8
description: "Open Application activity documentation."
displayed_sidebar: activitiesSidebar
---
# Open Application

RCA.Activities.Common.OpenApplication

## **Description**

The Open Application activity allows you to open an application and execute multiple activities within it.

![image-20230417163220-1.png](/img//image-20230417163220-1.png)

\* indicates required fields.

## **In the Body of Activity**

* **Indicate window on screen**: Allows you to automatically open an application by selecting its window.
* **Do**: The activities you want to execute within the application.

## **Properties**

**Common**

* **Continue On Error (Boolean)**: A Boolean variable that has two possible values: True or False.  
  True: Allows the rest of the process to continue execution even if an error occurs within the activity.  
  False: Stops the process from continuing execution when an error occurs.
* **TimeoutMS (Int32)**: The maximum time (in milliseconds) to wait for the activity to complete before throwing an error. If the timeout expires, the activity will be terminated.  
  Default value: `30000` (milliseconds)  
  Example: `30000`

**Input**

* **Arguments (String)**\*: The parameters passed to the application at startup. You can use this property to open a specific file with the application. Only one of the two fields **[File Name]** or **[Arguments]** must be specified.  
  Example: `C:\Users\currentuser\Documents\Sample.xlsx`
* **File Name (String)**\*: The full file path of the application. This must be quoted. Only one of the two fields **[File Name]** or **[Arguments]** must be specified.  
  Example: `"name.docx"`
* **Selector (String)**: A string that identifies the target window.

**Options**

* **Working Directory (String)**: The path to the working directory. This must be quoted.  
  Example: `"C:\Users\Admin"`

**Misc**

* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security requirements before using this property.
* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.  
  Example: `[3424325] Open Window`

**Output**

* **Application Window (WindowApp)**\*: The output of the activity with type `WindowApp`. This variable can be used in other activities such as Attach Window or Use Window. The output variable name must not contain whitespace.