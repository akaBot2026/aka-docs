---
id: get-python-object
title: "Get Python Object"
sidebar_label: "Get Python Object"
sidebar_position: 1
description: "Get Python Object activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Python Object

RCA.Activities.Python.GetObject

## **Description**

This Invoke Python Method activity converts a Python. Object variable which returned by other Python activities such as Load Python Script into a .NET data type of your choice.

[![get object.jpg](/img/a80b08_get-object.jpg)](/bin/download/Activities/Python/Activities/Get%20Python%20Object/WebHome/get%20object.jpg?rev=1.1)

(\* is mandatory)

## **Properties**

**Input**

* **Python Object (PythonObject)\***- A Python Object, stored in a PythonObject variable, which you want to convert.

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  **Eg**: Get Python Object.
* **Type Argument(Dropdown List)** - The .NET data type you want to get from the PythonObject variable.

**Output**

* **Result (Object)** - The PythonObject variable converted to the .NET type variable selected in the TypeArgument property.
