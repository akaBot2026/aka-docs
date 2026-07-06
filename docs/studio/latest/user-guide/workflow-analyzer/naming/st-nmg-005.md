---
id: st-nmg-005
title: ST-NMG-005 - Variable Shadowing
sidebar_label: ST-NMG-005 - Variable Shadowing
sidebar_position: 5
description: ST-NMG-005 - Variable Shadowing
displayed_sidebar: studioSidebar
---
# ST-NMG-005 - Variable Shadowing

**Rule ID:** ST-NMG-005

**Scope:** Workflow

## Description

This rule checks whether variables in the workflow have the same name.

If variable shadowing is detected, a message is logged in the **Analysis Results** window.

![st-nmg-05](/static/img/st-nmg-05.png)

## Recommendation

Variable names should have unique names if they are in different scopes, but the same workflow file.

## Modifying the Rule

In the Analyzer window, find and select the rule. You can enable or disable this rule according to your preferences.
