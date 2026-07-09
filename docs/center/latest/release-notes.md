---
id: release-notes
title: Release Notes
sidebar_label: Release Notes
sidebar_position: 2
description: What's new, improved, and fixed in each version of Akabot Center.
displayed_sidebar: centerSidebar
---

# Akabot Center — Release Notes

## v4.0.0.14
**Updated**
- **[Schedule]**: Reworked the logic and UI for selecting Agent Group / Agent Pool when creating a schedule; only one can be selected at a time, and the two tabs have been merged into one.
- **[Agent Pool]**: Disabled workflow changes when editing an agent pool.

**Fixed**
- **[Package]**: Fixed a package upload bug to better support browsers when classifying the MIME type of uploaded files.
- **[Calendar]**:
  - Fixed missing agent schedule display on the calendar.
  - Fixed incorrect calendar display when holiday settings are configured.
- **[Schedule]**: Fixed incorrect information displayed in schedule detail (Last Run Time and Next Run Time).
- **[Agent Pool]**: Fixed a bug where an agent not belonging to the selected workflow's agent group could be incorrectly selected.

---
## v4.0.0.13
**Fixed**
- **[Security]**: Fixed incorrect Secret Manager Type handling (introduced in v4.0.0.11).

---
## v4.0.0.12
**Added**
- **[Trigger]**:
  - Added Agent Group condition.
  - Added mutual exclusivity between Agent and Agent Group conditions (selecting one hides/disables the other).
  - Enforced each condition to be selected only once.
- **[Export Logs]**:
  - Switched export format from XLS to XLSX.
  - Supported splitting exported logs into multiple files when the total row count exceeds 1 million (maximum rows per file is configurable).

**Updated**
- **[Trigger]**: Hidden "delete task" activities when the "running" state is selected.
- **[Export Logs]**: Removed the 65,000-row limit when exporting logs.

**Fixed**
- **[Trigger]**:
  - Fixed trigger history display when trigger source has a queue component.
  - Fixed workflow display when editing triggers with a Start Task component.
- **[Schedule]**:
  - Fixed tab switching bug when selecting monthly triggers.
  - Fixed schedule query when clean data is configured (cast data to text instead of bigint).

---
## v4.0.0.11
**Added**
- **[Core]**: Added caching functionality to reduce requests to external Vault systems.

**Updated**
- **[Schedule]**: Updated the ability to edit the start time of schedules.
- **[Core]**: Updated cache handling to automatically clear cache when exceptions occur during job state updates.
- **[Agent]**: Improved the dropdown UI for selecting Secret Management when creating or editing an agent.

**Fixed**
- **[Agent]**: Fixed real-time Agent status display in high-availability mode.
- **[Queue]**: Fixed the issue where queue item status could not be changed when created by Agent Pool with Schedule as the source.
- **[Organization]**: Fixed the issue where Organization Unit renaming was not reflected on the frontend.
- **[Core]**: Fixed the issue where excessive ActiveMQ connections were continuously created by Center.

---
## v4.0.0.10
**Added**
- **[Agent Pool]**: Added ability to create Triggers for Agent Pool (supports condition settings: Agent Pool, Queue Item Threshold, Queue Status).
- **[Trigger]**:
  - Added Alert Cooldown to prevent alert spamming.
  - Allowed configuring Activities when a trigger is fired.

**Fixed**
- **[Agent Pool]**: Fixed Agent Pool creation failure.
- **[Asset]**: Fixed Asset Assignment UI issue where the user selection dropdown menu remains greyed out when enabling "Assign all value to specific user".

---
## v4.0.0.9c
**Fixed**
- **[Export Logs]**: Fixed issue where exported logs were not sorted.

---
## v4.0.0.9
**Updated**
- **[License]**:
  - Introduced a new permission MANAGEMENT LICENSE for roles (roles granted with this permission can now view the License screen).
  - Updated license center library to support Windows 11.

**Fixed**
- **[Agent Pool]**: Resolved an issue where newly added agents in the Agent Pool did not automatically pick up or run jobs.

