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
| [Variable Naming](Rules/Activities/VariableNamingRule.md) | ST-NMG-001 | Activity |
| [Argument Naming](Rules/Workflow/ArgumentNamingRule.md) | ST-NMG-002 | Workflow |
| [Display Name Duplication](Rules/Workflow/DisplayNameDuplicationRule.md) | ST-NMG-004 | Workflow |
| [Variable Scoping](Rules/Activities/VariableScopingRule.md) | ST-NMG-005 | Activity |
| [Variable Shadowing](Rules/Workflow/VariableShadowingRule.md) | ST-NMG-005 | Workflow |
| [Variable Argument Collision](Rules/Workflow/VariableArgumentCollisionRule.md) | ST-NMG-006 | Workflow |
| [Variable Length](Rules/Activities/VariableLengthRule.md) | ST-NMG-008 | Activity |
| [Prefix Datatable Variables](Rules/Activities/DataTableVariablePrefixRule.md) | ST-NMG-009 | Activity |
| [Prefix Datatable Arguments](Rules/Workflow/DataTableArgumentPrefixRule.md) | ST-NMG-011 | Workflow |
| [Argument Length](Rules/Workflow/ArgumentLengthRule.md) | ST-NMG-016 | Workflow |

## Design Best Practices (ST-DBP-...)

| Rule Name | Rule ID | Scope |
| :--- | :--- | :--- |
| [Argument Metrics](Rules/Workflow/ArgumentMetricsRule.md) | ST-DBP-002 | Workflow |
| [Empty Catch Block](Rules/Activities/EmptyCatchBlockRule.md) | ST-DBP-003 | Activity |
| [Flowchart Nesting](Rules/Workflow/FlowchartNestingRule.md) | ST-DBP-007 | Workflow |
| [Empty Workflow](Rules/Workflow/EmptyWorkflowRule.md) | ST-DBP-023 | Workflow |
| [Delay Activity Usage](Rules/Activities/DelayActivityRule.md) | ST-DBP-026 | Activity |

## Maintainability Rules (ST-MRD-...)

| Rule Name | Rule ID | Scope |
| :--- | :--- | :--- |
| [Activity Naming](Rules/Activities/ActivityNamingRule.md) | ST-MRD-002 | Activity |
| [Redundant Sequences](Rules/Activities/RedundantSequenceRule.md) | ST-MRD-005 | Activity |
| [Nested If](Rules/Workflow/NestedIfRule.md) | ST-MRD-007 | Workflow |
| [Empty Sequence](Rules/Activities/EmptySequenceRule.md) | ST-MRD-008 | Activity |
| [Deeply Nested Activities](Rules/Workflow/DeeplyNestedActivitiesRule.md) | ST-MRD-009 | Workflow |
| [Incomplete If](Rules/Activities/IncompleteIfRule.md) | ST-MRD-017 | Activity |

## Performance Rules (ST-PRR-...)

| Rule Name | Rule ID | Scope |
| :--- | :--- | :--- |
| [Hardcoded Delay](Rules/Activities/HardcodedDelayRule.md) | ST-PRR-004 | Activity |

## Security Rules (ST-SEC-...)

| Rule Name | Rule ID | Scope |
| :--- | :--- | :--- |
| [SecureString for Sensitive Arguments](Rules/Workflow/SecureStringArgumentRule.md) | ST-SEC-007 | Workflow |
| [SecureString for Sensitive Variables](Rules/Activities/SecureStringVariableRule.md) | ST-SEC-008 | Activity |

## Usage Rules (ST-USG-...)

| Rule Name | Rule ID | Scope |
| :--- | :--- | :--- |
| [Unused Dependencies](Rules/Project/UnusedDependenciesRule.md) | ST-USG-010 | Project |
| [Package Restrictions](Rules/Project/PackageRestrictionsRule.md) | ST-USG-014 | Project |
| [Minimum Log Messages](Rules/Workflow/MinimumLogMessagesRule.md) | ST-USG-020 | Workflow |
| [Activity Restrictions](Rules/Activities/ActivityRestrictionRule.md) | ST-USG-026 | Activity |
| [Required Packages](Rules/Project/RequiredPackagesRule.md) | ST-USG-027 | Project |

## Project Anatomy Rules (ST-ANA-...)

| Rule Name | Rule ID | Scope |
| :--- | :--- | :--- |
| [Project Workflow Count](Rules/Project/ProjectWorkflowCountRule.md) | ST-ANA-003 | Project |
| [Main Workflow Exists](Rules/Project/MainWorkflowExistsRule.md) | ST-ANA-006 | Project |

