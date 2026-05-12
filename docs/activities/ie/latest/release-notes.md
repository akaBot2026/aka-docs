---
id: release-notes
title: "Release Notes"
sidebar_label: "Release Notes"
sidebar_position: 2
description: "Release Notes activity documentation."
displayed_sidebar: activitiesSidebar
---
# Release Notes

## **RCA.Activities.IE Version 2.1.2.3**

### **Bugs Fixed**

* In the Microsoft Edge environment with IE 5 compatibility, when using the "get text" activity, it used to retrieve an empty string. Currently, it correctly retrieves the text content of various components (e.g., text boxes, buttons, labels, etc.).
* In the Microsoft Edge environment with IE 5 compatibility, when indicating an element on a website structured with multiple framesets at different levels, the "Highlight" feature in the inspector interface  used to display the highlighted position inaccurately compared to the actual position of the component. Additionally, when running "Click" or "Type Into" activities, they did not function accurately, as they pointed to a position offset from the actual component position. This issue has been fixed to ensure accurate targeting of the component's position.
