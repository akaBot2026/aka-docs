---
id: release-notes
title: Release Notes
sidebar_label: Release Notes
sidebar_position: 2
description: What's new, improved, and fixed in each version of Akabot Studio.
displayed_sidebar: studioSidebar
---

# Akabot Studio — Release Notes

## v3.0.0.0 - Jan 06, 2026

### Changes
* Upgrade platform to .NET Framework 4.7.2
* Update: changed installer from msi to exe file format
* Changed: platform dependency to Newtonsoft.Json 13.0.2
* Changed: algorithm to encrypt sensitive information in settings.json file to AES-256
* Changed: when create new workflow project in Studio, the default version of packages will be Core 3.3.0, Excel 3.1.1.2, Common 4.2.0
* Added: option to remove unused screenshot images and log files before publish package to Center
* Changed: Windows SDK version to 10.0.19041.0
* Added: show user confirmation dialog before install browser extension

### Backward compatible activity

**These packages will compatible and can be run with older platform version.**

* AIServices 3.1.0.0
* Box 3.0.0.0
* CVLocalServer 3.1.1.8
* Common 4.2.0.0
* IDP 3.0.0.0
* IE 3.1.2.4
* AppConnect.Salesforce 3.0.0.0
* Java 3.3.0.3
* NativeBrowser 6.0.0.4
* OCRLocalServer 3.1.1.7
* OCR 3.1.0.1
* PDF 3.1.2.0
* Salesforce 3.0.0.0
* Browser 3.2.0.5
* Windows 3.1.2.1

**These packages will not depends on platform from this version.**
* ActiveDirectory 3.1.0.0
* Catia 3.1.0.0
* Excel 3.1.1.2
* FTP 3.1.0.3
* FormBuilder 3.1.1.2
* GSuite 3.2.1.0
* GoogleCloud 3.0.0.1
* Mail 3.1.2.0
* Office365 3.0.1.0
* PCOMM 3.1.0.0
* Python 3.1.0.5
* Word 3.2.1.0

NOTE: THIS IS BETA VERSION. PLEASE USE AT YOUR OWN RISK!

