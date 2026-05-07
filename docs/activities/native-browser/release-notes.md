# [1] Release Notes - akaBot Docs

## **RCA.Activities.NativeBrowser Version 4.1.0.1**

### **Bugs fixed**

* [Fixed] [ExtractStructuredData] Throw BrowserNotSetException without DelayBefore
* [Fixed] [ExtractStructuredData] Haven't checked if the browser is open, the extension is not connected when "Add Column" at Extract Wizard
* [Fixed] (General error of NativeBrowser) DelayAfter wrongly saved in output
* [Fixed] (General error of NativeBrowser) When entering TimeoutMS <= 0, TimeoutMS is not set 30 seconds
* [Fixed] [NavigateTo] Navigate to success when TimeoutMS sets too short
* [Fixed] [AttachBrowser] TimeoutMs not working properly when Selector invalid
* [Fixed] [InjectJS] InjectJS multiple times on 1 browser

Table of Content

* [RCA.Activities.NativeBrowser Version 4.1.0.1](#HRCA.Activities.NativeBrowserVersionA04.1.0.1)
  + [Bugs fixed](#HBugsfixed)