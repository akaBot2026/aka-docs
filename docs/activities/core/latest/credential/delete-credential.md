---
id: delete-credential
title: "Delete Credential"
sidebar_label: "Delete Credential"
sidebar_position: 2
description: "Delete Credential activity documentation."
displayed_sidebar: activitiesSidebar
---
# Delete Credential

RCA.Activities.Core.DeleteCredential

## **Description**

The activity allows you to delete the credentials for a specified target from the Windows Credential Manager, and returns a boolean value to let you know if the process was successful or not.

![image-20220505151543-1.png](/img/3994b3_image-20220505151543-1.png)

(\* for Mandatory)

## **Properties**

**Input**

* **Credential Name (String)**\* - Identifies the credential from set of credentials in Windows Credential Manager.

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Delete Credential

**Output**

* **Result (Boolean)** - A boolean variable that indicates whether the credentials of the given target were successfully deleted from the Windows Credential Manager.
