---
id: bot-task
title: How to Create a Bot Task in a Process
sidebar_label: How to Create a Bot Task in a Process
sidebar_position: 1
displayed_sidebar: collaborationSidebar
---

# How to Create a Bot Task in a Process

A Bot Task is an automated step within a human-bot collaboration process where akaBot executes a predefined robotic workflow package without any human interaction. Bot tasks are responsible for high-speed, repetitive processing work such as reading data from a source system, performing calculations, updating records in a database, or generating documents. By embedding bot tasks directly into a process flow, organizations can ensure that automation runs precisely when and where it is needed within a larger end-to-end workflow.

When a process reaches a bot task, akaBot Center dispatches the job to an available agent within the assigned agent group. The agent downloads the specified workflow package, executes it with the configured input parameters, and reports the outcome — success, failure, or a returned output value — back to the process engine. The process then continues to the next task based on the outcome, enabling conditional branching based on bot results.

Bot tasks support configurable timeout and retry policies to handle transient failures gracefully. If a bot task fails and retries are exhausted, the process can be configured to route to an exception-handling path, alert a supervisor, or terminate the instance. All execution details including start time, end time, agent used, and any output variables are recorded in the instance audit log.

## Bot Task Configuration Panel

| Property | Description | Required |
|---|---|---|
| Task Name | Display name for this task in the designer | Yes |
| Agent Group | The group of agents eligible to execute this task | Yes |
| Workflow Package | The akaBot workflow package (.nupkg) to execute | Yes |
| Package Version | Specific version or "latest" | Yes |
| Input Variables | Process variables to pass as input arguments to the package | No |
| Output Variables | Variables to capture from the package output | No |
| Timeout (minutes) | Maximum execution time before the task is marked as timed out | Yes |
| Retry Count | Number of automatic retries on failure | No |
| Retry Delay (seconds) | Wait time between retry attempts | No |
| On Failure | Route to error path or terminate instance | Yes |

## Steps to Add a Bot Task

1. Open the process in the **Process Designer**.
2. In the **Task Palette** on the left, drag the **Bot Task** element onto the canvas.
3. Connect the Bot Task to the preceding element using the flow arrow.
4. Click the Bot Task node to open its **Properties** panel on the right.
5. Enter a descriptive **Task Name**.
6. Select the **Agent Group** from the dropdown. Only groups with at least one active agent will be listed.
7. Click the **Workflow Package** field and browse or search for the package to execute.
8. Select the desired **Package Version**.
9. In the **Input Variables** section, map process variables to the expected input parameters of the package.
10. In the **Output Variables** section, define the variable names that will store the package return values.
11. Set the **Timeout** value appropriate for the expected execution duration.
12. Configure **Retry Count** and **Retry Delay** if transient failures are expected.
13. Click **Save** to apply the configuration.
