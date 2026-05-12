---
id: python-scope
title: "Python Scope"
sidebar_label: "Python Scope"
sidebar_position: 4
description: "Python Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# Python Scope

RCA.Activities.Python.PythonScope

## **Description**

A container that gives you the scope for Python activities and initializes the specified Python environment. When this activity ends, all objects loaded up to that point are deleted.

[![python scope.jpg](/img/510fa7_python_scope.jpg)](/bin/download/Activities/Python/Activities/Python%20Scope/WebHome/python%20scope.jpg?rev=1.1)

(\* is mandatory)

## **In the body of activity**

* **Do** - The activities you want to execute within the activity.

## **Properties**

**Input**

* **Python Path (String)**\* - The path of the python file you want to add.  
  Eg: “C:/Python36/”
* **Working Folder (String)** - Used to specify the working folder of the scripts executing under the current scope. This field supports only String variables.

**Misc**

* **Public (Checkbox)** - Check if you want to publicize it. Remember to consider data security requirements before using it.
* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: “Python function”

**Options**

* **Python Version (DropDownlist)**- A list of Python versions that you are using. By default, this is set to Auto.
* **Target Platform (DropDownlist)**- You can choose different platforms for different Windows Application. x86 or x64.
