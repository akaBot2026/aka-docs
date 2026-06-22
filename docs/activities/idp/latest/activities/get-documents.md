---
id: get-documents
title: "Get Documents"
sidebar_label: "Get Documents"
sidebar_position: 4
description: "Get Documents activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Documents

RCA.Activities.IDP.GetDocuments

## **Description**

This activity allows you to retrieve a list of documents from a specified pipeline on the akaBot Vision server based on their processing status and sorting criteria.

![get-document](/static/img/get-document.png)

(\* For Mandatory)

**Container Requirement:** This activity must run inside an [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) container.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  * **True** - Allows the rest of the process to continue the execution even if an error occurs within the activity.  
  * **False (default)** - Blocks the process from continuing the execution.
* **Timeout MS (Int32)** - Specifies the amount of time (in milliseconds) to wait for the activity to retrieve documents before throwing an error. The default value is `30000` milliseconds (30 seconds).

**Input**

* **Pipeline Key (String)**\* - The Pipeline key of the specific pipeline from which you want to retrieve documents. You can obtain this key from the pipeline settings on akaBot Vision. E.g: `"invoice_pipeline"`
* **Status (Dropdown)** - Specifies the status of the documents you want to retrieve. By default, `CONFIRMED` is selected. Options include:
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
  E.g: `[127293359] Get Document`.
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

**Option**

* **Order By Date (Dropdown)** - Order retrieved documents by received date. Options include:
  * `NEWEST` (default)
  * `OLDEST`
* **Top (Int32)** - The maximum number of documents to retrieve from the top of the list. If left empty or set to less than `0`, all matching documents will be retrieved. Default is `10`.

**Output**

* **Result (Document[])** - An akaBot variable storing the list of retrieved documents based on the input conditions.

## **Step-by-Step Usage**

1. **Place inside IDP Scope Container**:
   * Drag and drop an [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) activity into your workflow designer panel. Configure connection details (`Api Key` and `Server Endpoint`).

2. **Add Get Documents**:
   * Drag and drop a **Get Documents** activity inside the **Do** block of the **IDP Scope** container.

3. **Configure properties**:
   * **Pipeline Key**: Enter your target pipeline key in quotation marks (e.g., `"invoice_pipeline"`).
   * **Status**: Select the status from the dropdown list (e.g., `CONFIRMED` to retrieve documents that have finished extraction and verification).
   * **Order By Date** (under **Option**): Select `NEWEST` or `OLDEST`.
   * **Top** (under **Option**): Set the number of documents you want to retrieve (e.g., `5` to retrieve the 5 most recent documents).

4. **Map Output Result**:
   * In the **Properties** panel under **Output**, click the **Result** field, press **Ctrl + K**, and create a variable named `docList` to store the list of documents (type `RCA.Activities.IDP.Models.Document[]`).

5. **Run the workflow**:
   * Execute the process. akaBot will retrieve the list of documents matching the specified criteria from the server and store them in the `docList` variable. You can then loop through this list using a **For Each** activity.

## **Troubleshooting**

* **Pipeline Key Invalid or Empty**:
  * Verify that the **Pipeline Key** value is correct and matches the platform settings exactly.
* **No Documents Found**:
  * If the list returned is empty, verify that there are indeed documents matching the selected **Status** in that pipeline on the server.
* **Connection Timeout / Network Errors**:
  * Increase the **Timeout MS** property if the server response is slow or when requesting a large number of documents.
* **Invalid API Key or Server Endpoint**:
  * Ensure the parent **IDP Scope** activity is correctly configured and has established a successful connection.
