---
id: operator-types
title: Types of Operator When Designing a Process
sidebar_label: Types of Operator When Designing a Process
sidebar_position: 9
displayed_sidebar: collaborationSidebar
---

# Types of Operator When Designing a Process

Condition expressions in akaBot Center are used in gateway flows, escalation rules, loop conditions, and variable task expressions to evaluate process variables and determine the execution path. These expressions are built using a combination of comparison operators that compare two values, and logical operators that combine multiple comparisons into a single boolean result. Understanding the full set of available operators is essential for writing correct, readable, and maintainable condition expressions.

Operators in akaBot Center condition expressions follow a straightforward syntax: `${variableName} <operator> <value>`. String values should be enclosed in single quotes, and date values should use the `date()` helper function for clarity. Nested expressions can be grouped using parentheses to control evaluation order, especially when mixing AND and OR logical operators in the same expression.

Expressions are evaluated at runtime with the actual values of the process variables at that point in the instance. If a variable has not been set and its value is null, comparison operators that expect a non-null operand will evaluate to false rather than throwing an error. Designers should always account for the null case by either providing default values via Variable Tasks or by adding a null check branch.

## Comparison Operators

| Operator | Symbol | Description | Example |
|---|---|---|---|
| Equals | `==` | True if both values are equal | `${status} == 'Approved'` |
| Not Equals | `!=` | True if values are different | `${status} != 'Rejected'` |
| Greater Than | `>` | True if left value is greater | `${amount} > 1000` |
| Greater Than or Equal | `>=` | True if left is greater or equal | `${amount} >= 1000` |
| Less Than | `<` | True if left value is smaller | `${retryCount} < 3` |
| Less Than or Equal | `<=` | True if left is smaller or equal | `${score} <= 50` |
| Contains | `contains(a, b)` | True if string a contains substring b | `contains(${email}, '@company.com')` |
| Starts With | `startsWith(a, b)` | True if string a starts with b | `startsWith(${code}, 'INV-')` |
| Ends With | `endsWith(a, b)` | True if string a ends with b | `endsWith(${filename}, '.pdf')` |
| Is Null | `isNull(a)` | True if the variable is null or not set | `isNull(${approvalDate})` |
| Is Not Null | `isNotNull(a)` | True if the variable has a value | `isNotNull(${approvalDate})` |
| In List | `in(a, [b,c,d])` | True if value a is in the provided list | `in(${country}, ['VN','SG','TH'])` |

## Logical Operators

| Operator | Symbol | Description | Example |
|---|---|---|---|
| AND | `&&` | True if all combined conditions are true | `${amount} > 1000 && ${status} == 'Pending'` |
| OR | `\|\|` | True if at least one condition is true | `${priority} == 'High' \|\| ${vip} == true` |
| NOT | `!` | Inverts the result of a condition | `!isNull(${referenceId})` |

## Expression Examples

```javascript
// Route to senior approver if amount exceeds threshold or requester is flagged
${invoiceAmount} > 50000 || ${requesterFlag} == 'ESCALATE'

// Proceed to payment only if all three checks pass
${creditCheckPassed} == true && ${compliancePassed} == true && ${duplicateCheckPassed} == true

// Loop condition: repeat until all required fields are filled
isNull(${taxCode}) || isNull(${bankAccount})

// Case-insensitive status check using contains
contains(toUpperCase(${statusCode}), 'APPROVED')
```

## Tips for Writing Conditions

- Always initialize variables with a default value to avoid unexpected null evaluations.
- Use parentheses to clarify precedence: `(${a} > 0 && ${b} == 'X') || ${c} == true`.
- Test expressions using the **Expression Tester** in the gateway flow property panel before saving.
- For complex multi-branch logic, consider using a Variable Task to compute a single derived variable and then branch on that variable's value.
