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

*PDF document displayed on the left and editable JSON data displayed on the right. Nested objects and arrays are displayed as grouped sections. Use Ctrl + mouse wheel to zoom the PDF.*

## Properties

**Common**

- **Continue On Error (Boolean)** - Specifies whether the workflow continues when the activity encounters an error. `True` allows the workflow to continue. `False` (default) stops the workflow when an error occurs. When `True`, Cancel or Close (X) does not stop the workflow; `Output Data` remains unset (`null`).

**Input**

- **PDF Path (String)\*** - Full path to the PDF file to display and validate.
- **Form Title (String)** - Title shown in the FormBuilder window. If empty, defaults to `PDF Form Validation`.
- **JSON Path (String)** - Full path to a JSON file containing the initial values. The JSON root must be an object. Nested objects and arrays are supported. Provide either `JSON Path` or `JSON Object` (one is required).
- **JSON Object (JObject)** - A `JObject` containing the initial values. Use this property when the JSON is provided by another activity or workflow variable. Provide either `JSON Path` or `JSON Object` (one is required).

**Output**

- **Output Data (JObject)** - Returns the edited JSON object after the user clicks `Save`. Not set when the user clicks `Cancel` or closes the window with `X` (the activity throws an error instead; see User Actions).
- **Output JSON Path (String)** - Optional path where the result JSON is written after a successful `Save`. This property is separate from `JSON Path`; the input JSON file is not overwritten automatically. Nothing is written on `Cancel` or Close (X).

**Misc**

- **Display Name (String)** - The name of this activity. You can edit the name to organize and structure the workflow.

## **JSON Format**

The root JSON value must be an object:

```json
{
  "VENDOR_NAME": "Engsuco Builders Sdn. Bhd.",
  "VENDOR_ADDRESS": "PLT C 139, PT2191, Jalan Sg. Bakau, Kg Sungai Bakau 48000 Rawang",
  "VENDOR_COUNTRY": "Malaysia",
  "TELEPHONE_NUMBER": "+603-1234567",
  "EMAIL_ADDRESS": "engsucobuilders@gmail.com",
  "TAX_IDENTIFICATION_NUMBER": "C60151271050",
  "BUSINESS_REGISTRATION_NUMBER": "202501026728",
  "SST_REGISTRATION_NUMBER": "B16-2510-32000021",
  "PAYMENT_TERMS": "30 - 45 Days",
  "PAYMENT_METHOD": "Bank Transfer",
  "COMPANY_CODE": "",
  "ACCOUNT_GROUP": "LOCAL",
  "RECONCILIATION_ACCOUNT": "",
  "highlightFields": ["VENDOR_NAME", "COMPANY_CODE"],
  "invoiceItems": [
    {
      "invoise1": {
        "invoiceNumber": "INV-2026-9999",
        "invoiceDate": "2026-07-28"
      },
      "highlightFields": ["invoise1"]
    },
    {
      "invoise2": {
        "invoiceNumber": "INV-2026-9999",
        "invoiceDate": "2026-07-28",
        "highlightFields": ["invoiceDate"]
      }
    }
  ]
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

Arrays are supported when nested inside a root object, such as `invoiceItems`.

### Optional field highlighting

If the JSON includes a `highlightFields` array of property names, matching fields are highlighted in the form (red border / light red background). Nested matching also propagates into child sections. The `highlightFields` key itself is not shown as an editable field.

## Supported JSON Types

- **String** - Displayed as a text input.
- **Number** - Displayed as an editable numeric value.
- **Boolean** - Displayed as a checkbox.
- **Null** - Displayed as an empty input and kept as `null` when left empty.
- **Date** - Values in `yyyy-MM-dd` format are displayed with a date picker.
- **DateTime** - ISO date-time values such as `2026-07-15T14:30:00Z` are displayed with a date-time picker.
- **Object** - Displayed as a grouped section.
- **Array** - Displayed as indexed grouped sections. Empty arrays show `(empty array)`.

## User Actions

- **Save** - Returns the edited JSON through `Output Data` and optionally writes it to `Output JSON Path`.
- **Cancel** - Discards edits. If the user changed a value, an English confirmation is shown: `You have unsaved changes. Do you want to cancel without saving?`. After confirmed cancel, the activity throws `The user skipped the validation process.` `Output Data` is not returned and `Output JSON Path` is not written.
- **Close (X)** - Closes FormBuilder without saving. The activity throws `The user skipped the validation process.` `Output Data` is not returned, `Output JSON Path` is not written, and the input JSON file remains unchanged.

## Example

```text
Display PDF Form
    PDF Path         = "C:\\Input\\invoice.pdf"
    Form Title       = "Invoice validation"
    JSON Path        = "C:\\Input\\invoice.json"
    Output Data      = editedInvoice
    Output JSON Path = "C:\\Output\\invoice-result.json"
```

The input file is read-only. To create a result file, configure `Output JSON Path` explicitly. Only a successful `Save` writes that file.

## Validation and Errors

- **Either JsonPath or JsonObject must be provided.** - Configure one JSON input source.
- **File PDF input was not found.** - Check `PDF Path`.
- **File JSON input was not found.** - Check `JSON Path`.
- **The root JSON value must be an object. JSON arrays are not supported.** - Wrap the array inside a root object.
- **The user skipped the validation process.** - The user clicked `Cancel` or closed FormBuilder with the `X` button. Use `Continue On Error = True` if the workflow should continue after a skip.