---
id: assignee-pool
title: Assignee Pool
sidebar_label: Assignee Pool
sidebar_position: 4
displayed_sidebar: collaborationSidebar
---

# Assignee Pool

An Assignee Pool is a named group of users who are eligible to perform human tasks within a process. Instead of assigning a human task to a single individual, you can assign it to a pool, and any member of that pool can claim and complete the task. This approach improves process resilience by preventing bottlenecks that occur when a specific individual is unavailable, on leave, or overloaded with work.

Assignee Pools are defined at the system level and reused across multiple processes and human tasks. Each pool has a name, an optional description, and a list of user members. Membership can be managed manually by an administrator or synchronized automatically with your organization's directory service (LDAP/Active Directory). When a human task is assigned to a pool, all pool members receive a notification and the task appears in each member's inbox. The first member to claim the task locks it, preventing duplicate processing.

Pools can also be configured with a **load balancing** strategy, where the system automatically routes the task to the pool member with the fewest active assignments. This ensures a fair distribution of work and reduces overall task completion time. Supervisors can view pool-level statistics — including average handling time and pending task count — from the Collaboration Center dashboard.

## Pool Assignment Strategies

| Strategy | Description | Best For |
|---|---|---|
| First Claim | Any pool member can claim the task from their inbox | General approval tasks |
| Round Robin | Tasks are assigned sequentially to pool members in rotation | Equal workload distribution |
| Load Based | Task is routed to the member with the fewest active tasks | High-volume queues |
| Skill Based | Task is routed based on member skill tags | Specialized processing tasks |
| Manual Override | Supervisor manually assigns the task to a specific member | Escalated or sensitive tasks |

## Creating an Assignee Pool

1. Go to **Human-Bot Collaboration** > **Process Design** > **Assignee Pool**.
2. Click **+ New Pool**.
3. Enter a **Pool Name** and optional **Description**.
4. Select the **Assignment Strategy** from the dropdown.
5. Under **Members**, click **Add Member** and search for users by name or email.
6. Optionally, toggle **LDAP Sync** and enter the group distinguished name (DN) to synchronize membership automatically.
7. Click **Save** to create the pool.

## Assigning a Pool to a Human Task

1. Open the process in the **Process Designer**.
2. Click on the **Human Task** node you want to configure.
3. In the properties panel, locate the **Assignee** field.
4. Select **Pool** as the assignment type.
5. Choose the desired pool from the **Pool Name** dropdown.
6. Click **Save** to apply the configuration.
