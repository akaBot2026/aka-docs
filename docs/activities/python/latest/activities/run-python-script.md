---
id: run-python-script
title: "Run Python Script"
sidebar_label: "Run Python Script"
sidebar_position: 5
description: "Run Python Script activity documentation."
displayed_sidebar: activitiesSidebar
---
# Run Python Script

RCA.Activities.Python.RunScript

## **Description**

This activity enables you to run a Python Script. You can input the code directly in the activity or provide a file path for it. It can only be used inside the Python Scope activity.

![run script.jpg](/img/2e3868_run_script.jpg)
(\* is mandatory)

## **In the body of activity**

* **Script File** - The file path of the Python script.  
  Eg: “C:/PythonCode/hello.py”

## **Properties**

**Input**

* **Code (String)**- The code you want to execute. String supported only  
  Eg: “print('Hello, world!')”
* **Script File** - The file path of the Python script.  
   Eg: “C:/PythonCode/hello.py”

**Misc**

* **Public (Checkbox)**- Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: Run Python Script
