---
id: handle-alert
title: "Handle Alert"
sidebar_label: "Handle Alert"
sidebar_position: 33
description: "Handle Alert activity documentation."
displayed_sidebar: activitiesSidebar
---

# Handle Alert

RCA.Activities.Browser.HandleAlert

## **Description**

The Handle Alert activity allows you to handle alert popup box in various ways.

![image-20220505142619-1.png](/static/img/7116a9_image-20220505142619-1.png)

(\* For Mandatory)

**Container Requirement:** This activity must run inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

## **In the body of activity**

* **Handle Option (Dropdown List)**  
  ・ACCEPT - Accepts the alert thereby clicking on the Ok button.  
  ・DISMISS - Clicks on the "Cancel" or "Exit" button as soon as the pop up window appears.  
  ・GETTEXT - Gets the text from alert box.  
  ・SENDKEYS – Sends string of text to the alert box.

## **Properties**

**Common**

* **Continue On Error (Boolean)** - A Boolean variable has two possible values: True or False.  
  True - allows the rest of the process to continue the execution even an error occurs within the activity.  
  False (default) - blocks the process from continuing the execution.
* **Timeout MS (Int32)**- The maximum amount of time (in milliseconds) to wait for the activity to complete before an error is thrown. If the timeout expires, the activity will be terminated. Default value: 30000 (milliseconds).  
  E.g: 20000

**Input**

* **Handle Option (Dropdown List)**  
  ・ACCEPT - Accepts the alert thereby clicking on the Ok button.  
  ・DISMISS - Closes the alert thereby clicking on the Cancel button or Exit button  
  ・GETTEXT - Gets the text from alert box.  
  ・SENDKEYS – Sends string of text to the alert box.
* **KeysToSend (String)\***- String of text passed to the alert box (with SENDKEYS handle option).  
  E.g: `{ENTER}`, `{TAB}`..

**Misc**

* **Public (Checkbox)**- If you check it, the data of this activity will be shown in the log. Be careful, consider data security before using it.
* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.  
  E.g: Handle Alert.

**Output**

* **Alert Text (String)**\* - Text returned from the alert box.

## **Step-by-Step Usage**

1. Place the **Handle Alert** activity inside an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md), or [Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md) container.

2. Configure the alert action (for example, **ACCEPT** or **DISMISS**).

3. (Optional) Configure an output variable in the **Alert Text** property to capture the text message from the alert.

4. Run the workflow. akaBot waits for the browser alert and performs the configured action.

> For a complete example of handling JavaScript alerts, see **[JavaScript Alert Handling](/docs/activities/browser/latest/user-guide/tabs-alerts-management.md)**.

## **Troubleshooting**

* **No Alert Found**: If the activity fails with a timeout or alert not found error, verify that the JavaScript alert, confirmation, or prompt has actually appeared on the page. Check the **Timeout MS** property.
* **Target Element Conflict**: Remember that standard HTML/CSS popup modals are not native browser alerts and cannot be closed using this activity. For HTML modal popups, use standard [Click](/docs/activities/browser/latest/activities/click.md) activities instead.
