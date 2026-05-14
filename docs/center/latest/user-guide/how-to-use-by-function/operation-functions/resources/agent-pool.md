---
id: agent-pool
title: "Agent Pool"
sidebar_label: "Agent Pool"
sidebar_position: 3
description: "Agent Pool documentation."
displayed_sidebar: centerSidebar
---
# Agent Pool

Agent Pool allows you to create a "pool" of Agents related to a workflow. Anytime when the workflow need to be executed, the available Agent in the pool at that time will automatically execute the workflow so that we can make the best use of Agents.

## **a. Create an Agent Pool**

Step 1: Create a Workflow that the Agents in the "pool" will have to execute: Open **Automation**tab -> Click**Workflow** tab -> **Create new** workflow -> Fill the form with **exact Agent Group** you've created -> Save

Step 2: Create an Agent pool: Open **Resources** tab -> Click **Agent Pool** tab -> **Click Create New** (As the picture below):

![image-20221031170544-22.png](/static/img/165fc9_image-20221031170544-22.png)

Then a form will show up for you to fill:

![image-20221031170959-23.png](/static/img/4fb8d8_image-20221031170959-23.png)

| No | Column /Label | Description | Type | Maximum | Is Mandatory? | Input Requirement |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Name | Enter the name of Agent pool | String | 55 | Yes |  |
| 2 | Description | Enter the description of the workflow you are creating/editing | String |  | No |  |
| 3 | Workflow | Choose the workflow you have created | Dropdown list |  | Yes |  |
| 4 | Description | Enter the description of the workflow you are creating/editing | String | 255 char | No |  |

Next to general tab, there is **Callback Setup**. This feature allows you to send the output to a third party when the Agents in this pool complete a task.

![image-20221031171615-24.png](/static/img/dd3eef_image-20221031171615-24.png)

There are 3 sending options:

**No callback** as default: Do not send the ouput

**Restful API (POST Method)**: Send the output through the API you insert.

![image-20221101104556-1.png](/static/img/839f13_image-20221101104556-1.png)

**Webhook**: Send the output to the Webhook address

![image-20221101104633-2.png](/static/img/b0d4b5_image-20221101104633-2.png)
