---
id: release-notes
title: "Release Notes"
sidebar_label: "Release Notes"
sidebar_position: 2
description: "Release notes for the Computer Vision activity package."
displayed_sidebar: activitiesSidebar
---

# Release Notes

## **v3.2.0.1**

Build date: Sep 29, 2026

**Fixed**

* Fixed local CV server discovery for projects that use `project.v1.json`.
* Fixed **CV Type Into** occasionally losing the first character after **ClickBeforeType**, particularly through Remote Desktop sessions.
* Preserved uppercase and lowercase characters when using **CV Type Into**.
* Changed **EmptyField** clearing to use `End`, `Left Shift + Home`, and `Delete`, with input-settling delays for Remote Desktop targets.
* Updated the designer so enabling **EmptyField** automatically enables **ClickBeforeType**. Runtime execution also enforces the click requirement for older or manually edited workflows.

---

## **v3.2.0**

Build date: Jul 30, 2026

**Changed**

* Maintained package outputs for .NET Framework 4.5.2 and 4.7.2.
* Added framework-specific `Newtonsoft.Json` dependencies: 10.0.1 for .NET Framework 4.5.2 and 13.0.3 for .NET Framework 4.7.2.
* Updated `RestSharp` and related dependencies as part of the activity-package vulnerability remediation work.

---

## **v3.1.0.4**

Build date: Jan 06, 2026

**Changed**

* Migrated the Computer Vision project to the SDK-style project format.
* Added package output for both .NET Framework 4.5.2 and 4.7.2.
* Moved the package to the 3.x version line while retaining the `3.1.0.4` revision.
* Simplified project and package references and centralized assembly metadata.
* Ensured the correct x86 and x64 OpenCvSharp native libraries are copied to build output.
* Updated JSON dependencies and binding behavior for the newer runtime.

**Fixed**

* Removed conflicting Japanese resource files that could prevent the package from loading correctly in Studio.
* Removed obsolete application configuration from the activity project and cleaned up redundant dependencies.

---

## **v1.1.0.5**

Build date: Jan 24, 2026

**Changed**

* Updated `Newtonsoft.Json` to 13.0.3 and aligned `RestSharp` with the supported package set.
* Optimized NuGet dependencies and removed the unused `HtmlAgilityPack` dependency.

**Fixed**

* Improved disposal of screenshots, bitmaps, and other unmanaged image resources following static security analysis.
* Reduced resource leaks in Computer Vision selection and image-processing workflows.

---

## **v1.1.0.4**

Build date: Jul 29, 2025

**Added**

* Added crop-region handling to **CV Screen Scope** and the Computer Vision selection tool.
* Added additional language resources for **CV Element Exists**.

**Changed**

* Improved **CV Dropdown Select** text normalization, match ordering, and option click positioning.
* Improved target selection when duplicate elements are present.
* Updated JSON assembly binding for maintenance compatibility.

**Fixed**

* Fixed **CV Type Into** character casing.
* Changed **CV Type Into** field clearing from `Ctrl + A` to `End`, `Shift + Home`, and `Delete`.
* Ensured **CV Type Into** clicks the target when **EmptyField** is enabled.
* Fixed coordinate handling when a reusable input region is used.
* Fixed bitmap lifetime handling that could cause `OutOfMemoryException` during repeated captures.

---

## **v1.1.0.3**

Build date: Sep 04, 2024

**Added**

* Added anchor visualization when multiple matching targets are shown in the Selection Options window.

**Changed**

* Prioritized horizontal anchors when ranking otherwise similar targets.
* Improved fuzzy matching for OCR text elements.
* Adjusted the cosine-similarity threshold to reduce false-positive element matches.

---

## **v1.1.0.2**

Build date: Jun 14, 2024

**Added**

* Added **ReDetectScreenScope**, allowing an activity to refresh Computer Vision detections immediately before execution.
* Added configurable timeout handling and localized timeout messages.
* Added the activity configuration file to the NuGet package.

**Changed**

* Increased request tolerance for local or remote CV servers that require more processing time.
* Refactored **CV Screen Scope** body handling to remain compatible with workflows created by older Studio versions.
* Made `CVScopeOutput` public for integration scenarios.

**Fixed**

* Fixed activities failing to retrieve the scope image from the CV cache.
* Fixed null-reference errors when resolving activity timeouts.
* Fixed exceptions when starting **Indicate on Screen** or editing a selector.
* Improved failure messages when the CV cache is unavailable.

---

## **v1.1.0.1**

Build date: Apr 11, 2024

**Added**

* Added support for the packaged local Computer Vision server.
* Added local-server discovery, per-user-session URL and port handling, and localized dependency validation messages.

**Changed**

* Updated CV request and response models for the local server.
* Enabled multipart form-data requests consistently for server compatibility.

---

## **v1.1.0**

Build date: Apr 03, 2024

**Added**

* Added reusable crop regions as targets for **CV Type Into** and **CV Table Extract**.
* Added background-color filtering to **CV Get Text**.
* Added row-based text extraction with configurable row threshold and word separator.
* Added visualization of similar target elements in the selection interface.

**Changed**

* Moved descriptor validation to runtime so workflows can be loaded and edited before target resolution.
* Improved target ranking with intersection-over-union checks and updated similarity thresholds.
* Improved clipping-region positioning and handling when the target window moves.
* Refined the Selection Options and loading-window experience.

**Fixed**

* Fixed **CV Get Text** when OCR text itself is selected as the target.
* Fixed crop regions being removed, offset incorrectly, or selectable in unsupported contexts.
* Prevented image cropping outside bitmap boundaries.
* Fixed several target, anchor, and z-order issues in the Computer Vision selector.

---

## **v1.0.0.0**

**Added**

* Initial release of the Computer Vision activity package.
* Added the following activities:
  * **CV Screen Scope**
  * **CV Check**
  * **CV Click**
  * **CV Dropdown Select**
  * **CV Element Exists**
  * **CV Get Text**
  * **CV Highlight**
  * **CV Hover**
  * **CV Table Extract**
  * **CV Type Into**
