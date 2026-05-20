---
id: operation-model
title: Operation Model
sidebar_label: Operation Model
sidebar_position: 2
description: Operation model of IDP in the context of automation processing.
displayed_sidebar: visionSidebar
---

# Operation Model
## Automation Processing
akaBot Vision (IDP) is designed with document processing automation in mind. The operation model of IDP in the context of automation processing is described below

![1694170289882-347.png](/static/img/1694170289882-347.png)

**Step 1 and 2:** Documents are collected from multiple document sources via RPA bot, API, or human effort then upload to the IDP system.

**Step 3:** IDP system will inform the user when there is a field with low confidence that need support from a human to correct or confirm.

**Step 4 and 5:** IDP system process the document and put the output in a ready queue. RPA bot, API, or human will download IDP output and then use that structured data to input to other enterprise systems.

## Operation Model
There are 3 modes to get output from the akaBot Vision system:

### 1. Single Invoice Processing Model: 
User uploads 1 specific document and only wants the output of that document. For this model, the user can follow 3 steps below:

- **Step 1:** User needs to import 1 specific document to the akaBot Vision by 1 of 4 ways: **Import Document manually**, **Import Documents Via Email**, **API Import Document** or **Activity Import Document**,
- **Step 2:** Get the document status by **API Get Document Status** or **Activity Get Document Status**, 
- **Step 3:** Export document that has "Confirmed" status by **API Export Document** or **Activity Export Document**

### 2. Manual Mass Invoice Processing Model:
User uses the GetDocument to get all documents that are ready then get them all you can set up a batch job to scan periodically and down completed document. This model is for mass processing where you input many files and then periodically check and get all ready files. For this mode, the user can follow 4 steps below:

- **Step 1:** The user needs to import a list of documents to akaBot Vision by 1 of 4 ways: **Import Document manually**, **Import Documents Via Email**, **API Import Document** or **Activity Import Document**,

- **Step 2:** Get the document status by **API Get Document Status** or **Activity Get Document Status**, 
- **Step 3:** Get a list of all documents with "Confirmed" status by **API Get Document** or **Activity Get Document** 
- **Step 4:** Export documents that have "Confirmed" status by **API Export Document** or **Activity Export Document**

### 3. Auto Mass Invoice Processing Model:  
The akaBot Vision will push output to your endpoint as soon as document is process successfully. This model is also for mass processing but smoothier where you don’t have to set up job to check and get file periodically. For this mode, the user can follow 2 steps below:

- **Step 1:** The user needs to import a list of documents to akaBot Vision by 1 of 4 ways: **Import Document manually**, **Import Documents Via Email**, **API Import Document** or **Activity Import Document**,

- **Step 2:** As soon as documents are changed to "Confirmed" status, akaBot Vision will automatically send a response containing documentId information, document Path, and extracted data to the user's server by **API Output**

Note: Most of the APIs in akaBot Vision are synchronous APIs. Only the API Import Document and API Output are asynchronous APIs
