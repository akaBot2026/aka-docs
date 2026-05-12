---
id: request-credential
title: "Request Credential"
sidebar_label: "Request Credential"
sidebar_position: 5
description: "Request Credential activity documentation."
displayed_sidebar: activitiesSidebar
---
# Request Credential

RCA.Activities.Core.RequestCredential

## **Description**

The activity allows you to display a dialog box with a custom message and title that prompts a user to add application credentials, and store the username and password that can be later used to log into applications.

![image-20220505152134-1.png](/img/7febcb_image-20220505152134-1.png)

(\* for Mandatory)

## **Properties**

**Input**

* **Message (String)**\* - Message to show on the dialog box.  
  E.g: “Credential for program is needed”
* **Title (String)** - Title of the dialog box.  
  E.g: “Request for credential”

**Misc**

* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Request Credentials

**Output**

* **Password (String)**- The password added by the user, as a string variable.
* **Username (String)** - The username added by the user, as a string variable.
* **Result (Boolean)**- A boolean variable that lets you know if the user clicked OK or Cancel. Clicking OK returns true, while clicking Cancel returns false.
