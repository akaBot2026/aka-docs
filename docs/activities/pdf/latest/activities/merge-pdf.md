---
id: merge-pdf
title: "Merge PDF Files"
sidebar_label: "Merge PDF Files"
sidebar_position: 1
description: "Merge PDF Files activity documentation."
displayed_sidebar: activitiesSidebar
---
# Merge PDF Files

RCA.Activities.PDF.MergePDF

## **Description**

Join multiple PDF files.

(\*For mandatory)

## **In the body of the activity**

* **Output File Name** - The resulting PDF is saved in this given path. If it exists, the file is overwritten.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**File**

* **File List** (`InArgument<String[]>`)* - An array of PDF file full paths.

* **Output File Name** (`InArgument<String>`)* - The resulting PDF is saved in this given path. If it exists, the file is overwritten.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window
