---
id: release-notes
title: "Release Notes"
sidebar_label: "Release Notes"
sidebar_position: 2
description: "Release Notes activity documentation."
displayed_sidebar: activitiesSidebar
---
# Release Notes

### v3.1.1.2

Release notes:

1. Added Form Builder activities for displaying and manipulating forms.
2. Supported activities: Display Form, Close Form, Reset Form, Get Element Value, Set Element Value, Disable, Enable, and Set Focus.

### v2.3.0

Release notes: 

1. Update: Maximize display pdf form window
2. Fixed: JsonObject input can not load because decode based64
3. Update: User cancel or close window throw exception user skip validation
4. Added: support highlight field if have key "highlightFields"

### v2.2.1

Release notes: 

1. Added: Form Title property for Display PDF Form activity
2. Changed: Engine to display pdf
3. Added: Zoom pdf file "Ctrl + mouse scroll" 

### v2.2.0

Release notes: 

1. Added: Display PDF Activity

## **How to install activity?**

**1. Download package manually**

- Click [here](https://ws3.akabot.com/s/TtAmz5RONy2weqB) to download activity file.

- Put the \*.nupkg file to folder: **C:\ProgramData\akaBot\Packages\\**

- In **Studio > Package Manager**, search and install this activity from the list.

**2. Use Studio Package Manager**

- In **Studio > Package Manager > Settings > User package sources,** add this repository: https://gitlab.com/api/v4/projects/75840319/packages/nuget/index.json

- Search and install this activity from the list.
