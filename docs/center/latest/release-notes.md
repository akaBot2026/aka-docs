---
id: release-notes
title: Release Notes
sidebar_label: Release Notes
sidebar_position: 2
description: What's new, improved, and fixed in each version of Akabot Center.
displayed_sidebar: centerSidebar
---

# Akabot Center — Release Notes

## v4.0.0.12 — May 22, 2026

Click [this link](https://ws3.fpt-software.vn/s/al53MD2ASfXxcaO) to download.
Password: akaBot@12345

### New features

**Trigger**
- Added Agent Group condition.
- Added mutual exclusivity between Agent and Agent Group conditions (selecting one hides/disables the other).
- Enforced each condition to be selected only once.

**Export Logs**
- Switched export format from XLS to XLSX.
- Supported splitting exported logs into multiple files when the total row count exceeds 1 million (maximum rows per file is configurable).

### Updated

**Trigger**
- Hidden "Delete Task" activities when the "Running" state is selected.

**Export Logs**
- Removed the 65,000-row limit when exporting logs.

### Bug Fixes

**Trigger**
- Fixed trigger history display when trigger source has a queue component.
- Fixed workflow display when editing triggers with a Start Task component.

**Schedule**
- Fixed tab switching bug when selecting monthly triggers.
- Fixed schedule query when clean data is configured (cast data to text instead of bigint).

---

## v4.0.0.11 — Apr 10, 2026

Click [this link](https://ws3.akabot.com/s/JDQghjzb3kMUrXP) to download. 
### New features
- Added caching functionality to reduce requests to external Vault systems.

### Updated
- Updated the ability to edit the start time of schedules.
- Updated cache handling to automatically clear cache when exceptions occur during job state updates.

### Improved
- Improved the dropdown UI for selecting Secret Management when creating or editing an agent.

### Bug Fixes
- Fixed real-time Agent status display in high-availability mode.
- Fixed the issue where queue item status could not be changed when created by Agent Pool with Schedule as the source.
- Fixed the issue where Organization Unit renaming was not reflected on the frontend.
- Fixed the issue where excessive ActiveMQ connections were continuously created by Center.

---

## v4.0.0.5 — Apr 29, 2025.

### New features

**1. Core Enhancements**
- **[Added]** Enable/disable Agent Pool capability.
- **[Added]** Clear data function for TRIGGER_HISTORY table.
- **[Updated]** Name length limit for Schedule and Trigger expanded to 125 characters to support enterprise naming conventions.
- **[Updated]** Removal of workflow length validation + JSON command conversion option.
- **[Updated]** UI enhancement: show/hide password in login screen.
- **[Updated]** Translation improvements for JP side menu (Integration Service, Data Service, Automation Insights).
- **[Fixed]** Pagination + filtering not working across multiple screens.
- **[Fixed]** Job duplication state mismatch.

**2. Scheduling & Trigger Improvements**
- **[Added]** API call activity support in function triggers.
- **[Added]** Schedule/Trigger conditional logic.
- **[Added]** Scheduled job duplication cleanup mechanism.
- **[Added]** Forwarding logic from Scheduler to Agent Pool.
- **[Fixed]** Cannot delete schedule when related items exist (SQL Server).
- **[Fixed]** Cron Expression validation for recurrence (advanced case).

**3. Application Integration & API Enhancements**
- **[Added]** specificData & correctionId support in application integration API.
- **[Updated]** Sorting logic improvement in Application Integration UI.

**4. Agent Pool Enhancements**
- **[Fixed]** Agent Pool priority issue.
- **[Fixed]** Queue item reference overwritten when created from Agent Pool.

**5. License Management Enhancements**
- **[Updated]** License screen:
  - Deactivate button now supports per-license operation.
  - Added LMS license retrieval button.

**6. Security & Framework Upgrades**
- **[Updated]** quartz-scheduler version upgrade + dependency cleanup.
- **[Updated]** Google Guava upgraded (TPI security requirement).
- **[Updated]** Spring Boot upgraded 3.3.0 → 3.3.6.
- **[Updated]** Angular upgraded 14 → 17.
- **[Updated]** ShareUI upgraded to v3.0.
- **[Fixed]** Multiple security-related validations and dependencies.

**7. Database & System Compatibility**
- **[Added]** PostgreSQL database support.
- **[Updated]** Hibernate search reindex/refresh data function.
- **[Required]** Tomcat 10
- **[Required]** JDK 17

---

## v4.0.0.4 — Jan 24, 2025

### New features
 - **[Upgrade]** quartz-scheduler, guava library

 - **[Update]** sort for screen application integration

**Software requirements**
- Tomcat 10
- JDK 17

---

## v4.0.0.2 — Dec 20, 2024

### New features 
- **[Added]** Support LDAP integration.
- **[Added]** Clean duplicated jobs in scheduler.
- **[Added]** Provide data refresh function (reindex search data).

### Updated
- **[Updated]** Upgrade Spring Boot from version 3.3.0 to 3.3.6.

### Bug Fixes
- **[Fixed]** Validate Cron Expression in Case Recurrence Advanced.
- **[Fixed]** Resolve duplicate job issue when updating case job state.
- **[Fixed]** Resolve issue preventing role permission changes.

**Software requirements**

- Tomcat 10
- JDK 17

---

## v3.0.1.4 — May 21, 2024.

Click [this link](https://ws3.fpt-software.vn/s/etKbBjmxRyrBlbb) to download. 
Password: akaBot@12345 

### New features
- Add priority for agent pool
- Implement skip holiday settings for process schedule
- Improve performance for heartbeat, update job state and update job result api
- Update clean data dialog for scheduling
- Logout user if his account is deactivated
- Invalidate token when logout or change password
- Be able to throw http 400 if the pagination size is exceeded the maximum
- Remove unused robots.txt
- Remove unsecure CSP attributes
- Add more security response headers

### Bugs Fixed
- Fix process schedule postpone won't work
- Fix task run from agentpool won't update its state to its queue item after completed
- Fix CSP when show formio
- Fix can't stop task from center
- Fix security: validate api call jobstatisticsbyweekly
- Fix asset and queue don't have OU

---

## v3.0.1.3 — Sep 22, 2023
Click [this link](https://ws3.fpt-software.vn/s/UkAIk0eGDsLkbXJ) to download. Password: akaBot@12345

### New features
- [Messages] Enhance error messages to provide clearer descriptions for users.
- [Agent] Agents will now automatically connect to the Center in the event of changing the license key to switch to a different license model.
- Default organizational unit (OU) has been added for users authenticating via the API server.
- Add "Asset Type" and "Value Type" filters for more flexible asset exports.
- Add Queue Item - Retention Policy option to frequently clean up queue items.
- Add an option for Trigger->Task->State condition to trigger task during specific time range.
- Strengthened security measures.

### Feature availability
- [Trigger] When user configures activities for a trigger and selects "Send mail," the suggested email content will now include additional "Task Info" details.

### Bug fixes
- [Asset] Users were unable to update values in the "Value per agent" tab.
- [Process Builder] Users were unable to add a new item in the "To" field when designing a Notification task.
- [Home] The count of pending tasks displayed in the Collaboration Center section on the Menu bar was incorrect.
- [Schedule] When creating a schedule and editing the parameters of a workflow within that schedule, the system was still using the old parameters.
- [Trigger] Activities involving selecting a Start task and saving did not correctly save the edited data.
- [Asset] Information about the Assignee was not being saved, and occasionally, incorrect Assignee information (saving ID instead of the username) was being saved.
- [Agent Pool] Users were unable to create an agent pool without a token.
- [Queue] Not update queue item status after task completion.
- [Database] Migration failure in Oracle due to 20230703_app_integration_token.

---

## v3.0.1.2 

### New features
1. [Task] When a task is triggered to run by  Desktop Trigger, the source field of that task in the task list will display "Desktop Trigger."

2. [Task] Error message when creating a new task with multiple selected agent

3. [Process Design] When designing a long-running process, specifically designing a Bot task, the designer has the flexibility to assign that task to any agent without being restricted by organizational units (OUs).

4. [Collaboration center] The "start a process" screen was improved to be easier to use.

5. [Holiday Setting] Enhance holiday configuration with a more user-friendly approach. Users can select a specific start time when choosing the "Delay the task" option.

6. [Collaboration Center] Reposition certain components within the collaboration center to make it easier for users to perform actions.

7. [Collaboration Center] Add padding below the form in the collaboration center to improve the user interface.

8. [License] In the case of installing on Linux, it is sometimes encountered that the machine code is not captured during the generation of the activation key to be sent back to Aegis. However, there have been improvements made to ensure that users receive a message and can make adjustments accordingly.

9. [Task] Improve message content when deleting a running task.

**Feature availability**
1. [Asset] New asset type: object. This new asset type allows users to create a value by either adding parameters or using JSON.

2. [Login] Supporting Center login with an account from another REST API server through basic authentication using username and password.

3. [Assignee pool] Support for creating assignee pools is provided to ensure that any human task requiring execution can be assigned to a group of individuals with the same responsibility, ensuring task completion.

4. [Process Design] Assign to the requester: Support for setting up during the design of a process includes the option to add "assign to requester" when designing a human task. This allows the person running the process to be the one who performs the human task.

5. [Start process] Start a long-running process by Queue and Trigger on Center.

6. [New form design components] New components in Form Design: Support for three new types of components: Upload, Download, and Preview.
  - Upload: Allows users to upload files when performing tasks in the collaboration center.
- Download: Allows users to download files when performing tasks in the collaboration center.
 - Preview: Allows users to preview files when performing tasks in the collaboration center.

7. [Search in collaboration center] Search a task by the value in the form: In the collaboration center, users can not only search for tasks by task name or process name but also search for specific values displayed within the corresponding form for each task.

8. Mobile mode for collaboration center.

9. [Count pending task] Add a feature to count pending tasks and display a notification badge directly on the menu bar.

10. [2-level asset management]  Add a feature to manage assets with 2 levels.
- Level 1: The admin can assign one asset to an individual or a group of individuals. Only the assigned person or group can view and edit it.
- Level 2: The admin can assign a specific value within the asset set to an individual or a group of individuals. Only the assigned person or group can view and edit the value.

11. [Support Bot] Supporting the Bot to use the user's Center username/password to authenticate with other systems while automating.

12. [Trigger add] Update the trigger feature in the Center: 
-  Allows you to set up an activity to stop another running workflow.
- When creating a new trigger and selecting "Send Email" as an activity, it is suggested to add an "Error Info" field to display detailed error information when running the task. Additionally, supporting HTML formatting within the email allows users to format text (e.g., bold, italic) conveniently.

### Bug fixes
1. [Workflow] Duplicated output workflow parameters.

2. [Task] Can't stop running task.

3. [Info] Can't change password.

4. [Queue] Agents are not shown in the transaction table. 

5. [Productivity] Can not create a new schedule by clicking on a calendar in the productivity screen. 

6. [Collaboration Center] The count of pending tasks in the collaboration center is incorrect.

7. [Collaboration Center] When reloading the collaboration center, users are redirected to the homepage.

8. [Database] Encountering a database error when upgrading from Center version 2.x.x.x to Center version 3.x.x.x.

9. [Schedule] After setting a schedule and holiday for the bot, the next run time display appears to be incorrect.

10. [Queue] The queue automatically transitions to the Expired state even though it was previously in the Successfully state.

11. [Webhook] Not displaying all events in Subscribed Events.

12. [Report] Does not export correct data according to chosen Agent Group and Agent.

13. [Messages] Improve messages and notifications across multiple screens to deliver more accurate and helpful information to users.

14. [Workflow] In the Edit screen, the Package Version information is not displayed.

15. [Webhook] Not displaying all events in Subscribed Events.

16. [Task] Can't search partial numbers of the package version. 

17. [Webhook] can still be created even when there is no event.

--- 

## v3.0.0.0 
### New features
- [Update] Dashboard: Components on the dashboard were restructured.
- [Update] The UI was improved with a friendlier style.
- [Update] Add new schedule: Easier for you to create some special schedules without using Cron Expression. This screen covers more cases of schedule.

**Feature availability**
- [Add] Quick Navigation: From the dashboard, you can easily navigate to a page, package, agent, agent group, workflow, asset, queue, schedule,…
- [Add] "Quick Create" button: Quickly create a Task/ Schedule/Workflow/Trigger/Agent from the dashboard.
- [Add] Holidays setting: Set up holidays for Bots.
- [Add] Productivity tab:  View all Agent's activities on a calendar. So that you can create a schedule for Bots from here easily and make the best use of Agents.
- [Add] Token management: Easier to create a new token to access the API without sending account and password to the third party.
- [Add] Clean data: Delete the unnecessary data to improve the whole system's performance.
- [Add] Agent pool: Make the best use of Agents by setting a pool for them. The available Agents in the pool will be assigned automatically when a request was created.

### Bug fixes
- [Fix] Agent’s performance was improved.
- [Fix] Token expiration was fixed to be more flexible.

--- 

## v2.2.0.1 
### New features
- [Update] Upgrade angular version (from 5 to 11)

### Feature availability

- [Added] Import/export function for adding assets.
- [Add] Allow admin role to reset password
- [Add] Encrypt & decrypt credential (agent, asset)
- [Add] Enable OU audit

### Bug fixes

- [Fix] System will not log audit when change robot in schedule
- [Fix] Cannot delete package
- [Fix] Log message from agent incorrect order
- [Fix] Not refresh list OU of user when changed from browser other
- [Fix] Access webhook by OU
- [Fix] Checking the OU of the user on API
- [Fix] Security improvement

---

## v2.0.5.5
### New features
- [Updated] License activation is possible before StartDate.
- [Updated] Expand Info display field to much wider (2 col x 2 lines) on Task details page.
- [Updated] Expand Description, Release Note display field to much wider (2 col) on Package Repository details page.

### Feature availability

[Added] Connection confirmation function added to Agent setting screen.
[Added] Add information to the package repository.
[Added] Add RDP Settings for Agent.

### Bug fixes

- [Fixed] Fix Agent will not be selected when it's in the 3rd page onwards when clone task.
- [Fixed] Show error message Cannot read property jobKey/toString of undefined on the Task details page.
- [Fixed] Showing the wrong result when the filter starts time by minutes/hours. Similar error at Task, Log, entity-audit listing pages.

---

## v2.0.5.4
### New features
- [Added] License expires.
- [Added] Add filter to queue detail screen.
- [Added] Show Agent Version.
- [Added] The name of the user who created each process is displayed.
- [Added] Improve filters.
---

