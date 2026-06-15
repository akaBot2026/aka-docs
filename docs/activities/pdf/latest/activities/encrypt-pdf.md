---
id: encrypt-pdf
title: "Encrypt PDF"
sidebar_label: "Encrypt PDF"
sidebar_position: 6
description: "Encrypt PDF activity documentation."
displayed_sidebar: activitiesSidebar
---
# Encrypt PDF

RCA.Activities.PDF.EncryptPDF

## **Description**

Use the Encrypt document action to encrypt a PDF file.

(\*For mandatory)

## **In the body of the activity**

* **PDF Path** - PDF file path.
* **Save Path** - The resulting PDF is saved in this given path.
* **User permissions** - Select the permissions to apply to the encrypted PDF.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.
  - True: allows the rest of the process to continue the execution even an error occurs within the activity.
  - False: blocks the process from continuing the execution.

**File**

* **PDF Path: InArgument<String>*** - PDF file path.

* **Save Path: InArgument<String>*** - The resulting PDF is saved in this given path. If it exists, the file is overwritten.

**Options**

* **User password: InArgument<String>** - Allow users to use a password to open the file.

* **Owner password: InArgument<String>** - Allow users to perform specific operations on the encrypted PDF file.

* **Encryption level: EncryptionLevel** - Select the Encrypted128Bit or Encrypted40Bit option to specify the encryption level.

**PDF User Permissions**

* **User permissions: UserPermition** - In the User Permissions to Apply field, select operations such as print, modify, extract content, annotations, forms fill, accessibility extract content, assemble document, or full quality print.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window
