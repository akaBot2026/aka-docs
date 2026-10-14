---
id: test-and-publish
title: Test and Publish a Pipeline
sidebar_label: Test and Publish
sidebar_position: 2
description: Test a Pipeline, publish a version, update it, and clone, export, or import it.
displayed_sidebar: akaXtractSidebar
---

# Test and Publish a Pipeline

A new Pipeline is a Draft. A Draft does not accept documents until you test it and publish it.

## Test

1. Open the Draft and select `More Pipeline Actions` -> `Test Pipeline`. Wait for `Configuration is ready to test.`
2. Select `Test Document`, choose a sample file, then select `Run Test`. `Test Status` changes from `PROCESSING` to `COMPLETED`.
3. Compare `Extraction Result` with the source document. Use `Run Another Test` to repeat.

![Draft actions menu with Test Pipeline](/static/img/scale-xtract-test-pipeline-menu.png)

![Test Pipeline page with Configuration is ready to test, Test Document, and Run Test](/static/img/scale-xtract-test-pipeline-ready.png)

![Test Status showing PROCESSING](/static/img/scale-xtract-test-pipeline-processing.png)

![Extraction Result with Run Another Test](/static/img/scale-xtract-test-pipeline-result.png)

**Result:** you see the extracted data, or an error to fix in the Draft.

A test does not send Webhooks. Test data is kept for 7 days.

## Publish

In the Draft, select `Publish Version`.

![Pipeline Setting tab for a Published version](/static/img/scale-xtract-pipeline-setting.png)

**Result:** the version shows `Published`. It is read-only and accepts documents.

## Update a Published Pipeline

1. Select the Published version and select `Create Draft`.
2. Edit the Draft, then test and publish it.

To read the configuration of a published version, select `View Details` in a section of `Pipeline Setting`.

![Pipeline Details view with model, retention, and data lifecycle warning](/static/img/scale-xtract-pipeline-details-view.png)

![Approval Rules view of a published version](/static/img/scale-xtract-approval-rules-view.png)

A Pipeline has only one Draft, so open the existing one if there is one. New Jobs use the version that is published when the document is submitted. Existing Jobs keep their version and are not reprocessed.

## Clone, Export, and Import

The `...` button next to `Create Draft` opens a menu with `Copy Pipeline ID`, `Clone Pipeline`, `Data Retention`, and `Delete Pipeline`. `Copy Pipeline ID` copies the ID of the Pipeline. In a Draft, the menu shows `Test Pipeline` in place of `Clone Pipeline`.

![Pipeline actions menu](/static/img/scale-xtract-pipeline-actions-menu.png)

![Pipeline ID copied message](/static/img/scale-xtract-pipeline-id-copied.png)

| Action | How | Result |
| --- | --- | --- |
| Clone | `Clone Pipeline`, then enter a new name | A new Draft v1 from the current Published version |
| Export | `Export v…` | The saved configuration as JSON, without documents or results |
| Import | On the `Pipelines` page, select `Import Pipeline...` and choose a JSON file exported by AkaXtract (up to 5 MB) | A new Draft v1 |

![Clone Pipeline dialog](/static/img/scale-xtract-clone-pipeline.png)

After a clone or import, reselect any model or key that does not exist in the destination company, then test and publish.

:::note
A test does not prove that your Webhook receiver or ScaleConnect source works. Check them in [Integrations](../integrations/webhooks.md).
:::
