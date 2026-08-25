---
id: build-workflow-to-library
title: "Build Workflow to Library Package"
sidebar_label: "Build Workflow to Library"
sidebar_position: 12
description: "How to compile and package current workflows into a reusable NuGet library (.nupkg) in akaBot Studio."
displayed_sidebar: studioSidebar
---

# Build Workflow to Library Package

akaBot Studio Feature: `BuildWorkflowToLibrary`

## **Description**

The **Build Workflow to Library** feature allows developers to compile and package active workflow projects into reusable NuGet packages (`.nupkg`). These libraries can be published to **akaBot Center** or distributed via local NuGet feeds for reuse across multiple automation projects.

![Build Library Button in Ribbon](/static/img/build-library-ribbon.png)

---

## **1. Prerequisites & Validation**

Before building a library package:

1. **Save Workflows**: Ensure all workflow files (`.xaml`) are saved.
2. **Zero Validation Errors**: The active workflow must contain 0 validation errors. If any required arguments or activity properties are missing, resolve them before proceeding.

![Validation Error Warning](/static/img/build-library-validation-error.png)

---

## **2. Build Process Step-by-Step**

1. Click **Build Library** in the Studio ribbon.
2. In the **Version Input Dialog**:
   - **Version**: Set the semantic version (e.g., `1.0.0.1` or `1.1.0.0`).
   - **Release Notes**: Document changes, bug fixes, or enhancements.
   - Click **OK**.

![Version Input Dialog](/static/img/build-library-version-dialog.png)

3. Studio compiles all workflows, resolves project dependencies, and generates the `<ProjectName>.<Version>.nupkg` package file.
4. A completion dialog appears with output details (Package Name, Version, and File Location) and an **Open Output Folder** button.

![Build Library Success Dialog](/static/img/build-library-success-dialog.png)

---

## **3. Consuming the Library in Other Projects**

1. In target projects, open **Manage Packages** from the ribbon.
2. Select your feed (**akaBot Center** or custom local repository).
3. Search for the library package name, select the desired version, and click **Install** $\rightarrow$ **Save**.
4. Custom activities from the library will appear in the **Activities Toolbox** ready for drag-and-drop workflow building.

![Consume Library in Manage Packages](/static/img/build-library-manage-packages.png)
