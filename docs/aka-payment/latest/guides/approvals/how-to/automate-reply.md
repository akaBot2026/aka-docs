---
title: "Create a rule to automatically handle tasks assigned to me"
description: "In To Do, click Automation, then Create automation to automatically approve, reject, or delegate requests based on conditions."
id: automate-reply
sidebar_label: Create a rule to automatically handle tasks assigned to me
sidebar_position: 4
displayed_sidebar: akaPaymentSidebar
---

# Create a rule to automatically handle tasks assigned to me

In To Do, click Automation, then Create automation to automatically approve, reject, or delegate requests based on conditions.


## Steps

1. In **To Do**, click **Automation** (the **Rules** and **History** tabs).
2. Click **Create automation**; the form appears on the page with the **Enabled** toggle.
3. In the **When** row, select a request type (the default is "All request types") and click **Add condition** to filter if needed (each condition must have a comparison value); without conditions, the rule applies to all tasks in scope.
4. In the **Then** row, select **approve request**, **reject request**, or **delegate to** (you must select a recipient before enabling the rule), and enter a **Reason** (optional). The action is recorded as your own decision.
5. Click **Save** (or **Cancel**). In the list, use the Enabled / Disabled toggle, **Move up** / **Move down** to change the order (the first rule whose conditions are met is applied), and **Delete automation**.
6. View the results in the **History** tab (Time, Request, Action, Result: Executed, Skipped, Rejected), and filter by automation.

## Troubleshooting

- A rule is skipped when the step must be signed directly by you, when the rule does not specify a recipient, or when you created the request (a rule does not automatically approve your own requests). An automatic delegation chain stops after a few transfers to prevent two rules from delegating to each other indefinitely.


## Used in these guides

- [Automatically handle tasks assigned to me](../automate-reply.md) — Approvers who want the system to automatically approve, reject, or delegate tasks on their behalf when conditions are met.
