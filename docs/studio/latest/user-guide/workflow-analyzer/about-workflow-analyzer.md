---
id: about-workflow-analyzer
title: About Workflow Analyzer
sidebar_label: About Workflow Analyzer
sidebar_position: 1
description: Static code analysis in akaBot Studio
displayed_sidebar: studioSidebar
---

# About Workflow Analyzer

Workflow Analyzer is a static code analysis tool that helps ensure your automation projects meet quality and development standards. Unlike runtime validation, Workflow Analyzer analyzes workflows without executing them.

Workflow Analyzer uses a set of rules to check for various inconsistencies unrelated to project execution. The rules are based on Automation Best Practices and take into consideration variable and argument naming, empty sequences or workflows, package restrictions, and so on.

![Workflow Analyzer](/static/img/about-workflow-analyzer.png)

The Analyze commands are located on the Design ribbon tab.

The following commands are available:
- **Analyze File** – Analyzes the workflow currently open in the Designer.
- **Analyze Project** – Analyzes all workflows in the current automation project.
- **Analyze Settings** – Opens the **Settings** window, where you can configure Workflow Analyzer rules and their settings.

# Key Concepts

The following concepts help you understand how Workflow Analyzer validates automation projects.

## Rules Naming Convention

Each Workflow Analyzer rule is identified by a unique rule code. A rule code consists of three components:

- **ST (Studio)** – Indicates the rule belongs to akaBot Studio.
- **NMG (Naming)** – Indicates the rule category.
- **001** – The unique rule identifier.

For example:

```text
ST-NMG-001
```

Rule codes are displayed throughout Workflow Analyzer, making it easier to identify, search for, and reference specific rules.

![Analyzer](/static/img/analyzer.png)

## Rule Categories

Workflow Analyzer groups rules into categories based on the aspect of the project they validate. Rule categories make it easier to browse, configure, and manage related rules.

The available rule categories include:

- Naming Rules (ST-NMG-...)
- Design Best Practices (ST-DBP-...)
- Maintainability Rules (ST-MRD-...)
- Performance Rules (ST-PRR-...)
- Security Rules (ST-SEC-...)
- Usage Rules (ST-USG-...)
- Project Anatomy Rules (ST-ANA-...)

## Rule Scope

Each rule has a scope that defines the level at which it is evaluated.

| Scope | Description |
| ------ | ----------- |
| **Activity** | The rules are enforced at activity level, checking variables and their properties. |
| **Workflow** | Rules perform checks in a single project file. |
| **Project** | Checks are performed at project level. |

You can filter rules by scope in the **Analyzer** window.

![Rule Scope](/static/img/all-scopes-wa.png)

## Severity Levels

Each rule is assigned a severity level that indicates the importance of a detected issue.

| Severity | Description |
| -------- | ----------- |
| **Error** | Indicates an issue that should be resolved before running, publishing, or deploying the project. |
| **Warning** | Indicates a recommended improvement to code quality or maintainability. |
| **Info** | Provides informational guidance and development recommendations. |

![Severity Levels](/static/img/severity-levels.png)

## Analysis Scope

Workflow Analyzer supports two analysis scopes:

- **Current Workflow** – Analyzes only the active workflow.
- **Entire Project** – Analyzes all workflows in the current project.

Running analysis on the entire project is recommended before publishing.

![Analysis Scope](/static/img/setting-wa.png)

# Managing Rules

Workflow Analyzer uses configurable rules to validate automation projects. Rules can be enabled, disabled, or customized to meet your organization's development standards.

## Configure Rules

Rules are configured in the **Settings** window. You can enable/disable a rule using the checkbox on its left, or change the securities using the dropdown on its right.

Some rules require no additional configuration, while others contain parameters that you can configure, such as thresholds not to be exceeded, or lists of specific items that are allowed or prohibited. Please note that when you configure rules that contain text fields (for example SecureString Misusage or Package Restrictions), text shouldn't be entered between quotes.
## Reset to Default

If a rule's default values, such as Regex or threshold values, have been modified, you can restore the original settings by right-clicking the rule and selecting **Reset to Default**.

![Reset to Default](/static/img/default.png)

# Validation

Before running **Workflow Analyzer**, validate your project to ensure there are no activity validation errors. Workflow Analyzer can analyze only valid workflows, so any validation issues (displayed as red validation indicators) must be resolved first.

**Important**

> Confirm that the project contains no validation errors before starting Workflow Analyzer. This validation step checks that the workflow is structurally valid. Workflow Analyzer performs **static code analysis** only—it does not execute workflows or validate runtime behavior.

![validation-wa.png](/static/img/validation-wa.png)


# Managing Errors

After Workflow Analyzer completes the analysis, the detected issues are displayed in the Analysis Results window. You can review each issue's severity, error code, description, recommendation, and affected workflow.

Use the available Search box and filter options (such as Scope, Severity, and Error Code) to quickly locate specific issues and focus on the results that are most relevant to your review. You can also export the analysis report for further review or sharing.

This version shifts the focus from simply viewing errors to interacting with the final analysis results.

