---
id: semantic-selector-guide
title: "Semantic Selector"
sidebar_label: "Semantic Selector"
sidebar_position: 2
description: "This document describes how to configure and use Semantic Selector in Designer"
displayed_sidebar: activitiesSidebar
---

# How to Use the Semantic Selector

This guide is for workflow authors using Designer. Semantic Selector lets you target a UI element by
describing it in plain text, such as `Button Save` or `InputBox Email`.

---

## 1. Requirements

- A reachable cv-server with the grounding model loaded.
- The activity must be inside an **Open/Attach Application** or **Open/Attach Browser** scope.
- The project must have `cvsettings.json` in the project folder.

Semantic is scope-only because it grounds against the current application/browser screenshot.

---

## 2. Configure `cvsettings.json`

Set only the semantic server URL. Health check, grounding, and OCR endpoints are handled internally by
the activity package.

```json
{
  "serverUrl": "http://localhost:8000/cv",
  "apiKey": "*",
  "ocr": true,
  "table": false,
  "background": false,
  // Semantic Selector configuration
  "semantic": {
    "url": "http://localhost:8000"
  }
}
```

- `semantic.url` is the cv-server base URL.

---

## 3. Design The Target

1. Add a supported activity inside an Application/Browser scope:
   Click, Hover, Type Into, Type Secure Text, Select Item, Get Text, Find Element, or Element Exists.
2. Indicate the target element normally. The Selection Options window opens.
3. Tick **Semantic selector**.
4. Describe your target using short role + visible text, for example:
   `Button Save`, `InputBox Email`, `Icon Search`, `CheckBox Remember me`.

   ![semantic-descriptor-textbox.png](/static/img/semantic-descriptor-textbox.png)

5. Click **Validate** to confirm your target.

   ![validate](/static/img/validate.gif)

6. If the highlighted result is correct, confirm/save the target.

Semantic-only targets are allowed, but the descriptor must not be blank.

---

## 4. Validate Results

| Status label | Meaning |
|---|---|
| *(empty)* + highlight | A detection was returned. |
| `Not same with target element` | The semantic result does not match the originally indicated strict/fuzzy/image target rectangle. |
| `Found no element` | The server returned no detection. |
| `Server not available` | Server health check failed. |
| `Semantic server not configured` | No effective semantic server URL is configured. |
| `Semantic selector is only available inside an Application/Browser scope.` | The activity is not inside a supported scope. |

The current endpoint returns one detection, so there is no `N elements found` ambiguity status.
