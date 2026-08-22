---
id: release-notes
title: "Release Notes"
sidebar_label: "Release Notes"
sidebar_position: 2
description: "Release Notes activity documentation."
displayed_sidebar: activitiesSidebar
---
# Release Notes

## v3.3.0

Build: Aug 20, 2026

- Added a `For Each Excel Row` activity that iterates the rows of a range inside an `Excel Application Scope`.
- Added dedicated `Excel Break` and `Excel Continue` activities that work inside any Excel loop scope.
- Update the Excel Application Scope `Workbook` tooltip to document the keep-open behavior.

## v2.1.1.3

Build: May 14, 2026

- Fixed: ReadRange (ClosedXML) causing exception reading Pivotable with no name.

## v2.1.1.0

**Bugs fixed**

* [ExcelApplicationScope] Edit message when excel file is set password protected sheet.
* [ExportChart]Export chart missing when name file excel has chart name same.
* [ExcelApplicationScope] At Textbox[Designer], change length when input more than 200 characters.
* [ExcelApplicationScope] A loop opens Excel file in the background. Even though the workflow has been stopped.
* [ExcelApplicationScope] Don't show message when WorkBook Path does exist, Wrong Format.
* [ExcelApplicationScope] Don't show a message when entering incorrect data of Edit Password.
* [ExcelCopyPasteRange] Modify message when user does not select value in [Copy Items].
* [ExcelCopySheet] Screen hangs when typing Destination File Path does not have permission to access.
* [ExcelSetBorder] Wrong behavior when set property Range = nothing.
* [ExcelReadCell] Data is not kept when [Preserve Format] is checked and [Cell] is a fixed address.

## **How to install activity?**

**1. Download package manually**
- Click [here](https://ws3.akabot.com/s/GwTK9bPoChHuv8A) to download activity file.
- Put the \*.nupkg file to folder: **C:\ProgramData\akaBot\Packages\\**
- In **Studio > Package Manager**, search and install this activity from the list.

**2. Use Studio Package Manager**
- In **Studio > Package Manager > Settings > User package sources,** add this repository: https://gitlab.com/api/v4/projects/75840319/packages/nuget/index.json
- Search and install this activity from the list.
