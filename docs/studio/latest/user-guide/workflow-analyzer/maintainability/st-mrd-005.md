---
id: st-mrd-005
title: ST-MRD-005 - Redundant Sequences
sidebar_label: ST-MRD-005 - Redundant Sequences
sidebar_position: 5
description: ST-MRD-005 - Redundant Sequences
displayed_sidebar: studioSidebar
---
# ST-MRD-005 - Redundant Sequences

**Rule ID:** ST-MRD-005

**Scope:** Activity

## Description

Finds sequences that contain only a single child activity, adding unnecessary nesting

![st-mrd-005](/static/img/st-mrd-005.png)

## Recommendation

Move the child activity out of the sequence and remove the redundant sequence container

## Modifying the Rule

In the ribbon, click the **Analyze** button dropdown and select **Analyze Settings** to open the Analyzer window. Find and select the rule. You can enable or disable this rule according to your preferences.
