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

1. **Place inside a browser container**: Drag the **Extract Structured Data** activity into the **Do** container of [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md).
2. **Configure target structure**: Click the **Pick target element** helper and follow the wizard prompts to define columns and scrape structured table data from the webpage (for example, you can test with the HTML tables on https://www.w3schools.com/html/html_tables.asp)
3. **Set the output variable**: Create and assign a DataTable variable in the **Extract Data** property to store the structured result.
4. **Run the workflow**: akaBot scrapes the structured tables and outputs them into the assigned DataTable variable.

> For more information about selecting web elements and selectors, see **[Working with Web Elements](/docs/activities/browser/latest/user-guide/working-with-web-elements.md)**.

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

## **Related topics**

* [Working with Web Elements](/docs/activities/browser/latest/user-guide/working-with-web-elements.md)
