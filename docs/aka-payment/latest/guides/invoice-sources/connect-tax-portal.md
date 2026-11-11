---
title: "Scheduled Download of Incoming Invoices from the E-Invoice Portal"
description: "An administrator wants the system to automatically download incoming invoices for a tax identification number from the General Department of Taxation E-Invoice Portal on a schedule."
id: connect-tax-portal
sidebar_label: Scheduled Download of Incoming Invoices from the E-Invoice Portal
sidebar_position: 6
---

# Scheduled Download of Incoming Invoices from the E-Invoice Portal

An administrator wants the system to automatically download incoming invoices for a tax identification number from the General Department of Taxation E-Invoice Portal on a schedule.

**When to use:**

- The company wants all purchase invoices on the E-Invoice Portal to be automatically imported into the system without waiting for suppliers to send them.
- The administrator wants to periodically download invoices for a tax identification number from the E-Invoice Portal.

**Required permission:** admin


Each E-Invoice Portal account is a lookup account for one tax identification number and belongs to one business unit.


## Ways to do this

- [Schedule invoice downloads from the General Department of Taxation E-Invoice Portal](how-to/connect-tax-portal.md) — Enable Scheduled downloads from GDT, set the download schedule, scope, invoice type, and invoice template symbol; add the business unit's E-Invoice Portal account, click Test connection, then Add.

## Steps

[Schedule invoice downloads from the General Department of Taxation E-Invoice Portal](how-to/connect-tax-portal.md)

Availability requirements: check the plan and permission requirements

1. [Schedule invoice downloads from the General Department of Taxation E-Invoice Portal](how-to/connect-tax-portal.md)
   1. Go to **Administration** → **Incoming invoices**; in the **Business unit** field, select the business unit that owns the tax identification number for which you want to download invoices.
   2. On the **Scheduled downloads from GDT** card, turn on the toggle if it is **Off**.
   3. Set the **Download schedule** (Daily, Twice a day, Weekly (Monday)) and the time in the **at** field; **Scope of each download** (Today only, Last 3, 7, or 30 days); **Invoice type** (With tax authority code, Without code, Created from a cash register); and **Invoice template symbol** (1–9). Click **Save changes**.
   4. Under **E-Invoice Portal accounts**, click **Add account**. The **Add E-Invoice Portal account** dialog opens (a lookup account on hoadondientu.gdt.gov.vn).
   5. Enter the **Business unit name** (the name registered for tax purposes; optional), **Portal username** (usually the tax identification number), and **Password**.
   6. Click **Test connection** and wait for "Connection successful", then click **Add**. The account appears in the list with the status Not downloaded, Downloading, Downloaded, Partially downloaded, Authentication error, or Unable to connect (along with the last download time and most recent error, if any).
   7. To download immediately instead of waiting for the schedule: in **Invoice management**, click **Sync now** on the **Scheduled downloads from GDT** card (only administrators and operators can see this button; the command runs for every E-Invoice Portal account in the organization that is not currently downloading).

## Notes

- **[Invoice source settings: organization-wide or per business unit](../../reference/invoice-sources/unit-scope.md)**\
  Enable/disable settings, format, file size, and Test on the E-Invoice Portal apply to the entire organization; frequency, download schedule, and source accounts are configured separately for each business unit.

## Troubleshooting

### [Schedule invoice downloads from the General Department of Taxation E-Invoice Portal](how-to/connect-tax-portal.md)

- "Authentication error" or "Account locked": check the username and password on hoadondientu.gdt.gov.vn. "Unable to connect": the E-Invoice Portal is not responding; try again later.
- "This portal username has already been added.": the account already exists; use **Edit** to change the password (leave it blank to keep the current password).
- **Sync now** skips accounts with **Authentication error** (the button is disabled when all accounts have errors); update the password first. "Unable to start sync": the source is turned off or there is a temporary error.
