---
id: append-text
title: "Append Text"
sidebar_label: "Append Text"
sidebar_position: 2
description: "Append Text activity documentation."
displayed_sidebar: activitiesSidebar
---
# Append Text

RCA.Activities.Word.AppendText

## **Description**

This activity allows writing text at the end of a document. This activity is worked only in Word Application Scope activity.

![image-20220506111658-1.png](/img/8129f3_image-20220506111658-1.png)

(\* for Mandatory)

**In the body of the activity**

* **Text (String)** - The string or string variable that will be appended to the Word Document. Only String variables and strings are supported.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even if an error occurs within the activity. False (default): blocks the process from continuing the execution.

**Input**

* **New Line Before (Checkbox)** - This option allows the new added string will be in a new line. The box is checked by default.
* **Text (String)**- The string or string variable that will be appended to the Word Document. Only String variables and strings are supported.  
  E.g: “Your document are approved”

**Misc**

* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Add new text to the file
* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
