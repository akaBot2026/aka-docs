---
id: empty-sequence
title: ST-MRD-008 - Empty Sequence
sidebar_label: "Empty Sequence"
sidebar_position: 8
description: ST-MRD-008 - Empty Sequence
displayed_sidebar: studioSidebar
---
# ST-MRD-008 - Empty Sequence

**Rule ID:** ST-MRD-008

**Scope:** Activity

## Description

This rule scans your automation project to detect any **Sequence** activities that contain no child activities inside them (i.e., they are completely empty). Empty sequences are usually "leftovers" created during the development process—often when a developer drags in a sequence as a placeholder but forgets to implement the logic, or when they delete the contents of a sequence but forget to delete the container itself. Leaving empty sequences in your workflow inflates the size of the `.xaml` file, clutters the visual interface of akaBot Studio, and makes the automation harder for other team members to read and maintain.

![st-mrd-008](/static/img/st-mrd-008.png)

## Recommendation

If the Analyzer flags this rule, you should clean up your workflow:

1. **Delete Dead Code:** If the empty sequence is no longer needed, simply click on it and press `Delete`.
2. **Implement Logic:** If the sequence was meant to be a placeholder for future logic, ensure you add the necessary activities (or at least a `Log Message` or `Comment` activity to explain why it is currently empty).
