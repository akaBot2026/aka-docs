---
id: navigate-to
title: "Navigate To"
sidebar_label: "Navigate To"
sidebar_position: 14
description: "Navigate To activity documentation."
displayed_sidebar: activitiesSidebar
---
# Navigate To

RCA.Activities.IE.NavigateTo

## **Description**

The Navigate To activity allows you to navigate to another URL on the current browser.

![image-20220506110824-1.png](/img/a8d4dd_image-20220506110824-1.png)

(\* for Mandatory)

## **Properties**

**Common**

* **Continue On Error (Boolean)**- A Boolean variable has two possible values: True or False. True: allows the rest of the process to continue the execution even if an error occurs within the activity. False (default): blocks the process from continuing the execution.

**Input**

* **Url (String)\***- The URL that you want to navigate to in the browser. The URL must be quoted.  
  Ex: https://akabot.com/

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Ex: [294859345] Navigate To.
