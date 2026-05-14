---
id: agent-group
title: "Agent Group"
sidebar_label: "Agent Group"
sidebar_position: 2
description: "Agent Group documentation."
displayed_sidebar: centerSidebar
---
# Agent Group

An Agent Group is a grouping of agents that is used to deploy processes. The **Agent Group** page displays all previously created groups and enables you to manage Agents within them. The **Agent Group** page allows you to search and filter agent groups by name and description.

![image-20221031161241-16.png](/static/img/9a4345_image-20221031161241-16.png)

| No | Column/Label | Description |
| --- | --- | --- |
| 1 | **Action** | Available actions to manage the Agent Group. Included: *Edit : allows you to edit the details of each Agent Group* Delete: allows you to delete selected Agent Group By selecting the Checkbox corresponding to each Agent, the delete option will appear beside the Filter option and allow you to delete the Agent from Center  ! Selecting the Checkbox next to Action will select all Agent Group in display and allow you to bulk delete selected them |
| 2 | **Name** | The name of the Agent Group. You can click the name of the Agent Group the view its details |
| 3 | **Description** | The description of the Agent Group |
| 4 | **Created by** | You can see the username that created the Agent Group |

To view the details of the Agent Group, click eye button.

![image-20221031161320-17.png](/static/img/d8243b_image-20221031161320-17.png)

| No | Column/Label | Description |
| --- | --- | --- |
| 1 | **Name** | The name of the Agent Group. You can click the name of the Agent Group the view its details |
| 2 | **Description** | The description of the Agent Group |
| 3 | **Created by** | You can see the username that created the Agent Group |
| 4 | **Agent** | This section will list all Agents that are assigned to this Agent Group. Here, you can view details of each agent, including its version, status, machine name, machine username, type, description and the user who created it. |

## **a. Create/Edit an Agent Group**

To create a new agent group, you should click “Create New” button on the top right corner of the screen.

![image-20221031161529-18.png](/static/img/1baa08_image-20221031161529-18.png)

When you want to edit the Agent Group information, click the Edit button:

![image-20221031161612-19.png](/static/img/65f66d_image-20221031161612-19.png)

When you click on Create New/Edit button, the system will show a form for you to fill in. Details are in the table below.

![image-20221031161704-20.png](/static/img/fed62b_image-20221031161704-20.png)

| No | Column /Label | Description | Type | Maximum | Is Mandatory? | Input Requirement |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | **Name** | Enter the name of the agent group you want to create/edit | String | 100 char | Yes |  |
| 2 | **Description** | Enter the description of the agent group you want to create/edit | String | 255 char | No |  |
| 3 | **Agent** | Select the agent you want to add to the agent group that you are creating/editing. You can click the bin icon next to the Agent to remove it if needed. | Input searching | No limit | Yes | You can add many agents into agent group, but you can only add one by one |

Once all information is filled, hit **Save**.

## **b. Remove Agent Group**

To delete an agent group, you should click the Delete button of the agent group you want to remove from the Agent Group list.

![image-20221031162101-21.png](/static/img/c06301_image-20221031162101-21.png)

Alternatively, you can hit the checkbox before each Agent and the Delete option will appear next to the Filter option at the top. Click the Checkbox next to Action will allow you to select all Agents for deletion.
