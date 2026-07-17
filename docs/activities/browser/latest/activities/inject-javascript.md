---
id: inject-javascript
title: "Inject Javascript"
sidebar_label: "Inject Javascript"
sidebar_position: 23
description: "Inject Javascript activity documentation."
displayed_sidebar: activitiesSidebar
---
# Inject Javascript

RCA.Activities.Browser.InjectJs

## **Description**

The **Inject JavaScript** activity allows you to execute custom JavaScript code within the context of the active webpage in the browser. Unlike other UI automation activities, it does not require a specific target element or selector. Instead, it runs directly in the page's execution environment.

![image-20220505134721-2.png](/static/img/59161b_image-20220505134721-2.png)

(\* For Mandatory)

**Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **How it Works**

1. **Inline Code or External File**: You can input the JavaScript code directly as a string or provide the path to an external `.js` file in the **Script File** property.
2. **Passing Variables (Arguments)**: You can pass data from akaBot variables into the JavaScript function parameters using the **Arguments** collection.
3. **Retrieving Results (Script Output)**: You can return a string value from your JavaScript code (using `return`) and save it into an akaBot string variable in the **Script Output** property.

---

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  * **True** - Allows the rest of the process to continue the execution even if an error occurs within the activity.  
  * **False (default)** - Blocks the process from continuing the execution.

**Input**

* **Arguments (Collection)** - A collection of arguments passed to the JavaScript function. Click the `...` button next to Arguments to open the editor:
  * **Name**: The name of the argument (must match the parameter name in your JavaScript function signature).
  * **Direction**:
    * `In`: Pass data from akaBot into the JavaScript code.
    * `Out`: Return data from the JavaScript code back to akaBot.
    * `In/Out`: Pass data in, modify it, and return it back.
  * **Type**: Data type of the argument (e.g., String, Int32, Boolean).
  * **Value**: The akaBot variable or expression containing the value.
* **Script File (String)\*** - The file path of the JavaScript file (e.g., `"C:\Scripts\myScript.js"`) OR the inline JavaScript code block (e.g., `"function (color) { ... }"`).

**Misc**

* **Display Name (String)** - The name of the activity displayed in the designer panel. You can change this to organize and structure your workflow. E.g., `[861257316] Inject Javascript(`.
* **Public (Checkbox)** - If checked, the data of this activity will be shown in the log. Consider data security before using it.

**Output**

* **Script Output (String)** - An akaBot String variable where the return value of the JavaScript function will be saved.

---

## **Step-by-Step Usage**

1. **Place inside a browser container**: Drag the **Open Browser** activity into the designer panel and enter `"https://google.com/"` in its **Url** field.
2. **Add the Inject JavaScript activity**: Inside the **Do** container of the **Open Browser** activity, drag and drop the **Inject JavaScript** activity.
3. **Prepare a JavaScript file**: Create a JavaScript file (for example, `test.js`) with the following content:
   ```javascript
   alert("Hello from akaBot!");
   ```
   Save the file to your local machine.
4. **Configure the script file path**: In the **Script File** field of the **Inject JavaScript** activity, browse to and select the JavaScript file (for example: `"C:\Users\<username>\Documents\test.js"`).
5. **Run the workflow**: akaBot opens Google and injects the JavaScript file into the current page. An alert dialog displaying "Hello from akaBot!" appears.

![inject-javascript](/static/img/inject-javascript.png)

## **Troubleshooting**

* **Invalid Browser Session**: If the activity throws an error or fails to execute, ensure that it is running inside an active [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) or [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md) container, and that the browser tab has not been closed.
* **JavaScript Execution Error**: If the JavaScript code contains syntax errors or throws an exception during runtime (such as referencing an undefined variable or property), the activity will fail. Test your script in the browser's developer console first.
* **WebDriver Communication Failure**: If the browser driver (e.g. ChromeDriver) has crashed or disconnected, restart your browser session and check if the driver version matches your browser (see the [Environment Setup Guide](/docs/activities/browser/latest/setup-browser-environment.md)).
