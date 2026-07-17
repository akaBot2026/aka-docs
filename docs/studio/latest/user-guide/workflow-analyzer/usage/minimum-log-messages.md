---
id: minimum-log-messages
title: ST-USG-020 - Minimum Log Messages
sidebar_label: "Minimum Log Messages"
sidebar_position: 20
description: ST-USG-020 - Minimum Log Messages
displayed_sidebar: studioSidebar
---
# ST-USG-020 - Minimum Log Messages

**Rule ID:** ST-USG-020

**Scope:** Workflow

## Description

Ensures that a workflow contains at least a minimum number of Log Message activities for better traceability.

![st-usg-020](/static/img/st-usg-020.png)

## Recommendation

Add more Log Message activities to track the execution flow, especially at the start, end, and critical decision points.

## Modifying the Rule

In the ribbon, click the **Analyze** button dropdown and select **Analyze Settings** to open the Analyzer window. Find and select the rule. You can modify the **MinLogs** parameter according to your preferences.

## Reset to Default Value

The default value for ST-USG-020 MinLogs is `2`.

To reset the value to default, right-click the rule in the Analyzer window, and then click **Reset to default**.

![st-usg-020-rtd](/static/img/st-usg-020-rtd.png)
