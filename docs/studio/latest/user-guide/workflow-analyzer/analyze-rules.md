---
title: Analyze Rules
sidebar_label: Analyze Rules
sidebar_position: 2
description: Analyze Rules
displayed_sidebar: studioSidebar
---

# Workflow Analyzer Rules

This document provides an overview of the analysis rules defined in the Workflow Analyzer.

## Naming Rules (ST-NMG-...)

| Rule Name | Rule ID | Scope |
| :--- | :--- | :--- |
| [Variable Naming](naming/variable-naming.md) | ST-NMG-001 | Activity |
| [Argument Naming](naming/argument-naming.md) | ST-NMG-002 | Workflow |
| [Display Name Duplication](naming/display-name-duplication.md) | ST-NMG-004 | Workflow |
| [Variable Scoping](naming/variable-shadowing.md) | ST-NMG-005 | Activity |
| [Variable Shadowing](naming/variable-shadowing.md) | ST-NMG-005 | Workflow |
| [Variable Argument Collision](naming/variable-argument-collision.md) | ST-NMG-006 | Workflow |
| [Variable Length](naming/variable-length.md) | ST-NMG-008 | Activity |
| [Prefix Datatable Variables](naming/prefix-datatable-variables.md) | ST-NMG-009 | Activity |
| [Prefix Datatable Arguments](naming/prefix-datatable-arguments.md) | ST-NMG-011 | Workflow |
| [Argument Length](naming/argument-length.md) | ST-NMG-016 | Workflow |

## Design Best Practices (ST-DBP-...)

| Rule Name | Rule ID | Scope |
| :--- | :--- | :--- |
| [Argument Metrics](design-best-practices/high-arguments-count.md) | ST-DBP-002 | Workflow |
| [Empty Catch Block](design-best-practices/empty-catch-block.md) | ST-DBP-003 | Activity |
| [Flowchart Nesting](design-best-practices/flowchart-nesting.md) | ST-DBP-007 | Workflow |
| [Empty Workflow](design-best-practices/empty-workflow.md) | ST-DBP-023 | Workflow |
| [Delay Activity Usage](design-best-practices/delay-activity-usage.md) | ST-DBP-026 | Activity |

## Maintainability Rules (ST-MRD-...)

| Rule Name | Rule ID | Scope |
| :--- | :--- | :--- |
| [Activity Naming](maintainability/activity-name.md) | ST-MRD-002 | Activity |
| [Redundant Sequences](maintainability/redundant-sequences.md) | ST-MRD-005 | Activity |
| [Nested If](maintainability/nested-if.md) | ST-MRD-007 | Workflow |
| [Empty Sequence](maintainability/empty-sequence.md) | ST-MRD-008 | Activity |
| [Deeply Nested Activities](maintainability/deeply-nested-activities.md) | ST-MRD-009 | Workflow |
| [Incomplete If](maintainability/incomplete-if.md) | ST-MRD-017 | Activity |

## Performance Rules (ST-PRR-...)

| Rule Name | Rule ID | Scope |
| :--- | :--- | :--- |
| [Hardcoded Delay](performance/hardcoded-delay-activity.md) | ST-PRR-004 | Activity |

## Security Rules (ST-SEC-...)

| Rule Name | Rule ID | Scope |
| :--- | :--- | :--- |
| [SecureString for Sensitive Arguments](security/securestring-for-sensitive-arguments.md) | ST-SEC-007 | Workflow |
| [SecureString for Sensitive Variables](security/securestring-for-sensitive-variables.md) | ST-SEC-008 | Activity |

## Usage Rules (ST-USG-...)

| Rule Name | Rule ID | Scope |
| :--- | :--- | :--- |
| [Unused Dependencies](usage/unused-dependencies.md) | ST-USG-010 | Project |
| [Package Restrictions](usage/package-restrictions.md) | ST-USG-014 | Project |
| [Minimum Log Messages](usage/minimum-log-messages.md) | ST-USG-020 | Workflow |
| [Activity Restrictions](usage/activity-restrictions.md) | ST-USG-026 | Activity |
| [Required Packages](usage/required-packages.md) | ST-USG-027 | Project |

## Project Anatomy Rules (ST-ANA-...)

| Rule Name | Rule ID | Scope |
| :--- | :--- | :--- |
| [Project Workflow Count](project-anatomy/project-workflow-count.md) | ST-ANA-003 | Project |
| [Main Workflow Exists](project-anatomy/main-workflow-exists.md) | ST-ANA-006 | Project |

