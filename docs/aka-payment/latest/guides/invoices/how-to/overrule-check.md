---
title: "Override invoice check results"
description: "For a Rejected or Interrupted invoice, click Override, enter an optional reason, and confirm. The invoice proceeds, and the person who overrode it and the reason are recorded."
id: overrule-check
sidebar_label: Override invoice check results
sidebar_position: 4
---

# Override invoice check results

For a Rejected or Interrupted invoice, click Override, enter an optional reason, and confirm. The invoice proceeds, and the person who overrode it and the reason are recorded.

## Before you begin

- **[Who can view and act on incoming invoices](../../../reference/invoices/access.md)**\
  Invoices belong to the uploader’s unit and are visible to that unit and its parent units. Administrators and operators can view invoices from all units.


## Steps

1. In **Invoice Management**, open an invoice with the status **Rejected** or **Interrupted**.
2. In the check panel, click **Override**. The **Override check results** dialog opens.
3. Enter a **Reason (optional)**, up to 500 characters.
4. Click **Override**. The check panel displays the **Overridden** label with “by … at …” and the reason; the list also displays the Overridden label.
5. Check the new status: if the reason is “Not an invoice” or the invoice stopped at the classification step, it continues to be processed (Reading); if the reason is “Invalid on the tax portal” or it stopped at the lookup step, the invoice becomes **Ready**; if it stopped at the reading step, the invoice becomes **Requires manual entry**. Enter the information manually as described in [Review check results and handle stopped invoices](review-check.md).
6. After overriding with “Not an invoice,” the system reads the file as an invoice. If it cannot read any information, the invoice may still become **Ready** with **Invoice Information** left blank. Check this section, fill in the fields, and click **Save** before creating a payment request.

## Troubleshooting

- Users can override any invoice they can view; no separate permission is required. See [Who can view and act on incoming invoices](../../../reference/invoices/access.md).
- The Override button is available only when the invoice is Rejected or Interrupted. For any other status, the action is rejected and the page reloads (“The invoice status just changed. The page has been reloaded.”).


## Outcome

- [Invoice is Ready](../../../troubleshooting/invoices/invoice-ready.md) — The invoice has passed the check steps (or was overridden or manually entered) and is Ready, so it can be selected to create a payment request.

## Used in these guides

- [Handle rejected, interrupted, or manually entered invoices](../review-check.md) — Learn why an invoice isn’t Ready and how to handle it: retry, enter invoice information manually, or override the check results.
- [Review check results and handle stopped invoices](review-check.md) — Open an invoice to see which check step stopped; click Retry if it’s Interrupted, or manually enter the invoice information and click Save if it Requires manual entry.
- [Invoice is Ready](../../../troubleshooting/invoices/invoice-ready.md) — The invoice has passed the check steps (or was overridden or manually entered) and is Ready, so it can be selected to create a payment request.