Click [here](https://ws3.akabot.com/s/syU2TSmP3oNcOhD) to download.

## v2.2.0.11 - Apr 29, 2026

### New features

* Common v4.4.0 package included in the installer.
* log4net as the logging engine with 7-day backup.

### Bug fixes

* Race condition causing multiple script loads in Browser Extension v3.0.5.
* Race condition when sending and receiving messages in Native Host.

Click [here](https://ws3.akabot.com/s/8z0ZSMFVjhzfrNw) to download.

SHA1: 5b034a8d6ae8f59ef5c45299b4a87421b2c53922

## v2.2.0.10 - Apr 21, 2026

* [Updated] Windows SDK upgraded to version 10.0.19041.0.
* [Updated] C++ platform toolset upgraded to v142.
* [Updated] Event Trigger disabled by default.

To enable Event Trigger, set AutoStartEventTrigger=True in the file: C:\\Program Files\\FPT Software\\akaBot Platform\\BotService.exe.config

Click [here](https://ws3.akabot.com/s/btdj2o558GaCHYn) to download.

## v2.2.0.9 - Dec 24, 2025

* Added: install Firefox extension from Studio Options screen
* Added: Firefox xpi files to installation folder

Click [here](https://ws3.akabot.com/s/2K9pSUmWtOL5KTF) to download.

## v2.2.0.8b - Dec 05, 2025.

* Fixed: wrong Microsoft Edge extension id and registry value

Click [here](https://ws3.akabot.com/s/LFHMJd6PSucZrXg) to download.

## v2.2.0.8a - Nov 28, 2025.

* Fixed: deserialize JSON string value before encode to make it compatible with platform version &lt;= 2.2.0.7

## v2.2.0.8 - Nov 20, 2025

* Added: gitlab nuget repository server to Studio configuration
* Added: build CSharp code files to dll and load into Studio/Executor
* Fixed: issues when build project to shared library
* Update: encode input arguments to base64 format before pass to bot executor to prevent parse JSON error
* Fixed: do not pause BotExecutor process if graceful exited (to prevent bot hang forever)
* Added: activity package to integrate with OpenAI, Gemini, Anthropic service providers
* Added: Start/Stop/Get Task, Repeat number of time, Pick, Pick Branch activities to Core v2.3.0 package
* Added: Studio management page that allows users to install, uninstall Chrome & Edge extensions
* Fixed: browser auto-detect not works correctly when settings changed in Agent UI

## v2.2.0.7c - Sep 23, 2025

### Studio & Agent

* [Added] Ability to automatically create a new RDP connection when running tasks.
* [Updated] Session elevation handling and privilege inheritance.
* [Updated] Improved unlock/session handling for Console vs RDP modes.
* [Fixed] RDP session switching, AutoLogon edge cases, and Windows 10/11 connection issues.

### Browser Extension MV3

* [Updated] Version upgrade → 3.0.3.
* [Improved] Better highlight visibility by increasing z-index.
* [Updated] Console log control for performance improvement.
* [Removed] Unused permissions/methods and removed tab auto-reload.

### Common (v2.1.0.0 → v2.1.0.1)

* [Added] New Common activity package.
* [Added] Improved selector generation and inspection logic across UIA, MSAA, Browser, and Java.
* [Added] Meaningful error handling, validation improvements & partial selector support.
* [Added] Extended multi-framework selector support including idx matching logic.
* [Added] UI/UX improvements to activity toolbox ordering.
* [Updated] Attach Browser/Window logic, default framework selection, and activity classification.
* [Updated] Cancel token support for multiple element interaction operations.
* [Fixed] Window/Browser focus, Close Window logic, tab detection, screenshot behavior, inspector highlight issues, and multiple selector edge cases.
* [Fixed] Process attach issues; Remove unused dependencies.

### Browser (v2.2.0.4 → v2.2.0.5)

* [Added] ScrollElementToView support (vertical + horizontal).
* [Added] WaitPageLoadInteractive activity.
* [Fixed] WaitPageLoadComplete hanging issue.
* [Updated] Page readiness logic (interactive/completed states).

### Excel (v2.1.1.2)

* [Added] LookupRange activity.
* [Fixed] Lookup behavior on merged cell scenarios.

Click [here](https://ws3.fpt-software.vn/s/xXJDQEPDOkW6z7b) to download. Password: ![1775104382111-889.png](/static/img/795d5f_1775104382111-889.png)

## v2.2.0.5 - Mar 04, 2025

### akaBot Studio

* [Added] Workflow-to-DLL conversion support.
* [Updated] New project template structure: removed Windows & NativeBrowser dependencies, added Common dependencies.
* [Updated] Licensing and EventTrigger library upgrade (BouncyCastle 1.8.1 → 1.8.9).
* [Updated] Runtime configuration updated for BouncyCastle compatibility.
* [Fixed] Package resolution issues.
* [Fixed] PATH environment variable not updated when resolving packages.
* [Fixed] Crash on publishing projects without description.

### Common Activity

* [Added] Argument support for InjectJsScript activity.
* [Fixed] Browser interaction issues.
* [Updated] Script content encoding/decoding when exchanging via named pipes.

### Computer Vision Activity

* [Fixed] Anchor/target detection issues.
* [Fixed] Various minor stability bugs.
* [Updated] Script content encoding/decoding via named pipes.

### Core Activity

* [Added] New activities: MultipleAssign, StartProcess, InvokeProcess.
* [Added] BusinessRuleException support.
* [Added] Auto-increment support for numeric data types.
* [Fixed] MIME type handling for file upload (form-data).
* [Fixed] KeyModifiers compatibility in Workflow-to-DLL.
* [Fixed] In/Out variable handling for InvokeCode (C#).
* [Fixed] MaxLength validation logic.
* [Fixed] Default value validation for strings with MaxLength = -1.
* [Fixed] Asset assignment issues for OBJECT type.

### IE Activity

* [Fixed] KeyModifiers compatibility for Workflow-to-DLL.

### Native Browser Activity

* [Added] CursorPosition support (Hover, Click).
* [Added] Additional trace logs for diagnostics.
* [Updated] Native Host & Inspect library compatibility with NM 4.x.
* [Fixed] Firefox execution issue.
* [Fixed] Chrome duplicate native host process issue.
* [Fixed] Named pipe communication reliability and resource disposal.
* [Fixed] KeyModifiers compatibility in Workflow-to-DLL.

### Web (Browser) Activity

* [Added] Argument property support for InjectJs.
* [Fixed] KeyModifiers compatibility for Workflow-to-DLL.

### **New Packages Added**

* Box
* GC

### Browser Automation & Runtime Stability

* [Updated] Auto-reconnect during user login while bot is running.
* [Fixed] Null reference issue when attaching browser.
* [Fixed] readyState exception in browser handling.
* [Fixed] Attach Browser performance slowdown.

### Java Automation

* [Added] Fix for IndexInParent selector in element detection (Java automation).

### Licensing & Performance

* [Improved] Faster license validation, eliminating long delay in specific environments.

### General Improvements

* Workflow-to-DLL stability improvements
* Better cross-browser compatibility
* Enhanced Upload and HTTP processing
* More resilient named pipe communication
* Stronger logging and diagnostics

Click [here](https://ws3.fpt-software.vn/s/uL0TxWeaENDwvLY) to download. Password: ![1775104382111-889.png](/static/img/795d5f_1775104382111-889.png)

## v2.2.0.3 - Jun 14, 2024

### New features

* Support run Pip mode.
* Added activity package RCA.Activities.DataService.1.0.1.nupkg
* Added activity package RCA.Activities.GSuite.2.2.1.nupkg
* Added activity package RCA.Activities.Common.2.0.0.4.nupkg
* Added activity package RCA.Activities.SAP.2.1.0.1.nupkg
* Added activity package RCA.Activities.NativeBrowser.5.0.0.2.nupkg

### Bug fixes

* Fix minor bugs RCA.Activities.Common.1.0.0.1.nupkg, RCA.Activities.Java.2.3.0.1.nupkg (Java x86 & SAP).
* Fix minor bugs on Load script for Native Browser package

Click [here](https://ws3.fpt-software.vn/s/Hh2iaUsEvG13wMZ) to download. Password: ![1775104382111-889.png](/static/img/795d5f_1775104382111-889.png)

## v2.2.0.2 - Jul 24, 2023

### New features

* Added Excel Set Range Format activity: This activity allows user to  format cells and ranges according to a specific format.
* Screen Status Check Activity: This activity helps you check the status of the device's screen while the agent is running. It allows you to determine if the screen is locked or not on that particular device.
* Automatic Screen Unlock Activity: This activity helps the user automatically unlock the screen if it is locked, preventing any disruptions to the agent's functionality.
* Some new VBA-related activities: These activities provide additional capabilities for working with VBA code within your automation workflows, empowering you to customize and automate Excel tasks using Visual Basic for Applications.
  * Insert VBA Activity: This activity allows you to insert new VBA code into a workbook or a specific module. It helps you extend the functionality of your Excel macros by adding custom VBA code.
  * Invoke VBA Activity: The Invoke VBA activity enables you to execute a specific VBA macro or function within your Excel workbook. It provides a way to call and run VBA code programmatically from your automation workflow.
  * Delete VBA Activity: This activity allows you to remove or delete VBA code from a workbook or a specific module. It helps you clean up unnecessary or outdated VBA code and streamline your Excel automation projects.
* Community license model: The Studio now has a community license model available. This is a free version of akaBot Studio available for individual users, small businesses, and learning purposes. It provides access to most of the features and capabilities of akaBot Studio.
* Add form builder activities.
* Add Event trigger activities.
* Support manifest v3 (NativeBrowser.5.0.0.nupkg).
* Splash screen for Studio
* MSAA option for Common package activities.
* Added Arguments, EdgeIEMode, EdgeExecutablePath properties in OpenBrowser(B) activity.
* Support automation app java 32 bit on akaBot Platform x64 (java32).

### Bug fixes

* Activity Get File now has default values filled in for the "date from" and "date to" fields, preventing them from being empty.
* OCR - The issue with the "Activity Microsoft Azure OCR" has been resolved, and it can now be used without any errors.
* When using the "Terminate Process" activity on User A, it was also terminating the process on User B. The root cause was that the termination process was not checking the session ID of the current user, resulting in terminating all processes, including those of other users. To resolve this issue, we have fixed the code to differentiate the session ID. Now, when a user terminates a process, it will only terminate the processes belonging to that specific user
* The "Activity Export PDF Page as Image" is only functioning correctly for the first execution and throws an error on subsequent attempts - This error is no longer present.
* "Export PDF Page As Image" activity no longer opens the PDF file in the background after execution.
* Common activity: Can handle the action after Ctrl Z, the activity can reload the old image before such as (Activities): Click, AttachBrowser,...
* Unable to send SMTP email using the "Send SMTP Mail Message" activity -&gt; now able to successfully send.

### Updated

* Optimize dependency load to increase the bot's startup speed.
* Specific error messages indicating the exact causes have been added when publishing the project.
* Activity take screenshot: default captures a full-screen image (if no selector is chosen).

Click [here](https://ws3.fpt-software.vn/s/S9S2v60JjahYvVr) to download. Password: ![1775104382111-889.png](/static/img/795d5f_1775104382111-889.png)

## v2.2.0.1

### Bug fixes

* Create Folder/Rename/New/NewFromTemplate file/folder name containing voiced characters.
* Expression Editor does not support clicking items from the suggestion list.
* The studio does not close the suggestion window when losing focus.
* Project explorer shows the wrong icon for the folder whose name has .xml, .txt, …
* Show error when project explorer creates or renames with a too-long full path.
* Variable/Argument in Selector property is not changed when Variable/Argument name is changed.
* Disable the Debug button while Studio is running.
* Button Start and Stop do not auto change status when ending workflow.
* Add a limit for Exception Details on [Runtime Execution Error] Dialog (10000 chars).

### Updated

* Update Expression Editor to hide suggestion window and Tooltip when there is no result.
* Allow to create new Variable/Argument with Unicode characters and not allow Variable/Argument name to be the same as VB type when Ctrl+K, Ctrl+M, SelectorEditor.
* Import namespace/assembly RCA.Activities.Core into the default template.

## v2.0.5.5

### Bug fixes

* Fatal is output even if Logging Level of Agent is OFF.

### Updated

* License activation is possible before StartDate.

## v2.0.5.4

### New features

* Added the modified date property to the condition filter of RCA.Activities.Core.GetFiles.

### Bug fixes

* Fix the error message when the Agent does not start immediately after starting the PC.
* Change the Word application scope so that it does not close word files that are not specified as targets.
* You can change the type of type Activity by its properties.
* Save As ... doesn't work.
* Studio crashes when using Clipboard.
* Starting screen Recent does not switch correctly.
* The usage of GenerateDataTable Wizards in the Core category.

### Updated

* Updated specification for Timeout MS property of Execute Query, Execute Non Query activity.
