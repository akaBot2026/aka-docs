---
id: idp-scope
title: "IDP Scope"
sidebar_label: "IDP Scope"
sidebar_position: 1
description: "IDP Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# IDP Scope

RCA.Activities.IDP.IDPScope

## **Description**

IDP Scope activity provides a space for all other IDP activities to interact with a specific akaBot IDP account that is indicated in the Input of this activity. No IDP Activities works outside of IDP Scope.

![idp-scope](/static/img/idp-scope.png)

(\* For Mandatory)

## **In the body of the activity**

* **Do** - The activities you want to execute within the IDP Scope.

## **Properties**

**Input**

* **Api Key (String)**\* - API Key of specific akaBot IDP account.
* **Server Endpoint (String)**\* - URL of the akaBot IDP server.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `[366354422] IDP Scope`.
* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

## **Step-by-Step Usage**

To build an Intelligent Document Processing flow in akaBot Studio using the **IDP Scope** container, follow these steps:

1. **Add IDP Scope Container**:
   * Drag and drop an **IDP Scope** activity from the **Toolbox** (under **IDP**) into your workflow designer panel (inside a **Sequence**).
   * In the **Properties** panel under **Input**:
     * **Api Key**: Enter your akaBot IDP API Key enclosed in quotation marks (e.g., `"akabot-test-api-key"`).
     * **Server Endpoint**: Enter the URL of your akaBot IDP server in quotation marks (e.g., `"https://idp-stage.akabot.com"`).

2. **Add Import Document**:
   * Drag and drop an [Import Document](/docs/activities/idp/latest/activities/import-document.md) activity inside the **Do** block of the **IDP Scope** container.
   * Configure its properties:
     * **File Path**: Enter the path of the document you want to process (e.g., `"C:\RPA\Invoices\invoice_01.pdf"`).
     * **Pipeline Key**: Enter your target pipeline key in quotation marks (e.g., `"pipeline-invoice-v2"`).
     * **Document Key** (under **Output**): Press **Ctrl + K** to create a String variable named `docKey` to store the generated document key.

3. **Add Export Document**:
   * Drag and drop an [Export Document](/docs/activities/idp/latest/activities/export-document.md) activity directly below the **Import Document** activity.
   * Configure its properties:
     * **Document Key**: Enter the variable `docKey` (from Step 2).
     * **Extract Type**: Choose your desired format (e.g., `DataTable`, `JsonString`, or `XMLString`).
     * **Extracted Data** (under **Output**): Create a variable to receive the results (e.g., a DataTable variable named `dtExtractedData`).

4. **Run the workflow**:
   * Execute the workflow. akaBot will authenticate via **IDP Scope**, import the specified document, extract the digitized data, and export it into your variable for downstream automation.

## **Troubleshooting**

* **Invalid API Key (Unauthorized)**:
  * Verify that the API Key entered in the **Api Key** field is correct and has not expired.
  * Ensure the key is enclosed in quotation marks.
* **Server Endpoint Connection Failed**:
  * Double-check the **Server Endpoint** URL for typos, ensuring it contains the correct protocol (`http://` or `https://`).
  * Verify your internet connection and ensure that proxies or local firewalls are not blocking requests to the akaBot IDP server.
* **Activities Running Outside of Scope**:
  * Ensure that all other IDP activities (such as *Import Document*, *Export Document*, *Get Document Status*, etc.) are strictly placed inside the **Do** container of the **IDP Scope**. Placing them outside will cause runtime errors.
* **Document Status Failure**:
  * If exporting fails, ensure the document has reached a finalized status (e.g. `Confirmed` or `Exported`). Attempting to export a document that is still processing or has failed validation will cause errors.
