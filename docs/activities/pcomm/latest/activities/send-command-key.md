---
id: send-command-key
title: "Send Command Key"
sidebar_label: "Send Command Key"
sidebar_position: 7
description: "Send Command Key activity documentation."
displayed_sidebar: activitiesSidebar
---
# Send Command Key

RCA.Activities.PCOMM.SendCommandKey

## **Description**

Sends a specific terminal command key (Mnemonic Key) such as Enter, Clear, PF1-PF24, etc., to the PCOMM host.

![send-command-key](/static/img/send-command-key.png)

(\* is mandatory)

## **Properties**

**Input**

* **Command Key (MnemonicKey)*** - The terminal command key to be sent to the host emulator. Select a command from the dropdown menu (e.g., `enter`, `clear`, `tab`, `backspace`, `pf1` -> `pf24`, etc.).
* **Reset Screen (Boolean)** - If selected, clears or resets the emulator screen before sending the command key.

**Misc**

* **Public (Checkbox)** - If selected, logs the execution details and variables of this activity. Consider data security requirements before enabling this option, as sensitive details could be written to the logs.
* **Display Name (String)** - The name displayed for this activity in the designer panel. You can edit this name to organize and structure your workflow better.  
  E.g: [3424325] Send Command Key

