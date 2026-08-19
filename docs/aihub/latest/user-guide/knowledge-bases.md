---
id: knowledge-bases
title: "Knowledge bases"
sidebar_label: "Knowledge bases"
sidebar_position: 3
description: "Plan, create, populate, share, and maintain knowledge bases that ground Channel responses in AI Hub."
displayed_sidebar: aiHubSidebar
---

# Knowledge bases

A knowledge base is the set of approved documents a Channel searches to ground its answers and produce citations. This page covers planning, creating, populating, sharing, and maintaining one.

## Plan a knowledge base

Before creating one, define:

- business owner and content steward;
- purpose and intended Channels;
- document classification and permitted audience;
- update frequency and authoritative sources;
- retention and deletion rules;
- required embedding model and expected language/content type.

Keep content with materially different confidentiality levels in separate knowledge bases. Use the narrowest practical sharing scope.

## Create a knowledge base

**Prerequisites**

- Knowledge create/edit permission.
- At least one ready embedding model, unless the administrator will configure it later.

**Procedure**

1. Open **Knowledge**.
2. Select **Create knowledge base**.
3. Enter a unique, meaningful name.
4. Add a short description covering purpose and owner.
5. Select the semantic-search/embedding model if requested.
6. Save.

> ✅ **Expected result:** The detail page opens with **Documents**, **Access & sharing**, and **Settings** areas as permitted.


![Knowledge base detail page showing the Documents tab, readiness status, and semantic search model configuration](/static/img/fig-06-kb-create.png)

### Recommended naming and description

Good name: `akaBot Studio Technical Support & Troubleshooting 2026`
Weak name: `RPA Docs`

Good description: `Technical guidelines and troubleshooting procedures for akaBot Studio, including activity descriptions, error codes, and best practices.`

The description should not contain credentials, system passwords, personal data, or sensitive API keys.

## Upload documents

**Procedure**

1. Open the required knowledge base.
2. Select the **Documents** tab.
3. Select **Upload documents**, or drag approved files into the upload area.
4. Review rejected filenames before continuing.
5. Wait for each accepted document to reach a terminal or decision state.

Supported UI formats include PDF, DOCX, XLSX, PPTX, HTML, CSV, JSON, Markdown, EML, EPUB, TXT, VTT, and ZIP. Convert legacy `.doc` and `.ppt` files to `.docx` and `.pptx`. The API hard limit is 200 MB per upload; an organization policy may impose a lower limit.

For ZIP archives:

- the archive is expanded into individual documents;
- unsupported or unsafe entries may be skipped;
- the configured maximum number of expanded files applies;
- password-protected archives are not suitable for normal ingestion;
- review the skipped-file message after upload.

## Understand document states

| UI state | Meaning | Next action |
|---|---|---|
| Pending | Accepted and waiting for a worker | Wait; check operations if the queue does not move |
| Processing | Text extraction, chunking, or indexing is active | Wait and avoid uploading a duplicate |
| Waiting to be indexed | No suitable embedding model is bound | Ask an administrator to enable/select an embedding model |
| Text scan needs confirmation | The file has little or no extractable text | Inspect the source and choose OCR or existing text |
| Ready | Searchable by authorized Channels | Optionally review extracted content/chunks |
| Failed | Processing stopped with an error | Open details, correct the cause, and retry or replace the file |

Only **Ready** documents are reliably available for retrieval.

## Decide whether to use OCR

Choose **Scan text from images (OCR)** when the source is an image or scanned document with no useful text layer. Choose **Use existing text** when extraction already contains the correct readable text.

Before using OCR:

- confirm the document is permitted to be sent to the configured OCR service;
- verify language/support requirements;
- expect OCR errors in handwriting, low-resolution scans, complex tables, and rotated pages;
- review the extracted preview after processing.

## Inspect extracted content

**Procedure**

1. Open a document's details.
2. Review the extraction preview.
3. Browse chunks and page/sheet indicators.
4. Check that headings, tables, numbers, and key clauses remain understandable.
5. If extraction is materially wrong, replace the file or reprocess with the appropriate method.

Do not mark a knowledge base operational solely because its health indicator is green; sample important documents and test retrieval through a draft Channel.

## Retry, reprocess, or remove documents

- **Retry** re-attempts a failed processing job.
- **Reprocess** extracts and indexes the document again.
- **Reprocess all** queues every document and may consume significant model and worker capacity.
- **Delete** permanently removes the document from the knowledge base.

Before bulk reprocessing, confirm provider capacity, queue health, maintenance timing, and whether an embedding-model change requires the operation.

## Choose a sharing mode

| Mode | Effective audience | Recommended use |
|---|---|---|
| Private | Explicitly granted principals within the organization | Sensitive or limited-team content |
| Organization | All users within the active organization (`OU_SHARED`) | Common internal content for the active organization |


> **ℹ️ Note:** System-wide knowledge bases are published and managed centrally by System Administrators within the root system organization (OU 0). Standard users cannot select cross-organization sharing.

![Knowledge base Access and sharing tab showing Private sharing mode and individual access management with Grant access button](/static/img/fig-09-kb-share-permission.png)


## Grant individual access

**Prerequisites**

- Access-management permission for the knowledge base.
- The knowledge base is in a mode where explicit individual access is relevant.

**Procedure**

1. Open **Access & sharing**.
2. Select **Grant access** or the equivalent action.
3. Search for a user, robot, token, or service identity.
4. Confirm the exact identity within the active organization.
5. Grant access.
6. Verify that the principal appears in **Current access**.

To revoke, select the entry, choose **Revoke**, read the impact, and confirm. Test effective access if the principal also belongs to a group grant.

## Change the embedding model

Changing the embedding model requires re-indexing all documents because vector representations are model-specific.

**Procedure**

1. Confirm the new model is ready and approved.
2. Schedule the change outside peak hours for a large knowledge base.
3. Record affected Channels and expected unavailability.
4. Change the model and save.
5. Select **Reprocess all** when instructed by the UI/process.
6. Monitor until all required documents are **Ready**.
7. Re-run retrieval tests on affected Channels.

## Delete a knowledge base

Deletion is permanent and removes its documents. Before deletion:

- identify Channels that reference it;
- confirm retention/legal-hold requirements;
- export or retain authoritative source documents through the owning business process;
- obtain required approval;
- type the exact knowledge-base name when prompted.

After deletion, test affected Channel drafts and active versions as required by change policy.

## Best practices

### Update documents without disrupting users

1. Identify affected knowledge bases and Channels.
2. Upload the new document version with a distinguishable name/date.
3. Wait for **Ready** and inspect extraction.
4. Test retrieval through a Channel draft.
5. Remove the obsolete document only after validation and retention approval.
6. Re-test the active user flow if the change is material.

## Where to go next

- Ready to make this knowledge base answer questions? Attach it to a Channel — see [Channels: Attach knowledge bases](./channels.md#attach-knowledge-bases).
- Documents stuck in **Pending**, **Failed**, or **Waiting to be indexed**? See [Troubleshooting](./troubleshooting.md#user-facing-error-guide).
