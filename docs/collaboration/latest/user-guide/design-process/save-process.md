---
id: save-process
title: How to Save After Designing a Process
sidebar_label: How to Save After Designing a Process
sidebar_position: 7
displayed_sidebar: collaborationSidebar
---

# How to Save After Designing a Process

Saving your work correctly in the akaBot Center Process Designer is essential for maintaining design integrity, enabling collaboration among team members, and controlling which version of the process is available for operational execution. The designer offers two modes of saving: **Draft Save** for preserving work in progress, and **Publish** for making a completed, validated process available for execution. Understanding the difference between these modes and using them appropriately prevents accidental deployment of incomplete processes.

akaBot Center also provides **auto-save** functionality that periodically saves a draft snapshot of your work every few minutes while you are editing. Auto-save protects against data loss from browser crashes or accidental page navigation. However, auto-saved drafts are not visible to other users and do not create a new version entry — only explicit saves and publishes create auditable version records.

Version management in akaBot Center means every explicit save creates a new version record with a timestamp and the name of the user who saved it. Older versions are retained and can be viewed or restored at any time. This ensures that changes to a published process can always be rolled back if a problem is discovered, and that in-flight process instances continue running on the version they were started with, unaffected by subsequent changes.

## Save States Explained

| State | Description | Visible to Operators | Triggers New Instances |
|---|---|---|---|
| Auto-Save Draft | Periodic background save; only visible to the current editor | No | No |
| Draft Save | Explicit save by the user; creates a version record | No (preview only) | No |
| Published | Process is finalized and released for operational use | Yes | Yes |
| Archived | Process is retired and hidden from the active process list | No | No |

## Steps to Save a Process as Draft

1. While working in the **Process Designer**, click **Save as Draft** in the toolbar.
2. A **Save Version** dialog appears.
3. Enter an optional **Version Note** describing the changes made (e.g., "Added escalation rule to invoice approval task").
4. Click **Save**.
5. The version is recorded and the designer remains open for further editing.

## Steps to Publish a Process

1. Complete the process design and ensure all tasks are properly connected with no validation warnings.
2. Click the **Validate** button in the toolbar to run a pre-publish check. Resolve any reported errors.
3. Click **Publish** in the toolbar.
4. In the **Publish Process** dialog:
   - Confirm the **Version Label** (e.g., `2.1.0`).
   - Enter a **Release Note** describing what changed in this version.
   - Optionally, select **Notify Stakeholders** to send email notifications to the process owner group.
5. Click **Confirm Publish**.
6. The process status changes to **Published** and is now available to operators and schedulers.

## Version History

- Access version history by clicking **Version History** in the Process Designer toolbar.
- Each row shows the version number, save date, saved-by user, and any version note.
- Click **View** to open a read-only snapshot of any past version.
- Click **Restore** to create a new draft based on any previous version.
