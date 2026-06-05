---
id: release-notes
title: "Release Notes"
sidebar_label: "Release Notes"
sidebar_position: 2
description: "Release Notes activity documentation."
displayed_sidebar: activitiesSidebar
---
# Release Notes

### v2.3.0.5

Release notes:

1. Added: Input method for Click activity.  
2. Added: Support wildcard to Select Item activity (By Text and By Value). Note: just asterisk (\*) is supported.  
3. Added: Enable Selenium driver logging by insert "enableDriverLog" to Open Brower > Arguments property.

### v2.3.0.4

Release notes:

1. Added: Input method for Type Into activity.

### v2.3.0.2

Release notes:  
1. Update: set default value of property WaitVisible to true  
2. Added: Wait Clickable property for Click activity

### v2.3.0.1

Release notes:  
1. Upgrade Selenium WebDriver, IEDriverServer  
- From version 4.2.0 to 4.5.0

2. Open Browser:  
- Added: retry until reached timeout  
- Added: allow user to input arguments to configure WebDriver at initialize stage (IE mode only)  
   PageLoadStrategy = Normal // Values: Default, Normal, Eager, None  
   EnableNativeEvents = true // Values: true, false  
   RequireWindowFocus = false // Values: true, false

3. Element exists:   
- Update: Do not throw exception during operation  
- Return boolean value when timed out

4. Wait Activities  
- Apply for: Wait Element Exists, Vanish, Title, Page Load  
- Update: Only throw exception if condition not matched at timed out

5. Switch To  
- Update: retry the operation until timed out

6. Type Into, Click, Send Hotkey  
- Added: auto fallback mechanism from Default > Simulate > Hardware (IE mode only)

### v2.2.0.0

Release notes

- Fixed an issue in Type Into activity which Designer does not show red icon in case the "Text" field has no data.  
- Fixed an issue in Type Into activity which is unable to enter data into a textbox not visible when WaitVisible is unchecked  
- Fixed an issue in Send Hot Key activity which selects multiple key combinations not working.  
- Fixed an issue in Send Hot Key activity which windows special key doesn't work.  
- Fixed an issue in Inject JS activity which display incorrect message when Script File contains only space  
- Fixed an issue in Quit Browser activity which activity cannot make IE browser quit  
- Fixed an issue in Extract Data, Extract Structure Data activity which displays Exception Error when Continue on Error = True

### **How to install activity?**

1. Download package manually

- Click [here](https://ws3.akabot.com/s/dYtYRXcrKoCbB5u)to download activity file.

- Put the \*.nupkg file to folder: *C:\ProgramData\akaBot\Packages\* 

- In Studio > Package Manager, search and install this activity from the list.

2. Use Studio Package Manager

- In Studio > Package Manager > Settings > User package sources,add this repository: https://gitlab.com/api/v4/projects/75840319/packages/nuget/index.json

- Search and install this activity from the list.
