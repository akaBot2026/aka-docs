---
id: import-manually
title: Import Document Manually
sidebar_label: Import Manually
sidebar_position: 1
description: Upload documents to akaBot Vision through the web interface.
displayed_sidebar: visionSidebar
---

# Import Document Manually
When you send a document to the pipeline, akaBot Vision will immediately start to extract the data from it.

## Description

During this stage, the document has an importing status.

![image-20220420191058-1.png](/static/img/image-20220420191058-1.png)

In case something went wrong during the upload stage or later during the importing stage, the document will fail with a failed\_import status. This can happen, for example, when a document is too long, the document file is corrupted, or due to an internal processing error.

In case the license is expired, the document will fail with an invalid\_license status. You can retry to reprocess this document when renewing the license.

![image-20220420191111-2.png](/static/img/image-20220420191111-2.png)

## Split PDF into Multiple Documents

It is often convenient to process multiple documents stored in a single file. Most commonly, you would scan many documents at once in a scanner with an automatic feeder, resulting in a single file that combines all the scanned pages.

AkaBot Vision can split a file automatically using a special separator page. When you upload the file to akaBot Vision and Auto split at the Setting of that pipeline is on, the engine will automatically recognize these pages and multiple document entries will automatically appear in your Pipeline.

If Auto split at Setting of that pipeline is off, the imported file is not split into multiple files automatically. You can use the document slicing tool which can split the file into multiple documents as well.

* On the Validation screen, you will see a Split button on the right sight of the screen.

![image-20220420191243-3.png](/static/img/image-20220420191243-3.png)

* Clicking this button will bring up a Document editing screen where you will see the list of pages.

![image-20220420191243-4.png](/static/img/image-20220420191243-4.png)

* If you move the cursor between two consecutive pages a “split line” will appear

![image-20220420191243-5.png](/static/img/image-20220420191243-5.png)

* If you click, the document will split and you can see an updated list of pages.

![image-20220420191243-6.png](/static/img/image-20220420191243-6.png)

* When you are happy with the result, click the “tick” button in the upper right corner.

![image-20220420191243-7.png](/static/img/image-20220420191243-7.png)

**Note:** The original document will be removed and the new documents will appear in the pipeline. Those documents need to be reprocessed by AI engine which typically takes between 30 to 60 seconds.

**Note:** Find out more information about Batch file splitting suggestions available in the app.
