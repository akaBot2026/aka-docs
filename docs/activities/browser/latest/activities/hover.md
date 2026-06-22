---
id: hover
title: "Hover"
sidebar_label: "Hover"
sidebar_position: 21
description: "Hover activity documentation."
displayed_sidebar: activitiesSidebar
---
# Hover

RCA.Activities.Browser.Hover

## **Description**

The Hover activity will move the mouse pointer to a specified element without clicking.

![image-20220505134021-1.png](/static/img/5b764b_image-20220505134021-1.png)

(\* For Mandatory)

**Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **In the body of the activity**

* **Pick target element**\* - Chooses the field on a browser to select the item. This activity will generate a string variable (Selector) to specify the location of that field.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **Selector (String)**\* - Text property used to find a particular UI element when the activity is executed. It is actually a XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.
* **Wait Visible (Checkbox)**- Check this box if you want the automation waits for the target to be visible before executing the activity. This is checked by default.

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [5807454] Hover
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

**Scroll -** To control how the system scrolls the screen to make the target element visible before performing an action*.*

* ​​​​​​​​​​​​​​**Horizontal scroll:** Enter a numeric value (pixels) to scroll horizontally.
  + Positive value → scroll right
  + Negative value → scroll left
  + E.g: 200
* **Scroll element to view (checkbox):** The system automatically scrolls until the target element is visible. Default setting is unchecked.
* **Vertical scroll:** Enter a numeric value (pixels) to scroll vertically
  + Positive value → scroll down
  + Negative value → scroll up
  + E.g: 300

## **Step-by-Step Usage**

1. **Place inside a browser container**: The **Hover** activity must be placed inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.
2. **Pick the target element**: Click **Pick target element** in the body of the activity, then select the target element on the webpage (for example, a dropdown menu header or hover-trigger link). akaBot Studio will automatically generate a **Selector** to identify that element.
3. **Run the workflow**: Execute the process. akaBot will locate the element and move the mouse pointer to hover over it, triggering any mouse-over behavior (such as displaying dropdown menus).

## **Troubleshooting**

* **SelectorNotFoundException / Element Not Found**: 
  * Ensure that the webpage has loaded completely before performing the action. If needed, insert a [Wait Page Load Complete](/docs/activities/browser/latest/activities/wait-page-load-complete.md) activity first.
  * Verify that the selector is correct. If the target element contains dynamic attributes (such as changing IDs), open the Selector Editor and replace the dynamic parts with wildcard characters (* or ?).
  * Ensure the target element is visible and not hidden behind overlays or loader animations. Check the **Wait Visible** property.
* **Extension Not Enabled**: Ensure the akaBot Web Extension is active and has permissions to run on the target website. Without it, Studio cannot highlight or interact with web elements.
