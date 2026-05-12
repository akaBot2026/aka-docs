---
id: set-content-control
title: "Set Content Control"
sidebar_label: "Set Content Control"
sidebar_position: 9
description: "Set Content Control activity documentation."
displayed_sidebar: activitiesSidebar
---
# Set Content Control

RCA.Activities.Word.SetContentControl

## **Description**

This activity allows you to add content to a specific Content Control within the Word document. Currently we are support CheckBox(Boolean), TextBox (String) với Combo box(int). When you select the activity, you will be asked for the type of value that the Content Control allows.

![image-20230421110354-1.png](/img/735f2b_image-20230421110354-1.png)

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even if an error occurs within the activity. False (default): blocks the process from continuing the execution.

**Input**

* **Find By Tag (String)** – This option allows you to find the Content Control by Tag
* **Find By Title (String)** - This option allows you to find the Content Control by Title
* **Set All Control Found (Boolean)** – Check this option if you want to add the value to all Content Controls with the same Title or Tag signify in the properties above. This is unchecked by default.
* **Value (Object)\*** – The value which you want to add to Content Control

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Set Content Control

**Output**

* **Result (Boolean)** – The result of the activity. Only returns two values: True or False. True- The value has been successfully added. False – The value has not been added successfully.
