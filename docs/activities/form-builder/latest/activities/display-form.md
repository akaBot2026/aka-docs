---
id: display-form
title: "Display Form"
sidebar_label: "Display Form"
sidebar_position: 1
description: "Display Form activity documentation."
displayed_sidebar: activitiesSidebar
---
# Display Form

RCA.Activities.FormBuilder.DisplayForm

## **Description**
Allows you to design, load, and display a user interface Form based on a pre-defined JSON schema. This is the **container activity** for the Form Builder package; other form actions (like getting or setting values, enabling/disabling controls) must run dynamically inside this activity's execution block.

![display-form](/static/img/display-form.png)

(\*For mandatory)

## **In the body of the activity**
* **Open Form Builder** (Button) - Opens the visual, drag-and-drop Form Builder editor to design your form interface and export the JSON schema. For a detailed guide on how to design layouts and configure validation rules in the editor, see the [Open Form Builder](/docs/activities/form-builder/latest/activities/open-form-builder.md) documentation.
* **Do** - The execution container block. Any activities placed here run asynchronously *while* the form is open, allowing the robot to dynamically update field values, disable fields, or handle custom events before the user submits or closes the form.

---

## **Properties**

### **Input**
| Property Name | Data Type | Required | Default | Description & User-Centric Guide |
| :--- | :--- | :--- | :--- | :--- |
| **Json Schema File Name** | `InArgument<String>` | **Yes** | None | The path to the `.json` schema file generated from the Form Builder tool. |
| **Form Arguments** | `Dictionary<String, Argument>` | No | None | Maps workflow variables directly to form components. Key names must match the Field Keys (Property Names) of the fields. Supported types: `String`, `Int32`, `Double`, `Decimal`, `Float`, `Boolean`, `JObject`, `JArray`. |
| **Form Fields Input Data** | `InArgument<String>` | No | None | A raw JSON-formatted string to populate form data. If a key is defined in both **Form Arguments** and here, the value here takes precedence.<br/><br/>*Example of where to get this:*<br/>1. Read a template `.json` file using the **Read Text File** activity and pass the text output variable here.<br/>2. Retrieve a JSON string from a REST API response.<br/>3. Construct a JSON string using an **Assign** activity: `"{""txtCustomerName"": ""John Doe"", ""chkAgreement"": true}"` |

### **Form Format**
| Property Name | Data Type | Required | Default | Description & User-Centric Guide |
| :--- | :--- | :--- | :--- | :--- |
| **Form Title** | `InArgument<String>` | No | "Form Builder" or "Form Runner" | The window title shown to the end-user. |
| **Form Width** | `InArgument<Int32>` | No | 540 | The width of the form window in pixels. |
| **Form Height** | `InArgument<Int32>` | No | Auto-fit | The height of the form window. Automatically adjusts to fit all components if left empty. |
| **Form Position X** | `InArgument<Int32>` | No | Center | Horizontal distance (pixels) from the top-left corner of the window to the left side of the screen. |
| **Form Position Y** | `InArgument<Int32>` | No | Center | Vertical distance (pixels) from the top-left corner of the window to the top of the screen. |
| **Is Minimize On Start** | `InArgument<Boolean>` | No | False | If set to `True`, the form window minimizes to the taskbar immediately when opened. |
| **Form Icon Path** | `InArgument<String>` | No | Default Icon | The path to an `.ico` file to use as the window icon. |
| **Always On Top** | `Boolean` | No | False | If `True`, keeps the form window focused on top of all other windows. |
| **Form Zoom Level** | `InArgument<Int32>` | No | 100 | Visual zoom scale percentage (e.g. `120` to enlarge content). |

