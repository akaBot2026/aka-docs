---
id: get-web-attribute
title: "Get Web Attribute"
sidebar_label: "Get Web Attribute"
sidebar_position: 13
description: "Get Web Attribute activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Web Attribute

RCA.Activities.Browser.GetWebAttribute

## **Description**

The Get Web Attribute activity allows you to get the value of an attribute that belongs to the native browser element.

![Browser_GetWebAttribute](/static/img/c88dc1_71d320f-screenshot_2021-05-25_155928.jpg)

(\* For Mandatory)

**Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **In the body of the activity**

* **Pick target element**\* - Chooses the element to verify its existence. This activity will generate a string variable (Selector) to specify the location of that element.
* **Attribute Name (String)**\* - The name of the attribute to be retrieved. This field supports only strings.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.
* **Timeout Ms (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **Attribute Name (String)**\* - The expression of the attribute to be selected from. It is a string, so it has to be encased in quotation marks.
* **Selector (String)**\* - Text property used to find a particular UI element when the activity is executed. It is actually a XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.
* **Wait Visible (Checkbox)** - Check this box if you want the automation waits for the target to be visible before executing the activity. This is checked by default

**Misc**

* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [14688] Get Web Attribute
* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

**Output**

* **Output Value (String)**- Value of the attribute that will be outputted with type = ‘String’.

**Scroll**: To control how the system scrolls the screen to make the target element visible before performing an action*.*

* **Horizontal scroll:** Enter a numeric value (pixels) to scroll horizontally.
  + Positive value → scroll right
  + Negative value → scroll left
  + E.g: 200
* **Scroll element to view (checkbox):** The system automatically scrolls until the target element is visible. Default setting is unchecked.
* **Vertical scroll:** Enter a numeric value (pixels) to scroll vertically
  + Positive value → scroll down
  + Negative value → scroll up
  + E.g: 300

## **Step-by-Step Usage**

1. **Place inside a browser container**: The **Get Web Attribute** activity must be placed inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.
2. **Pick the target element**: Click **Pick target element** in the body of the activity, then select the target element on the webpage (for example, a link or button). akaBot Studio will automatically generate a **Selector** to identify that element.
3. **Specify the Attribute Name**: In the body or **Properties** panel under **Input**, enter the attribute name you want to retrieve in quotes (e.g., `"href"` to get a hyperlink URL, or `"class"` to get a CSS class).
4. **Map the Output**: In the **Properties** panel under **Output** -> **Output Value**, create a String variable named `attrValue` (Ctrl+K -> type `attrValue` -> press Enter) to store the retrieved attribute value.
5. **Run the workflow**: Execute the process. akaBot will find the target element, read the specified attribute, and save its value into the `attrValue` variable.

## **Troubleshooting**

* **SelectorNotFoundException / Element Not Found**: 
  * Ensure that the webpage has loaded completely before performing the action. If needed, insert a [Wait Page Load Complete](/docs/activities/browser/latest/activities/wait-page-load-complete.md) activity first.
  * Verify that the selector is correct. If the target element contains dynamic attributes (such as changing IDs), open the Selector Editor and replace the dynamic parts with wildcard characters (* or ?).
  * Ensure the target element is visible and not hidden behind overlays or loader animations. Check the **Wait Visible** property.
* **Extension Not Enabled**: Ensure the akaBot Web Extension is active and has permissions to run on the target website. Without it, Studio cannot highlight or interact with web elements.
