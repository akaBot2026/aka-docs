---
id: set-schedule
title: Set Schedule
sidebar_label: Set Schedule
sidebar_position: 5
displayed_sidebar: collaborationSidebar
---

# Set Schedule

The Set Schedule feature in akaBot Center allows you to configure a process to start automatically at specific times or on a recurring basis without manual intervention. Scheduling is particularly useful for batch processes, end-of-day reconciliations, periodic report generation, or any workflow that needs to run at consistent intervals aligned with business cycles.

Schedules are defined using either a simple time-picker interface for common patterns (daily, weekly, monthly) or a cron expression for advanced scheduling requirements. Multiple schedules can be attached to a single process, enabling complex trigger patterns such as running a process every weekday at 8:00 AM and additionally on the last day of each month. Each scheduled run creates an independent process instance, so concurrent executions are fully supported.

The scheduling engine respects time zones, allowing global organizations to trigger processes in the correct local business hours for each region. Schedule status can be enabled or disabled at any time without modifying the process itself, making it easy to temporarily suspend automated runs during maintenance windows or holidays.

## Schedule Configuration Options

| Option | Description |
|---|---|
| Schedule Name | A descriptive name for this schedule trigger |
| Process | The published process to be triggered |
| Frequency | One-time, minutely, hourly, daily, weekly, monthly, or custom cron |
| Start Date | The date from which the schedule becomes active |
| End Date | Optional date after which the schedule stops triggering |
| Time Zone | The time zone used to interpret the schedule time |
| Max Concurrent Runs | Maximum number of simultaneous instances allowed from this schedule |
| Input Variables | Default values for process input variables passed at start |

## Setting Up a Schedule

1. Open **Human-Bot Collaboration** > **Process Design** and navigate to the **Schedules** tab.
2. Click **+ New Schedule**.
3. Enter a **Schedule Name** and select the target **Process** from the dropdown.
4. Choose a **Frequency** option:
   - For simple patterns, use the **Visual Picker** (e.g., Every day at 09:00).
   - For advanced patterns, toggle **Use Cron Expression** and enter a valid cron string (e.g., `0 9 * * 1-5` for weekdays at 9 AM).
5. Set the **Start Date** and, if needed, the **End Date**.
6. Select the appropriate **Time Zone**.
7. Optionally provide **Input Variables** that the process will receive on each scheduled run.
8. Toggle the schedule to **Enabled**.
9. Click **Save**.

## Common Cron Expression Examples

```
# Every day at 8:00 AM
0 8 * * *

# Every Monday at 9:00 AM
0 9 * * 1

# Every weekday (Mon-Fri) at 6:00 PM
0 18 * * 1-5

# First day of every month at midnight
0 0 1 * *

# Every 30 minutes
*/30 * * * *
```
