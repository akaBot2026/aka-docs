---
id: release-notes
title: Release Notes
sidebar_label: Release Notes
sidebar_position: 2
description: What's new, improved, and fixed in each version of Akabot Hub.
displayed_sidebar: hubSidebar
---

# Akabot Hub — Release Notes

## v3.2.0 — April 2026

**New features**
- **AI-powered search** — Semantic search understands intent rather than exact keywords; find assets by describing what you need.
- **Dependency graph** — View which workflows and packages depend on a given activity package before publishing an update.
- **Private channels** — Create invitation-only channels within Hub to share assets with a specific team or project.

**Improvements**
- Asset import into Studio now validates compatibility with the current Studio version before downloading.
- Publisher profiles now show download counts, average ratings, and response-time SLAs.
- Changelog editor supports Markdown with a live preview panel.

**Bug fixes**
- Fixed asset search returning stale results for up to 60 seconds after a new asset was published.
- Resolved an issue where pinning to a specific version in Studio fetched the latest version instead.
- Fixed broken thumbnail previews for packages uploaded from macOS with extended attributes.

---

## v3.1.0 — January 2026

**New features**
- **Governance approval workflow** — Administrators define a multi-step approval chain; assets stay in draft until all approvers sign off.
- **Usage analytics** — Publishers can see download trends, active installs, and version adoption rates for their assets.
- **Collections** — Group related assets into a named collection (e.g., "Invoice Processing Suite") for one-click bulk import.

**Improvements**
- NuGet package validation now checks for known vulnerable dependencies and warns publishers.
- Hub portal search results can be filtered by asset type, rating, Studio compatibility, and license.
- REST API added for programmatic asset publishing as part of a CI/CD pipeline.

**Bug fixes**
- Fixed an issue where deleting a collection also deleted the underlying assets.
- Corrected star ratings not updating in real time after a review was submitted.

---

## v3.0.0 — September 2025

**New features**
- **Akabot Hub v3 launch** — Rebuilt marketplace with a NuGet-compatible feed, REST API, and Studio deep-link integration.
- **One-click import** — Install any Hub asset directly into the active Studio project from within the Hub portal.
- **Rating and review system** — Leave structured feedback with a 1–5 star rating and free-text review.

**Breaking changes**
- Hub v2 asset packages (`.abpkg`) must be re-published as standard NuGet packages to appear in Hub v3.

**Bug fixes**
- Resolved a permissions issue allowing guest users to download private assets via a direct URL.
