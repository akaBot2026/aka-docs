---
title: "Restore a request type version"
description: "Open the request type, click History, then click Restore on the version you want to revert to. Click Save and Publish to apply it."
id: restore-request-type
sidebar_label: Restore a request type version
sidebar_position: 4
---

# Restore a request type version

Open the request type, click History, then click Restore on the version you want to revert to. Click Save and Publish to apply it.

## Before you start

- **[Request type publishing requirements](../../../reference/config/publish-validation.md)**\
  Publishing fails and displays a list of issues by tab (Settings, Request flow, Approval flow). Publishing a request type with no changes does not create a new version.


## Steps

1. In **Configuration** → **Request types**, open the request type you want to restore.
2. Click **History** in the upper-right corner. The "Version history" panel lists published versions (v16, v15, …), along with the publisher and publication time.

   ![Version history panel: each published version shows its version number, publication time, and publisher, with the (3) Restore button](/static/img/aka-payment-latest-config-request-type-history.webp)

3. Click **Restore** (3) on the version you want to revert to. This loads that version's content into the draft (replacing any unsaved edits) and displays "Version N restored. Save and publish to apply." No version is created yet.
4. Review the tabs, click **Save**, then click **Publish** (and confirm) to make the restored version the new version used for newly created requests.

## Troubleshooting

- "Could not load this version. Try again.": The version failed to load, and the draft remains unchanged.
- Publishing again still requires passing validation: see [Request type publishing requirements](../../../reference/config/publish-validation.md). To discard only unpublished edits, use **Discard changes**.


## Used in these guides

- [Revert to an earlier request type version](../restore-request-type.md) — For administrators who want to restore a request type configuration from a previously published version.
- [Configure and publish a request type](publish-request-type.md) — Open a request type, edit its tabs, click Save, then Publish. If publishing fails, a list of issues to fix is displayed.
