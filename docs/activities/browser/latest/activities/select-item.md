---
id: select-item
title: "Select Item"
sidebar_label: "Select Item"
sidebar_position: 19
description: "Select Item activity documentation."
displayed_sidebar: activitiesSidebar
---
# Select Item

RCA.Activities.Browser.SelectItem

## **Description**

The Select Item activity allows you to select an item from a combo box or list box.

![image-20220505133407-1.png](/static/img/f540d7_image-20220505133407-1.png)

(\*For Mandatory)

**Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **In the body of the activity**

* **Pick target element**\* - Chooses the field on a browser to select the item. This activity will generate a string variable (Selector) to specify the location of that field.
* **Select Type (Dropdown List)** - Select list of type  
  **・INDEX** – Index of the item (Starting from 0).  
  **・VALUE** – Value of the item.  
  **・TEXT** – Text of the item.
* **Select Value (String)**\* - The item to be selected from the combo or list box. The item must be quoted.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 30000

**Input**

* **Select Type (Dropdown List)** - Select list of type  
  ・INDEX – Index of the item (Starting from 0).  
  ・VALUE – Value of the item.  
  ・TEXT – Text of the item.
* **Select Value (String)\***- The value based on the type of selection you want to use. It has to be encased in quotation marks.
* **Selector (String)**\* - Text property used to find a particular UI element when the activity is executed. It is actually a XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.
* **Wait Visible (Checkbox)** - Check this box if you want the automation waits for the target to be visible before executing the activity. This is check by default

**Misc**

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [145364] Select Item
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

1. **Place inside a browser container**: The **Select Item** activity must be placed inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.
2. **Pick the target element**: Click **Pick target element** in the body of the activity, then select the target dropdown/combo box on the webpage. akaBot Studio will automatically generate a **Selector** to identify that element.
3. **Choose Select Type**: In the body or **Properties** panel under **Input**, select the type of lookup from the **Select Type** dropdown:
   * `INDEX`: To select the option by its numeric index (starting from `0`).
   * `VALUE`: To select the option by its HTML `value` attribute.
   * `TEXT`: To select the option by its visible display text.
4. **Enter Select Value**: Under **Select Value**, type the index, value, or text of the target option in quotes (e.g., `"2"` for the third index, or `"Vietnam"` for display text).
5. **Run the workflow**: Execute the process. akaBot will locate the dropdown and select the specified item.

## **Troubleshooting**

* **SelectorNotFoundException / Element Not Found**: 
  * Ensure that the webpage has loaded completely before performing the action. If needed, insert a [Wait Page Load Complete](/docs/activities/browser/latest/activities/wait-page-load-complete.md) activity first.
  * Verify that the selector is correct. If the target element contains dynamic attributes (such as changing IDs), open the Selector Editor and replace the dynamic parts with wildcard characters (* or ?).
  * Ensure the target element is visible and not hidden behind overlays or loader animations. Check the **Wait Visible** property.
* **Extension Not Enabled**: Ensure the akaBot Web Extension is active and has permissions to run on the target website. Without it, Studio cannot highlight or interact with web elements.
