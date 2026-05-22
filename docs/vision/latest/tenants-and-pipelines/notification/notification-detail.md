---
id: notification-detail
title: Notification Detail
sidebar_label: Notification Detail
sidebar_position: 1
description: View and manage error notifications for documents and models.
displayed_sidebar: visionSidebar
---
# Notification Detail
Notification Details will show errors in the automation processes and Notificaiton Details is symboled by the ring icon which is next to Help button. There are 2 types of errors: Error Documents and Error Models

## 1. Error Documents

Documents which are defined as Error Documents will have these below conditions

* **Error Imported Documents**: When documents take more than 30 minutes to import to akaBot Vision, they will be moved to "Fail to Import" status and the system will list them in Error Documents
* **Error Processed Documents**: When documents are not identified invoices format, they will be defined as Error Processed Documents
* **Error Exported Documents**: When users export documents fail then they will be listed as Error Exported Documents. In addition, if pipeline use API Out and akaBot Vision can not connect to the API to send request. These documents will be defined as Error Exported Documents

For the Error Documents, users can view list of error documents and their errors. Moreover, user also can filter documents by Pipeline

![image-20221116102925-2.png](/static/img/image-20221116102925-2.png)

For the Error Imported Documents, akaBot Vision support users to re-import these documents by "Retry" function. Users just need to choose documents and then click "Retry"

![image-20221116104102-3.png](/static/img/image-20221116104102-3.png)

## 2. Error Models

When a trained model fails, it can be defined as an Error Model
