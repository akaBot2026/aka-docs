---
id: hardcoded-delay-activity
title: ST-PRR-004 - Hardcoded Delay Activity
sidebar_label: "Hardcoded Delay Activity"
sidebar_position: 4
description: ST-PRR-004 - Hardcoded Delay Activity
displayed_sidebar: studioSidebar
---
# ST-PRR-004 - Hardcoded Delay

**Rule ID:** ST-PRR-004

**Scope:** Activity

## Description

This rule checks if a **Delay** activity uses a fixed, manually typed time duration (also known as a hardcoded literal, e.g., `"00:00:05"`) rather than reading the value from a variable or a configuration setting.

Using fixed time values directly inside your workflow makes it difficult to adjust the delay later. For example, if you need a different delay time for a Testing environment compared to a Production environment, you would have to manually open and edit the workflow to change it.

![st-prr-004](/static/img/st-prr-004.png)

## Recommendation

Instead of typing the exact time duration directly into the Delay activity, it is highly recommended to store the duration in a **Variable**, an **Argument**, or an external **Configuration file**. 

By passing this variable to the Delay activity, you can easily manage and update the waiting time in the future without modifying the underlying workflow code.
