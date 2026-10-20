---
id: build-code-files-to-dll
title: "Build Code (C# to DLL) & Invoke Method"
sidebar_label: "Build Code to DLL"
sidebar_position: 13
description: "How to compile C# source files into Custom_Code.dll and call methods using Invoke Method in akaBot Studio."
displayed_sidebar: studioSidebar
---
# Build Code (C# to DLL) & Invoke Method

## **Overview**

The **Build Code** feature allows you to include C# source files (`.cs`) directly in an akaBot Studio project, compile them into a local assembly (`.local\Custom_Code.dll`), and invoke custom methods within your workflows using the **Invoke Method** activity.

![Build Code Button in Ribbon](/static/img/build-code-ribbon.png)

---

## **1. Compiling C# Source Files**

Follow these steps to compile your C# code into a usable assembly:

1. **Add C# source files to your project**:
   - Create or copy `.cs` files into your project directory (e.g., `JsonDownload.cs`).
   - Define your custom classes and public methods (static or instance).

   ![Project Explorer with CS files](/static/img/build-code-project-explorer.png)

2. **Run Build Code**:
   - Click **Build Code** in the Studio ribbon.
   - Studio compiles all `.cs` files and generates `.local\Custom_Code.dll`, updating `.local\cache.json`.

3. **Restart Studio**:
   - A confirmation prompt lists the compiled files and prompts you to restart.
   - Click **Restart Studio** to reload the project with the new assembly.

![Build Code Success and Restart Prompt](/static/img/build-code-success-restart.png)

---

## **2. Invoking Compiled Methods**

After restarting Studio, use the **Invoke Method** activity (`System.Activities.Statements.InvokeMethod`) to call your compiled C# methods.

![Invoke Method Designer](/static/img/build-code-invoke-method-designer.png)

Configure the following properties:

| Property | Description |
|---|---|
| **TargetType** | For **static** methods: browse and select the compiled C# class (e.g., `MyCompany.Helpers.DataProcessor`). |
| **TargetObject** | For **instance** methods: provide the instantiated object variable. |
| **MethodName** | The exact name of the method to invoke (e.g., `ProcessInvoice`, `ComputeHash`). |
| **Parameters** | Input and output arguments matching the C# method signature. |
| **Result** | A workflow variable to capture the method's return value. |

![Invoke Method Properties](/static/img/build-code-invoke-method-properties.png)
