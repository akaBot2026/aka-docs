---
id: build-workflow-to-library
title: "Build Workflow to Library Package"
sidebar_label: "Build Workflow to Library"
sidebar_position: 12
description: "How to compile and package current workflows into a reusable NuGet library (.nupkg) in akaBot Studio."
displayed_sidebar: studioSidebar
---
# Build Workflow to Library Package

## **Overview**

The **Build Workflow to Library** feature compiles and packages your current workflow project into a reusable NuGet package (`.nupkg`). The resulting library can be published to **akaBot Center** or distributed through a local NuGet feed for use across multiple automation projects.

![Build Library Button in Ribbon](/static/img/build-library-ribbon.png)

---

## **1. Prerequisites**

Before building a library package, ensure the following conditions are met:

1. **Save all workflows**: All workflow files (`.xaml`) in the project must be saved.
2. **Resolve all validation errors**: The project must have no validation errors. Resolve any missing arguments or misconfigured activity properties before proceeding.

![Validation Error Warning](/static/img/build-library-validation-error.png)

---

## **2. Build the Library Package**

1. Click **Build Library** in the Studio ribbon.
2. In the **Version Input** dialog:
   - **Version**: Enter a semantic version number (e.g., `1.0.0.1` or `1.1.0.0`).
   - **Release Notes**: Describe the changes, fixes, or enhancements included in this version.
   - Click **OK** to proceed.

   ![Version Input Dialog](/static/img/build-library-version-dialog.png)

3. Studio compiles all workflows, resolves project dependencies, and generates the output package: `<ProjectName>.<Version>.nupkg`.
4. A completion dialog confirms the build with the package name, version, and output file location. Click **Open Output Folder** to access the generated file.

![Build Library Success Dialog](/static/img/build-library-success-dialog.png)

---

## **3. Using the Library in Other Projects**

1. In the target project, open **Manage Packages** from the Studio ribbon.
2. Select the appropriate feed (**akaBot Center** or a custom local repository).
3. Search for the library package by name, select the desired version, and click **Install** → **Save**.
4. The library's custom activities will appear in the **Activities Toolbox**, ready for use in your workflows.

![Consume Library in Manage Packages](/static/img/build-library-manage-packages.png)
