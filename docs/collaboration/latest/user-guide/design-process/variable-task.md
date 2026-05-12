---
id: variable-task
title: How to Set Variable Task in a Process
sidebar_label: How to Set Variable Task in a Process
sidebar_position: 4
displayed_sidebar: collaborationSidebar
---

# How to Set Variable Task in a Process

The Variable Task is a lightweight process element in akaBot Center that allows designers to set, update, or compute the values of process variables at any point in the workflow without executing a full bot task or requiring human input. Variable tasks are used to perform simple data transformations, initialize counters, concatenate strings, compute dates, or store the result of an expression derived from other process variables.

Because Variable Tasks execute entirely within the process engine without dispatching work to an agent, they complete instantly and add no overhead to the process execution time. They are particularly useful between steps where data needs to be reformatted or enriched before being passed to the next task. For example, a Variable Task can combine a first name and last name variable into a full name, or calculate a payment due date by adding 30 days to an invoice date variable.

Variable Tasks support a range of expression types including arithmetic, string manipulation, date arithmetic, and conditional (ternary) expressions. Multiple variable assignments can be defined within a single Variable Task, each evaluated in order, so the result of one assignment can be used in the next.

## Variable Task Configuration

| Property | Description |
|---|---|
| Task Name | Display name for this task in the designer |
| Variable Assignments | One or more variable name + expression pairs |

## Supported Expression Syntax

| Type | Example Expression | Result |
|---|---|---|
| Arithmetic | `${invoiceAmount} * 1.1` | Invoice amount with 10% tax applied |
| String concat | `${firstName} + ' ' + ${lastName}` | Full name string |
| Date add | `addDays(${invoiceDate}, 30)` | Payment due date |
| Conditional | `${status} == 'Approved' ? 'Yes' : 'No'` | Derived boolean-like string |
| Type cast | `toInt(${quantityStr})` | Convert string to integer |
| Current date | `now()` | Current timestamp |
| String upper | `toUpperCase(${countryCode})` | Uppercased country code |

## Supported Variable Data Types

| Type | Description |
|---|---|
| String | Text values |
| Integer | Whole numbers |
| Decimal | Floating point numbers |
| Boolean | True / False |
| Date | Date without time |
| DateTime | Date with time |
| JSON | Structured JSON object |

## Steps to Add a Variable Task

1. Open the process in the **Process Designer**.
2. Drag the **Variable Task** element from the Task Palette onto the canvas.
3. Position it between the tasks where the variable computation needs to happen.
4. Connect the Variable Task to the preceding and following elements using flow arrows.
5. Click the Variable Task node to open its **Properties** panel.
6. Enter a descriptive **Task Name** (e.g., "Compute Payment Due Date").
7. In the **Variable Assignments** section, click **+ Add Assignment**.
8. For each assignment:
   - Enter the **Variable Name** (create a new variable or select an existing one).
   - Select the **Data Type** of the variable.
   - Enter the **Expression** to compute the value.
9. Add additional assignments as needed; they are evaluated top to bottom.
10. Click **Save** to finalize.
