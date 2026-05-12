---
id: release-notes
title: "Release Notes"
sidebar_label: "Release Notes"
sidebar_position: 2
description: "Release Notes activity documentation."
displayed_sidebar: activitiesSidebar
---
# Release Notes

## **RCA.Activities.Excel Version 2.1.1.0**

### **Bugs fixed**

* [ExcelApplicationScope]Edit message when excel file is set password protected sheet.
* [ExportChart]Export chart missing when name file excel has chart name same.
* [ExcelApplicationScope] At Textbox[Designer], change length when input more than 200 characters.
* [ExcelApplicationScope] A loop opens Excel file in the background. Even though the workflow has been stopped.
* [ExcelApplicationScope] Don't show message when WorkBook Path does exist, Wrong Format.
* [ExcelApplicationScope] Don't show a message when entering incorrect data of Edit Password.
* [ExcelCopyPasteRange] Modify message when user does not select value in [Copy Items].
* [ExcelCopySheet] Screen hangs when typing Destination File Path does not have permission to access.
* [ExcelSetBorder] Wrong behavior when set property Range = nothing.
* [ExcelReadCell] Data is not kept when [Preserve Format] is checked and [Cell] is a fixed address.
