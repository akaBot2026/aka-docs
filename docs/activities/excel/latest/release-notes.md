---
id: release-notes
title: "Release Notes"
sidebar_label: "Release Notes"
sidebar_position: 2
description: "Release Notes activity documentation."
displayed_sidebar: activitiesSidebar
---

# Release Notes

## v3.4.0.2

Build date: Oct 15, 2026

- Fixed `Excel Read Range` returning a default `Column1` and treating the value as a data row when a single-cell range was read with `Add Headers` enabled.

## v3.4.0.1

Build date: Oct 15, 2026

- Fixed an `OutOfMemoryException` when `Excel Read Range` processed worksheets whose used range extended to the maximum row because of formatting in otherwise empty cells.
- Reduced memory usage when removing trailing empty rows from a read result.
- Improved asynchronous Excel activity completion and error propagation so the original exception is reported instead of an `AggregateException`.

## v3.4.0

Build date: Oct 15, 2026

**New features**

- [Modern Excel activities](./modern/about-modern-excel.md) — the **Use Excel File** scope with sheet, range and table references, and 17 new Modern activities.

**Details**

- Added the Modern Excel experience with the `Use Excel File` scope and interactive workbook, sheet, and range references.
- Added Modern activities for reading, writing, appending, clearing, filling, copying, filtering, finding, replacing, and removing duplicate data.
- Added Modern activities for renaming, protecting, and unprotecting sheets; running macros; and saving workbooks.
- Added localized activity names, dedicated designers, toolbox icons, and an interactive Excel range selector.
- Fixed `For Each Excel Row` when its input contains a single cell.

## v3.3.0

Build date: Aug 20, 2026

- Added a `For Each Excel Row` activity that iterates through the rows of a range inside an `Excel Application Scope`.
- Added dedicated `Excel Break` and `Excel Continue` activities for controlling Excel row loops.
- Updated the `Excel Application Scope` `Workbook` tooltip to document the keep-open behavior.
- Improved compatibility with .NET Framework 4.7.2, including image insertion, and refreshed package dependencies.

## v2.1.1.2

Build date: Apr 4, 2025

- Fixed `Excel Lookup Range` returning an incorrect cell address when the matching value is in merged cells.
- Improved handling of a single starting cell that expands to the worksheet's used range.
- Added clearer `Excel Write Range` errors when data is too large or contains formulas that Excel cannot write.

## v2.1.1

Build date: Feb 13, 2023

- Added activities for reading rows and columns, looking up ranges, removing duplicates, deleting rows, inserting or deleting rows and columns, and setting range formats.
- Added `Preserve Format` support to row and column reading activities and exposed VBA activities in the toolbox.
- Improved Excel activity designers, icons, localization, validation messages, and protected-sheet handling.
- Fixed issues affecting range lookup, row and column reads, workbook opening, chart export, copy and paste, sheet selection, borders, and formatted cell values.

## v2.1.0.4

Build date: Dec 2, 2021

- Improved `Insert VBA` and `Remove VBA` validation, replacement behavior, error messages, and Auto Save support.
- Added Simplified Chinese localization and refreshed Excel activity resources.
- Improved package dependencies and build configuration.

## **How to install activity?**

**1. Download package manually**

- Click [here](https://ws3.akabot.com/s/GwTK9bPoChHuv8A) to download the activity file.
- Put the `*.nupkg` file in `C:\ProgramData\akaBot\Packages\`.
- In **Studio > Package Manager**, search for and install the activity from the list.

**2. Use Studio Package Manager**

- In **Studio > Package Manager > Settings > User package sources**, add this repository: https://gitlab.com/api/v4/projects/75840319/packages/nuget/index.json
- Search for and install the activity from the list.
