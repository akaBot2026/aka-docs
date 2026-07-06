---
id: st-nmg-001
title: ST-NMG-001 - Variable Naming
sidebar_label: ST-NMG-001 - Variable Naming
sidebar_position: 2
description: ST-NMG-001 - Variable Naming
displayed_sidebar: studioSidebar
---
# ST-NMG-001 - Variable Naming

**Rule ID:** ST-NMG-001

**Scope:** Activity

## Description

Variables in a project should follow a specific naming convention to make it easier to understand the purpose of the variable and to maintain it. The variable name should be meaningful to accurately describe its usage throughout the project.

This rule analyzes all variables in the project and determines whether they follow the specified naming convention (Regex, Prefix). If not, a message is logged in the **Analysis Results** window.

![st-nmg-01](/static/img/st-nmg-01.png)

## Recommendation

Make sure all the variables follow the naming convention. The rule checks that variable names abide by the configured Regex expression and Prefix. By default, only the Prefix is configured (`v_`).

If you configure a Regex expression, for example `^[a-z][a-zA-Z0-9]*$`, the variable name abides by the rule if it starts with a lower case letter, followed by upper or lower case letters or numbers. It must also match the prefix specified in the rule parameters.

For example, if the variable name in the workflow is `v_helloWorld1` then it matches the default naming convention set in this rule. 

To resolve the warning, rename the variable in the Variables panel to match the naming convention.

## Examples of Regex Expressions
The default regex expression for this rule can be changed to another naming convention. Check the list below:

### Camel Case
The camel case convention specifies that each word in the middle of the variable name begins with a capital letter, with no intervening spaces or punctuation.

Example of Regex expression: `^(dt_)?([A-Z]|[a-z])+([A-Z]|[a-z]|[0-9])`.
Valid variable names: `Hello1World2`, `helloWorld`, `Hello1World`.

### Pascal Case
The Pascal case naming convention specifies that the variable name must contain concatenated capitalized words.

Example of Regex expression: `^(dt_)?([A-Z])+([A-Z]|[a-z]|[0-9])`.
Valid names: `Hello1World2`, `HelloWorld`, `Hello1World`.

## Examples of Prefixes
The default prefix for this rule is `v_`, but it can be changed to match your specific naming conventions. Some common prefixes based on data types include:

* **String:** `str_` (e.g., `str_FirstName`)
* **Integer:** `int_` (e.g., `int_Counter`)
* **Boolean:** `bool_` (e.g., `bool_IsValid`)
* **DataTable:** `dt_` (e.g., `dt_EmployeeData`)
* **List:** `list_` (e.g., `list_EmailAddresses`)
* **Dictionary:** `dict_` (e.g., `dict_ConfigSettings`)
* **Generic Variable:** `v_` (e.g., `v_Result`)

## Parameters

* **Regex:** The regular expression used to validate the variable name. By default, this parameter is empty. An example Regex is `^[a-z][a-zA-Z0-9]*$`.
* **Prefix:** The prefix required for the variable name. Default is `v_`.

## Modifying the Rule

In the Analyzer window, find the rule and select it. You can modify the **Regex** or **Prefix** parameters according to your own naming conventions.

## Reset to Default

By default, the rule is enabled. You can reset it to its default settings by right-clicking the rule in the Analyzer window and clicking **Reset to default**.

![rtd-nmg-001](/static/img/rtd-nmg-001.png)
