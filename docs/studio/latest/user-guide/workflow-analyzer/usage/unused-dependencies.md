---
id: unused-dependencies
title: ST-USG-010 - Unused Dependencies
sidebar_label: "Unused Dependencies"
sidebar_position: 10
description: ST-USG-010 - Unused Dependencies
displayed_sidebar: studioSidebar
---
# ST-USG-010 - Unused Dependencies

**Rule ID:** ST-USG-010

**Scope:** Project

## Description

Detects packages declared in the project configuration file (`project.json` or `project.v1.json`) that are never used in any of the project's `.xaml` files

![st-usg-010](/static/img/st-usg-010.png)

## Recommendation

Remove the unused package from project dependencies to reduce project size and load time
