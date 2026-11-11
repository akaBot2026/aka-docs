---
title: "Download Invoices on a Schedule from the General Department of Taxation's e-Invoice Portal"
description: "Enable Scheduled download from TCT, set the download schedule, scope, invoice type, and invoice template symbol; add the organization's e-Invoice Portal account, test the connection, and then add it."
id: connect-tax-portal
sidebar_label: Download Invoices on a Schedule from the General Department of Taxation's e-Invoice Portal
sidebar_position: 6
---

# Download Invoices on a Schedule from the General Department of Taxation's e-Invoice Portal

Enable Scheduled download from TCT, set the download schedule, scope, invoice type, and invoice template symbol; add the organization's e-Invoice Portal account, test the connection, and then add it.

**Required permission:** admin


## Steps

1. Open **Administration** → **Incoming Invoices**; in the **Unit** field, select the unit that owns the tax ID for which you want to download invoices.
2. On the **Scheduled download from TCT** tab, turn on the toggle if it is **Disabled**.
3. Set the **Download schedule** (Daily, Twice daily, Weekly (Monday)) and the time in the **at** field; **Scope per download** (Today only, the last 3, 7, or 30 days); **Invoice type** (Tax authority-coded, Uncoded, Generated from a POS); **Invoice template symbol** (1–9). Click **Save changes**.
4. Under **Tax e-Invoice Portal accounts**, click **Add account**. The **Add Tax e-Invoice Portal account** dialog opens (for an account used to look up invoices on hoadondientu.gdt.gov.vn).
5. Enter the **Unit name** (the name on the tax registration, optional), **Portal username** (usually the tax ID), and **Password**.
6. Click **Test connection** and wait for "Connection successful", then click **Add**. The account appears in the list with one of these statuses: Not downloaded, Downloading, Downloaded, Partially downloaded, Authentication error, or Unable to connect (along with the last download time and most recent error, if any).
7. To download immediately without waiting for the schedule, go to **Invoice management** and click **Sync now** on the **Scheduled download from TCT** tab (only administrators and operators can see this button; the command runs for all of the organization's Tax e-Invoice Portal accounts that are not currently downloading).

## Troubleshooting

- "Authentication error" or "Account locked": check the username and password on hoadondientu.gdt.gov.vn. "Unable to connect": the e-Invoice Portal is not responding; try again later.
- "This portal username has already been added.": the account already exists. Use **Edit** to change the password (leave it blank to keep the current password).
- **Sync now** skips accounts with **Authentication error** (the button is disabled if all accounts have errors); update the password first. "Unable to start sync": the source is turned off or experiencing a temporary issue.


## Notes

- **[Invoice source settings: organization-wide or per unit](../../../reference/invoice-sources/unit-scope.md)**\
  Enabling or disabling the source, format, capacity, and Check on the e-Invoice Portal apply to the entire organization; frequency, download schedule, and source account are configured separately for each unit.

## Feature

- [Manage incoming invoice sources](../features/settings.md) — Administration → Incoming Invoices: enable or disable sources, configure mailboxes and Tax e-Invoice Portal accounts, and connect AkaConnect and AkaPay. Administrators only.

## Used in these guides

- [Download incoming invoices on a schedule from the e-Invoice Portal](../connect-tax-portal.md) — For administrators who want the system to automatically download incoming invoices for a tax ID from the General Department of Taxation's e-Invoice Portal on a schedule.
- [Enable or disable invoice sources and save settings](configure.md) — In Administration → Incoming Invoices, select the unit scope, enable or disable each source, adjust the format, capacity, Check on the e-Invoice Portal, and frequency, then click Save changes.
