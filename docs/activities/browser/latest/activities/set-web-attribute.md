---
id: set-web-attribute
title: "Set Web Attribute"
sidebar_label: "Set Web Attribute"
sidebar_position: 24
description: "Set Web Attribute activity documentation."
displayed_sidebar: activitiesSidebar
---
# Set Web Attribute

RCA.Activities.Browser.SetWebAttribute

## **Description**

The Set Web Attribute sets the value for an attribute of a web element.

![image-20220505134907-1.png](/static/img/b0ac8f_image-20220505134907-1.png)

(\* For Mandatory)

**Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **In the body of the activity**

* **Pick target element**\* - Chooses the field on a browser to select the item. This activity will generate a string variable (Selector) to specify the location of that field.
* **Attribute Name (String)**\* - The expression of the attribute to be selected from. It is a string, so it has to be encased in quotation marks.
* **Attribute Value (String)**\* - The value of the specified attribute. This property supports String variable so it must be quoted.

## **Properties**

**Common**

* **Continue on Error (Boolean)** - A Boolean variable has two possible values: True or False. True - allows the rest of the process to continue the execution even an error occurs within the activity. False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **Attribute Name (String)\***- The expression of the attribute to be selected from. It is a string, so it has to be encased in quotation marks.
* **Attribute Value (String)**\* - The value of the specified attribute. This property supports String variable so it must be quoted.
* **Selector (String)\***- Text property used to find a particular UI element when the activity is executed. It is actually a XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.
* **Wait Visible (Checkbox)**- Check this box if you want the automation waits for the target to be visible before executing the activity. This is checked by default

**Misc**

* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [366546456] Set Web Attribute
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

**Scroll**: To control how the system scrolls the screen to make the target element visible before performing an action*.*

* ​​​​​​​**Horizontal scroll:** Enter a numeric value (pixels) to scroll horizontally.
  + Positive value → scroll right
  + Negative value → scroll left
  + E.g: 200
* **Scroll element to view (checkbox):** The system automatically scrolls until the target element is visible. Default setting is unchecked.
* **Vertical scroll:** Enter a numeric value (pixels) to scroll vertically
  + Positive value → scroll down
  + Negative value → scroll up
  + E.g: 300

## **Step-by-Step Usage**

1. **Place inside a browser container**: The **Set Web Attribute** activity must be placed inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.
2. **Pick the target element**: Click **Pick target element** in the body of the activity, then select the target element on the webpage. akaBot Studio will automatically generate a **Selector** to identify that element.
3. **Specify Attribute Name and Value**: In the body or **Properties** panel under **Input**:
   * Enter the name of the HTML attribute to modify in the **Attribute Name** field (e.g., `"class"`, `"style"`, or `"value"`).
   * Enter the new value you want to assign in the **Attribute Value** field (e.g., `"new-class-name"` or `"color: red;"`).
4. **Run the workflow**: Execute the process. akaBot will locate the element and update the specified HTML attribute to the new value directly in the browser's DOM.

## **Troubleshooting**

* **SelectorNotFoundException / Element Not Found**: 
  * Ensure that the webpage has loaded completely before performing the action. If needed, insert a [Wait Page Load Complete](/docs/activities/browser/latest/activities/wait-page-load-complete.md) activity first.
  * Verify that the selector is correct. If the target element contains dynamic attributes (such as changing IDs), open the Selector Editor and replace the dynamic parts with wildcard characters (* or ?).
  * Ensure the target element is visible and not hidden behind overlays or loader animations. Check the **Wait Visible** property.
* **Extension Not Enabled**: Ensure the akaBot Web Extension is active and has permissions to run on the target website. Without it, Studio cannot highlight or interact with web elements.
