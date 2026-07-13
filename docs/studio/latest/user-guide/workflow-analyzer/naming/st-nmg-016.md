---
id: st-nmg-016
title: ST-NMG-016 - Argument Length
sidebar_label: ST-NMG-016 - Argument Length
sidebar_position: 11
description: ST-NMG-016 - Argument Length
displayed_sidebar: studioSidebar
---
# ST-NMG-016 - Argument Length

**Rule ID:** ST-NMG-016

**Scope:** Workflow

## Description

Detects argument names that exceed the recommended maximum length

![st-nmg-016](/static/img/st-nmg-016.png)

## Recommendation

Use a more concise name for the argument

## Modifying the Rule

In the ribbon, click the **Analyze** button dropdown and select **Analyze Settings** to open the Analyzer window. Find and select the rule. You can add a custom number of characters in the **MaxLength** field.

If we add the number 10, then the rule checks if the names of arguments defined in the file or project exceed 10 characters.

## Reset to Default Values

The default value for ST-NMG-016 MaxLength is `30`.

To reset the value to default, right-click the rule in the Analyzer window, and then click **Reset to default**.

![rtd-nmg-016](/static/img/rtd-nmg-016.png)
