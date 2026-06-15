---
id: decrypt-pdf
title: "Decrypt PDF"
sidebar_label: "Decrypt PDF"
sidebar_position: 5
description: "Decrypt PDF activity documentation."
displayed_sidebar: activitiesSidebar
---
# Decrypt PDF

RCA.Activities.PDF.DecryptPDF

## **Description**

Decrypt an encrypted PDF file.

![decrypt-pdf.png](/static/img/decrypt-pdf.png)

(\*For mandatory)

## **In the body of the activity**

* **File Name** - The full path of the PDF file to be read.
* **Output File Name** - The resulting PDF is saved in this given path.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**File**

* **File Name: InArgument<String>*** - The full path of the PDF file to be read.

* **Output File Name: InArgument<String>*** - The resulting PDF is saved in this given path. If it exists, the file is overwritten.

**Options**

* **User Password: InArgument<String>** - The user password of the PDF file.

* **Owner Password: InArgument<String>** - The owner password of the PDF file.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window
