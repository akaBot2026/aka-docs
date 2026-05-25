---
id: terminate-workflow
title: "Terminate Workflow"
sidebar_label: "Terminate Workflow"
sidebar_position: 1
description: "Terminate Workflow activity documentation."
displayed_sidebar: activitiesSidebar
---
# Terminate Workflow

System.Activities.Statements.TernimateWorkflow

## **Description**

This activity allows you to terminate a workflow.

![image-20220505152950-1.jpeg](/static/img/12e0bd_image-20220505152950-1.jpeg)

## **Properties**

**Misc**

* **Exception (Exception)**- Terminates a workflow instance using the specified exception
* **Reason (String)**- A string input argument with the reason for the workflow instance termination

**Notes**

* We can only check "Reason"/ "Exception" in the log file if we set LogLevel of Agent **(VERBOSE)**
* Other levels (Fatal, Error, Warn, Info, Debug) => not able to check "Reason"/ "Exception" in the log file

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: End the Workflow