![Analysis Results](/static/img/managing-errors.png)

# Exporting Workflow Analyzer Results

You can export your analysis results to facilitate documentation, project reviews, or integration into your existing development workflows.

The Workflow Analyzer supports exporting reports in the following formats:

- **HTML Report**: Generates a structured, easy-to-read web page ideal for sharing analysis summaries, complete with project details, dependency information, and a comprehensive breakdown of issues by severity, error code, and file location.

- **CSV**: Provides a raw, data-focused format suitable for importing into spreadsheets or external tracking tools for deeper analysis and custom reporting.

To export, simply click the Export Report button within the analysis interface and select your preferred format.

![Export button](/static/img/analyze-export-button.png)

The result should look like this

![Export Result HTML](/static/img/analyze-export-result.png)

# Command-Line Support

The Aka.RPA.Analyzer.CLI.exe command-line user interface contains a set of parameters for checking files or projects against certain rules.
Aka.RPA.Analyzer.CLI.exe is available in the installation folder:

```text
C:\Program Files\FPT Software\akaBot Platform\WorkflowAnalyzer\Aka.RPA.Analyzer.CLI.exe
```

## Configure Rules

By default, all Workflow Analyzer rules are enabled when Studio is installed, except for a few rules that are disabled by default.

You can configure rules from the Workflow Analyzer Settings window, enable or disable rules by clicking the checkbox next to each one of them. Or from the RuleConfig.json file

You can also configure rules by editing the `RuleConfig.json` file. The configuration file can be found in one of the following locations:

- **Application default location**

  ```text
  C:\Program Files\FPT Software\akaBot Platform\WorkflowAnalyzer\RuleConfig.json
  ```

- **Project-specific location (used when analyzing a project)**

  ```text
  <project-path>\.rules\RuleConfig.json
  ```

Find a specific rule, modify its parameter, change the IsEnabled parameter to false to disable the rule. Optionally, if the path is not accessible, you can place the RuleConfig.json file in a custom location and include the path to the file in the command. 

For more information, see Analyze Files and Projects. Rules are organized according to their unique ID, visible in the Workflow Analyzer Settings also. For example, in the image below only the SecureString for Sensitive Arguments rule was enabled and received the Keywords parameter. This means that argument with that key words must be SecureString type.  

![Workflow Analyzer Rule Configuration](/static/img/analyze-rule-config.png)

### Rule Configuration Properties

Each rule in `RuleConfig.json` contains the following properties:

| Property | Description |
|----------|-------------|
| `RuleId` | Unique identifier of the rule. |
| `IsEnabled` | Indicates whether the rule is enabled. If set to `null`, the value of `DefaultIsEnabled` is used. |
| `DefaultIsEnabled` | Specifies whether the rule is enabled by default. |
| `ErrorLevel` | Severity level reported when the rule is violated. If set to `null`, the value of `DefaultErrorLevel` is used. |
| `DefaultErrorLevel` | Default severity level for the rule (`Error`, `Warning`, or `Info`). |
| `Parameters` | Additional rule-specific parameters, such as `Name` and `Value`. |

---

## Analyze Files and Projects

After configuring the rules, run the **Workflow Analyzer CLI** (`Aka.RPA.Analyzer.CLI.exe`) to analyze workflows or projects.

### Available Commands

| Command | Description |
|---------|-------------|
| `analyze` | Analyzes an entire project. Requires the path to the `project.json` or `project.v1.json` file. |
| `analyze-file` | Analyzes a single workflow file. Requires the path to a `.xaml` file. |

### Command-Line Arguments

| Argument | Description |
|----------|-------------|
| `-p`, `--project-path` | Path to the file to analyze. For `analyze-file`, specify a `.xaml` file. For `analyze`, specify the project's `project.json` or `project.v1.json` file. |
| `-c`, `--config-path` | Optional path to a custom `RuleConfig.json` file. Use this only when the configuration file is not located in the default location. |
| `-h`, `--help` | Displays the available commands and arguments. |
| `-v`, `--version` | Displays the version of `Aka.RPA.Analyzer.CLI.exe`. |

#### Example

The following command analyzes the `Main.xaml` workflow:

```bash
Aka.RPA.Analyzer.CLI.exe analyze-file -p:"C:\Users\datba\Documents\akaBot\RPA00301-1\Main.xaml"
```

### Output

The command returns a JSON-formatted list of rule violations. Each violation contains the following information:

| Field | Description |
|-------|-------------|
| `FilePath` | Path to the analyzed workflow file. |
| `ErrorCode` | Identifier of the violated rule. |
| `ActivityDisplayName` | Display name of the activity or workflow. |
| `Item` | Name and type of the item (for example, an activity or variable) where the violation occurred. |
| `ErrorLevel` | Severity level of the violation (`Error`, `Warning`, or `Info`). |
| `Description` | Description of the rule violation. |
| `RuleName` | Name of the violated rule. |
| `Recommendation` | Suggested actions to resolve the issue. |
| `URL` | Link to the documentation with additional information. |

Example output:

![Workflow Analyzer CLI Result](/static/img/analyze-cli-result.png)