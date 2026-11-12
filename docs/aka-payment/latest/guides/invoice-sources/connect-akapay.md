---
title: "Receive invoices from an AkaPay pipeline"
description: "An administrator wants to bring invoices from an AkaPay pipeline into Invoice Management using an API key, filtered by status in AkaPay."
id: connect-akapay
sidebar_label: Receive invoices from an AkaPay pipeline
sidebar_position: 4
displayed_sidebar: akaPaymentSidebar
---

# Receive invoices from an AkaPay pipeline

An administrator wants to bring invoices from an AkaPay pipeline into Invoice Management using an API key, filtered by status in AkaPay.

**When to use:**

- The company has processed invoices in AkaPay and wants to use them to create payment requests.
- An administrator wants to bring invoices from an AkaPay pipeline into Invoice Management.

**Required permission:** admin


Each AkaPay account is an API key that reads one pipeline; the system checks periodically and receives invoices that match the selected statuses.


## Ways to do this

- [Connect an AkaPay account using an API key](how-to/connect-akapay.md) — Enable AkaPay Account, click Add account, paste the API key, load the pipelines, select a pipeline, select the invoice statuses to receive, enter a name, then click Add.

## Steps

[Connect an AkaPay account using an API key](how-to/connect-akapay.md)

Availability requirements: check the package and permission requirements

1. [Connect an AkaPay account using an API key](how-to/connect-akapay.md)
   1. In AkaPay, create an API key under **Organization** → **Integration Access**.
   2. Open **Administration** → **Incoming invoices**; in the **Unit** field, select the unit that will receive the invoices.
   3. On the **AkaPay Account** card, turn on the toggle if it is **Disabled**, select the **Sync frequency** (Every 5/15/30 minutes or Every hour; Real-time is not available) and **Check on e-Invoice Portal** (this toggle determines whether all AkaPay invoices are checked on the e-Invoice Portal), then click **Save changes** at the top of the page.
   4. Under **AkaPay Account**, click **Add account**. The **Connect to AkaPay** dialog opens.
   5. In the **Connect using API key** step, paste the **API key**, click **Load pipelines**, and wait for "This key can read N pipelines.".
   6. In the **Select pipeline** step, select a **Pipeline** (if the key can read only one pipeline, that pipeline is preselected).
   7. In the **Select invoices to receive** step, select statuses in the Extraction, Validation, Matching, Approval, and Posting groups. Extraction: **Passed** is selected by default. An invoice must match every selected group (within a group, it can match any selected value); clear all selections to receive every invoice in the pipeline.
   8. In the **Name the account** step, keep the default **Account name** (the pipeline name) or change it to distinguish the account, then click **Add** (the dialog has no separate connection test step).

## Notes

- **[Invoice source settings: organization-wide or per unit](../../reference/invoice-sources/unit-scope.md)**\
  Enable/disable settings, format, size, and Check on e-Invoice Portal apply to the whole organization; sync frequency, download schedule, and source accounts are configured per unit.

## Troubleshooting

### [Connect an AkaPay account using an API key](how-to/connect-akapay.md)

- "AkaPay rejected this API key.": Create a new key in AkaPay. "This API key cannot read any pipelines.": The key does not have permission to read any pipelines.
- "Could not load pipelines" / "Could not add account": Try again later.
- For AkaPay invoices that have been successfully extracted, use AkaPay's extraction results without extracting them again; AkaPay's Validation status does not replace checking on the e-Invoice Portal.
- An AkaPay account cannot be edited after it is added (the row only has a **Remove** button); to change the key, pipeline, or statuses, remove the account and add it again. Removing an account stops receiving invoices from that account; invoices already received are retained.
