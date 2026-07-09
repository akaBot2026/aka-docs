---
id: st-dbp-003
title: ST-DBP-003 - Empty Catch Block
sidebar_label: ST-DBP-003 - Empty Catch Block
sidebar_position: 3
description: ST-DBP-003 - Empty Catch Block
displayed_sidebar: studioSidebar
---
# ST-DBP-003 - Empty Catch Block

**Rule ID:** ST-DBP-003

**Scope:** Activity

## Description

The rule checks whether exceptions are caught with a purpose, and not only to prevent error messages

![st-dbp-003](/static/img/st-dbp-003.png)

## Recommendation

It is recommended to insert log messages in the Catch block of a Try Catch activity, in addition to the exception handling itself

## Modifying the Rule

In the ribbon, click the **Analyze** button dropdown and select **Analyze Settings** to open the Analyzer window. Find and select the rule. You can enable or disable this rule according to your preferences.
