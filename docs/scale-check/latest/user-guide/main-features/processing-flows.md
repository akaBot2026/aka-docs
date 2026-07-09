---
id: processing-flows
title: Set Up a Processing Flow
sidebar_label: Processing Flows
sidebar_position: 1
description: Set up and monitor automated invoice processing flows.
displayed_sidebar: scaleCheckSidebar
---

# Set Up a Processing Flow
A processing flow helps the business define a series of service steps. For example, it can download invoices from the tax authority, verify the invoices, and then check the seller taxpayer information.

## View the Flow List
1. Go to Service Management > Processing Flows.
2. On the My Pipelines tab, review the existing flows.
3. You can filter by status or flow type.

## Create a New Flow

![workflow-scalecheck](/static/img/workflow-scalecheck.png)

1. Click Create Pipeline.
2. Enter the Pipeline name and Description.
3. Turn on Active if the flow is allowed to run.
4. You can choose a suggested template to quickly fill in the steps.
5. Click Add Step to start building the pipeline.
6. For each step, select the service to run and configure the input data.
7. Click Save to finish.

Input methods:
- **Fixed value**: Enter a value in advance.
- **Enter when running**: Use this when testing or running the flow manually.
- **Use previous step output**: Automatically take data from the result of the previous step.

![create-pipeline-scalecheck](/static/img/create-pipeline-scalecheck.png)

## Monitor a Flow
1. Go to Service Management > Processing Flows.
2. Open the Run History tab.

![run-history-scalecheck](/static/img/run-history-scalecheck.png)

3. Check the status of each run and review any failed items if needed.
- **Completed**: The flow ran successfully.
- **Partially completed**: Some data was processed successfully, while some items had errors.
- **Failed**: The flow did not complete successfully. Review the error details.

> Check detailed step errors in the [Review Services](./review-services.md) section.
