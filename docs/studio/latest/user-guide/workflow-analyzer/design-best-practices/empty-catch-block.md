---
id: empty-catch-block
title: ST-DBP-003 - Empty Catch Block
sidebar_label: "Empty Catch Block"
sidebar_position: 3
description: ST-DBP-003 - Empty Catch Block
displayed_sidebar: studioSidebar
---
# ST-DBP-003 - Empty Catch Block

**Rule ID:** ST-DBP-003

**Scope:** Activity

## Description

This rule checks if a `Try Catch` activity has an empty `Catch` block. Catching an error without doing anything (like logging the error or handling it) simply hides the error. This makes it very difficult to troubleshoot because the automation will fail silently without leaving a trace.

![st-dbp-003](/static/img/st-dbp-003.png)

## Recommendation

Always add at least a **Log Message** activity inside the `Catch` block to record the error details. This helps you easily trace and fix issues if the workflow encounters an exception.

