---
title: "Request Type Publishing Conditions"
description: "Publishing fails and displays a list of issues grouped by tab (Settings, Request Flow, Approval Flow). Publishing a request type with no changes does not create a new version."
id: publish-validation
sidebar_label: Request Type Publishing Conditions
sidebar_position: 3
---

# Request Type Publishing Conditions

Publishing fails and displays a list of issues grouped by tab (Settings, Request Flow, Approval Flow). Publishing a request type with no changes does not create a new version.

**Requirement level:** Required


Validation only runs when you click Publish; the editor does not show errors beforehand. If publishing fails, the page displays "This request type cannot be published." and no version is recorded. The main issue categories are:

- **Settings**: Code and Name cannot be empty; the code must be unique across request types; the Document Number Format must contain `{NNNNN}` ("The document number format must contain {NNNNN} so that each request has a unique number.").
- **Approval Flow**: At least one step is required; each step must have a name and a unique code; the group or assignee-selection field must still exist; additional fields for a step must have a name and options or a list; conditions must have complete clauses and at least one branch; no steps can follow an end step.
- **Request Flow**: Required documents must have a name, be unique, and have a document type selected; if invoice lookup is enabled, the document set must include an invoice; reconciliation rules must have unique names, and their instructions must use at least one valid variable; any document required by a rule must be a required document (the system marks it as required automatically when publishing); archived or deleted shared rules must be unlinked; no system fields can be missing, and field codes must be unique; dependent fields must reference an existing field or budget setting; repeatable items must include a budget line item field and a cost center.

When reconciliation runs through AkaPay, additional limits apply: 2 to 6 document types, at least one required rule, and no more than 20 rules. Publishing with no changes from the latest version does not create a new version; the existing version is retained.


## Used in these guides

- [Shared rule saving conditions](global-rule-rules.md) — The code must be 1–32 characters (letters, numbers, _ . -) and cannot be changed after creation; the code and name must be unique; instructions must use valid variables; edits apply immediately to all linked request types.
- [Configure and publish a request type](../../guides/config/how-to/publish-request-type.md) — Open a request type, edit its tabs, click Save, then Publish; if publishing fails, a list of issues to fix is displayed.
- [Restore a request type version](../../guides/config/how-to/restore-request-type.md) — Open a request type, click History and Restore on the version you want to revert to, then click Save and Publish to apply it.
