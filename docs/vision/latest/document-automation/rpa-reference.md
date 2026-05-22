---
id: rpa-reference
title: IDP Activities Package
sidebar_label: RPA Activities
sidebar_position: 3
description: akaBot Studio activities for integrating Vision into RPA workflows.
displayed_sidebar: visionSidebar
---
# RPA Reference
## IDP Scope

IDP Activities belong to the IDP package in akaBot Studio - a component in the akaBot ecosystem.

When using these activities, you do not need to import files to akaBot Vision or export, change the status manually. There are 6 activities:

To connect akaBot Studio and akaBot Vision by API key.

* akaBot Vision: Going to Account/API Keys, generate and copy an API key.
* akaBot Studio: paste the key in the API key field of IDP Scope.

![image-20220420200751-1.png](/static/img/image-20220420200751-1.png)

### Import Document

To import files into the specified pipeline. There are 3 fields you need to focus on:

* File path: the file you want to import.
* Pipeline key: the pipeline that the file is imported to. The key is the ID of the pipeline.
* Document key: the ID of the imported file. This field will be used in other activities.

![image-20220420200751-2.png](/static/img/image-20220420200751-2.png)

### Export Document

To export file and change status if you want. There are 3 fields you need to focus on:

* Document key: the ID of the file you want to export. You can use this key from the import document activity.
* Extract type: you can choose DataTable/Json/XML format.
* Update status to exported: status is updated if the value is true, otherwise remains the status. You can check the status on akaBot Vision.

### Get Documents

Toget specific documents in the specific pipeline. There are 2 fields you need to focus on:

* Pipeline key: the ID of pipeline you want to get documents
* Status: the status you want to get

Ex: you can get all Confirmed documents at the pipeline having key 1.

### Get Document Status

To get specific document status. There are 2 field you need to focus on:

* Document key: the ID of document you want to get status

### Update Document Status

To change status to another one. There are 3 fields you need to focus on:

* Document key: the ID of the file you want to update. You can use this key from the import document activity.
* Update to status: Choose the status you want to update (IMPORTING, TOREVIEW, CONFIRMED, EXPORTED, DELETED, REJECTED)

### Example

Below are some examples of how to use IDP activities

* Import all the files in a folder to the pipeline that has Automation Type is Always, then export them and change the status.

![image-20220420201839-1.png](/static/img/image-20220420201839-1.png)

* Import all the files in a folder to a pipeline that has Automation Type is Confident, then export them and change the status.

![image-20220420201909-2.png](/static/img/image-20220420201909-2.png)
