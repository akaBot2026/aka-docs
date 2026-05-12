---
id: release-notes
title: "Release Notes"
sidebar_label: "Release Notes"
sidebar_position: 2
description: "Release Notes activity documentation."
displayed_sidebar: activitiesSidebar
---
# Release Notes

## **RCA.Activities.NativeBrowser Version 4.1.0.1**

### **Bugs fixed**

* [Fixed] [ExtractStructuredData] Throw BrowserNotSetException without DelayBefore
* [Fixed] [ExtractStructuredData] Haven't checked if the browser is open, the extension is not connected when "Add Column" at Extract Wizard
* [Fixed] (General error of NativeBrowser) DelayAfter wrongly saved in output
* [Fixed] (General error of NativeBrowser) When entering TimeoutMS &lt;= 0, TimeoutMS is not set 30 seconds
* [Fixed] [NavigateTo] Navigate to success when TimeoutMS sets too short
* [Fixed] [AttachBrowser] TimeoutMs not working properly when Selector invalid
* [Fixed] [InjectJS] InjectJS multiple times on 1 browser