---
## v4.0.0.8
**Updated**
- **[License]**: Added display of license details (License → Get LMS License).
- **[Queue]**: Enhanced queue item search to support date-based filtering (based on created date) and status.
- **[User Management]**: Allowed updating user information for LDAP users (configurable via `enable-update-user: false`).
- **[Audit Log]**: Added role-based permission for viewing audit logs (previously restricted to admin only).

--- 
## v4.0.0.7
**Added**
- **[Security]**: Added MFA feature.

**Updated**
- **[Trigger]**:
  - Send mail service now uses mail-from instead of user mail.
  - Trigger's send email activity now supports HTML templates.

**Fixed**
- **[Security]**: Fixed security pentest issues (1 high, 1 medium and 4 low).
- **[Holiday]**: Fixed an issue where holidays could not be saved.

---
## v4.0.0.6
**Added**
- **[Security]**: Added integration with AWS Secrets Manager (config files, Agent's credential, Asset). 

**Updated**
- **[UI]**: New akaBot logo and favicon icon.

---
## v4.0.0.5
**Added**
- **[Agent Pool]**: Enable/disable Agent Pool capability.
- **[Trigger]**:
  - Added clear data function for trigger history.
  - API call activity support in function triggers.
  - Schedule/Trigger conditional logic.
- **[Schedule]**:
  - Scheduled job duplication cleanup mechanism.
  - Forwarding logic from Scheduler to Agent Pool.
- **[Integration]**: `specificData` & `correctionId` support in application integration API.
- **[Core]**: PostgreSQL database support.

**Updated**
- **[Schedule]**: Name length limit for Schedule and Trigger expanded to 125 characters to support enterprise naming conventions.
- **[Workflow]**: Removal of workflow length validation and JSON command conversion option.
- **[UI]**:
  - Show/hide password in login screen.
  - Translation improvements for JP side menu (Integration Service, Data Service, Automation Insights).
  - ShareUI upgraded to v3.0.
- **[Integration]**: Sorting logic improvement in Application Integration screen.
- **[License]**: Deactivate button now supports per-license operation and added LMS license retrieval button.
- **[Security]**:
  - quartz-scheduler version upgrade and dependency cleanup.
  - Google Guava upgraded to meet security requirements.
- **[Core]**:
  - Spring Boot upgraded 3.3.0 → 3.3.6.
  - Angular upgraded 14 → 17.
  - Hibernate search reindex/refresh data function.
- **[System Requirements]**: Tomcat 10 & JDK 17.

**Fixed**
- **[UI]**: Pagination and filtering not working across multiple screens.
- **[Task]**: Job duplication state mismatch.
- **[Schedule]**:
  - Cannot delete schedule when related items exist on SQL Server.
  - Cron Expression validation for advanced recurrence cases.
- **[Agent Pool]**: Agent Pool priority issue.
- **[Queue]**: Queue item reference overwritten when created from Agent Pool.
- **[Security]**: Multiple security-related validations and dependencies.

---
## v4.0.0.4
**Updated**
- **[Integration]**: Update sorting for Application Integration screen.
- **[System Requirements]**: Tomcat 10 & JDK 17.

**Fixed**
- **[Security]**: Update version quartz-scheduler, remove lib, and upgrade guava.

---
## v4.0.0.3
**Fixed**
- **[Schedule]**: Fix can't delete schedule when delete related items is true on SQL Server.
- **[System Requirements]**: Tomcat 10 & JDK 17.

---
## v4.0.0.2
**Added**
- **[Core]**:
  - Support LDAP integration.
  - Provide data refresh function (reindex search data).
- **[Schedule]**: Clean duplicated jobs in scheduler.

**Updated**
- **[Core]**: Upgrade Spring Boot from version 3.3.0 to 3.3.6.
- **[System Requirements]**: Tomcat 10 & JDK 17.

**Fixed**
- **[Schedule]**: Validate Cron Expression in Case Recurrence Advanced.
- **[Task]**: Resolve duplicate job issue when updating case job state.
- **[User Management]**: Resolve issue preventing role permission changes.

---
## v3.0.1.4
**Added**
- **[Agent Pool]**: Add priority for agent pool.
- **[Schedule]**:
  - Implement skip holiday settings for process schedule.
  - Update clean data dialog for scheduling.
- **[Security]**:
  - Logout user if their account is deactivated.
  - Invalidate token when logout or change password.
  - Be able to throw HTTP 400 if the pagination size exceeds the maximum.
  - Remove unused robots.txt and unsecure CSP attributes.
  - Add more security response headers.

**Updated**
- **[Core]**: Improve performance for heartbeat, update job state and update job result API.

**Fixed**
- **[Schedule]**: Fix process schedule postpone won't work.
- **[Task]**:
  - Fix task run from agent pool won't update its state to its queue item after completed.
  - Fix can't stop task from center.
- **[UI]**: Fix Content Security Policy (CSP) when showing forms.
- **[Security]**: Validate API call jobstatisticsbyweekly.
- **[Asset]**: Fix asset and queue missing Organizational Unit (OU).

---
## v3.0.1.3
**Added**
- **[Core]**: Default organizational unit (OU) has been added for users authenticating via the API server.
- **[Asset]**: Add "Asset Type" and "Value Type" filters for more flexible asset exports.
- **[Queue]**: Add Queue Item Retention Policy option to frequently clean up queue items.
- **[Trigger]**: Add an option for Trigger -> Task -> State condition to trigger task during specific time range.
- **[Security]**: Strengthened security measures.

**Updated**
- **[UI]**: Enhance error messages to provide clearer descriptions for users.
- **[Agent]**: Agents will now automatically connect to the Center in the event of changing the license key to switch to a different license model.
- **[Trigger]**: When user configures activities for a trigger and selects "Send mail," the suggested email content will now include additional "Task Info" details.

**Fixed**
- **[Asset]**:
  - Users were unable to update values in the "Value per agent" tab.
  - Information about the Assignee was not being saved, and occasionally, incorrect Assignee information was being saved.
- **[Process Builder]**: Users were unable to add a new item in the "To" field when designing a Notification task.
- **[UI]**: The count of pending tasks displayed in the Collaboration Center section on the Menu bar was incorrect.
- **[Schedule]**: When creating a schedule and editing the parameters of a workflow within that schedule, the system was still using the old parameters.
- **[Trigger]**: Activities involving selecting a Start task and saving did not correctly save the edited data.
- **[Agent Pool]**: Users were unable to create an agent pool without a token.
- **[Queue]**: Not update queue item status after task completion.
- **[Database]**: Migration failure in Oracle database.

---
## v3.0.1.2 
**Added**
- **[Asset]**:
  - New asset type "object" allows users to create a value by adding parameters or using JSON.
  - Add 2-level asset management (assign asset, and assign specific values within the asset).
- **[Security]**: Supporting Center login with an account from another REST API server through basic authentication.
- **[Task]**:
  - Support for creating assignee pools so a human task can be assigned to a group of individuals.
  - Start a long-running process by Queue and Trigger on Center.
- **[Process Design]**: Added option "assign to requester" when designing a human task so the person running the process will perform the human task.
- **[Collaboration Center]**:
  - New components in Form Design: Upload, Download, and Preview files.
  - Search a task by the specific value displayed within the form.
- **[UI]**:
  - Mobile mode for collaboration center.
  - Add a feature to count pending tasks and display a notification badge directly on the menu bar.
- **[Agent]**: Supporting the Bot to use the user's Center credentials to authenticate with other systems while automating.
- **[Trigger]**:
  - Allows you to set up an activity to stop another running workflow.
  - "Send Email" activity now suggests adding an "Error Info" field and supports HTML formatting.

**Updated**
- **[Task]**:
  - When a task is triggered by Desktop Trigger, the source field will display "Desktop Trigger."
  - Error message added when creating a new task with multiple selected agents.
  - Improve message content when deleting a running task.
- **[Process Design]**: When designing a Bot task for a long-running process, the designer can assign the task to any agent without OU restrictions.
- **[Collaboration Center]**:
  - The "start a process" screen was improved to be easier to use.
  - Repositioned components and added padding below forms to improve the user interface.
- **[Schedule]**: Enhance holiday configuration to allow selecting a specific start time when choosing the "Delay the task" option.
- **[License]**: Improved missing machine code errors during Linux license activation to provide better user guidance.

**Fixed**
- **[Workflow]**:
  - Duplicated output workflow parameters.
  - In the Edit screen, the Package Version information is not displayed.
- **[Task]**:
  - Can't stop running task.
  - Can't search partial numbers of the package version. 
- **[Security]**: Can't change password.
- **[Queue]**:
  - Agents are not shown in the transaction table.
  - The queue automatically transitions to the Expired state even though it was previously in the Successfully state.
- **[UI]**:
  - Can not create a new schedule by clicking on a calendar in the productivity screen.
  - Improve messages and notifications across multiple screens to deliver more accurate and helpful information.
- **[Collaboration Center]**:
  - The count of pending tasks in the collaboration center is incorrect.
  - When reloading the collaboration center, users are redirected to the homepage.
- **[Database]**: Encountering a database error when upgrading from Center version 2.x to 3.x.
- **[Schedule]**: After setting a schedule and holiday for the bot, the next run time display appears to be incorrect.
- **[Webhook]**:
  - Not displaying all events in Subscribed Events.
  - Can still be created even when there is no event.
- **[Report]**: Does not export correct data according to chosen Agent Group and Agent.

--- 
## v3.0.0.0
**Added**
- **[UI]**:
  - Quick Navigation allows navigating easily to a page, package, agent, workflow, asset, queue, or schedule from the dashboard.
  - "Quick Create" button allows quickly creating a Task, Schedule, Workflow, Trigger, or Agent from the dashboard.
  - Productivity tab shows Agent's activities on a calendar for easy scheduling and maximizing Agent usage.
- **[Schedule]**: Set up holidays for Bots.
- **[Security]**: Token management makes it easier to create tokens to access the API without sharing credentials.
- **[Core]**: Clean data deletes unnecessary data to improve system performance.
- **[Agent Pool]**: Set a pool for Agents to automatically assign requests to available Agents.

**Updated**
- **[UI]**: Components on the dashboard were restructured and improved with a friendlier style.
- **[Schedule]**: "Add new schedule" covers more edge cases and is easier to configure without using Cron Expression.

**Fixed**
- **[Agent]**: Agent performance was improved.
- **[Security]**: Token expiration was fixed to be more flexible.

--- 
## v2.2.0.1
**Added**
- **[Asset]**: Import/export function for adding assets.
- **[Security]**:
  - Allow admin role to reset password.
  - Encrypt and decrypt credentials (agent, asset).
  - Enable OU audit.

**Updated**
- **[Core]**: Upgrade Angular version (from 5 to 11).

**Fixed**
- **[Schedule]**: System will not log audit when changing robot in schedule.
- **[Package]**: Cannot delete package.
- **[Agent]**: Log message from agent incorrect order.
- **[Organization]**: Not refresh list of OU of user when changed from another browser.
- **[Webhook]**: Access webhook by OU.
- **[Security]**:
  - Checking the OU of the user on API.
  - Security improvements.

---
## v2.0.5.5
**Added**
- **[Agent]**:
  - Connection confirmation function added to Agent setting screen.
  - Add RDP Settings for Agent.
- **[Package]**: Add information to the package repository.

**Updated**
- **[License]**: License activation is possible before StartDate.
- **[Task]**: Expand Info display field on Task details page.
- **[Package]**: Expand Description, Release Note display field on Package Repository details page.

**Fixed**
- **[Task]**:
  - Fix Agent not being selected when it's in the 3rd page onwards when clone task.
  - Show error message "Cannot read property jobKey/toString of undefined" on the Task details page.
- **[UI]**: Showing the wrong result when the filter starts time by minutes/hours on Task, Log, and entity-audit listing pages.

---
## v2.0.5.4
**Added**
- **[License]**: License expires.
- **[Queue]**: Add filter to queue detail screen.
- **[Agent]**: Show Agent Version.
- **[Task]**: The name of the user who created each process is displayed.
- **[UI]**: Improve filters.
---
