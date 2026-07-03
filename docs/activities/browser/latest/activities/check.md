---
id: check
title: "Check/Uncheck"
sidebar_label: "Check/Uncheck"
sidebar_position: 18
description: "Check/Uncheck activity documentation."
displayed_sidebar: activitiesSidebar
---
# Check/Uncheck

RCA.Activities.Browser.Check

## **Description**

The Check/Uncheck activity allows you to check or uncheck a Checkbox.

​![image-20220505133104-1.png](/static/img/d88115_image-20220505133104-1.png)

(\*For Mandatory)

**Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **In the body of the activity**

* **Pick target element**\* - Chooses the Checkbox on a browser for checking or unchecking. This activity will generate a string variable (Selector) to specify the location of that Checkbox.
* **Action (Dropdown List)** - Select the action to perform  
  ・Check – Check the box.  
  ・Uncheck – Uncheck the box.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **Selector (String)\***- Text property used to find a particular UI element when the activity is executed. It is actually a XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.
* **Wait Visible (Checkbox)**- Check this box if you want the automation waits for the target to be visible before executing the activity. This is uncheck by default

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [2345672] Check/Uncheck
* **Public (Checkbox)** - Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

**Options**

* **Action (Dropdown List)**- Select the action to perform:  
  ・Check to select a check box or radio button  
  ・Uncheck to clear a check box

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

1. **Place inside a browser container**: Drag the **Check** activity into the **Do** container of [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md).
2. **Select the target element**: Click **Pick target element** in the activity body and select the checkbox or radio button on the webpage.
3. **Configure the action**: Set the **Action** property to `CHECK` or `UNCHECK` depending on your automation goal.
4. **Run the workflow**: akaBot locates the element and checks/unchecks it.

> For more information about selecting web elements and selectors, see **[Working with Web Elements](/docs/activities/browser/latest/user-guide/working-with-web-elements.md)**.

## **Troubleshooting**

* **SelectorNotFoundException / Element Not Found**: 
  * Ensure that the webpage has loaded completely before performing the action. If needed, insert a [Wait Page Load Complete](/docs/activities/browser/latest/activities/wait-page-load-complete.md) activity first.
  * Verify that the selector is correct. If the target element contains dynamic attributes (such as changing IDs), open the Selector Editor and replace the dynamic parts with wildcard characters (* or ?).
  * Ensure the target element is visible and not hidden behind overlays or loader animations. Check the **Wait Visible** property.
* **Extension Not Enabled**: Ensure the akaBot Web Extension is active and has permissions to run on the target website. Without it, Studio cannot highlight or interact with web elements.

## **Related topics**

* [Working with Web Elements](/docs/activities/browser/latest/user-guide/working-with-web-elements.md)
