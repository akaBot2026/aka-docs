---
id: export-document
title: "Export Document"
sidebar_label: "Export Document"
sidebar_position: 3
description: "Export Document activity documentation."
displayed_sidebar: activitiesSidebar
---
# Export Document

RCA.Activities.IDP.ExportDocument

## **Description**

This activity allows you to export digitized and extracted data of a processed document (which has been confirmed or exported on akaBot IDP) into standard formats such as DataTable, JSON, or XML.

![export-document](/static/img/export-document.png)

(\* For Mandatory)

**Container Requirement:** This activity must run inside an [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) container.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  * **True** - Allows the rest of the process to continue the execution even if an error occurs within the activity.  
  * **False (default)** - Blocks the process from continuing the execution.
* **Timeout MS (Int32)** - Specifies the amount of time (in milliseconds) to wait for the activity to retrieve the exported data before throwing an error. The default value is `30000` milliseconds (30 seconds).

**Input**

* **Document Key (String)**\* - The unique Document Key of the processed document you want to export. E.g: `"DOC_2026_06_22_001"`
* **Extract Type (Dropdown List)** - Specifies the format of the output data. Choose from three options:
  * `DataTable` (default)
  * `JsonString`
  * `XMLString`

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[838217454] Export Document`.
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

**Output**

* **Extracted Data (Object)** - An akaBot variable where the exported document data will be saved. The variable type must align with the selected **Extract Type** (e.g., `DataTable` for DataTable, or `String` for JsonString/XMLString).

## **Step-by-Step Usage**

1. **Place inside IDP Scope Container**:
   * Drag and drop an [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) activity into your workflow designer panel. Configure connection details (`Api Key` and `Server Endpoint`).

2. **Add Import Document**:
   * Drag and drop an [Import Document](/docs/activities/idp/latest/activities/import-document.md) activity inside the **IDP Scope** container to upload the file, and assign the output to a String variable named `docKey`.

3. **Add Export Document**:
   * Drag and drop an **Export Document** activity inside the **IDP Scope** container (below the document processing steps).

4. **Configure properties**:
   * **Document Key**: Enter the variable `docKey` in the Input section.
   * **Extract Type**: Choose the desired format from the dropdown list (e.g., `DataTable` to export the extracted fields as a structured table).

5. **Map Output Extracted Data**:
   * In the **Properties** panel under **Output**, click the **Extracted Data** field, press **Ctrl + K**, and create a DataTable variable named `dtExtractedData` to store the extracted data.

6. **Run the workflow**:
   * Execute the process. akaBot will fetch the processed data of the imported document from the akaBot IDP server and save it in the `dtExtractedData` variable.

## **Troubleshooting**

* **Document Still Processing**:
  * If you attempt to export data from a document that has not finished processing on the server, the activity will fail. Use a [Get Document Status](/docs/activities/idp/latest/activities/get-document-status.md) activity inside a loop or insert a delay to ensure the document status is `Confirmed` or `Completed` before exporting.
* **Document Key Invalid or Empty**:
  * Verify that a valid document key variable or string is provided in the **Document Key** property.
* **Invalid Output Variable Type**:
  * Ensure the variable mapped to the **Extracted Data** output property matches the selected **Extract Type**. For example, if **Extract Type** is `DataTable`, the output variable must be of type `DataTable`. If it is `JsonString` or `XMLString`, the output variable must be of type `String`.
* **Connection Timeout / Network Errors**:
  * Check the server connection and ensure the internet is stable. Increase the **Timeout MS** property if the document is very large and taking a long time to download.
* **Invalid API Key or Server Endpoint**:
  * Ensure the parent **IDP Scope** activity is correctly configured and has established a successful connection.
