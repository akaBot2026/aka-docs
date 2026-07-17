---
id: main-workflow-exists
title: ST-ANA-006 - Main Workflow Exists
sidebar_label: "Main Workflow Exists"
sidebar_position: 6
description: ST-ANA-006 - Main Workflow Exists
displayed_sidebar: studioSidebar
---
# ST-ANA-006 - Main Workflow Exists

**Rule ID:** ST-ANA-006

**Scope:** Project

## Description

This rule verifies that your project contains a file named exactly `Main.xaml` in the root directory. In akaBot, the `Main.xaml` file acts as the primary entry point (Starting node) for your automation. When you publish a project and run it via akaBot Center or Agent, the system relies on this file to know exactly where to begin execution. Without a `Main.xaml` file, the bot cannot run in a production environment.

![st-ana-006](/static/img/st-ana-006.png)

## Recommendation

If the Workflow Analyzer flags this rule, it means the `Main.xaml` file is missing, renamed, or moved out of the root folder. To resolve this:

1. **Create or Rename:** If you already have a primary workflow that orchestrates the rest of your process, rename it to `Main.xaml` and place it in the project's root folder.
2. **Set as Main:** In the akaBot Studio **Project** panel, right-click the workflow file you want to use as the starting point and select **Set as Main** (this will designate it as the main entry point for the project).
