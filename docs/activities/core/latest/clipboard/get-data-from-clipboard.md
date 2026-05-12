---
id: get-data-from-clipboard
title: "Get Data from Clipboard"
sidebar_label: "Get Data from Clipboard"
sidebar_position: 1
description: "Get Data from Clipboard activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Data from Clipboard

RCA.Activities.Core.GetFromClipboard

## **Description**

This activity allows you to get data from Clipboard for further execution

![image-20220505092631-1.jpeg](/img/a2e9c6_image-20220505092631-1.jpeg)

(\* for Mandatory)

## **Properties**

**Input**

* **Text Format (Dropdown list)**\* – The format of the data you want to get from to Clipboard. Support format are: Text, UnicodeText, Rtf, Html, CommaSepreatedValue, Xaml.

**Output**

* **Output Text (String)** - The output of the text that you get from this activity stored in a variable.

**Misc**

* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [997394815] Move File
* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
