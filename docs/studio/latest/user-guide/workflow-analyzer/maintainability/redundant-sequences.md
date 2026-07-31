---
id: redundant-sequences
title: ST-MRD-005 - Redundant Sequences
sidebar_label: "Redundant Sequences"
sidebar_position: 5
description: ST-MRD-005 - Redundant Sequences
displayed_sidebar: studioSidebar
---
# ST-MRD-005 - Redundant Sequences

**Rule ID:** ST-MRD-005

**Scope:** Activity

## Description

This rule detects `Sequence` activities that contain only one single activity inside them. Using a Sequence to hold just one item creates unnecessary layers (nesting) in your workflow, making the visual layout cluttered and harder to read.

![st-mrd-005](/static/img/st-mrd-005.png)

## Recommendation

Simply drag the single child activity out of the Sequence, and then delete the empty Sequence. This flattens your workflow and keeps the structure clean.

