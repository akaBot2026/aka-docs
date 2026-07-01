---
id: subscription-management
title: Subscription Management
sidebar_label: Subscription Management
sidebar_position: 6
description: View document and storage usage limits, monitor consumption by type and time range, export reports, and set threshold alerts.
displayed_sidebar: scalePaySidebar
---

# Subscription Management

This guide shows you how to monitor your plan limits, track document and storage consumption, export usage reports, and configure alert thresholds so you know before you reach your limit.

## Open Subscription Management

1. Click the **dropdown arrow** next to your avatar in the header bar.
2. Select **Organization**.
3. In the left menu, choose **Subscription Management**.

![Subscription](/static/img/sp_subs.png)
![Subscription](/static/img/sp_subs_tab.png)
## Usage summary

The top of the page shows your current usage in three cards:

### Document usage card

Shows:

- **Used**: total documents consumed from your plan.
- **Remaining**: documents still available before hitting the limit.

### Storage usage card

Shows:

- **Used**: current storage occupied.
- **Remaining**: storage still available.

*Both cards update automatically when you upload, match, or delete documents.*

### Current plan

Shows:

- **Plan name** (for example: Trial 2026)
- **Total documents included**
- **Total storage included**
- **Expiration date**: the date your current billing cycle ends

Use this card to quickly verify which plan you are on and when it renews.

## Document consumption by type

This chart breaks down your document usage by document type.

Use the filter to change the time range:

- **Last 7 days**
- **Last 30 days**
- **Last 90 days**

You can review which document types consume the most capacity and adjust your upload strategy if needed.

![Subscription](/static/img/sp_chart.png)

## Usage distribution

This chart shows how documents and storage are distributed across your document types.

Use it to identify heavy usage areas and plan capacity accordingly.

![Subscription](/static/img/sp_usage.png)

## Storage by document type

This chart shows storage consumption grouped by document type.

Compare sizes across PO, GR, Invoice, and other types to understand which formats or batches take the most space.

![Subscription](/static/img/sp_storage.png)

## Export report

1. Click **Export Report**.
3. Download the file once it is generated.

The exported report can include document counts, storage usage, and consumption trends.

![Subscription](/static/img/sp_export.png)


## Configure alert thresholds

You can set thresholds so Scale Pay notifies you before you reach a limit.

1. Click the **Alert** button.
2. Set the **Document threshold**: choose a percentage or absolute number.
3. Set the **Storage threshold**: choose a percentage or absolute number.
4. Click **Save** to activate the alert.

Example: You set a storage threshold at 80%. When storage reaches 80% of your plan limit, Scale Pay sends a warning so your admin can upgrade or clean up unused documents.

![Subscription](/static/img/sp_alerts.png)
![Subscription](/static/img/sp_set_alert.png)

## What to do next

If your usage is approaching the limit and you need more capacity, contact your admin to review the current plan or upgrade.

If you want to understand why storage grows quickly, check document statuses in [Import Documents](../main-features/documents.md).

## Common issues and quick fixes

### My usage looks incorrect

- Refresh the page to load the latest numbers.
- Check whether deleted documents were permanently removed or only moved to trash.

### I did not receive an alert even though I reached the threshold

- Verify the alert was saved and enabled.
- Check your notification settings in [Profile Usage](./profile-usage.md).

### The export report is empty or missing data

- Make sure the selected time range contains uploaded documents.
- Try exporting again or choose a different range.
