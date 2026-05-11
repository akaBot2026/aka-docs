---
id: copy-to-clipboard
title: "Copy To Clipboard"
sidebar_label: "Copy To Clipboard"
sidebar_position: 2
description: "Copy To Clipboard activity documentation."
displayed_sidebar: activitiesSidebar
---

# Copy To Clipboard

RCA.Activities.Core.SetToClipboard

## **Description**

This activity allows you to copy data to clipboard and stored for other use

![image-setoclipboard.png](/img/image-setoclipboard.png)

(\* is mandatory)

## **Properties**

**Input**

* **Text (InArgument&lt;String&gt;)** - Text to be copied to Clipboard
* **Text Format (TextDataFormat)** - The format of the text you want to copy. Support format are: Text, UnicodeText, Rtf, Html, CommaSepreatedValue, Xaml

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [3424325] Copy To Clipboard
