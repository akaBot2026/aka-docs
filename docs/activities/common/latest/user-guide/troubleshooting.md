---
id: troubleshooting-ui-automation
title: "Troubleshooting UI Automation"
sidebar_label: "Troubleshooting"
sidebar_position: 4
description: "Guidelines for troubleshooting common UI Automation issues on the akaBot Platform."
displayed_sidebar: activitiesSidebar
---

# Troubleshooting UI Automation

This document provides the causes and troubleshooting steps for the most common errors encountered when building UI automation workflows in akaBot using traditional selectors.

> **Note:** For troubleshooting issues specifically related to Semantic Selectors, please refer to the [Semantic Selector Guide](semantic-selector-howto.md).

---

## Common Issues with Traditional Selectors (Strict/Fuzzy)

Below is a summary table of frequent errors when interacting with UI elements and how to resolve them:

| Issue / Exception | Common Causes | Solution |
| :--- | :--- | :--- |
| **SelectorNotFoundException** | • **Dynamic Elements:** The application structure or element attributes change dynamically upon each execution (e.g., randomly generated IDs).<br/>• **Page Refreshes:** The web page or application reloads during execution, invalidating the previous selector.<br/>• **Timing Issues:** The bot attempts to interact with an element before it is fully loaded or after it has disappeared. | • **Change UI Framework (F4):** In the **Selection Options** window, press **F4** to cycle through available UI frameworks (Default, Active Accessibility, UIA3) until the element is detected.<br/>• **Use Computer Vision (F8):** Press **F8** to switch to Computer Vision mode, which locates the element visually instead of relying on its underlying attributes.<br/>• **Use Image Region Selection (F3):** Press **F3** to capture the element as a screenshot region when all other methods fail.<br/>• **Edit the Selector:** Click **Confirm** to save the selection, then open the **Selector Editor** from the activity's **Properties** panel to replace volatile attribute values with wildcards (`*`, `?`) or variables. Refer to the [Selector Guide](selector-guide.md) for a full walkthrough.<br/>• **Use Retry Scope:** Enclose the activity in a **Retry Scope** activity to automatically retry when the element is not found on the first attempt. |
| **Timeout** | • The UI element fails to appear or become ready within the activity's configured timeout period. This is common when the application loads slowly due to heavy data processing or a slow network connection. | • **Check Element Readiness:** Add an **Element Exists** activity before the main action to wait until the element is confirmed to be present on screen before proceeding.<br/>• **Increase Timeout:** Raise the **TimeoutMS** property (value in milliseconds) on the failing activity to give the application more time to respond.<br/>• **Set Wait For Ready:** Change the **Wait For Ready** property to **Complete** to instruct akaBot to wait until the browser or application reports that the page is fully loaded before interacting. |
| **Disabled Element** | • The element is visible on screen but is in a *disabled* (grayed out) state, causing click or type actions to be ignored by the application. This typically happens when a preceding workflow step (e.g., accepting a terms checkbox) has not been completed, leaving a dependent button inactive. | • **Check Workflow Logic:** Verify that all preceding steps in the business process have been completed correctly (e.g., checking a required checkbox before the Submit button becomes active).<br/>• **Use Alter If Disabled:** If interacting with the disabled element is intentional and supported by the activity, enable the **Alter If Disabled** option in the activity's properties to force the interaction. |

---

## Browser-Specific Troubleshooting

When automating web applications, selector behavior can differ between browsers. If an activity works in one browser but fails in another, check the following:

- **Verify BrowserType:** In the **Open Browser** or **Attach Browser** activity, ensure the **BrowserType** property is set to the browser you are actually using (e.g., `Chrome`, `Edge`, `Firefox`). A mismatch is a common and silent cause of failure.
- **Re-validate Selectors:** A selector built in one browser (e.g., Chrome) may use different attribute values for the same element in another browser (e.g., Edge). If you switch browsers, open the **Selector Editor** and click **Validate** to confirm the selector still resolves correctly in the new browser.
- **Check the akaBot Web Extension:** The **akaBot Web Extension** must be installed and enabled in the browser for the robot to detect and interact with web elements. If the extension is disabled or missing, the robot will not be able to see any element on the page. See the [akaBot Web Extension Installation Guide](/docs/studio/latest/user-guide/how-to-install-akabot-web-extension.md) for setup instructions.

---

## See Also

- [Selector Guide](selector-guide.md) — How to diagnose and fix unstable selectors using the Selector Editor.
- [Semantic Selector Guide](semantic-selector-howto.md) — How to use AI-powered element targeting when traditional selectors are unreliable.
