---
id: get-task
title: "Get Task"
sidebar_label: "Get Task"
sidebar_position: 1
description: "get-task activity documentation."
displayed_sidebar: activitiesSidebar
---

# Get Task

RCA.Activities.Core.GetTask

## **Description**

With this activity, you can get a task from the system. Retrieves a list of Center tasks according to a custom filter, using the Center API (`GET /api/jobs-processing/v1`).

The activity offers two interface modes to configure your search filters: the visual **Filter Builder** and the **Where Condition** editor.

![get-task-filter-builder](/static/img/get-task-filter-builder.png)

![get-task-where-condition](/static/img/get-task-where-condition.png)

(* for Mandatory)

## **In the body of activity**

* **Where** – Click here to specify the filter conditions used to retrieve tasks. You can use Filter Builder or Where Condition to configure the filter logic.

### Filter modes

Use the swap button next to **Where** to switch between the two modes:

| Mode | How to use | What is sent to Center |
|---|---|---|
| **Filter Builder** (default) | Click the Where field to open the visual builder. Add one or more conditions (Field / Operator / Value), and choose **AND** or **OR**. | Activity builds the query from the conditions plus **Page**, **Size**, and **Newest First**. |
| **Where Condition** | Switch to Where Condition and type (or bind) the full API query string. | The string is appended to `/api/jobs-processing/v1?` as-is. **Page**, **Size**, and **Newest First** are not applied in this mode — include `page`, `size`, and `sort` in the query yourself if needed. |

**Filter Builder rules**

* At least one filter condition is required.
* **AND** – each field name can appear only once.
* **OR** – all conditions must use the same field. Supported OR fields: `state`, `environmentId`, `robotId`, `workflowId`, `source`, `scheduleId`.

**Filter Builder fields**

| Display name | Field name | Type |
|---|---|---|
| State | `state` | String |
| Environment ID | `environmentId` | Int32 |
| Robot ID | `robotId` | Int32 |
| Workflow ID | `workFlowId` | Int32 |
| Schedule ID | `scheduleId` | Int32 |
| Source | `source` | String |
| Start Time | `startTime` | DateTime |
| End Time | `endTime` | DateTime |
| Created Date | `createdDate` | DateTime |

**Where Condition example**

```text
page=0&size=10&sort=id,desc&state=PENDING&state=RUNNING&fromDate=2026-07-01T00:00:00.000Z&toDate=2026-07-31T23:59:59.000Z
```

## **Properties**

**Common**

* **Continue On Error (Boolean)** - Specifies to continue executing the remaining activities even if the current activity failed. Only boolean values (True, False) are supported.
* **Timeout MS (Int32)** - The maximum time (in milliseconds) to wait for the activity to complete before throwing an error. If the timeout is reached, the activity stops execution. The default value is 30000 (milliseconds).

**Input**

* **Page (Int32)** - The page number of the tasks to retrieve. Default is `0`. Used in Filter Builder mode. Must be greater than or equal to `0`.
* **Size (Int32)** - The number of tasks to retrieve per page. Default is `10`. Used in Filter Builder mode. Must be greater than `0`.
* **Where Condition (String)** - Specifies the filtering conditions used to retrieve tasks. Used when the activity is switched to Where Condition mode. Example: `page=0&size=10&sort=id,asc&state=PENDING`.

**Misc**

* **Public (Checkbox)** - If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.

**Options**

* **Newest First (Boolean)** - Set to `True` to sort tasks by `id` in descending order (`sort=id,desc`). Set to `False` to sort in ascending order (`sort=id,asc`). Default is `True`. Used in Filter Builder mode only.

**Output**

* **Result Tasks (`OutArgument<IEnumerable<TaskModel>>`)** - The retrieved tasks.

## **State**

Filter field: `state`.

Valid values (`JobState`). The activity sends them to Center in **UPPERCASE**:

| Value | Description |
|---|---|
| `PENDING` | Waiting to run |
| `RUNNING` | Currently executing |
| `STOPPING` | Stop requested |
| `TERMINATING` | Being terminated |
| `FAULTED` | Failed |
| `SUCCESSFUL` | Completed successfully |
| `STOPPED` | Stopped |

