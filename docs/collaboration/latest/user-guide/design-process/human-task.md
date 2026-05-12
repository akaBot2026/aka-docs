---
id: human-task
title: How to Create a Human Task in a Process
sidebar_label: How to Create a Human Task in a Process
sidebar_position: 2
displayed_sidebar: collaborationSidebar
---

# How to Create a Human Task in a Process

A Human Task is a process step that requires a person to take an action before the workflow can proceed. Common human tasks include reviewing and approving a document, entering missing data, making a decision based on business context, or acknowledging a notification. Human tasks bridge the gap between fully automated bot processing and the judgment-based activities that still require human involvement, forming the core of human-bot collaboration in akaBot Center.

When a process reaches a human task, it pauses and sends a notification to the assigned user, role, or assignee pool. The assignee opens the task from their inbox, reviews any context data or documents provided by preceding bot tasks, fills out any required form fields, and submits their response. Only after submission does the process continue to the next step. If the assignee does not respond within the configured due date, an escalation can be triggered to notify a supervisor or reassign the task.

Human tasks can be configured with rich context data that is displayed to the assignee, including data extracted by previous bot tasks. A custom form built using the Form Designer can be attached to the task so the assignee can provide structured input. The outcome of the human task — such as "Approved", "Rejected", or a custom status — is stored as a process variable and can drive subsequent branching decisions.

## Human Task Configuration Panel

| Property | Description | Required |
|---|---|---|
| Task Name | Display name shown in the assignee's inbox | Yes |
| Assignment Type | User, Role, or Pool | Yes |
| Assignee | Specific user, role name, or pool name | Yes |
| Priority | Low, Medium, High, or Critical | No |
| Due Date | Fixed date or calculated from process start (e.g., +2 days) | No |
| Form | The form the assignee must complete | No |
| Context Data | Process variables to display as read-only context | No |
| Escalation Rule | Action to take when due date is exceeded | No |
| Completion Outcomes | Define possible outcomes (e.g., Approved, Rejected) | Yes |

## Steps to Add a Human Task

1. Open the process in the **Process Designer**.
2. Drag the **Human Task** element from the **Task Palette** onto the canvas.
3. Connect the Human Task to the preceding element.
4. Click the Human Task node to open its **Properties** panel.
5. Enter a descriptive **Task Name** that conveys the action required (e.g., "Review Invoice").
6. Set **Assignment Type** to **User**, **Role**, or **Pool**.
7. In the **Assignee** field, select the target user, role, or pool.
8. Set a **Priority** level to help the assignee gauge urgency.
9. Configure the **Due Date** — either a fixed date or a dynamic offset (e.g., process start + 48 hours).
10. Click **Design Form** to attach or create a form for the assignee to fill in.
11. In **Context Data**, add process variables that the assignee should see (read-only).
12. Define **Escalation Rules**: choose an escalation action (reassign, notify manager) and set the trigger delay.
13. Under **Completion Outcomes**, add all valid submission outcomes and map each to a process variable value.
14. Click **Save** to apply the configuration.
