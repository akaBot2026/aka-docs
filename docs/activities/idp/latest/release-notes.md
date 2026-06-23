---
id: release-notes
title: "Release Notes"
sidebar_label: "Release Notes"
sidebar_position: 2
description: "Release Notes for IDP activity package."
displayed_sidebar: activitiesSidebar
---
# Release Notes

## v3.0.0

**Added / Improved**

* Upgraded package structure and added support for newer akaBot Vision platform API endpoints.
* Re-architected the **IDP Scope** container to support secure token management and connection pooling.
* Added support for multiple export formats (`DataTable`, `JsonString`, `XMLString`) in the **Export Document** activity.
* Optimized error handling and timeout behavior during large PDF document uploads in the **Import Document** activity.

**Bugs Fixed**

* Corrected target status dropdown validation rules in the **Update Document Status** activity.

## v1.0.0.1

**Bugs Fixed**

* Corrected minor connection validation checks in the **IDP Scope** activity when resolving server endpoints.
* Addressed array parsing issues in the **Update Document Status** activity when the input array contains trailing spaces or invalid formats.
* Enhanced debug logger message formatting for better execution tracking.

## v1.0.0

**Added**

* Initial release of the akaBot IDP activities package.
* Core container activity **IDP Scope** to establish authorized connections with the akaBot Vision server.
* Core document processing activities:
  * **Import Document**
  * **Export Document**
  * **Get Documents**
  * **Get Document Status**
  * **Update Document Status**
  * **Reload Document**