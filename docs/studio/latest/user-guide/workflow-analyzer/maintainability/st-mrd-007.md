---
id: st-mrd-007
title: ST-MRD-007 - Nested If
sidebar_label: ST-MRD-007 - Nested If
sidebar_position: 7
description: ST-MRD-007 - Nested If
displayed_sidebar: studioSidebar
---
# ST-MRD-007 - Nested If

**Rule ID:** ST-MRD-007

**Scope:** Workflow

## Description

Detects deeply nested 'If' activities which increase code complexity and reduce maintainability (Spaghetti code)

![st-mrd-007](/static/img/st-mrd-007.png)

## Recommendation

Refactor the logic by using a 'Switch', 'Else If' ladder, or by extracting complex decision branches into separate workflows

## Modifying the Rule

In the ribbon, click the **Analyze** button dropdown and select **Analyze Settings** to open the Analyzer window. Find and select the rule. You can modify the **MaxDepth** parameter according to your preferences.

## Reset to Default Values

The default value for ST-MRD-007 MaxDepth is `3`.

To reset the value to default, right-click the rule in the Analyzer window, and then click **Reset to default**.

![st-mrd-007-rtd.png](/static/img/st-mrd-007-rtd.png)