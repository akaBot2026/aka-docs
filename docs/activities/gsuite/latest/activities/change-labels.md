---
id: change-labels
title: "Change Labels"
sidebar_label: "Change Labels"
sidebar_position: 1
description: "Change Labels activity documentation."
displayed_sidebar: activitiesSidebar
---
# Change Labels

RCA.Activities.GSuite.ChangeLabels

## **Description**

This activity allows you to update labels for specified email or overwrite existing labels.

![image-20220505154935-1.png](/img/30bfc5_image-20220505154935-1.png)

(\*For mandatory)

## **Properties**

**Input**

* **Email (GmailMessage)**\* - Email includes the labels are aimed to change.
* **New Labels (String)**\* - The new labels for the email. This property supports a Collection of labels.
* **New Labels List (String)**\* - The new labels list for the email

**Misc**

* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **E.g**: [91353453] Change Labels
