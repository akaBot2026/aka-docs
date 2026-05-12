---
id: create-new-process
title: Create a New Process
sidebar_label: Create a New Process
sidebar_position: 2
displayed_sidebar: collaborationSidebar
---

# Create a New Process

Creating a new process in akaBot Center is the first step toward automating a business workflow that involves both bots and human participants. The Process Designer provides a visual canvas where you can define the sequence of tasks, decision points, and events that make up the process. Before building the flow, you need to set up the process metadata including its name, description, version, and the participants who will be involved in human tasks.

A well-defined process starts with understanding the business requirements: which steps can be handled entirely by a bot, which steps require human judgment or approval, and what data needs to flow between tasks. The akaBot Center process model supports mixed workflows where bot tasks and human tasks can be freely combined and connected through logical gateways to model real-world business rules.

Once a process is created and saved in draft state, it can be iterated upon before being published for operational use. Published processes can be triggered manually by operators, scheduled to run at specific times, or invoked automatically via API or system events. Version management ensures that updates to a process do not disrupt in-flight instances running on the previous version.

## Process Creation Steps

1. Navigate to **Human-Bot Collaboration** > **Process Design** in akaBot Center.
2. Click the **+ New Process** button at the top of the process list.
3. In the **Create Process** dialog, fill in the following fields:

   | Field | Description | Required |
   |---|---|---|
   | Process Name | A unique, descriptive name for the process | Yes |
   | Description | A brief explanation of what the process does | No |
   | Category | Organizational grouping for the process | No |
   | Version Label | Version identifier (e.g., `1.0.0`) | Yes |
   | Default Assignee Pool | The default pool of users for human tasks | No |
   | Start Condition | How the process is triggered (manual, scheduled, API) | Yes |

4. Click **Create** to open the Process Designer canvas with a default Start Event already placed.
5. Use the **Task Palette** on the left to drag Bot Tasks, Human Tasks, and Gateways onto the canvas.
6. Connect tasks by hovering over a task node until the connection arrow appears, then dragging to the next node.
7. Configure each task by clicking on it and editing its properties in the right-hand panel.
8. Define end conditions by connecting the last task to an **End Event** node.
9. Click **Save as Draft** to preserve your work, or **Publish** to make the process available for execution.

## Best Practices

- Keep process names concise but descriptive enough to identify the business function.
- Add a meaningful description so other team members understand the process purpose without needing to open the designer.
- Define participant roles and assignee pools before designing tasks to avoid reconfiguration later.
- Use sub-processes for repeated sequences of tasks to keep the main canvas clean.
- Test the process with a small group of users before publishing it organization-wide.
