---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
sidebar_position: 6
description: Find the cause of an error or a problem and what to do next.
displayed_sidebar: akaXtractSidebar
---

# Troubleshooting

Find your problem by the message on screen or by what you see.

## Most Common Problems

| You see | Fix |
| --- | --- |
| `Publish this Pipeline before uploading Documents.` | Publish a version first. Saving a Draft is not enough. See [Test and Publish](./pipelines/test-and-publish.md) |
| A document type is missing from the result | The `Document Type Key` does not exactly match the type that classification returns. See [Create a Pipeline](./pipelines/create-a-pipeline.md) |
| An Excel file is not processed | Convert it to PDF or CSV. See [Supported Files and Limits](./documents/upload-and-track.md#files-and-limits) |
| You cannot export a document | Only `Confirmed` documents can be exported. Open Review and select `Confirm` |
| Your corrections in Review are gone | Corrections are saved only when you select `Confirm`. See [Review](./documents/review-and-export.md#review) |

## Sign-In and Access

| Problem | Likely cause | What to do |
| --- | --- | --- |
| `Sign-in is not configured`, or sign-in is unavailable | Sign-in is not set up for this environment | Contact support with the time and the application address |
| Menus are missing, or access is denied | Wrong company, missing permission, or removed membership | Check the company, then ask an administrator to check your roles |
| A member was added but has no access | The roles were not saved | Use `Assign Role` again. Do not create the account again |

## Pipelines

| Problem | Likely cause | What to do |
| --- | --- | --- |
| `Pipeline name ... already exists` | Another Pipeline uses the name | Rename it, or open the existing Pipeline |
| `Select an API Key for the selected AI Model to continue.` | A model from another provider has no key | Select a key for that provider in the Pipeline. A key from `API Keys` does not work here |
| The model is unavailable | The model was removed or disabled | Select an allowed model, check the key, and test again |
| You cannot continue in the wizard | Missing name or model, invalid JSON, a classification prompt without a schema, missing or duplicate mapping key, or wrong threshold or retention | Fix the step shown. JSON must be a valid object, the threshold 0 to 100, and retention 1 to 180 days |
| The Pipeline already has a Draft | A Pipeline can have only one Draft | Open the existing Draft in the version selector |
| `Pipeline draft changed after preflight` | The configuration changed after the check | Save, check again, and test |

## Documents, Review, and Jobs

| Problem | Likely cause | What to do |
| --- | --- | --- |
| `File exceeds the configured size limit`, or the file type is not supported | The file is too large or its type is not processed | Use a supported type under 25 MB. Convert Excel to PDF or CSV |
| The upload succeeds but the Job fails | A processing or service error | Read `Error Message` in `Jobs`, fix the cause, and retry if the status allows |
| Quota is exceeded, expired, or not configured | No quota is available | Check `Quota & Usage` and contact an administrator |
| Confidence is high but the status is still `To Review` | Auto-approve is off, there are warnings, or there is no data | Read the warnings and review the result. Do not lower the threshold to skip a review |
| You cannot edit or save in Review | Another reviewer took over, or your session was interrupted | Reload and coordinate. Changes that are not confirmed are not saved |
| The Job is `Completed` but you cannot export | The Document is `Rejected` or reopened, or you lack permission | Check the Document status |
| Retry or Cancel is not allowed | The status changed, or you lack permission | Refresh `Jobs`. Retry only `Failed` or `Timed Out` Jobs. A Job in `Waiting for Review` cannot be cancelled |
| A document disappeared | Filters, the wrong Pipeline or company, deletion, or expired retention | Clear the filters and check the company, the Pipeline, and the retention period |

## Integrations

| Problem | Likely cause | What to do |
| --- | --- | --- |
| Webhook shows `FAILED` or `EXHAUSTED` | The URL, authentication, template, or receiver has a problem | Select `View` in `Webhook History` and work with the receiver team |
| ScaleConnect does not open | The browser blocked the popup | Allow popups for the application and select `Connect Service` again |
| The connection is already linked to another Pipeline | A connection links to only one Pipeline in a company | Check the current link, and agree a controlled disconnect or move |
| An API key does not work | The key is `Deactive`, expired, revoked, or scoped to another Pipeline | Check the status, expiry, and scope. Issue a new key if it was revoked or lost |

## Contact Support

Send the time, the company, the Pipeline and version, the Job ID, the file name, format, and size, the status, and the message with sensitive data removed. Do not send API keys, passwords, tokens, header values, or real documents unless you use an approved channel.
