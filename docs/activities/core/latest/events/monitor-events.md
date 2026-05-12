---
id: monitor-events
title: "Monitor Events"
sidebar_label: "Monitor Events"
sidebar_position: 2
description: "Monitor Events activity documentation."
displayed_sidebar: activitiesSidebar
---
# Monitor Events

RCA.Activitites.Core.MonitorEvents

## **Description**

This activity allows you to observe a set of activities (also known as triggers) and when triggered, executes the activities specified in the Event Handler container.

![image-20220506112234-1.png](/img/02df6e_image-20220506112234-1.png)

(\* for Mandatory)

**In the body of activity**

* **Trigger Events**\* - The activity or sequence of activities that you want to observe
* **Event Handlers**\* - The activities that you want to execute when events are triggered.

## **Properties**

* **Continue On Error (Boolean)**- Specifies if the automation should continue even when the activity throws an error. Only have two possible values: True or False. True - allows the rest of the process to continue the execution even if an error occurs within the activity. False (default) - blocks the process from continuing the execution.

**Misc**

* **Public (Checkbox)**- If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Monitor this

**Options**

* **Repeat Forever (Boolean)** – This option allows the True - the block executes every time the trigger is activated; this is the default value. False - the activity executes only one time.
