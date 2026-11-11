---
title: "Revert to an Earlier Version of a Request Type"
description: "An administrator wants to restore a request type configuration from a previously published version."
id: restore-request-type
sidebar_label: Revert to an Earlier Version of a Request Type
sidebar_position: 4
---

# Revert to an Earlier Version of a Request Type

An administrator wants to restore a request type configuration from a previously published version.

**When to use:**

- A release breaks the approval workflow and you need to revert to the previous version.
- An administrator wants to revert to an earlier published version.


Restore the configuration after a change causes an issue.


## How to

- [Restore a request type version](how-to/restore-request-type.md) — Open the request type, click History and Restore on the version you want to revert to, then Save and Publish to apply it.

## Before you start

- **[Request type publish requirements](../../reference/config/publish-validation.md)**\
  Publishing fails with a list of issues grouped by tab (Setup, Request Flow, Approval Flow); publishing a request type with no changes does not create a new version.

## Steps

[Restore a request type version](how-to/restore-request-type.md)

1. [Restore a request type version](how-to/restore-request-type.md)
   1. Go to **Configuration** → **Request Types** and open the request type you want to restore.
   2. Click **History** in the top-right corner; the "Version History" panel lists published versions (v16, v15, …) along with the publisher and publishing time.
      ![Version History panel: each published version shows the version, publishing time, and publisher, with a (3) Restore button](/static/img/aka-payment-latest-config-request-type-history.webp)
   3. Click **Restore** (3) on the version you want to revert to. This loads that version's content into the draft only (replacing any unsaved edits) and displays "Version N restored. Save and publish to apply."; no new version is created yet.
   4. Review the tabs, click **Save**, then **Publish** (confirm) to make the restored version the new version used for newly created requests.

## Troubleshooting

### [Restore a request type version](how-to/restore-request-type.md)

- "Could not load this version. Please try again.": Loading the version failed, and the draft remains unchanged.
- Republishing still requires validation: see [Request type publish requirements](../../reference/config/publish-validation.md). To discard only unpublished edits, use **Discard Changes**.
