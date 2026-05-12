---
id: open-window
title: "Open Window"
sidebar_label: "Open Window"
sidebar_position: 20
description: "Open Window activity documentation."
displayed_sidebar: activitiesSidebar
---
# Open Window

## RCA.Activities.Windows.OpenWindow

## Description
The **Open Window** activity allows you to open an application and execute multiple activities within it.

![image-20220505165249-1.png](/img/open-window.png)

\* is mandatory.

---

## In the body of activity

- **Indicate window on screen**: Allows you to automatically open an application by selecting its window.  
- **Do**: The activities you want to execute within the application.

---

## Properties

### Common

- **Continue On Error (Boolean)** – A Boolean variable has two possible values: `True` or `False`  
  - **True**: Allows the rest of the process to continue execution even if an error occurs within the activity.  
  - **False**: Stops the process from continuing execution.  

- **TimeoutMS (Int32)** – The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown.  
  - Default: `30000`  
  - Example: `30000`

---

### Input

- **Arguments (String)\*** – The parameters that can be passed to the application at startup.  
  Use this property to open a specific file with the application.  
  ⚠️ Only one of **[File Name]** or **[Arguments]** must be specified.  
  - Example: `C:\Users\currentuser\Documents\Sample.xlsx`

- **File Name (String)\*** – The full file path of the application. This must be quoted.  
  ⚠️ Only one of **[File Name]** or **[Arguments]** must be specified.  
  - Example: `"name.docx"`

- **Selector (String)** – String of characters that identifies the location of the window.

---

### Misc

- **Public (Checkbox)** – Check if you want to make the activity public.  
  ⚠️ Consider data security requirements before using this property.

- **Display Name (String)** – The name of this activity. You can edit it to better organize your code.  
  - Example: `[3424325] Open Window`

---

### Options

- **Working Directory (String)** – The path to the working directory. Must be quoted.  
  - Example: `"C:\Users\Admin.."`

---

### Output

- **Application Window (WindowApp)\*** – Output variable of type `WindowApp`.  
  This variable can be used in other activities such as **Attach Window** or ** Use Window**.  
  ⚠️ Do not include whitespace in the output variable name.