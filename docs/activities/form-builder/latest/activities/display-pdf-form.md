---
id: display-pdf-form
title: "Display PDF Form"
sidebar_label: "Display PDF Form"
sidebar_position: 1
description: "Display a PDF and JSON data side by side for validation and editing."
displayed_sidebar: activitiesSidebar
---

# Display PDF Form

RCA.Activities.FormBuilder.DisplayPdfForm

## **Description**

Displays a PDF document and its JSON data side by side for validation and review. Users can compare the JSON values with the PDF content, edit the fields, and return the result to the workflow.

![Display PDF Form](/static/img/displaypdfform.png)

(\*For mandatory)

## Form Preview

The following example shows how the activity displays a PDF document alongside editable JSON data for validation and review.

![Display PDF Form UI](/static/img/display-pdf-form-ui.png)

*PDF document displayed on the left and editable JSON data displayed on the right. Nested objects and arrays are displayed as grouped sections.*

## Properties

**Common**

- **Continue On Error (Boolean)** - Specifies whether the workflow continues when the activity encounters an error. `True` allows the workflow to continue. `False` (default) stops the workflow when an error occurs.

**Input**

- **PDF Path (String)\*** - Full path to the PDF file to display and validate.
- **JSON Path (String)** - Full path to a JSON file containing the initial values. The JSON root must be an object. Nested objects and arrays are supported.
- **JSON Object (JObject)** - A `JObject` containing the initial values. Use this property when the JSON is provided by another activity or workflow variable.

**Output**

- **Output Data (JObject)** - Returns the edited JSON object after the user clicks `Save`. Returns the original JSON object after the user confirms `Cancel`.
- **Output JSON Path (String)** - Optional path where the result JSON is written after `Save` or confirmed `Cancel`. This property is separate from `JSON Path`; the input JSON file is not overwritten automatically.

**Misc**

- **Display Name (String)** - The name of this activity. You can edit the name to organize and structure the workflow.

## **JSON Format**

The root JSON value must be an object:

```json
{
  "invoice": {
    "invoiceNumber": "INV-2026-001",
    "invoiceDate": "2026-07-15",
    "customerName": "Acme Trading Co., Ltd.",
    "customerEmail": "ap@acme.example",
    "currency": "USD"
  },
  "lineItems": [
    {
      "description": "Document processing",
      "quantity": 2,
      "unitPrice": 150.0,
      "amount": 300.0
    },
    {
      "description": "Validation service",
      "quantity": 1,
      "unitPrice": 75.5,
      "amount": 75.5
    }
  ],
  "summary": {
    "subtotal": 375.5,
    "tax": 37.55,
    "total": 413.05
  },
  "notes": "Please verify the invoice number, customer information, quantities, and total against the PDF."
}
```

The following root format is not supported:

```json
[
  {
    "invoiceNumber": "INV-2026-001"
  }
]
```

Arrays are supported when nested inside a root object, such as `lineItems`.

## Supported JSON Types

- **String** - Displayed as a text input.
- **Number** - Displayed as an editable numeric value.
- **Boolean** - Displayed as a checkbox.
- **Null** - Displayed as an empty input and kept as `null` when left empty.
- **Date** - Values in `yyyy-MM-dd` format are displayed with a date picker.
- **DateTime** - ISO date-time values such as `2026-07-15T14:30:00Z` are displayed with a date-time picker.
- **Object** - Displayed as a grouped section.
- **Array** - Displayed as indexed grouped sections.

## User Actions

- **Save** - Returns the edited JSON through `Output Data` and optionally writes it to `Output JSON Path`.
- **Cancel** - Returns the original JSON. If the user changed a value, an English confirmation message is displayed before cancelling.
- **Close (X)** - Closes FormBuilder without saving. `Output Data` is `null`, `Output JSON Path` is not written, and the input JSON file remains unchanged.


## Example

```text
Display PDF Form
    PDF Path        = "C:\\Input\\invoice.pdf"
    JSON Path       = "C:\\Input\\invoice.json"
    Output Data     = editedInvoice
    Output JSON Path = "C:\\Output\\invoice-result.json"
```

The input file is read-only. To create a result file, configure `Output JSON Path` explicitly.

## Validation and Errors

- **Either JsonPath or JsonObject must be provided.** - Configure one JSON input source.
- **File PDF input was not found.** - Check `PDF Path`.
- **File JSON input was not found.** - Check `JSON Path`.
- **The root JSON value must be an object. JSON arrays are not supported.** - Wrap the array inside a root object.
- **Output Data is null.** - The user closed FormBuilder with the `X` button instead of using `Save` or `Cancel`.
