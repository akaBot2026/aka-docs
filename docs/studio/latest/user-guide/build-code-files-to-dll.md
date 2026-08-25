---
id: build-code-files-to-dll
title: "Build Code (C# to DLL) & Invoke Method"
sidebar_label: "Build Code to DLL"
sidebar_position: 13
description: "How to compile C# source files into Custom_Code.dll and call methods using Invoke Method in akaBot Studio."
displayed_sidebar: studioSidebar
---
# Build Code (C# to DLL) & Invoke Method

akaBot Studio Feature: `Build C# Code Files To Dll` & `System.Activities.Statements.InvokeMethod`

## **Description**

The **Build Code** feature enables developers to include raw C# source code files (`.cs`) directly within an akaBot project, compile them into a local assembly (`.local\Custom_Code.dll`), and call their custom methods and types using the **Invoke Method** activity or workflow expressions.

![Build Code Button in Ribbon](/static/img/build-code-ribbon.png)

---

## **1. Step-by-Step Compilation Process**

1. **Add C# Source Files**:
   * Create or paste `.cs` files inside the project directory (e.g., `JsonDownload.cs`).
   * Write your custom public static/instance methods and classes.

![Project Explorer with CS files](/static/img/build-code-project-explorer.png)

2. **Trigger Build Code**:
   * Click **Build Code** in the Studio ribbon.
   * Studio compiles all `.cs` files into `.local\Custom_Code.dll` and updates `.local\cache.json`.
3. **Restart Studio**:
   * A prompt displays the list of compiled `.cs` files and asks to restart Studio.
   * Click **Restart Studio** to reload the project with the newly compiled assembly in the type execution engine.

![Build Code Success and Restart Prompt](/static/img/build-code-success-restart.png)

---

## **2. Calling Compiled Methods with Invoke Method**

After restarting Studio, you can call your compiled C# methods using the **Invoke Method** activity (`System.Activities.Statements.InvokeMethod`):

![Invoke Method Designer](/static/img/build-code-invoke-method-designer.png)

### **Configuring Properties**:
* **TargetType**: When invoking a **Static / Shared** method, browse and select your compiled C# class type (e.g., `MyCompany.Helpers.DataProcessor`).
* **TargetObject**: When invoking an **Instance** method, provide the instantiated object variable.
* **MethodName**: Enter the exact method name (e.g., `ProcessInvoice`, `ComputeHash`).
* **Parameters**: Add the required input/output arguments matching the C# method signature.
* **Result**: Assign a workflow variable to receive the return value.

![Invoke Method Properties](/static/img/build-code-invoke-method-properties.png)
