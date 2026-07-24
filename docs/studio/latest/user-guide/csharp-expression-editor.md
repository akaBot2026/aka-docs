---
id: csharp-expression-editor
title: C# Expression Editor & IntelliSense
sidebar_label: C# Expression Editor & IntelliSense
sidebar_position: 8
description: Learn how to create C# projects in akaBot Studio and use the C# Expression Editor with IntelliSense for autocompletion, parameter suggestions, overloads, and LINQ.
displayed_sidebar: studioSidebar
---

# C# Expression Editor & IntelliSense

In previous versions, akaBot Studio only supported VB.NET as the project expression language when creating a new automation project. With the latest update, akaBot Studio has added full support for the **C#** language. You can now build workflows, assign variables, set conditions, and write LINQ queries using C# syntax.

This guide walks you through creating a C# project, using the C# Expression Editor, understanding the C# IntelliSense features, and migrating legacy projects.

## How to Create a New C# Project

To create a new project with C# as the expression language, follow these steps:

1. Open **akaBot Studio**, and click **New Project** on the Start screen to open the **New Blank Project** dialog.

   ![Create New Blank Project](/static/img/csharp-new-project-step.png)

2. Fill in the project **Name** and **Location**. Under the **Expression Language** setting, select **C#**.

3. Click **Create** to initialize the project. Once created successfully, the project workspace opens. The status bar at the bottom displays **Expression Language: C#**, indicating that C# is active for the current project.

   ![Project Created Successfully](/static/img/csharp-new-project-success.png)

## Migration from `project.json` to `project.v1.json`

### Why Migrate?
In older versions of akaBot Studio, the project configuration was stored in `project.json`, which did not have a field to specify the project expression language (as all projects defaulted to VB.NET). 

To support multiple expression languages (VB.NET and C#) and manage other compatibility features, akaBot Studio now uses the **`project.v1.json`** format. When you open a legacy project, the Studio detects the older format and prompts you to migrate. The new configuration file includes the `"expressionLanguage"` property (e.g., `"expressionLanguage": "CSharp"` or `"expressionLanguage": "VisualBasic"`).

### Project Migration Settings
You can control how migrations behave in akaBot Studio. Go to **File → Options**, select the **Common** tab, and locate the **Project Migration** section at the bottom.

![Project Migration Options Tab](/static/img/csharp-migration-options-tab.png)

Here, you can configure two options:
- **Confirm Project Migration**:
  - **Checked**: Studio shows a confirmation dialog before migrating. If you confirm, the migration proceeds.
  - **Unchecked**: Legacy projects are automatically migrated silently without any popup dialog.
- **Remove Old Project File**:
  - **Checked**: The old `project.json` file is deleted after a successful migration to `project.v1.json`, keeping your project workspace clean.
  - **Unchecked**: Both `project.json` and the migrated `project.v1.json` are kept in the folder.

## The C# Expression Editor

The **C# Expression Editor** opens whenever you edit an expression field inside an activity (such as the **Value** field of an **Assign** activity). It acts as a code editor with support for syntax highlighting, error validation, bracket matching, and IntelliSense.

C# expressions follow standard C# syntax rules. Here is a quick comparison of common operations:

| Operation | C# | VB.NET |
| --- | --- | --- |
| String concatenation | `"Hello " + name` | `"Hello " & name` |
| String comparison | `name == "Admin"` | `name = "Admin"` |
| Not equal | `status != "Done"` | `status <> "Done"` |
| Null check | `value == null` | `value Is Nothing` |
| Ternary operator | `success ? "OK" : "Error"` | `If(success, "OK", "Error")` |

## C# IntelliSense Features

C# IntelliSense provides real-time help as you type, facilitating faster and error-free development.

### 1. Suggest Parameters for Variables and Arguments
When typing in any expression box, IntelliSense automatically lists all active variables and arguments in the scope. It also displays the variable/argument data type (e.g. `Int32`, `String`, etc.) beside its name.

![Suggesting Variables and Arguments](/static/img/csharp-intellisense-variables.png)

### 2. Suggest Functions and Overloads
Typing a dot (`.`) after a variable or class name suggests all available methods and properties. When you call a method by opening a parenthesis `(`, IntelliSense lists all the method **overloads** showing the parameter types and descriptions. You can use the **Up** and **Down** arrow keys to scroll through available signatures.

![Suggesting Functions and Overloads](/static/img/csharp-intellisense-overloads.png)

### 3. LINQ Support
IntelliSense fully supports **LINQ (Language Integrated Query)**. You can filter, map, and transform collections or data tables with full autocomplete suggestions inside lambda expressions.


> **LINQ on Non-Generic Collections:**
> If you type `myDataTable.Columns.` and LINQ methods (like `Where`, `Select`, `Count`) do not appear in the IntelliSense dropdown, this is expected behavior in C#. Collections like `DataColumnCollection` and `DataRowCollection` are **non-generic** and do not expose LINQ extension methods directly.
>
> - For **Rows**: Use `.AsEnumerable()` first to get a generic `IEnumerable<DataRow>`:
>   ```csharp
>   myDataTable.AsEnumerable().Where(row => row.Field<string>("Status") == "Active")
>   ```
> - For **Columns**: Use `.Cast<DataColumn>()` or `.OfType<DataColumn>()` first:
>   ```csharp
>   myDataTable.Columns.Cast<DataColumn>().Where(col => col.ColumnName.Contains("ID"))
>   ```

**Example LINQ Queries:**

- Filtering DataTable rows:
  ```csharp
  myDataTable.AsEnumerable().Where(row => row.Field<string>("Status") == "Active")
  ```
- Counting rows matching a condition:
  ```csharp
  myDataTable.AsEnumerable().Count(row => row.Field<int>("Age") > 18)
  ```
- Mapping a column to a list:
  ```csharp
  myDataTable.AsEnumerable().Select(row => row.Field<string>("Name")).ToList()
  ```

![LINQ Autocomplete Support](/static/img/csharp-intellisense-linq.png)

## Hands-On Example

Here is a simple walkthrough showing C# expressions and IntelliSense in a standard workflow:

### Variables Setup
Create two variables in the variable panel:
- `v_Number` (Type: `Int32`, Default: `5`)
- `v_Message` (Type: `String`)

### Workflow Steps
1. **Assign Value**: Add an **Assign** activity.
   - **To**: `v_Number`
   - **Value**: Type `v_Number + 10`
2. **Format Message**: Add another **Assign** activity.
   - **To**: `v_Message`
   - **Value**: Type `"Result is: " + v_Number.` — as soon as you type the dot `.`, IntelliSense list appears. Choose `ToString()`.
     ```csharp
     "Result is: " + v_Number.ToString()
     ```
3. **Log Message**: Add a **Log Message** activity.
   - **Message**: Type `v_` and select `v_Message` from the autocomplete suggestions.

Run the project (`F5`). The **Output** panel at the bottom of Studio displays:

```
Result is: 15
```

![C# Sequence Workflow Example](/static/img/csharp-example-assign-linq.png)