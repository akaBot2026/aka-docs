---
id: st-nmg-008
title: ST-NMG-008 - Variable Length
sidebar_label: ST-NMG-008 - Variable Length
sidebar_position: 7
description: ST-NMG-008 - Variable Length
displayed_sidebar: studioSidebar
---
# ST-NMG-008 - Variable Length

**Rule ID:** ST-NMG-008

**Scope:** Activity

## Description

Ensures that variable names are descriptive but not excessively long, maintaining code readability

![st-nmg-08](/static/img/st-nmg-08.png)

## Recommendation

Shorten the variable name to be more concise while maintaining its descriptive meaning

## Modifying the Rule

In the ribbon, click the **Analyze** button dropdown and select **Analyze Settings** to open the Analyzer window. Find and select the rule. You can add a custom number of characters in the **MaxLength** field.

If we add the number 10, then the rule checks if the names of variables defined in the file or project exceed 10 characters.

## Reset to Default Value

The default value for ST-NMG-008 MaxLength is `20`.

To reset the value to default, right-click the rule in the Analyzer window, and then click **Reset to default**.

![rtd-nmg-008](/static/img/rtd-nmg-008.png)