---
id: release-notes
title: "Release Notes"
sidebar_label: "Release Notes"
sidebar_position: 1
description: "Release Notes activity documentation."
displayed_sidebar: activitiesSidebar
---
# [1] Release Notes - akaBot Docs

### **Common v4.4.0.2**

Release notes:

* Added: Activity Table Extraction that can inspect & extract data table from Browser, Window, Java, Internet Explorer (IE) apps.

### **Common v3.3.0.0**

Release notes:

* Added: Kill Process activity
* Update: MSAA element to check overlap when checking visible
* Update: UIA, SAP element find table element by row /colum
* Update: UIA FindAll algorithm
* Fixed: IE element not extracting data properly.
* Fixed: Restoring minimized windows causing target window to be resized.
* Fixed: Show Window not retaining Window Size and position.
* Fixed: Timeout not working for OpenApplication, AttachWindow, CloseWindow.

### **Common v3.2.0.0**

Release notes:

* Added: support create and choose variable in Selection Options dialog
* Fixed: Attach Browser delay in getting Edge Selector

### **Common v3.1.0.1**

Release notes:

* Added: support native Internet Explorer selector and matching engine
* Updated: improve matching element performance for UIAutomation technology.
* Update: attach window inspector to allow select small window on top of larger browser window.
* Update: task async code activity to always set output result
* Update: activity ElementExists to not throw exception if element is not found
* Update: activity WaitElementVanish to return bool result if ContinueOnError was set to true
* Fixed: IsVisible method in case WPF app that a Button can contains a TextBlock inside
* Fixed: IsExistsAsync method still wait until timed out event if the target tab is closed

### **Common v3.0.1.1**

Release notes:

* Fixed: activity WaitElementVanish in case browser tab closed, reloaded, navigated to new url
* Fixed: return from wait element vanish interval when condition matched

### **Common v3.0.1.0**

Release notes:

* Fixed: change RefreshJvms method to synchronously to fix issue cannot validate Java element at first time
* Update: check null or empty exception list before use to prevent unwanted exception
* Added: implement WaitElementVanish activity
* Removed: Xceed.Wpf.Toolkit package from Common project
* Removed: selector window and dependency packages from Common project
* Added: a delay after bring window to foreground for all elements
* Fixed: refresh Java accessible node before getting properties value (In case restored window)
* Update: use new selector builder algorithm for Java apps
* Update: file structure and namespace for Java models, extensions and utils class
* Fixed: java inspector does not highlight element at first time inspect
* Update: do not start browser inspector when changed UI framework. Just start/stop it when mouse enter, leave browser area.
* Fixed: make sure window Width, Height is always >= 0
* Added: allow to inspect java app that has process name different than java.exe
* Update: logic to find target browser and then NativeHost process to throw the meaningful error message
* Fixed: cannot get Chrome, Edge window state. Because it has Pane only
* Update: return null and write a warning log when parent selector is null
* Removed: code logic V1 of selector generator and search engine for MSAA, UIA
* Added: comment to constructor methods
* Added: MSAA role enumeration and related utilities
* Update: use index to handle accessibility role (to not depdends on OS language culture)
* Fixed: do not set focus element when bring to foreground to prevent some app UI changes unexpectedly
* Fixed: check item exists before get element by key
* Update: rename methods and variables
* Fixed: sonar code smell suggestions
* Fixed: MSAA not Finding Element from Selector.
* Fixed: WinElement not finding Context menus.
* Fixed: Validating Strict Selector using MSAA instead of UIA.
* Fixed: Attach Window not working with Pane control type.
* Fixed: Msaa Finding extra windows.
* Update: GetAttributeValue method to priority to get element attribute name. If not exists, get document attribute name
* Update: Get Text activity to handle case get text content from many input types, table, select one, select multiple
* Fixed: null result when get native web element attribute
* Fixed: method SafeGetAttribute to not throw exception if attribute name is not found
* Added: trace log when exception
* Update: GetText method to get text value from some kind of UIA controls.
* Update: GetRoleText and GetStateText win32 apis to support unicode (Japanese)
* Fixed: Can't generate selector for popup/menu because it be vanished after inspect
* Fixed: UIA found multi elements by strict selector
* Fixed: could not attach to process (explorer) in case there is already exists a running instance of the application.
* Added: workaround to find target element that was overlayed by a container element when inspecting using UIA.
* Removed: unused dependency packages (RestSharp, log4net)
* Fixed: typo '20203' in nuspec file
* Fixed: do not check file exists before start process. Let Windows find it in %PATH% and working directory.
* Update: FindAllImplV2 and [Add] FindElementByIdx apply for MSAA when find element from selector
* Fixed: wrong browser name when indicate/validate google page in Edge browser
* Update: Change algorithm find element with idx selector from DFS to BFS for matching with algorithm generate selector
* Fixed: Not found Dialog of IE mode because root node is Panel (not window)
* Added: Implement new algorithm to generate selector for UIA, MSAA, Java
* Fixed: not show web inspector with element index >999999999.
* Encode and decode js scripts content when passing via named pipe

### **Common v2.0.0.7**

Release notes:

* Added Arguments support for InjectJsScript Activity.
* Various Bug fixings and Improvements for interaction with Browser.

### **Common v1.0.0.0**

Release notes:

Added new activities.

* Attach Browser
* Close Browser
* Close Tab
* Extract Structured Data
* Go Back
* Go Forward
* Inject Javascript
* Navigate To
* Open Browser
* Refresh
* Set Web Attribute
* Wait Page Load Complete
* Wait Page Url
* Wait Web Attribute
* Wait Web Title

### **How to install activity?**

1. Download package manually

- Click [here](https://ws3.akabot.com/s/GDKJf2eUpNfGjHe) to download activity file.

- Put the \*.nupkg file to folder: *C:\ProgramData\akaBot\Packages\*

- In *Studio > Package Manager*, search and install this activity from the list.

2. Use Studio Package Manager

- In *Studio > Package Manager > Settings > User package sources,*add this repository: <https://gitlab.com/api/v4/projects/75840319/packages/nuget/index.json>

- Search and install this activity from the list.

Table of Content

* + [Common v4.4.0.2](#HCommonv4.4.0.2)
  + [Common v3.3.0.0](#HCommonv3.3.0.0)
  + [Common v3.2.0.0](#HCommonv3.2.0.0)
  + [Common v3.1.0.1](#HCommonv3.1.0.1)
  + [Common v3.0.1.1](#HCommonv3.0.1.1)
  + [Common v3.0.1.0](#HCommonv3.0.1.0)
  + [Common v2.0.0.7](#HCommonv2.0.0.7)
  + [Common v1.0.0.0](#HCommonv1.0.0.0)
  + [How to install activity?](#HHowtoinstallactivity3F)