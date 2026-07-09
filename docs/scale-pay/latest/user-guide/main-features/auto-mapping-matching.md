---
id: auto-mapping-matching
title: Manage Matching Sets
sidebar_label: Manage Matching Sets
sidebar_position: 3
description: Review auto-mapped document sets, monitor auto-matching progress, manually adjust matches, and approve or reject reconciled results.
displayed_sidebar: scalePaySidebar
---

# Manage Matching Sets

This guide shows you how to review mapped document sets, monitor automatic matching, make manual adjustments, and finalize matching results in Scale Pay.

## Open Matching Sets

1. In the nav-bar, click tab **Matching sets**
2. You will see a list of matching sets generated from your uploaded documents.

![Matching set list](/static/img/sp_matchingsets.png)

## Automap

Automap follows the mapping rules configured in your [Pipeline Setting](./pipeline-setting.md).

When documents share the same mapping key, Scale Pay automatically groups them into one matching set. Each set displays:

- **Matching key**: the auto-generated value used to group documents (for example, PO number, invoice number, or reference number).
- **File count**: the number of documents inside the set.

![Matching set list](/static/img/sp_listing_matchingset.png)

## Auto match

Auto match also follows the matching rules configured in your [Pipeline Setting](./pipeline-setting.md).

After automap completes, Scale Pay starts comparing fields across documents in each set.

When the system is reconciling, the matching set status shows **Matching**.

## Matching set details

Click a **matching key** to open the matching set detail view. Here you can see:

- All documents in the set.
- Extracted values for each field.
- Matching results summary
- Matching results per field (matched or mismatched).

![Matching set detail](/static/img/sp_matchingresult_summary.png)

![Matching set detail](/static/img/sp_table.png)


## Manual map and rematch

If a matching set is waiting for review, you can manually add or remove files.

To manually map a file into an existing matching set:

1. Open the matching set detail view.
2. Click **Add file** near the search bar.
3. Select the document you want to add or upload from your device
4. Confirm to include it in the current set.
5. ScalePay will automatically categorize the document type and add to the matching set.
6. Trigger rematch to see the latest matching result.

![Rematch](/static/img/sp_rematch.png)

**Notice**: You can only select documents (existing in the system) with READY status.

Manual mapping is useful when:

- A file was not auto-mapped because the key was missing or incorrect.
- You need to combine documents from different batches.
- You want to adjust the set before matching runs.

## Edit and rematch

For matching sets with status **Pending Approval** or **Mismatched**, you can manually edit extracted data and trigger a rematch.

To edit:

1. Open the matching set detail view.
2. Find the document you want to correct.
3. Click the **pencil (edit)** icon.
4. Update the value.
5. Save the changes.

![Rematch button](/static/img/sp_edit_matchingset.png)

After saving, click **Rematch** to run the matching engine again with the updated data.

![Rematch](/static/img/sp_rematch.png)

Notes:

- You can only edit when the set status allows changes (pending_approval, mismatched).
- If the status is locked, wait for the current process to finish or ask your admin for permission.

## Approve or reject

Users with **Approve** or **Reject** permission can finalize matching results.

To approve or reject a matching set:

1. Open the matching set detail view.
2. Review the matching results carefully.
3. Click **Approve** or **Reject**.
4. Enter a reason for your decision.

![Approve reject](/static/img/sp_approve_reject.png)
![Approve reject](/static/img/sp_reason.png)
Notes:

- Once approved, the matching result becomes final and may be exported or sent to outbound systems.
- If the matching result is rejected, its status will be rejected and users cannot do any action on it.
- The reason you enter is recorded in the activity log for audit purposes.

## What to do next

After matching sets are approved, you can export results or push them to connected systems through the outbound configuration set in [Pipeline Setting](./pipeline-setting.md).

If you need to review matching rules or update extraction settings, go back to [Pipeline Setting](./pipeline-setting.md).

## Common issues and quick fixes

### Some files were not auto-mapped

- Check whether the mapping key exists in all documents.
- Use manual mapping to group them into the correct set.

### Matching result shows Mismatched but I think it should match

- Open the matching set detail view.
- Edit the extracted values if they are incorrect.
- Click **Rematch** to recalculate.

### I do not see Approve or Reject buttons

- Your role may not have the required permission.
- Ask your admin to grant Approve or Reject access in [Roles & Permissions](../organization/roles-permission).

### The set is stuck in Matching status

- Wait a moment if the system is still processing.
- If it stays stuck, check whether all documents have status **Ready**.
- You can also try rematching manually.
