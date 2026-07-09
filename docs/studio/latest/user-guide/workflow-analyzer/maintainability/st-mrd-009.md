---
id: st-mrd-009
title: ST-MRD-009 - Deeply Nested Activities
sidebar_label: ST-MRD-009 - Deeply Nested Activities
sidebar_position: 9
description: ST-MRD-009 - Deeply Nested Activities
displayed_sidebar: studioSidebar
---
# ST-MRD-009 - Deeply Nested Activities

**Rule ID:** ST-MRD-009

**Scope:** Workflow

## Description

The rule checks whether any activity is nested too deeply within other activities for maintainability and readability reasons. The default threshold is 7.

![st-mrd-009](/static/img/st-mrd-009.png)

## Recommendation

It is recommended to reduce the nesting depth by refactoring the workflow into multiple smaller, reusable workflows.

## Parameters

*   **Threshold:** The maximum number of nested activities allowed. Default value: `7`.

## Modifying the Rule

In the ribbon, click the **Analyze** button dropdown and select **Analyze Settings** to open the Analyzer window. Find and select the rule. You can enable or disable this rule according to your preferences.

This means that if the Workflow Analyzer finds at least 7 nested activities, a message is logged in the Error List. You can modify the threshold value (e.g., to 3), and the rule will log an error message only if the number of nested activities surpasses the new threshold.

### Reset to Default Value

To reset the value to default, right-click the rule in the Analyzer window, and then click **Reset to default**.

![st-mrd-009-rtd](/static/img/st-mrd-009-rtd.png)