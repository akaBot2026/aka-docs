---
id: st-prr-004
title: ST-PRR-004 - Hardcoded Delay Activity
sidebar_label: ST-PRR-004 - Hardcoded Delay Activity
sidebar_position: 4
description: ST-PRR-004 - Hardcoded Delay Activity
displayed_sidebar: studioSidebar
---
# ST-PRR-004 - Hardcoded Delay

**Rule ID:** ST-PRR-004

**Scope:** Activity

## Description

Detects 'Delay' activities that use hardcoded time values (Literals) instead of variables or configurations

![st-prr-004](/static/img/st-prr-004.png)

## Recommendation

Use a variable or a configuration setting for the Delay duration to allow for environment-specific adjustments without code changes

## Modifying the Rule

In the ribbon, click the **Analyze** button dropdown and select **Analyze Settings** to open the Analyzer window. Find and select the rule. You can enable or disable this rule according to your preferences.
