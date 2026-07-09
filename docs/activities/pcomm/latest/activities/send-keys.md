---
id: send-keys
title: "Send Keys"
sidebar_label: "Send Keys"
sidebar_position: 6
description: "Send Keys activity documentation."
displayed_sidebar: activitiesSidebar
---
# Send Keys

RCA.Activities.PCOMM.SendKeys

## **Description**

Simulates typing a text string and optionally appends a mnemonic command key to the terminal at the current cursor position or specific coordinates.

![send-keys](/static/img/send-keys.png)

(\* is mandatory)

## **Properties**

**Input**

* **Text (String)\*** - The text string to be typed into the terminal.
* **Reset Screen (Boolean)** - If selected, clears or resets the emulator screen before typing the text.

**Options**

* **Row (Int32)** - The row coordinate on the emulator screen where the typing should begin. If left blank, typing starts at the current cursor position.
* **Column (Int32)** - The column coordinate on the emulator screen where the typing should begin. If left blank, typing starts at the current cursor position.
* **Command Key (MnemonicKey)** - An optional terminal control key (e.g., `enter`, `clear`, `tab`, etc.) to execute automatically after typing the text. Default is `nullchar` (no key sent).

**Misc**

* **Public (Checkbox)** - If selected, logs the execution details and variables of this activity. Consider data security requirements before enabling this option, as sensitive details could be written to the logs.
* **Display Name (String)** - The name displayed for this activity in the designer panel. You can edit this name to organize and structure your workflow better.  
  E.g: [3424325] Send Keys
