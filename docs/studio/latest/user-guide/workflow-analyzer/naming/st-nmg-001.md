ST-NMG-001 - Variables Naming Convention
Rule ID: ST-NMG-001

Scope: Activity

Description​
Variables in a project should follow a specific naming convention to make it easier to understand the purpose of the variable and to maintain it. The variable name should be meaningful to accurately describe its usage throughout the project.

This rule analyzes all variables in the project and determines whether they follow the specific convention. If not, a message is logged in the Error List panel.

Recommendation​
Make sure all the variables follow the naming convention. The rule checks that variable names abide by this default Regex expression ^(dt\_)?([A-Z]|[a-z])+([0-9])\*$.

According to the above Regex expression, the variable name abides by the rule if it starts with a lower or upper case letter which can be preceded by the prefix dt\_ recommended for DataTable variables, followed by a lower or upper case letter, and then one or more numbers.

For example, if the variable name in the workflow is HelloWorld1 then it matches the default Regex expression set in this rule.

Modifying the Rule​
In the Project Settings window, select the Workflow Analyzer tab. Find the rule and select the rule, as in the image below:
