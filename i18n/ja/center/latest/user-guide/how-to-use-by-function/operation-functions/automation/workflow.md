---
id: workflow
title: "Workflow"
sidebar_label: "Workflow"
sidebar_position: 2
description: "Workflow documentation."
displayed_sidebar: centerSidebar
---
# Workflow

A **Workflow** represents the association between a **Package** and an **Agent Group**. Each time a package is linked to an **Agent Group**, it is automatically distributed to all the Agent machines that belong to that **Agent Group**.

The Workflows page enables you to deploy an uploaded package to Agent Groups, manage previously created associations and keep all your workflows up to date. This helps you distribute packages on the Agent machines and execute works faster from the Tasks page. To access the Workflows page, you click the Workflow tab at the left menu. After clicking, the system shows the Workflow page listing all existed Workflow as below:

![image-20221028093815-5.png](/static/img/image-20221028093815-5.png)

| No | Column/Label | Description |
| --- | --- | --- |
| 1 | Action | Available actions to manage the Log of said Workflow. Includes: \* VIEW: allows you to be redirected to the Task Detail page. \* EDIT: allows you to edit the details of each Workflow \* DELETE: allows you to remove selected Workflow from Center  \*START JOB: Quickly create a new Task related to this workflow.  \*ADD SCHEDULE: Quickly add a schedule related to this workflow By selecting the Checkbox corresponding to each Workflow, the delete option will appear beside the Filter option and allow you to delete the Workflow ! Selecting the Checkbox next to Action will select all Workflow in display and allow you to bulk delete selected them |
| 2 | Workflow Name | The name of the Workflow. For organization purposes, it is best to create Workflow Name with the format: **Package Name\_Agent Group Name**. |
| 3 | Package Name | The name of the Package that was published to akaBot Center |
| 4 | Package Version | The version of the package that was published to akaBot Center. The package version will be decided when you choose the publish option in akaBot Studio. |
| 5 | Agent Group | Agent Group which the workflows will be deployed in |
| 6 | Description | The current version of Package’s published description |
| 7 | Created by | The user who creates this Workflow. |

## **a. View a Workflow**

To view a workflow, you can click the eye button.

![image-20221028095243-9.png](/static/img/image-20221028095243-9.png)

Besides all the general information displayed on the **Workflow Listing** page, the **Workflow Details** page also included Parameters and Machine Environment information generated when creating/editing the Workflow.

Furthermore, you can see the update history as well as a list of Tasks executed by said Workflow. Details regarding Tasks shall be explained in the Tasks section.

![image-20221028094255-6.png](/static/img/image-20221028094255-6.png)

Here, you can search the Task list by **Time, Name, State, Agent** of the tasks.

![image-20221028094515-7.png](/static/img/image-20221028094515-7.png)

Users can also delete executed instances of this Workflow by selecting the **Checkbox** at the beginning of each Task. The **Delete** button will show up.

![image-20221028094854-8.png](/static/img/image-20221028094854-8.png)

## **b. Search a Workflow**

![image-20221028095456-10.png](/static/img/image-20221028095456-10.png)

| No | Column /Label | Description | Type | Maximum | Input Requirement |
| --- | --- | --- | --- | --- | --- |
| 1 | Search box | Enter the name of the workflow you want to search | String | No limit |  |
| 2 | Agent Group | Select the agent group that the workflow you want to search is attached to | Input searching | No limit |  |
| 3 | Package | Select the package that the workflow you want to search is attached to | Input searching | No limit |  |

## **c. Create a Workflow**

To create a workflow, you click the **“Create New”** button at the top of the page.

![image-20221028095700-11.png](/static/img/image-20221028095700-11.png)

After clicking, the system shows a form allowing you to create the workflow.

![image-20221028100318-14.png](/static/img/image-20221028100318-14.png)

| No | Column /Label | Description | Type | Maximum | Is Mandatory? | Input Requirement |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Package Name | Select the package you want for the workflow you are creating | Input searching | No limit | Yes |  |
| 2 | Package Version | Depends on the package that you chose above Select the version of the package you chose | Dropdown list |  | Yes |  |
| 3 | Agent Group | Depends on the package version that you chose Select the agent group that you want to attach the workflow that you are creating to | Input searching | No limit | Yes |  |
| 4 | Description | Enter the description of the workflow you are creating/editing | String | 255 char | No |  |

Once filled in all the General information, you can add further **Parameters** and **Machine Environment** variables to the Workflow. You can add multiple variables, but you can only add one by one.

![image-20221028101129-17.png](/static/img/image-20221028101129-17.png)

| No | Column /Label | Description | Type | Maximum | Is Mandatory ? | Input Requirement |
| --- | --- | --- | --- | --- | --- | --- |
|  | Parameter Name | Enter the name of the parameter | String | 255 char | Yes |  |
|  | Type | Select the type of the parameter | Drop down list |  | Yes |  |
|  | Value | Depends on the type that you chose Enter/select the value of the parameter |  |  |  |  |
|  |  | If you chose string | String | 500 char | Yes |  |
|  |  | If you chose bool | Boolean, SingleChoice |  | Yes |  |
|  |  | If you chose integer | Int32 | 500 char | Yes |  |

![image-20221028101149-18.png](/static/img/image-20221028101149-18.png)

| No | Column /Label | Description | Type | Maximum | Is Mandatory? | Input Requirement |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Variable Name | Enter the name of the variable | String | 255 char | Yes |  |
| 2 | Type | Select the type of the variable | Dropdown list |  | Yes |  |
| 3 | Value | Depends on type that you chose Enter/select the value of the variable |  |  | Yes |  |
|  |  | If you chose string | String | 500 char | Yes |  |
|  |  | If you chose bool | Boolean, SingleChoice |  | Yes |  |
|  |  | If you chose integer | Int32 | 500 char | Yes |  |

## **d. Edit a Workflow**

To edit a workflow, you click the **Three dots** button, then click **Edit.**

![image-20221028095829-12.png](/static/img/image-20221028095829-12.png)

After clicking, the system shows a form allowing you to edit the info of the workflow.

![image-20221028100409-15.png](/static/img/image-20221028100409-15.png)

| No | Column /Label | Description | Type | Maximum | Is Mandatory? | Input Requirement |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Package Version | Depends on the package that you chose above Select the version of the package you chose | Dropdown list |  | Yes |  |
| 2 | Agent Group | Depends on the package version that you chose Select the agent group that you want to attach the workflow that you are creating to | Can not edit |  |  |  |
| 3 | Description | Enter the description of the workflow you are creating/editing | Can not edit |  |  |  |

Once edit package version, you can edit further **Parameters** and **Machine Environment** variables to the Workflow. You can add multiple variables, but you can only add one by one (same as above).

## **e. Delete a Workflow**

To delete, you click the **Three dots** button, then click Delete**.**

![image-20221028101551-19.png](/static/img/image-20221028101551-19.png)

Alternatively, you can select the checkbox before each Workflow and the Delete button will show up next to the Filter button. Tick the Checkbox next to Action will allow the user to select all displayed Agent for bulk delete.

![image-20221028101717-20.png](/static/img/image-20221028101717-20.png)

After clicking, a system will show a confirmation message for you to confirm.

![image-20221028101740-21.png](/static/img/image-20221028101740-21.png)
