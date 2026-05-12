---
id: replace
title: "Replace"
sidebar_label: "Replace"
sidebar_position: 3
description: "Replace activity documentation."
displayed_sidebar: activitiesSidebar
---
# Replace

RCA.Activities.Core.Replace

## **Description**

This activity allows you to replace a match by a regular expression pattern with a specified replacement string.

![image-20220513111007-1.png](/img/c4c8e2_image-20220513111007-1.png)

(\* for Mandatory)

## **Properties**

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [997394325] Replace
* **Input (String)**\* - The string that you want to find a match.  
  E.g: “This phrase will be replaced”
* **Pattern (String)**\*- The pattern of the expression that you want to search for matches. Example on regular expression pattern: https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference  
  E.g: “\d{2}-\d{2}-\d{4}”
* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Regex Option (Dropdown list)** - You check it if you want to add bitwise combination of the enumeration for matching. For more details of the options, visit: https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-options
* **Replacement (String)**\* - The replacement string  
  E.g: “That sentence”

**Output**

* **Result (String)** - A output that is identical to the input, with the replacement string taking the place of each matched string searched before using Pattern stored in a variable.
