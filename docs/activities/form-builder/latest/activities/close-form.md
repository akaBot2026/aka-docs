---
id: close-form
title: "Close Form"
sidebar_label: "Close Form"
sidebar_position: 2
description: "Close Form activity documentation."
displayed_sidebar: activitiesSidebar
---

# Close Form

RCA.Activities.FormBuilder.CloseForm

## **Description**
Closes an active form dynamically from within the workflow execution. This activity is typically used inside the **Do** block of [Display Form](/docs/activities/form-builder/latest/activities/display-form.md) to close the UI window automatically when a background process completes (e.g., a file finishes downloading) or when a validation condition is met.

![close-form](/static/img/close-form.png)

---

## **In the body of the activity**
* **Form Id** - The ID of the form window you want to close. This must be the output variable obtained from the parent [Display Form](/docs/activities/form-builder/latest/activities/display-form.md) activity.

---

## **Properties**

### **Input**
| Property Name | Data Type | Required | Default | Description & User-Centric Guide |
| :--- | :--- | :--- | :--- | :--- |
| **Form Id** | `InArgument<Int32>` | **Yes** | None | The target Form Process ID. Usually bound to the output variable of the parent `Display Form` activity. |

### **Common**
| Property Name | Data Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Continue On Error** | `Boolean` | No | False | If `True`, the workflow continues running even if the close request fails. |

### **Misc**
| Property Name | Data Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Display Name** | `String` | No | Close Form | Name displayed in the workflow designer. |
| **Public** | `Boolean` | No | False | Check if you want to publish the activity execution logs. |

---

## **Step-by-Step Usage**
The **Close Form** activity must be executed while the form is still active.

For example, to automatically close the form after a 5-second delay:
1. **Drag Display Form**: Drag a [Display Form](/docs/activities/form-builder/latest/activities/display-form.md) activity into your workflow designer canvas.
2. **Assign Form Id**: In its **Properties** panel on the right, under **Output** -> **Form Id**, press `Ctrl + K` to create a variable named `formId` (Variable type: `Int32`).
3. **Add Delay**: Inside the **Do** block of the `Display Form` activity, drag a **Delay** activity and set the duration to `00:00:05` (5 seconds).
4. **Call Close Form**: Below the **Delay** activity (still inside the **Do** block), drag a **Close Form** activity and set its **Form Id** property to `formId`. When run, the form window will display, wait 5 seconds, and then close automatically.

---

## **Self-Service Troubleshooting**

### **Design-Time Validation**
* **Symptom**: Validation warning showing that `Form Id` is required.
  * **Cause**: The `Form Id` field is left empty or a non-integer variable is passed.
  * **Solution**: Ensure you create an `Int32` variable (e.g., `myFormId`) in the Variables panel, bind it to the output **Form Id** of `Display Form`, and pass it to this activity's `Form Id` field.

### **Run-Time Errors**
* **Symptom**: `ArgumentException: Form ID does not exist` or `InvalidOperationException` at runtime.
  * **Cause**:
    1. The form window has already been closed manually by the user (by clicking the `X` button).
    2. The form is closed automatically due to a `Timeout MS` configured in the parent `Display Form`.
  * **Solution**: Set the **Continue On Error** property to `True` if you expect the user might close the form manually before the robot triggers the auto-close.
