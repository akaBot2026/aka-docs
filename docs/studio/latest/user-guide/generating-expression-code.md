---
id: generating-expression-code
title: Natural Language to Expression Code
sidebar_label: Natural Language to Expression Code
sidebar_position: 5
description: Generate Visual Basic (VB.Net) and C# expressions using natural language directly within the akaBot Studio Expression Editor.
displayed_sidebar: studioSidebar
---

# Natural Language to Expression Code

The **Natural Language to Expression Code** feature is an intelligent AI-powered assistant integrated directly within the **akaBot Studio** Expression Editor. It allows developers to input logic descriptions in plain, natural language to automatically compile and generate precise expression code in **VB.Net** or **C#**.

Rather than memorizing complex syntax or spent time searching through programming libraries, developers can describe their intent. The AI assistant acts as an autopilot, accelerating workflow design, enabling low-code/no-code accessibility for beginners, and saving time for experienced developers.

## Key Capabilities

The **Natural Language to Expression Generator** in akaBot Studio offers the following capabilities:

* Converts natural language into VB.Net or C# expressions.
* Helps developers write expressions faster with less manual coding.
* Reduces syntax errors and improves productivity.
* Simplifies creating workflow logic, validations, and calculations.
* Makes expression development easier, even for users with limited programming knowledge.

## User Interface (UI) Overview

The feature is embedded directly at the bottom of the standard **Expression Editor** dialog in akaBot Studio.

![ui-expression-code](/static/img/ui-expression-code.png)

1. **Expression Area (Editor Pane)**: The main text field where the generated expression is inserted. You can also manually edit or refine the code here.

![expression-textfield.png](/static/img/expression-textfield.png)

2. **Natural Language Input Field**: The text box at the bottom of the dialog with the placeholder: *`Describe your expression in natural language...`*. This is where you enter your prompt.

![prompt-expression-code](/static/img/prompt-expression-code.png)

3. **Control Buttons**:

![ui-code](/static/img/ui-code.png)


   - **OK**: Saves the current expression and applies it to the activity's property.
   - **Cancel**: Closes the dialog without saving.

## Step-by-Step Guide

To generate expression code using text prompts, ensure your akaBot Studio has an active connection to the AI service.

To generate expression code using a text prompt, follow these steps:

**Step 1: Navigate to the Workflow**

Go to the workflow file where you want to add the expression.

**NOTE**
> * **Exact Variable Matching**: If your expression depends on multiple variables or arguments, your prompt must include each variable or argument name exactly as defined in your workflow.
> * **Pre-declared Variables**: Ensure that all referenced variables and arguments are already created in the **Variables** or **Arguments** panels of akaBot Studio before attempting to generate the expression.

**Step 2: Open the Expression Editor**

Select the activity in your workflow. In the **Properties** panel on the right, locate the property where you wish to add the expression (e.g., a condition, path, or value). Click the configuration or ellipsis button next to the property field to open the **Expression Editor** window.

**Step 3: Input the Prompt**

Locate the input field at the bottom of the Expression Editor dialog with the placeholder: *`Describe your expression in natural language...`*. Write a text prompt describing the logic or condition you wish to add.

**Step 4: Generate the Expression**

Press **Enter** on your keyboard or click the generate icon. The AI assistant processes your request and populates the generated VB.Net or C# expression code directly in the main editor pane.

**Step 5: Save and Apply**

Review the generated expression in the editor pane. Make any necessary manual refinements, then click **OK** to save and apply the expression to the activity.

## Best Practices for Writing Prompts

To get the most accurate and reliable expressions from the AI assistant, follow these prompt guidelines:

* **Reference Variables Exactly**: Always use the exact names of the variables, arguments, or assets defined in your project (e.g., `customerEmail`, `invoiceDateText`).
* **Specify Action Verbs**: Use explicit programming verbs to guide the logic (e.g., *"Convert"*, *"Filter"*, *"Extract"*, *"Combine"*, *"Check whether"*).
* **Define Default Values**: If handling potentially empty values, specify the fallback in the prompt (e.g., *"Convert amountText to Decimal, using 0 if it is empty"*).
* **Break Down Complex Logic**: If your logic contains multiple nested conditions, describe them sequentially (e.g., *"Check if dt_EmployeeData is not null and has at least one row"*).


