---
id: retry-scope
title: "Retry Scope"
sidebar_label: "Retry Scope"
sidebar_position: 10
description: "Retry Scope activity documentation."
displayed_sidebar: activitiesSidebar
---
# Retry Scope

RCA.Activities.Core.RetryScope

## **Description**

This activity retries the contained activities as long as the condition is not met or an error is thrown.

![retry-scope.png](/static/img/retry-scope.png)

\* indicates required fields.

## **Properties**

**Common**

* **Continue On Error (Boolean)**: Specifies whether the execution should continue even if the activity throws an error. Supported values: `True`, `False`.

**Misc**

* **Display Name (String)**: The name of this activity. You can edit it to better organize and structure your workflow.  
  Example: `Retry Scope`
* **Public (Checkbox)**: If selected, the activity data will be logged. Consider data security before using this property.

**Input**

* **Number Of Retries (Int32)**: The number of times the sequence is to be retried. Default value is `3`.
* **Retry Interval (TimeSpan)**\*: The amount of time to pause between each retry attempt. Default value is `00:00:05` (5 seconds).