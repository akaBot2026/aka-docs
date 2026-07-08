---
id: st-dbp-007
title: ST-DBP-007 - Flowchart Nesting
sidebar_label: ST-DBP-007 - Flowchart Nesting
sidebar_position: 4
description: ST-DBP-007 - Flowchart Nesting
displayed_sidebar: studioSidebar
---
# ST-DBP-007 - Flowchart Nesting

**Rule ID:** ST-DBP-007

**Scope:** Workflow

## Description

The rule checks whether flowcharts are used as a top layer for maintainability and readability reasons.

## Recommendation

It is recommended to reduce the number of flowchart layers to a minimum to ensure maintainability and readability.

## Modifying the Rule

In the Project Settings window, select the Workflow Analyzer Settings tab. Find and select the rule, as in the image below:

![st-dbp-007](/static/img/st-dbp-007.png)

The default MaxLayers count value is 1. This means that if the Workflow Analyzer finds at least two flowcharts, then a message is logged in the Analysis Results.

Modify the value to 3 and the rule logs an error message only if the number flowcharts surpasses the threshold, in this case 3.

## Reset to Default Value

The default value for ST-DBP-007 is 1.

To reset the value to default right-click the rule in the Settings window, and then click Reset to default.

![st-dbp-007](/static/img/st-dbp-007-reset.png)
