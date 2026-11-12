---
title: "Rules for approving, rejecting, returning, and delegating"
description: "Returning requires a reason; delegation requires selecting another recipient; rejection does not require a reason; approval may require a signature."
id: action-rules
sidebar_label: Rules for approving, rejecting, returning, and delegating
sidebar_position: 2
displayed_sidebar: akaPaymentSidebar
---

# Rules for approving, rejecting, returning, and delegating

Returning requires a reason; delegation requires selecting another recipient; rejection does not require a reason; approval may require a signature.

**Requirement level:** Required


Each action opens a dialog with Cancel and Confirm buttons. **Return**: "Reason" is required ("Please enter a reason for returning the request."). **Reject**: "Reason" is optional; rejection is final, and to try again, use "Duplicate". **Delegate**: you must select "Delegate to"; you cannot delegate to yourself, to someone already assigned to that step, to someone who is not in the user directory, or to the request creator when the step has "Skip when approver is requester" enabled. **Approve**: if the step requires a signature, you must sign using your signing password (see [Approve an assigned task](../../guides/approvals/how-to/approve-task.md)); after 5 incorrect password attempts, access is locked for 15 minutes; approval is not possible if the signature image or signing password is missing. Only the person currently assigned to the open step can take action.


## Used in these guides

- [Approve an assigned task](../../guides/approvals/how-to/approve-task.md) — Open Tasks to Process and click Approve on the row, or open the request and click Approve on the Your Tasks card; steps that require a signature must be signed using your signing password.
- [Delegate a task to someone else](../../guides/approvals/how-to/delegate-task.md) — Open the request, click Delegate, select a recipient, and click Confirm.
- [Reject a request](../../guides/approvals/how-to/reject-request.md) — Open the request awaiting your action and click Reject on the Your Tasks card, enter a reason if you want, then click Confirm; this decision is final.
- [Return a request to its creator](../../guides/approvals/how-to/return-request.md) — Open the request, click Return, enter the required reason, and click Confirm; the creator can edit and resubmit it.
- [Set up your signature and signing password](../../troubleshooting/profile/signing-ready.md) — Your profile has a signature image and signing password, which are required for approval steps that require a signature.
