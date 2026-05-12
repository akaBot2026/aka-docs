---
id: agent-pool
title: Agent Pool
sidebar_label: Agent Pool
sidebar_position: 2
description: "How to use Center’s Agent Pool documentation."
displayed_sidebar: centerSidebar
---
# How to use Center’s Agent Pool

**1. Prerequisites**

Before using the Agent Pool feature, ensure that the following requirements are met:

* akaBot Center is installed and accessible.
* Postman or another HTTP client is available.
* If you intend to trigger an Agent Pool via HTTP requests, you must create a managed token by following the instructions in the Managed Token Guideline document.

**2. Create Agent Pool**

An **Agent Pool** is a group of akaBot Agents that are configured to execute a specific workflow. All Agents within the same pool should have identical environments to ensure consistent and stable execution.

To create a new Agent Pool in akaBot Center, navigate to: **Agent > Agent Pool > Create New**

![1771820288041-812.png](/img/72eef5_1771820288041-812.png)

In the *Create Agent Pool* dialog:

1. Enter a meaningful name for the Agent Pool.
2. Select the workflow that the Agents will execute.
3. In the **Token** dropdown list, select a managed token that will be used to invoke HTTP requests for pushing messages to the Agent Pool.  
    *This step is optional if you plan to trigger the Agent Pool only via the Center’s Schedule feature.*
4. Select one or more Agents that will be responsible for executing the workflow.

![1771820332495-836.png](/img/6e0ce6_1771820332495-836.png)

After creation, the new pool will appear in the Agent Pool list.

![1771820349412-497.png](/img/1efb90_1771820349412-497.png)

You can click on an Agent Pool to view its detailed configuration.

![1771820364096-384.png](/img/9420bd_1771820364096-384.png)

**3. Trigger Agent Pool by using Schedule**

You can trigger an Agent Pool automatically using akaBot Center’s scheduling feature.

Navigate to: **Automation > Schedule > Create New**

![1771820395129-275.png](/img/a4cfc5_1771820395129-275.png)

In the *Create a new schedule* dialog:

1. Enter a meaningful name for the schedule.
2. Select the target workflow. This workflow must be the same as the one configured in the Agent Pool.
3. Configure the time recurrence to define how frequently the schedule will run.

![1771820414485-470.png](/img/4ba9be_1771820414485-470.png)

Next, navigate to the **Forward To** tab:

* Select the Agent Pool that you want to trigger.
* Click **Save** to complete the configuration.

![1771820434228-395.png](/img/05f330_1771820434228-395.png)

After the schedule is created, it will appear in the Schedule list.

![1771820452793-860.png](/img/2e595b_1771820452793-860.png)

**Execution Behavior**

When the schedule is triggered:

* A new queue item is created.
* One available Agent in the pool will pick up the queue item and start execution.
* While the task is running, the queue item status is **InProgress**.
* If no Agent is available, the queue item remains in **New** status until an Agent becomes available.
* After execution:
  + The status becomes **Successful** if completed successfully.
  + The status becomes **Failed** if a business exception occurs.

![1771820474256-428.png](/img/559350_1771820474256-428.png)

![1771820485476-954.png](/img/cc9915_1771820485476-954.png)

**4. Trigger Agent Pool by using 3rd-party client**

![1771820545137-108.png](/img/81a915_1771820545137-108.png)

![1771820552772-723.png](/img/2502fe_1771820552772-723.png)

To send a request, you need:

* The **Agent Pool Key**
* A valid **Managed Token**

For example, you can use Postman to invoke the API.

![1771820580767-314.png](/img/43fead_1771820580767-314.png)

**Passing Input Data to the Workflow**

If you want to pass input data to the workflow, include an escaped JSON string in the **specificData** property of the request body.

![1771820599994-165.png](/img/1f06b2_1771820599994-165.png)

The workflow must:

* Define an input argument named **inputData** of type **String**.
* Use the **Deserialize Json\<T>** activity to convert the input string into a JSON object for further processing.

![1771820619342-196.png](/img/f47122_1771820619342-196.png)

**Querying Request Status**

The response from the server includes a property named **requestId**. This value can be used later to query the status of the request message.

![1771820647729-876.png](/img/302a99_1771820647729-876.png)

![1771820660862-792.png](/img/407911_1771820660862-792.png)