---
id: logic-types
title: Types of Logic in a Process
sidebar_label: Types of Logic in a Process
sidebar_position: 8
displayed_sidebar: collaborationSidebar
---

# Types of Logic in a Process

Logic gateways in akaBot Center control how the process flow splits and merges at decision points. Rather than executing a task, a gateway evaluates one or more conditions and determines which sequence flow(s) the process instance should follow next. Choosing the correct gateway type is critical to accurately modeling the business rules of your workflow and ensuring the process behaves as expected in all possible scenarios.

akaBot Center supports three standard gateway types derived from the BPMN 2.0 specification: **AND** (Parallel), **OR** (Inclusive), and **XOR** (Exclusive). Each gateway type has a corresponding split behavior (determining which outgoing paths are activated) and a join behavior (determining when the process can continue after multiple parallel paths converge). Understanding both behaviors is necessary for designing correct and efficient processes.

In addition to the standard gateway types, akaBot Center supports **Event-Based** gateways that determine the next path based on which external event occurs first — such as receiving a response from an HTTP call or a human task being completed by a specific deadline. Event-based gateways are used to model race conditions or timeout-driven routing in complex workflows.

## Gateway Types Comparison

| Gateway Type | Symbol | Split Behavior | Join Behavior | Use When |
|---|---|---|---|---|
| XOR (Exclusive) | Diamond with X | Exactly one outgoing path is taken based on the condition that evaluates to true | Passes through as soon as any one incoming path arrives | The process should follow only one of several possible paths |
| AND (Parallel) | Diamond with + | All outgoing paths are activated simultaneously | Waits for ALL incoming paths to complete before continuing | Multiple tasks must run in parallel and all must finish before proceeding |
| OR (Inclusive) | Diamond with O | One or more outgoing paths are taken based on which conditions evaluate to true | Waits for all activated paths to complete | Some or all paths may be taken, depending on conditions |

## XOR Gateway Example

An invoice approval process routes to different approvers based on invoice amount:

```
[Receive Invoice]
      |
  [XOR Gateway]
  /     |      \
<$1k  $1k-$10k  >$10k
  |     |         |
[Auto] [Mgr]   [Director]
  \     |         /
  [XOR Join Gateway]
      |
  [Process Payment]
```

## AND Gateway Example

After the initial check, both a credit verification bot task and a compliance check human task must be completed before proceeding:

```
[Initial Check]
      |
  [AND Split]
  /          \
[Credit Bot] [Compliance Human Task]
  \          /
  [AND Join]
      |
  [Final Approval]
```

## OR Gateway Example

Based on order flags, one or more enrichment steps may be required:

```
[Receive Order]
      |
  [OR Split]
  /    |    \
[If   [If   [If
 intl] VIP]  large]
  \    |    /
  [OR Join]
      |
  [Fulfill Order]
```

## Steps to Add a Gateway

1. In the **Process Designer**, drag the desired **Gateway** type from the Task Palette onto the canvas.
2. Connect incoming sequence flows from preceding tasks to the gateway.
3. Draw outgoing sequence flows from the gateway to the next tasks.
4. For **XOR** and **OR** gateways, click each outgoing sequence flow arrow and enter the **Condition Expression** that must evaluate to true for that path to be taken.
5. For **XOR** gateways, designate one outgoing flow as the **Default Path** to handle cases where no condition is true.
6. Click **Save** to apply.
