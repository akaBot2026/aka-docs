---
id: last-result-task
title: How to Create a Last Result Task in a Process
sidebar_label: How to Create a Last Result Task in a Process
sidebar_position: 6
displayed_sidebar: collaborationSidebar
---

# How to Create a Last Result Task in a Process

The Last Result Task in akaBot Center is a utility task that captures and stores the output of the most recently completed task — whether it is a Bot Task, HTTP Task, or Human Task — into a named process variable. This makes it easy to pass results between tasks without manually mapping every output field, which is especially useful in dynamic or data-driven processes where the previous task's output needs to be forwarded downstream with minimal configuration.

The Last Result Task works by reading from the internal process execution context where each task's output is temporarily stored upon completion. By explicitly persisting this output into a named variable, the designer ensures the value remains accessible throughout the rest of the process lifetime, even after many subsequent tasks have executed. Without a Last Result Task, the raw last-result context may be overwritten by the next task's execution.

Last Result Tasks are particularly powerful when used after HTTP Tasks that return complex JSON responses. The task can extract a specific field from the JSON body and assign it to a strongly-typed process variable, making it available for condition expressions in gateways or as input to subsequent bot tasks.

## Last Result Task Configuration Panel

| Property | Description | Required |
|---|---|---|
| Task Name | Display name for this task | Yes |
| Source | The output source: Last Task Result, Specific Task Output | Yes |
| Source Task | When Source is "Specific Task Output", select the task | Conditional |
| Output Path | JSONPath or field name to extract from the result (e.g., `$.data.id`) | No |
| Target Variable | The process variable name to store the extracted value | Yes |
| Data Type | The expected data type of the extracted value | Yes |
| Default Value | Value to use if the source output is null or missing | No |

## JSONPath Extraction Examples

| Source Output (JSON) | JSONPath Expression | Extracted Value |
|---|---|---|
| `{"status": "approved", "id": 42}` | `$.id` | `42` |
| `{"items": [{"name": "A"}, {"name": "B"}]}` | `$.items[0].name` | `"A"` |
| `{"result": {"code": "OK"}}` | `$.result.code` | `"OK"` |
| Plain text response | _(leave blank)_ | Entire response as string |

## Steps to Add a Last Result Task

1. Open the process in the **Process Designer**.
2. Drag the **Last Result Task** element from the Task Palette onto the canvas.
3. Place it immediately after the task whose output you want to capture.
4. Connect the Last Result Task in the flow.
5. Click the Last Result Task node to open its **Properties** panel.
6. Enter a **Task Name** (e.g., "Capture API Response ID").
7. Set **Source** to **Last Task Result** to capture from the immediately preceding task, or **Specific Task Output** to target a named earlier task.
8. If applicable, enter the **Output Path** using JSONPath syntax to extract a specific field.
9. Enter the **Target Variable** name where the value will be stored.
10. Select the correct **Data Type**.
11. Optionally, set a **Default Value** for cases where the source is empty.
12. Click **Save**.
