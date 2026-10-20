---
id: introduction
title: "Introduction"
sidebar_label: "Introduction"
sidebar_position: 1
description: "Introduction to Common activity package"
displayed_sidebar: activitiesSidebar
---
# Introduction

The Common Activities package contains all the activities used for creating automation projects. These activities enable the agents to:

* Perform browser interaction and window manipulation.
* Simulate human interaction, such as performing mouse and keyboard commands or typing and extracting text.
* Wait for some elements on browser to help the user to troubleshoot issues while re-directing to different web pages.

Supported target applications.
* Browser (Chrome, MS Edge, Firefox).
* Window application (Win32, Qt, Windows Forms, WPF).
* SAP GUI for Windows.
* Java (64-bit) application.

> **Note:** Browser extension installation is required to automate web browsers.

Supported selectors listed below. The activity will loop to find each enabled selector, one by one, until found element or exceeded `TimeoutMS` value.
* **Strict**: a precise targeting method that identifies a UI element by looking for exact matches on attributes like tags, IDs, and names. It acts as the exact address for an element on your screen.
* **Fuzzy**: a targeting method that finds user interface (UI) elements using approximate string matching instead of requiring an exact match.
* **Image**: a visual targeting method used to locate elements on a screen based on a captured picture rather than underlying code attributes.
* **Computer Vision**: using neural networks to identify on-screen elements visually instead of relying on traditional, code-based XML selectors.
* **Semantic**: an AI-driven targeting method that identifies user interface (UI) elements based on their meaning, role, and context rather than rigid positions or structural attributes.

## SAP Automation

In order to enable Studio to interact with SAP GUI for Windows, you need to perform the following configurations steps on the server side and the client side.

* [Enabling Scripting on the Server side.](https://help.sap.com/docs/build-process-automation/sap-build-process-automation/enabling-scripting-on-server-side-bff7ad3f1ee44c909a5daa8173dc9eae)
* [Enabling Scripting on the Client side.](https://help.sap.com/docs/build-process-automation/sap-build-process-automation/enabling-scripting-on-client-side-bca5f0a557d94823a5e361212c98452b)
