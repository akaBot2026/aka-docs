---
id: how-to-use-debugger
title: How to Use the Debugger
sidebar_label: How to Use the Debugger
sidebar_position: 7
description: Debug your automation projects in akaBot Studio using breakpoints, step actions, and the Locals, Breakpoints, and Watches panels.
displayed_sidebar: studioSidebar
---

# How to Use the Debugger

## About Debugging

Debugging is the process of identifying and correcting errors in a project. akaBot Studio provides a set of tools that let you pause execution at any point, walk through your workflow activity by activity, and inspect the value of every variable and argument along the way.

Coupled with logging, debugging gives you full visibility into what your automation is doing at runtime, so you can find the root cause of an issue before publishing your project.

While debugging, akaBot Studio highlights the activity that is currently being executed and updates the **Locals**, **Breakpoints**, and **Watches** panels in real time, so you always know where you are in the workflow and what data it is working with.

> **NOTE**:
> Debugging always runs the project on the local machine where akaBot Studio is installed. Remote debugging is not supported.

## Start Debugging

To start debugging a project, click **Debug** in the Studio ribbon.

![debug](/static/img/debug.png)

Unlike running a project with **Start**, debugging lets you step through the workflow activity by activity and inspect variables as they change. By default, though, a debugging session runs straight through the workflow just like **Start** — it only pauses when it reaches an activity with a breakpoint, highlighting that activity with a dark amber border, or when an activity faults (see [Stopping on Errors](#stopping-on-errors)). See [Setting a Breakpoint](#setting-a-breakpoint) below to make it pause at a specific point.

While debugging is in progress, the following actions become available:

- **Continue** — Resumes execution until the next breakpoint is reached or the project finishes.
- **Stop** — Ends the debugging session immediately.

## Debugging Actions

The following actions are available in the Debug ribbon while a debugging session is active:

![debug-actions-ribbon](/static/img/debug-actions-ribbon.png)

| Action | Description |
| --- | --- |
| **Breakpoints** | Opens a menu to toggle a breakpoint on the selected activity or delete every breakpoint in the project. See [Setting a Breakpoint](#setting-a-breakpoint) below. |
| **Step Into** | Moves into the current activity. On a container (such as **Sequence**, **Flowchart**, or **State Machine**), execution pauses on its first child activity. On an **Invoke Workflow File** activity, the invoked workflow file is opened and execution pauses on its first activity. On a single activity, execution pauses when that activity finishes (or faults). |
| **Step Over** | Executes the current activity as a whole, including everything inside it and inside any workflow it invokes, and pauses when it finishes (or faults). Execution still pauses if a breakpoint inside it is hit. Use this when you trust a container's contents and only want to step through the activities around it. |
| **Slow Step** | A toggle. Turn it on, then click **Debug**: the project runs as an automatic **Step Into**, pausing about 1.5 seconds before and after each activity, so you can follow the execution flow without pressing an action after every step. When a breakpoint is hit, Slow Step stays paused and switches to manual stepping, so you can use **Step Into**, **Step Over**, or **Continue** from there. **Continue** resumes automatic slow stepping. |

When execution is already paused at the end of an activity, both **Step Into** and **Step Over** move to the next activity (or to the end of the parent container). If no debugging session is running, clicking **Step Into** or **Step Over** starts one.

> Available from Studio v3.2.6.0: the stepping behaviour above, and that workflows coming from a compiled library package are run as a single unit. The debugger does not open them, highlight their activities, or stop on breakpoints inside them, even with **Step Into**.

### What You See While Debugging

> Available from Studio v3.2.6.0.

While debugging, Studio highlights the activity that is running with a coloured border and a small badge in its upper-left corner. The colour shows the phase of the activity:

| Colour | Badge | Meaning |
| --- | --- | --- |
| Amber | Play triangle | The activity is about to run. |
| Green | Check mark | The activity has finished. Shown only when stepping (**Step Into**, **Step Over**, or **Slow Step**). |
| Red | X | The activity faulted (threw an exception), whether or not a **Try Catch** handles it. |
| Dark amber | — | Execution is paused on a breakpoint. The breakpoint glyph shows an arrow (see [Setting a Breakpoint](#setting-a-breakpoint)). |

**Execution trail** — Studio also marks the activities that have already run during the current session, so you can see the path execution has taken:

- A **green check mark** near the upper-right corner of an activity means it has finished (or, for a container, that execution has entered it).
- A **red X** means the activity faulted, or was stopped because a fault was raised inside it.
- When an activity runs again (a new loop iteration, a **Flowchart** jumping back, or a retry), the marks made since its previous run are cleared, and the trail is drawn again for the new pass.
- The whole trail is cleared when you start a new run, when you click **Stop**, and when the run ends.

**Following the current activity** — The designer automatically opens the workflow file and scrolls to the activity being executed. If the activity is hidden inside a collapsed container, Studio expands the container. If the container cannot show its children in place, such as a collapsed **Flowchart** or **State Machine** node, or the **Entry** / **Exit** of a **State**, Studio opens (drills into) it, just as if you had double-clicked it.

**Open Logs** is available from the **Home** ribbon tab, not the Debug tab. It opens the folder containing the log files generated during execution, so you can review detailed information about what happened while debugging.

![open-logs](/static/img/open-logs.png)

### Setting a Breakpoint

1. Select the activity where you want execution to pause.
2. On the **Debug** ribbon, click **Breakpoints**, then select **Toggle Breakpoint** from the menu (or press `F9`).

   ![debug-breakpoint-set](/static/img/debug-breakpoint-set.png)

3. A red circle appears in the upper-left corner of the activity, confirming the breakpoint is set. A disabled breakpoint is shown as a hollow red circle. When execution pauses on the breakpoint, the circle shows a white arrow. *(Available from Studio v3.2.6.0.)*

   ![breakpoint-log-message](/static/img/breakpoint-log-message.png)

4. Click **Debug**. Execution pauses right before the activity with the breakpoint runs.
5. Use **Step Into** (`F11`), **Step Over** (`F10`), or **Continue** to resume from there.

To remove a single breakpoint, select its activity, click **Breakpoints**, then **Toggle Breakpoint** again. To remove every breakpoint in the project at once, click **Breakpoints**, then **Delete All Breakpoints**.

### Shortcuts

The following keyboard shortcuts are available for the most common debugging and running actions:

| Action | Shortcut |
| --- | --- |
| **Debug** | `Ctrl + F5` |
| **Start** | `F5` |
| **Step Into** | `F11` |
| **Step Over** | `F10` |
| **Toggle Breakpoint** | `F9` |
| **Stop** | `Shift + F5` |

## The Locals Panel

The **Locals** panel shows the variables and arguments that are in scope for the activity currently selected in the workflow, along with their current values and types.

![debug-locals-panel](/static/img/debug-locals-panel.png)

While debugging, the panel is organized into three areas:

- **Variables** — Lists all variables defined in the current scope, together with their type and current value.
- **Properties of [activity] (previous)** — Shows the input and output properties of the most recently executed activity, such as the **Message** property of a **Log Message** activity.
- **Arguments** — Lists the arguments defined for the current workflow, together with their type and current value.

The Locals panel is only available while a debugging session is running, and opens automatically the first time you start one. If it isn't visible, look for the **Locals** tab next to **Properties**, **Workflow Outline**, and **AkaNinja**. It updates automatically each time execution pauses, making it easy to confirm that your workflow is producing the values you expect.

### Stopping on Errors

> Available from Studio v3.2.6.0.

The debugger always pauses on the activity that faults, in every mode (including after **Continue** and during **Step Over**), and whether or not the error is handled by a **Try Catch**. The activity is highlighted in red, and the Locals panel shows an extra **Exception** group:

- **$exceptionDetails** — The exception that was thrown. Its value shows the exception message; expand it to see properties such as **Message**, **InnerException**, **Source**, and **StackTrace**. Click the value to open it in a details window.
- **$exceptionActivityInfo** — The activity that faulted.

The properties group is labelled **Properties of [activity] (faulted)**. The exception information is shown only for this pause and is cleared when execution resumes.

From here, click **Continue** to let the error take its course (if a **Try Catch** handles it, execution continues into the **Catch** block; breakpoints in the **Catch** block are hit as usual), or click **Stop** to end the session.

## The Breakpoints Panel

The **Breakpoints** panel lists every breakpoint currently set in the project, so you can review and manage them from a single place instead of searching through the workflow.

![debug-breakpoints-panel](/static/img/debug-breakpoints-panel.png)

For each breakpoint, the panel displays:

- **Enabled** — A check box to temporarily turn the breakpoint off without deleting it.
- **Workflow File** — The `.xaml` file that contains the activity.
- **Activity Name** — The activity on which the breakpoint is set.
- **Activity ID** — The internal identifier of the activity.

From the Breakpoints panel you can:

- **Delete** — Remove the selected breakpoint.
- **Clear All** — Remove every breakpoint in the project at once.
- **Refresh** — Update the list to reflect the breakpoints currently set in the project.

The Breakpoints panel is available as a tab alongside **Error List**, **Output**, and **Watches** at the bottom of the Studio window.

## The Watches Panel

The **Watches** panel lets you monitor the value of specific variables, arguments, or expressions as you debug, without having to search for them in the Locals panel every time. It is available as a tab alongside **Error List**, **Output**, and **Breakpoints** at the bottom of the Studio window.

![debug-watch-panel](/static/img/debug-watch-panel.png)

The panel has four columns:

- **Expression** — The variable, argument, or VB expression being monitored.
- **Value** — The current value of the expression. Click the pencil icon next to a value to edit it, or the refresh icon to re-evaluate just that row.
- **Type** — The data type of the expression.
- **Error** — Shows an error message if the expression is invalid or out of scope for the current activity.

To add a new entry, click the empty row at the bottom of the panel (showing **Enter a VB Expression**) and type the variable, argument, or expression you want to monitor.

Values in the Watches panel are refreshed automatically each time execution pauses while debugging. Use **Delete** to remove the selected entry, **Clear** to remove every entry at once, or **Refresh** to re-evaluate all watched expressions.

## Example: Debugging a Sample Workflow

This example walks through debugging a simple **Sequence** that assigns two numbers, sums them, then branches on whether the sum is greater than 10.

### The Workflow

| # | Activity | Details |
| --- | --- | --- |
| 1 | **Assign** | `number1 = 4` |
| 2 | **Assign** | `number2 = 7` |
| 3 | **Assign** | `sum = number1 + number2` |
| 4 | **If** | Condition: `sum > 10` — logs `"Sum of two numbers is greater than 10!"` in **Then**, or `"Sum of two numbers is smaller than 10!"` in **Else**. |

The Sequence defines three variables: `number1`, `number2`, and `sum` (all Int32, no default).

Where you set breakpoints is entirely up to you — it depends on which activities you want to pause on and inspect. This example sets one on each of the four activities above, so every variable change can be checked step by step.

1. Set a breakpoint on each activity (see [Setting a Breakpoint](#setting-a-breakpoint)), then click **Debug** (or press `Ctrl + F5`).
2. Click **Continue** to move from one breakpoint to the next. Watch the **Locals** panel: `number1` becomes `4`, then `number2` becomes `7`, then `sum` becomes `11`.
3. At the **If** breakpoint, use **Step Into** — since `sum` (`11`) is greater than `10`, execution follows the **Then** branch and logs `"Sum of two numbers is greater than 10!"`.

Open the **Breakpoints** panel any time to see all four breakpoints at once, or add `sum` to the **Watches** panel to track it without switching back to Locals.

![example-debugger](/static/img/example-debugger.png)