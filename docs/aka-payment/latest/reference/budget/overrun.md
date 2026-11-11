---
title: "Budget Overrun Rules"
description: "Set Budget Check to Off, Warning, or Block for each request type. The default is Warning, and the Payment type is currently set to Warning."
id: overrun
sidebar_label: Budget Overrun Rules
sidebar_position: 3
---

# Budget Overrun Rules

Set Budget Check to Off, Warning, or Block for each request type. The default is Warning, and the Payment type is currently set to Warning.

**Requirement level:** Note


There are three levels: **Off**, **Warning** (default), and **Block**. At the **Warning** level, the "Budget Check Result" dialog says, "The expense exceeds the allocated budget. You can submit it, but should consider the overrun." At the **Block** level, you can't submit the request (API error code `BUDGET_OVERRUN`; see [Request Submission Requirements](../requests/submission.md)). The same rule applies when an approver adjusts an allocation ([Adjust Budget Allocation During Approval](../../guides/approvals/how-to/adjust-allocation.md)): **Block** prevents saving ("Can't save because the allocation exceeds the remaining budget."), while **Warning** prompts for confirmation with a "Save Anyway" button. Set this level under Settings → Request Types → Setup → Behavior → Budget Check.


## Used in these guides

- [Adjust Budget Allocation During Approval](../../guides/approvals/how-to/adjust-allocation.md) — For a request awaiting your approval, open an expense item in the Expense Report, click Edit Allocation, change the account, unit, or project, then click Save.
- [Check the Budget Before Submitting](../../guides/requests/how-to/check-budget.md) — In the Expense Report step, select Check Budget to see whether the expense exceeds the allocation.
