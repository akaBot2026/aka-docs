---
id: open-form-builder
title: "Open Form Builder"
sidebar_label: "Open Form Builder"
sidebar_position: 3
description: "Open Form Builder editor interface guide."
displayed_sidebar: activitiesSidebar
---

# Open Form Builder

The **Form Builder** is a visual, drag-and-drop editor interface built into akaBot Studio. It allows developers to quickly build interactive forms (such as custom surveys, data entry screens, and user input validation dialogs) without writing HTML or CSS. The layout and components configured in this editor are saved into a `.json` schema file, which is loaded by the [Display Form](/docs/activities/form-builder/latest/activities/display-form.md) container activity.

![open-form-builder](/static/img/open-form-builder.png)

## **Overview**

The editor is divided into three primary functional areas:

### **1. Components Menu**
Provides pre-built UI components that you can drag onto the canvas. Components are grouped into:
#### **Basic**
| Component Name | Description & Use Case |
| :--- | :--- |
| **Text Field** | Single-line text input (e.g. for Name, Code). |
| **Text Area** | Multi-line text block (e.g. for Comments, Description). |
| **Number** | Restricts input to numeric values (e.g. for Quantity, Age). |
| **Password** | Masks the entered characters for password privacy. |
| **Checkbox** | Binary tick box for yes/no choices. |
| **Select Boxes** | Renders multiple checkboxes to let users select multiple options. |
| **Select** | Dropdown list to pick a single item from a predefined list. |
| **Radio** | Group of radio buttons for mutually exclusive selections. |
| **Button** | Triggers actions like `Submit`, `Reset`, or custom scripts. |

#### **Advanced**
| Component Name | Description & Use Case |
| :--- | :--- |
| **Email** | Text field with built-in email address format verification. |
| **Url** | Validates that the input is a valid website address. |
| **Phone Number** | Validates phone number formats. |
| **Tags** | Allows users to type and manage multiple keyword labels. |
| **Address** | Collects structured physical mailing address details. |
| **Date / Time** | Displays an interactive calendar and clock selector. |
| **Day** | Displays separated day, month, and year inputs. |
| **Time** | Renders a time selection clock. |
| **Currency** | Automatically formats numeric entries with currency symbols and decimals (e.g. `$100.00`). |
| **Survey** | Renders a rating scale grid or matrix question format. |
| **Signature** | Adds a digital signature box where users can draw or write. |

#### **Layout**
| Component Name | Description & Use Case |
| :--- | :--- |
| **HTML Element** | Inserts custom raw HTML tags (e.g. `<div>`, `<hr>`) into the form layout. |
| **Content** | Adds static text blocks, descriptions, or headers. |
| **Columns** | Divides the layout into multiple responsive horizontal columns. |
| **Panel** | Groups fields under a titled collapsible box. |
| **Table** | Arranges form components inside rows and columns grid. |
| **Tabs** | Creates tabbed sections to navigate between different pages of fields. |

#### **Data**
| Component Name | Description & Use Case |
| :--- | :--- |
| **Hidden** | Renders an invisible field to hold variables or constant data without showing it to the user. |
| **Data Grid** | Creates a dynamic table where users can add multiple rows of structured field inputs. |
| **Edit Grid** | Renders an inline list layout allowing users to add, edit, and remove row entries. |

