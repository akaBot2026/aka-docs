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

**Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **How it Works**

1. **Inline Code or External File**: You can input the JavaScript code directly as a string or provide the path to an external `.js` file in the **Script File** property.
2. **Script Type**: You can choose how the script is evaluated via **Script Type**. By default, it is set to `InjectScriptType.Function`, which executes the code inside a function wrapper.
3. **Passing Variables (Arguments)**: You can pass data from akaBot variables into the JavaScript function parameters using the **Arguments** collection.
4. **Retrieving Results (Script Output)**: You can return a string value from your JavaScript code (using `return`) and save it into an akaBot string variable in the **Script Output** property.

---

## **Properties**

**Common**

* **Continue On Error (Boolean)** - Specifies whether the workflow continues execution if the activity encounters an error. Only has two possible values:
  * `True`: Allows the workflow to continue executing subsequent activities.
  * `False` (default): Throws an error and halts execution.
* **Browser (Browser)** - The existing browser variable representing the browser session you want to inject the script into.
* **Script File (String)\*** - The file path of the JavaScript file (e.g., `"C:\Scripts\myScript.js"`) OR the inline JavaScript code block (e.g., `"function (arg1, arg2) { ... }"`).
* **Script Type (Dropdown)** - Specifies how the script is evaluated.
  * `InjectScriptType.Function` (default): Evaluates the script as a function that can take input arguments and return a value.
  * `InjectScriptType.Text`: Evaluates the script as raw JavaScript text.

**Misc**

* **Display Name (String)** - The name of the activity displayed in the designer panel. You can change this to organize and structure your workflow.
  * E.g., `[712701451] Inject Javascript`
* **Public (Checkbox)** - If checked, the properties and values of this activity will be recorded in the execution log at the Verbose level. Consider data security requirements before checking this. Default is unchecked.

**Options**

* **Arguments (Collection)** - A collection of arguments passed to the JavaScript function. Click the `...` button next to Arguments to open the editor:
  * **Name**: The name of the argument (must match the parameter name in your JavaScript function signature).
  * **Direction**:
    - `In`: Pass data from akaBot into the JavaScript code.
    - `Out`: Return data from the JavaScript code back to akaBot.
    - `In/Out`: Pass data in, modify it, and return it back.
  * **Type**: Data type of the argument (e.g., String, Int32, Boolean).
  * **Value**: The akaBot variable or expression containing the value.

**Output**

* **Script Output (String)** - An akaBot String variable where the return value of the JavaScript function will be saved.

---

## **Example of using the Inject JavaScript activity**

To demonstrate how to use the **Inject JavaScript** activity, we will create a workflow that opens a web browser, navigates to a webpage, and changes the background color of the body element to a color specified by an input argument.

### **Step 1: Open the Browser**
1. Drag and drop an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) activity into the designer panel.
2. Select the activity, and in the **Url** field under **Common**, type `"https://google.com"`.

### **Step 2: Add Inject JavaScript**
1. Drag and drop an **Inject JavaScript** activity inside the **Do** container of the **Open Browser** activity.
2. Select the activity, and in the **Properties** panel under **Common**, configure:
   * **Script Type**: Select `InjectScriptType.Function` from the dropdown list.
   * **Script File**: In the text box, type the JavaScript function that changes the background color:
     ```javascript
     "function (color) {
         document.body.style.backgroundColor = color;
         return 'Success';
     }"
     ```

### **Step 3: Configure Input Arguments**
To pass the color name from akaBot Studio into the JavaScript function:
1. In akaBot Studio, create a String variable named `myColor` and assign it the default value `"lightblue"`.
2. In the **Properties** panel of the **Inject JavaScript** activity, under **Options**, click the `...` button next to **Arguments** to open the editor.
3. In the Arguments window, click **Create argument** and configure:
   * **Name**: `color` (must match the parameter name in the JavaScript function signature)
   * **Direction**: `In`
   * **Type**: `String`
   * **Value**: `myColor`
4. Click **OK** to save.

### **Step 4: Capture Output**
To check the execution result of the script:
1. In the **Properties** panel under **Output**, click the **Script Output** field.
2. Press **Ctrl + K** to create a new String variable named `executionResult`.
3. Drag a **Message Box** activity below the **Open Browser** container and set its content to `executionResult`.

### **Step 5: Run the workflow**
1. Run the process.
2. akaBot will open Chrome to `https://google.com`, inject the JavaScript, change the page's background color to light blue, and display a Message Box with the value `"Success"`.

## **Troubleshooting**

* **Invalid Browser Session**: If the activity throws an error or fails to execute, ensure that it is running inside an active [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) or [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md) container, and that the browser tab has not been closed.
* **WebDriver Communication Failure**: If the browser driver (e.g. ChromeDriver) has crashed or disconnected, restart your browser session and check if the driver version matches your browser (see the [Environment Setup Guide](/docs/activities/browser/latest/setup-browser-environment.md)).
