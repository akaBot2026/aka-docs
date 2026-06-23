---
id: element-exist
title: "Element Exist"
sidebar_label: "Element Exist"
sidebar_position: 26
description: "Element Exist activity documentation."
displayed_sidebar: activitiesSidebar
---
# Element Exist

RCA.Activities.Browser.ElementExist

## **Description**

The Element Exist allows you to confirm whether an element exist.

![image-20220505140211-2.png](/static/img/e335a9_image-20220505140211-2.png)

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

* **Selector (String)\***- Text property used to find a particular UI element when the activity is executed. It is actually a XML fragment specifying attributes of the GUI element you are looking for and of some of its parents.
* **Wait Visible (Checkbox)**- Check this box if you want the automation waits for the target to be visible before executing the activity. This is checked by default

**Misc**

* **Display Name (String)**- The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: [345758] Element Exist
* **Public (Checkbox)**- Check if you want to public it. Remember to consider data security requirement before using it. Default is unchecked.

**Output**

* **Exists (Boolean)** - Check if the element exists in the file. Boolean supported only.

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

To check if a "Login" button exists on a webpage and click it only if it is present, follow these steps:

1. **Add Open Browser Container**:
   * Drag and drop an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) activity into your workflow.
   * Set the URL to your target website.

2. **Add Element Exist**:
   * Drag and drop an **Element Exist** activity inside the **Do** block of the **Open Browser** container.
   * Click **Pick target element** in the body of the activity, then select the **Login** button on the web page.
   * In the **Properties** panel under **Output**, create a Boolean variable named `isLoginExist` (Ctrl+K -> type `isLoginExist` -> press Enter) and assign it to the **Exists** field.

3. **Add If Activity**:
   * Drag and drop an **If** activity below the **Element Exist** activity.
   * In the **Condition** field of the **If** activity, type `isLoginExist`.

4. **Add Action inside Then (If Yes)**:
   * Drag and drop a [Click](/docs/activities/browser/latest/activities/click.md) activity into the **Then** section of the **If** activity.
   * Click **Pick target element** on the **Click** activity and target the **Login** button to perform the click action.

5. **Run the workflow**:
   * Execute the process. akaBot will check if the Login button is visible on the page. If it exists (`isLoginExist` is `True`), the robot will enter the **Then** block and click the button. If it is not found, the robot will skip the click action without throwing an exception.

## **Troubleshooting**

* **SelectorNotFoundException / Element Not Found**: 
  * Ensure that the webpage has loaded completely before performing the action. If needed, insert a [Wait Page Load Complete](/docs/activities/browser/latest/activities/wait-page-load-complete.md) activity first.
  * Verify that the selector is correct. If the target element contains dynamic attributes (such as changing IDs), open the Selector Editor and replace the dynamic parts with wildcard characters (* or ?).
  * Ensure the target element is visible and not hidden behind overlays or loader animations. Check the **Wait Visible** property.
* **Extension Not Enabled**: Ensure the akaBot Web Extension is active and has permissions to run on the target website. Without it, Studio cannot highlight or interact with web elements.
