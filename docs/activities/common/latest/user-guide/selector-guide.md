---
id: selector-guide
title: "Selector Guide"
sidebar_label: "Selector Guide"
sidebar_position: 5
description: "How to understand and fix unstable selectors in akaBot Studio using the Selection Options window and the Selector Editor."
displayed_sidebar: activitiesSidebar
---

# Selector Guide

A **selector** is the XML-based fingerprint that akaBot uses to uniquely identify a UI element at runtime. When you use **Indicate on screen** to pick a target element in akaBot Studio, the platform automatically generates selectors that describe the element so the robot can find it again during execution.

This guide explains how selectors work in akaBot, what to do when a selector breaks, and how to fix it using the Selector Editor.

---

## Selector Types

When you indicate a target element on screen, the **Selection Options** window generates up to three selector types simultaneously. Each type has a checkbox to enable or disable it, and an **Accuracy slider** (0.0 → 1.0) that controls how closely the element must match at runtime.

All three types are enabled by default. akaBot uses them in combination to maximize resilience.

| Selector Type | How It Works | When It Is Most Useful |
| :--- | :--- | :--- |
| **Strict Selector** | Matches the element using its exact technical attributes (ID, class, tag, etc.), stored as an XML fragment describing the element and some of its parent windows. | Best when the page or application has a stable structure and the element has unique, reliable attributes. It is the fastest and most precise type, but it breaks if the underlying attributes change. |
| **Fuzzy Selector** | Matches the element using a similarity score against its attributes, allowing partial or wildcard matches instead of requiring an exact match. | Best when attributes are partly dynamic (for example, an ID that changes slightly between sessions). More resilient than Strict, but slightly less precise. |
| **Image Selector** | Identifies the element visually, using a screenshot of the element captured at record time, instead of inspecting its underlying attributes. | Best when the element has no reliable attributes to target, or when it lives inside a canvas, image, or virtualized UI component that is not accessible through normal means. |

> **Tip:** If a Strict or Fuzzy selector contains a dynamic value that changes on every run (for example, `id='session_48291'` where the number is randomly generated), you can manually edit the selector in the **Properties** panel and replace the volatile part with a wildcard (`*`).

---

## The Selection Options Window

When you click **Indicate on screen** inside a supported activity, akaBot Studio minimizes and a floating **Selection Options** toolbar appears on top of the screen. Hover over the target element until it is highlighted with a red border, then click to select it.

The toolbar displays the following instruction:

> *Hover the element you want to indicate and click (or right-click) to select it.*
>
> *If the element is not detected, try changing the UI framework (F4), enabling Computer Vision (F8), or using the Image region selection (F3).*
>
> *To pause the indicator for two seconds, press F2. To stop it, press Esc.*

After you click an element, the selector is validated automatically. The toolbar then shows the result and lets you confirm or adjust the selection.

| Button / Hotkey | What It Does |
| :--- | :--- |
| **F4** | Cycles through available UI frameworks (Default, Active Accessibility, UIA3) to find one that can detect the element. Press repeatedly to cycle. |
| **F8** | Switches to **Computer Vision** mode, which locates the element by its visual appearance rather than by its underlying attributes. |
| **F3** | Switches to **Image region selection**, which captures a screenshot of the target area and uses the image as the selector. |
| **F2** | Pauses the indicator for two seconds so you can hover over a menu or tooltip that would otherwise disappear before you can click. |
| **Validate** | Checks whether akaBot can currently resolve the generated selector to an element on screen. |
| **Confirm** | Saves the selection and returns to akaBot Studio. |
| **Cancel** | Discards the selection and returns to akaBot Studio without saving. |

---

## The Selector Editor

After a selector has been captured, you can inspect and edit it at any time using the **Selector Editor**. To open it:

1. In akaBot Studio, click on the activity in your workflow.
2. In the **Properties** panel on the right, find the **Selector** field under **Input > Target**.
3. Click the **Ellipsis (...)** button next to the Selector field.
4. The **Selector Editor** opens, showing the full XML selector and the list of attributes that were captured.

The Selector Editor provides the following tools:

| Tool | Description |
| :--- | :--- |
| **Validate** | Checks whether the current selector resolves to an element currently visible on screen. The result turns green (valid) or red (invalid). |
| **Indicate Element** | Lets you re-click the target element on screen to regenerate the selector from scratch. |
| **Repair** | Lets you re-indicate the same element to patch a broken selector without fully replacing it. Only available when the selector is currently invalid. |
| **Highlight** | Brings the matched element to the foreground so you can visually confirm it is the correct one. Only available when the selector is valid. |
| **Edit Attributes** | Displays a checklist of all detected attributes. Check or uncheck attributes to include or exclude them from the selector. |
| **Edit Selector** | Lets you directly edit the raw XML to add wildcards, inject variables, or remove attributes manually. |

> **Note:** If akaBot Studio and the target application are running under different privilege levels (for example, Studio as Administrator and the app as a standard user), the selector may fail to resolve. Always run both with the same privilege level.

---

## Fixing an Unstable Selector

A selector is **unstable** when it works on one run but fails on another. The usual cause is that one or more attribute values in the selector are *dynamic* — they change each time the application starts or the page reloads.

### Step 1 — Uncheck Dynamic Attributes

The simplest way to fix an unstable selector is to completely remove the volatile attributes so akaBot ignores them.
1. Open the **Selector Editor**. Look at the checklist under **Edit Attributes**.
2. **Uncheck** any attribute that looks dynamic or temporary. Common culprits include:
   - **ID with random numbers:** (e.g., `id='session_48291'`).
   - **Temporary classes:** (e.g., `class='btn-active hover'`).
   - **Index (`idx`):** Uncheck `idx` unless absolutely necessary. It specifies the element's order among siblings and breaks immediately if a new element is added to the page.

### Step 2 — Prioritize Fixed Attributes

After unchecking unstable attributes, ensure the remaining checked attributes are stable enough to uniquely identify the element. Prioritize checking these attributes:
1. **`aaname`** or **`name`** — The visible label of the element. This rarely changes.
2. **`tag`** — The HTML element type (e.g., `INPUT`, `BUTTON`).
3. **`title`** — The window or page title.

### Step 3 — Use Wildcards or Variables (Optional)

If you cannot simply uncheck an attribute because the remaining attributes aren't unique enough, you can edit the raw XML to replace just the volatile *part* of the value.

**Option A — Use a wildcard**
Replace the dynamic part with a `*` (matches any sequence) or `?` (matches a single character).
- **Before:** `<webctrl id='session_48291' tag='INPUT' />`
- **After:** `<webctrl id='session_*' tag='INPUT' />`

**Option B — Use a variable**
Inject a runtime variable by wrapping its name in double curly braces `{{}}`.
- `<webctrl id='order_{{orderId}}' tag='INPUT' />`

### Step 4 — Validate the Fix

After editing, always click **Validate** in the Selector Editor to confirm the updated selector correctly resolves to your intended element before closing.

---

## See Also

- [Troubleshooting UI Automation](troubleshooting.md) — Common runtime errors such as SelectorNotFoundException, Timeout, and Disabled Element.
- [Semantic Selector Guide](semantic-selector-howto.md) — How to use AI-powered element targeting when traditional selectors are unreliable.
