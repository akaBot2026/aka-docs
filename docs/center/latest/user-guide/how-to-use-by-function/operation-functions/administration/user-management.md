---
id: user-management
title: "User Management"
sidebar_label: "User Management"
sidebar_position: 1
description: "User Management documentation."
displayed_sidebar: centerSidebar
---
#  User Management

A user is an entity with access-dependent capabilities whose perspective and control of akaBot Center are contingent on the roles they have been designated. Users can be created in the Center.

This page displays all available users and allows admin to add or delete, as well as update users’ information.

After selecting the **User management** tab, the system displays the following page:

![image-20221101163259-10.png](/img/348667_image-20221101163259-10.png)

| No | Column | Description |
| --- | --- | --- |
| 1 | Action | Available actions to manage the User. Includes: Edit: allows users to view the details of the User. Delete: allows users to delete selected User. |
| 2 | Login | The username credentials that will be used to sign in. |
| 3 | Email | The email address of the user. Can be used to log in to akaBot Center. |
| 4 | Status | The status of the user. Can be Activated or Deactivated. |
| 5 | Language | The display language of akaBot Center for user. |
| 6 | Profiles | The role(s) assigned to the user. There are 3 default roles: ROLE\_ADMIN ROLE\_USER \* ROLE\_ROBOT A user can have more than one role. Details about permission for each role will be explained in Role Management. |
| 7 | Created date | The date when the user is created |
| 8 | Modified by | The last person who modified the user’s information |
| 9 | Modified date | The last date on which the user’s information was modified |

## **a. View a User**

To view a user’s details, click on the **eye** button.

![image-20221101163356-11.png](/img/7501e4_image-20221101163356-11.png)

![image-20221101163519-12.png](/img/579bc1_image-20221101163519-12.png)

| No | Column | Description |
| --- | --- | --- |
|  | Login | The username credentials that will be used to sign in. |
|  | Status | The status of the user. Can be Activated or Deactivated. |
|  | First name | The first name of the user. |
|  | Last name | The last name of the user. |
|  | Email | The email address of the user. Can be used to log in to akaBot Center. |
|  | Language | The display language of akaBot Center for each user. |
|  | Created by | The user who created this user. |
|  | Created date | The date when the user is created. |
|  | Modified by | The last person who modified the user’s information. |
|  | Modified date | The last date on which the user’s information was modified |
|  | Profiles | The role(s) assigned to the user. There are 3 default roles: ROLE\_ADMIN ROLE\_USER \* ROLE\_ROBOT A user can have more than one role. Details about permission for each role will be explained in the Role Management section. |

## **b. Create/Edit a User**

To create a new user, click the **Create new** at the top of the **User** page.

![image-20221101163616-13.png](/img/36cead_image-20221101163616-13.png)

When you click on**Create New/Edit** button, the system will show a form for you to fill in. Details in the table below.

![image-20221101163638-14.png](/img/5d2288_image-20221101163638-14.png)

| No | Column /Label | Description | Type | Maximum | Is Mandatory? | Input Requirement |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Login | Enter the username used to log in to the system of the user you are creating/editing | String | 50 | Yes |  |
| 2 | First Name | Enter the first name of the user | String | 50 | Yes |  |
| 3 | Last Name | Enter the last name of the user | String | 50 | Yes |  |
| 4 | Email | Enter the email of the user | String | 100 | Yes |  |
| 5 | Password | Only available in create new Enter the password of the user | String | 50 | Yes |  |
| 6 | Confirm Password | Only available in create new Reenter the password of the user | String | 50 | Yes |  |
| 7 | Activated | Select this if you want this user to be activated upon creation | Check Box |  | No |  |
| 8 | Language | Select the language of the user | Dropdown list, SingleChoice |  | Yes |  |
| 9 | Profiles | Select roles for the user | MultipleChoice |  | Yes |  |

After filling the form, click the **Save** button to save it, and the User is created. You can also cancel the creation of the queue by clicking the **Cancel** button.

## **c. Delete a User**

To delete a User, you click the Delete button of the corresponding User.

![image-20221101163711-15.png](/img/c91ba3_image-20221101163711-15.png)

A confirming pop-up will display. Hit **Delete** to complete the operation.
