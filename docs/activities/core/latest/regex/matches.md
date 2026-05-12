---
id: matches
title: "Matches"
sidebar_label: "Matches"
sidebar_position: 2
description: "Matches activity documentation."
displayed_sidebar: activitiesSidebar
---
# Matches

RCA.Activities.Core.Matches

## **Description**

This activity allows you to search string and it will return to successful matches.

![image-20220505095119-2.jpeg](/img/4d7b6f_image-20220505095119-2.jpeg)

(\* for Mandatory)

## **Properties**

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [997394815] Matches
* **Input (String)**\* - The string that you want to find a match.  
  E.g: “This is a phrase”
* **Pattern (String)**\*- The pattern of the expression that you want to search for matches. Example on regular expression pattern: https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference  
  E.g: “\d{2}-\d{2}-\d{4}”
* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Regex Option (Dropdown box)**- You check it if you want to add bitwise combination of the enumeration for matching. For more details of the options, visit: https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-options

**Output**

* **Result (MatchCollection)**- Everything that matches the search pattern will be stored in a MatchCollection. Loop through each files with For Each activity, argument type System.Text.RegularExpressions.Match to process all the matches.
