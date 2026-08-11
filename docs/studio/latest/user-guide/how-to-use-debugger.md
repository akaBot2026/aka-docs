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

Unlike running a project with **Start**, debugging lets you step through the workflow activity by activity and inspect variables as they change. By default, though, a debugging session runs straight through the workflow just like **Start** — it only pauses when it reaches an activity with a breakpoint, highlighting that activity with a yellow border. See [Setting a Breakpoint](#setting-a-breakpoint) below to make it pause at a specific point.

While debugging is in progress, the following actions become available:

- **Continue** — Resumes execution until the next breakpoint is reached or the project finishes.
- **Stop** — Ends the debugging session immediately.

## Debugging Actions

The following actions are available in the Debug ribbon while a debugging session is active:

![debug-actions-ribbon](/static/img/debug-actions-ribbon.png)

| Action | Description |
| --- | --- |
| **Breakpoints** | Opens a menu to toggle a breakpoint on the selected activity or delete every breakpoint in the project. See [Setting a Breakpoint](#setting-a-breakpoint) below. |
| **Step Into** | Executes the current activity and pauses on the next one, opening containers (such as **Sequence**, **Flowchart**, or **Invoke Workflow File**) so you can debug the activities inside them one by one. |
| **Step Over** | Executes the current activity as a whole and pauses on the next one at the same level, without opening containers. Use this when you trust a container's contents and only want to step through the activities around it. |
| **Slow Step** | Runs the project continuously while automatically opening containers and highlighting each activity as it executes, without requiring you to press an action after every step. This is useful for visually following the execution flow of a large workflow. |

**Open Logs** is available from the **Home** ribbon tab, not the Debug tab. It opens the folder containing the log files generated during execution, so you can review detailed information about what happened while debugging.

![open-logs](/static/img/open-logs.png)

### Setting a Breakpoint

1. Select the activity where you want execution to pause.
2. On the **Debug** ribbon, click **Breakpoints**, then select **Toggle Breakpoint** from the menu (or press `F9`).

   ![debug-breakpoint-set](/static/img/debug-breakpoint-set.png)

3. A red marker appears in the upper-left corner of the activity, confirming the breakpoint is set.

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

The Locals panel is only available while a debugging session is running, and opens automatically the first time you start one. If it isn't visible, look for the **Locals** tab next to **Properties**, **Workflow Outline**, and **AkaNinja**. It updates automatically after each activity executes, making it easy to confirm that your workflow is producing the values you expect.

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

Values in the Watches panel are refreshed automatically after each activity executes while debugging. Use **Delete** to remove the selected entry, **Clear** to remove every entry at once, or **Refresh** to re-evaluate all watched expressions.

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