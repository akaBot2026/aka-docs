---
id: agent-pool
title: Agent Pool
sidebar_label: Agent Pool
sidebar_position: 2
description: "How to use Center’s Agent Pool documentation."
displayed_sidebar: centerSidebar
---
# How to use Center’s Agent Pool

An **Agent Pool** lets you run one workflow on a group of Agents without choosing a specific Agent for each run. Center keeps a queue of requests for the pool, and the next available Agent in the pool picks up each request. Use an Agent Pool when you need to process many requests of the same workflow, for example requests that come from another system, or runs that repeat on a fixed time.

## How the Agent Pool works

* You create an Agent Pool with one workflow and one or more Agents.
* You send a request to the pool. Each request becomes a queue item.
* An available Agent in the pool takes the queue item and runs the workflow. If all Agents are busy, the queue item waits in **New** status.

## Agent Pool and Agent Group

An Agent Group and an Agent Pool both contain Agents, but they have different roles:

| | Agent Group | Agent Pool |
| --- | --- | --- |
| Role | Groups Agents so that a workflow can be deployed to them. | Groups the Agents that run one workflow, so that an available Agent picks up each request. |
| Relation to the workflow | A workflow links a package to an Agent Group. The package is distributed to all Agent machines in that group. | You create a pool for one workflow. The Agents in the pool must belong to the Agent Group of that workflow. |
| In a Schedule | Available as a **Target Type** in the *Create a new schedule* dialog. | Available as a **Target Type** in the *Create a new schedule* dialog, if your Center supports it (see Option A in Step 3). |

In short, the Agent Group is where the workflow is deployed, and the Agent Pool is the group of those Agents that takes requests for the workflow.

To set up and use an Agent Pool, follow these steps:

1. **Prerequisites**: prepare what you need.
2. **Create Agent Pool**: required for every deployment.
3. **Trigger the Agent Pool**: choose **one** of the two options below.
    * **Option A: Schedule**: not available on Center Cloud.
    * **Option B: 3rd-party client**: available on Center Cloud and on-premises.

Option A and Option B are two alternative ways to send requests to the pool. They are not consecutive steps. For help choosing, see the beginning of Step 3.

:::note
**Using Center Cloud?** On Center Cloud, an Agent Pool can currently be triggered only through an HTTP request. Follow Step 1, Step 2, and Option B in Step 3. Skip Option A.
:::

## 1. Prerequisites

Before using the Agent Pool feature, ensure that the following requirements are met:

* akaBot Center is installed and accessible.
* If you trigger the Agent Pool through HTTP requests (Option B), you also need:
  + Postman or another HTTP client.
  + A managed token. Create it by following the instructions in the Managed Token Guideline document.

## 2. Create Agent Pool

An **Agent Pool** is a group of akaBot Agents that are configured to execute a specific workflow. All Agents within the same pool should have identical environments to ensure consistent and stable execution.

To create a new Agent Pool in akaBot Center, navigate to: **Agent > Agent Pool > Create New**

![1771820288041-812.png](/static/img/72eef5_1771820288041-812.png)

In the *Create Agent Pool* dialog:

1. Enter a meaningful name for the Agent Pool.
2. Select the workflow that the Agents will execute. The Agents that you select in item 4 below must belong to the Agent Group of this workflow.
3. In the **Token** dropdown list, select a managed token that will be used to invoke HTTP requests for pushing messages to the Agent Pool.  
    *Select a token if you plan to trigger the Agent Pool through HTTP requests (Option B). On Center Cloud, select a token. On-premises, this field is optional if you plan to trigger the Agent Pool only through the Center’s Schedule feature (Option A).*
4. Select one or more Agents that will be responsible for executing the workflow.

![1771820332495-836.png](/static/img/6e0ce6_1771820332495-836.png)

After creation, the new pool will appear in the Agent Pool list.

![1771820349412-497.png](/static/img/1efb90_1771820349412-497.png)

You can click on an Agent Pool to view its detailed configuration.

![1771820364096-384.png](/static/img/9420bd_1771820364096-384.png)

## 3. Trigger the Agent Pool

After you create the Agent Pool, choose **one** of the two options below to send requests to it. The options are alternatives, not consecutive steps.

