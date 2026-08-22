---
id: release-notes
title: "Release Notes"
sidebar_label: "Release Notes"
sidebar_position: 2
description: "Release Notes activity documentation."
displayed_sidebar: activitiesSidebar
---
# Release Notes

## v3.5.0

Build date: Aug 20, 2026

- Added Interruptible While and Interruptible Do While activities, which honour the existing Break and Continue activities as flow-control inside the loop body, with designers matching For Each.
- Added a Return activity that ends the current workflow file while keeping its output arguments available, using the bookmark-based return host.

## v3.4.1

Build date: Aug 05, 2026

- Fixed: preserve `MultipleAssign` operations in compiled library.

## v3.4.0

Build date: July 31, 2026

- Added: **C# expression** support in **Invoke Workflow File** — the activity and its designer now set `CompileExpressions = true` so C# projects can invoke workflows.
- Update: **Get Task** — simplified/hardened `JobSource` parsing.
- Update: PowerShell is now resolved via `Microsoft.PowerShell.4.ReferenceAssemblies` package. Removed the bundled `Libs/System.Management.Automation.dll`.
- Update: Adjustments to `ImageClick`, `RestClient`, `RestResponse`, and the C# code editor dialog.
- Update: `net452` dependency packages (Newtonsoft.Json 10.0.1, RestSharp 106.15.0).
- Update: `net472` dependency packages (Newtonsoft.Json 13.0.3, RestSharp 106.15.0).

---

## v3.3.0

Build date: January 6, 2026

- Added: support both .NET Framework `4.5.2` and `4.7.2`.
- Update: dependency version of Newtonsoft.Json to 13.0.2 for both `net452` and `net472`.
- Removed: unused package references (log4net 2.0.8, Microsoft.Activities.UnitTesting, Microsoft.CodeAnalysis.Analyzers, Obfuscar, System.Collections.Immutable, System.Reflection.Metadata, Microsoft.Activities.Extensions).

---

## v2.3.0

Build date: November 19, 2025

- Added: **Repeat Number Of Times** activity.
- Added: **Start Task**, **Stop Task**, **Get Task** activities (akaBot Center integration).
- Added: **Pick**, **Pick Branch** activities.
- Restored: version of dependency (Newtonsoft.Json 10.0.1, RestSharp 105.0.1, log4net 2.0.8).

---

## v2.2.3.4

Build date: January 24, 2025

- Update: **Get Agent Asset** / **Get Agent Credential** now surface detailed validation errors (`CouldNotFindTheAsset`, `InvalidAssetTypeForNormalAssetsUseActivity`, `DoesNotWorkWithAssetsOfTypeCredential`) via `BaseGetAssetActivity`.
- Update: Added a `System.Web.Extensions` assembly reference.
- Upgrade: version of dependency (Newtonsoft.Json 13.0.3, RestSharp 106.15.0, log4net 2.0.17) to fix vulnerability.

---

## v2.2.3.2

Build date: December 2, 2024

- Added: **Add Data Column** — auto-increment support for int, long, short, uint, ulong, ushort, and decimal.
- Fixed: **Add Data Column** max-length error when not defined, and default-value validation for String with `MaxLength = -1`.

---

## v2.2.3.1

Build date: September 26, 2024

- Fixed: **Invoke C# Code** (`InvokeCSharpCode` + `CompilerRunner`) — output In/Out arguments, array types, and generic types now work correctly.

---

## v2.2.3

Build date: September 4, 2024

- Added: **Start Process** activity.
- Added: **Invoke Process** activity.
- Added: **Multiple Assign** activity.

---

## v2.2.2.1

Build date: August 27, 2024

- Update: `RestClient` — add the MIME type when uploading a file to multipart form-data (HTTP request).

---

## v2.2.1

Build date: April 3, 2024

- Added: **Invoke C# Code** activity (`InvokeCSharpCode`) with a dedicated code editor dialog and C# syntax highlighting; new `ArgumentToTextConverter` and `CompilerRunner` updates.

---

## v2.2.0.1

Build date: July 24, 2023

- Added: **Is User Locked** and **Unlock User** activities (Agent).
- Added: **Get User Credential** activity (akaBot Center).
- Added: the modified date property to the condition filter of **GetFiles**
- Fixed: Show error message when continue on error is true but still showing exception at CopyDirectory activity
- Fixed: [Selectfile] Allow to select file but when selecting it still shows the message error
- Fixed: [ImageClick] Wrong show error message when input [Confident] is a navigate number
- Fixed: [ReadTextFile] Behavior of Encoding is incorrect
- Update: Broad refactors across Core / DataTable / Credentials activities and a localization (resx) reorganization.

---

## v2.2.0

Build date: February 23, 2022

- Added: `Precondition` (Credentials), `SortingOrderConverter`, and `DateHelper`.
- Update: Added Chinese Simplified (zh-Hans) and Korean (ko-KR) localization resources; refreshed Toolbox / Designer icons.
- Fixed: Large batch of Coverity static-analysis defects across many activities (dead code, resource handling).