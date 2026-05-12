---
id: replace-text
title: "Replace Text"
sidebar_label: "Replace Text"
sidebar_position: 7
description: "Replace Text activity documentation."
displayed_sidebar: activitiesSidebar
---
# Replace Text

RCA.Activities.Word.ReplaceText

## **Description**

This activity allows when a string (under text format) occurs once or more than once, it could be replaced at every pages its occurrences. This activity only is used in the Word Application Scope activity.

![image-20220506111907-1.png](/img/47c77c_image-20220506111907-1.png)

**In the body of activity**

* **Search for (String)**- Input text or keyword to be replaced. Only String variables and strings are supported.
* **Replace with (String)**- Input text or keyword to replace with. Only String variables and strings are supported.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even an error occurs within the activity. False (default): blocks the process from continuing the execution.

**Input**

* **Replace (String)**- Input text or keyword to replace the searched strings with. Only String variables and strings are supported.
* **Search (String)**- Input text or keyword that will be replaced. Only String variables and strings are supported.

**Misc**

* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Replace Text
* **Public (Checkbox)**- If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.

**Result**

* **Found (Boolean)**- Found information indicates whether the to-be-replaced text or keyword was found or not.
