---
id: parent-variable-shadowing
title: ST-NMG-003 - Parent Variable Shadowing
sidebar_label: "Parent Variable Shadowing"
sidebar_position: 4
description: ST-NMG-003 - Parent Variable Shadowing
displayed_sidebar: studioSidebar
---
# ST-NMG-003 - Parent Variable Shadowing

**Rule ID:** ST-NMG-003

**Scope:** Workflow

## Description

This rule checks if you have created a variable inside a specific activity (like a Sequence or Loop) that has the exact same name as another variable in the overall workflow (the parent scope) or as an argument. When this happens, the inner variable "hides" or "shadows" the outer one. This can cause confusing errors where your automation uses the wrong data during execution.

![st-nmg-003](/static/img/st-nmg-003.png)

## Recommendation

Rename the variable in the inner (child) scope to make it unique. This ensures the workflow uses the correct variable and avoids unexpected behaviors.
