---
id: working-with-web-elements
title: "Working with Web Elements"
sidebar_label: "Working with Web Elements"
sidebar_position: 2
description: "Learn how to capture, identify, and stabilize web elements in akaBot Studio."
displayed_sidebar: activitiesSidebar
---

# Working with Web Elements

Most Browser activities (such as Click, Type Into, and Hover) interact with web elements on a webpage. This guide explains how to identify target elements, generate selectors, and create reliable automations.

> Before interacting with web elements, make sure you understand how browser sessions are created. See **[Browser Workflow](/docs/activities/browser/latest/user-guide/browser-workflow.md)**.

---

## Example Web Element Workflow
The diagram below shows a typical workflow structure for interacting with web elements inside a browser container:

```
Open Browser
   │
   └── Do
         ├── Wait Page Load Complete
         ├── Click 
         ├── Type Into 
         └── Send Hot Keys 
```

---

## Picking Target Elements

The **Pick target element** helper allows you to select elements on a webpage directly from your screen:

1. Click **Pick target element**.
2. Hover over the target element.
3. Click the element.
4. akaBot Studio automatically generates a selector.

**IMPORTANT**
> The akaBot Web Extension must be installed before selecting web elements.
> Without the extension, akaBot Studio cannot detect or capture elements from the browser.

---

## Repicking Elements

If a webpage layout changes, or if you accidentally selected the wrong element:
* Click the **Pick target element** link in the activity body again.
* Re-select the correct element on the webpage. akaBot Studio will overwrite the previous selector with the new one.

---

## Selectors & Selector Editor

When you pick a target element, akaBot Studio automatically generates a selector. You can review and modify the selector in the Selector Editor.

### The Selector Editor contains:
* **Attribute checklist**: Checkboxes for attributes belonging to the selected element (e.g., `id`, `class`, `aaname`, `tag`).
* **Selector XML query**: The resulting query used to search for the element at runtime.

### Common Selector Attributes:
* **`tag`**: The HTML element type (e.g., `INPUT`, `BUTTON`, `A`, `DIV`).
* **`id`**: The unique identifier of the element.
* **`class`**: The styling class name of the element.
* **`aaname`**: The visible inner text or accessible name (excellent for buttons and text links).

---

## Designing Stable Selectors

Some web elements use dynamic attributes that change every time the page loads. Avoid using these attributes because they may cause the selector to fail during execution.

### Best Practices for Selector Stability:

1. **Deselect Unstable Attributes**: Open the Selector Editor and uncheck boxes for dynamic, auto-generated, or temporary attributes (such as long numeric IDs or temporary state classes).
2. **Select Stable Attributes**: Check static, reliable attributes. Using the accessible name (`aaname`) or element `tag` in combination with static classes creates a robust selector.
3. **Use Wildcards**:
   * Use an asterisk (`*`) to replace zero or more characters. For example, `id='sm-12345'` can be refined to `id='sm-*'` to match any auto-generated suffix starting with `sm-`.
   * Use a question mark (`?`) to replace exactly one character.

---

## See Also

### Browser Activities
* **[Click](/docs/activities/browser/latest/activities/click.md)**
* **[Hover](/docs/activities/browser/latest/activities/hover.md)**
* **[Type Into](/docs/activities/browser/latest/activities/type-into.md)**
* **[Send Hot Keys](/docs/activities/browser/latest/activities/send-hot-keys.md)**
* **[Check](/docs/activities/browser/latest/activities/check.md)**
* **[Select Item](/docs/activities/browser/latest/activities/select-item.md)**
* **[Select Multiple Items](/docs/activities/browser/latest/activities/select-multiple.md)**
* **[Get Text](/docs/activities/browser/latest/activities/get-text.md)**
* **[Get Web Attribute](/docs/activities/browser/latest/activities/get-web-attribute.md)**
* **[Wait Element Exist](/docs/activities/browser/latest/activities/wait-element-exist.md)**
* **[Element Exist](/docs/activities/browser/latest/activities/element-exist.md)**
* **[Wait Web Attribute](/docs/activities/browser/latest/activities/wait-web-attribute.md)**
* **[Wait Element Vanishes](/docs/activities/browser/latest/activities/wait-element-vanish.md)**
* **[Extract Data](/docs/activities/browser/latest/activities/extract-data.md)**
* **[Extract Structured Data](/docs/activities/browser/latest/activities/extract-structured-data.md)**

### Tutorials
* **[Google Search Use Case](/docs/activities/browser/latest/user-guide/google-search.md)**
* **[Tabs & Alerts Management](/docs/activities/browser/latest/user-guide/tabs-alerts-management.md)**
