---
id: role-management
title: "Role Management"
sidebar_label: "Role Management"
sidebar_position: 2
description: "Role Management documentation."
displayed_sidebar: centerSidebar
---
# Role Management

akaBot incorporates a role and permission-based access-control framework. Roles are sets of permission, which means that the permissions required to access and control specific Center resources are assigned to roles. In other words, Users were not given permission to certain resources but will get the permit through a role. Depending on their roles, users have access to the resources listed below:

| No | Resource |
| --- | --- |
| 1 | ADMIN RESOURCE |
| 2 | ENVIRONMENT RESOURCE |
| 3 | ROBOT RESOURCE |
| 4 | PACKAGE RESOURCE |
| 5 | WORKFLOW RESOURCE |
| 6 | JOB RESOURCE |
| 7 | SCHEDULE RESOURCE |
| 8 | ORGANIZATION UNIT RESOURCE |
| 9 | ASSET RESOURCE |
| 10 | QUEUE RESOURCE |
| 11 | LOG RESOURCE |

| Permissions | Category |
| --- | --- |
| None | Users won’t see the resource in the Center interface. |
| View | Users can see the resources but can’t interact with it. |
| Edit | Users can see and edit the resources. |
| Create | Users can see and create new resources. |
| Delete | Users can delete the resources. |

This Role Management page displays all available roles and allows admin to add or delete, as well as update roles’ information. After selecting the **Role Management** tab, the system displays the following page:

![image-20221101164359-16.png](/static/img/d407b3_image-20221101164359-16.png)

| No | Column | Description |
| --- | --- | --- |
| 1 | Action | Available actions to manage the User. Includes: Edit: allows users to view the details of the Roles. Delete: allows users to delete selected role |
| 2 | Name | The title of the role |

* Default Roles

In akaBot Center, there are 3 default roles:

- ROLE\_ADMIN

- ROLE\_USER

- ROLE\_ROBOT

**ROLE\_ADMIN**  
By default, the role has all the rights to all resources and this cannot be changed.

**ROLE\_USER**  
By default, the role has the following rights, but they can be edited.

![image-20230704162245-1.png](/static/img/27201e_image-20230704162245-1.png)

**ROLE\_ROBOT**  
By default, the role has the following rights, but they can be edited:

![image-20230704162317-2.png](/static/img/50ea0e_image-20230704162317-2.png)

## **a. Create/Edit a Role**

To create a new Role for your Center, click the Create New button at the top of the page:

![image-20221101164549-17.png](/static/img/aacffe_image-20221101164549-17.png)

To edit an existing Role, click the Edit button corresponding to the Role in the Action column.

![image-20221101164638-18.png](/static/img/c7556f_image-20221101164638-18.png)

When you click on**Create New/Edit** button, the system will show a form for you to fill in. Details in the table below

![image-20230704162458-3.png](/static/img/96e8d2_image-20230704162458-3.png)

| No | Column /Label | Description | Type | Maximum | Is Mandatory? | Input Requirement |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Name | Enter the role name | String | 100 char | Yes |  |
| 2 | Resources | You can only choose one option for each row Select the rights for the role | SingleChoice |  | Yes |  |

## **b. Delete a role**

To delete a role, you click the Delete button of the corresponding role.

![image-20221101164723-19.png](/static/img/f253ab_image-20221101164723-19.png)

A confirming pop-up will display. Hit Delete to complete the operation.
