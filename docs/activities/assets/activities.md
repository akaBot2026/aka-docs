---
id: activities
title: Activities
sidebar_label: Activities
sidebar_position: 3
description: Overview of available activities used to build automation workflows in akaBot Studio.
displayed_sidebar: activitiesSidebar
---

# Get Agent Credential
**RCA.Core.Activities.GetAgentCredential**

## Description
This activity allows you to retrieve a specified akaBot Center credential using a provided Asset Name. It returns a username and a secure password.

![Get Agent Credential](/img/image-20220506112654-1.png)

> (* indicates mandatory fields)

---

## Properties

### Common

- **Continue On Error (Boolean)**  
  Specifies whether the automation continues running if an error occurs.  
  - **True**: Continues execution even if an error occurs.  
  - **False (default)**: Stops execution when an error occurs.

- **Timeout MS (Int32)**  
  The maximum time (in milliseconds) to wait for the activity to complete before throwing an error.  
  Default: `30000`  
  _Example: `30000`_

---

### Input

- **Asset Name (String)\***  
  The name of the asset to be retrieved.  
  _Example: `"Test_Integer"`_

---

### Misc

- **Public (Checkbox)**  
  If selected, the activity data will be logged. Consider data security before enabling this option.

- **Display Name (String)**  
  The display name of the activity, used for better organization in workflows.  
  _Example: `Get Agent Credential`_

---

### Output

- **Password (SecureString)**  
  The secure password of the retrieved credential.

- **Username (String)**  
  The username of the retrieved credential.
