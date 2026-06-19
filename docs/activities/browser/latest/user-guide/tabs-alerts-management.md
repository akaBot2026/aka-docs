---
id: tabs-alerts-management
title: "JavaScript Alert Handling"
sidebar_label: "2. JavaScript Alert Handling"
sidebar_position: 2
description: "A hands-on guide demonstrating how to handle JavaScript popups/alerts on a real test website using akaBot Browser activities."
displayed_sidebar: activitiesSidebar
---

# JavaScript Alert Handling

> A hands-on guide demonstrating how to handle JavaScript browser alerts on a real test website.

This guide shows you how to automate browser popups (JS Alerts) using a real-world testing sandbox: `https://the-internet.herokuapp.com/javascript_alerts`.

You will use activities including [Open Browser](/docs/activities/browser/latest/activities/open-browser.md), [Click](/docs/activities/browser/latest/activities/click.md), [Handle Alert](/docs/activities/browser/latest/activities/handle-alert.md), and [Get Text](/docs/activities/browser/latest/activities/get-text.md).

---

## What You Will Learn

* How to detect and accept JavaScript `alert()` popups that block the DOM.
* How to extract the result message after dismissing an alert.
* How to verify your automation worked using a **Message Box**.

---

## Step-by-Step Instructions

1. Open akaBot Studio and create a new **Process**.
2. Drag an [Open Browser](/docs/activities/browser/latest/activities/open-browser.md) activity inside the main Sequence.
   * In the **Properties** panel under **Input**, set the **Url** field to `"https://the-internet.herokuapp.com/javascript_alerts"`.
   * Set **Browser Type** to `Chrome`.
3. Drag a [Click](/docs/activities/browser/latest/activities/click.md) activity inside the **Do** container of **Open Browser**.
   * Click **Pick target element** and select the button labeled **Click for JS Alert** on the web page.
4. Drag a [Handle Alert](/docs/activities/browser/latest/activities/handle-alert.md) activity immediately below the **Click** activity.
   * Select `ACCEPT` from the **Handle Option** dropdown list in the activity block or in the **Properties** panel.
5. Drag a [Get Text](/docs/activities/browser/latest/activities/get-text.md) activity below **Handle Alert**.
   * Click **Pick target element** and select the result message block below the buttons (which should display *"You successfully clicked an alert"*).
   * Save the result to a variable `alertResult` (using `Ctrl + K` in the **Result** field).
6. Place a **Message Box** activity below the **Get Text** activity to display the content of the `alertResult` variable.
7. Run the process to verify that the robot successfully clicks the button, clicks **OK** on the popup, extracts the result text, and shows it.
