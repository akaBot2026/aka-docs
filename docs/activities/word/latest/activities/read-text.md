---
id: read-text
title: "Read Text"
sidebar_label: "Read Text"
sidebar_position: 5
description: "Read Text activity documentation."
displayed_sidebar: activitiesSidebar
---
# Read Text

RCA.Activities.Word.ReadText

## **Description**

This activity allows to read all or specified context or characters from a file and then store it in a String variable.

![image-20220506111840-1.png](/img/3e7f3a_image-20220506111840-1.png)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even if an error occurs within the activity. False (default): blocks the process from continuing the execution.

**Misc**

* **Public (Checkbox)**- If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Read Word File

**Output**

* **Text (String)**- Context or specified characters that are extracted from the file and stored in a String variable.
