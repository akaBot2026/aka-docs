---
id: browser-workflow
title: "Browser Workflow"
sidebar_label: "Browser Workflow"
sidebar_position: 1
description: "Learn how Browser container activities establish and manage web automation sessions in akaBot Studio."
displayed_sidebar: activitiesSidebar
---

# Browser Workflow

To automate web applications in akaBot Studio, you must first establish a browser session. akaBot uses a **container-based model** where a parent container activity establishes the browser connection, and all nested activities inherit and execute within that active session.

This guide explains the container activities, when to use each, and how they manage browser workflows.

---

## Container Activities Comparison

akaBot provides three main container activities to manage browser sessions:

| Container | Purpose | When to Use |
| :--- | :--- | :--- |
| **[Open Browser](/docs/activities/browser/latest/activities/open-browser.md)** | Launches a fresh browser instance. | Use this as the starting point for most workflows to open a new tab/window at a specified URL. |
| **[Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md)** | Connects to an existing, already running browser instance. | Use this when you want the robot to take control of a browser that is already open. |
| **[Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md)** | Reuses an active browser session in a separate block. | Use this to split complex automation workflows into multiple sequences while retaining the same tab/session. |

---

## Container Workflows

### 1. Open Browser Workflow
The most common web automation workflow. It opens a new browser window, performs sequence actions, and automatically closes the browser when done (if configured).

#### Workflow Structure:
```
Open Browser 
   │
   └── Do (Session Context)
         ├── Navigate To 
         ├── Click 
         └── Type Into 
```

---

### 2. Attach Browser Workflow
Used when you want to take control of an already running browser. Typically combined with **Start Browser For Attach** to automate a debug-enabled Chrome window.

#### Workflow Structure:
```
Start Browser For Attach (Launches a Chrome instance for attachment)
   │
   └── Attach Browser (Connects to the running browser)
         │
         └── Do (Session Context)
               ├── Navigate To ("https://google.com")
               └── Type Into (Search Box)
```

---

### 3. Browser Scope Workflow
Reuses a browser session across different parts of a workflow using a `Browser` variable.

Open Browser creates a browser session and stores it in a `Browser` variable. Browser Scope uses the same `Browser` variable to continue automation in the existing browser session.

#### Workflow Structure:
```
Open Browser (Url: "https://akabot.com" ── Output Browser: myBrowser)
   │
   └── Do (First block actions)
         └── Click (Contact Us)

... (other workflow activities) ...

Browser Scope (Input Browser: myBrowser)
   │
   └── Do (Second block actions)
         └── Click (Free Trial)
```

> [!NOTE]
> To prevent the browser from closing between multiple browser containers, uncheck the **Quit Browser on Completed or Faulted** checkbox in the Properties panel of the containers.

---

## Next Steps

After establishing a browser session, learn how to interact with web elements in **[Working with Web Elements](/docs/activities/browser/latest/user-guide/working-with-web-elements.md)**.

---

## See Also

### Browser Activities
* **[Open Browser](/docs/activities/browser/latest/activities/open-browser.md)**
* **[Start Browser For Attach](/docs/activities/browser/latest/activities/start-browser-for-attach.md)**
* **[Attach Browser](/docs/activities/browser/latest/activities/attach-browser.md)**
* **[Browser Scope](/docs/activities/browser/latest/activities/browser-scope.md)**
* **[Navigate To](/docs/activities/browser/latest/activities/navigate-to.md)**
* **[Go Back](/docs/activities/browser/latest/activities/go-back.md)**
* **[Go Forward](/docs/activities/browser/latest/activities/go-forward.md)**
* **[Refresh](/docs/activities/browser/latest/activities/refresh.md)**
* **[Close Tab](/docs/activities/browser/latest/activities/close-tab.md)**
* **[Switch To](/docs/activities/browser/latest/activities/switch-to.md)**
* **[Quit Browser](/docs/activities/browser/latest/activities/quit.md)**

### Tutorials
* **[Google Search Use Case](/docs/activities/browser/latest/user-guide/google-search.md)**
* **[Tabs & Alerts Management](/docs/activities/browser/latest/user-guide/tabs-alerts-management.md)**
