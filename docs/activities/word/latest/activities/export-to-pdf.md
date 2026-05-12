---
id: export-to-pdf
title: "Export to PDF"
sidebar_label: "Export to PDF"
sidebar_position: 3
description: "Export to PDF activity documentation."
displayed_sidebar: activitiesSidebar
---
# Export to PDF

RCA.Activities.Word.ExportToPDF

## **Description**

This activity allows exporting assigned documents in PDF format. This activity is worked only under the Word Application Scope activity.

![image-20220506111729-1.png](/img/d9440b_image-20220506111729-1.png)

**In the body of activity**

* **PDF file path (String)** - The PDF file path to be created. String variables and Strings are supported.  
  E.g: “D:\Output\Export.pdf”.

## **Properties**

**Input**

* **File Path (String)**- The full path of the PDF file to be created. Only String variables and strings are supported.  
  E.g: “D:\Output\Export.pdf”.

**Misc**

* **Public (Checkbox)**- If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Export to PDF.

**Common**

* **Continue On Error (Boolean)**- This property specifies when the automation keeps going if it has an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
