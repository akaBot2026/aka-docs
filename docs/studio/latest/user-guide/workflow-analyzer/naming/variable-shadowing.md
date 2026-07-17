---
id: variable-shadowing
title: ST-NMG-005 - Variable Shadowing
sidebar_label: "Variable Shadowing"
sidebar_position: 6
description: ST-NMG-005 - Variable Shadowing
displayed_sidebar: studioSidebar
---
# ST-NMG-005 - Variable Shadowing

**Rule ID:** ST-NMG-005

**Scope:** Workflow

## Description

This rule checks if you have created a variable inside a specific activity (like a Sequence or Loop) that has the exact same name as another variable in the overall workflow (the parent scope) or as an argument. When this happens, the inner variable "hides" or "shadows" the outer one. This can cause confusing errors where your automation uses the wrong data during execution.

![st-nmg-05](/static/img/st-nmg-05.png)

## Recommendation

Rename the variable in the inner (child) scope to make it unique. This ensures the workflow uses the correct variable and avoids unexpected behaviors.

