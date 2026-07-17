---
id: activity-name
title: ST-MRD-002 - Activity Name
sidebar_label: "Activity Name"
sidebar_position: 2
description: ST-MRD-002 - Activity Name
displayed_sidebar: studioSidebar
---
# ST-MRD-002 - Activity Name

**Rule ID:** ST-MRD-002

**Scope:** Activity

## Description

This rule checks if your workflow still uses the default, generic names for activities (such as 'Click', 'Type Into', or 'Sequence'). Relying on default names makes the workflow hard to read, review, and maintain, especially for other RPA developers.

![st-mrd-002](/static/img/st-mrd-002.png)

## Recommendation

Rename your activities to describe exactly what they do in the business process (for example, change 'Click' to 'Click Login Button' or 'Type Into' to 'Enter Username'). This greatly improves readability and makes troubleshooting much easier.
