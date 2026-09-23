---
id: report-templates
title: Report Templates
sidebar_label: Report Templates
sidebar_position: 4
description: Create report templates and export invoice data to Excel.
displayed_sidebar: scaleCheckSidebar
---

# Report Templates
Once your invoices have been [collected and verified](./review-services.md) and consolidated in the [Invoice List](./invoice-list.md), use a report template to export them to Excel in the layout you need.

A report template maps each column in your Excel report to a data field from your invoices, so you can export a ready-to-use report at any time instead of rebuilding it from scratch.

## View the Template List
1. Go to Report Templates.
2. Review the existing templates, including their scope (**Default** — available to everyone, or **Mine** — private to you), the customer they belong to (if scoped to a specific customer), and the number of columns.
3. Use the search box or the customer filter to find a template.

![report-template-list-scalecheck](/static/img/report-template-list-scalecheck.png)

## Create a Template
1. Click **Create Template**.
2. Enter a **Template Name** and an optional **Note**.
3. Under **Column Configuration**, click **Add Column** for each column you want in the exported report.
4. For each column, enter the column header in **Column on File**, choose the invoice data field to map it to in **Output Data**, select the **Data Type** (for example, TEXT), and optionally add a **Note** for that column.
5. Click **Save**.

![report-template-create-scalecheck](/static/img/report-template-create-scalecheck.png)

You can also click **Create from Sample/File** to build a template faster, instead of configuring columns one by one:
1. Choose an existing template under **From Default Template** to copy its column configuration, **or** click **Choose .xlsx File** under **From Excel File** to upload a sample file.
2. The system pre-fills the column configuration table based on your choice.
3. Edit or remove columns as needed, then click **Save** to save it as your own template.

![report-template-from-sample-dropdown-scalecheck](/static/img/report-template-from-sample-dropdown-scalecheck.png)

## Use a Template
- Click the preview icon on a template to see its layout.
- Click the download icon to export a report using that template.
- To get a customized copy of a **Default** template, use **Create from Sample/File** (above) with that template as the source, instead of editing it directly.
- Templates in the **Mine** scope have extra edit and delete icons on the same row.
