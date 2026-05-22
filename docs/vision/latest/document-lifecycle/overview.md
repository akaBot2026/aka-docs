---
id: overview
title: Overview
sidebar_label: Overview
sidebar_position: 1
description: All statuses a document may pass through in akaBot Vision.
displayed_sidebar: visionSidebar
---

# Overview 
With the diagram, we would like to introduce all the different statuses a document might have in akaBot Vision.

![1696219721037-203.png](/static/img/1696219721037-203.png)  
  
When a staff uploads a document, the status of the imported document might be:

* INVALID\_LICENSE: when there is no quota to import files for this pipeline or the expiry date is over. When the license is renewed, staff can retry to reprocess this document.
* TOREVIEW: when the Setting/automation type is not Always. The document is here to be reviewed by reviewer.
* CONFIRMED: when the Settings/automation type is Always, the document passes through ToReview status without the need for human verification and goes straight to Confirmed status.
* REJECTED: when the document is not invoice type
* IMPORTING: when a document takes time to be processed. If processing time exceeds 30 minutes, the document will be moved to IMPORT FAILED status
* IMPORT FAILED: when document's processing time exceeds 30 minutes, the document will have IMPORT FAILED status.
* When processing time when the document is more than 20MB and has the wrong format. Now akaBot Vision is supporting some formats such as (JPG,JPEG,PNG,PDF,TIFF, TIF)

Note: A staff can not upload documents to akaBot Vision if they have one of these below conditions:

* The document is more than 20MB
* The document has wrong format. Now akaBot Vision is supporting some formats such as (JPG,JPEG,PNG,PDF,TIFF,TIF) so all the others format will be verified to wrong format and can not upload to akaBot Vision

When reviewers choose a ToReview document and

* Want to review it later for some reason, they can click Postpone button then that document will be moved to the Postponed tab (Switching to Postponed status).
* Find that all the extracted data is ok, they can click Confirm button then this document will be moved to the Confirmed tab (Switching to Confirmed status).

With a postponed document, reviewer can move it to Confirmed tab if there is no issue.

With a confirmed document, reviewer might want to export it by clicking on the Export button. Akabot Vision supports some formats to export files such as CSV, XML, and JSON. When the file is exported, its status is switched to exported. Your volume license is just deducted when a document was exported successfully.

When a document is at ToReview/Postponed/Confirmed, staff might want to reject this document for some reason, they can click the Reject button then this document will be moved to Rejected tab (Switching to Rejected status).

At every status (ToReview/ Postponed/ Confirmed/ Exported/ Rejected), reviewer can click retry button to reprocess selected document or click delete button to delete selected document (Switching to Deleted status). The document can not be retried when it is on Deleted status.

On the Delete tab, document will be auto-clear after a specific day that is configured on Pipeline settings or the document can be cleared manually.

If the pipeline's setting is turning on Auto Split button, the documents which are merged from multiple documents will be split automatically and then they will be validated document type. If fail, they will be moved straight to the Rejected tab. If passed, they will continuously be validated bypass conditions. If passed, they will be moved to the Confirmed tab automatically. If fail, they will be kept in ToReview tab and need to be reviewed by reviewer
