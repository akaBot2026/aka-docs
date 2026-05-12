---
id: attach-broswer
title: "Attach Browser"
sidebar_label: "Attach Browser"
sidebar_position: 1
description: "Attach Browser activity documentation."
displayed_sidebar: activitiesSidebar
---
# Attach Browser

RCA.Activities.IE.AttachBrowser

## **Description**

A container that enables you to attach to an already opened internet explorer browser and perform multiple actions within it.

![image-20220506105906-1.png](/img/b3f16b_image-20220506105906-1.png)

(\* for Mandatory)

**In the body of the activity**

* **Do**\* - The activities you want to execute within the browser.

## **Properties**

**Misc**

* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Ex:[145735757] Attach Browser
* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it. This tickbox is unchecked by default

**Options**

* **Maximize (Checkbox)** - Maximizes the size of the browser. This box is checked by default

**Output**

* **IEBrowser (Browser)** - Output of the activity with type = ‘Browser’. Not allow whitespace in the output’s name.
