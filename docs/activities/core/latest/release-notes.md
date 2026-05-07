# [1] Release Notes - akaBot Docs

## **RCA.Activities.Core v2.2.0.1**

### **Bugs Fixed**

* [Fixed] Show error message when continue on error is true but still showing exception at CopyDirectory activity
* [Fixed] [Selectfile] Allow to select file but when selecting it still shows the message error
* [Fixed] [ImageClick] Wrong show error message when input [Confident] is a navigate number
* [Fixed] [ReadTextFile] Behavior of Encoding is incorrect

* Fixed an issue in **File Change Trigger** activity which display incorrect property name in Error notification
* Fixed an issue in **File Change Trigger** activity which Allowed to place inside EventHandler sequence of MonitorEvents.
* Fixed an issue in **Invoke Workflow File** activity which show both error message and message box when input Timeout filed exceed maxlength.

### **Features added**

* [Added] Added the modified date property to the condition filter of RCA.Activities.Core.GetFiles