Examples:

```text
state=PENDING
state=RUNNING
```

With **OR** (Filter Builder) or repeated parameters (Where Condition), you can request multiple states, for example `state=PENDING&state=RUNNING`.

> Note: The Center API may default to `PENDING,RUNNING` when `state` is omitted. This activity does not add a default state — only the filters you configure are sent.

## **Source**

Filter field: `source`.

Valid values (`JobSource`). The activity sends them to Center in **UPPERCASE**:

| Value | Description |
|---|---|
| `MANUAL` | Started manually |
| `SCHEDULE` | Started by schedule |
| `AGENT` | Started from Agent |
| `CONFIRMATION` | Confirmation flow |
| `TRIGGER` | Trigger |
| `PROCESS` | Process |
| `POOL` | Agent Pool |
| `DESKTOP_TRIGGER` | Desktop trigger |

Example:

```text
source=SCHEDULE
```

## **Date / time format**

Date filters: **Start Time** (`startTime`), **End Time** (`endTime`), **Created Date** (`createdDate`).

In Filter Builder mode, these fields are mapped to the Center query parameters:

* `fromDate`
* `toDate`

**Format sent to Center (UTC):**

```text
yyyy-MM-ddTHH:mm:ss.fffZ
```

Examples:

```text
2026-07-15T00:00:00.000Z
2026-07-31T14:30:00.000Z
```

If you pass a `DateTime` / `DateTimeOffset` value in Filter Builder, the activity converts it to UTC and formats it as above. `DateTimeKind.Unspecified` is treated as local time, then converted to UTC.

Operator mapping (Filter Builder, **AND**):

| Field | Operator | API parameter |
|---|---|---|
| `startTime` / `createdDate` | `EQUAL` or `GREATER_THAN*` | `fromDate` |
| `startTime` / `createdDate` | `LESS_THAN*` | `toDate` |
| `endTime` | `EQUAL` or `LESS_THAN*` | `toDate` |
| `endTime` | `GREATER_THAN*` | `fromDate` |

If both `fromDate` and `toDate` are set and `toDate` is earlier than `fromDate`, the activity throws a validation error.

Where Condition example:

```text
page=0&size=10&sort=id,desc&fromDate=2026-07-01T00:00:00.000Z&toDate=2026-07-31T23:59:59.000Z
```

## **Where to get IDs on Center**

Use these numeric IDs in Filter Builder or Where Condition:

| Filter (designer) | API query parameter | Where to find it on Center |
|---|---|---|
| Environment ID | `environmentId` | **Agent → Environments**. Open the environment detail page; take the ID from the URL, or from the environments list API. |
| Robot ID | `robotId` | **Agent → Agents / Robots**. Open the agent detail page; take the ID from the URL, or from the agents list API. |
| Workflow ID | `workflowId` | **Automation → Workflows**. Open the workflow detail page; take the ID from the URL, or from the workflows list API. |
| Schedule ID | `scheduleId` | **Automation → Schedules**. Open the schedule detail page; take the ID from the URL, or from the schedules list API. |

Other ways to obtain IDs:

1. **Center UI URL** – open the detail page of the Environment / Agent / Workflow / Schedule and read the numeric ID from the browser URL.
2. **Swagger / Admin API docs** – open `{CenterUrl}/#/admin/docs`, call the related list API, and read the `id` field.
3. **From a previous Get Task result** – `TaskModel` already exposes:
   * `EnvironmentId`
   * `RobotId`
   * `WorkFlowId`
   * `ProcessSchedulesId` (schedule)

Examples:

```text
environmentId=12
robotId=45
workflowId=108
scheduleId=33
```

## **Example**

**Filter Builder**

```text
Get Task
    Page         = 0
    Size         = 10
    Newest First = True
    Where        = State Equal PENDING
                   AND Environment ID Equal 12
    Result Tasks = tasks
```

**Where Condition**

```text
Get Task
    Where Condition = "page=0&size=10&sort=id,desc&state=PENDING&environmentId=12"
    Result Tasks    = tasks
```
