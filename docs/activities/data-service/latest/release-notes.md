---
id: release-notes
title: Release Notes
sidebar_label: Release Notes
sidebar_position: 2
description: What's new, improved, and fixed in each version of Data Service package.
displayed_sidebar: activitiesSidebar
---

# Release notes

## v1.2.0.1

Build date: Jul 14, 2026

* Fixed: do not set content body to prevent exception when run **Get Entity Record By Id** activity 
* Update: throw meaningful exception message with http code and response content
* Reverted: SelectedItemToItemSourceConverter to original code to fix empty operator selection in **Query Entity Records** builder

## v1.2.0

Build date: Jul 06, 2026

* Fixed: Enables .NET's unsafe HTTP header parsing once so Data Service can parse response headers returned by server or proxy.

## v1.0.1.1

Build date: Mar 13, 2025

* Fixed: use cancellation token correctly
* Fixed: wait for task result correctly
* Update: use default 30 seconds timeout
* Update: when input DataServiceClient is exists, do not validate other properties
* Update: many error messages
* Update: add response status code to exception message
* Added: show error message if any exception when open QueryBuilder window
* Removed: redundant code

## v1.0.0

* Added: Data Service Scope activity
* Added: Create Entity Record activity
* Added: Get Entity Record By Id activity
* Added: Update Entity Record activity
* Added: Delete Entity Record activity
* Added: Query Entity Records activity

## **How to install activity?**

**1. Download package manually**

- Click [here](https://ws3.akabot.com/s/nmCjglntIiMnqRn) to download activity file.

- Put the \*.nupkg file to folder: **C:\ProgramData\akaBot\Packages\\**

- In **Studio > Package Manager**, search and install this activity from the list.

**2. Use Studio Package Manager**

- In **Studio > Package Manager > Settings > User package sources,** add this repository: https://gitlab.com/api/v4/projects/75840319/packages/nuget/index.json

- Search and install this activity from the list.