### **Output**
| Property Name | Data Type | Required | Description & User-Centric Guide |
| :--- | :--- | :--- | :--- |
| **Form Id** | `OutArgument<Int32>` | No | The process ID (PID) of the active form window. Save this to a variable (e.g. `formId`) to pass into child activities inside the **Do** block. |
| **Is Dismissed** | `OutArgument<Boolean>` | No | Outputs `True` if the user closed the form window using the `X` button without submitting data, and `False` if they clicked the submit button. |
| **Selected Key** | `OutArgument<String>` | No | The key/ID of the specific button or component that was clicked to trigger form submission. |
| **Output Data** | `OutArgument<Object>` | No | A JSON-formatted string representing all data submitted by the user. You can parse this object using JSON activities or direct string manipulation to extract user input. |

### **Common**
| Property Name | Data Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Continue On Error** | `Boolean` | No | False | If `True`, the workflow continues running even if the form fails to open. |
| **Execute Do Block First** | `Boolean` | No | False | If `True`, executes the activities inside the **Do** container block exactly once immediately after the form is rendered and ready. |
| **Timeout MS** | `InArgument<Int32>` | No | 0 (Infinite) | The maximum time (in milliseconds) the form stays open before closing automatically. |

### **Misc**
| Property Name | Data Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Display Name** | `String` | No | Display Form | Name displayed in the workflow designer. |
| **Public** | `Boolean` | No | False | Check if you want to publish the activity to orchestrator logs (consider security risks if sensitive data is handled). |

---

## **Step-by-Step Usage**

1. **Add the Activity**: Drag the **Display Form** activity into your Studio workflow canvas.
2. **Link the Schema**: In the **Json Schema File Name** property, enter the path to your form `.json` file (e.g. `"customer_form.json"`). If you do not have a schema yet, click [Open Form Builder](/docs/activities/form-builder/latest/open-form-builder.md) in the activity body to design one.
3. **Map Output Variables**:
   * Click inside the **Form Id** property field in the Properties panel, press `Ctrl + K`, type a variable name (e.g. `formId`), and press **Enter**. This variable stores the active form window session ID.
   * Click inside the **Output Data** property field, press `Ctrl + K`, type a variable name (e.g. `submittedData`), and press **Enter**. This variable will automatically capture all user input data in JSON format once the form is submitted.
4. **Implement Dynamic Actions (Optional)**: If you want to modify components while the form is open, place activities like [Set Element Value](/docs/activities/form-builder/latest/activities/set-element-value.md) or [Disable](/docs/activities/form-builder/latest/activities/disable.md) inside the **Do** block container, referencing the `formId` variable.
5. **Handle Results**: Below the **Display Form** activity, add a **Log Message** or JSON parsing activity to process the data stored in the `submittedData` variable.

---

## **Self-Service Troubleshooting**

### **Design-Time Validation**
* **Symptom**: Red exclamation warning icon on the activity in akaBot Studio.
  * **Cause**: The **Json Schema File Name** field is empty or contains an invalid path expression.
  * **Solution**: Ensure you provide a valid path enclosed in double quotes (e.g., `"C:\Project\Schemas\Survey.json"`) or assign it to a valid String variable.

### **Run-Time Errors**
* **Symptom**: `FileNotFoundException` when running the process.
  * **Cause**: The path specified in **Json Schema File Name** does not exist at runtime.
  * **Solution**: Use relative paths (e.g., `Path.Combine(Environment.CurrentDirectory, "Schemas\Survey.json")`) to make sure the tệp is located correctly on the execution machine.
* **Symptom**: Form displays completely blank or crashes on start.
  * **Cause**: The schema file contains malformed JSON syntax.
  * **Solution**: Open the JSON schema file in a text editor and validate it using a JSON linter tool to ensure there are no missing curly braces or double quotes.
* **Symptom**: Variables mapped in **Form Arguments** do not sync.
  * **Cause**: Key name mismatch. The keys inside the dictionary must match the **Property Name** under the **Field Key** tab of the Form Builder component exactly (case-sensitive).
  * **Solution**: Verify the component names in the Form Builder layout designer.
