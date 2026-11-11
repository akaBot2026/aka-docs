---
title: "Edit the budget allocation of a request under review"
description: "An approver wants to reassign a request's expense to a different budget category, department, or project before approving it."
id: adjust-allocation
sidebar_label: Edit the budget allocation of a request under review
sidebar_position: 2
---

# Edit the budget allocation of a request under review

An approver wants to reassign a request's expense to a different budget category, department, or project before approving it.

**When to use:**

- The approver sees that an expense is assigned to the wrong budget category or cost center.
- The approver wants to change where an expense is recorded without returning the request.


Approvers can change the cost allocation directly on the request instead of returning it to the creator. This option is available only when the approval step has this permission enabled.


## Ways to do this

- [Adjust the budget allocation during approval](how-to/adjust-allocation.md) — In a request awaiting your approval, open the expense line in the Expense Report, click Edit Allocation, change the budget category, department, or project, then click Save.

## Steps

[Adjust the budget allocation during approval](how-to/adjust-allocation.md)

1. [Adjust the budget allocation during approval](how-to/adjust-allocation.md)
   1. Open **Tasks** → the **Pending** tab, then click the request to open its details page.
   2. In **Expense Report**, open the expense line you want to edit to view its details.
   3. Click **Edit Allocation**.
   4. Change the **Budget Category**, **Cost Center** (and **Project** when the budget is project-based). If the request type allows multiple allocation lines, edit the lines so their total equals the expense amount (each line must have an amount greater than 0, and no two lines can have the same budget category and cost center); otherwise, keep the amount unchanged.
   5. Click **Save** (or **Cancel** to discard your changes). If the change exceeds the budget warning threshold, confirm by clicking **Save Anyway**.
   6. Continue with the approval as usual in [Approve an assigned task](how-to/approve-task.md). If the allocation actually changes: the history records "budget allocation adjusted" along with the old and new allocations, the request form is resealed with the new allocation (signatures remain unchanged), and the creator is notified (unless you are the creator).

## Notes

- **[Budget overrun rules](../../reference/budget/overrun.md)**\
  Each request type sets Budget Check to Off, Warn, or Block; the default is Warn, and Payment requests are currently set to Warn.

## Troubleshooting

### [Adjust the budget allocation during approval](how-to/adjust-allocation.md)

- "Cannot save when the allocation exceeds the remaining budget.": The request type has Budget Check set to Block. In **Edit Allocation**, select a different budget category or reduce the amount. See [Budget overrun rules](../../reference/budget/overrun.md).
- **Edit Allocation** isn't available: This button appears only when you are assigned to the current step, the request is being processed, the request type has an allocation section, and **Adjust Budget Allocation** is enabled for that step. If the step doesn't have this permission, an administrator can enable it in [Configure and publish a request type](../config/how-to/publish-request-type.md) (**Approval Flow** → select a step → **Advanced Settings**) and then publish the request type. Permissions are based on the version of the request type used when the request was submitted; requests already in progress under an older version won't have this button.
