---
id: review-services
title: Service Management
sidebar_label: Service Management
sidebar_position: 2
description: Monitor and review results of invoice processing services.
displayed_sidebar: scaleCheckSidebar
---

# Service Management
After [setting up a processing flow](./processing-flows.md), you can monitor the result of each service under Service Management.

## Supplier Invoice Download
Go to Service Management > Supplier Invoice Download to monitor invoice download requests from suppliers.
- **Statistics tab**: View total requests, successful requests, failed requests, today requests, and this week requests.

![download-ncc-scalecheck](/static/img/download-ncc-scalecheck.png)

- **Details tab**: View each request, supplier, code, invoice link, status, processing time, retry count, and error details if any.

![details-scalecheck](/static/img/details-scalecheck.png)

## Tax Authority Invoice Download
Go to Service Management > Tax Authority Invoice Download to set up tax authority accounts, create download schedules, and review invoice download results.
- **Tax Authority Accounts**: Manage login accounts used for the tax authority.

![account-tct-scalecheck](/static/img/account-tct-scalecheck.png)

![new-account-scalecheck](/static/img/new-account-scalecheck.png)

- **Download Schedules**: Create automatic daily invoice download schedules.

![tct-invoice-download](/static/img/tct-invoice-download.png)

![new-schedule-scalecheck](/static/img/new-schedule-scalecheck.png)

- **Run History**: Check each run result, including found invoices, new invoices, downloaded invoices, duplicates, errors, and credit usage.

![run-history-scalecheck](/static/img/run-history-scalecheck.png)

- **Downloaded Invoices**: Search and review invoices downloaded from the tax authority.

![downwloaded-invoices-scalecheck](/static/img/downwloaded-invoices-scalecheck.png)

## Tax Authority Invoice Lookup
Use this service to compare and verify invoices against tax authority data. 
- You can look up one invoice or process multiple invoices in bulk:

![invoice-lookup-scalecheck](/static/img/invoice-lookup-scalecheck.png)

- Review the lookup details and history:

![lookup-details-scalecheck](/static/img/lookup-details-scalecheck.png)

## Taxpayer Lookup
- Use this service to check the operating status of the seller or taxpayer tax code.
- Look up a single tax code or import an Excel file of tax codes:

![taxpayer-lookup-scalecheck](/static/img/taxpayer-lookup-scalecheck.png)

- View history and results in the Details / Statistics tabs. Each lookup deducts credits based on the service pricing:

![taxpayer-lookup-details](/static/img/taxpayer-lookup-details.png)

> All valid and successfully downloaded invoices from the above services are consolidated into a single location. Move to [Invoice List](./invoice-list.md) to manage all your data.
