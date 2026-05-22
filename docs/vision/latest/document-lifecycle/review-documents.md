---
id: review-documents
title: Review Documents
sidebar_label: Review Documents
sidebar_position: 4
description: How to review, confirm, postpone, or reject documents.
displayed_sidebar: visionSidebar
---
# Review Document
After importing the document successfully and the data extraction process is successfully finished, the document status will change to TOREVIEW.

## To Review Tab

You can see documents with this status in the “To review” tab in the user interface.

![image-20220420193327-1.png](/static/img/image-20220420193327-1.png)

**Note:**  If you have automation enabled in the pipeline, every successfully processed document will still pass through a TOREVIEW state. If you have enabled automation, the document will pass through this state without the need for human verification. If you don’t have automation enabled for the pipeline, the document will have the TOREVIEW state until a human validator review and confirms the document.

When you open a document to review it, the status will switch to reviewing. During this stage, user can make changes to the text in each field that has been detected incorrectly

![image-20220420193327-2.png](/static/img/image-20220420193327-2.png)

In addition, akaBot Vision provides users with the capability to add or remove rows in a table

* To insert a row, you can click "+" icon
* To delete a row, you can click "x" icon
* To add a new row at the end of the table, you can click on the "Add row" button

These features enable users to easily modify the table to meet their specific requirements.

![image-20230504160038-2.png](/static/img/image-20230504160038-2.png)

**More actions** ==

* Return to the main dashboard. The document status will then change back to ToReview.
* Confirm the document by clicking on the Confirm button. This will switch the document status to Confirmed.
* Postpone the document for later review. Such a document will have a postponed status and will be accessible in the Postponed tab.
* Delete the document. This will switch the document status to deleted.
* Reject the document. This will switch the document status to rejected.

## Use Keyboard Shortcuts

When reviewing documents in akaBot Vision, there are multiple ways of moving between data fields, confirming them, and editing them. Over time, operators find the most suitable way for them to review documents. In this article, we provide some tips on how to speed up the reviewing process using various keyboard shortcuts or tricks in the UI.

## Header Fields

TAB – move to the next field in the sequence.

ENTER – skip fields that have green and grey checkmarks displayed next to them and await your review.

## Table

TAB – move between fields in the direction from the beginning of a row to its end.

UP, DOWN, LEFT, RIGHT – you can use the arrows to move around the tablespace.
