---
id: get-visible-text
title: "Get Visible Text"
sidebar_label: "Get Visible Text"
sidebar_position: 13
description: "Get Visible Text activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Visible Text

## RCA.Activities.Windows.GetVisibleText

## Description
Extracts text values and their metadata from a window element.  
This activity is automatically generated when using the **Native Screen Scraping** method.

![image-20220505170937-1.png](/static/img/get-visible-text.png)

## In the body of activity

- **Pick target element**: Selects the target window element.  
  This action generates a **Selector** string used to identify the element.

## Properties

### Common

- **Continue On Error (Boolean)**  
  A Boolean variable with two possible values: `True` or `False`  
  - **True**: Allows the process to continue even if an error occurs  
  - **False**: Stops the process when an error occurs  

- **Delay After (Int32)**  
  Delay time (in milliseconds) after executing the activity  
  - Example: `300`

- **Delay Before (Int32)**  
  Delay time (in milliseconds) before the activity starts  
  - Example: `300`

- **Timeout MS (Int32)**  
  Maximum time (in milliseconds) to wait for the activity to run  
  - Default: `30000`

### Input

- **Selector (String)\***  
  A string that identifies the location of the UI element

### Misc

- **Public (Checkbox)**  
  Check to make the activity public  
  > ⚠️ Consider data security requirements before enabling this option  

- **Display Name (String)**  
  Custom name of the activity for better organization  
  - Example: `[1312..] Get Visible Text`

### Options

- **Automation Base (Dropdown list)**  
  Specifies the version of the Automation library (used with process arguments)

- **Element (AutomationElement)**  
  Uses an `AutomationElement` variable as input instead of a selector string  

- **From (UiElement)**  
  Defines a root `UiElement` for searching child elements  
  (If not specified, the search starts from the desktop root)

- **Use Window (WindowApp)\***  
  Uses a `WindowApp` variable (from Open Window / Window Scope) to limit the search scope  

### Output

- **Text Info (TextInfoList)**  
  Contains metadata about extracted text (e.g., layout, type)

- **Texts (String[])**  
  Array of extracted text values from the UI element  

### Wait

- **Wait For Disable (Checkbox)**  
  Waits until the element becomes disabled  

- **Wait For Enable (Checkbox)**  
  Waits until the element becomes enabled  

- **Wait For Vanish (Checkbox)**  
  Waits until the element disappears from the UI  