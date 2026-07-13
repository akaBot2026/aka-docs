---
id: project-workflow-count
title: ST-ANA-003 - Project Workflow Count
sidebar_label: "Project Workflow Count"
sidebar_position: 3
description: ST-ANA-003 - Project Workflow Count
displayed_sidebar: studioSidebar
---
# ST-ANA-003 - Project Workflow Count

**Rule ID:** ST-ANA-003

**Scope:** Project

## Description

This rule counts and lists the total number of workflow (`.xaml`) files inside your project folder. 

Unlike other rules that throw errors or warnings, this rule acts primarily as an **informational metric**. It provides a quick snapshot of your project's size and complexity.

![st-ana-003](/static/img/st-ana-003.png)

## Recommendation & Best Practices

While there is no strict "maximum" limit for the number of workflows, tracking this count helps RPA Developers maintain code quality and scalability:

- **Too Few Workflows (e.g., 1 or 2):** If a complex business process is crammed entirely into a single `Main.xaml` file, it becomes a "monolithic" bot (Spaghetti code). This makes debugging, testing, and team collaboration extremely difficult. **Recommendation:** Break the logic down into smaller, reusable workflow files.
- **Too Many Workflows:** Conversely, if a relatively simple process has dozens of tiny workflow files, it might be over-engineered, making it difficult to trace the execution path.

Use this metric during code reviews to ensure your project is modularized appropriately, ideally following standard architectural patterns (like REFramework).