### **2. Center Canvas**
The active design area where you drag, position, and order your form components. Double-clicking any component on the canvas opens its individual settings modal (to edit the Field Label, Property Name under the Field Key tab, validation criteria, etc. - see [Form Controls](file:///d:/akb-v2-docs/aka-docs/docs/activities/form-builder/latest/form/form-control.md) for detailed property tab configurations).

### **3. Top Toolbar**
* **Save**: Overwrites the active JSON schema file with current design modifications.
* **Save a Copy As**: Exports the design as a new `.json` file to a different directory.
* **Insert**: Imports an existing component template into the canvas.
* **Clear Form**: Deletes all components from the canvas to start fresh.
* **Preview**: Launches an interactive preview of the form window, allowing you to test validation rules and component interactions.

---

## **Step-by-Step Example: Building a Customer Registration Form**

This step-by-step walkthrough guides you through designing a form to capture contact details and integrating it into an akaBot Studio workflow.

### **Step 1: Open the Form Builder**
1. Open akaBot Studio and drag a [Display Form](file:///d:/akb-v2-docs/aka-docs/docs/activities/form-builder/latest/activities/display-form.md) activity into your designer canvas.
2. Click **Open Form Builder** directly inside the body of the activity. The Form Builder editor window will launch.

### **Step 2: Define the Layout Structure (Arrange Fields Side-by-Side)**
To organize input fields side-by-side (like Full Name and Email) instead of in a long vertical list, you can create layout columns:
1. In the left panel, expand the **Layout** section.
2. Drag the **Columns** component and drop it onto the center canvas.
3. This creates a container with two empty dashed boxes side-by-side (each labeled *"Drag and drop a form component"*). You can drop individual input fields directly into these boxes to position them horizontally.

### **Step 3: Add and Configure Form Components**
1. **First Column - Full Name Input**:
   * Go to the **Basic** section, drag a **Text Field** component, and drop it into the first column.
   * Double-click it to open settings. Set **Field Label** to `"Full Name"` and **Property Name** to `"txtFullName"` under the **Field Key** tab. Check the **Required** box under the Validation tab, then click **Save**.
2. **Second Column - Email Address Input**:
   * Go to the **Advanced** section, drag the **Email** component, and drop it into the second column.
   * Double-click it. Set **Field Label** to `"Email Address"` and **Property Name** to `"txtEmail"` under the **Field Key** tab. Check the **Required** box under the Validation tab, then click **Save**.
3. **Below the Columns - Phone Number Input**:
   * Go to the **Advanced** section, drag the **Phone Number** component, and drop it directly below the column block.
   * Double-click it. Set **Field Label** to `"Phone Number"` and **Property Name** to `"txtPhone"` under the **Field Key** tab, then click **Save**.
4. **Bottom of Form - Submit Button**:
   * Go to the **Basic** section, drag the **Button** component, and drop it at the bottom of the canvas.
   * Double-click it. Set **Field Label** to `"Submit Info"`, **Property Name** to `"btnSubmit"` under the **Field Key** tab, and set **Action** to `Submit`, then click **Save**.

### **Step 4: Preview and Test Validations**
1. Click **Preview** in the top toolbar to open the test window.
2. Click **Submit Info** without typing anything. Visual warning validation errors will highlight `Full Name` and `Email Address` as they are marked required.
3. Close the Preview window.

### **Step 5: Save the Schema File**
1. Click **Save** in the top toolbar. Save the file inside your project workspace folder as `customer_registration.json`.
2. Close the Form Builder editor window.
3. In akaBot Studio, select your [Display Form](/docs/activities/form-builder/latest/activities/display-form.md) activity and set the **Json Schema File Name** property to `"customer_registration.json"`.

### **Step 6: Handle Outputs in akaBot Studio**
1. Select your `Display Form` activity. Go to **Properties** -> **Output** -> **Output Data** and press `Ctrl + K` to create a variable named `ioCustomerData` (Type: `String` or `Object`).
2. Drag a **Log Message** activity directly below `Display Form` and set its message to `ioCustomerData.ToString()`.
3. Run the workflow. Enter test data when the form displays and click **Submit Info**. The Studio Output panel will display the submitted data in JSON format:
   ```json
   {
     "txtFullName": "John Doe",
     "txtEmail": "john.doe@example.com",
     "txtPhone": "0912345678",
     "btnSubmit": true
   }
   ```

---

## **Self-Service Troubleshooting**

### **Design-Time Validation & Editor Errors**
* **Symptom**: Field values overwrite each other or fail to sync with workflow variables.
  * **Cause**: Mismatched or duplicate Field Keys. If two components on the canvas share the same **Property Name** under the **Field Key** tab in their settings, akaBot Studio cannot resolve which component is being accessed.
  * **Solution**: Double-click each component on the canvas and ensure the **Property Name** is completely unique and case-sensitive (e.g., `txtFirstName` vs `txtLastName`).
* **Symptom**: Form layout looks clipped or distorted on smaller client screens.
  * **Cause**: Overloading too many fields in a single line without using layout structuring tools.
  * **Solution**: Use the **Layout** section in the left panel to add **Columns** or **Panels**. Group components inside columns to enforce responsive grid behavior.
* **Symptom**: "Error loading JSON schema" when reopening the Form Builder.
  * **Cause**: The `.json` schema file was modified manually in an external text editor, breaking its structure.
  * **Solution**: Avoid manually editing the exported `.json` files. If a file is broken, restore a backup version or recreate the schema using the editor.
