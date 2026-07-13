---
id: argument-naming
title: ST-NMG-002 - Argument Naming
sidebar_label: "Argument Naming"
sidebar_position: 3
description: ST-NMG-002 - Argument Naming
displayed_sidebar: studioSidebar
---
# ST-NMG-002 - Argument Naming

**Rule ID:** ST-NMG-002

**Scope:** Workflow

## Description

Arguments in a project should follow a specific naming convention to make it easier to understand the purpose of the argument and to maintain it. The argument name should be meaningful to accurately describe its usage throughout the project.

This rule analyzes all arguments in the project and determines whether they follow the specific convention. If not, a message is logged in the Analysis Results window.

![st-nmg-02](/static/img/st-nmg-02.png)

## Recommendation

Make sure all the arguments follow the naming convention. The rule checks that argument names abide by this default Regex expression `^(in\_|out\_|io\_)?([A-Z]|[a-z])+([0-9])*$`.

According to the above Regex expression, the argument name abides by the rule if it starts with a lower or upper case letter which can be preceded by the prefix `in_`, `out_`, or `io_` recommended for arguments, followed by a lower or upper case letter, and then one or more numbers.

For example, if the argument name in the workflow is `in_HelloWorld1` then it matches the default Regex expression set in this rule.

## Examples of Regex Expressions
The default regex expression for this rule can be changed to another naming convention. Check the list below:

### Camel case
The camel case convention specifies that each word in the middle of the argument name begins with a capital letter, with no intervening spaces or punctuation.

Example of Regex expression: `^in_(dt_)?([A-Z]|[a-z]|[0-9])+([A-Z]|[a-z]|[0-9])`.
Valid argument names: `in_Hello1World2`, `in_helloWorld`, `in_Hello1World`.

### Pascal case
The Pascal case naming convention specifies that the argument name must contain concatenated capitalized words.

Example of Regex expression: `^in_(dt_)?([A-Z]|[0-9])+([A-Z]|[a-z]|[0-9])`.
Valid names: `in_Hello1World2`, `in_HelloWorld`, `in_Hello1World`.

### Kebab case
The Kebab case naming convention is similar to snake case, except that it replaces spaces with hyphens rather than underscores.

Example of Regex expression: `^in_(dt_)?([a-z]|[A-Z]|[0-9])+Ã¢â‚¬Â([a-z]|[A-Z]|[0-9])`
Valid names: `in_Hello1Ã¢â‚¬ÂWorld2`, `in_HelloÃ¢â‚¬ÂWorld`.

## Examples of Prefixes
The prefixes for this rule can be configured to match your project's naming convention for arguments. Some common prefixes based on argument directions include:

* **In Argument:** `in_` (e.g., `in_Config`)
* **Out Argument:** `out_` (e.g., `out_TransactionData`)
* **In/Out Argument:** `io_` (e.g., `io_RetryNumber`)

## Modifying the Rule
In the ribbon, click the **Analyze** button dropdown and select **Analyze Settings** to open the Analyzer window. Find the rule and select it. You can modify the **Regex** or **Prefix** parameters according to your own naming conventions.

## Reset to Default Values
The default values for ST-NMG-002 Regex are:

* InRegex: `^in_(dt_)?([A-Z]|[a-z])+([0-9])*$`
* OutRegex: `^out_(dt_)?([A-Z]|[a-z])+([0-9])*$`
* InOutRegex: `^io_(dt_)?([A-Z]|[a-z])+([0-9])*$`

To reset these values to default, right-click the rule in the Analyzer window, and then click **Reset to default**.

![rtd-nmg-002](/static/img/rtd-nmg-002.png)