| | Option A: Schedule | Option B: 3rd-party client |
| --- | --- | --- |
| Use it when | The workflow must run automatically at a fixed time or interval. | Another system or tool must start the workflow on demand. |
| How it works | Center creates a queue item at each scheduled time. | The client sends an HTTP request, and Center creates a queue item. |
| Managed token | Not required | Required |
| Availability | On-premises, Center v4.0.0.5 or later. Not available on Center Cloud. | Center Cloud and on-premises |

:::note
On Center Cloud, the **Execution Target** tab in the *Create a new schedule* dialog lists only individual Agents, and there is no Agent Pool to select. In this case, use Option B.

![agent-pool-schedule-cloud-execution-target.png](/static/img/agent-pool-schedule-cloud-execution-target.png)

To check, open **Automation > Schedule > Create New** and select the **Execution Target** tab. If the **Target Type** list contains **Agent Pool**, you can use Option A.
:::

### Option A: Trigger by using Schedule (on-premises only)

Use this option when the workflow must run automatically at a fixed time or interval. You do not need a managed token for this option. This option is not available on Center Cloud. If you use Center Cloud, go to Option B.

You can trigger an Agent Pool automatically using akaBot Center’s scheduling feature.

Navigate to: **Automation > Schedule > Create New**

![1771820395129-275.png](/static/img/a4cfc5_1771820395129-275.png)

In the *Create a new schedule* dialog:

1. Enter a meaningful name for the schedule.
2. Select the target workflow. This workflow must be the same as the one configured in the Agent Pool.
3. Select the time zone.
4. In the **Trigger** tab, configure the time recurrence to define how frequently the schedule will run.

![agent-pool-schedule-trigger.png](/static/img/agent-pool-schedule-trigger.png)

Next, navigate to the **Execution Target** tab:

* The **Target Type** list has two options: **Agent Group** and **Agent Pool**. Select **Agent Pool**, and then select the Agent Pool that you want to trigger.
* Click **Save** to complete the configuration.

![agent-pool-schedule-target-type.png](/static/img/agent-pool-schedule-target-type.png)

After the schedule is created, it will appear in the Schedule list.

![1771820452793-860.png](/static/img/2e595b_1771820452793-860.png)

#### Execution Behavior

When the schedule is triggered:

* A new queue item is created.
* One available Agent in the pool will pick up the queue item and start execution.
* While the task is running, the queue item status is **InProgress**.
* If no Agent is available, the queue item remains in **New** status until an Agent becomes available.
* After execution:
  + The status becomes **Successful** if completed successfully.
  + The status becomes **Failed** if a business exception occurs.

![1771820474256-428.png](/static/img/559350_1771820474256-428.png)

![1771820485476-954.png](/static/img/cc9915_1771820485476-954.png)

### Option B: Trigger by using a 3rd-party client (Center Cloud and on-premises)

Use this option when another system or tool must start the workflow on demand. On Center Cloud, this is the way to trigger an Agent Pool. The client sends an HTTP request to the Agent Pool, and Center adds the request to the pool queue. This option requires a managed token, which you select in the **Token** field when you create the Agent Pool (Step 2).

![1771820545137-108.png](/static/img/81a915_1771820545137-108.png)

![1771820552772-723.png](/static/img/2502fe_1771820552772-723.png)

To send a request, you need:

* The **Agent Pool Key**
* A valid **Managed Token**

For example, you can use Postman to invoke the API.

![1771820580767-314.png](/static/img/43fead_1771820580767-314.png)

#### Passing Input Data to the Workflow

If you want to pass input data to the workflow, include an escaped JSON string in the **specificData** property of the request body.

![1771820599994-165.png](/static/img/1f06b2_1771820599994-165.png)

The workflow must:

* Define an input argument named **inputData** of type **String**.
* Use the **Deserialize Json\<T>** activity to convert the input string into a JSON object for further processing.

![1771820619342-196.png](/static/img/f47122_1771820619342-196.png)

#### Querying Request Status

The response from the server includes a property named **requestId**. This value can be used later to query the status of the request message.

![1771820647729-876.png](/static/img/302a99_1771820647729-876.png)

![1771820660862-792.png](/static/img/407911_1771820660862-792.png)
