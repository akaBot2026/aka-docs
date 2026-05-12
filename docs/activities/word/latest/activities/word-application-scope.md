---
id: word-application-scope
title: "Word Application Scope"
sidebar_label: "Word Application Scope"
sidebar_position: 10
description: "Word Application Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# Word Application Scope

RCA.Activities.Word.WordApplicationScope

## **Description**

Word Application Scope activity provides a space for all other Word activities to interact with a specific Word document that is indicated in the Input of this activity. No Word Activities works outside of Word Application Scope. The Word Documents and the Word application will be closed once the activity is finished.

![image-20220506112026-1.png](/img/7c8057_image-20220506112026-1.png)

**In the body of activity**

* **Document Path (String)** – The path of the Word Document that will be processed. String variables and Strings are supported. If the specified file does not exist, a new document file is created.  
  E.g: “D:/input.docx”
* **Do** - Drop activity would be processed in that Word file.

## **Properties**

**Input**

* **File Path (String)** – The path of the Word Document that will be processed. String variables and Strings are supported. If the specified file does not exist, a new document file is created.

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Working with Word.

**Option**

* **Password (String)**- Insert Word file password to proceed. String variables and Strings are supported.  
  E.g: “Password@123”.
