---
id: review-and-export
title: Review and Export Results
sidebar_label: Review and Export
sidebar_position: 2
description: Review extracted data, confirm or reject it, and export confirmed results.
displayed_sidebar: akaXtractSidebar
---

# Review and Export Results

<a id='review'></a>

## Review a Document

**Before you begin:** you need the review permission and a document in `To Review`. If another user is reviewing it, you can only view it.

1. In `Documents`, open the row menu of the document and select `Review`.

   ![Document row menu with Review](/static/img/scale-xtract-document-row-menu.png)

2. Compare the extracted fields on the left with the source document on the right. Check the warnings at the top and the overall `Confidence`. A warning, such as model output that does not match the schema, means the document needs review.

   ![Review screen with a processing warning, Reject, and Confirm](/static/img/scale-xtract-review-with-warning.png)

3. Correct any value that is wrong or missing. In a table field, edit cells and add or remove rows.
4. Select `Confirm` to save your corrections.

**Result:** the message `Document confirmed successfully.` appears. The Document is `Confirmed` and the Job is `Completed`.

![Review screen after the document is confirmed, with Reopen for Review](/static/img/scale-xtract-review-confirmed.png)

| Action | Result |
| --- | --- |
| `Confirm` | Saves your corrections. Document `Confirmed`, Job `Completed` |
| `Reject` | Document `Rejected`, Job `Completed`. A rejected result cannot be exported, and your edits are not submitted |
| `Reopen for Review` | For a `Confirmed` or `Rejected` document. It returns to review, and the Job becomes `Waiting for Review`. The earlier confirmed result is cleared until you confirm again |

![Review screen with fields on the left and the source document on the right](/static/img/scale-xtract-review-document.png)

Other tools on this screen: `View JSON` opens `Extracted data (JSON)` with a `Copy JSON` button, and `Download` saves the source file, not the extracted data. For XML, use `Visual View` or `Raw XML`.

![Extracted data (JSON) dialog](/static/img/scale-xtract-view-json.png)

:::warning
Select `Confirm` before you leave the screen. Leaving releases your editing rights, and unconfirmed changes are not saved. If you are inactive for about 2 minutes, another reviewer can take over.
:::

:::note
Reopening a result does not recall data that was already downloaded or sent. Tell the receiver and reconcile separately.
:::

<a id='export'></a>

## Export a Document

1. In `Documents`, find a `Confirmed` row, open its menu, and select `Export...`.

   ![Documents list with a Confirmed document](/static/img/scale-xtract-documents-confirmed.png)

2. Choose `Export Format`: XML, CSV, XLSX, or JSON, then select `Export`.

![Export Document dialog](/static/img/scale-xtract-export-document.png)

**Result:** your browser downloads the extracted data, not the source document, as records of field, value, confidence, and source. CSV files use the columns `Field`, `Value`, `Confidence`, and `Source`.

Only `Confirmed` documents can be exported, and only while the final result still exists.
