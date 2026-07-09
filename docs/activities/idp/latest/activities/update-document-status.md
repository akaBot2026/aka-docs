---
id: update-document-status
title: "Update Document Status"
sidebar_label: "Update Document Status"
sidebar_position: 5
description: "Update Document Status activity documentation."
displayed_sidebar: activitiesSidebar
---
# Update Document Status

RCA.Activities.IDP.UpdateDocumentStatus

## **Description**

This activity allows you to update the status of one or more documents on the akaBot IDP platform.

![update-document](/static/img/update-document.png)

(\* For Mandatory)

**Container Requirement:** This activity must run inside an [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) container.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  * **True** - Allows the rest of the process to continue the execution even if an error occurs within the activity.  
  * **False (default)** - Blocks the process from continuing the execution.
* **Timeout MS (Int32)** - Specifies the amount of time (in milliseconds) to wait for the activity to update the status before throwing an error. The default value is `30000` milliseconds (30 seconds).

**Input**

* **Document Keys (String[])**\* - A list/array of document keys you want to update. Because this is an array of strings, the input must follow the array initializer syntax wrapped in curly braces. E.g:
  * Single document: `{"DOC_2026_001"}`
  * Multiple documents: `{"DOC_2026_001", "DOC_2026_002", "DOC_2026_003"}`
* **Update To Status (Dropdown)** - Specifies the target status you want to assign to the documents. By default, `CONFIRMED` is selected. Options include:
  * `TOREVIEW`
  * `IMPORTING`
  * `FAILED_IMPORT`
  * `POSTPONED`
  * `CONFIRMED`
  * `EXPORTED`
  * `REJECTED`
  * `DELETED`
  * `SPLITTED`
  * `INVALID_LICENSE`

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[333519241] Update Document Status`.
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

---

## **Step-by-Step Usage**

1. **Place inside IDP Scope Container**:
   * Drag and drop an [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) activity into your workflow designer panel. Configure connection details.

2. **Add Update Document Status**:
   * Drag and drop an **Update Document Status** activity inside the **Do** block of the **IDP Scope** container.

3. **Configure properties**:
   * **Document Keys**: Enter the array of document keys you wish to update in the format `{"DOC_KEY_1", "DOC_KEY_2"}`. Even if you want to update only a single document, it must be wrapped in curly braces, e.g. `{"DOC_2026_001"}`.
   * **Update To Status**: Select the target status from the dropdown list (e.g. select `CONFIRMED` after successfully processing and entering document data into an ERP system).

4. **Run the workflow**:
   * Execute the process. akaBot will update the specified documents on the akaBot IDP server to the selected status.

## **Troubleshooting**

* **Red Warning Icon / Validation Error on Document Keys**:
  * The **Document Keys** field requires a string array (`String[]`). If you enter a raw string (e.g., `"DOC_001"`), Studio will display a validation error. You must wrap the string(s) in curly braces, e.g., `{"DOC_001"}`.
  * To quickly clear the validation warning during testing, you can input `{"test"}`.
* **Document Key Not Found**:
  * Verify that the document keys provided in the array exist on the akaBot IDP server and belong to the connected pipeline/account.
* **Invalid API Key or Server Endpoint**:
  * Ensure the parent **IDP Scope** activity is correctly configured and has established a successful connection.
