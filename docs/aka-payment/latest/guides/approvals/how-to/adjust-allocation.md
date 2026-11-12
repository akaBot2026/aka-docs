---
title: "Adjust budget allocations during approval"
description: "For a request awaiting your approval, open an expense line in the Expense Report, click Edit Allocation, change the budget item, cost center, or project, then click Save."
id: adjust-allocation
sidebar_label: Adjust budget allocations during approval
sidebar_position: 2
displayed_sidebar: akaPaymentSidebar
---

# Adjust budget allocations during approval

For a request awaiting your approval, open an expense line in the Expense Report, click Edit Allocation, change the budget item, cost center, or project, then click Save.


## Steps

1. Open **Tasks** → the **Pending** tab, then click the request to open its details page.
2. Under **Expense Report**, open the expense line you want to edit to view its details.
3. Click **Edit Allocation**.
4. Change **Budget Item**, **Cost Center** (and **Project** when the budget is project-based). If the request type allows multiple allocation lines, edit the lines so their total matches the expense amount (each line must have an amount greater than 0, and no two lines can have the same budget item and cost center); otherwise, the amount remains unchanged.
5. Click **Save** (or **Cancel** to discard your changes). If the allocation exceeds the budget at the warning level, confirm by clicking **Save Anyway**.
6. Continue with approval as usual in [Approve an assigned task](approve-task.md). If the allocation actually changes, the history records "budget allocation adjusted" along with the old and new allocations, the request form is sealed again with the new allocation (signatures remain unchanged), and the creator receives a notification (unless you are the creator).

## Troubleshooting

- "Cannot save when the allocation exceeds the remaining budget.": The request type has Budget Check set to Block; select a different budget item under **Edit Allocation** or reduce the amount. See [Budget overrun rules](../../../reference/budget/overrun.md).
- **Edit Allocation** is not visible: The button is available only when you are assigned to the current step, the request is in progress, the request type has an allocation section, and **Adjust Budget Allocation** is enabled for that step. If the step does not have this permission, an administrator can enable it in [Configure and publish a request type](../../config/how-to/publish-request-type.md) (**Approval Flow** → select the step → **Advanced Settings**) and then publish the request type. Permissions are based on the version of the request type that was submitted: requests in progress on an older version will still not have this button.


## Notes

- **[Budget overrun rules](../../../reference/budget/overrun.md)**\
  Each request type has Budget Check set to Off, Warn, or Block; the default is Warn, and the Payment request type is currently set to Warn.

## Used in these guides

- [Budget overrun rules](../../../reference/budget/overrun.md) — Each request type has Budget Check set to Off, Warn, or Block; the default is Warn, and the Payment request type is currently set to Warn.
- [Edit the budget item for a request awaiting approval](../adjust-allocation.md) — An approver wants to move a request expense to a different budget item, cost center, or project before approving it.
- [Approve an assigned task](approve-task.md) — Open Tasks and click Approve on the row, or open the request and click Approve on the Your Tasks card; if the step requires a signature, sign with your signing password.
- [Configure and publish a request type](../../config/how-to/publish-request-type.md) — Open the request type, edit the tabs, click Save, then Publish; if publishing fails, a list of issues to fix is displayed.
