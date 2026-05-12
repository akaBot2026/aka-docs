---
id: load-python-script
title: "Load Python Script"
sidebar_label: "Load Python Script"
sidebar_position: 3
description: "Load Python Script activity documentation."
displayed_sidebar: activitiesSidebar
---
# Load Python Script

RCA.Activities.Python.LoadScript

## **Description**

This activity enables you to store the handlers of a Python script in a PythonObject variable. You can use the resulting variable to invoke the methods within the code. This activity only can be used in Python Scope activity.

[![load script.jpg](/img/ed452c_load-script.jpg)](/bin/download/Activities/Python/Activities/Load%20Python%20Script/WebHome/load%20script.jpg?rev=1.1)

(\* is mandatory)

## **In the body of activity**

* **Script File** - The file path of the Python script.  
  Eg: “C:/PythonCode/hello.py”

## **Properties**

**Input**

* **Code (String)**\* - The code you want to execute. String supported only.  
  Eg: “print('Hello, world!')”
* **Script File (String)**\* - The file path of the Python script.  
  Eg: “C:/PythonCode/hello.py”

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Load Python Script.

**Output**

* **Result (PythonObject)**- The handlers for the specified Python script, are stored in a PythonObject variable.
