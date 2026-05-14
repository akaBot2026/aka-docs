---
id: schedule
title: "Schedule"
sidebar_label: "Schedule"
sidebar_position: 3
description: "Schedule documentation."
displayed_sidebar: centerSidebar
---

Scheduling allows us to perform tasks in a preplanned way. You can execute tasks by commanding Agents to perform different schedules and times according to your needs. The Schedule page enables us to create new schedules. It also displays all previously created schedules, which can be further edited, enabled, or disabled. To access the Schedule page, click the Schedule tab in the left menu. After clicking, the system opens the Schedule Listing page that included all schedules we have created previously.

![image-20221028105802-35.png](/static/img/ee8f63_image-20221028105802-35.png)

| No | Column | Description |
| --- | --- | --- |
| 1 | Action | Options off all actions that can be performed on the schedule. This includes: Enable: Enable the current schedule Disabled: Disable the current schedule \* Delete: Delete the schedule. By selecting the Checkbox corresponding to each Schedule, the delete option will appear beside the Filter option and allow you to delete the Schedule.  ! Selecting the Checkbox next to Action will select all Schedule in display and allow you to bulk delete them. |
|  | Name | The name of the schedule. |
|  | Agent Group | Grouping of Agent for deployment purposes. |
|  | Workflow | The workflow that is going to be scheduled to execute. |
|  | Version | The version of the Package Repository that is published to akaBot Center shall be executed by the Schedule. For more details, visit the Package Repository section. |
|  | Status | Status of the schedule. There are 3 common statuses: SCHEDULED – When the schedule is set up but not yet executed. DISABLED – When the schedule is being disabled \* COMPLETED – When the schedule has been executed successfully |
|  | Start time | The first time the schedule is executed. |
|  | End time | The final run time of the schedule. |
|  | Next run time | The next run time of the schedule. |
|  | Last run time | The last run time of the schedule. |
|  | Trigger Details | The details of the recurrent time which the schedule will execute. |
|  | Created by | The user who created the schedule. |

## **a. View a schedule**

![image-20221028111221-36.png](/static/img/8fa96a_image-20221028111221-36.png)

Besides the General information above, the **Details** page also shows the **Parameters**and**Holiday settings** of said **Schedule**.

- Parameters:  From here, you can also see a list of **Agents** and **Tasks** associated with this **Schedule**. Details about Agents and Tasks shall be explained in their respective sections.

- Holiday settings: From here, you can see the holiday settings options for Agent: Run continuously/ Bypass holiday/ Postpone until the next work day.

## **b. Search Schedule**

To search for the **Schedule** you need, you have some options as below:

![image-20221028111813-37.png](/static/img/63ffef_image-20221028111813-37.png)

| No | Column /Label | Description | Type | Maximum | Input Requirement |
| --- | --- | --- | --- | --- | --- |
| 1 | Search box | Enter any keyword related to the schedule you want to search | String | No limit |  |
| 5 | Agent | Select the agent that is assigned to run the schedule you want to search | Dropdown list | No limit |  |
| 6 | Workflow | Select the workflow of the schedule you want to search | Dropdown list |  |  |

## **c. Create/Edit a Schedule**

To create a schedule, you click Create New button.

![image-20221028112517-41.png](/static/img/f8cd80_image-20221028112517-41.png)

When you want to edit the Schedule information, click the Edit button in the Action column.

![image-20221028112242-39.png](/static/img/f953ac_image-20221028112242-39.png)

Alternatively, you can access the Details page of said schedule and select the Edit button.

![image-20221028112318-40.png](/static/img/c03872_image-20221028112318-40.png)

When you click Create new/ Edit, a form will be shown up:

![image-20221028112620-42.png](/static/img/76ff3f_image-20221028112620-42.png)

