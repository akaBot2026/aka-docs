---
id: invoke-python-method
title: "Invoke Python Method"
sidebar_label: "Invoke Python Method"
sidebar_position: 2
description: "Invoke Python Method activity documentation."
displayed_sidebar: activitiesSidebar
---
# Invoke Python Method

RCA.Activities.Python.InvokeMethod

## **Description**

This activity allows you to run a specified method from a Python script directly in a workflow. The script contains the method that needs to be loaded into the environment first by using the Load Python Script activity.

[![invoke.jpg](/img/d9b21e_invoke.jpg)](/bin/download/Activities/Python/Activities/Invoke%20Python%20Method/WebHome/invoke.jpg?rev=1.1)

(\* is mandatory)

## **Properties**

**Input**

* **Python Instance (PythonObject)**- The Python script that contains the method you want to run, stored in a PythonObject variable.
* **Method Name (String)**\* - The name of the method that you want to use. String supported only.  
  Eg: “Python Method”.

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: “Invoke Python Method.

**Output**

* **Result (PythonObject)**- The handlers for the specified Python script, are stored in a PythonObject variable.

**Options**

* **Parameters (IEnumerable< Object >)** - A list of input parameters for the Python script that is to be invoked, if any.
