---
id: get-bucket
title: "Get Bucket"
sidebar_label: "Get Bucket"
sidebar_position: 3
description: "Get Bucket activity documentation."
displayed_sidebar: activitiesSidebar
---
# Get Bucket

RCA.Activities.GoogleCloud.GCPGetBucket

## **Description**

Retrieves a Google Cloud Storage bucket by name.

![get-bucket](/static/img/get-bucket.png)

(\*For mandatory)

## **In the body of the activity**

* **Bucket Name** - The name of the bucket to retrieve.

## **Properties**

**Input**

* **Bucket Name**: `InArgument<String>`* - The bucket name.

**Misc**

* **Public (Checkbox)** - Check if you want to public the activity. Remember to consider data security requirement before using this property.

* **Display Name (String)** - The name of this activity. You can edit the name of the activity to organize and structure your code better.
  E.g: [3424325] Open Window

**Output**

* **Bucket**: `OutArgument<GCPBucket>` - The retrieved bucket.