| No | Column /Label | Description | Type | Maximum | Is Mandatory? | Input Requirement |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Name | Enter the name of the schedule you want to create/edit | String | 50 char | Yes |  |
| 2 | Workflow | Select the workflow you want for the schedule you are creating/editing | String | No limit | No |  |
| 3 | Time Zone | Select the time zone for the schedule. | Dropdown list |  | No |  |
|  | Trigger |  |  |  |  |  |
| 6 | Start Time | Select the time at which the schedule will start | Date & Time |  | Yes |  |
| 7 | End Time | Select the time at which the schedule will end | Date & Time |  | No |  |
| 8 | Recurrence | Select the cycle for the schedule: Minutes/ Hourly/ Daily/ Weekly/ Monthly/ Advance | SingleChoice |  | Yes |  |
| If you chose Once |  |  |  |  |  |  |
| 9 | Start Date | Select the date at which the schedule will start | Date |  | Yes |  |
| 10 | At | Select the specified time at which the schedule will start | Time |  | Yes |  |
| 11 | Tooltip | When will the sessions start? : See the result of scheduling |  |  |  |  |
| If you chose Minutes |  |  |  |  |  |  |
| 12 | Start Date | Select the date at which the schedule will start | Date |  | Yes |  |
| 13 | End Date | Select the date at which the schedule will End | Date |  | Yes |  |
| 14 | Every | Select the exact cycle for the schedule by minutes | SingleChoice |  | No |  |
| 15 | Tooltip | When will the sessions start? : See the result of scheduling |  |  |  |  |
| If you chose Hourly |  |  |  |  |  |  |
| 16 | Start Date | Select the date at which the schedule will start | Date |  | Yes |  |
| 17 | End Date | Select the date at which the schedule will End | Date |  | Yes |  |
| 18 | Every...hours | Select the exact cycle for the schedule by hours | Int32 | 23 hours | No | Greater than 0 |
|  | Tooltip | When will the sessions start? : See the result of scheduling |  |  |  |  |
| If you chose Daily |  |  |  |  |  |  |
| 19 | Start Date | Select the date at which the schedule will start | Date |  | Yes |  |
| 20 | End Date | Select the date at which the schedule will End | Date |  | Yes |  |
| 21 | At | Select the specified time at which the schedule will start | Time | 23 hours, 59 minutes | Yes |  |
| 22 | Tooltip | When will the sessions start? : See the result of scheduling |  |  |  |  |
| If you chose Weekly |  |  |  |  |  |  |
| 23 | Start Date | Select the date at which the schedule will start | Date |  | Yes |  |
| 24 | End Date | Select the date at which the schedule will End | Date |  | Yes |  |
| 25 | Everyday at | Select the specified time at which the schedule will start | Time | 23 hours, 59 minutes | Yes |  |
| 26 | Every week on:  Monday Tuesday Wednesday Thursday Friday Saturday Sunday | Select the exact cycle for the schedule by hours, minutes and days. | Multiple Choice |  | No |  |
| 27 | Tooltip | When will the sessions start? : See the result of scheduling |  |  |  |  |
| If you chose Monthly |  |  |  |  |  |  |
| 28 | Start Date | Select the date at which the schedule will start | Date |  | Yes |  |
| 29 | End Date | Select the date at which the schedule will End | Date |  | Yes |  |
| 30 | At | Select the specified time at which the schedule will start | Time | 23 hours, 59 minutes | Yes |  |
| 31 | On | Select exact day in a month | Date | SingleChoice | Yes |  |
| 32 | Of | Choose exact months in a year | Month | Multiple Choice | Yes |  |
| If you chose Advance |  |  |  |  |  |  |
| 33 | Cron Expression | A string comprised of 6 or 7 fields separated by white space allows users to create a CronTrigger to trigger a schedule that recurs based on calendar. | String | No limit | No | Valid syntax of cron expression |
| Execution Target |  |  |  |  |  |  |
| 34 | Search | Allow you to search for a specific Agent to assign the Schedule to. | String | No limit | No |  |
| 35 | Execution Target | Depends on the workflow that you chose, all the Robots that are related to the selected process are displayed by default. If you search for a specific Agent, the result will be displayed. | MultipleChoice |  | No |  |
| 36 | Parameters |  |  |  | No |  |

After filling the form, click the **Save** button to save it, and the schedule is created. You can also cancel the creation of the schedule by clicking the **Cancel** button.

* Disable/Enable a Schedule

To disable a schedule, click corresponding Action button and then select Disable.

![image-20221028143344-1.png](/static/img/5bdb2c_image-20221028143344-1.png)

After clicking, the system will ask for your confirmation to switch status:

![image-20221028143400-2.png](/static/img/9494f7_image-20221028143400-2.png)

When the schedule is disabled, the status of said schedule changes to **Disable**.

Similarly, to enable a schedule, click the corresponding **Action** button and then select **Enable**.

![image-20221028143503-3.png](/static/img/b2ba03_image-20221028143503-3.png)

## **d.Delete a Schedule**

To delete, you need to click The Action button of the corresponding Schedule and select the Delete button.

![image-20221028143538-4.png](/static/img/f0cd15_image-20221028143538-4.png)

Alternatively, you can hit the checkbox before each **Schedule** and the **Delete** option will appear next to the  
**Filter** option at the top. Click the **Checkbox** next to **Action** will allow you to select all displayed Schedule  
for delete.

![image-20221028143725-5.png](/static/img/337d8f_image-20221028143725-5.png)

After clicking, the system will allow you to delete and need your confirmation before deleting.

![image-20221028143745-6.png](/static/img/155ffd_image-20221028143745-6.png)

Hit **Delete** to complete the operation.

## **e. Holiday Settings**

Holiday setting allows us to set Holiday for agents.

![image-20221028170141-8.png](/static/img/95d7ea_image-20221028170141-8.png)

After setting holidays, when you create a new schedule, in Holiday settings tab of this form, you can choose a running option in Holiday for agents as below:

![image-20221028170318-9.png](/static/img/b1d2c8_image-20221028170318-9.png)
