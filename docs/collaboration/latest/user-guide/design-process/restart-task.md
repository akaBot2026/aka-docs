---
id: restart-task
title: How to Use Restart Task in a Process
sidebar_label: How to Use Restart Task in a Process
sidebar_position: 3
displayed_sidebar: collaborationSidebar
---

# How to Use Restart Task in a Process

The Restart Task is a special control element in akaBot Center that allows a process instance to loop back to a previously executed task or to the beginning of a sequence. It is used to model iterative business scenarios where a set of tasks must be repeated until a specific condition is met — for example, a document review cycle where the reviewer can request corrections and send the document back for revision before re-submitting for final approval.

Unlike a simple gateway loop, the Restart Task provides explicit control over which point in the process flow the instance returns to, making the process diagram easier to understand and maintain. It also enforces a configurable loop limit to prevent infinite loops from consuming system resources. When the loop limit is reached without the exit condition being satisfied, the process can be directed to an exception path or terminated with an error.

Restart Tasks are particularly valuable in processes that involve quality checks, iterative data enrichment, or multi-round negotiations. They can be combined with Human Tasks so that a human decision (such as "Request Rework") triggers the restart, or with Bot Tasks where a validation bot determines whether the output meets the required standard before the process advances.

## Restart Task Configuration Options

| Property | Description | Required |
|---|---|---|
| Task Name | Display name for this restart point | Yes |
| Target Task | The task or gateway the process loops back to | Yes |
| Loop Condition | Expression that must be true for the loop to execute | Yes |
| Maximum Loop Count | The maximum number of times the loop is allowed | Yes |
| On Limit Exceeded | Action when max count is reached: error path or terminate | Yes |
| Loop Counter Variable | Process variable to track the current loop count | No |

## Common Use Cases

| Scenario | Loop Condition | Exit Condition |
|---|---|---|
| Document revision | Human reviewer selects "Request Rework" | Human reviewer selects "Approve" |
| Bot retry on partial data | Bot output validation fails | Bot output passes validation |
| Multi-round approval | Senior approver sends back for amendment | Senior approver gives final approval |
| Data enrichment | Required fields are still empty | All required fields are populated |

## Steps to Add a Restart Task

1. Open the process in the **Process Designer**.
2. Identify the task you want the process to loop back to (the **target task**).
3. Drag the **Restart Task** element from the Task Palette onto the canvas, placing it after the task that triggers the loop.
4. Draw a sequence flow from the triggering task (or gateway) to the Restart Task node.
5. Click the Restart Task node to open its **Properties** panel.
6. Enter a **Task Name** describing the restart action (e.g., "Return to Review").
7. In **Target Task**, select the task the process should return to from the dropdown.
8. Enter the **Loop Condition** expression. This expression evaluates to `true` when the loop should execute.
9. Set the **Maximum Loop Count** (recommended: 5–10 for most scenarios).
10. Configure the **On Limit Exceeded** behavior.
11. Optionally, specify a **Loop Counter Variable** name to expose the iteration count to subsequent tasks.
12. Click **Save**.
