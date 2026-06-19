---
id: get-text
title: "Get Text"
sidebar_label: "Get Text"
sidebar_position: 10
description: "Get Text activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Text

RCA.Activities.Browser.GetText

## **Description**

The Get Text activity extracts text on a webpage and saves it in a String variable.

![Browser_GetText](/static/img/cfa416_5e63ba9-screenshot_2021-05-25_155057.jpg)

(\* For Mandatory)

**Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **In the body of the activity**

* **Pick target element**\* - Chooses the field to get text. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **Selector (String)** - Text property used to find a particular UI element when the activity is executed. It is actually a XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.
* **Wait Visible (Checkbox)**- Check this box if you want the automation waits for the target to be visible before executing the activity. This is checked by default.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  Eg: [3454334] Get Text
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is uncheck.

**Output**

* **Result (String)**- The extracted text as a String variable. E.g: "$199"

**Scroll**: To control how the system scrolls the screen to make the target element visible before performing an action.

* **Horizontal scroll:** Enter a numeric value (pixels) to scroll horizontally.
  + Positive value → scroll right
  + Negative value → scroll left
  + E.g: 200
* **Scroll element to view (checkbox):** The system automatically scrolls until the target element is visible. Default setting is unchecked.
* **Vertical scroll:** Enter a numeric value (pixels) to scroll vertically
  + Positive value → scroll down
  + Negative value → scroll up
  + E.g: 300

## **Step-by-Step Usage**

1. **Place inside a browser container**: The **Get Text** activity must be placed inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.
2. **Pick the target element**: Click **Pick target element** in the body of the activity, then click the text element on the web page (e.g., a label, paragraph, or span). akaBot Studio will generate the **Selector** automatically.
3. **Create an output variable**: In the **Properties** panel under **Output**, click the **Result** field and press `Ctrl + K` to create a new String variable (e.g., `extractedText`).
4. **Use the variable**: Connect the output variable to a **Message Box** or other downstream activity to process or display the extracted text.
5. **Run the workflow**: Execute the process. akaBot will locate the element, extract its visible text content, and store it in the output variable.

## **Troubleshooting**

* **SelectorNotFoundException / Element Not Found**: 
  * Ensure that the webpage has loaded completely before performing the action. If needed, insert a [Wait Page Load Complete](/docs/activities/browser/latest/activities/wait-page-load-complete.md) activity first.
  * Verify that the selector is correct. If the target element contains dynamic attributes (such as changing IDs), open the Selector Editor and replace the dynamic parts with wildcard characters (* or ?).
  * Ensure the target element is visible and not hidden behind overlays or loader animations. Check the **Wait Visible** property.
* **Extension Not Enabled**: Ensure the akaBot Web Extension is active and has permissions to run on the target website. Without it, Studio cannot highlight or interact with web elements.
