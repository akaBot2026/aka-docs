---
id: incomplete-if
title: ST-MRD-017 - Incomplete If
sidebar_label: "Incomplete If"
sidebar_position: 17
description: ST-MRD-017 - Incomplete If
displayed_sidebar: studioSidebar
---
# ST-MRD-017 - Incomplete If

**Rule ID:** ST-MRD-017

**Scope:** Activity

## Description

This rule detects any **If** activity where *both* the `Then` branch and the `Else` branch are left completely empty. An `If` activity evaluates a logical condition (e.g., `isSuccess = True`). However, if both the `Then` and `Else` branches are empty, the bot evaluates the condition but does absolutely nothing with the result. This is considered "dead code". It wastes processing time, causes confusion for future developers reading the workflow, and usually indicates that the developer forgot to finish implementing their business logic.

![st-mrd-017](/static/img/st-mrd-017.png)

## Recommendation

To resolve this issue and improve code quality:

1. **Delete the If Activity:** If the condition check is no longer relevant to your business process, delete the entire `If` activity.
2. **Complete the Logic:** If the condition is necessary, ensure you drag and drop the appropriate activities into the `Then` (if the condition is met) or `Else` (if the condition is not met) branches.
3. **Use a Comment:** If you intentionally left a branch empty for future development, drop a `Comment` activity inside it to explain your reasoning to other developers.
