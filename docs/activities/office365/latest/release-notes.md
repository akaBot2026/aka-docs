---
id: release-notes
title: "Release Notes"
sidebar_label: "Release Notes"
sidebar_position: 2
description: "RCA.Activities.Office365 release notes."
displayed_sidebar: activitiesSidebar
---
# Release Notes

### v3.2.0.0

- Added support for .NET 4.7.2
- Added Outlook mail activities: `SendMail`, `GetMail`, `MoveMail`, `DeleteMail`, `ForwardMail`, and `ReplyToMail`. (only available on akaBot Studio `3.0.0.0` an above).

### v1.0.1.0

- Added `CheckInFile` and `CheckOutFile` activities.
- Added `ListItem` input support for CheckIn and CheckOut.

### v1.0.0.0

- Initial Office365 activity package.
- Added the following activities:

Files

- `CopyItem`
- `CreateFolder`
- `DeleteItem`
- `DownloadFile`
- `ExportFileAsPdf`
- `FindFilesAndFolders`
- `GetFileFolder`
- `MoveItem`
- `ShareItem`
- `UploadFile`

SharePoint Lists

- `AddListItems`
- `DeleteListItem`
- `UpdateListItem`
- `GetListInfo`
- `ForEachList`
- `ForEachListItem`

Scope

- `Office365ApplicationScope`