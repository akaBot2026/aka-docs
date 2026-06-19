---
id: google-search
title: "Google Search Use Case"
sidebar_label: "Google Search Use Case"
sidebar_position: 1
description: "A step-by-step tutorial demonstrating how to perform a Google search and retrieve results using Browser activities."
displayed_sidebar: activitiesSidebar
---

# Google Search Use Case

> A step-by-step tutorial demonstrating how to perform a Google search and retrieve results using Browser activities.

This guide provides a practical, real-world exercise using **Google Search** to demonstrate web automation. You will build a workflow that automatically navigates to Google, searches for a keyword, extracts the page result text, and displays it via a message box popup.

You will use activities such as [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Type Into](/docs/activities/browser/latest/activities/type-into.md), [Send Hot Keys](/docs/activities/browser/latest/activities/send-hot-keys.md), and [Get Text](/docs/activities/browser/latest/activities/get-text.md) from the **RCA.Activities.Browser** package, alongside the **Message Box** activity from the Core package.

---

## Lesson Overview

* **Use case: Search Google** – Design a standard search workflow on `https://www.google.com/`.

---

## Section: Use Case – Search Google

This section guides you through creating a process to search for `"akaBot"` on Google, extract the text of the search results page, and display it.

### Prerequisites

* Target URL: `https://www.google.com/`
* Input keyword: `akaBot`
* Output: Display search results text via a popup.

### Step-by-Step Instructions

1. Open akaBot Studio and create a new **Process**.
2. Drag a **Sequence** container into the **Workflow Designer**.
3. Drag an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) activity inside the **Sequence** container.
   * In the **Properties** panel under **Input**, set the **Url** field to `"https://www.google.com/"`.
   * Select `Chrome` in the **Browser Type** dropdown list.
4. Drag a [Type Into](/docs/activities/browser/latest/activities/type-into.md) activity inside the **Do** container of the **Open Browser** activity.
   * Click the **Pick target element** link on the activity block.
   * Click on the Google Search input bar on the browser.
   * In the **Properties** panel under **Input**, set the **Text** field to `"akaBot"`.
5. Drag a [Send Hot Keys](/docs/activities/browser/latest/activities/send-hot-keys.md) activity below the **Type Into** activity.
   * Click **Pick target element** and select the Google Search input bar again.
   * Select `KEY_ENTER` from the **Special Key** dropdown list in the activity designer or the **Properties** panel to execute the search query.
6. Drag a [Get Text](/docs/activities/browser/latest/activities/get-text.md) activity below the **Send Hot Keys** activity.
   * Click **Pick target element** and select the main body or container area of the search results (which contains the search results listing).
   * In the **Properties** panel under **Output**, press `Ctrl + K` in the **Result** field and create a new string variable named `resultsText`.
7. Drag a **Message Box** activity (from the Core toolbox section) below the **Get Text** activity.
   * In the **Properties** panel, set the **Text** field to `resultsText`.
8. Run the process to verify that the browser launches, searches Google, and displays the search results text in a popup.
