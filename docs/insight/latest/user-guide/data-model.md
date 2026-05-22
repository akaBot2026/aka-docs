---
id: insight-data-model
title: Insight Data Model
sidebar_label: Data Model
sidebar_position: 2
description: Reference for Task, Workflow, Queue, and Robot dimensions and measures.
displayed_sidebar: insightSidebar
---
# Insights data model
This page details the **Task (Job),** **Workflow, Queue**, and **Robot (Agent)** data that Insights ingests.

## Task

|  |  |
| --- | --- |
| **Dimensions** | **Description** |
| Workflow Version | The version number of the workflow the task belongs to. |
| Agent Id | The row ID of the Agent that executed the job. |
| Job Id | The row ID of the job event in the Center database |
| Job State | The status of the job.  Insights only ingest terminal states (i.e. successful, stopped, and faulted) |
| Start Time | The time when execution of the job began. |
| End Time | The time when execution of the job is finished. |
| Job Source | The triggering event for job execution. |
| Workflow ID | The row ID of the workflow. |
| OU ID | The row ID of the organization unit in the Center database. |

|  |  |
| --- | --- |
| **Measures** | **Description** |
| Faulted Jobs | The number of jobs with the Faulted status. |
| Faulted Rate | The % of jobs with the Faulted status compared to the total number of jobs. |
| Workflows Ran | The number of workflows that have reached a final status of Successful, Faulted, or Stopped. |
| Success Rate | The % of jobs with the Successful status compared to the total number of jobs. |
| Successful Jobs | The number of jobs with the Successful status. |
| Total Run Time in hours | The total processing time of all jobs in hours. |

## Workflow

|  |  |
| --- | --- |
| **Dimensions** | **Description** |
| Workflow Id | The row ID of the workflow. |
| Workflow Name | The name of workflow. |
| Version | The version number of the workflow the task belongs to. |
| Package Id | The row ID of the package containing the workflow. |
| Environment Id | The numerical identifier of the environment. |
| Created By | The name of the user that created the workflow. |
| Created Date | The time the workflow was created. |
| OU ID | The row ID of the organization unit in the Center database. |

|  |  |
| --- | --- |
| **Measures** | **Description** |
| Workflow Count | The number of workflows |

## Queue

|  |  |
| --- | --- |
| **Dimensions** | **Description** |
| Queue Item Id | The auto-incremented row ID of the queue item in the Center database. |
| Queue Id | The row ID of the queue |
| Processing Status | The status of the queue item. The available options are:   * New * In Progress * Successful * Failed * Abandoned |
| Robot Id | The row ID of the robot that processed the queue item. |
| Created Date | The time the queue item was created. |
| Start Time | The time the agent began processing the queue item. |
| End Time | The time the agent finished processing the queue item. |
| Deadline | The latest date and time which the queue item must be processed by. If empty, it can be processed at any time. |
| Progress | Custom progress information for queue items with status InProgress. |
| Specific Data | A collection of key-value pairs containing custom data associated with the transaction. |
| Analytics Data | A collection of key-value pairs containing custom data for analytics purposes associated with the transaction. |
| Output Data | A collection of key-value pairs containing custom data upon successful processing associated with the transaction. |
| Exception | The type of exception thrown when processing fails. The available exception types are:   * ApplicationException * BusinessException |
| Exception Reason | The details of the exception thrown when processing fails. |
| OU Id | The numerical identifier of the Organization Unit. |

|  |  |
| --- | --- |
| **Measures** | **Description** |
| Avg Queue Wait Time in Seconds | How long it takes, on average, between when all queue items were created and when a agent started processing them. |
| Queue Count | The number of queues with data processed. |
| Queue Item Count | The number of queue items processed. |

## Robot

|  |  |
| --- | --- |
| **Data** | **Description** |
| Id | The numerical identifier of the Agent in the Center database. |
| Machine Id | The numerical identifier of the machine. |
| Machine Name | The Machine Name. |
| Created By | The name of the user that created the agent. |
| Created Date | The time the agent was created. |
| Agent Name | The name of the agent. |
| Robot Version | The version of the agent. |
| OU Id | The numerical identifier of the Organization Unit. |
| Environment Id | The numerical identifier of the environment. |

|  |  |
| --- | --- |
| **Measures** | **Description** |
| Robot Count | The number of agents |
| Robot Runtime | The total running time of all agents in hours. |
| Avg Robot Runtime per Day | How long it takes, on average, between when all robots were run in a day. |
