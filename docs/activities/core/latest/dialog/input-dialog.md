---
id: input-dialog
title: "Input Dialog"
sidebar_label: "Input Dialog"
sidebar_position: 4
description: "Input Dialog activity documentation."
displayed_sidebar: activitiesSidebar
---

# Input Dialog

RCA.Activities.Core.InputDialog

## **Description**

This activity displays a dialog box that prompts you with a label message and an input field.

![image-input-dialog.png](/img/image-input-dialog.png)

(\* is mandatory)

## **Properties**

**Input**

- **Is Password (Boolean)** - Specifies if the the input value should be treated as a password
- **Label (InArgument&lt;String&gt;)** - The Text to display as the label of the form
- **Options (InArgument&lt;String[]&gt;)** - Provides an array of options to choose from instead of textbox. If set to contain only one element, a text box appears to write text. If set to contain 2 or 3 elements, they appear as radio buttons to select from . If select more than 3, they appear as a combo box to choose from.
- **Title (InArgument&lt;String&gt;)** - The title of the dialog.

**Misc**

- **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
- **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [3424325] Input Dialog

**Options**

- **Top Most (Boolean)** - Set Input Dialog on top of all other windows.

**Output**

- **Result (OutArgument)** - The value inserted by the user in the input dialog stored in a variable
