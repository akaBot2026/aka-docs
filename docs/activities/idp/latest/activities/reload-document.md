---
id: reload-document
title: "Reload Document"
sidebar_label: "Reload Document"
sidebar_position: 7
description: "Reload Document activity documentation."
displayed_sidebar: activitiesSidebar
---
# Reload Document

RCA.Activities.IDP.ReloadDocument

## **Description**

This activity allows you to reload (retry) processing for an invalid or failed document on the akaBot Vision platform, generating a new document key for the reprocessing run.

![reload-document](/static/img/reload-document.png)

(\* For Mandatory)

**Container Requirement:** This activity must run inside an [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) container.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  * **True** - Allows the rest of the process to continue the execution even if an error occurs within the activity.  
  * **False (default)** - Blocks the process from continuing the execution.
* **Timeout MS (Int32)** - Specifies the amount of time (in milliseconds) to wait for the activity to request the reload before throwing an error. The default value is `30000` milliseconds (30 seconds).

**Input**

* **Document Key (String)**\* - The unique Document Key of the failed or invalid document you want to reload. E.g: `"DOC_2026_06_22_001"`

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[787606491] Reload Document`.
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

**Output**

* **New Document Key (String)** - An akaBot String variable where the new unique key of the reloaded/reprocessed document will be saved.

## **Step-by-Step Usage**

1. **Place inside IDP Scope Container**:
   * Drag and drop an [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) activity into your workflow designer panel. Configure connection details.

2. **Add Reload Document**:
   * Drag and drop a **Reload Document** activity inside the **Do** block of the **IDP Scope** container.

3. **Configure properties**:
   * **Document Key**: Enter the variable `docKey` (representing the failed/invalid document key) or a specific document key in quotation marks (e.g., `"DOC_2026_06_22_001"`).

4. **Map Output Properties**:
   * In the **Properties** panel under **Output**, click the **New Document Key** field, press **Ctrl + K**, and create a String variable named `newDocKey` to store the new unique document key generated for the reprocessed document.

5. **Run the workflow**:
   * Execute the process. akaBot will instruct akaBot Vision to reprocess the document, and return the new document key to `newDocKey`.

## **Troubleshooting**

* **Document Key Not Found**:
  * Verify that the document key provided exists on the akaBot Vision server and belongs to the connected account.
* **Reprocessing Not Allowed (Status Conflict)**:
  * Documents that have already successfully completed (`Completed` or `Exported`) cannot be reloaded. Verify the status of the document using `Get Document Status` before attempting to reload. This activity is typically used only for documents that have failed processing or are marked invalid.
* **Invalid API Key or Server Endpoint**:
  * Ensure the parent **IDP Scope** container is correctly configured with a valid API Key and endpoint.
