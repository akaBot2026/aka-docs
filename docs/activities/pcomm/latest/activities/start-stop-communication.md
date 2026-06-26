---
id: start-stop-communication
title: "Start/Stop Communication"
sidebar_label: "Start/Stop Communication"
sidebar_position: 12
description: "Start/Stop Communication activity documentation."
displayed_sidebar: activitiesSidebar
---
# Start/Stop Communication

RCA.Activities.PCOMM.StartStopCommunication

## **Description**

Starts or stops communication between the local emulator workstation session and the host server.

![start-communication](/static/img/start-communication.png)

(\* is mandatory)

## **Properties**

**Input**

* **Operation (CommunicateOperation)*** - The communication action to perform. Options include:
  * `Start` - Connects and starts communication between the local session and the host server.
  * `Stop` - Disconnects and stops communication between the local session and the host server.
* **Reset Screen (Boolean)** - If selected, clears or resets the emulator screen before performing the action.

**Misc**

* **Public (Checkbox)** - If selected, logs the execution details and variables of this activity. Consider data security requirements before enabling this option, as sensitive details could be written to the logs.
* **Display Name (String)** - The name displayed for this activity in the designer panel. You can edit this name to organize and structure your workflow better.  
  E.g: [3424325] Start/Stop Communication

