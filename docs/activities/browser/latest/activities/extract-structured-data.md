---
id: extract-structured-data
title: "Extract Structured Data"
sidebar_label: "Extract Structured Data"
sidebar_position: 17
description: "Extract Structured Data activity documentation."
displayed_sidebar: activitiesSidebar
---
# Extract Structured Data

RCA.Activities.Browser.ExtractStructuredData

## **Description**

The Extract Structured Data activity allows you to extract structured data from a specified webpage.

![extract-structured-data.png](/static/img/extract-structured-data.png)

(\* For mandatory)

**Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **In the body of the activity**

* **Pick target element**\* - Chooses the table or structured element on the web page to extract. This action helps to define the columns and map the data fields.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  * **True** - Allows the rest of the process to continue the execution even if an error occurs within the activity.  
  * **False (default)** - Blocks the process from continuing the execution.
* **Delay After (Int32)** - Delay time (in milliseconds) after executing the activity.
* **Delay Before (Int32)** - Delay time (in milliseconds) before the activity begins performing any operations.

**Input**

* **Selector (String)\*** - Text property used to find a particular UI element when the activity is executed. It is actually an XML fragment specifying attributes of the GUI element you are looking for and some of its parents.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: `Extract Data`.
* **Public (Checkbox)** - If checked, the data of this activity will be shown in the log. Consider data security before using it.

**Options**

* **Delay Between Page MS (Int32)** - The amount of time (in milliseconds) to wait until the next page is loaded when extracting multi-page data. The default value is `1000` milliseconds. E.g: `1000`.
* **Max Number Of Result (Int32)** - The maximum number of results to be extracted. If the value is `0`, all the identified elements are added to the output. The default value is `100`. E.g: `100`.
* **Next Page Timeout MS (Int32)** - The amount of time (in milliseconds) to wait for the next page to load. If the timeout has expired, the page will not be loaded further. The default amount of time is `30000` milliseconds. E.g: `30000`.

**Output**

* **Result (DataTable)\*** - The outputted data as a `DataTable` variable. Whitespaces are not allowed in the output variable name.

## **Step-by-Step Usage**

To extract a table of structured data from a webpage and write it to an Excel spreadsheet, follow these steps:

1. **Add Open Browser Container**:
   * Drag and drop an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) activity into the designer panel.
   * Set the URL to `"https://datatables.net/"`.

2. **Add Extract Structured Data**:
   * Drag and drop an **Extract Structured Data** activity inside the **Do** block of the **Open Browser** container.
   * Click **Pick target element** in the body of the activity, then select the table elements on the web page to define the columns and finalize the extraction structure.
   * In the **Properties** panel under **Output**, create a DataTable variable named `dt_` (Ctrl+K -> type `dt_` -> press Enter) and assign it to the **Result** field.

3. **Add Excel Application Scope**:
   * Drag and drop an **Excel Application Scope** activity below the **Open Browser** container.
   * In the workbook path field, input the path to your target Excel file (e.g., `"output.xlsx"`).

4. **Write Data to Excel**:
   * Drag and drop an **Excel Write Range** activity inside the **Do** block of the **Excel Application Scope**.
   * Set the **Sheet Name** to `"Sheet1"`.
   * Set the **Starting Cell** to `"A1"`.
   * In the **DataTable** input field, enter `dt_` (the DataTable variable created in Step 2).

5. **Run the workflow**: 
   * Execute the process. akaBot will launch the browser, navigate to the target site, extract the structured data table, and write the contents directly into the specified Excel sheet.

## **Troubleshooting**

* **SelectorNotFoundException / Element Not Found**: 
  * Ensure that the webpage has loaded completely before performing the action. If needed, insert a [Wait Page Load Complete](/docs/activities/browser/latest/activities/wait-page-load-complete.md) activity first.
  * Verify that the selector is correct. If the target element contains dynamic attributes (such as changing IDs), open the Selector Editor and replace the dynamic parts with wildcard characters (`*` or `?`).
  * Ensure the target element is visible and not hidden behind overlays or loader animations. If the element takes a moment to appear, you can configure **Delay Before** in the Properties panel to wait a brief moment before starting extraction.
* **Incomplete Data or Multi-page Extraction Failure**:
  * If the table spans multiple pages but only the first page is extracted, ensure the Next Page button selector is configured correctly (if applicable) or increase the **Delay Between Page MS** if the next page takes longer to load.
  * If the extraction times out while navigating between pages, increase the **Next Page Timeout MS** value.
  * Check the **Max Number Of Result** property. If the total number of items is greater than the limit (default `100`), only up to the specified limit is extracted. Set it to `0` to extract all available data.
* **Extension Not Enabled**: Ensure the akaBot Web Extension is active and has permissions to run on the target website. Without it, Studio cannot highlight or interact with web elements.
