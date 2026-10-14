---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
sidebar_position: 1
description: Process your first document by creating a Pipeline, publishing it, uploading a document, reviewing the result, and exporting it.
displayed_sidebar: akaXtractSidebar
---

# Quick Start

Process your first document in about 10 minutes.

**Before you begin**
- An account that can manage and publish Pipelines, such as Owner, Administrator, or Supervisor.
- A sample document: PDF, PNG, JPG/JPEG, or XML, up to 25 MB.
- Available quota.

## Step 1: Sign In

Open the application address from your administrator, enter `Username or email`, select `Sign In`, and complete the authentication steps.

![AkaXtract sign-in page](/static/img/scale-xtract-login.png)

**Result:** your company name appears at the top of the page.

## Step 2: Create a Pipeline from Your Sample

1. Open `Pipelines` -> `Create Pipeline` -> `Create Auto`.
2. Enter a `Pipeline Name` and keep the built-in `AkaXtract AI` model. It needs no API key.
3. Turn off `Auto-Approve Results` so that you review your first result.
4. Choose your `Sample Document` and select `Generate`. This can take a few minutes.
5. In `Review Generated Configuration`, check the prompts, schemas, and mappings, then select `Create Draft`.

![Create Pipeline menu with Create Manual and Create Auto](/static/img/scale-xtract-create-pipeline-menu.png)

![Create Pipeline with AI form](/static/img/scale-xtract-create-auto-form.png)

![Review Generated Configuration](/static/img/scale-xtract-create-auto-review.png)

**Result:** the Pipeline opens as Draft v1.

## Step 3: Test and Publish

1. Select `More Pipeline Actions` -> `Test Pipeline`.
2. Select `Test Document` -> `Run Test`, then compare `Extraction Result` with your sample.
3. In the Draft, select `Publish Version`.

![Draft actions menu with Test Pipeline](/static/img/scale-xtract-test-pipeline-menu.png)

![Test Pipeline page with Configuration is ready to test, Test Document, and Run Test](/static/img/scale-xtract-test-pipeline-ready.png)

![Extraction Result with Run Another Test](/static/img/scale-xtract-test-pipeline-result.png)

![Pipeline Setting tab for a Published version](/static/img/scale-xtract-pipeline-setting-auto.png)

**Result:** version 1 shows `Published`.

## Step 4: Upload a Document

Open your Pipeline, select `Documents` -> `Upload Document`, choose a file, and select `Upload Document` again.

![Upload Document dialog](/static/img/scale-xtract-upload-document-xml.png)

**Result:** the document appears in the list. After processing, its status is `To Review`.

## Step 5: Review and Confirm

1. Open the row menu of the document and select `Review`.
2. Check the warnings at the top, compare the extracted fields with the source document, and correct any value that is wrong.
3. Select `Confirm`.

![Document row menu with Review](/static/img/scale-xtract-document-row-menu.png)

![Review screen with a processing warning, Reject, and Confirm](/static/img/scale-xtract-review-with-warning.png)

![Review screen after the document is confirmed](/static/img/scale-xtract-review-confirmed.png)

**Result:** the message `Document confirmed successfully.` appears, and the document status is `Confirmed`.

## Step 6: Export the Data

Open the row menu of the document, select `Export...`, choose a format, and select `Export`.

![Documents list with a Confirmed document](/static/img/scale-xtract-documents-confirmed.png)

![Export Document dialog](/static/img/scale-xtract-export-document.png)

**Result:** your browser downloads the extracted data.

## Next Steps

- [Create a Pipeline](../pipelines/create-a-pipeline.md): configure each step yourself.
- [Webhooks](../integrations/webhooks.md): send confirmed results to another system.
- [Troubleshooting](../troubleshooting.md): fix a failed Job or an error message.
