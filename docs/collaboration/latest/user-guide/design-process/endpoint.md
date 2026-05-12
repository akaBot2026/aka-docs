---
id: endpoint
title: Endpoint of a Process
sidebar_label: Endpoint of a Process
sidebar_position: 10
displayed_sidebar: collaborationSidebar
---

# Endpoint of a Process

Every process in akaBot Center must have a clearly defined endpoint — a terminal event node that marks the conclusion of a process instance. Endpoints determine whether a process instance ends successfully, ends due to an error, or is terminated by a specific exception condition. Correctly configured endpoints ensure that the process engine properly closes the instance, releases any held resources, triggers downstream notifications, and records the final status in the audit log.

akaBot Center supports multiple types of end events, each conveying a different final outcome for the process instance. A single process can contain multiple end events to model different termination scenarios — for example, one end event for "Approved and Completed", another for "Rejected", and an error end event for unrecoverable failures. Each end event records its specific outcome type in the instance history, making it easy for operators and auditors to understand exactly how and why each instance concluded.

In addition to end events, akaBot Center supports **intermediate events** that can pause the process, wait for a timer to elapse, or wait for an external signal before continuing to the next task. These are not endpoints in themselves but allow the process to model waiting states between tasks, such as waiting 24 hours before sending a reminder or waiting for a webhook callback from an external system.

## End Event Types

| End Event Type | Icon Color | Description | When to Use |
|---|---|---|---|
| None End Event | Green circle | Marks a successful, normal completion of the process | Default happy-path completion |
| Error End Event | Red circle with lightning | Terminates the process due to an unhandled error | When an exception cannot be recovered from |
| Terminate End Event | Red circle filled | Immediately cancels all running parallel branches and ends the instance | When a decision (e.g., rejection) requires all work to stop immediately |
| Message End Event | Green circle with envelope | Ends the process and sends a message/event to another process or system | When triggering a downstream process or external notification |
| Escalation End Event | Orange circle with arrow | Ends the sub-process and escalates to the parent process | Used in sub-processes to signal issues to the calling process |

## Intermediate Event Types

| Event Type | Description |
|---|---|
| Timer Intermediate Event | Pauses the process for a configured duration or until a specific date/time |
| Message Intermediate Event | Pauses the process until a specific external message or signal is received |
| Error Intermediate Event | Catches an error thrown by a task on the same level and redirects flow |

## Steps to Add an End Event

1. In the **Process Designer**, drag an **End Event** element from the Event Palette onto the canvas.
2. Connect the last task in a branch to the End Event using a sequence flow arrow.
3. Click the End Event node to open its **Properties** panel.
4. Select the **End Event Type** from the type dropdown.
5. Enter a **Name** that describes the terminal condition (e.g., "Invoice Approved", "Request Rejected", "Process Failed - Timeout").
6. For **Error End Events**, select or create the **Error Code** to associate with this termination.
7. For **Message End Events**, configure the **Message Target** and any payload variables to include.
8. Optionally, configure **Post-Completion Actions** such as sending a summary email or triggering a report.
9. Click **Save**.

## Best Practices for Endpoints

- Every path in the process diagram must lead to an end event — the Process Designer validator will report paths that have no endpoint as errors.
- Use descriptive end event names so the instance history clearly shows the business outcome.
- Separate "Approved" and "Rejected" paths into distinct end events rather than using a single end event with a status variable, to improve readability in the process monitor.
- Always include at least one Error End Event connected from exception-handling paths to ensure failed instances are closed properly.
