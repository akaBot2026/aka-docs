# Is Match - akaBot Docs

RCA.Activities.Core.IsMatch

## **Description**

This activity allows you to find expression that matches the specified input string.

![image-20220505094842-1.jpeg](/img/c569b8-image-20220505094842-1.jpeg)

(\* is mandatory)

## **Properties**

**Misc**

* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [263326468] Is Match
* **Input (String)**\*- The string that you want to find a match.  
  E.g: “This is a phrase”
* **Pattern (String)**\*- The pattern of the expression that you want to search for matches. Example on regular expression pattern: <https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference>  
  E.g: “\d{2}-\d{2}-\d{4}”
* **Regex Option (Dropdown box)**- You check it if you want to add bitwise combination of the enumeration for matching. For more details of the options, visit: <https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-options>
* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.

**Output**

* **Result (Boolean)**- The result if the expression finds a match. Only return True or False.

Table of Content

* [Description](#HDescription)
* [Properties](#HProperties)