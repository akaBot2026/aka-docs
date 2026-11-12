---
title: "Shared Rule Save Requirements"
description: "Code must be 1–32 characters (letters, numbers, _, . or -) and cannot be changed after creation; codes and names must be unique; instructions must use existing variables; edits apply immediately to all linked request types."
id: global-rule-rules
sidebar_label: Shared Rule Save Requirements
sidebar_position: 2
displayed_sidebar: akaPaymentSidebar
---

# Shared Rule Save Requirements

Code must be 1–32 characters (letters, numbers, _, . or -) and cannot be changed after creation; codes and names must be unique; instructions must use existing variables; edits apply immediately to all linked request types.

**Requirement level:** Mandatory


- Only operators and administrators can manage shared rules.
- **Code**: 1–32 characters, using only letters, numbers, `_`, `.`, and `-`; the next code is suggested automatically; the code cannot be changed after creation; codes for archived rules are still considered used ("Rule code … has already been used.").
- **Name** must be unique among other shared rules, including archived rules ("Rule name … has already been used."); when renaming, it must not match a rule specific to a linked request type ("Name … matches a rule specific to: …").
- **Name** and **Validation instructions** are required; instructions must use at least one `{{input.…}}` or `{{doc.…}}` variable; the document type and fields mentioned must be included in the Document Types list.
- If two people edit the same rule, the later save fails ("Rule … was edited by someone else. Reload and try again.").
- Changes to a rule in use apply immediately to all linked request types (a confirmation dialog asks "Save and apply"). If a rule in use is archived, those request types will still reconcile according to the rule, but cannot be published until the link is removed (see [Request Type Publishing Requirements](publish-validation.md)).
- When importing a JSON file, rules are matched by code (existing rules are updated, including archived rules; rules with new codes are created). The entire file is rejected if it contains two rules with the same code or name, a name that already belongs to another code in the library ("Rule name … is already used by code …"), invalid instructions, or is not a valid export ("The file is not a valid shared rule export.").


## Used in these guides

- [Create and edit shared reconciliation rules](../../guides/config/how-to/manage-reconciliation-rule.md) — Configuration → Shared Rules: Add a shared rule (Code, Name, Validation Instructions), Edit, Archive, or Restore it; link it to a request type in the Request Flow tab.
