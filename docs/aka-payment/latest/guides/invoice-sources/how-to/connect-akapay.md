---
title: "Connect an AkaPay account using an API key"
description: "Enable AkaPay Account, click Add account, paste the API key, load and select a pipeline, choose the invoice statuses to receive, enter a name, and click Add."
id: connect-akapay
sidebar_label: Connect an AkaPay account using an API key
sidebar_position: 4
---

# Connect an AkaPay account using an API key

Enable AkaPay Account, click Add account, paste the API key, load and select a pipeline, choose the invoice statuses to receive, enter a name, and click Add.

**Required permission:** admin


## Steps

1. In AkaPay, create an API key under **Organization** → **Integration Access**.
2. Go to **Administration** → **Incoming Invoices**; in the **Unit** field, select the unit that will receive the invoices.
3. On the **AkaPay Account** card, turn on the switch if it is **Disabled**, select the **Sync frequency** (Every 5/15/30 minutes or Every hour; Real time is not available) and **Check on e-Invoice Portal** (this switch determines whether all AkaPay invoices are checked on the e-Invoice Portal), then click **Save changes** at the top of the page.
4. Under **AkaPay Account**, click **Add account**. The **Connect to AkaPay** dialog opens.
5. On the **Connect using API key** step, paste the **API key**, click **Load pipelines**, and wait for the message "This key can read N pipelines.".
6. On the **Select pipeline** step, select a **Pipeline** (if the key can read only one pipeline, it is selected automatically).
7. On the **Select invoices to receive** step, select statuses in the Extraction, Validation, Reconciliation, Approval, and Accounting groups. **Passed** under Extraction is selected by default. Invoices must match every selected group (any value within a group can match); clear all selections to receive every invoice in the pipeline.
8. On the **Name account** step, keep the default **Account name** (the pipeline name) or change it to distinguish the account, then click **Add** (the dialog does not have a separate connection test step).

## Troubleshooting

- "AkaPay rejected this API key.": Create a new key in AkaPay. "This API key can't read any pipelines.": The key does not have permission to read any pipelines.
- "Could not load pipelines" / "Could not add account": Try again later.
- If an AkaPay invoice has already been extracted successfully, the AkaPay extraction result is used and the invoice is not read again; the AkaPay Validation status does not replace the check on the e-Invoice Portal.
- AkaPay accounts cannot be edited after they are added (the row has only a **Remove** button); to change the key, pipeline, or statuses, remove the account and add it again. Removing an account stops invoices from arriving through that account; invoices already received are retained.


## Notes

- **[Invoice source settings: organization-wide or unit-specific](../../../reference/invoice-sources/unit-scope.md)**\
  Enable/disable settings, format, file size, and Check on e-Invoice Portal apply to the entire organization; sync frequency, download schedule, and source accounts are configured separately for each unit.

## Features used

- [Manage incoming invoice sources](../features/settings.md) — The Administration → Incoming Invoices page: enable/disable sources, configure mailboxes and e-Invoice Portal accounts, and connect AkaConnect and AkaPay. Administrators only.

## Used in these guides

- [Receive invoices from an AkaPay pipeline](../connect-akapay.md) — For administrators who want to bring invoices from an AkaPay pipeline into Invoice Management using an API key and filter them by AkaPay status.
- [Enable/disable invoice sources and save settings](configure.md) — In Administration → Incoming Invoices, select the unit scope, enable/disable each source, configure the format, file size, e-Invoice Portal check, and sync frequency, then click Save changes.
