---
id: receive-file
title: "Receive File"
sidebar_label: "Receive File"
sidebar_position: 11
description: "Receive File activity documentation."
displayed_sidebar: activitiesSidebar
---
# Receive File

RCA.Activities.PCOMM.ReceiveFile

## **Description**

Downloads and transfers a file from the host emulator system to a local directory on your personal computer.

(\* is mandatory)

## **Properties**

**Input**

* **Download Location (String)** - The local directory or file path where the file will be saved.
* **Host (String)** - The path or name of the file residing on the Host system.
* **Options (String)** - Additional parameters or arguments for the file transfer command.
* **Reset Screen (Boolean)** - Option to reset the emulator screen before executing the transfer.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [3424325] Receive File

