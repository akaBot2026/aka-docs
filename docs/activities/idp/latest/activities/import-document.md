---
id: import-document
title: "Import Document"
sidebar_label: "Import Document"
sidebar_position: 2
description: "Import Document activity documentation."
displayed_sidebar: activitiesSidebar
---
# Import Document

RCA.Activities.IDP.ImportDocument

## **Description**

This activity allows you to upload and import a document file into a specified processing pipeline on the akaBot Vision platform.

![import-document](/static/img/import-document.png)

(\* For Mandatory)

**Container Requirement:** This activity must run inside an [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) container.

## **In the body of the activity**

* **File path**\* - The absolute or relative path to the document file you want to upload and process. E.g: `"C:\Users\Admin\Documents\Invoice_01.pdf"`

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  * **True** - Allows the rest of the process to continue the execution even if an error occurs within the activity.  
  * **False (default)** - Blocks the process from continuing the execution.
* **Timeout MS (Int32)** - Specifies the amount of time (in milliseconds) to wait for the activity to upload the file before an error is thrown. The default value is `30000` milliseconds (30 seconds).

**Input**

* **File path (String)**\* - The path of the file you want to import. E.g: `"C:\Users\Admin\Documents\Invoice_01.pdf"`
* **Pipeline Key (String)**\* - The unique Pipeline Key of the specific processing pipeline where the file is imported. You can obtain this key from the pipeline settings on akaBot Vision. E.g: `"invoice_pipeline"`

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[400311067] Import Document`.
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

**Output**

* **Document Key (String)** - An akaBot String variable where the unique key of the imported document will be saved for further tracking.

## **Step-by-Step Usage**

1. **Add IDP Scope Container**:
   * Drag and drop an [IDP Scope](/docs/activities/idp/latest/activities/idp-scope.md) activity into your workflow designer panel. Configure connection details (`Api Key` and `Server Endpoint`).

2. **Add Import Document**:
   * Drag and drop an **Import Document** activity inside the **Do** block of the **IDP Scope** container.

3. **Configure properties**:
   * Select the activity, and in the **Properties** panel under **Input**:
     * **File path**: Enter the path of the file you want to digitize in quotation marks (e.g., `"C:\Users\Admin\Documents\Invoice_01.pdf"`).
     * **Pipeline Key**: Enter your target akaBot Vision pipeline key in quotation marks (e.g., `"invoice_pipeline"`).

4. **Map Output Document Key**:
   * In the **Properties** panel under **Output**, click the **Document Key** field, press **Ctrl + K**, and create a String variable named `docKey` to store the unique identifier of the imported document.

5. **Run the workflow**:
   * Execute the process. akaBot will upload the specified file to the akaBot Vision server under the designated pipeline, start the document processing, and return the unique document key to `docKey`.

## **Troubleshooting**

* **FileNotFoundException / Path Invalid**:
  * Verify that the path to the document is correct and accessible from the machine running the robot.
  * If using a relative path, ensure it resolves correctly relative to the project directory.
* **PipelineNotFoundException / Invalid Pipeline Key**:
  * Double-check the **Pipeline Key** value. Ensure it matches exactly with the pipeline key defined in your akaBot Vision platform settings.
* **Connection Timeout / Network Errors**:
  * Since this activity uploads files to the server, ensure that the internet connection is active and stable, and that the file size does not exceed the server's upload limit.
  * Check the **Timeout MS** property. For large documents (e.g., many-page PDFs), you might need to increase the timeout value.
* **Invalid API Key or Server Endpoint**:
  * Ensure that the parent **IDP Scope** activity has valid credentials, as this activity depends on it for server authentication.
