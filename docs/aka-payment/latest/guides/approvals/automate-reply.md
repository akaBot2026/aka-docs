---
title: "Automatically handle tasks assigned to me"
description: "Approvers want the system to approve, reject, or delegate tasks on their behalf when they match specified conditions."
id: automate-reply
sidebar_label: Automatically handle tasks assigned to me
sidebar_position: 4
---

# Automatically handle tasks assigned to me

Approvers want the system to approve, reject, or delegate tasks on their behalf when they match specified conditions.

**When to use:**

- Approvers want to automatically approve small amounts.
- Approvers want to set rules for automatically handling tasks assigned to them.


Personal rules run when a step is assigned to you and record the action as your own decision.


## Ways to do this

- [Create a rule to automatically handle tasks assigned to me](how-to/automate-reply.md) — In Tasks to Handle, click Automate, then Create automation to approve, reject, or delegate tasks based on conditions.

## Steps

[Create a rule to automatically handle tasks assigned to me](how-to/automate-reply.md)

1. [Create a rule to automatically handle tasks assigned to me](how-to/automate-reply.md)
   1. In **Tasks to Handle**, click **Automate** (the **Rules** and **History** tabs).
   2. Click **Create automation**; the form appears on the page with the **Enabled** toggle.
   3. Under **When**, select a request type (the default is "All request types") and click **Add condition** if you want to filter requests (each condition must have a comparison value). If no conditions are specified, the rule runs for all tasks in scope.
   4. Under **Then**, select **approve request**, **reject request**, or **delegate to** (you must select a recipient before enabling the rule), and enter a **Reason** (optional). The action is recorded as your own decision.
   5. Click **Save** (or **Cancel**). In the list, use the Enabled / Disabled toggle, **Move up** / **Move down** to change the order (the first rule that matches is applied), and **Delete automation**.
   6. View the results in the **History** tab (**Time**, **Request**, **Action**, **Result**: **Executed**, **Skipped**, **Rejected**), and filter by automation.

## Troubleshooting

### [Create a rule to automatically handle tasks assigned to me](how-to/automate-reply.md)

- A rule is skipped when a step requires your direct signature, when the rule does not specify a recipient, or when you created the request (rules do not automatically approve your own requests). An automatic delegation chain stops after a few transfers to prevent two rules from delegating back and forth indefinitely.