## Requirements and Limitations

 Keep the following rules in mind to avoid compilation errors:
 
> 1. **Pre-declare Variables**: The AI assistant maps names to variables in your project. Ensure that all referenced variables and arguments are already created in the **Variables** or **Arguments** panels of akaBot Studio before generating the expression.
> 2. **Project Language Context**: The expression format (VB.Net vs. C#) is determined by your project settings. If your project is a VB.Net project, the editor generates VB expressions; if it is C#, it generates C# expressions.


## Examples Library

Below is a library of common prompts organized by the editor context in which they are used.

**Expression Editor Examples**

These prompts are designed for the **Expression Editor** to generate single-line expressions (e.g., calculations, condition checks, simple string/path manipulations, datatable filtering).

| Expression Target | Function | Example Prompt |
| :--- | :--- | :--- |
| **App variables** | Checks if a workflow variable `str_UserToken` is empty and assigns a default token value. | `"If str_UserToken is null or empty, set it to 'DEFAULT_TOKEN'"` |
| **App arguments** | Calculates the transaction fee and assigns it to the output argument `out_TransactionFee`. | `"Calculate out_TransactionFee as 5 percent of in_Amount"` |
| **Filter** | Filters a DataTable variable to exclude rows containing invalid or blank email addresses. | `"Filter dt_CustomerData where Column 'Email' is not empty and contains '@'"` |
| **Custom Model** | Retrieves the current URL from the browser variable. | `"Get the current URL from edgeBrowser"` |
| **Filter** | Checks if the DataTable `dt_EmployeeData` is not null and has at least one row. | `"Check if the datatable dt_EmployeeData is not null and has at least one row"` |
| **Files** | Extracts the file name without extension from a full file path. | `"Extract the file name without extension from fullFilePath"` |
| **Datetime** | Creates a timestamp string in yyyyMMdd_HHmmss format. | `"Create a timestamp string in yyyyMMdd_HHmmss format"` |
| **Convert** | Converts a text representation of an invoice date to a DateTime object. | `"Convert invoiceDateText to a DateTime"` |
| **Check** | Converts a text amount to Decimal, defaulting to 0 if it is empty. | `"Convert amountText to Decimal, using 0 if it is empty"` |

**AI Code Editor Examples**

These prompts are designed for the **Code Editor** (used in Invoke Code or Script activities) to generate multi-line logic, complex loops, error handling blocks, database queries, and web service calls.

| Expression Target | Function | Example Prompt |
| :--- | :--- | :--- |
| **App variables** | Iterates over input items, cleans the values, and populates an output list. | `"Loop through in_RawData list of strings, trim whitespace, convert to uppercase, and add to list_ProcessedData"` |
| **App arguments** | Maps database query parameters from incoming workflow arguments to a command execution. | `"Create SQL command using connectionString and in_Query, bind argument in_UserId, execute query, and assign output to out_ResultDataTable"` |
| **Custom model** | Downloads web content or communicates with API endpoints within a custom C# or VB.NET script block. | `"Create an HttpClient to make a GET request to in_Url, parse the response status code, and output JSON string to out_ResponseJson"` |
| **Filter & Aggregation** | Grouping, aggregation, and complex joins on data tables that are too verbose for a single-line expression. | `"Group dt_Sales by Column 'Region' and compute the sum of 'Revenue' for each region into a new DataTable out_Summary"` |
| **Error Handling & Logging** | Implements standard try-catch blocks around sensitive file operations to log errors without breaking the main bot thread. | `"Try to read file at in_FilePath, catch all exceptions, write details to Console.Error, and set out_IsSuccess to false"` |
| **File System Manipulation** | Performs deep recursive file scans, filtering, and copying operations. | `"Recursively search directory in_SourcePath for all files modified in the last 24 hours, copy them to in_DestPath, and count total files copied in out_FileCount"` |
