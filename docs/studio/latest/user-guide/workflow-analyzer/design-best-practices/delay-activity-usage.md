---
id: delay-activity-usage
title: ST-DBP-026 - Delay Activity Usage
sidebar_label: "Delay Activity Usage"
sidebar_position: 6
description: ST-DBP-026 - Delay Activity Usage
displayed_sidebar: studioSidebar
---
# ST-DBP-026 - Delay Activity Usage

**Rule ID:** ST-DBP-026

**Scope:** Workflow

## Description

The rule checks whether the Delay activity is used in the workflow file, which can lead to brittle automation

## Recommendation

Consider using dynamic waits (e.g., Wait Element Exists) instead of static delays

![st-dbp-026](/static/img/st-dbp-026.png)
