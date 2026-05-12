---
id: design-form
title: Design Form
sidebar_label: Design Form
sidebar_position: 1
displayed_sidebar: collaborationSidebar
---

# Design Form

The Design Form feature in akaBot Center allows process designers to create interactive data-entry forms that are presented to human participants during workflow execution. These forms collect the structured input that humans need to provide — such as approvals, data corrections, or decisions — before the process can continue to the next step. Forms are built using a drag-and-drop interface and can include a wide variety of field types to match real business requirements.

Each form is associated with a specific Human Task within a process. When a human task becomes active, the assigned user receives a notification and is directed to the form to complete their input. The form can be pre-populated with data from earlier process steps or from integrated business systems, reducing the amount of manual entry required and minimizing the risk of errors. Designers can apply validation rules to each field to ensure data quality before submission.

Forms support conditional visibility, meaning certain fields can be shown or hidden based on values entered in other fields. This keeps the interface clean and relevant for each user. Completed form data is stored as process variables and can be referenced by subsequent tasks, including bot tasks that use the human-provided data to drive automated actions downstream.

## Supported Field Types

| Field Type | Description | Example Use Case |
|---|---|---|
| Text Input | Single-line free text entry | Customer name, reference number |
| Text Area | Multi-line free text entry | Comments, rejection reason |
| Number | Numeric input with optional min/max validation | Invoice amount, quantity |
| Dropdown | Select one option from a predefined list | Department, approval status |
| Multi-Select | Select multiple options from a list | Affected systems, notification recipients |
| Date Picker | Calendar-based date selection | Due date, effective date |
| Date-Time Picker | Date and time selection | Appointment time, deadline |
| Checkbox | Boolean true/false toggle | Confirm acknowledgment |
| Radio Button | Mutually exclusive choice | Priority level (High/Medium/Low) |
| File Upload | Attach one or more documents | Supporting evidence, scanned invoice |
| Hidden Field | Store a value not visible to the user | Process instance ID, system code |

## Steps to Create a Form

1. Open the process in the **Process Designer** and select the Human Task for which you want to create a form.
2. In the task properties panel, click **Design Form** to open the Form Builder.
3. Drag the required field types from the **Field Palette** on the left into the form canvas.
4. For each field, click on it to open its **Properties** panel and configure:
   - **Label**: The display name shown to the user.
   - **Field Name**: The variable key used to store the value.
   - **Required**: Toggle whether the field must be filled before submission.
   - **Default Value**: Pre-populate the field with a static value or process variable.
   - **Validation Rules**: Set constraints such as minimum length, maximum value, or regex pattern.
5. Use the **Conditional Logic** tab to add show/hide rules based on other field values.
6. Click **Preview** to review how the form will look to end users.
7. Click **Save Form** to attach the form to the Human Task.
