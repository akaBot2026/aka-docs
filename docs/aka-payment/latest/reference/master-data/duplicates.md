---
title: "Duplicate rules in shared master data"
description: "You can't create vendors with duplicate tax IDs, beneficiary accounts with the same account number and bank, or expense types with duplicate codes; the system identifies the existing record."
id: duplicates
sidebar_label: Duplicate rules in shared master data
sidebar_position: 2
displayed_sidebar: akaPaymentSidebar
---

# Duplicate rules in shared master data

You can't create vendors with duplicate tax IDs, beneficiary accounts with the same account number and bank, or expense types with duplicate codes; the system identifies the existing record.

**Requirement level:** Required


You can't create a vendor with a duplicate tax ID ("A vendor with tax ID … already exists: …."). You can't create a beneficiary account with the same account number and bank ("Account … at … already exists."; when saving from a request: "This payment contact already exists."). Expense type codes must be unique (case-insensitive, including codes for inactive types) and can't be changed after saving. Adding or editing most master data requires the operator or administrator role (master data pages, including Budget Items and Projects, are available only to these two roles). Requesters can also add beneficiary accounts when creating a request.


## Used in these guides

- [Add or edit a master data record](../../guides/master-data/how-to/manage-list.md) — Open the list (Configuration → Shared Master Data, or Budget Management → Budget Items / Projects), click Add or Edit on the row, then Save.
