---
id: st-nmg-006
title: ST-NMG-006 - Variable Argument Collision
sidebar_label: ST-NMG-006 - Variable Argument Collision
sidebar_position: 6
description: ST-NMG-006 - Variable Argument Collision
displayed_sidebar: studioSidebar
---
# ST-NMG-006 - Variable Argument Collision

**Rule ID:** ST-NMG-006

**Scope:** Workflow

## Description

This rule checks whether variables have the same name as an existing argument from the same workflow.

If a collision is detected, a message is logged in the **Analysis Results** window.

![st-nmg-06](/static/img/st-nmg-06.png)

## Recommendation

The names of variables and arguments should be unique. Although it is technically possible to have the same name, it could create confusion when debugging the workflow.

## Modifying the Rule

In the Analyzer window, find and select the rule. You can enable or disable this rule according to your preferences.
